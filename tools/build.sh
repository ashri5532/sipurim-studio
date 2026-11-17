#!/usr/bin/env bash
# bash tools/build.sh <ep> <dur_seconds> [music=soft|noir]
# needs episodes/<ep>/{scenes.js,timeline.js,vo.mp3,sfx.wav}; writes episodes/<ep>/final.mp4 (<10MB)
set -euo pipefail; cd "$(dirname "$0")/.."; EP=$1; DUR=$2; MUS=${3:-soft}; PORT=8790
export NODE_PATH=$(npm root -g)
python3 -m http.server $PORT >/dev/null 2>&1 & SRV=$!; trap "kill $SRV" EXIT; sleep 1
rm -rf episodes/$EP/frames; mkdir -p episodes/$EP/frames
PIDS=(); for k in 0 1 2 3; do node tools/render.js $EP $k 4 $DUR $PORT & PIDS+=($!); done; wait "${PIDS[@]}"
FADE=$(python3 -c "print($DUR-1.5)")
ffmpeg -loglevel error -y -framerate 30 -i episodes/$EP/frames/%05d.jpg -itsoffset 0.3 -i episodes/$EP/vo.mp3 -stream_loop -1 -i assets/music_$MUS.wav -i episodes/$EP/sfx.wav \
 -filter_complex "[1:a]volume=1.6,apad[v];[2:a]volume=0.2,afade=t=out:st=$FADE:d=1.5[m];[3:a]volume=0.8[s];[v][m][s]amix=inputs=3:duration=first:normalize=0,alimiter=limit=0.95[a]" \
 -map 0:v -map "[a]" -c:v libx264 -crf 26 -preset slow -tune animation -pix_fmt yuv420p -c:a aac -b:a 160k -t $DUR -movflags +faststart episodes/$EP/final.tmp.mp4
mv episodes/$EP/final.tmp.mp4 episodes/$EP/final.mp4
SZ=$(stat -c%s episodes/$EP/final.mp4); echo "size=$SZ"
if [ $SZ -gt 9500000 ]; then ffmpeg -loglevel error -y -i episodes/$EP/final.mp4 -c:v libx264 -crf 30 -preset veryfast -tune animation -pix_fmt yuv420p -c:a copy episodes/$EP/f2.mp4 && mv episodes/$EP/f2.mp4 episodes/$EP/final.mp4; fi
echo "black segments: $(ffmpeg -hide_banner -i episodes/$EP/final.mp4 -vf blackdetect=d=0.2:pix_th=0.05 -an -f null - 2>&1 | grep -c black_start || true)"
rm -rf episodes/$EP/frames

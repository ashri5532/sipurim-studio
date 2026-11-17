#!/usr/bin/env bash
# bash tools/preview.sh <ep> t1 t2 ... (video seconds) -> episodes/<ep>/preview.jpg grid. LOOK at it before a full build.
set -euo pipefail; cd "$(dirname "$0")/.."; EP=$1; shift; PORT=8791; export NODE_PATH=$(npm root -g)
python3 -m http.server $PORT >/dev/null 2>&1 & SRV=$!; trap "kill $SRV" EXIT; sleep 1
mkdir -p episodes/$EP/frames; FR=(); for t in "$@"; do FR+=($(python3 -c "print(round($t*30))")); done
node tools/render.js $EP 0 1 999 $PORT "${FR[@]}"
python3 - "$EP" "${FR[@]}" <<'PY'
import sys;from PIL import Image
ep=sys.argv[1];fr=sys.argv[2:];ims=[Image.open(f'episodes/{ep}/frames/{int(f):05d}.jpg').resize((270,480)) for f in fr]
c=Image.new('RGB',(270*min(6,len(ims)),480*((len(ims)+5)//6)))
for i,im in enumerate(ims):c.paste(im,((i%6)*270,(i//6)*480))
c.save(f'episodes/{ep}/preview.jpg',quality=85)
PY
rm -rf episodes/$EP/frames; echo episodes/$EP/preview.jpg

# python3 tools/align.py episodes/<ep>/vo.mp3  -> speech segments (start,end) to map onto script sentences for CH in timeline.js
import subprocess,re,sys
f=sys.argv[1];o=subprocess.run(['ffmpeg','-hide_banner','-i',f,'-af','silencedetect=n=-35dB:d=0.25','-f','null','-'],capture_output=True,text=True).stderr
dur=float(re.search(r'Duration: (\d+):(\d+):([\d.]+)',o).groups()[2])+60*int(re.search(r'Duration: (\d+):(\d+)',o).group(2))
ss=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',o)];se=[float(x) for x in re.findall(r'silence_end: ([\d.]+)',o)]
segs=[];cur=0.0
for a,b in zip(ss,se+[dur]):
    if a-cur>0.05:segs.append((round(cur,2),round(a,2)))
    cur=b
if dur-cur>0.05:segs.append((round(cur,2),round(dur,2)))
print('duration',round(dur,2));[print(i,a,b) for i,(a,b) in enumerate(segs)]

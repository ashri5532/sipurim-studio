# python3 tools/sfx.py episodes/<ep>/sfx.json  -> episodes/<ep>/sfx.wav
# sfx.json: {"dur":58.3,"cues":[["whoosh",3.0],["coin",10.6],["ding",25.8],["boom",36.2],["stamp",9.0],["door",28.3],["coins",26.0]]}
# times are VIDEO times (VO offset 0.3 already included by you). Put a whoosh ~0.1s before every scene change.
import numpy as np,wave,json,sys,os
cfg=json.load(open(sys.argv[1]));sr=44100;n=int(sr*cfg['dur']);x=np.zeros(n);rng=np.random.default_rng(41)
def tt(d):return np.arange(int(sr*d))/sr
def whoosh(d=.45,a=.18):
    t=tt(d);nz=rng.standard_normal(len(t));k=np.ones(200)/200;nz=nz-np.convolve(nz,k,'same');return a*nz*np.sin(np.pi*t/d)**2
def coin(a=.25,d=.9):t=tt(d);return a*(np.sin(2*np.pi*1568*t)+.6*np.sin(2*np.pi*2093*t))*np.exp(-t*6)
def boom(d=1.4,f=50,a=.8):t=tt(d);return a*np.sin(2*np.pi*(f*t-9*t*t))*np.exp(-t*3.5)+.25*a*rng.standard_normal(len(t))*np.exp(-t*30)
def ding(a=.25):t=tt(.5);return a*(np.sin(2*np.pi*1046*t)+np.sin(2*np.pi*1568*t))*np.exp(-t*8)
def stamp(a=.7):t=tt(.3);return a*np.sin(2*np.pi*(90*t-80*t*t))*np.exp(-t*25)+.4*a*rng.standard_normal(len(t))*np.exp(-t*50)
def door(a=.3,d=1.0):t=tt(d);f=140+60*t/d;return a*np.sin(2*np.pi*np.cumsum(f)/sr)*(.5+.5*np.sin(2*np.pi*20*t))*np.minimum(1,t/.1)*np.minimum(1,(d-t)/.2)
def tick(a=.3):t=tt(.08);return a*np.sin(2*np.pi*2000*t)*np.exp(-t*60)
def add(t0,s):
    i=int(t0*sr);j=min(n,i+len(s))
    if i<n:x[i:j]+=s[:j-i]
for name,t in cfg['cues']:
    if name=='coins':
        for i in range(6):add(t+i*.12,coin(.15,.5))
    else:add(t,{'whoosh':whoosh,'coin':coin,'boom':boom,'ding':ding,'stamp':stamp,'door':door,'tick':tick}[name]())
x=np.tanh(x);out=os.path.join(os.path.dirname(sys.argv[1]),'sfx.wav')
w=wave.open(out,'w');w.setnchannels(1);w.setsampwidth(2);w.setframerate(sr);w.writeframes((x*30000).astype('<i2').tobytes());w.close();print('wrote',out)

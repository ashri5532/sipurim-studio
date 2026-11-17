const SC={};
// ===== props for this episode =====
function siren(t,a){const ph=Math.sin(t*9)>0;glow(ph?120:960,300,700,ph?'rgba(255,40,60,A)':'rgba(40,110,255,A)',(a??1)*.45)}
function street(t){sky('#05070f','#101a33');stars(t);city(t);X.fillStyle='#1a1e28';X.fillRect(-200,GY,W+400,420);X.fillStyle='#e8e8e8';for(let i=0;i<6;i++)X.fillRect(i*220-((t*0)%220),GY+170,120,14)}
function cap(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#14264d';rr(-60,-458,120,58,18);X.fill();X.fillRect(-72,-412,144,14);X.fillStyle='#ffd34d';X.beginPath();X.arc(0,-432,11,0,7);X.fill();X.restore()}
const COP=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#1f3b73',pants:'#14264d',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);cap(x,y,s);X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#ffd34d';rr(14,-270,22,26,5);X.fill();X.restore()};
const BFF=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#c0392b',skin:SKINS[1],hair:'#111',ex:ex},o||{}),t);
function trafficLight(x,y,s,state){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#2b2b2b';X.fillRect(-10,0,20,700);X.fillStyle='#151515';rr(-70,-300,140,320,24);X.fill();
 [['#ff2b2b',-230,state==='r'],['#ffb020',-140,state==='y'],['#2bff6a',-50,state==='g']].forEach(c=>{X.fillStyle=c[2]?c[0]:'#3a3a3a';X.beginPath();X.arc(0,c[1],38,0,7);X.fill();if(c[2])glow(0,c[1],160,c[0]==='#ff2b2b'?'rgba(255,40,40,A)':'rgba(40,255,100,A)',.5)});X.restore()}
function sideCar(x,y,s,c,win){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=c||'#f0f0f0';rr(-330,-170,660,130,40);X.fill();X.beginPath();X.moveTo(-200,-168);X.lineTo(-130,-290);X.lineTo(150,-290);X.lineTo(230,-168);X.closePath();X.fill();
 X.fillStyle='#0b1220';X.beginPath();X.moveTo(-180,-178);X.lineTo(-122,-276);X.lineTo(10,-276);X.lineTo(10,-178);X.closePath();X.fill();X.beginPath();X.moveTo(30,-178);X.lineTo(30,-276);X.lineTo(142,-276);X.lineTo(208,-178);X.closePath();X.fill();
 if(win!=null){X.fillStyle='rgba(120,170,220,.55)';X.beginPath();X.rect(30,-276+98*win,178,98*(1-win));X.fill()}
 X.fillStyle='#ffe9a0';rr(300,-150,30,30,8);X.fill();X.fillStyle='#ff4040';rr(-330,-150,24,30,8);X.fill();X.fillStyle='#111';[-200,200].forEach(w=>{X.beginPath();X.arc(w,-40,56,0,7);X.fill();X.fillStyle='#888';X.beginPath();X.arc(w,-40,24,0,7);X.fill();X.fillStyle='#111'});X.restore()}
function policeCar(x,y,s,t){sideCar(x,y,s,'#e9eef5');X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#1d4fbf';X.fillRect(-330,-120,660,30);X.font='900 44px Heebo';X.fillStyle='#1d4fbf';X.direction='rtl';X.textAlign='center';X.fillText('משטרה',-60,-60+0);
 const ph=Math.sin(t*9)>0;X.fillStyle=ph?'#ff2b3b':'#5a1016';rr(-60,-320,60,30,8);X.fill();X.fillStyle=ph?'#183a7a':'#2b6bff';rr(0,-320,60,30,8);X.fill();X.restore()}
function phoneBox(x,y,s,rot){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.fillStyle='#f4f4f4';rr(-70,-45,140,90,10);X.fill();X.strokeStyle='#bbb';X.lineWidth=3;X.stroke();X.fillStyle='#222';rr(-22,-34,44,68,8);X.fill();X.fillStyle='#4aa3ff';rr(-17,-28,34,54,5);X.fill();X.restore()}
function radio(x,y,s,t,on){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#111';X.fillRect(40,-330,22,140);X.fillStyle='#2a2a2a';rr(-110,-200,220,400,30);X.fill();X.fillStyle='#3a3a3a';for(let i=0;i<6;i++)rr(-80,-170+i*28,160,14,7),X.fill();
 X.fillStyle=on&&Math.sin(t*14)>0?'#ff3b3b':'#5a1a1a';X.beginPath();X.arc(70,-240,16,0,7);X.fill();X.fillStyle='#9fffb0';rr(-80,20,160,70,10);X.fill();X.fillStyle='#0a3a12';X.font='900 40px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.fillText('CH 3',0,56);
 if(on){X.strokeStyle='rgba(255,255,255,.6)';X.lineWidth=8;for(let i=1;i<=3;i++){const r=60*i+((t*120)%60);X.globalAlpha=1-i/4;X.beginPath();X.arc(0,-40,140+r,-.6,.6);X.stroke();X.beginPath();X.arc(0,-40,140+r,Math.PI-.6,Math.PI+.6);X.stroke()}X.globalAlpha=1}X.restore()}
function quote(txt,y,sz,k,col){if(k<=0)return;X.save();X.globalAlpha=k;X.translate(540,y);X.scale(L(.85,1,k),L(.85,1,k));X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=Math.min(1000,X.measureText(txt).width+sz*1.4);X.fillStyle='rgba(10,14,28,.9)';rr(-w/2,-sz,w,sz*2,24);X.fill();X.strokeStyle=col||'#fff';X.lineWidth=4;X.stroke();X.fillStyle=col||'#fff';X.fillText(txt,0,4);X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#0a1640');g.addColorStop(1,'#03050f');X.fillStyle=g;X.fillRect(0,0,W,H);
 for(let i=0;i<24;i++){X.fillStyle=i%2?(Math.sin(t*9)>0?'rgba(255,50,70,.10)':'rgba(50,120,255,.12)'):'rgba(0,0,0,0)';X.beginPath();X.moveTo(540,1150);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,1150+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,1150+Math.sin(b)*2500);X.closePath();X.fill()}
 siren(t,.9);SEED=5;for(let i=0;i<9;i++)phoneBox(80+R()*920,830+R()*260+Math.sin(t*3+i)*12,1.1,(R()-.5)*1.2);
 COP(250,1860,1.55,'shock',t,{look:1,sweat:true,armR:-.5});BFF(830,1860,1.55,'worried',t,{look:-1,armL:2.7,armR:-2.7});host(540,1880,1.25,{ex:'cool',talk:true},t);
 pill('עצרת רכב באמצע הלילה...',540,260,44,'rgba(0,0,0,.65)','#9ec1ff','#9ec1ff');bigText(['והנהג הוא','החבר הכי טוב שלך'],420,100,'#fff')};
SC.night=(t,d)=>{street(t);policeCar(540,GY+40,1.25,t);clockBadge('02:00',540,520,1.2);if(d>.2){const k=E((d-.2)/.4);X.save();X.globalAlpha=k;pill('משמרת ראשונה. לבד.',540,760,50,'rgba(0,0,0,.7)','#fff');X.restore()}};
SC.redlight=(t,d)=>{street(t);trafficLight(860,620,1.2,'r');const cx=L(-450,1400,cl((d-.3)/3.2));sideCar(cx,GY+60,1.0,'#f5f5f5');
 if(d>2.4){siren(t,E((d-2.4)/.3));policeCar(L(-400,230,E((d-2.4)/1.2)),GY+120,1.0,t)}if(d<2.4)pill('אדום',860,250,54,'#ff2b2b','#fff')};
SC.window=(t,d)=>{street(t);siren(t,.6);sideCar(540,GY+80,1.8,'#f5f5f5',E((d-.2)/1.0));
 if(d>.8){X.save();X.beginPath();X.rect(540+30*1.8,GY+80-276*1.8,178*1.8,98*1.8);X.clip();BFF(700,GY+80+60,1.3,d>2.6?'smile':'neutral',t,{look:-1});X.restore()}
 if(d>2.8){const k=E((d-2.8)/.4);X.save();X.globalAlpha=k;tag('איתי',700,560,80,'#ffd34d');X.restore()}};
SC.friend=(t,d)=>{street(t);siren(t,.5);X.fillStyle='rgba(0,0,0,.3)';X.fillRect(0,0,W,H);const sh=d>2.6?Math.sin(t*40)*.12:0;
 BFF(540,2080,2.1,'smile',t,{armL:.5+sh,armR:-.5-sh,sweat:d>2.6});pill('החבר הכי טוב · מכיתה א׳',540,320,48,'rgba(0,0,0,.75)','#ffd34d','#ffd34d');
 if(d>2.8){const k=E((d-2.8)/.4);X.save();X.globalAlpha=k;pill('הידיים רועדות',540,500,46,'#c0392b','#fff');X.restore()}};
SC.backseat=(t,d)=>{X.fillStyle='#14161d';X.fillRect(0,0,W,H);X.fillStyle='#2b2f3d';rr(60,700,960,900,60);X.fill();X.fillStyle='#363b4d';rr(90,640,900,260,50);X.fill();glow(540,500,600,'rgba(255,240,200,A)',.12);
 const n=Math.floor(20*E((d-2.2)/1.6));SEED=21;for(let i=0;i<20;i++){const px=230+(i%5)*155,py=1430-Math.floor(i/5)*95,rt=(R()-.5)*.2;if(i<n)phoneBox(px,py,1.0,rt)}
 if(d>2.2){tag(String(Math.max(1,n))+' טלפונים',540,350,70,'#9ec1ff')}
 if(d>5.1){const k=E((d-5.1)/.3);X.save();X.translate(540,1100);X.rotate(-.18);X.scale(L(1.6,1,k),L(1.6,1,k));X.globalAlpha=k;X.strokeStyle='#e8212e';X.lineWidth=16;rr(-300,-90,600,180,20);X.stroke();X.fillStyle='#e8212e';X.font='900 100px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('בלי קבלה',0,8);X.restore()}};
SC.whisper=(t,d)=>{X.fillStyle='#0d1020';X.fillRect(0,0,W,H);siren(t,.35);X.fillStyle='rgba(0,0,0,.35)';X.fillRect(0,0,W,H);BFF(540,2350,2.8,'worried',t,{look:0,sweat:true});
 quote('״שכר הדירה של אמא עלה״',360,54,E((d-1.1)/.4));if(d>4.1)quote('״עוד חודש מפנים אותה״',560,54,E((d-4.1)/.4),'#ffd34d');if(d>5.7)quote('״תן לי לנסוע״',760,70,E((d-5.7)/.3),'#ff6b6b')};
SC.radio=(t,d)=>{X.fillStyle='#0b0d16';X.fillRect(0,0,W,H);siren(t,.4);radio(540,1250,1.5,t,d>.3);pill('הקשר מתעורר',540,300,52,'rgba(0,0,0,.7)','#9fffb0','#9fffb0');
 if(d>2.4){const k=E((d-2.4)/.4);X.save();X.globalAlpha=k;tag('פריצה לחנות סלולר',540,500,64,'#ff6b6b');X.restore()}if(d>4.4){const k=E((d-4.4)/.4);X.save();X.globalAlpha=k;pill('3 רחובות מכאן',540,680,50,'#ffd34d','#111');X.restore()}};
SC.stare=(t,d)=>{street(t);siren(t,.8);X.fillStyle='rgba(0,0,0,.35)';X.fillRect(0,0,W,H);const z=L(1,1.12,EIO(d/3));X.save();zoomCam(d/3,1,1.12,540,1100);
 COP(290,1640,1.5,'worried',t,{look:1});BFF(790,1640,1.5,'worried',t,{look:-1,sweat:true});X.restore();X.strokeStyle='rgba(255,255,255,.3)';X.lineWidth=6;X.setLineDash([16,14]);X.beginPath();X.moveTo(540,300);X.lineTo(540,1500);X.stroke();X.setLineDash([]);
 if(d>.1){const k=E((d-.1)/.4);X.save();X.globalAlpha=k;pill('הוא שמע הכל',540,330,52,'rgba(0,0,0,.75)','#fff');X.restore()}};
SC.choice=(t,d)=>{sky('#05070f','#101a33');stars(t);siren(t,.25);const k=E(d/.4);X.save();X.globalAlpha=k;bigText(['מה אתה עושה?'],330,100,'#fff');
 const pulse=1+.04*Math.sin(t*6);X.save();X.translate(780,760);X.scale(pulse,pulse);X.fillStyle='#1d4fbf';rr(-230,-170,460,340,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('1',0,-50);X.font='900 56px Heebo';X.direction='rtl';X.fillText('עוצר אותו',0,90);X.restore();
 X.save();X.translate(300,760);X.scale(2-pulse,2-pulse);X.fillStyle='#8a1a1a';rr(-230,-170,460,340,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('2',0,-50);X.font='900 50px Heebo';X.direction='rtl';X.fillText('נותן לו לנסוע',0,90);X.restore();
 bigText(['כתבו 1 או 2','בתגובות 👇'],1060,76,'#ffd34d');X.restore();host(540,1660,.95,{ex:d>5.9?'smile':'cool',talk:d<1.1||(d>5.9&&d<9.2),pose:d>1.5&&d<5.5?'point':null},t)};
SC.tag=(t,d)=>{sky('#05070f','#101a33');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהיה נותן לכם לנסוע 👇'],600,84,'#fff');X.restore();host(540,1700,1.35,{ex:'smile',pose:'shrug'},t)};
SC.follow=(t,d)=>{sky('#05070f','#101a33');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['לעוד סיפורים כאלה'],1110,62,'#fff');X.restore();host(540,1870,1.2,{ex:'cool',pose:'wave'},t)};

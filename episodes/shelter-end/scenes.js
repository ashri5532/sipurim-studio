const SC={};
// ---- palette / backgrounds ----
const stairBg=(red)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,red?'#3a0d14':'#1d1a2b');g.addColorStop(.78,red?'#5a1620':'#2c2840');g.addColorStop(.78,'#17131f');g.addColorStop(1,'#0b0910');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400);
 // stairs going up on the right
 X.fillStyle=red?'rgba(255,90,90,.10)':'rgba(255,255,255,.05)';for(let i=0;i<9;i++){X.fillRect(640+i*50,GY-60-i*60,500,60)}
 X.strokeStyle=red?'rgba(255,120,120,.35)':'rgba(255,255,255,.18)';X.lineWidth=8;X.beginPath();X.moveTo(640,GY-180);X.lineTo(1100,GY-720);X.stroke();
 // wall lamp
 glow(260,520,260,red?'rgba(255,60,60,A)':'rgba(255,210,120,A)',.35);X.fillStyle=red?'#ff6b6b':'#ffd38a';rr(230,500,60,40,10);X.fill()};
function sirenFlash(t,amt){const a=(.5+.5*Math.sin(t*9))*amt;X.fillStyle=`rgba(255,30,40,${.28*a})`;X.fillRect(0,0,W,H)}
function shelterDoor(x,y,s,open,t,glowA){X.save();X.translate(x,y);X.scale(s,s);
 X.fillStyle='#262a30';rr(-200,-620,400,620,14);X.fill();
 if(glowA){glow(0,-310,420,'rgba(150,200,255,A)',glowA);}
 X.fillStyle='#05070b';X.fillRect(-170,-590,340,590);
 if(open>0){glow(0,-300,260,'rgba(170,220,255,A)',.6*open)}
 X.save();X.translate(-170,0);X.scale(1-open*.85,1);X.fillStyle='#6f7d73';rr(0,-590,340,590,10);X.fill();X.strokeStyle='#4d5850';X.lineWidth=10;rr(20,-570,300,550,10);X.stroke();
 X.translate(170,-300);X.rotate((t||0)*0);X.strokeStyle='#c9d3cc';X.lineWidth=14;X.beginPath();X.arc(0,0,70,0,7);X.stroke();for(let i=0;i<3;i++){X.save();X.rotate(i*2.094);X.beginPath();X.moveTo(0,0);X.lineTo(0,-70);X.stroke();X.restore()}X.restore();
 X.fillStyle='#ffd34d';rr(-110,-700,220,64,12);X.fill();X.fillStyle='#111';X.font='900 46px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('מקלט',0,-666);X.restore()}
function cap(x,y,s,col){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=col||'#7a4a1e';X.beginPath();X.ellipse(0,-410,62,34,0,Math.PI,0);X.fill();X.fillRect(-62,-414,124,10);X.beginPath();X.ellipse(48,-408,46,10,0,0,7);X.fill();X.restore()}
function bubble(txt,x,y,sz,k,tail){if(k<=0)return;X.save();X.globalAlpha=cl(k);X.translate(x,y);X.scale(L(.7,1,BK(k)),L(.7,1,BK(k)));X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';
 const lines=Array.isArray(txt)?txt:[txt];const w=Math.max(...lines.map(l=>X.measureText(l).width))+sz*1.4,h=lines.length*sz*1.25+sz*.9;
 X.fillStyle='#fff';rr(-w/2,-h/2,w,h,36);X.fill();X.beginPath();X.moveTo((tail||0)-30,h/2-4);X.lineTo((tail||0)+30,h/2-4);X.lineTo((tail||0)*1.6,h/2+60);X.closePath();X.fill();
 X.fillStyle='#111';lines.forEach((l,i)=>X.fillText(l,0,-h/2+sz*.45+sz*.62+i*sz*1.25));X.restore()}
function backpack(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#e84393';rr(-90,-120,180,220,40);X.fill();X.fillStyle='#c2185b';rr(-70,10,140,80,20);X.fill();X.strokeStyle='#c2185b';X.lineWidth=14;X.beginPath();X.arc(0,-120,46,Math.PI,0);X.stroke();X.fillStyle='#ffd34d';X.beginPath();X.arc(0,-40,22,0,7);X.fill();X.restore()}
function beret(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#4e5b31';rr(-110,-90,220,200,30);X.fill();X.fillStyle='#3b4625';X.fillRect(-110,-20,220,20);X.fillStyle='#7a2a8c';X.beginPath();X.ellipse(0,-120,90,40,-.15,0,7);X.fill();X.fillStyle='#ffd34d';X.beginPath();X.arc(-40,-120,12,0,7);X.fill();X.restore()}
function rays(c1,c2,cx,cy,t){X.fillStyle=c2;X.fillRect(0,0,W,H);for(let i=0;i<28;i++){if(i%2)continue;X.fillStyle=c1;X.beginPath();X.moveTo(cx,cy);const a=i/28*Math.PI*2+t*.08,b=(i+1)/28*Math.PI*2+t*.08;X.lineTo(cx+Math.cos(a)*2600,cy+Math.sin(a)*2600);X.lineTo(cx+Math.cos(b)*2600,cy+Math.sin(b)*2600);X.closePath();X.fill()}}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',pants:'#2c3e50',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const voteCard=(x,y,col,num,txt,sc)=>{X.save();X.translate(x,y);X.scale(sc,sc);X.fillStyle=col;rr(-240,-180,480,360,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.fillText(num,0,-60);X.font='900 50px Heebo';X.direction='rtl';const ls=txt.split('|');ls.forEach((l,i)=>X.fillText(l,0,60+i*60-(ls.length-1)*30));X.restore()};
const DAD=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#c98a2b',pants:'#5a3d22',skin:'#e8b98f',hair:'#2b1d14',ex:ex},o||{}),t);cap(x,y,s,'#7a4a1e')};
const MOM=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#7d4a8a',pants:'#3b2a45',skin:'#f2c29a',hair:'#d8d8d8',long:true,ex:ex},o||{}),t);

// ---- new helpers (finale) ----
const warmBg=()=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#ffe7b8');g.addColorStop(.78,'#f6b26b');g.addColorStop(.78,'#a8643a');g.addColorStop(1,'#6e3d22');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400);
 X.fillStyle='rgba(255,255,255,.12)';for(let i=0;i<9;i++){X.fillRect(640+i*50,GY-60-i*60,500,60)}glow(260,520,320,'rgba(255,255,220,A)',.55)};
const KID=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',pants:'#2c3e50',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const YMOM=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#e84393',pants:'#3b2a45',skin:'#f2c29a',hair:'#1a120c',long:true,ex:ex},o||{}),t);
function comment(txt,x,y,k){if(k<=0)return;X.save();X.globalAlpha=cl(k);X.translate(x+(1-E(k))*120,y);X.font='700 46px Heebo';X.direction='rtl';X.textAlign='right';X.textBaseline='middle';const w=X.measureText(txt).width+150;
 X.fillStyle='rgba(255,255,255,.95)';rr(-w/2,-50,w,100,50);X.fill();X.fillStyle='#fe2c55';X.beginPath();X.arc(w/2-50,0,30,0,7);X.fill();X.fillStyle='#111';X.fillText(txt,w/2-96,3);X.restore()}
function cup(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#fff';rr(-90,-120,180,150,30);X.fill();X.strokeStyle='#fff';X.lineWidth=22;X.beginPath();X.arc(100,-50,40,-1.4,1.4);X.stroke();X.fillStyle='#6b3e1f';X.beginPath();X.ellipse(0,-118,80,16,0,0,7);X.fill();
 X.strokeStyle='rgba(255,255,255,.7)';X.lineWidth=10;X.lineCap='round';for(let i=-1;i<=1;i++){X.beginPath();for(let k=0;k<12;k++){const yy=-150-k*14,xx=i*40+Math.sin(t*3+k*.6+i)*14;k?X.lineTo(xx,yy):X.moveTo(xx,yy)}X.stroke()}X.restore()}
function board(x,y,s,k){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#8a5a2b';rr(-360,-300,720,600,24);X.fill();X.fillStyle='#c79a5a';rr(-330,-270,660,540,14);X.fill();
 X.fillStyle='#fffbe8';X.save();X.rotate(-.04);rr(-260,-210,520,420,8);X.fill();X.fillStyle='#e8212e';X.beginPath();X.arc(0,-190,16,0,7);X.fill();
 X.fillStyle='#333';X.font='700 46px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('ועד הבית',0,-120);X.font='700 34px Heebo';X.fillText('נא לשמור על ניקיון המקלט',0,-50);
 X.globalAlpha=cl(k);X.fillStyle='#e8212e';X.font='900 140px Heebo';X.direction='ltr';X.fillText('1993',0,90);X.restore();X.restore()}
function hand(x,y,s,col,ghost){X.save();X.translate(x,y);X.scale(s,s);if(ghost){X.setLineDash([18,14]);X.strokeStyle='rgba(255,255,255,.55)';X.lineWidth=6}else X.fillStyle=col;
 const sh=(f)=>{if(ghost){f();X.stroke()}else{f();X.fill()}};sh(()=>rr(-90,-110,180,200,60));[-66,-22,22,66].forEach((fx,i)=>sh(()=>rr(fx-20,-230+(i%3?0:30),40,140,20)));sh(()=>{X.save();X.translate(-90,-20);X.rotate(-.7);rr(-20,-90,40,110,20);X.restore()});X.restore()}

// ---- scenes ----
SC.cover=(t,d)=>{rays('rgba(125,211,255,.16)','#0a1a2a',540,1100,t);shelterDoor(540,1500,1.0,.7,t,.55);
 glow(540,1050,520,'rgba(255,230,160,A)',.35+.1*Math.sin(t*5));
 MOM(270,1580,1.15,'shock',t,{look:1});ME(540,1600,1.25,'shock',t,{armL:2.5,armR:-2.5,sweat:true});DAD(810,1580,1.2,'worried',t,{look:-1});
 pill('המקלט · הסוף',540,280,54,'#ffd34d','#111');bigText(['ירדנו','שלושתנו'],430,130,'#fff');tag('יוצאים ב-1993?',540,690,50,'#7dd3ff')};
SC.vote=(t,d)=>{sky('#14102a','#2a1838');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;
 const n=Math.round(57*E(cl((d-.2)/1.4)));X.save();X.font='900 330px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.lineJoin='round';X.lineWidth=22;X.strokeStyle='rgba(0,0,0,.6)';X.strokeText(n+'%',540,620);X.fillStyle='#7dffb0';X.fillText(n+'%',540,620);X.restore();
 bigText(['מכם בחרתם'],860,90,'#fff');if(d>3.8){const q=BK((d-3.8)/.4);X.save();X.translate(540,1060);X.scale(q,q);X.fillStyle='#14a44d';rr(-330,-90,660,180,40);X.fill();X.fillStyle='#fff';X.font='900 76px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('1 = יורד איתו',0,6);X.restore()}
 comment('שאמא תרד גם',540,1290,(d-5.4)/.35);comment('3 שאמא שלו תבוא גם',540,1420,(d-6.9)/.35);
 pill('חלק 3 · התוצאות',540,260,44,'rgba(0,0,0,.6)','#ffd34d','#ffd34d');X.restore()};
SC.siren=(t,d)=>{stairBg(true);city(t);sirenFlash(t,1);
 {const k=BK((d-.1)/.35);X.save();X.translate(540,640);X.scale(k,k);X.fillStyle='#e8212e';rr(-330,-110,660,220,40);X.fill();X.fillStyle='#fff';X.font='900 130px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('אזעקה',0,8);X.restore()}
 pill('אז ככה זה נגמר',540,330,50,'rgba(0,0,0,.7)','#fff');DAD(400,1600,1.3,'worried',t,{look:1});ME(700,1600,1.3,'shock',t,{look:-1})};
SC.door=(t,d)=>{stairBg(true);sirenFlash(t,.8);const o=E(cl(d/1.6))*.75;shelterDoor(780,1520,1.05,o,t,.2);
 DAD(560,1560,1.25,'worried',t,{look:1,armR:-1.3,armL:.9});ME(300,1560,1.2,'worried',t,{look:-1,armR:-.9});
 if(d>.5){const k=E((d-.5)/.4);X.save();X.globalAlpha=k;tag('הדלת נפתחת',780,700,46,'#7dd3ff');X.restore()}
 if(d>1.6){const k=E((d-1.6)/.5);X.save();X.globalAlpha=k;X.strokeStyle='#ffd34d';X.lineWidth=8;X.setLineDash([16,12]);X.beginPath();X.arc(430,1290,60,0,7);X.stroke();X.restore()}};
SC.alone=(t,d)=>{stairBg(true);sirenFlash(t,.5);X.fillStyle='rgba(0,0,0,.3)';X.fillRect(0,0,W,H);MOM(540,1620,1.5,'worried',t);
 if(d>.3){const k=E((d-.3)/.4);X.save();X.globalAlpha=k;bigText(['לבד בחדר','המדרגות'],360,104,'#fff');X.restore()}
 if(d>2.5){const k=BK((d-2.5)/.4);X.save();X.translate(540,620);X.scale(k,k);pill('שוב.',0,0,72,'#e8212e','#fff');X.restore()}};
SC.run=(t,d)=>{stairBg(true);sirenFlash(t,.6);const x=L(120,640,E(cl((d-3.8)/1.2)));
 shelterDoor(900,1520,.9,.75,t,.25);MOM(x,1600,1.35,d>3.8?'shock':'worried',t,{walk:d>3.8,look:1,armR:d>3.8?-1.4:-.12});
 if(d>.2){const k=E((d-.2)/.4);X.save();X.globalAlpha=k;bigText(['משהו שלא עשתה','33 שנה'],380,92,'#fff');X.restore()}
 if(d>4.1){const k=BK((d-4.1)/.35);X.save();X.translate(540,720);X.scale(k,k);pill('היא רצה.',0,0,80,'#ffd34d','#111');X.restore()}};
SC.enter=(t,d)=>{stairBg(true);sirenFlash(t,.5);const cls=E(cl((d-3.4)/.7));shelterDoor(540,1500,1.3,.85*(1-cls),t,.3+.3*(1-cls));
 const slide=E(cl((d-.4)/2.4)),a=1-E(cl((d-2.6)/.8));X.save();X.globalAlpha=a;const s=L(1.05,.6,slide),yy=L(1600,1460,slide);
 MOM(L(200,430,slide),yy,s,'worried',t,{walk:true,armR:-.9});ME(L(540,540,slide),yy,s,'worried',t,{walk:true,armL:.9,armR:-.9});DAD(L(880,650,slide),yy,s,'worried',t,{walk:true,armL:.9});X.restore();
 if(d>1.1){const k=E((d-1.1)/.4);X.save();X.globalAlpha=k*(1-cls*.0);pill('שלושתנו',540,330,64,'#7dd3ff','#111');X.restore()}
 if(d>3.6){X.save();X.globalAlpha=cl((d-3.6)/.3);bigText(['הדלת נסגרת'],560,96,'#fff');X.restore()}};
SC.dark=(t,d)=>{X.fillStyle='#000';X.fillRect(0,0,W,H);
 if(d>.1){X.save();X.globalAlpha=cl((d-.1)/.3)*.85;bigText(['חושך.'],560,110,'#9aa4b8');X.restore()}
 if(d>1.2){X.save();X.globalAlpha=cl((d-1.2)/.3)*.85;bigText(['שקט.'],760,110,'#9aa4b8');X.restore()}
 if(d>2.2){X.save();X.globalAlpha=cl((d-2.2)/.3);const s=Math.floor(L(600,0,cl((d-2.2)/1.2)));clockBadge(String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0'),540,1060,1);X.restore()}};
SC.open=(t,d)=>{X.fillStyle='#000';X.fillRect(0,0,W,H);const o=E(cl((d-.9)/1.2));
 glow(540,960,L(100,1600,o),'rgba(255,236,190,A)',L(.2,1,o));if(o>.6){X.fillStyle=`rgba(255,240,205,${(o-.6)*1.6})`;X.fillRect(0,0,W,H)}
 shelterDoor(540,1520,1.3,o*.85,t,0);
 if(d>2.4){X.save();X.globalAlpha=cl((d-2.4)/.4);bigText(['אור של בוקר'],420,100,'#7a3d12');X.restore()}
 if(d>3.6){const k=BK((d-3.6)/.4);X.save();X.globalAlpha=cl(k);cup(840,760,k*.9,t);X.restore();pill('ריח של קפה',540,600,50,'rgba(122,61,18,.9)','#fff')}};
SC.board=(t,d)=>{warmBg();board(540,880,1.2,E(cl((d-1.9)/.5)));
 if(d>1.9){const k=E((d-1.9)/.4);X.save();X.globalAlpha=k;bigText(['השנה:'],400,90,'#7a3d12');X.restore()}};
SC.young=(t,d)=>{warmBg();DAD(330,1600,1.35,'smile',t,{look:1,armL:.5,armR:-.5});YMOM(760,1600,1.35,'smile',t,{look:-1});
 if(d>.3){X.save();X.globalAlpha=cl((d-.3)/.3);tag('אבא · 25',330,770,46,'#7a3d12');X.restore()}
 if(d>2.6){const k=BK((d-2.6)/.4);X.save();X.globalAlpha=cl(k);tag('השיער שלה שחור',760,770,46,'#e84393');X.restore()}
 if(d>1.3){X.save();X.globalAlpha=cl((d-1.3)/.3);bigText(['הם צוחקים'],400,100,'#fff');X.restore()}};
SC.hands=(t,d)=>{warmBg();X.fillStyle='rgba(0,0,0,.15)';X.fillRect(0,0,W,H);const sh=E(cl((d-2.4)/1));
 hand(330,1250,1.6,'',true);hand(750,1250,1.6,'',true);hand(330,L(1250,1300,sh),L(1.6,.85,sh),'#f2c29a');hand(750,L(1250,1300,sh),L(1.6,.85,sh),'#f2c29a');
 if(d>2.6){X.save();X.globalAlpha=cl((d-2.6)/.3);bigText(['הן קטנות'],520,110,'#fff');X.restore()}
 if(d>3.6){const k=BK((d-3.6)/.4);X.save();X.translate(540,720);X.scale(k,k);pill('אני בן 5',0,0,80,'#2e86de','#fff');X.restore()}};
SC.lift=(t,d)=>{warmBg();const up=E(cl((d-.1)/1));DAD(540,1620,1.45,'smile',t,{armL:L(.12,2.6,up),armR:L(-.12,-2.6,up)});
 KID(540,L(1560,1030,up),.75,'shock',t);YMOM(900,1600,1.0,'smile',t,{look:-1});
 if(d>1.9)bubble(['אמרתי לך.','מתחילים מההתחלה.'],540,380,64,(d-1.9)/.3,0)};
SC.memory=(t,d)=>{sky('#0e1430','#1d2650');stars(t);KID(540,1600,1.1,'worried',t);
 X.save();X.globalAlpha=cl(d/.4);X.fillStyle='rgba(255,255,255,.95)';X.beginPath();X.ellipse(540,660,430,280,0,0,7);X.fill();[[420,990,34],[470,1070,22]].forEach(([a,b,r])=>{X.beginPath();X.arc(a,b,r,0,7);X.fill()});
 const its=[[()=>backpack(360,680,.7),.6],[()=>beret(720,680,.7),1.1],[()=>{X.fillStyle='#16161c';rr(500,760,80,130,14);X.fill();X.fillStyle='#7dd3ff';rr(510,774,60,100,8);X.fill()},1.6]];
 its.forEach(([f,a])=>{if(d>a){X.save();X.globalAlpha=cl((d-a)/.3);f();X.restore()}});
 if(d>3.9){const n=Math.round(33*E(cl((d-3.9)/1.2)));X.font='900 150px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.fillStyle='#e8212e';X.fillText(n,540,520)}X.restore();
 if(d>.3){X.save();X.globalAlpha=cl((d-.3)/.3);pill('בעיה אחת',540,190,50,'#e8212e','#fff');X.restore()}
 if(d>2.1){X.save();X.globalAlpha=cl((d-2.1)/.3);bigText(['אני זוכר הכל'],300,84,'#ffd34d');X.restore()}};
SC.choice=(t,d)=>{sky('#1a0b14','#2a1020');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;pill('המקלט · הסוף',540,220,44,'#ffd34d','#111');bigText(['מה אני עושה?'],400,100,'#fff');
 const p=1+.04*Math.sin(t*6);voteCard(790,880,'#14a44d','1','מספר להם|הכל',d>1.4?p:.9);voteCard(290,880,'#2e5fd8','2','שותק ומתחיל|מחדש',d>4?2-p:.9);
 bigText(['כתבו בתגובות 👇'],1250,72,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{sky('#1a0b14','#2a1020');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;pill('זה הסוף של המקלט',540,460,58,'#ffd34d','#111');bigText(['1 או 2?','כתבו בתגובות'],760,96,'#fff');
 if(d>1.6){X.globalAlpha=cl((d-1.6)/.35);bigText(['תייגו את החבר','שהיה יורד איתכם למקלט 👇'],1180,66,'#7dd3ff')}X.restore()};
SC.follow=(t,d)=>{sky('#1a0b14','#2a1020');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס את הסיפור הבא'],1110,62,'#fff');X.restore()};

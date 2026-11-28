const SC={};
// ===== props (future-msg — POV: הודעה מעצמך, מעוד שנה) =====
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
function stampT(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.12);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.fillStyle='rgba(0,0,0,.55)';rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.fill();X.strokeStyle=col;X.lineWidth=14;X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
function fadeIn(d,s,fn){if(d<s)return;X.save();X.globalAlpha=E((d-s)/.35);fn();X.restore()}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#34495e',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
// girl with red scarf
function GIRL(x,y,s,ex,t,o){person(x,y,s,Object.assign({shirt:'#f4efe6',pants:'#3b3f4a',skin:'#f6d1b0',hair:'#6b3a1f',long:true,ex:ex},o||{}),t);
 X.save();X.translate(x,y);X.scale((o&&o.flip?-1:1)*s,s);X.fillStyle='#d62828';rr(-50,-318,100,40,18);X.fill();X.save();X.translate(26,-290);X.rotate(.12+Math.sin((t||0)*3)*.06);rr(-16,0,34,120,12);X.fill();X.fillStyle='#a51d1d';X.fillRect(-16,104,34,8);X.restore();X.restore()}
// chat bubble (incoming from left, outgoing right) inside phone coords
function bub(y,lines,k,o){if(k<=0)return;o=o||{};X.save();X.globalAlpha=cl(k*1.6);const sz=o.sz||40;X.font=`700 ${sz}px Heebo`;X.direction='rtl';X.textAlign='right';X.textBaseline='middle';
 let w=0;lines.forEach(l=>w=Math.max(w,X.measureText(l).width));let fs=sz;if(w>384){fs=Math.floor(sz*384/w);X.font=`700 ${fs}px Heebo`;w=384}w=w+48;const h=lines.length*fs*1.3+52;const x0=o.right?205-w:-205;
 X.translate(0,L(30,0,E(k)));X.fillStyle=o.col||'#1f2c34';rr(x0,y,w,h,22);X.fill();if(o.bd){X.strokeStyle=o.bd;X.lineWidth=4;X.stroke()}
 X.fillStyle=o.fg||'#e9edef';lines.forEach((l,i)=>X.fillText(l,x0+w-24,y+24+fs*.55+i*fs*1.3));
 X.fillStyle='rgba(233,237,239,.55)';X.font='700 22px Heebo';X.direction='ltr';X.textAlign='left';X.fillText(o.time||'08:00',x0+16,y+h-14);X.restore()}
function chatHead(name,sub,col,av){X.fillStyle='#1f2c34';X.fillRect(-226,-450,452,130);X.fillStyle=col||'#25d366';X.beginPath();X.arc(160,-385,40,0,7);X.fill();
 X.font='44px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText(av||'🙂',160,-383);
 X.fillStyle='#fff';X.font='900 38px Heebo';X.direction='rtl';X.textAlign='right';X.fillText(name,100,-400);X.fillStyle='#8696a0';X.font='700 26px Heebo';X.fillText(sub,100,-358)}
function chatBg(){X.fillStyle='#0b141a';X.fillRect(-226,-450,452,900);X.fillStyle='rgba(255,255,255,.025)';SEED=5;for(let i=0;i<40;i++){X.beginPath();X.arc(-226+R()*452,-450+R()*900,8+R()*14,0,7);X.fill()}}
function dateChip(y,txt,k,col){if(k<=0)return;X.save();X.globalAlpha=cl(k*1.5);X.translate(0,y);X.scale(L(1.5,1,E(k)),L(1.5,1,E(k)));X.font='900 34px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';const w=X.measureText(txt).width+40;X.fillStyle=col||'#ffd34d';rr(-w/2,-28,w,56,28);X.fill();X.fillStyle='#111';X.fillText(txt,0,2);X.restore()}
function heart(x,y,s,col,broken){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=col||'#ff4d6d';X.beginPath();X.moveTo(0,30);X.bezierCurveTo(-70,-20,-40,-80,0,-45);X.bezierCurveTo(40,-80,70,-20,0,30);X.fill();
 if(broken){X.strokeStyle='#0b0d14';X.lineWidth=7;X.beginPath();X.moveTo(0,-45);X.lineTo(-10,-20);X.lineTo(8,-5);X.lineTo(-6,15);X.lineTo(0,30);X.stroke()}X.restore()}
function cafeBg(t){const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#4a3326');g.addColorStop(.74,'#6b4a35');g.addColorStop(.74,'#3a271b');g.addColorStop(1,'#1d130c');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400);
 // window with morning light
 X.fillStyle='#ffe2a8';rr(120,260,520,560,20);X.fill();X.fillStyle='#f7c873';X.fillRect(120,560,520,260);X.strokeStyle='#2a1a10';X.lineWidth=18;rr(120,260,520,560,20);X.stroke();X.beginPath();X.moveTo(380,260);X.lineTo(380,820);X.moveTo(120,540);X.lineTo(640,540);X.stroke();
 glow(380,540,500,'rgba(255,220,150,A)',.25);
 // shelf + cups
 X.fillStyle='#2a1a10';X.fillRect(720,420,300,16);X.fillRect(720,600,300,16);[760,840,920,990].forEach((cx,i)=>{X.fillStyle=['#e9e4da','#d35400','#e9e4da','#16a085'][i];rr(cx-26,360,52,60,10);X.fill();rr(cx-26,540,52,60,10);X.fill()});
 X.fillStyle='#fff';X.font='900 52px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('☕ קפה',870,300);
 // counter / table
 X.fillStyle='#8a5a3a';rr(-40,1330,1160,60,20);X.fill();X.fillStyle='#5a3a24';X.fillRect(-40,1390,1160,30)}
function wallClock(x,y,s,h,m){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#f4efe6';X.beginPath();X.arc(0,0,90,0,7);X.fill();X.strokeStyle='#2a1a10';X.lineWidth=12;X.stroke();X.strokeStyle='#111';X.lineCap='round';
 const ha=(h%12+m/60)/12*Math.PI*2,ma=m/60*Math.PI*2;X.lineWidth=10;X.beginPath();X.moveTo(0,0);X.lineTo(Math.sin(ha)*45,-Math.cos(ha)*45);X.stroke();X.lineWidth=6;X.beginPath();X.moveTo(0,0);X.lineTo(Math.sin(ma)*70,-Math.cos(ma)*70);X.stroke();X.restore()}
function cup(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#fff';rr(-40,-70,80,70,14);X.fill();X.strokeStyle='#fff';X.lineWidth=10;X.beginPath();X.arc(46,-38,18,-1.4,1.4);X.stroke();X.strokeStyle='rgba(255,255,255,.5)';X.lineWidth=6;for(let i=0;i<2;i++){X.beginPath();X.moveTo(-12+i*24,-84);X.quadraticCurveTo(-30+i*24+Math.sin(t*3+i)*10,-120,-10+i*24,-150);X.stroke()}X.restore()}
function handPhone(x,y,s,draw,t,buzz){phoneBig(x,y,s,draw,t,buzz);X.save();X.translate(x+(buzz?Math.sin(t*70)*6*s:0),y);X.scale(s,s);X.fillStyle='#f2c29a';rr(-290,140,90,260,40);X.fill();rr(200,60,90,200,40);X.fill();X.fillStyle='#e0ad85';rr(-140,420,280,300,80);X.fill();X.restore()}
function buzzLines(x,y,t){X.save();X.strokeStyle='rgba(255,255,255,.7)';X.lineWidth=8;X.lineCap='round';const p=(t*4)%1;[-1,1].forEach(sd=>{for(let i=0;i<2;i++){X.globalAlpha=1-p;X.beginPath();X.arc(x,y,260+i*40+p*30,sd>0?-.4:Math.PI-.4,sd>0?.4:Math.PI+.4);X.stroke()}});X.restore()}
function optCard(x,y,num,txt,col,sc){X.save();X.translate(x,y);X.scale(sc,sc);X.fillStyle=col;rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText(num,0,-70);X.font='900 50px Heebo';X.direction='rtl';txt.forEach((l,i)=>X.fillText(l,0,60+i*62));X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#2a0a14','#07020a',1150,'rgba(255,77,109,.09)');
 ME(330,2020,1.95,'shock',t,{armL:2.6,armR:-2.6,sweat:true});
 X.save();X.translate(740,1060);X.rotate(.07);phoneBig(0,0,.72,()=>{chatBg();chatHead('אני','המספר שלך','#ff4d6d','😨');dateChip(-270,'28.11.2027',1);bub(-200,['אל תדבר איתה.'],1,{col:'#005c4b',sz:44,time:'2027'})},t,true);X.restore();
 pill('קיבלת הודעה...',540,260,50,'rgba(0,0,0,.7)','#ff6b81','#ff6b81');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,450);X.scale(p,p);X.font='900 124px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';
 X.strokeText('מעצמך.',0,0);X.fillStyle='#fff';X.fillText('מעצמך.',0,0);X.strokeText('מעוד שנה 😨',0,150);X.fillStyle='#ffd34d';X.fillText('מעוד שנה 😨',0,150);X.restore()};
SC.msg=(t,d)=>{rays('#0b1d2a','#03080c',1000,'rgba(37,211,102,.06)');
 phoneBig(540,960,1.25,()=>{chatBg();chatHead('אני','המספר שלך',null,'🙂');
  dateChip(-240,'היום',E((d)/.3),'#8696a0');
  if(d>1.45){dateChip(-240,'28.11.2027',E((d-1.45)/.3))}
  bub(-160,['...'],E((d-.3)/.3),{col:'#005c4b',time:'2027'})},t,d<.6);
 if(d<1.4)pill('מהמספר שלך',540,230,60,'rgba(0,0,0,.75)','#fff');else bigText(['עוד שנה','בדיוק'],250,100,'#ffd34d')};
SC.order=(t,d)=>{rays('#0b1d2a','#03080c',1000,'rgba(37,211,102,.06)');
 phoneBig(540,980,1.25,()=>{chatBg();chatHead('אני','המספר שלך',null,'🙂');dateChip(-260,'28.11.2027',1);
  bub(-190,['מחר בשמונה,','בבית הקפה ליד העבודה'],E((d-1.0)/.35),{col:'#005c4b',time:'2027'});
  bub(-20,['תפגוש בחורה','עם צעיף אדום 🧣'],E((d-3.9)/.35),{col:'#005c4b',time:'2027'});
  bub(150,['אל תדבר איתה.'],E((d-6.45)/.35),{col:'#7a1020',sz:46,bd:'#ff4d6d',time:'2027'})},t,false);
 pill('כתוב שם:',540,230,60,'rgba(0,0,0,.75)','#fff');
 if(d>1.2&&d<6.4){X.save();X.globalAlpha=E((d-1.2)/.3);wallClock(900,260,.7,8,0);X.restore()}
 if(d>6.45)stampT('אל תדבר איתה',540,1560,E((d-6.45)/.35),'#ff4d6d',70)};
SC.laugh=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#22283a');g.addColorStop(.78,'#323a52');g.addColorStop(.78,'#1a1f2d');g.addColorStop(1,'#0c0f17');X.fillStyle=g;X.fillRect(0,0,W,H);
 X.fillStyle='#ffe9a8';X.beginPath();X.arc(820,420,70,0,7);X.fill();glow(820,420,260,'rgba(255,230,150,A)',.3);
 ME(540,2000,1.9,'smile',t,{armR:-1.4,bob:true,itemR:()=>{X.fillStyle='#16161c';rr(-22,120,44,80,8);X.fill()}});
 fadeIn(d,.1,()=>pill('😂 חחח',300,700,70,'#fff','#111'));
 if(d>1.25)fadeIn(d,1.25,()=>bigText(['בטח באג.'],320,120,'#fff'))};
SC.cafe=(t,d)=>{cafeBg(t);wallClock(870,820,.9,8,Math.min(5,d*2));
 ME(800,1900,1.35,d<3.7?'neutral':'shock',t,{look:-1});cup(640,1330,1,t);
 const gx=d<3.7?L(-200,220,E((d-1.2)/1.6)):L(220,440,E((d-3.7)/1.2));if(d>1.2)GIRL(gx,1900,1.3,'smile',t,{walk:d<4.6});
 if(d<1.3)pill('שמונה בבוקר',540,230,64,'rgba(0,0,0,.75)','#fff');
 else if(d<3.7&&d>2.3)tag('צעיף אדום 🧣',Math.max(260,gx+40),1180,50,'#ff4d6d');
 else bigText(['ממש לידך.'],260,110,'#ff6b81')};
SC.buzz=(t,d)=>{cafeBg(t);X.fillStyle='rgba(0,0,0,.45)';X.fillRect(0,0,W,H);
 const bz=d<1.4;if(bz)buzzLines(540,960,t);
 handPhone(540,920,1.1,()=>{chatBg();chatHead('אני','מקליד/ה...',null,'🙂');dateChip(-260,'28.11.2027',1);
  bub(-190,['אל תדבר איתה.'],1,{col:'#005c4b',time:'2027'});
  bub(-80,['אני יודע שהיא לידך.'],E((d-2.7)/.35),{col:'#005c4b',time:'2027'});
  bub(40,['אל תסתכל עליה.'],E((d-4.2)/.35),{col:'#7a1020',bd:'#ff4d6d',time:'2027'})},t,bz);
 if(d<1.4)pill('📳 הטלפון רוטט',540,230,60,'#fff','#111');else if(d<2.7)pill('עוד הודעה',540,230,60,'rgba(0,0,0,.75)','#fff');
 else bigText(['איך הוא','יודע?!'],220,90,'#ffd34d')};
SC.ask=(t,d)=>{cafeBg(t);cup(540,1330,1,t);
 GIRL(320,1950,1.6,'smile',t,{armR:-.5});ME(800,1950,1.6,d<2.0?'worried':'smile',t,{look:-1});
 X.fillStyle='#fff';rr(80,560,520,200,40);X.fill();X.beginPath();X.moveTo(260,750);X.lineTo(300,830);X.lineTo(360,750);X.fill();
 X.fillStyle='#222';X.font='900 64px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('המקום פנוי?',340,662);
 if(d>2.0){SEED=9;for(let i=0;i<6;i++){const k=cl((d-2.0-i*.2)/.4);if(k<=0)continue;X.save();X.globalAlpha=k*(1-cl((d-3.6-i*.1)));heart(560+(R()-.5)*300,1150-k*260-R()*120,.9+R()*.6);X.restore()}
  bigText(['זה משהו...'],300,96,'#ff6b81')}};
SC.third=(t,d)=>{rays('#2a0a14','#07020a',960,'rgba(255,77,109,.06)');
 phoneBig(540,980,1.25,()=>{chatBg();chatHead('אני','המספר שלך',null,'🙂');dateChip(-260,'28.11.2027',1);
  bub(-190,['אם תדבר איתה,'],E((d-1.5)/.3),{col:'#005c4b',time:'2027'});
  bub(-80,['תתאהב. ❤️'],E((d-2.7)/.3),{col:'#005c4b',sz:52,time:'2027'})},t,d<.5);
 pill('הודעה שלישית',540,230,62,'rgba(0,0,0,.75)','#fff')};
SC.lose=(t,d)=>{X.fillStyle='#0b0d14';X.fillRect(0,0,W,H);SEED=4;X.strokeStyle='rgba(140,170,220,.35)';X.lineWidth=3;for(let i=0;i<70;i++){const x=R()*W,y=(R()*H+t*900)%H;X.beginPath();X.moveTo(x,y);X.lineTo(x-10,y+40);X.stroke()}
 ME(540,1900,1.5,'worried',t,{armL:.05,armR:-.05});
 const hk=E((d)/.4);X.save();X.globalAlpha=hk;heart(540,760,3.2,'#ff4d6d',d>1.1);X.restore();
 if(d<1.1)pill('בעוד שנה...',540,250,60,'rgba(0,0,0,.75)','#fff');else bigText(['תאבד הכל.'],260,110,'#fff');
 if(d>2.4)stampT('גם אותה',540,1150,E((d-2.4)/.35),'#ff4d6d',90)};
SC.unknown=(t,d)=>{rays('#1a1a1a','#050505',960,'rgba(255,211,77,.05)');if(d<1.2)buzzLines(540,980,t);
 phoneBig(540,980,1.25,()=>{chatBg();chatHead('+972-??-???','מספר לא מוכר','#7f8c8d','❓');dateChip(-260,'????',1,'#bdc3c7');
  bub(-180,['אל תקשיב לו.'],E((d-4.6)/.3),{col:'#1f2c34',bd:'#ffd34d',sz:48,time:'??:??'});
  bub(-50,['הוא משקר.'],E((d-5.7)/.3),{col:'#1f2c34',bd:'#ffd34d',sz:48,time:'??:??'})},t,d<1.2);
 if(d<2.1)pill('הודעה רביעית',540,230,62,'rgba(0,0,0,.75)','#fff');else pill('ממספר לא מוכר ❓',540,230,60,'#ffd34d','#111')};
SC.son=(t,d)=>{rays('#2a2208','#0a0802',1000,'rgba(255,211,77,.1)');
 phoneBig(540,1080,1.0,()=>{chatBg();chatHead('+972-??-???','מספר לא מוכר','#7f8c8d','❓');
  bub(-300,['אל תקשיב לו.','הוא משקר.'],1,{col:'#1f2c34',bd:'#ffd34d',time:'??:??'});
  bub(-110,['חתום:'],E((d)/.3),{col:'#1f2c34',bd:'#ffd34d',sz:48,time:'??:??'});
  bub(10,['הבן שלך. 👦'],E((d-.9)/.3),{col:'#6b4f00',bd:'#ffd34d',sz:56,time:'??:??'})},t,false);
 if(d>.9){const k=E((d-.9)/.35);X.save();X.globalAlpha=k;X.translate(540,330);const s=L(1.6,1,k);X.scale(s,s);X.font='900 140px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';X.strokeText('הבן שלך?!',0,0);X.fillStyle='#ffd34d';X.fillText('הבן שלך?!',0,0);X.restore()}};
SC.choice=(t,d)=>{rays('#2a0a14','#07020a',900,'rgba(255,77,109,.06)');const k=E(d/.4);X.save();X.globalAlpha=k;pill('מה אתה עושה?',540,280,56,'#ffd34d','#111');
 const p=1+.04*Math.sin(t*6);optCard(780,820,'1',['מקשיב לעצמך','קם והולך 🚶'],'#2e5bbf',d>1.4&&d<5.1?p:.9);optCard(300,820,'2',['מקשיב לבן','ומדבר איתה 🧣'],'#c0392b',d>5.1?2-p:.9);
 bigText(['כתבו 1 או 2','בתגובות 👇'],1270,80,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{rays('#2a0a14','#07020a',900,'rgba(255,77,109,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהיה מדבר איתה','בכל מקרה 👇'],640,86,'#fff');X.restore()};
SC.follow=(t,d)=>{rays('#2a0a14','#07020a',900,'rgba(255,77,109,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס','את פרק 2'],1110,62,'#fff');X.restore()};

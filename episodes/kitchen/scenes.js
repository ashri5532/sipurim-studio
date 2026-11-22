const SC={};
// ===== kitchen — POV thriller (format 6): mom in the kitchen vs mom on the phone =====
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
function stamp(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.18);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.fillStyle='rgba(10,10,16,.8)';rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.fill();X.strokeStyle=col;X.lineWidth=16;X.stroke();X.fillStyle=col;X.fillText(txt,0,8);X.restore()}
function quoteB(txt,y,sz,k,col){if(k<=0)return;X.save();X.globalAlpha=k;X.translate(540,y);X.scale(L(.85,1,k),L(.85,1,k));X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=Math.min(1000,X.measureText(txt).width+sz*1.4);X.fillStyle='rgba(10,14,28,.9)';rr(-w/2,-sz,w,sz*2,24);X.fill();X.strokeStyle=col;X.lineWidth=4;X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
function fadeIn(d,s,fn){if(d<s)return;X.save();X.globalAlpha*=E((d-s)/.35);fn();X.restore()}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const MOMF=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#c0392b',skin:'#f2c29a',hair:'#3b2416',long:true,ex:ex},o||{}),t);
// mom seen from behind: no face, hair covers head, stirring arm
function momBack(x,y,s,t,o){o=o||{};X.save();X.translate(x,y);X.scale(s,s);const hair='#3b2416',shirt=o.shirt||'#c0392b';
 X.fillStyle='#2c3e50';rr(-33,-150,30,150,12);X.fill();rr(3,-150,30,150,12);X.fill();X.fillStyle='#1b1b1b';rr(-40,-14,40,16,8);X.fill();rr(0,-14,40,16,8);X.fill();
 X.fillStyle=shirt;rr(-52,-300,104,170,34);X.fill();X.fillStyle='#fff';X.fillRect(-48,-215,96,10); // apron string
 const st=o.still?0:Math.sin(t*2.2)*.25;X.save();X.translate(48,-285);X.rotate(-.5+st);X.fillStyle=shirt;rr(-14,0,28,130,14);X.fill();X.restore();
 X.save();X.translate(-48,-285);X.rotate(.15);X.fillStyle=shirt;rr(-14,0,28,130,14);X.fill();X.restore();
 X.fillStyle='#f2c29a';rr(-14,-320,28,30,8);X.fill();X.fillStyle=hair;X.beginPath();X.ellipse(0,-372,62,70,0,0,7);X.fill();X.fillRect(-62,-372,124,100);X.beginPath();X.ellipse(0,-272,62,16,0,0,Math.PI);X.fill();
 X.fillStyle='rgba(255,255,255,.08)';X.beginPath();X.ellipse(-18,-400,18,30,-.3,0,7);X.fill();X.restore()}
function kitchenBg(dark){const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,dark?'#0e1418':'#24343a');g.addColorStop(.7,dark?'#18242a':'#35505a');g.addColorStop(.7,'#2a2420');g.addColorStop(1,'#15110e');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400);
 X.strokeStyle='rgba(255,255,255,.05)';X.lineWidth=3;for(let y=700;y<1340;y+=70){X.beginPath();X.moveTo(-200,y);X.lineTo(W+200,y);X.stroke()}for(let x=0;x<W;x+=70){X.beginPath();X.moveTo(x,700);X.lineTo(x,1340);X.stroke()}
 X.fillStyle=dark?'#1d2a30':'#3e5a63';for(let i=0;i<4;i++){rr(-20+i*290,240,260,380,14);X.fill()}X.fillStyle='rgba(0,0,0,.25)';for(let i=0;i<4;i++){rr(200+i*290,420,14,70,7);X.fill()}
 X.fillStyle='#5a4636';X.fillRect(-200,1300,W+400,50);X.fillStyle='#3a2c22';X.fillRect(-200,1350,W+400,400)}
function lamp(x,y,t){X.strokeStyle='#111';X.lineWidth=6;X.beginPath();X.moveTo(x,0);X.lineTo(x,y);X.stroke();X.fillStyle='#222';X.beginPath();X.moveTo(x-80,y+50);X.lineTo(x-40,y);X.lineTo(x+40,y);X.lineTo(x+80,y+50);X.fill();glow(x,y+260,520,'rgba(255,214,140,A)',.28+.03*Math.sin(t*17)*Math.sin(t*3))}
function stove(x,y,s,t,boil){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#c9d1d6';X.fillRect(-200,-20,400,30);X.fillStyle='#222';X.fillRect(-170,-28,340,10);
 X.fillStyle='#7f8c8d';rr(-130,-170,260,150,20);X.fill();X.fillStyle='#95a5a6';rr(-150,-190,300,36,14);X.fill();X.fillStyle='#555';rr(-190,-150,70,16,8);X.fill();
 if(boil){SEED=9;for(let i=0;i<10;i++){const u=((t*.5+R())%1);X.fillStyle=`rgba(230,240,245,${.35*(1-u)})`;X.beginPath();X.arc(-90+R()*180+Math.sin(t*2+i)*20,-200-u*360,26+u*40,0,7);X.fill()}}
 X.fillStyle='#ff7b2e';for(let i=-3;i<=3;i++){X.beginPath();X.ellipse(i*34,-12,8,14+Math.sin(t*20+i)*4,0,0,7);X.fill()}X.restore()}
function windowLit(x,y,w,h,on){X.fillStyle=on?'#ffd27a':'#22304a';X.fillRect(x,y,w,h);if(on)glow(x+w/2,y+h/2,w,'rgba(255,210,120,A)',.35);X.fillStyle='#2b2b33';X.fillRect(x+w/2-5,y,10,h);X.fillRect(x,y+h/2-5,w,10)}
function nightHouse(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#2a3350';X.fillRect(-360,-640,720,640);X.fillStyle='#1b2138';X.beginPath();X.moveTo(-400,-630);X.lineTo(0,-880);X.lineTo(400,-630);X.closePath();X.fill();
 windowLit(-290,-540,200,170,false);windowLit(90,-540,200,170,false);windowLit(90,-290,200,170,true);X.save();X.translate(190,-150);X.scale(.42,.42);momBack(0,0,1,t);X.restore();
 X.fillStyle='#5a3b24';X.fillRect(-250,-300,130,300);X.fillStyle='#ffc93c';X.beginPath();X.arc(-140,-150,8,0,7);X.fill();X.restore()}
function phoneMsg(d,t,opts){phoneBig(540,880,1.05,()=>{X.fillStyle='#0b141a';X.fillRect(-226,-450,452,900);X.fillStyle='#1f2c34';X.fillRect(-226,-450,452,120);
 X.fillStyle='#c0392b';X.beginPath();X.arc(150,-390,36,0,7);X.fill();X.fillStyle='#fff';X.font='900 46px Heebo';X.direction='rtl';X.textAlign='right';X.textBaseline='middle';X.fillText('אמא ❤️',95,-395);X.fillStyle='#8696a0';X.font='700 26px Heebo';X.fillText('מקלידה...',95,-355);
 const bub=(y,txt,k,col)=>{if(k<=0)return;X.save();X.globalAlpha=k;X.font='700 40px Heebo';X.direction='rtl';X.textAlign='right';X.textBaseline='middle';const w=Math.min(420,X.measureText(txt).width+50);X.fillStyle=col||'#1f2c34';rr(205-w,y-44,w,88,20);X.fill();X.fillStyle='#e9edef';X.fillText(txt,180,y+2);X.restore()};
 bub(-190,'אני אצל סבתא',E((d-3.3)/.25));bub(-80,'עד מחר',E((d-4.2)/.25));bub(30,'אל תיכנס הביתה',E((d-5.2)/.25),'#8a1c1c');
 X.fillStyle='#8696a0';X.font='700 26px Heebo';X.textAlign='center';X.fillText('01:07',0,-270)},t,d<2.2)}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#2a0f3a','#07040d',1150,'rgba(170,90,255,.09)');
 X.save();X.globalAlpha=.9;windowLit(560,1000,460,560,true);X.restore();X.save();X.beginPath();X.rect(560,1000,460,560);X.clip();momBack(790,1560,1.15,t);X.restore();
 ME(300,1900,1.55,'shock',t,{look:1,sweat:true,armR:-2.2,itemR:()=>{X.save();X.translate(0,150);X.rotate(2.2);X.fillStyle='#16161c';rr(-40,-70,80,140,12);X.fill();X.fillStyle='#8a1c1c';rr(-32,-55,64,40,6);X.fill();X.restore()}});
 pill('סיפור',540,270,44,'rgba(0,0,0,.65)','#ffd34d','#ffd34d');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,470);X.scale(p,p);X.font='900 150px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';X.strokeText('אמא במטבח',0,0);X.fillStyle='#ffd34d';X.fillText('אמא במטבח',0,0);X.font='900 120px Heebo';X.strokeText('אבל היא לא בבית',0,160);X.fillStyle='#fff';X.fillText('אבל היא לא בבית',0,160);X.restore();
 pill('...ואז הגיעה ממנה הודעה',540,830,58,'rgba(0,0,0,.8)','#ff6b6b','#ff6b6b')};
SC.night=(t,d)=>{sky('#05070f','#141a33');stars(t);city(t,false);nightHouse(540,1500,1,t);
 const w=cl(d/1.9);ME(L(1060,820,w),1500,.9,'neutral',t,{walk:w<1,flip:true,look:-1});
 clockBadge('01:00',540,280,.8);fadeIn(d,.4,()=>tag('האור במטבח דולק',540,480,62,'#ffd27a'))};
SC.kitchen=(t,d)=>{kitchenBg(false);lamp(540,520,t);X.save();zoomCam(d/7.5,1,1.12,540,1200);stove(540,1300,1.25,t,true);momBack(540,1560,1.45,t);X.restore();
 fadeIn(d,.2,()=>pill('עם הגב אליך',540,300,56,'rgba(0,0,0,.75)','#fff'));
 fadeIn(d,5.1,()=>pill('🥄 מערבבת. לאט.',540,450,52,'rgba(0,0,0,.75)','#ffd27a'))};
SC.hey=(t,d)=>{kitchenBg(false);lamp(700,420,t);stove(700,1300,1.05,t,true);momBack(700,1540,1.25,t);
 ME(230,1700,1.4,d>1.0?'worried':'smile',t,{look:1,armR:d<1?-1.6:-.2});
 fadeIn(d,.1,()=>quoteB('״היי אמא״',330,70,1,'#fff'));stamp('היא לא מסתובבת',540,560,E((d-1.3)/.3),'#ff5a5a',66,-.08)};
SC.buzz=(t,d)=>{X.fillStyle='#0a0d16';X.fillRect(0,0,W,H);glow(540,880,700,'rgba(255,60,60,A)',d>5.2?.25:.08);phoneMsg(d,t);
 if(d<2.2){X.save();X.strokeStyle='rgba(255,255,255,.5)';X.lineWidth=8;for(let i=0;i<3;i++){X.beginPath();X.arc(540,880,560+i*40+Math.sin(t*30)*8,-.4,.4);X.stroke();X.beginPath();X.arc(540,880,560+i*40+Math.sin(t*30)*8,Math.PI-.4,Math.PI+.4);X.stroke()}X.restore()}};
SC.look=(t,d)=>{kitchenBg(true);X.fillStyle='#0a0a0e';X.fillRect(0,0,280,H);X.fillRect(800,0,400,H);X.fillStyle='#3a2c22';X.fillRect(268,0,22,H);X.fillRect(790,0,22,H);
 X.save();X.beginPath();X.rect(290,0,500,H);X.clip();lamp(540,420,t);stove(540,1300,1.0,t,true);momBack(540,1540,1.15,t);X.restore();
 X.save();X.beginPath();X.rect(0,0,280,H);X.clip();ME(250,1750,1.3,'shock',t,{look:1,sweat:true});X.restore();
 fadeIn(d,1.6,()=>stamp('היא עדיין שם',540,420,1,'#ffd34d',70,.06))};
SC.call=(t,d)=>{X.fillStyle='#0b0e18';X.fillRect(0,0,W,H);
 phoneBig(540,820,.95,()=>{const g=X.createLinearGradient(0,-450,0,450);g.addColorStop(0,'#3a1a2a');g.addColorStop(1,'#0b141a');X.fillStyle=g;X.fillRect(-226,-450,452,900);
  X.fillStyle='#c0392b';X.beginPath();X.arc(0,-190,92,0,7);X.fill();X.fillStyle='#fff';X.font='900 72px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('אמא',0,-30);
  X.fillStyle='#aaa';X.font='700 36px Heebo';X.fillText(d<1.2?'מתקשר...':'00:'+String(Math.min(59,Math.floor(d-1.2))).padStart(2,'0'),0,30);
  if(d>1.3){X.fillStyle='#27ae60';for(let i=0;i<11;i++){const h=10+Math.abs(Math.sin(t*9+i*1.3))*(d>5.8?70:28);rr(-165+i*30,170-h/2,16,h,8);X.fill()}}
  X.fillStyle='#e74c3c';X.beginPath();X.arc(0,340,58,0,7);X.fill()},t,false);
 fadeIn(d,1.3,()=>pill('🤫 בלחש',540,200,50,'rgba(0,0,0,.75)','#fff'));
 fadeIn(d,3.4,()=>{X.save();X.translate(880,520);SEED=2;X.fillStyle='#cfcfcf';X.beginPath();X.arc(0,0,70,0,7);X.fill();X.fillStyle='#f2c29a';X.beginPath();X.arc(0,10,56,0,7);X.fill();X.restore();pill('סבתא ברקע',880,640,36,'rgba(0,0,0,.8)','#ffd27a')});
 quoteB('״אל תדבר איתה״',1340,64,E((d-5.8)/.3),'#fff');quoteB('״צא עכשיו.״',1490,64,E((d-7.0)/.3),'#ff5a5a')};
SC.voice=(t,d)=>{kitchenBg(true);X.fillStyle='rgba(120,0,0,.18)';X.fillRect(0,0,W,H);lamp(540,520,t);X.save();zoomCam(d/5.5,1,1.3,540,1150);stove(540,1300,1.25,t,true);momBack(540,1560,1.45,t,{still:true});X.restore();
 fadeIn(d,1.6,()=>pill('אותו קול בדיוק',540,300,56,'#8a1c1c','#fff'));quoteB('״מי זה בטלפון, מתוק?״',500,66,E((d-3.6)/.3),'#ffd34d')};
SC.fake=(t,d)=>{rays('#140a22','#05030a',960,'rgba(140,90,255,.06)');
 const wave=(y,col,ph)=>{X.strokeStyle=col;X.lineWidth=10;X.lineCap='round';X.beginPath();for(let x=120;x<=960;x+=8){const a=Math.sin(x*.035+t*6+ph)*Math.sin(x*.011)*90*(.6+.4*Math.sin(t*3));x===120?X.moveTo(x,y+a):X.lineTo(x,y+a)}X.stroke()};
 X.save();X.globalAlpha=E(d/.4);wave(620,'#ffd34d',0);wave(900,'#ffd34d',0);X.restore();
 fadeIn(d,.2,()=>{pill('🍳 במטבח',540,500,44,'rgba(0,0,0,.8)','#fff');pill('📱 בטלפון',540,780,44,'rgba(0,0,0,.8)','#fff')});
 fadeIn(d,.3,()=>bigText(['כל אחד','יכול לזייף קול'],1080,84,'#fff'));
 stamp('רק אחת היא אמא',540,1400,E((d-2.9)/.3),'#ff5a5a',70,-.06)};
SC.choice=(t,d)=>{sky('#14061e','#2a0f3a');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;bigText(['למי אתה מאמין?'],300,96,'#fff');
 const pulse=1+.04*Math.sin(t*6);X.save();X.translate(780,720);X.scale(pulse,pulse);X.fillStyle='#d35400';rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('1',0,-70);X.font='900 50px Heebo';X.direction='rtl';X.fillText('לאמא',0,60);X.fillText('במטבח 🍳',0,120);X.restore();
 X.save();X.translate(300,720);X.scale(2-pulse,2-pulse);X.fillStyle='#2e86de';rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('2',0,-70);X.font='900 50px Heebo';X.direction='rtl';X.fillText('לאמא',0,60);X.fillText('בטלפון 📱',0,120);X.restore();
 bigText(['כתבו בתגובות 👇'],1080,76,'#ffd34d');X.restore();host(540,1690,.95,{ex:d>8?'smile':'cool',talk:d<1.2||d>6.5,pose:d>1.6&&d<6.2?'point':null},t)};
SC.tag=(t,d)=>{sky('#14061e','#2a0f3a');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהיה בורח ראשון 👇'],600,80,'#fff');X.restore();host(540,1700,1.35,{ex:'smile',pose:'shrug'},t)};
SC.follow=(t,d)=>{sky('#14061e','#2a0f3a');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['לעוד סיפורים כל יום'],1110,62,'#fff');X.restore();host(540,1870,1.2,{ex:'cool',pose:'wave'},t)};

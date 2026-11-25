const SC={};
// ===== props (wakeup — POV: יום אחד התעוררתי ועברו עשר שנים) =====
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
const roomBg=(warm)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,warm?'#3b2a22':'#1e2536');g.addColorStop(.78,warm?'#5a4032':'#2e3750');g.addColorStop(.78,'#3a2b20');g.addColorStop(1,'#1a120c');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400)};
function stampT(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.18);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.strokeStyle=col;X.lineWidth=14;rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
function fadeIn(d,s,fn){if(d<s)return;X.save();X.globalAlpha=E((d-s)/.35);fn();X.restore()}
// rainy window, w x h centered at x,y
function rainWin(x,y,w,h,t,light){X.save();X.translate(x,y);X.fillStyle='#d9cfbd';rr(-w/2-24,-h/2-24,w+48,h+48,12);X.fill();
 const g=X.createLinearGradient(0,-h/2,0,h/2);g.addColorStop(0,light?'#5b6f86':'#2a3550');g.addColorStop(1,light?'#8a9bb0':'#3e4b66');X.fillStyle=g;X.fillRect(-w/2,-h/2,w,h);
 X.save();X.beginPath();X.rect(-w/2,-h/2,w,h);X.clip();SEED=21;X.fillStyle='rgba(20,30,50,.5)';for(let i=0;i<5;i++){const bh=120+R()*h*.5;X.fillRect(-w/2+i*w/5,h/2-bh,w/5-8,bh)}
 X.strokeStyle='rgba(200,225,255,.55)';X.lineWidth=3;SEED=7;for(let i=0;i<60;i++){const rx=-w/2+R()*w,sp=600+R()*400,ry=((R()*h+t*sp)%(h+80))-h/2-40;X.beginPath();X.moveTo(rx,ry);X.lineTo(rx-8,ry+40);X.stroke()}
 SEED=9;for(let i=0;i<14;i++){const dx=-w/2+R()*w,dy=((R()*h+t*30*(1+R()))%h)-h/2;X.fillStyle='rgba(220,235,255,.35)';X.beginPath();X.ellipse(dx,dy,6,10,0,0,7);X.fill()}X.restore();
 X.fillStyle='#d9cfbd';X.fillRect(-8,-h/2,16,h);X.fillRect(-w/2,-8,w,16);X.restore()}
function bed(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#6b4a2b';X.fillRect(-400,-260,40,360);X.fillStyle='#95a5a6';X.fillRect(360,-40,20,140);X.fillStyle='#ecf0f1';rr(-380,-120,760,120,20);X.fill();X.fillStyle='#fff';rr(-360,-190,220,90,40);X.fill();X.restore()}
function blanket(x,y,s,c){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=c||'#5d6dbe';rr(-170,-170,560,110,40);X.fill();X.restore()}
function lyingMe(x,y,s,ex,t){X.save();X.translate(x,y);X.rotate(-Math.PI/2);person(0,0,s,{shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},t);X.restore()}
function beard(x,y,s,c){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=c||'#2b1d14';X.beginPath();X.moveTo(-54,-370);X.quadraticCurveTo(-56,-300,0,-298);X.quadraticCurveTo(56,-300,54,-370);X.quadraticCurveTo(40,-335,0,-335);X.quadraticCurveTo(-40,-335,-54,-370);X.fill();X.restore()}
function specs(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#222';X.lineWidth=5;X.beginPath();X.arc(-20,-372,19,0,7);X.moveTo(39,-372);X.arc(20,-372,19,0,7);X.stroke();X.restore()}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const MOM=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#8e44ad',skin:'#f2c29a',hair:'#e6e6e6',long:true,ex:ex},o||{}),t);
const BRO=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#16a085',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);beard(x,y,s)};
const DAD=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#7f8c8d',pants:'#4a4038',skin:'#e8b98f',hair:'#dcdcdc',bald:true,ex:ex},o||{}),t);specs(x,y,s)};
const YDAD=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#c0392b',skin:'#e8b98f',hair:'#2b1d14',ex:ex},o||{}),t);
function cane(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#5a3b24';X.lineWidth=12;X.lineCap='round';X.beginPath();X.moveTo(0,0);X.lineTo(0,-260);X.arc(-22,-260,22,0,Math.PI,true);X.stroke();X.restore()}
function armchair(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#7a3b2e';rr(-150,-200,300,200,30);X.fill();X.fillStyle='#8f4a3a';rr(-190,-240,70,240,30);X.fill();rr(120,-240,70,240,30);X.fill();X.fillStyle='#3a2216';X.fillRect(-170,0,20,40);X.fillRect(150,0,20,40);X.restore()}
function door(x,y,s,open){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#2a1c12';X.fillRect(-130,-560,260,560);X.fillStyle='#f6d9a0';X.globalAlpha=open;X.fillRect(-120,-550,240,550);X.globalAlpha=1;X.fillStyle='#8a5a34';X.save();X.translate(-130,0);X.scale(L(1,.25,open),1);X.fillRect(0,-560,260,560);X.fillStyle='#e0b84d';X.beginPath();X.arc(225,-280,14,0,7);X.fill();X.restore();X.restore()}
function lockScreen(t,date,yr){const g=X.createLinearGradient(0,-450,0,450);g.addColorStop(0,'#1d2b64');g.addColorStop(1,'#0b0f24');X.fillStyle=g;X.fillRect(-230,-460,460,920);
 X.fillStyle='#fff';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.font='900 150px Heebo';X.fillText('07:12',0,-250);X.font='700 44px Heebo';X.direction='rtl';X.fillText(date,0,-130);
 if(yr){X.save();X.font='900 120px Heebo';X.direction='ltr';X.fillStyle='#ff5a5a';X.fillText(yr,0,40);X.restore()}
 X.fillStyle='rgba(255,255,255,.12)';rr(-200,170,400,110,24);X.fill();X.fillStyle='#fff';X.font='700 32px Heebo';X.direction='rtl';X.fillText('גשם · 12°',0,226)}
function note(x,y,s,rot,lines,k){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.fillStyle='rgba(0,0,0,.35)';rr(-296,-346,600,700,10);X.fill();X.fillStyle='#fdf6d8';rr(-300,-350,600,700,8);X.fill();
 X.strokeStyle='rgba(80,120,200,.25)';X.lineWidth=3;for(let i=0;i<10;i++){X.beginPath();X.moveTo(-270,-260+i*64);X.lineTo(270,-260+i*64);X.stroke()}
 X.fillStyle='#1f3a8a';X.font='700 50px Heebo';X.direction='rtl';X.textAlign='right';X.textBaseline='alphabetic';let n=0;lines.forEach((l,i)=>{const c=Math.floor(cl(k*lines.length-i)*l.length);if(c>0)X.fillText(l.slice(0,c),260,-270+i*64)});X.restore()}
function calendar(x,y,s,yr,col){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#fff';rr(-200,-220,400,440,30);X.fill();X.fillStyle=col||'#e74c3c';rr(-200,-220,400,120,30);X.fill();X.fillRect(-200,-140,400,40);
 X.fillStyle='#fff';X.font='900 60px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('נובמבר',0,-160);X.fillStyle='#222';X.font='900 170px Heebo';X.direction='ltr';X.fillText('25',0,10);X.font='900 70px Heebo';X.fillStyle=col||'#e74c3c';X.fillText(yr,0,150);X.restore()}
function bubble(x,y,w,txt,sz,col){X.save();X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillStyle=col||'#fff';rr(x-w/2,y-sz*1.2,w,sz*2.4,40);X.fill();X.beginPath();X.moveTo(x+w*.15,y+sz*1.1);X.lineTo(x+w*.25,y+sz*2.2);X.lineTo(x+w*.3,y+sz*1.1);X.fill();X.fillStyle='#111';X.fillText(txt,x,y+4);X.restore()}
function optCard(x,y,num,txt,col,sc){X.save();X.translate(x,y);X.scale(sc,sc);X.fillStyle=col;rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText(num,0,-70);X.font='900 50px Heebo';X.direction='rtl';txt.forEach((l,i)=>X.fillText(l,0,60+i*62));X.restore()}
function clockFace(x,y,r,ang){X.save();X.translate(x,y);X.fillStyle='#fff';X.beginPath();X.arc(0,0,r,0,7);X.fill();X.strokeStyle='#222';X.lineWidth=r*.08;X.stroke();for(let i=0;i<12;i++){X.save();X.rotate(i*Math.PI/6);X.fillStyle='#222';X.fillRect(-3,-r*.9,6,r*.14);X.restore()}
 X.lineCap='round';X.strokeStyle='#222';X.lineWidth=r*.07;X.save();X.rotate(ang/12);X.beginPath();X.moveTo(0,0);X.lineTo(0,-r*.5);X.stroke();X.restore();X.strokeStyle='#e74c3c';X.lineWidth=r*.04;X.save();X.rotate(ang);X.beginPath();X.moveTo(0,0);X.lineTo(0,-r*.8);X.stroke();X.restore();X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#0d1b3a','#03060f',1100,'rgba(120,170,255,.08)');
 X.save();X.globalAlpha=.5;rainWin(540,1150,900,600,t);X.restore();
 calendar(860,1180,.75,'2036','#ff4d4d');
 ME(430,2050,2.0,'shock',t,{armL:2.6,armR:-2.6,sweat:true});
 pill('יום אחד...',540,290,50,'rgba(0,0,0,.65)','#8fd6ff','#8fd6ff');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,500);X.scale(p,p);X.font='900 136px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';
 X.strokeText('התעוררתי',0,0);X.fillStyle='#fff';X.fillText('התעוררתי',0,0);X.strokeText('ועברו 10 שנים',0,160);X.fillStyle='#ffd34d';X.fillText('ועברו 10 שנים',0,160);X.restore()};
SC.rain=(t,d)=>{roomBg();rainWin(540,640,640,620,t);bed(560,1560,1.25);lyingMe(470,1420,.95,d>.6?'shock':'neutral',t);blanket(560,1560,1.25);
 pill('בחוץ ירד גשם',540,240,54,'rgba(0,0,0,.7)','#8fd6ff')};
SC.phone=(t,d)=>{roomBg();X.fillStyle='rgba(0,0,0,.4)';X.fillRect(0,0,W,H);const dt=d>2.0?'יום רביעי, 25 בנובמבר':'';
 phoneBig(540,1000,1.25,()=>lockScreen(t,dt,d>3.6?'2036':''),t,d<.8);};
SC.age=(t,d)=>{roomBg(true);
 if(d<2.0){ME(540,1950,2.0,'worried',t,{look:0});tag('אני עדיין בן 19',540,420,64,'#8fd6ff')}
 else{ME(260,1900,1.45,'shock',t,{look:1});const k=E((d-2.1)/.5);X.save();X.globalAlpha=k;MOM(760,1900,1.55,'smile',t,{look:-1,armL:.5});X.restore();
  if(d>3.4){const k2=E((d-3.4)/.35);X.save();X.globalAlpha=k2;tag('השיער שלה לבן',700,440,60,'#fff');X.restore()}}};
SC.brother=(t,d)=>{roomBg(true);const op=E(d/.8);door(780,GY,1.6,op);
 const sc=L(1.4,1.95,E((d-.5)/1.2));if(d>.5)BRO(780,GY+120+L(0,200,E((d-.5)/1.2)),sc,d>4.4?'worried':'neutral',t,{look:-1,walk:d<1.7});
 ME(230,1850,1.25,'shock',t,{look:1});
 if(d>2.1){const k=E((d-2.1)/.35);X.save();X.globalAlpha=k;tag('גבוה ממני. עם זקן.',540,330,56,'#ffd34d');X.restore()}
 if(d>6.3){bubble(540,560,880,'"10 שנים חיכינו שתתעורר"',54)}};
SC.note=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#4a3424');g.addColorStop(1,'#1a110a');X.fillStyle=g;X.fillRect(0,0,W,H);glow(540,900,700,'rgba(255,220,150,A)',.3);
 const k=cl((d-3.2)/5.2);note(540,1000,1.3,-.04,['אם אתה קורא את זה –','הלילה אתה יכול','לחזור ל־2026.','','אבל תשכח','כל מה שראית פה.','','— אני'],k);
 if(d<3.2){tag('בכתב היד שלי',540,330,60,'#ffd34d')}
 if(d>7.0)stampT('תשכח הכל',540,1420,E((d-7.0)/.35),'#ff4d4d',84,-.1)};
SC.dad=(t,d)=>{roomBg();rainWin(700,760,560,640,t,true);
 DAD(700,1640,1.45,'neutral',t,{look:1,armR:-.5});armchair(700,1640,1.35);cane(900,1660,1.3);
 if(d<4.6)tag('אבא',300,360,72,'#fff');
 if(d>4.7){BRO(220,2000,1.4,'worried',t,{look:1});bubble(420,420,760,'"כל ערב הוא ישב שם"',56);if(d>7.6)pill('וחיכה לך.',420,620,56,'rgba(0,0,0,.8)','#ffd34d')}};
SC.back=(t,d)=>{rays('#1a2a10','#060a03',900,'rgba(150,255,140,.06)');
 const ang=-d*6;clockFace(540,520,190,ang);pill(d<1.4?'2036':'2026',540,800,64,'#14a44d','#fff');
 const fg=d>3.9?cl((d-3.9)/2.5):0;X.save();X.globalAlpha=1-fg*.75;YDAD(380,1820,1.3,'smile',t,{look:1,armR:-.4});ME(700,1820,1.15,'smile',t,{look:-1,armL:.4});X.restore();
 tag('עוד 10 שנים עם אבא',540,1000,56,'#7dffb0');
 if(d>4.0){const k=E((d-4.0)/.35);X.save();X.globalAlpha=k;tag('אבל תשכח שזה נגמר',540,1150,52,'#ff6b81');X.restore()}};
SC.stay=(t,d)=>{rays('#0d1b3a','#03060f',900,'rgba(120,170,255,.06)');calendar(540,620,1.1,'2036','#2e5bbf');
 DAD(380,1840,1.2,'smile',t,{look:1,armR:-.5});cane(540,1860,1.1);ME(750,1840,1.15,'worried',t,{look:-1});
 tag('אני זוכר הכל',540,960,58,'#8fd6ff');
 if(d>2.6){const k=E((d-2.6)/.35);X.save();X.globalAlpha=k;stampT('10 שנים שלא יחזרו',540,1150,k,'#ff4d4d',64,-.08);X.restore()}};
SC.choice=(t,d)=>{rays('#1a0a2a','#05020a',900,'rgba(180,120,255,.06)');const k=E(d/.4);X.save();X.globalAlpha=k;pill('מה אתם עושים?',540,300,56,'#ffd34d','#111');
 const p=1+.04*Math.sin(t*6);optCard(780,820,'1',['הולך לישון','וחוזר אחורה'],'#14a44d',d>1.5?p:.9);optCard(300,820,'2',['נשאר','ב־2036'],'#2e5bbf',d>4.8?2-p:.9);
 bigText(['הרוב בתגובות','קובע מה קורה 👇'],1270,74,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{rays('#1a0a2a','#05020a',900,'rgba(180,120,255,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שיכול לישון','עשר שנים 😴👇'],640,90,'#fff');X.restore()};
SC.follow=(t,d)=>{rays('#1a0a2a','#05020a',900,'rgba(180,120,255,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס','את ההמשך'],1110,62,'#fff');X.restore()};

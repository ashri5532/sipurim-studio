const SC={};
const roomBg=(warm)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,warm?'#3b2a22':'#22283a');g.addColorStop(.78,warm?'#5a4032':'#323a52');g.addColorStop(.78,'#2a1f18');g.addColorStop(1,'#140f0b');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400)};
const classBg=()=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2f4a3e');g.addColorStop(.78,'#3d5d4e');g.addColorStop(.78,'#5a4330');g.addColorStop(1,'#3a2b1e');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400);
 X.fillStyle='#1d2e26';rr(140,260,800,420,16);X.fill();X.strokeStyle='#8a6a48';X.lineWidth=20;rr(140,260,800,420,16);X.stroke()};
// big red button. lit = 0..1
function bigButton(x,y,s,lit,t){X.save();X.translate(x,y);X.scale(s,s);if(lit>0)glow(0,-40,420,'rgba(255,60,60,A)',.55*lit*(.8+.2*Math.sin((t||0)*8)));
 X.fillStyle='#2b2f3a';X.beginPath();X.ellipse(0,40,230,80,0,0,7);X.fill();X.fillStyle='#3d4352';rr(-230,-20,460,60,20);X.fill();X.beginPath();X.ellipse(0,-20,230,80,0,0,7);X.fill();
 X.fillStyle=lit>.5?'#ff3b3b':'#a81d1d';X.beginPath();X.ellipse(0,-60,160,60,0,0,7);X.fill();X.fillRect(-160,-120,320,60);X.fillStyle=lit>.5?'#ff7a7a':'#d22b2b';X.beginPath();X.ellipse(0,-120,160,60,0,0,7);X.fill();
 X.fillStyle='rgba(255,255,255,.35)';X.beginPath();X.ellipse(-50,-135,60,18,-.2,0,7);X.fill();X.restore()}
function thought(x,y,w,h,txt,sz,k,col){if(k<=0)return;X.save();X.globalAlpha=k;X.translate(x,y);X.scale(L(.7,1,k),L(.7,1,k));X.fillStyle='#fff';
 [[-w*.2,h*.62,22],[-w*.12,h*.5+18,14]].forEach(c=>{X.beginPath();X.arc(c[0],c[1]+30,c[2],0,7);X.fill()});
 rr(-w/2,-h/2,w,h,h/2);X.fill();X.fillStyle=col||'#111';X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText(txt,0,4);X.restore()}
function ring(x,y,r){X.save();X.strokeStyle='#ffd34d';X.lineWidth=8;X.beginPath();X.arc(x,y,r,0,7);X.stroke();X.fillStyle='#fff';X.beginPath();X.arc(x,y-r,12,0,7);X.fill();X.restore()}
function exam(x,y,s,score,k){X.save();X.translate(x,y);X.rotate(-.08);X.scale(s,s);X.fillStyle='#fff';rr(-200,-260,400,520,14);X.fill();X.fillStyle='#ccc';for(let i=0;i<6;i++)X.fillRect(-150,-120+i*56,300,18);
 X.fillStyle='#222';X.font='900 50px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('מבחן',0,-200);
 if(k>0){X.save();X.globalAlpha=k;X.translate(90,170);X.rotate(-.2);X.scale(L(1.6,1,k),L(1.6,1,k));X.strokeStyle='#e8212e';X.lineWidth=10;X.beginPath();X.arc(0,0,90,0,7);X.stroke();X.fillStyle='#e8212e';X.font='900 90px Heebo';X.direction='ltr';X.fillText(score,0,6);X.restore()}X.restore()}
function qMark(x,y,sz,col,t){X.save();X.font=`900 ${sz}px Heebo`;X.textAlign='center';X.textBaseline='middle';X.fillStyle=col;X.direction='ltr';X.fillText('?',x,y+Math.sin((t||0)*4+x)*10);X.restore()}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const BFF=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#f1c40f',skin:SKINS[1],hair:'#111',ex:ex},o||{}),t);
const GIRL=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#e84393',skin:SKINS[3],hair:'#a0522d',long:true,ex:ex},o||{}),t);
const DAD=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#5d6d7e',pants:'#34495e',skin:'#e8b98f',hair:'#9a9a9a',bald:true,ex:ex},o||{}),t);
const MOM=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#a05a8a',skin:'#f2c29a',hair:'#6b4a2b',long:true,ex:ex},o||{}),t);

SC.cover=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3d0f12');g.addColorStop(1,'#120406');X.fillStyle=g;X.fillRect(0,0,W,H);
 for(let i=0;i<24;i++){X.fillStyle=i%2?'rgba(255,80,80,.08)':'rgba(0,0,0,0)';X.beginPath();X.moveTo(540,1180);const a=i/24*Math.PI*2+t*.1,b=(i+1)/24*Math.PI*2+t*.1;X.lineTo(540+Math.cos(a)*2500,1180+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,1180+Math.sin(b)*2500);X.closePath();X.fill()}
 bigButton(540,1080,1.5,1,t);ME(540,2050,1.9,'shock',t,{armL:2.6,armR:-2.6,sweat:true});
 pill('בעולם הזה...',540,250,46,'rgba(0,0,0,.6)','#ff8a8a','#ff8a8a');bigText(['כפתור אחד','ששומע מחשבות'],400,112,'#fff');pill('פעם אחת בחיים',540,700,54,'#ffd34d','#111')};
SC.rule=(t,d)=>{roomBg(false);const k=E(d/.5);bigButton(540,1200,1.3*L(.6,1,k),0,t);
 if(d>3.6){const k2=E((d-3.6)/.4);X.save();X.globalAlpha=k2;clockBadge('0:10',540,560,1.1);X.restore()}
 if(d>5.0)thought(540,850,620,150,'...מה הוא חושב?',54,E((d-5.0)/.4))};
SC.once=(t,d)=>{roomBg(false);bigButton(540,1200,1.3,0,t);bigText(['פעם אחת.','לכל החיים.'],600,110,'#ffd34d')};
SC.mom=(t,d)=>{roomBg(true);DAD(700,1560,1.35,'neutral',t,{look:-1});MOM(360,1560,1.3,'smile',t,{look:1});
 bigButton(220,1600,.35,E(d/.4),t);thought(720,560,360,150,'❤️ ...',70,E((d-.6)/.4));
 if(d>2.6){const k=E((d-2.6)/.4);X.save();X.globalAlpha=k;ring(530,1000,60);tag('נשואים 25 שנה',540,330,58,'#ffd34d');X.restore()}};
SC.friend=(t,d)=>{classBg();X.fillStyle='#fff';X.font='700 60px Heebo';X.direction='rtl';X.textAlign='center';X.fillText('מבחן מחר',540,470);
 person(800,1560,1.3,{shirt:'#7f8c8d',skin:SKINS[0],hair:'#888',bald:true,ex:'neutral',tie:'#8a1a1a'},t);BFF(300,1560,1.35,'smile',t,{look:1});bigButton(150,1600,.35,1,t);
 thought(800,760,440,130,'שאלה 3...',56,E((d-1.0)/.4))};
SC.hundred=(t,d)=>{classBg();exam(540,1000,1.3,'100',E((d-.3)/.4));BFF(540,1990,1.5,d>1.4?'worried':'smile',t);
 if(d>1.4){const k=E((d-1.4)/.4);X.save();X.globalAlpha=k;pill('ומאז הוא לא מדבר על זה',540,330,48,'rgba(0,0,0,.75)','#fff');X.restore()}};
SC.turn=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2a0b0d');g.addColorStop(1,'#0a0304');X.fillStyle=g;X.fillRect(0,0,W,H);
 const k=E((d-1.6)/.4);bigButton(540,1050,1.5,k,t);if(k>0&&d<2.2){X.fillStyle=`rgba(255,255,255,${.35*(1-(d-1.6)/.6)})`;X.fillRect(0,0,W,H)}
 ME(540,2050,1.7,k>.5?'shock':'neutral',t);pill('עכשיו תורך',540,250,58,'rgba(0,0,0,.6)','#fff','#fff')};
SC.two=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k1=E(d/.4),k2=E((d-.5)/.4);
 X.save();X.globalAlpha=k1;BFF(300,1560,1.3,'neutral',t);qMark(300,720,200,'#ffd34d',t);X.restore();
 X.save();X.globalAlpha=k2;GIRL(780,1560,1.3,'neutral',t);qMark(780,720,200,'#ff8ad1',t);X.restore();
 bigText(['שני אנשים.','כפתור אחד.'],300,92,'#fff')};
SC.bff=(t,d)=>{classBg();BFF(380+Math.sin(t*1.5)*10,1560,1.45,'worried',t,{look:-1,sweat:true,armR:-.6});X.fillStyle='rgba(0,0,0,.25)';X.fillRect(0,0,W,H);
 tag('1 · החבר הכי טוב',540,360,62,'#ffd34d');if(d>1.7){const k=E((d-1.7)/.4);X.save();X.globalAlpha=k;pill('מתנהג מוזר כבר שבוע',760,620,46,'rgba(0,0,0,.8)','#fff');X.restore()}
 if(d>3.2)qMark(760,850,180,'#ffd34d',t)};
SC.girl=(t,d)=>{classBg();GIRL(700,1560,1.45,d>1.2?'smile':'neutral',t,{look:-1});ME(260,1560,1.3,'shock',t,{look:1});
 tag('2 · הבחורה מהכיתה',540,360,62,'#ff8ad1');if(d>2.2){const k=E((d-2.2)/.4);X.save();X.globalAlpha=k;pill('היא חייכה אליך היום',700,620,46,'rgba(0,0,0,.8)','#fff');X.restore()}
 if(d>3.8)thought(260,820,420,130,'זה אומר משהו?',50,E((d-3.8)/.4))};
SC.clock=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2a0b0d');g.addColorStop(1,'#0a0304');X.fillStyle=g;X.fillRect(0,0,W,H);
 bigButton(540,1350,1.3,1,t);clockBadge('0:10',540,650,1.4);pill('פעם אחת',540,920,56,'#ffd34d','#111')};
SC.choice=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;pill('פרק 1',540,250,44,'#ffd34d','#111');bigText(['על מי אתה לוחץ?'],420,96,'#fff');
 const pulse=1+.04*Math.sin(t*6);X.save();X.translate(780,880);X.scale(pulse,pulse);X.fillStyle='#d49a00';rr(-230,-170,460,340,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('1',0,-50);X.font='900 58px Heebo';X.direction='rtl';X.fillText('על החבר',0,90);X.restore();
 X.save();X.translate(300,880);X.scale(2-pulse,2-pulse);X.fillStyle='#b8327a';rr(-230,-170,460,340,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('2',0,-50);X.font='900 58px Heebo';X.direction='rtl';X.fillText('על הבחורה',0,90);X.restore();
 bigText(['הרוב בתגובות','קובע את פרק 2 👇'],1250,72,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהייתם לוחצים עליו 👇'],700,84,'#fff');X.restore()};
SC.follow=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס את פרק 2'],1110,62,'#fff');X.restore()};

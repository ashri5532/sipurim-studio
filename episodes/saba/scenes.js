const SC={};
// ===== props (saba — emotional family story) =====
const roomBg=(warm)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,warm?'#3b2a22':'#22283a');g.addColorStop(.78,warm?'#5a4032':'#323a52');g.addColorStop(.78,'#2a1f18');g.addColorStop(1,'#140f0b');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400)};
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
function specs(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#222';X.lineWidth=5;X.beginPath();X.arc(-20,-372,19,0,7);X.moveTo(39,-372);X.arc(20,-372,19,0,7);X.moveTo(-1,-374);X.lineTo(1,-374);X.stroke();X.restore()}
function mustache(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#e6e6e6';X.beginPath();X.ellipse(-14,-346,18,8,.2,0,7);X.ellipse(14,-346,18,8,-.2,0,7);X.fill();X.restore()}
const SABA=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#8b6f47',pants:'#4a4038',skin:'#e8b98f',hair:'#dcdcdc',bald:true,ex:ex},o||{}),t);specs(x,y,s);mustache(x,y,s)};
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const SAVTA=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#c06c84',skin:'#f2c29a',hair:'#cfcfcf',long:true,ex:ex},o||{}),t);specs(x,y,s)};
function stamp(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.18);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.strokeStyle=col;X.lineWidth=16;rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.stroke();X.fillStyle=col;X.fillText(txt,0,8);X.restore()}
function heart(x,y,s,a){X.save();X.globalAlpha=a;X.translate(x,y);X.scale(s,s);X.fillStyle='#ff4d6d';X.beginPath();X.moveTo(0,30);X.bezierCurveTo(-60,-10,-30,-60,0,-30);X.bezierCurveTo(30,-60,60,-10,0,30);X.fill();X.restore()}
function quoteB(txt,y,sz,k,col){if(k<=0)return;X.save();X.globalAlpha=k;X.translate(540,y);X.scale(L(.85,1,k),L(.85,1,k));X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=Math.min(1000,X.measureText(txt).width+sz*1.4);X.fillStyle='rgba(10,14,28,.9)';rr(-w/2,-sz,w,sz*2,24);X.fill();X.strokeStyle=col;X.lineWidth=4;X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
function fadeIn(d,s,fn){if(d<s)return;X.save();X.globalAlpha=E((d-s)/.35);fn();X.restore()}
function envelope(x,y,s,rot,gl){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);if(gl)glow(0,0,260,'rgba(255,220,120,A)',gl);X.fillStyle='#f3e3c3';rr(-160,-100,320,200,14);X.fill();X.strokeStyle='#c9b48a';X.lineWidth=6;X.beginPath();X.moveTo(-158,-96);X.lineTo(0,20);X.lineTo(158,-96);X.stroke();X.fillStyle='#14a44d';X.font='900 70px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('₪',0,50);X.restore()}
function oldBuilding(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#d8cdb4';X.fillRect(-330,-900,660,900);X.fillStyle='#c4b89c';X.fillRect(-350,-920,700,40);
 for(let r=0;r<4;r++)for(let c=0;c<3;c++){const wx=-270+c*200,wy=-820+r*200;X.fillStyle='#6b5a44';X.fillRect(wx-10,wy+120,160,16);X.fillStyle=(r===1&&c===1)?'#ffd98a':'#7e95ad';X.fillRect(wx,wy,140,110);X.fillStyle='rgba(0,0,0,.15)';for(let k=0;k<5;k++)X.fillRect(wx,wy+k*22,140,6)}
 X.fillStyle='#5a3b24';X.fillRect(-70,-200,140,200);X.fillStyle='#3b2a1a';X.fillRect(-90,-220,180,24);X.fillStyle='#fff';X.font='900 46px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('12',0,-250);X.restore()}
function contract(x,y,s,k){X.save();X.translate(x,y);X.scale(s*L(.85,1,k),s*L(.85,1,k));X.globalAlpha=k;X.rotate(.03);X.fillStyle='#fdfcf7';rr(-340,-440,680,880,16);X.fill();
 X.fillStyle='#111';X.font='900 76px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('חוזה מכר',0,-350);X.fillStyle='#777';X.font='700 38px Heebo';X.fillText('דירה · 3 חדרים',0,-270);
 X.fillStyle='#ddd';for(let i=0;i<7;i++)X.fillRect(-280,-190+i*60,560,10);
 X.fillStyle='#777';X.font='700 40px Heebo';X.textAlign='right';X.fillText('חתימה:',280,290);X.strokeStyle='#999';X.lineWidth=4;X.beginPath();X.moveTo(140,330);X.lineTo(-280,330);X.stroke();X.restore()}
function fridge(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#e9eef2';rr(-300,-900,600,900,40);X.fill();X.strokeStyle='#c3cbd3';X.lineWidth=8;X.beginPath();X.moveTo(-300,-560);X.lineTo(300,-560);X.stroke();X.fillStyle='#aab4be';rr(220,-860,24,200,12);X.fill();rr(220,-500,24,260,12);X.fill();
 [['#e74c3c',-220,-820],['#f1c40f',140,-760],['#27ae60',-160,-420],['#8e44ad',150,-180]].forEach(([c,mx,my])=>{X.fillStyle=c;X.beginPath();X.arc(mx,my,22,0,7);X.fill()});
 X.fillStyle='#fff';X.save();X.translate(-140,-730);X.rotate(-.06);X.fillRect(-60,-80,120,160);X.fillStyle='#7aa7d6';X.fillRect(-48,-68,96,100);X.restore();X.restore()}
function note(x,y,s,k1,k2){X.save();X.translate(x,y);X.rotate(.04);X.scale(s,s);X.fillStyle='#fffbe0';rr(-300,-250,600,500,10);X.fill();X.fillStyle='#e74c3c';X.beginPath();X.arc(0,-250,26,0,7);X.fill();
 X.font='900 90px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.globalAlpha=k1;X.fillStyle='#1d3557';X.fillText('בית אבות',0,-90);X.globalAlpha=k2;X.fillStyle='#555';X.font='700 50px Heebo';X.fillText('כניסה:',0,40);X.fillStyle='#e8212e';X.font='900 80px Heebo';X.fillText('יום ראשון',0,130);X.restore()}
function frame(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);glow(0,0,420,'rgba(255,210,140,A)',.35+.08*Math.sin(t*2));X.fillStyle='#7a5530';rr(-250,-320,500,640,16);X.fill();X.fillStyle='#e8d9b8';X.fillRect(-210,-280,420,560);
 X.save();X.beginPath();X.rect(-210,-280,420,560);X.clip();X.fillStyle='#c9a87a';X.fillRect(-210,-280,420,560);SAVTA(0,560,1.25,'smile',0,{bob:false});X.restore();X.restore()}
function armchair(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#7a2e3a';rr(-200,-420,400,300,60);X.fill();rr(-240,-220,480,180,50);X.fill();X.fillStyle='#5e2230';rr(-260,-260,80,220,30);X.fill();rr(180,-260,80,220,30);X.fill();X.fillStyle='#3b2a1a';X.fillRect(-200,-40,26,40);X.fillRect(174,-40,26,40);X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#5a2a0a','#1a0802',1100,'rgba(255,190,90,.08)');
 oldBuilding(540,1560,.6);X.fillStyle='rgba(0,0,0,.3)';X.fillRect(0,0,W,H);
 stamp('נמכר',540,1180,1,'#ff4d4d',100,.12);
 SABA(260,1900,1.5,'smile',t,{look:1,armR:-1.1,itemR:()=>{envelope(0,170,.55,-1.1,.6)}});ME(840,1900,1.5,'shock',t,{look:-1,armL:2.6,armR:-2.6,sweat:true});
 pill('סיפור',540,270,44,'rgba(0,0,0,.65)','#ffd34d','#ffd34d');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,470);X.scale(p,p);X.font='900 150px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';X.strokeText('סבא מכר',0,0);X.fillStyle='#ffd34d';X.fillText('סבא מכר',0,0);X.strokeText('את הדירה',0,165);X.fillStyle='#fff';X.fillText('את הדירה',0,165);X.restore();
 pill('...ונתן לי את הכסף',540,850,62,'rgba(0,0,0,.75)','#ff9d5c','#ff9d5c')};
SC.call=(t,d)=>{X.fillStyle='#10141f';X.fillRect(0,0,W,H);clockBadge('07:00',540,250,.8);
 phoneBig(540,1000,1.05,()=>{const g=X.createLinearGradient(0,-450,0,450);g.addColorStop(0,'#2c3e50');g.addColorStop(1,'#0b141a');X.fillStyle=g;X.fillRect(-226,-450,452,900);
  X.fillStyle='#e8b98f';X.beginPath();X.arc(0,-170,90,0,7);X.fill();X.font='900 110px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('👴',0,-165);
  X.fillStyle='#fff';X.font='900 72px Heebo';X.direction='rtl';X.fillText('סבא',0,-20);X.fillStyle='#aaa';X.font='700 36px Heebo';X.fillText(d<.6?'שיחה נכנסת...':'00:0'+Math.min(9,Math.floor(d)),0,40);
  const p=1+.08*Math.sin(t*10);X.save();X.translate(110,300);X.scale(p,p);X.fillStyle='#27ae60';X.beginPath();X.arc(0,0,60,0,7);X.fill();X.restore();X.fillStyle='#e74c3c';X.beginPath();X.arc(-110,300,60,0,7);X.fill()},t,d<.6);
 if(d<.9)quoteB('״תבוא.״',1500,72,E((d-.2)/.3),'#fff');else quoteB('״תבוא. עכשיו.״',1500,72,1,'#ffd34d')};
SC.enter=(t,d)=>{sky('#f6c48a','#f3a76b');city(t,true);oldBuilding(540,1500,1);
 const w=cl(d/2.2);ME(L(1000,640,w),1500,1.05,'neutral',t,{walk:w<1,flip:true,look:-1});
 fadeIn(d,1.7,()=>tag('אותה דירה · 50 שנה',540,300,70,'#ffd34d'))};
SC.contract=(t,d)=>{roomBg(true);X.fillStyle='#6b4a2b';X.fillRect(-200,1250,W+400,80);contract(540,860,1.05,E(d/.4));
 fadeIn(d,1.9,()=>pill('מחר הוא חותם',540,1500,58,'#e8212e','#fff'));stamp('נמכר',540,1020,E((d-3.4)/.3),'#e8212e',120)};
SC.envelope=(t,d)=>{roomBg(true);X.fillStyle='#6b4a2b';rr(-100,1180,W+200,90,10);X.fill();
 SABA(240,1560,1.3,'smile',t,{look:1,armR:-1.3});ME(860,1560,1.3,d>1.6?'shock':'neutral',t,{look:-1});
 const k=EIO(d/1.2);envelope(L(380,640,k),1130,.9,-.05,.25+.15*Math.sin(t*4));
 fadeIn(d,1.5,()=>quoteB('״זה בשבילך״',330,64,1,'#fff'));fadeIn(d,2.7,()=>pill('מקדמה לדירה הראשונה',540,520,54,'#14a44d','#fff'))};
SC.me=(t,d)=>{sky('#0a1124','#1c2a50');stars(t);ME(540,1500,1.5,'worried',t,{});
 fadeIn(d,.8,()=>{X.save();X.translate(820,560);X.fillStyle='#ffd34d';X.beginPath();X.arc(0,0,120,0,7);X.fill();X.fillStyle='#111';X.font='900 120px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('26',0,8);X.restore()});
 fadeIn(d,1.6,()=>{house(240,700,1.4,'#e8d7b0');pill('אצל ההורים',240,780,40,'rgba(0,0,0,.7)','#fff')});
 stamp('לבד? אין סיכוי',540,1000,E((d-3.6)/.3),'#e8212e',84,-.1)};
SC.hug=(t,d)=>{roomBg(true);glow(540,1150,600,'rgba(255,200,120,A)',.3);const c=E(d/1.0);
 ME(L(380,480,c),1560,1.45,'smile',t,{look:1,armR:L(-.15,-1.3,c)});SABA(L(720,610,c),1560,1.45,'smile',t,{look:-1,armL:L(.15,1.3,c)});
 for(let i=0;i<4;i++){const u=((d*.6+i*.25)%1);heart(540+Math.sin(i*2+d)*120,980-u*500,.9,(1-u)*c)}};
SC.fridge=(t,d)=>{roomBg(false);X.save();zoomCam(d/4.5,1,1.25,540,800);fridge(540,1520,1.2);note(540,820,.95,E((d-2.4)/.3),E((d-3.5)/.3));X.restore();
 fadeIn(d,.6,()=>pill('דף על המקרר',540,250,54,'rgba(0,0,0,.75)','#fff'))};
SC.notsick=(t,d)=>{roomBg(true);glow(540,1100,600,'rgba(255,200,120,A)',.18);SABA(540,1620,1.6,'smile',t,{});
 fadeIn(d,.1,()=>pill('סבא לא חולה',540,300,64,'#14a44d','#fff'));fadeIn(d,1.3,()=>quoteB('הוא לא רוצה שתחכה',500,62,1,'#ffd34d'))};
SC.talk=(t,d)=>{roomBg(true);glow(540,1300,700,'rgba(255,200,120,A)',.15);SABA(540,2300,2.6,'smile',t,{bob:true});
 quoteB('״אני כבר זקן״',360,66,E((d-.1)/.35),'#fff');quoteB('״אתה צריך להתחיל לחיות״',570,58,E((d-2.1)/.35),'#ffd34d')};
SC.savta=(t,d)=>{roomBg(true);X.fillStyle='rgba(0,0,0,.35)';X.fillRect(0,0,W,H);frame(540,700,1,t);armchair(540,1560,1.1);
 SEED=5;for(let i=0;i<14;i++){const u=(t*.05+R())%1;X.fillStyle=`rgba(255,230,180,${.4*(1-u)})`;X.beginPath();X.arc(R()*W,1500-u*1200,3+R()*3,0,7);X.fill()}
 fadeIn(d,1.3,()=>bigText(['סבתא עדיין','בכל פינה'],1180,80,'#ffd34d'))};
SC.choice=(t,d)=>{sky('#2a1408','#3b1e0c');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;bigText(['מה אתה עושה?'],300,100,'#fff');
 const pulse=1+.04*Math.sin(t*6);X.save();X.translate(780,720);X.scale(pulse,pulse);X.fillStyle='#14a44d';rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('1',0,-70);X.font='900 46px Heebo';X.direction='rtl';X.fillText('לוקח את הכסף',0,60);X.fillText('וקונה דירה',0,120);X.restore();
 X.save();X.translate(300,720);X.scale(2-pulse,2-pulse);X.fillStyle='#c0392b';rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('2',0,-70);X.font='900 46px Heebo';X.direction='rtl';X.fillText('מבטל את המכירה',0,60);X.fillText('ועובר לגור איתו',0,120);X.restore();
 bigText(['כתבו בתגובות 👇'],1080,76,'#ffd34d');X.restore();host(540,1690,.95,{ex:d>8?'smile':'cool',talk:d<1||d>8,pose:d>1.4&&d<7.5?'point':null},t)};
SC.tag=(t,d)=>{sky('#2a1408','#3b1e0c');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את הנכד','שהיה עובר לגור עם סבא 👇'],600,76,'#fff');X.restore();host(540,1700,1.35,{ex:'smile',pose:'shrug'},t)};
SC.follow=(t,d)=>{sky('#2a1408','#3b1e0c');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['לעוד סיפורים כל יום'],1110,62,'#fff');X.restore();host(540,1870,1.2,{ex:'cool',pose:'wave'},t)};

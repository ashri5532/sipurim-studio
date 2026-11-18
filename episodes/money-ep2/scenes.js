const SC={};
// ===== props (money series, ep2) =====
const roomBg=(warm)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,warm?'#3b2a22':'#22283a');g.addColorStop(.78,warm?'#5a4032':'#323a52');g.addColorStop(.78,'#2a1f18');g.addColorStop(1,'#140f0b');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400)};
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
const DAD=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#5d6d7e',pants:'#34495e',skin:'#e8b98f',hair:'#9a9a9a',bald:true,ex:ex},o||{}),t);
const MOM=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#a05a8a',skin:'#f2c29a',hair:'#8a8a8a',long:true,ex:ex},o||{}),t);
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const BFF=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#b7950b',pants:'#3d3d3d',skin:SKINS[1],hair:'#111',ex:ex},o||{}),t);
function stamp(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.18);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.strokeStyle=col;X.lineWidth=16;rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.stroke();X.fillStyle=col;X.fillText(txt,0,8);X.restore()}
function heart(x,y,s,a){X.save();X.globalAlpha=a;X.translate(x,y);X.scale(s,s);X.fillStyle='#ff4d6d';X.beginPath();X.moveTo(0,30);X.bezierCurveTo(-60,-10,-30,-60,0,-30);X.bezierCurveTo(30,-60,60,-10,0,30);X.fill();X.restore()}
function door(x,y,s,open,knock,t){X.save();X.translate(x+(knock?Math.sin(t*60)*3:0),y);X.scale(s,s);X.fillStyle='#3a2a1c';X.fillRect(-170,-620,340,620);X.fillStyle='#0d0907';X.fillRect(-150,-600,300,600);X.save();X.translate(-150,0);X.scale(1-open*.85,1);X.fillStyle='#7a5a3c';X.fillRect(0,-600,300,600);X.fillStyle='#6a4c32';rr(30,-560,240,220,10);X.fill();rr(30,-300,240,260,10);X.fill();X.fillStyle='#d9b27a';X.beginPath();X.arc(255,-300,14,0,7);X.fill();X.restore();X.restore()}
function statement(x,y,s,k,t){X.save();X.translate(x,y);X.scale(s*L(.85,1,k),s*L(.85,1,k));X.globalAlpha=k;X.rotate(-.03);X.fillStyle='#fdfcf7';rr(-360,-470,720,940,18);X.fill();
 X.fillStyle='#1d5bbf';X.fillRect(-360,-470,720,110);X.fillStyle='#fff';X.font='900 56px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('דף חשבון · בנק',0,-412);
 X.fillStyle='#777';X.font='700 38px Heebo';X.textAlign='right';X.fillText('שם בעל החשבון:',320,-300);X.fillStyle='#111';X.font='900 56px Heebo';X.fillText('אתה',320,-235);
 X.fillStyle='#ddd';for(let i=0;i<5;i++)X.fillRect(-300,-150+i*62,600,10);
 X.fillStyle='#777';X.font='700 40px Heebo';X.fillText('יתרה:',320,200);X.fillStyle='#14a44d';X.font='900 104px Heebo';X.textAlign='center';X.direction='ltr';X.fillText('₪6,000,000',0,310);X.restore()}
function cal(x,y,s,txt,flip){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#fff';rr(-220,-240,440,480,30);X.fill();X.fillStyle='#e8212e';rr(-220,-240,440,130,30);X.fill();X.fillRect(-220,-150,440,40);
 X.fillStyle='#fff';X.font='900 64px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('שנה אחרי',0,-170);X.fillStyle='#111';X.font='900 170px Heebo';X.direction='ltr';X.fillText(txt,0,70);
 if(flip>0){X.save();X.globalAlpha=1-flip;X.translate(0,-110-flip*300);X.rotate(-flip*.6);X.fillStyle='#f4f4f4';rr(-220,0,440,350,20);X.fill();X.restore()}X.restore()}
function crossIcon(draw,x,y,k){X.save();X.translate(x,y);draw();if(k>0){X.strokeStyle='#e8212e';X.lineWidth=22;X.lineCap='round';X.beginPath();X.moveTo(-150,-150);X.lineTo(L(-150,150,k),L(-150,150,k));X.stroke()}X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#0f3d2a','#04140d',1150,'rgba(60,255,150,.07)');SEED=8;for(let i=0;i<22;i++)bill(R()*1080,700+R()*1000+((t*120+i*40)%200),1.2+R()*.5,R()*6+t*(R()-.5));
 DAD(220,1900,1.45,'smile',t,{look:1});ME(860,1900,1.45,'shock',t,{look:-1,armL:2.6,armR:-2.6,sweat:true});host(540,1930,1.3,{ex:'cool',talk:true,pose:'point'},t);
 pill('כל הכסף של החיים · פרק 2',540,270,44,'rgba(0,0,0,.65)','#7dffb0','#7dffb0');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,520);X.scale(p,p);X.font='900 260px Heebo';X.direction='ltr';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';X.strokeText('97%',0,0);X.fillStyle='#ffd34d';X.fillText('97%',0,0);X.restore();
 bigText(['מכם נתתם להורים חצי','ואז זה קרה...'],790,84,'#fff')};
SC.vote=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E((d-.1)/1.2);
 X.save();X.globalAlpha=E(d/.3);bigText(['התוצאות'],330,96,'#fff');X.restore();
 bar(180,1350,300,700,'#14a44d','לתת חצי',Math.round(97*k)+'%',.97*k);bar(600,1350,300,700,'#8a1a1a','לשמור הכל',Math.round(3*k)+'%',.03*k);
 if(d>.9)pill('לא הייתה שאלה בכלל',540,1560,46,'rgba(0,0,0,.6)','#ffd34d')};
SC.transfer=(t,d)=>{roomBg(true);ME(250,1560,1.35,'smile',t,{look:1});DAD(720,1560,1.3,'shock',t,{look:-1});MOM(920,1560,1.2,'shock',t,{look:-1});
 const k=cl((d-.5)/1.6);SEED=3;for(let i=0;i<14;i++){const off=R();const u=cl(k*1.3-off*.3);if(u<=0||u>=1)continue;bill(L(300,800,u),L(1050,1000,u)-Math.sin(u*Math.PI)*380,1.1,u*8+i)}
 if(d>1.3){const q=E((d-1.3)/.4);X.save();X.globalAlpha=q;tag('₪6,000,000',540,470,90,'#7dffb0');X.restore()}pill('העברה בוצעה ✓',540,640,44,'rgba(0,0,0,.6)','#7dffb0')};
SC.hug=(t,d)=>{roomBg(true);glow(540,1150,600,'rgba(255,200,120,A)',.25);const c=E(d/1.5);
 ME(L(380,470,c),1560,1.45,'worried',t,{look:1,armR:L(-.15,-1.3,c)});DAD(L(720,620,c),1560,1.45,'worried',t,{look:-1,armL:L(.15,1.3,c)});
 for(let i=0;i<4;i++){const u=((d*.5+i*.25)%1);heart(470+Math.sin(i*2+d)*120,980-u*500,.9,(1-u)*c)}
 if(d>.3){const q=E((d-.3)/.4);X.save();X.globalAlpha=q;pill('אבא לא אמר מילה',540,330,52,'rgba(0,0,0,.7)','#fff');X.restore()}};
SC.year=(t,d)=>{sky('#0a1124','#1c2a50');stars(t);const n=Math.min(365,Math.floor(365*E(d/1.1)));cal(540,900,1.35,String(n),(d*6)%1);pill('ימים',540,1350,50,'rgba(0,0,0,.6)','#fff')};
SC.kitchen=(t,d)=>{roomBg(false);X.fillStyle='#4a5468';X.fillRect(-200,900,W+400,80);X.fillStyle='#6b778f';for(let i=0;i<4;i++)X.fillRect(40+i*260,560,220,300);
 DAD(330,1560,1.45,'neutral',t,{look:1,armR:-1.3,itemR:()=>{X.fillStyle='#fdfcf7';X.save();X.rotate(1.3);rr(-40,100,90,120,6);X.fill();X.restore()}});ME(780,1560,1.4,'neutral',t,{look:-1});
 if(d>1.4){const q=E((d-1.4)/.4);X.save();X.globalAlpha=q;pill('דף מהבנק',540,360,56,'rgba(0,0,0,.7)','#ffd34d','#ffd34d');X.restore()}};
SC.statement=(t,d)=>{roomBg(false);X.fillStyle='rgba(0,0,0,.4)';X.fillRect(0,0,W,H);statement(540,900,1.15,E(d/.4),t);
 stamp('לא נגעו בשקל',540,1050,E((d-2.0)/.3),'#e8212e',88);
 if(d>3.6){const q=E((d-3.6)/.4);X.save();X.globalAlpha=q;pill('על השם שלך',540,1520,58,'#14a44d','#fff');X.restore()}
 if(d>5.6){const q=E((d-5.6)/.4);X.save();X.globalAlpha=q;bigText(['בשביל היום שייגמר לך'],250,66,'#ffd34d');X.restore()}};
SC.night=(t,d)=>{X.fillStyle='#0d1020';X.fillRect(0,0,W,H);glow(540,1000,700,'rgba(120,150,255,A)',.12);clockBadge('02:00',540,380,1.2);door(540,1650,1.6,0,d>1.6,t);
 if(d>1.6){const u=(d-1.6)%.7;X.save();X.globalAlpha=1-u/.7;X.font='900 90px Heebo';X.direction='rtl';X.textAlign='center';X.fillStyle='#fff';X.lineWidth=12;X.strokeStyle='#000';X.strokeText('טוק טוק',540,700);X.fillText('טוק טוק',540,700);X.restore()}};
SC.friend=(t,d)=>{X.fillStyle='#0d1020';X.fillRect(0,0,W,H);door(540,1650,1.6,E(d/.6),false,t);X.save();X.beginPath();X.rect(300,690,480,960);X.clip();glow(540,1100,500,'rgba(255,220,150,A)',.18*E(d/.6));BFF(540,1660,1.55,'worried',t,{sweat:true});X.restore();
 if(d>.5){const q=E((d-.5)/.4);X.save();X.globalAlpha=q;pill('החבר הכי טוב שלך',540,330,52,'rgba(0,0,0,.75)','#ffd34d','#ffd34d');X.restore()}
 if(d>1.9){const q=E((d-1.9)/.4);X.save();X.globalAlpha=q;tag('₪30,000,000',540,520,72,'#7dffb0');X.restore()}};
SC.gone=(t,d)=>{sky('#0a1124','#1c2a50');stars(t);
 const items=[[()=>{X.save();X.scale(.4,.4);X.fillStyle='#8fb1cf';X.fillRect(-160,-300,320,560);for(let r=0;r<8;r++)for(let c=0;c<4;c++){X.fillStyle='rgba(255,230,160,.8)';X.fillRect(-130+c*70,-260+r*62,44,40)}X.restore()},'פנטהאוז',.2],
  [()=>{car(0,60,1.6,'#e8212e')},'אוטו',1.1],[()=>{X.fillStyle='#8e44ad';X.beginPath();X.arc(0,0,120,0,7);X.fill();X.fillStyle='#fff';X.font='900 120px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('♪',0,8)},'מסיבות',1.7]];
 items.forEach(([dr,lab,s],i)=>{const y=450+i*330;const k=E((d-s)/.3);if(k<=0)return;X.save();X.globalAlpha=k;crossIcon(dr,380,y,E((d-s-.5)/.3));X.font='900 72px Heebo';X.direction='rtl';X.textAlign='right';X.textBaseline='middle';X.fillStyle='#fff';X.fillText(lab,960,y);X.restore()});
 stamp('הכל נגמר',540,1430,E((d-2.7)/.3),'#e8212e',96,-.08)};
SC.zero=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#2a0b0b');g.addColorStop(1,'#0a0303');X.fillStyle=g;X.fillRect(0,0,W,H);
 X.save();X.translate(540,700);X.fillStyle='#fff';rr(-420,-150,840,300,40);X.fill();X.fillStyle='#555';X.font='700 40px Heebo';X.textAlign='right';X.textBaseline='middle';X.direction='rtl';X.fillText('יתרה בחשבון של החבר',380,-80);X.fillStyle='#e8212e';X.font='900 130px Heebo';X.textAlign='center';X.direction='ltr';X.fillText('₪0',0,50);X.restore();
 BFF(540,1900,1.7,'worried',t,{sweat:true,armL:.3,armR:-.3});
 if(d>1.3){const q=E((d-1.3)/.4);X.save();X.globalAlpha=q;stamp('אין משכורת',540,1060,q,'#ffd34d',80,.06);X.restore()}if(d>2.6){const q=E((d-2.6)/.3);X.save();X.globalAlpha=q;pill('אף פעם.',540,1260,54,'#e8212e','#fff');X.restore()}};
SC.beg=(t,d)=>{X.fillStyle='#0d1020';X.fillRect(0,0,W,H);glow(540,1200,700,'rgba(255,220,150,A)',.12);BFF(540,2350,2.8,'worried',t,{sweat:true,armL:1.2,armR:-1.2});
 quoteB('״אחי, תלווה לי מיליון״',380,58,E((d-.2)/.4),'#fff');quoteB('״אני נשבע שאני אחזיר״',590,58,E((d-1.9)/.4),'#ffd34d')};
function quoteB(txt,y,sz,k,col){if(k<=0)return;X.save();X.globalAlpha=k;X.translate(540,y);X.scale(L(.85,1,k),L(.85,1,k));X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=Math.min(1000,X.measureText(txt).width+sz*1.4);X.fillStyle='rgba(10,14,28,.9)';rr(-w/2,-sz,w,sz*2,24);X.fill();X.strokeStyle=col;X.lineWidth=4;X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
SC.doubt=(t,d)=>{X.fillStyle='#0d1020';X.fillRect(0,0,W,H);X.save();zoomCam(d/2.8,1,1.1,540,1100);door(760,1560,1.3,1,false,t);BFF(790,1560,1.3,'worried',t,{look:-1,sweat:true});ME(290,1560,1.4,'worried',t,{look:1});X.restore();
 tag('₪6,000,000',290,520,52,'#7dffb0');tag('₪0',790,520,64,'#ff5a5a');
 if(d>.9){const q=E((d-.9)/.4);X.save();X.globalAlpha=q;pill('אין לו מאיפה להחזיר',540,300,50,'rgba(0,0,0,.8)','#fff');X.restore()}};
SC.choice=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;pill('פרק 2',540,200,44,'#ffd34d','#111');bigText(['מה אתה עושה?'],360,100,'#fff');
 const pulse=1+.04*Math.sin(t*6);X.save();X.translate(780,780);X.scale(pulse,pulse);X.fillStyle='#14a44d';rr(-230,-170,460,340,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('1',0,-50);X.font='900 50px Heebo';X.direction='rtl';X.fillText('נותן לו מיליון',0,90);X.restore();
 X.save();X.translate(300,780);X.scale(2-pulse,2-pulse);X.fillStyle='#8a1a1a';rr(-230,-170,460,340,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('2',0,-50);X.font='900 50px Heebo';X.direction='rtl';X.fillText('סוגר את הדלת',0,90);X.restore();
 bigText(['הרוב בתגובות','קובע את פרק 3 👇'],1080,72,'#ffd34d');X.restore();host(540,1690,.95,{ex:d>7?'smile':'cool',talk:d<.9||d>7,pose:d>1.4&&d<6.5?'point':null},t)};
SC.tag=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהייתם נותנים לו מיליון 👇'],600,80,'#fff');X.restore();host(540,1700,1.35,{ex:'smile',pose:'shrug'},t)};
SC.follow=(t,d)=>{sky('#0a1124','#16213f');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס את פרק 3'],1110,62,'#fff');X.restore();host(540,1870,1.2,{ex:'cool',pose:'wave'},t)};

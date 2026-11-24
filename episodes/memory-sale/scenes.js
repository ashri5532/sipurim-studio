const SC={};
// ===== props (memory-sale — בעולם הזה: בבלאק פריידיי משלמים בזיכרון) =====
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
const mallBg=(dim)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,dim?'#1a1426':'#2a1f3d');g.addColorStop(.78,dim?'#2a2238':'#3d2f55');g.addColorStop(.78,'#cfc6d8');g.addColorStop(1,'#9a90a8');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400);
 for(let i=0;i<6;i++){X.fillStyle='rgba(255,255,255,.05)';X.fillRect(i*200-20,0,8,GY)}for(let i=0;i<5;i++){glow(120+i*210,130,120,'rgba(255,240,200,A)',.25);X.fillStyle='#fff6d8';rr(80+i*210,110,80,20,10);X.fill()}};
const roomBg=(warm)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,warm?'#3b2a22':'#22283a');g.addColorStop(.78,warm?'#5a4032':'#323a52');g.addColorStop(.78,'#2a1f18');g.addColorStop(1,'#140f0b');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400)};
function stampT(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.18);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.strokeStyle=col;X.lineWidth=14;rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
function fadeIn(d,s,fn){if(d<s)return;X.save();X.globalAlpha=E((d-s)/.35);fn();X.restore()}
// price tag with string
function priceTag(x,y,s,txt,col,rot){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.strokeStyle='#ddd';X.lineWidth=4;X.beginPath();X.moveTo(-150,0);X.quadraticCurveTo(-210,-60,-250,-20);X.stroke();
 X.fillStyle=col||'#ffd34d';X.beginPath();X.moveTo(-150,0);X.lineTo(-100,-70);X.lineTo(150,-70);X.lineTo(150,70);X.lineTo(-100,70);X.closePath();X.fill();X.fillStyle='#1a1a1a';X.beginPath();X.arc(-105,0,12,0,7);X.fill();
 X.fillStyle='#111';X.font='900 74px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText(txt,25,4);X.restore()}
// glowing memory orb
function orb(x,y,r,a,col){glow(x,y,r*2.4,col||'rgba(140,200,255,A)',.6*a);X.save();X.globalAlpha=a;X.fillStyle='#e8f6ff';X.beginPath();X.arc(x,y,r,0,7);X.fill();X.restore()}
// polaroid memory, draw() paints inside 360x300 window centered at 0,0
function polaroid(x,y,s,rot,draw,fade,cap){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.globalAlpha=1-(fade||0)*.85;X.fillStyle='rgba(0,0,0,.35)';rr(-206,-196,420,470,10);X.fill();X.fillStyle='#fbf8f0';rr(-210,-200,420,470,8);X.fill();
 X.save();X.beginPath();X.rect(-180,-170,360,300);X.clip();draw();if(fade){X.fillStyle=`rgba(230,240,255,${fade})`;X.fillRect(-180,-170,360,300)}X.restore();
 if(cap){X.fillStyle='#333';X.font='700 38px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText(cap,0,200)}X.restore();
 if(fade>0){SEED=Math.floor(x);for(let i=0;i<14;i++){const p=(fade*1.3+R())%1;orb(x+(R()-.5)*400*s,y-p*500*s,6+R()*8,(1-p)*fade)}}}
function headphones(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#222';X.lineWidth=26;X.beginPath();X.arc(0,0,110,Math.PI,0);X.stroke();X.fillStyle='#e84393';rr(-150,-10,60,110,24);X.fill();rr(90,-10,60,110,24);X.fill();X.restore()}
function smallPhone(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#16161c';rr(-80,-150,160,300,26);X.fill();const g=X.createLinearGradient(0,-130,0,130);g.addColorStop(0,'#6c5ce7');g.addColorStop(1,'#00cec9');X.fillStyle=g;rr(-68,-134,136,268,18);X.fill();X.restore()}
function register(x,y,s,scr,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#3d4b63';rr(-300,-160,600,160,20);X.fill();X.fillStyle='#2c3647';rr(-260,-420,520,240,20);X.fill();X.fillStyle='#0b1d14';rr(-230,-395,460,190,12);X.fill();
 X.fillStyle='#7dffb0';X.font='900 70px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText(scr||'',0,-300);X.fillStyle='#555';for(let i=0;i<4;i++)for(let j=0;j<2;j++){rr(-200+i*110,-130+j*60,80,40,8);X.fill()}X.restore()}
function bag(x,y,s,c,lab){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=c;X.beginPath();X.moveTo(-60,-150);X.lineTo(60,-150);X.lineTo(70,0);X.lineTo(-70,0);X.closePath();X.fill();X.strokeStyle='#222';X.lineWidth=6;X.beginPath();X.arc(0,-150,30,Math.PI,0);X.stroke();if(lab){X.fillStyle='#fff';X.font='900 34px Heebo';X.textAlign='center';X.direction='rtl';X.fillText(lab,0,-60)}X.restore()}
function dog(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#c68642';rr(-90,-110,180,80,40);X.fill();X.beginPath();X.arc(110,-120,50,0,7);X.fill();X.fillStyle='#8a5a2b';X.beginPath();X.ellipse(140,-150,18,34,.4,0,7);X.fill();X.fillStyle='#111';X.beginPath();X.arc(122,-128,7,0,7);X.fill();X.beginPath();X.arc(158,-112,9,0,7);X.fill();
 X.fillStyle='#c68642';[-70,-30,40,70].forEach(l=>X.fillRect(l,-40,20,40));X.save();X.translate(-90,-90);X.rotate(Math.sin(t*12)*.5-.6);X.fillRect(-50,-8,50,16);X.restore();X.restore()}
function apt(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);glow(0,-400,600,'rgba(255,215,120,A)',.4+.1*Math.sin(t*3));X.fillStyle='#f4efe4';X.fillRect(-320,-760,640,760);X.fillStyle='#d9cfbd';X.fillRect(-340,-790,680,40);
 for(let r=0;r<3;r++)for(let c=0;c<3;c++){X.fillStyle='#ffd98a';X.fillRect(-260+c*190,-700+r*210,140,130)}
 X.fillStyle='#7f8c8d';X.fillRect(-360,-300,720,20);X.strokeStyle='#7f8c8d';X.lineWidth=8;for(let i=0;i<9;i++){X.beginPath();X.moveTo(-340+i*85,-280);X.lineTo(-340+i*85,-200);X.stroke()}X.fillRect(-360,-210,720,14);
 X.fillStyle='#27ae60';X.beginPath();X.arc(260,-330,44,0,7);X.fill();X.fillStyle='#b5523b';X.fillRect(240,-310,40,30);X.fillStyle='#5a3b24';X.fillRect(-60,-170,120,170);X.restore()}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#2e86de',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const CASH=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#c0392b',skin:SKINS[1],hair:'#111',long:true,ex:ex},o||{}),t);
function specs(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#222';X.lineWidth=5;X.beginPath();X.arc(-20,-372,19,0,7);X.moveTo(39,-372);X.arc(20,-372,19,0,7);X.stroke();X.restore()}
const SABA=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#dfe6e9',pants:'#4a4038',skin:'#e8b98f',hair:'#dcdcdc',bald:true,ex:ex},o||{}),t);specs(x,y,s)};
function bed(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#95a5a6';X.fillRect(-380,-40,20,140);X.fillRect(360,-40,20,140);X.fillStyle='#ecf0f1';rr(-380,-120,760,120,20);X.fill();X.fillStyle='#a8c6e0';rr(-200,-150,560,90,30);X.fill();X.fillStyle='#fff';rr(-370,-190,200,90,40);X.fill();X.restore()}
// scene: grandpa lying, holds hand (used in polaroid + memory)
function sabaScene(t,sc){X.fillStyle='#5a6b7c';X.fillRect(-600,-600,1200,1200);X.fillStyle='#6f8191';X.fillRect(-600,-600,1200,560);glow(120,-100,300,'rgba(255,230,180,A)',.55);X.save();X.scale(sc,sc);bed(0,140,.6);
 X.save();X.translate(55,95);X.rotate(-Math.PI/2);person(0,0,.55,{shirt:'#dfe6e9',skin:'#e8b98f',hair:'#dcdcdc',bald:true,ex:'smile'},0);X.restore();X.restore()}
function schoolKid(){X.fillStyle='#9fd8ff';X.fillRect(-200,-200,400,400);X.fillStyle='#e8d7b0';X.fillRect(-200,60,400,100);person(0,150,.5,{shirt:'#f1c40f',hair:'#2b1d14',ex:'smile',armR:-.2,itemR:()=>{X.fillStyle='#e74c3c';rr(-20,60,60,70,10);X.fill()}},0);X.fillStyle='#c0392b';X.fillRect(80,-170,90,60);X.fillStyle='#fff';X.font='900 26px Heebo';X.textAlign='center';X.direction='rtl';X.fillText('כיתה א',125,-132)}
function wedding(){X.fillStyle='#f8e1ea';X.fillRect(-200,-200,400,400);for(let i=0;i<6;i++){X.fillStyle=['#ff9ff3','#feca57','#fff'][i%3];X.beginPath();X.arc(-160+i*64,-140,14,0,7);X.fill()}
 person(-60,170,.55,{shirt:'#fff',hair:'#6b4a2b',long:true,ex:'smile'},0);person(70,170,.55,{shirt:'#222',hair:'#111',ex:'smile',tie:'#fff'},0)}
function optCard(x,y,num,txt,col,sc){X.save();X.translate(x,y);X.scale(sc,sc);X.fillStyle=col;rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText(num,0,-70);X.font='900 50px Heebo';X.direction='rtl';txt.forEach((l,i)=>X.fillText(l,0,60+i*62));X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#3a0a14','#0a0206',1150,'rgba(255,60,90,.09)');
 SEED=5;for(let i=0;i<10;i++){const p=(t*.25+R())%1;orb(200+R()*680,1250-p*700,10+R()*10,1-p)}
 bag(170,1560,1.5,'#e84393','חינם');bag(910,1560,1.5,'#f1c40f','חינם');
 ME(540,2000,2.0,'shock',t,{armL:2.6,armR:-2.6,sweat:true});
 pill('בעולם הזה...',540,280,46,'rgba(0,0,0,.65)','#ff6b81','#ff6b81');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,470);X.scale(p,p);X.font='900 128px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';
 X.strokeText('בבלאק פריידיי',0,0);X.fillStyle='#fff';X.fillText('בבלאק פריידיי',0,0);X.strokeText('הכל בחינם',0,150);X.fillStyle='#ffd34d';X.fillText('הכל בחינם',0,150);X.restore();
 pill('אבל משלמים בזיכרון 🧠',540,860,62,'rgba(0,0,0,.8)','#8fd6ff','#8fd6ff')};
SC.free=(t,d)=>{mallBg();shop(220,GY,1.6);shop(860,GY,1.6);
 const it=[[540,1050,smallPhone,1.4,2.2],[260,1250,null,0,3.3],[820,1250,null,0,3.9]];
 fadeIn(d,2.2,()=>{smallPhone(540,1000,1.2);priceTag(540,1240,.9,'₪0','#7dffb0',-.05)});
 fadeIn(d,3.3,()=>{car(250,1330,1.4,'#e74c3c');priceTag(250,1420,.7,'₪0','#7dffb0',.08)});
 fadeIn(d,3.9,()=>{house(830,1330,1.5);priceTag(830,1420,.7,'₪0','#7dffb0',-.08)});
 bigText(['בלאק פריידיי'],330,110,'#ff6b81');stampT('הכל בחינם',540,560,E(d/.4),'#7dffb0',96)};
SC.register=(t,d)=>{mallBg(true);register(540,1450,1.5,d<2.8?'₪0':'זיכרון',t);
 ME(540,2250,2.2,d>2.8?'shock':'neutral',t);
 if(d<2.8)stampT('לא בכסף',540,500,E((d-.4)/.4),'#ff4d4d',100);
 else{for(let i=0;i<8;i++){const p=((d-2.8)*.8+i/8)%1;orb(L(540,540+Math.sin(i)*160,p),L(1350,950,p),14,1-p*.6)}bigText(['משלמים','בזיכרון'],420,130,'#8fd6ff')}};
SC.price1=(t,d)=>{mallBg(true);headphones(540,560,1.6);priceTag(540,800,1,'= ?','#ffd34d',-.04);
 fadeIn(d,1.1,()=>polaroid(540,1250,1.4,.04,schoolKid,cl((d-2.2)/1.2),'היום הראשון בבית ספר'))};
SC.price2=(t,d)=>{mallBg(true);smallPhone(540,560,1.5);priceTag(540,840,1,'= ?','#ffd34d',.04);
 fadeIn(d,1.2,()=>polaroid(540,1270,1.4,-.04,wedding,cl((d-1.8)/1),'החתונה של אחותך'))};
SC.exit=(t,d)=>{mallBg();for(let i=0;i<4;i++){const x=((i*290+d*120)%1400)-160;person(x,GY+160,1.05,Object.assign(crowdP(i+2),{ex:'neutral',walk:true,armR:-.2,itemR:()=>bag(0,250,.6,SHIRTS[i+4])}),t);
  X.save();X.globalAlpha=.5+.3*Math.sin(t*3+i);glow(x,GY-260,90,'rgba(200,220,255,A)',.6);X.restore()}
 pill('שקיות מלאות',540,320,54,'rgba(0,0,0,.7)','#ffd34d');
 if(d>3){dog(760,1720,1.3,t);const k=E((d-3)/.4);X.save();X.globalAlpha=k;tag('איך קוראים לו?',760,1440,54,'#ff6b81');X.restore()}};
SC.swear=(t,d)=>{mallBg();ME(540,1950,1.8,d<2.7?'angry':'shock',t,{armL:d<2.7?1.7:.2,armR:d<2.7?-1.7:-.2,look:d>2.7?1:0});
 if(d<2.7)pill('אני לא קונה כלום.',540,420,62,'rgba(0,0,0,.75)','#fff','#fff');
 else{glow(1080,700,600,'rgba(255,215,120,A)',.6*E((d-2.7)/.5));bigText(['...עד שראית','אותה'],420,100,'#ffd34d')}};
SC.apartment=(t,d)=>{rays('#2a1e05','#0a0702',900,'rgba(255,210,90,.08)');apt(540,1500,1.15,t);priceTag(820,600,.9,'₪0','#7dffb0',-.1);
 pill('דירה',540,260,64,'#ffd34d','#111');
 fadeIn(d,1,()=>pill('3 חדרים · מרפסת · שלך',440,420,50,'rgba(0,0,0,.75)','#fff'));
 if(d>3.7)stampT('בלי משכנתא',300,1150,E((d-3.7)/.35),'#ff4d4d',70,-.2);
 if(d>5.0)stampT('בלי 30 שנה חובות',700,1300,E((d-5.0)/.35),'#ff4d4d',58,.15)};
SC.cashier=(t,d)=>{mallBg(true);register(380,1500,1.2,'סורק...',t);
 const look=d>3.0;CASH(760,1700,1.6,look?'worried':'neutral',t,{look:look?-1:0,armL:look?.1:1.2});
 X.save();X.globalAlpha=.6+.4*Math.sin(t*20);X.fillStyle='#ff3b3b';X.fillRect(250,1270-((d*300)%160),260,6);X.restore();
 ME(150,2050,1.5,'neutral',t,{look:1});if(look)pill('...',760,520,70,'rgba(0,0,0,.75)','#fff')};
SC.price3=(t,d)=>{X.fillStyle='#07090f';X.fillRect(0,0,W,H);glow(540,800,700,'rgba(140,200,255,A)',.25);
 bigText(['הדירה הזאת','עולה...'],330,110,'#fff');
 fadeIn(d,2.3,()=>{polaroid(540,1180,1.6,0,()=>sabaScene(t,1),0,'השיחה האחרונה עם סבא')})};
SC.memory=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3a2a1e');g.addColorStop(1,'#120c08');X.fillStyle=g;X.fillRect(0,0,W,H);glow(540,900,800,'rgba(255,200,130,A)',.35);
 X.save();X.translate(540,1150);sabaScene(t,1.6);X.restore();
 ME(900,1900,1.5,'worried',t,{look:-1,armL:.9});
 X.fillStyle='#fff';rr(560,380,440,170,40);X.fill();X.beginPath();X.moveTo(640,540);X.lineTo(600,640);X.lineTo(700,540);X.fill();
 X.save();X.filter='blur(14px)';X.fillStyle='#333';X.font='900 60px Heebo';X.textAlign='center';X.direction='rtl';X.fillText('משפט אחד שלו',780,480);X.restore();
 if(d>3.1){const k=E((d-3.1)/.4);X.save();X.globalAlpha=k;tag('🔒 רק אתה שמעת',540,760,58,'#ffd34d');X.restore()}};
SC.dilemma=(t,d)=>{X.fillStyle='#0a0c14';X.fillRect(0,0,W,H);
 X.save();X.beginPath();X.rect(540,0,540,H);X.clip();rays('#2a1e05','#0a0702',900,'rgba(255,210,90,.06)');apt(810,1250,.7,t);X.restore();
 const f=d>3.5?cl((d-3.5)/2.2):0;polaroid(270,1000,.95,-.05,()=>sabaScene(t,1),f);
 X.strokeStyle='rgba(255,255,255,.3)';X.lineWidth=6;X.setLineDash([16,14]);X.beginPath();X.moveTo(540,300);X.lineTo(540,1500);X.stroke();X.setLineDash([]);
 tag('בית לכל החיים',810,420,48,'#7dffb0');tag('המשפט של סבא',270,420,48,'#8fd6ff');
 if(d>5.7)bigText(['לתמיד.'],1430,120,'#ff4d4d')};
SC.choice=(t,d)=>{rays('#1a0a2a','#05020a',900,'rgba(180,120,255,.06)');const k=E(d/.4);X.save();X.globalAlpha=k;pill('מה אתה עושה?',540,280,52,'#ffd34d','#111');
 const p=1+.04*Math.sin(t*6);optCard(780,820,'1',['משלם ולוקח','את הדירה'],'#14a44d',d>1.5?p:.9);optCard(300,820,'2',['משאיר את הדירה','ושומר את סבא'],'#2e5bbf',d>4.6?2-p:.9);
 bigText(['הרוב בתגובות','קובע מה קורה 👇'],1270,74,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{rays('#1a0a2a','#05020a',900,'rgba(180,120,255,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהיה מוכר הכל','בבלאק פריידיי 👇'],640,86,'#fff');X.restore()};
SC.follow=(t,d)=>{rays('#1a0a2a','#05020a',900,'rgba(180,120,255,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס','את ההמשך'],1110,62,'#fff');X.restore()};

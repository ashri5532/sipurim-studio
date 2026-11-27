const SC={};
// ===== props (odds — בעולם הזה: מעל כל דבר רואים כמה אחוז סיכוי שזה יצליח) =====
const rays=(c1,c2,cy,col)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=col;X.beginPath();X.moveTo(540,cy);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,cy+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,cy+Math.sin(b)*2500);X.closePath();X.fill()}};
function stampT(txt,x,y,k,col,sz,rot){if(k<=0)return;X.save();X.translate(x,y);X.rotate(rot??-.18);X.scale(L(1.7,1,k),L(1.7,1,k));X.globalAlpha=cl(k*1.5);X.font=`900 ${sz||100}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+60;X.strokeStyle=col;X.lineWidth=14;rr(-w/2,-(sz||100)*.85,w,(sz||100)*1.7,20);X.stroke();X.fillStyle=col;X.fillText(txt,0,4);X.restore()}
function fadeIn(d,s,fn){if(d<s)return;X.save();X.globalAlpha=E((d-s)/.35);fn();X.restore()}
const pcol=n=>n>=70?'#2ecc71':n>=40?'#f1c40f':'#ff4d4d';
// floating percent badge; k = pop-in 0..1, n = number (or string)
function pct(x,y,s,n,k,t,col){if(k<=0)return;const c=col||(typeof n==='number'?pcol(n):'#fff');X.save();X.translate(x,y+Math.sin((t||0)*3+x)*8);const sc=s*(k<1?BK(k):1);X.scale(sc,sc);
 glow(0,0,150,c.startsWith('#')?hexA(c):c,.45);X.fillStyle='rgba(8,10,20,.9)';rr(-120,-62,240,124,30);X.fill();X.strokeStyle=c;X.lineWidth=8;X.stroke();
 X.fillStyle=c;X.font='900 84px Heebo';X.direction='ltr';X.textAlign='center';X.textBaseline='middle';X.fillText(typeof n==='number'?n+'%':n,0,6);
 X.beginPath();X.moveTo(-16,62);X.lineTo(16,62);X.lineTo(0,86);X.closePath();X.fill();X.restore()}
function hexA(c){const r=parseInt(c.slice(1,3),16),g=parseInt(c.slice(3,5),16),b=parseInt(c.slice(5,7),16);return `rgba(${r},${g},${b},A)`}
function bus(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#2e86de';rr(-300,-260,600,240,30);X.fill();X.fillStyle='#bfe3ff';for(let i=0;i<4;i++){rr(-270+i*140,-230,110,90,10);X.fill()}
 X.fillStyle='#1b4f8a';X.fillRect(-300,-110,600,20);X.fillStyle='#ffd34d';rr(200,-250,90,40,8);X.fill();X.fillStyle='#111';X.font='900 30px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('18',245,-229);
 X.fillStyle='#222';[-190,190].forEach(w=>{X.beginPath();X.arc(w,-20,48,0,7);X.fill();X.fillStyle='#888';X.beginPath();X.arc(w,-20,18,0,7);X.fill();X.fillStyle='#222'});X.restore()}
function busStop(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#555';X.fillRect(-8,-420,16,420);X.fillStyle='#27ae60';X.beginPath();X.arc(0,-440,60,0,7);X.fill();X.fillStyle='#fff';X.font='900 50px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('🚌',0,-438);X.restore()}
function falafel(x,y,s,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#c0392b';X.fillRect(-260,-300,520,300);X.fillStyle='#f5e6c8';X.fillRect(-240,-280,480,120);
 for(let i=0;i<6;i++){X.fillStyle=i%2?'#e74c3c':'#fff';X.beginPath();X.moveTo(-280+i*94,-360);X.lineTo(-186+i*94,-360);X.lineTo(-186+i*94,-310);X.arc(-233+i*94,-310,47,0,Math.PI);X.closePath();X.fill()}
 X.fillStyle='#fff';X.font='900 64px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('פלאפל',0,-80);
 X.fillStyle='#e8c07a';rr(-120,-250,240,60,30);X.fill();for(let i=0;i<5;i++){X.fillStyle='#7a4a1e';X.beginPath();X.arc(-80+i*40,-225,16,0,7);X.fill()}X.restore()}
const ME=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#16a085',skin:'#f2c29a',hair:'#2b1d14',ex:ex},o||{}),t);
const DAD=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#7f8c8d',pants:'#34495e',skin:'#d9a07a',hair:'#3a3a3a',ex:ex},o||{}),t);
function specs(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.strokeStyle='#222';X.lineWidth=5;X.beginPath();X.arc(-20,-372,19,0,7);X.moveTo(39,-372);X.arc(20,-372,19,0,7);X.stroke();X.restore()}
const OLD=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#8e5a3c',pants:'#4a4038',skin:'#e8b98f',hair:'#e6e6e6',bald:true,ex:ex},o||{}),t);specs(x,y,s)};
function plane(x,y,s,rot){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.fillStyle='#ecf0f1';rr(-220,-36,440,72,36);X.fill();X.fillStyle='#bdc3c7';X.beginPath();X.moveTo(-40,0);X.lineTo(60,0);X.lineTo(-60,-200);X.lineTo(-120,-200);X.closePath();X.fill();X.beginPath();X.moveTo(-40,0);X.lineTo(60,0);X.lineTo(-60,200);X.lineTo(-120,200);X.closePath();X.fill();
 X.beginPath();X.moveTo(-200,0);X.lineTo(-150,0);X.lineTo(-210,-110);X.lineTo(-240,-110);X.closePath();X.fill();X.fillStyle='#3498db';for(let i=0;i<5;i++){X.beginPath();X.arc(-60+i*44,-8,10,0,7);X.fill()}X.fillStyle='#2c3e50';X.beginPath();X.ellipse(190,-6,26,18,0,0,7);X.fill();X.restore()}
function thought(x,y,r,draw){X.save();X.fillStyle='rgba(255,255,255,.95)';X.beginPath();X.arc(x,y,r,0,7);X.fill();X.beginPath();X.arc(x-r*.55,y+r*1.15,r*.16,0,7);X.fill();X.beginPath();X.arc(x-r*.8,y+r*1.45,r*.09,0,7);X.fill();X.beginPath();X.arc(x,y,r-10,0,7);X.clip();draw();X.restore()}
function skyScene(){const g=X.createLinearGradient(0,-400,0,400);g.addColorStop(0,'#5dade2');g.addColorStop(1,'#d6eaf8');X.fillStyle=g;X.fillRect(-600,-600,1200,1200);X.fillStyle='#fff';[[-150,120,70],[-60,140,90],[160,-120,60]].forEach(c=>{X.beginPath();X.arc(c[0],c[1],c[2],0,7);X.fill()})}
function stairsBg(){const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3a3f4b');g.addColorStop(1,'#1e2129');X.fillStyle=g;X.fillRect(0,0,W,H);
 for(let i=0;i<9;i++){X.fillStyle=i%2?'#6b6f78':'#5c6069';X.fillRect(0,GY+60-i*95,W-i*90,95)}X.fillStyle='#8a6d4a';X.fillRect(80,300,230,560);X.fillStyle='#d4af37';X.beginPath();X.arc(280,600,12,0,7);X.fill();
 X.fillStyle='#e8e1cf';X.font='900 60px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('3',195,370);glow(700,250,300,'rgba(255,230,160,A)',.4);X.fillStyle='#fff6d8';rr(640,220,120,30,15);X.fill()}
function sticker(x,y,s,rot){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.fillStyle='rgba(0,0,0,.35)';X.beginPath();X.arc(8,10,110,0,7);X.fill();X.fillStyle='#0b0b0f';X.beginPath();X.arc(0,0,110,0,7);X.fill();X.strokeStyle='#444';X.lineWidth=6;X.stroke();
 X.fillStyle='#333';X.beginPath();X.moveTo(60,-95);X.quadraticCurveTo(110,-110,100,-50);X.closePath();X.fill();X.restore()}
function optCard(x,y,num,txt,col,sc){X.save();X.translate(x,y);X.scale(sc,sc);X.fillStyle=col;rr(-230,-190,460,380,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText(num,0,-70);X.font='900 50px Heebo';X.direction='rtl';txt.forEach((l,i)=>X.fillText(l,0,60+i*62));X.restore()}
function cross(x,y,r,k){if(k<=0)return;X.save();X.strokeStyle='#ff3b3b';X.lineWidth=18;X.lineCap='round';X.beginPath();X.moveTo(x-r,y-r);X.lineTo(L(x-r,x+r,k),L(y-r,y+r,k));X.stroke();if(k>.5){const k2=(k-.5)*2;X.beginPath();X.moveTo(x+r,y-r);X.lineTo(L(x+r,x-r,k2),L(y-r,y+r,k2));X.stroke()}X.restore()}
function icon(x,y,em,lab){X.save();X.fillStyle='rgba(255,255,255,.12)';X.beginPath();X.arc(x,y,120,0,7);X.fill();X.font='120px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText(em,x,y);X.fillStyle='#fff';X.font='900 50px Heebo';X.direction='rtl';X.fillText(lab,x,y+180);X.restore()}

// ===== scenes =====
SC.cover=(t,d)=>{rays('#062a2a','#020a0c',1200,'rgba(46,204,113,.09)');
 ME(540,2020,2.0,'shock',t,{armL:2.6,armR:-2.6,sweat:true});
 pct(540,1060,1.25,3,1,t);pct(190,1300,.8,99,1,t);pct(890,1300,.8,20,1,t);
 pill('בעולם הזה...',540,280,46,'rgba(0,0,0,.65)','#2ecc71','#2ecc71');
 X.save();const p=1+.03*Math.sin(t*6);X.translate(540,470);X.scale(p,p);X.font='900 124px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';X.lineWidth=24;X.strokeStyle='#000';
 X.strokeText('מעל כל דבר',0,0);X.fillStyle='#fff';X.fillText('מעל כל דבר',0,0);X.strokeText('רואים את הסיכוי',0,150);X.fillStyle='#ffd34d';X.fillText('רואים את הסיכוי',0,150);X.restore();
 pill('ומעל החלום שלך: 3% 😨',540,850,60,'rgba(0,0,0,.8)','#ff6b6b','#ff6b6b')};
SC.street=(t,d)=>{sky('#87c5ea','#d9eef8');city(t,true);
 car(250,GY+120,1.4,'#e74c3c');pct(250,GY-190,.8,64,E((d-.3)/.4),t);
 house(820,GY+40,1.3);pct(820,GY-420,.8,88,E((d-.9)/.4),t);
 person(540,GY+260,1.2,Object.assign(crowdP(3),{ex:'neutral'}),t);pct(540,GY-300,.8,41,E((d-1.4)/.4),t);
 bigText(['כמה אחוז סיכוי','שזה יצליח'],330,100,'#fff')};
SC.bus=(t,d)=>{sky('#87c5ea','#d9eef8');city(t,true);busStop(900,GY+60,1.2);
 const bx=L(-500,380,E(d/1.2));bus(bx,GY+60,1.3);pct(bx,GY-420,1,20,E((d-.9)/.4),t);
 ME(880,GY+300,1.15,'worried',t,{look:-1});clockBadge('איחור',720,560,1.1);
 pill('האוטובוס?',540,280,62,'rgba(0,0,0,.75)','#fff')};
SC.falafel=(t,d)=>{sky('#f6b26b','#ffe8c2');city(t,true);falafel(540,GY+40,1.6,t);pct(540,GY-760,1.3,99,E((d-1.4)/.35),t);
 pill('הפלאפל של השכונה?',540,280,60,'rgba(0,0,0,.75)','#fff');
 ME(860,GY+330,1.1,'smile',t,{look:-1})};
SC.quit=(t,d)=>{sky('#4a5568','#a0aec0');city(t,true);
 for(let i=0;i<4;i++){const x=150+i*260;person(x,GY+300,1.0,Object.assign(crowdP(i+1),{ex:'worried',armL:.05,armR:-.05}),t);pct(x,GY-170,.6,[12,31,44,7][i],E((d-.3-i*.25)/.4),t)}
 bigText(['אנשים הפסיקו','לנסות'],330,110,'#fff');
 if(d>2.4)stampT('מתחת ל־50% = לא מתחילים',540,800,E((d-2.4)/.35),'#ff4d4d',56,-.06)};
SC.nothing=(t,d)=>{X.fillStyle='#0d1018';X.fillRect(0,0,W,H);glow(540,900,700,'rgba(255,80,80,A)',.15);
 const it=[[810,'💼','לא עסק',0],[540,'❤️','לא אהבה',.5],[270,'⭐','לא חלום',1.8]];
 it.forEach(([x,em,lab,s])=>{fadeIn(d,s,()=>{icon(x,900,em,lab)});cross(x,900,110,E((d-s-.3)/.35))});
 bigText(['מתחת לחמישים...'],420,96,'#ff6b6b')};
SC.dream=(t,d)=>{rays('#0b2545','#030b18',1300,'rgba(93,173,226,.07)');
 ME(540,2050,1.9,d<4.5?'smile':'shock',t,{armL:.2,armR:-.2});
 pill('אתה בן 18',540,260,56,'rgba(0,0,0,.7)','#fff');
 fadeIn(d,1.4,()=>thought(560,760,300,()=>{X.save();X.translate(560,760);skyScene();plane(0,0,.9,-.15+Math.sin(t*2)*.05);X.restore()}));
 fadeIn(d,1.4,()=>tag('להיות טייס',560,1120,54,'#8fd6ff'));
 if(d>4.6){pct(860,520,1.3,3,E((d-4.6)/.35),t)}};
SC.dad=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3b2a22');g.addColorStop(.78,'#5a4032');g.addColorStop(.78,'#2a1f18');g.addColorStop(1,'#140f0b');X.fillStyle=g;X.fillRect(0,0,W,H);
 for(let i=0;i<3;i++){const x=[180,900,540][i];if(i<2||d>1.9){person(x,1850,1.15,Object.assign(crowdP(i+5),{ex:'neutral',armL:.6,armR:-.6}),t)}}
 if(d>1.9){DAD(540,1950,1.6,'worried',t,{armR:-1.3})}
 fadeIn(d,.2,()=>pill('תוותר.',260,900,60,'#fff','#111'));fadeIn(d,.6,()=>pill('אין סיכוי.',830,950,60,'#fff','#111'));
 if(d>1.9)fadeIn(d,1.9,()=>bigText(['גם אבא.'],380,130,'#ff6b6b'));pct(540,620,.9,3,1,t)};
SC.stairs=(t,d)=>{stairsBg();ME(780,1900,1.5,'worried',t,{look:-1});
 const ox=L(-200,330,E(d/1.2));OLD(ox,1840,1.55,'neutral',t,{walk:d<1.2});
 if(d>4.4){const k=E((d-4.4)/.4);X.save();X.globalAlpha=k;X.setLineDash([16,12]);X.strokeStyle='#fff';X.lineWidth=6;rr(ox-120,1840-1.55*404-200,240,124,30);X.stroke();X.setLineDash([]);X.fillStyle='#fff';X.font='900 84px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('?',ox,1840-1.55*404-136);X.restore();
  bigText(['אין מספר','בכלל'],330,110,'#ffd34d')}
 else pill('השכן מהקומה השלישית',540,300,52,'rgba(0,0,0,.75)','#fff');
 pct(780,1900-1.5*404-110,.75,3,1,t)};
SC.neighbor=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#3a2a1e');g.addColorStop(1,'#120c08');X.fillStyle=g;X.fillRect(0,0,W,H);glow(540,1100,800,'rgba(255,200,130,A)',.3);
 OLD(540,2000,2.1,'smile',t,{armR:-.5});
 X.fillStyle='#fff';rr(110,300,860,330,50);X.fill();X.beginPath();X.moveTo(500,620);X.lineTo(540,720);X.lineTo(620,620);X.fill();
 X.fillStyle='#222';X.font='900 58px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';
 if(d<5){X.fillText('את המספר שלי',540,410);X.fillText('הסתרתי לפני 60 שנה',540,510)}
 else{X.fillText('כל מה שיש לי',540,410);X.fillStyle='#c0392b';X.fillText('השגתי באחוז אחד',540,510)}
 if(d>6.2)pct(860,900,1.1,1,E((d-6.2)/.35),t,'#ffd34d')};
SC.sticker=(t,d)=>{X.fillStyle='#0b0d14';X.fillRect(0,0,W,H);
 const fade=cl((d-2.4)/1.4);SEED=7;for(let i=0;i<9;i++){X.save();X.globalAlpha=1-fade;pct(150+R()*780,470+R()*420,.6,Math.floor(R()*99)+1,1,t+i);X.restore()}
 X.save();X.translate(540,1250);X.fillStyle='#e0ad85';rr(-110,120,220,600,60);X.fill();X.fillStyle='#f2c29a';X.beginPath();X.ellipse(0,40,250,150,0,0,7);X.fill();
 [-190,-95,0,95].forEach((fx,i)=>{X.save();X.translate(fx*1.1+20,-60);X.rotate(-.15+i*.1);rr(-38,-170,76,200,38);X.fill();X.restore()});X.save();X.translate(240,60);X.rotate(.9);rr(-38,-160,76,190,38);X.fill();X.restore();X.restore();
 sticker(540,1280,1.15*(d<.5?BK(d/.5):1),Math.sin(t)*.1);
 if(d<4.5)pill('מדבקה שחורה קטנה',540,300,58,'rgba(0,0,0,.75)','#fff','#fff');
 if(d>4.5)bigText(['לתמיד.'],560,150,'#ff4d4d')};
SC.dilemma=(t,d)=>{X.fillStyle='#0a0c14';X.fillRect(0,0,W,H);
 X.save();X.beginPath();X.rect(540,0,540,H);X.clip();X.translate(810,950);skyScene();plane(0,-100,.8,-.2);X.restore();
 X.save();X.beginPath();X.rect(0,0,540,H);X.clip();glow(270,1000,500,'rgba(255,60,60,A)',.2+.1*Math.sin(t*5));person(270,1500,1.3,{shirt:'#c0392b',hair:'#5a3b24',long:true,ex:'worried'},t);X.restore();
 X.strokeStyle='rgba(255,255,255,.3)';X.lineWidth=6;X.setLineDash([16,14]);X.beginPath();X.moveTo(540,300);X.lineTo(540,1500);X.stroke();X.setLineDash([]);
 tag('אף אחד לא יגיד לוותר',810,420,42,'#7dffb0');
 if(d>3.1){tag('בסכנה?',270,420,48,'#ff6b6b');pct(270,780,1,'??',E((d-3.1)/.35),t,'#ff4d4d')}};
SC.choice=(t,d)=>{rays('#0a2a1e','#020a06',900,'rgba(46,204,113,.06)');const k=E(d/.4);X.save();X.globalAlpha=k;pill('מה אתה עושה?',540,280,52,'#ffd34d','#111');
 const p=1+.04*Math.sin(t*6);optCard(780,820,'1',['מדביק ומפסיק','לראות מספרים'],'#14a44d',d>1.7?p:.9);optCard(300,820,'2',['ממשיך לראות','וסומך על האחוזים'],'#2e5bbf',d>5.2?2-p:.9);
 bigText(['כתבו 1 או 2','בתגובות 👇'],1270,80,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{rays('#0a2a1e','#020a06',900,'rgba(46,204,113,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שמוותר על הכל','מתחת ל־50% 👇'],640,86,'#fff');X.restore()};
SC.follow=(t,d)=>{rays('#0a2a1e','#020a06',900,'rgba(46,204,113,.06)');const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס','את פרק 2'],1110,62,'#fff');X.restore()};

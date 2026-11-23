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
const DAD=(x,y,s,ex,t,o)=>{person(x,y,s,Object.assign({shirt:'#c98a2b',pants:'#5a3d22',skin:'#e8b98f',hair:'#2b1d14',ex:ex},o||{}),t);cap(x,y,s,'#7a4a1e')};
const MOM=(x,y,s,ex,t,o)=>person(x,y,s,Object.assign({shirt:'#7d4a8a',pants:'#3b2a45',skin:'#f2c29a',hair:'#d8d8d8',long:true,ex:ex},o||{}),t);

// ---- scenes ----
SC.cover=(t,d)=>{rays('rgba(255,70,70,.16)','#2a0a12',540,1150,t);glow(540,1000,700,'rgba(255,60,60,A)',.25+.1*Math.sin(t*6));
 shelterDoor(540,1500,1.15,.25,t,.3);
 DAD(330,1560,1.25,'shock',t,{look:1});ME(760,1560,1.35,'shock',t,{armL:2.5,armR:-2.5,sweat:true,look:-1});
 tag('בן 25',330,860,52,'#ffd34d');tag('בן 28',760,820,52,'#7dd3ff');
 pill('המקלט · חלק 3',540,280,50,'#ffd34d','#111');bigText(['אבא שלי','צעיר ממני'],440,120,'#fff')};
SC.vote=(t,d)=>{sky('#14102a','#2a1838');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;
 const n=Math.round(100*E(cl((d-.3)/1.2)));X.save();X.font='900 330px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.lineJoin='round';X.lineWidth=22;X.strokeStyle='rgba(0,0,0,.6)';X.strokeText(n+'%',540,760);X.fillStyle='#7dffb0';X.fillText(n+'%',540,760);X.restore();
 bigText(['מכם בחרתם'],1010,90,'#fff');if(d>1.8){const q=BK((d-1.8)/.4);X.save();X.translate(540,1230);X.scale(q,q);X.fillStyle='#14a44d';rr(-300,-100,600,200,40);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('1 = לספר לו',0,6);X.restore()}
 pill('חלק 2 · התוצאות',540,300,44,'rgba(0,0,0,.6)','#ffd34d','#ffd34d');X.restore()};
SC.tell=(t,d)=>{stairBg(false);MOM(170,1560,1.1,'worried',t,{look:1});ME(450,1560,1.3,'worried',t,{look:1});DAD(800,1560,1.3,d>1.6?'worried':'neutral',t,{look:-1});
 if(d>1.7){const k=E((d-1.7)/.4);X.save();X.globalAlpha=k;tag('אבא · בן 25',800,820,46,'#ffd34d');X.restore()}
 if(d>3.8)bubble('מי אתה?',800,640,64,(d-3.8)/.3,-40)};
SC.son=(t,d)=>{stairBg(false);X.fillStyle='rgba(0,0,0,.25)';X.fillRect(0,0,W,H);ME(540,2150,2.3,'worried',t);
 bubble(['אני הבן שלך'],540,420,80,d/.3,0);if(d>1.9)bubble('...אבא',540,640,70,(d-1.9)/.3,0)};
SC.laugh=(t,d)=>{stairBg(false);DAD(540,1620,1.6,d<.9?'smile':'smile',t,{armR:-.6,armL:.6});
 if(d>1.1)bubble(['הבן שלי בן חמש.','הוא ישן למעלה.'],540,460,64,(d-1.1)/.3,-60);
 // little sleeping kid icon upstairs
 if(d>2.4){const k=E((d-2.4)/.4);X.save();X.globalAlpha=k;X.fillStyle='rgba(255,255,255,.12)';rr(760,780,240,150,20);X.fill();X.fillStyle='#fff';X.font='900 60px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('Zzz',880,855);X.restore()}};
SC.phone=(t,d)=>{stairBg(false);const k=E(d/.4);
 phoneBig(540,820,L(.7,1,k),()=>{X.fillStyle='#10131c';X.fillRect(-226,-450,452,900);X.fillStyle='#9aa4b8';X.font='700 40px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('יום שני',0,-260);
  X.fillStyle='#fff';X.font='900 150px Heebo';X.direction='ltr';X.fillText('20:14',0,-140);X.font='900 76px Heebo';X.fillStyle=d>1.9?'#ff5a5a':'#fff';X.fillText('2026',0,10);
  if(d>1.9){X.fillStyle='#7dd3ff';X.font='700 40px Heebo';X.direction='rtl';X.fillText('ירד למקלט בשנת',0,110);X.direction='ltr';X.font='900 56px Heebo';X.fillText('1993',0,170)}},t,false);
 DAD(220,1640,1.15,d>3.2?'shock':'smile',t,{look:1,armL:d>3.2?2.5:.12,armR:d>3.2?-2.5:-.12});MOM(880,1640,1.05,'worried',t,{look:-1})};
SC.missed=(t,d)=>{sky('#14102a','#241a36');stars(t);
 const n=Math.round(33*E(cl((d-2.2)/1.4)));X.save();X.font='900 300px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.lineJoin='round';X.lineWidth=22;X.strokeStyle='rgba(0,0,0,.6)';X.strokeText(n,540,560);X.fillStyle='#ffd34d';X.fillText(n,540,560);X.restore();
 bigText(['שנה. בעשר דקות.'],780,80,'#fff');clockBadge('10:00',540,300,.8);
 if(d>4.4){const k=BK((d-4.4)/.4);X.save();X.globalAlpha=cl(k);backpack(300,1180,k);X.restore();if(d>4.8)pill('כיתה א׳',300,1420,46,'rgba(0,0,0,.7)','#fff')}
 if(d>6.6){const k=BK((d-6.6)/.4);X.save();X.globalAlpha=cl(k);beret(780,1180,k);X.restore();if(d>7)pill('הגיוס',780,1420,46,'rgba(0,0,0,.7)','#fff')}
 if(d>7.9){const k=BK((d-7.9)/.3);X.save();X.translate(540,925);X.scale(k,k);pill('הכל.',0,0,64,'#e8212e','#fff');X.restore()}};
SC.sorry=(t,d)=>{stairBg(false);X.fillStyle='rgba(0,0,0,.2)';X.fillRect(0,0,W,H);DAD(340,1600,1.45,'worried',t,{look:1});MOM(760,1600,1.35,'worried',t,{look:-1});
 if(d>1.3){const k=E((d-1.3)/.4);X.save();X.globalAlpha=k;tag('חיכתה לו 33 שנה',760,700,46,'#d8d8d8');X.restore()}
 if(d>3.9)bubble('סליחה',340,560,80,(d-3.9)/.3,20)};
SC.reverse=(t,d)=>{const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,'#07131f');g.addColorStop(1,'#02060b');X.fillStyle=g;X.fillRect(0,0,W,H);
 const gl=.3+.25*Math.sin(t*3);shelterDoor(540,1480,1.3,0,t,gl);
 if(d>3.2){const k=E((d-3.2)/.4);X.save();X.globalAlpha=k;bigText(['המקלט עובד','גם הפוך'],300,104,'#7dd3ff');X.restore()}
 if(d>5.1){const k=E((d-5.1)/.4);X.save();X.globalAlpha=k;const yr=Math.round(L(2026,1993,E(cl((d-5.6)/2.4))));X.font='900 130px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.lineJoin='round';X.lineWidth=18;X.strokeStyle='rgba(0,0,0,.7)';X.strokeText(yr,540,640);X.fillStyle='#ffd34d';X.fillText(yr,540,640);X.restore()}
 if(d>8.5)pill('כשהיית ילד',540,780,46,'rgba(0,0,0,.7)','#fff')};
SC.siren=(t,d)=>{stairBg(true);city(t);sirenFlash(t,E((d-1)/.3));
 if(d>1.1){const k=BK((d-1.1)/.35);X.save();X.translate(540,700);X.scale(k,k);X.fillStyle='#e8212e';rr(-330,-110,660,220,40);X.fill();X.fillStyle='#fff';X.font='900 130px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='rtl';X.fillText('אזעקה',0,8);X.restore()}
 ME(540,1600,1.3,'shock',t,{armL:2.5,armR:-2.5})};
SC.handle=(t,d)=>{stairBg(true);sirenFlash(t,1);shelterDoor(760,1520,1.05,E(cl((d-1.5)/1))*.35,t,.2);DAD(500,1560,1.3,'worried',t,{look:1,armR:-1.4});ME(180,1560,1.2,'worried',t,{look:1});
 if(d>5.2)bubble(['בוא איתי.','נתקן הכל.'],500,560,66,(d-3.5)/.3,0)};
SC.mom=(t,d)=>{stairBg(true);sirenFlash(t,.6);MOM(540,1620,1.5,'worried',t);
 if(d>.6){const k=E((d-.6)/.4);X.save();X.globalAlpha=k;bigText(['אמא נשארת','לבד'],360,110,'#fff');X.restore()}
 if(d>2.8){const k=BK((d-2.8)/.4);X.save();X.translate(540,640);X.scale(k,k);pill('שוב.',0,0,72,'#e8212e','#fff');X.restore()}};
const voteCard=(x,y,col,num,txt,sc)=>{X.save();X.translate(x,y);X.scale(sc,sc);X.fillStyle=col;rr(-240,-180,480,360,40);X.fill();X.fillStyle='#fff';X.font='900 140px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.fillText(num,0,-60);X.font='900 50px Heebo';X.direction='rtl';const ls=txt.split('|');ls.forEach((l,i)=>X.fillText(l,0,60+i*60-(ls.length-1)*30));X.restore()};
SC.choice=(t,d)=>{sky('#1a0b14','#2a1020');stars(t);const k=E(d/.4);X.save();X.globalAlpha=k;pill('המקלט · חלק 3',540,220,44,'#ffd34d','#111');bigText(['מה אני עושה?'],400,100,'#fff');
 const p=1+.04*Math.sin(t*6);voteCard(790,880,'#14a44d','1','יורד איתו|למקלט',d>1.5?p:.9);voteCard(290,880,'#8a1a1a','2','נשאר|עם אמא',d>3.6?2-p:.9);
 bigText(['הרוב בתגובות','קובע את הסוף 👇'],1250,72,'#ffd34d');X.restore()};
SC.tag=(t,d)=>{sky('#1a0b14','#2a1020');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;bigText(['תייגו את החבר','שהיה יורד למקלט 👇'],760,84,'#fff');X.restore()};
SC.follow=(t,d)=>{sky('#1a0b14','#2a1020');stars(t);const k=E(d/.35);X.save();X.globalAlpha=k;const p=1+.06*Math.sin(d*7);X.save();X.translate(540,880);X.scale(p,p);X.fillStyle='#fe2c55';rr(-330,-90,660,180,90);X.fill();X.fillStyle='#fff';X.font='900 84px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.fillText('+ עקבו',0,6);X.restore();bigText(['כדי לא לפספס את הסוף'],1110,62,'#fff');X.restore()};

// ===== v2 engine: full-frame flat vector, 1080x1920 =====
const cv=document.getElementById('c'),X=cv.getContext('2d');const W=1080,H=1920,GY=1500;
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),E=x=>1-Math.pow(1-cl(x),3),EIO=x=>{x=cl(x);return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2},L=(a,b,k)=>a+(b-a)*k;
const BK=x=>{x=cl(x);const c=1.7;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};
let SEED=1;const R=()=>{SEED=(SEED*16807)%2147483647;return (SEED-1)/2147483646};
function rr(x,y,w,h,r){X.beginPath();X.moveTo(x+r,y);X.arcTo(x+w,y,x+w,y+h,r);X.arcTo(x+w,y+h,x,y+h,r);X.arcTo(x,y+h,x,y,r);X.arcTo(x,y,x+w,y,r);X.closePath()}
function glow(x,y,r,c,a){const g=X.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c.replace('A',a));g.addColorStop(1,c.replace('A',0));X.fillStyle=g;X.beginPath();X.arc(x,y,r,0,7);X.fill()}
const SKINS=['#f2c29a','#d9a07a','#8d5a3b','#f6d1b0'],HAIRS=['#2b1d14','#111','#6b4a2b','#a0522d','#888'],SHIRTS=['#e67e22','#2e86de','#27ae60','#c0392b','#8e44ad','#16a085','#f1c40f','#d35400','#7f8c8d','#e84393'];
function person(x,y,s,o,t){o=o||{};X.save();X.translate(x,y+(o.bob?Math.sin((t||0)*6+x)*4:0));X.scale((o.flip?-1:1)*s,s);
 const skin=o.skin||SKINS[0],shirt=o.shirt||'#e67e22',pants=o.pants||'#2c3e50',hair=o.hair||'#2b1d14';
 const wk=o.walk?Math.sin((t||0)*9)*0.35:0;
 X.fillStyle=pants;X.save();X.translate(-18,-150);X.rotate(wk);rr(-15,0,30,150,12);X.fill();X.fillStyle='#1b1b1b';rr(-22,136,40,16,8);X.fill();X.restore();
 X.fillStyle=pants;X.save();X.translate(18,-150);X.rotate(-wk);rr(-15,0,30,150,12);X.fill();X.fillStyle='#1b1b1b';rr(-18,136,40,16,8);X.fill();X.restore();
 X.fillStyle=shirt;rr(-52,-300,104,170,34);X.fill();if(o.tie){X.fillStyle=o.tie;X.beginPath();X.moveTo(-8,-292);X.lineTo(8,-292);X.lineTo(12,-200);X.lineTo(0,-185);X.lineTo(-12,-200);X.closePath();X.fill()}
 const arm=(side,rot,item)=>{X.save();X.translate(side*48,-285);X.rotate(rot);X.fillStyle=shirt;rr(-14,0,28,130,14);X.fill();X.fillStyle=skin;X.beginPath();X.arc(0,135,15,0,7);X.fill();if(item)item();X.restore()};
 arm(-1,o.armL!=null?o.armL:.12,o.itemL);arm(1,o.armR!=null?o.armR:-.12,o.itemR);
 X.fillStyle=skin;rr(-14,-320,28,30,8);X.fill();X.beginPath();X.ellipse(0,-372,56,62,0,0,7);X.fill();
 if(o.long){X.fillStyle=hair;X.beginPath();X.ellipse(0,-370,64,74,0,Math.PI*1.0,Math.PI*2.0);X.fill();X.fillRect(-64,-372,20,90);X.fillRect(44,-372,20,90)}
 X.fillStyle=hair;X.beginPath();X.ellipse(0,-404,60,38,0,Math.PI,0);X.fill();X.fillRect(-60,-406,18,30);
 if(o.bald){X.fillStyle=skin;X.beginPath();X.ellipse(0,-404,58,30,0,Math.PI,0);X.fill();X.fillStyle=hair;X.fillRect(-58,-390,14,24);X.fillRect(44,-390,14,24)}
 const ex=o.ex||'neutral',bl=(Math.sin((t||0)*1.9+x)>0.985)?.15:1;
 X.fillStyle='#fff';X.beginPath();X.ellipse(-20,-372,15,(ex==='shock'?20:16)*bl,0,0,7);X.fill();X.beginPath();X.ellipse(20,-372,15,(ex==='shock'?20:16)*bl,0,0,7);X.fill();
 X.fillStyle='#111';const lk=(o.look||0)*5;if(bl>.5){X.beginPath();X.arc(-20+lk,-370,ex==='shock'?6:8,0,7);X.fill();X.beginPath();X.arc(20+lk,-370,ex==='shock'?6:8,0,7);X.fill()}
 X.strokeStyle='#111';X.lineWidth=5;X.lineCap='round';
 if(ex==='worried'||ex==='shock'){X.beginPath();X.moveTo(-34,-398);X.lineTo(-10,-392);X.moveTo(34,-398);X.lineTo(10,-392);X.stroke()}
 if(ex==='angry'){X.beginPath();X.moveTo(-34,-394);X.lineTo(-8,-386);X.moveTo(34,-394);X.lineTo(8,-386);X.stroke()}
 X.beginPath();if(ex==='shock'){X.fillStyle='#5a1a1a';X.ellipse(0,-334,10,13,0,0,7);X.fill()}else if(ex==='worried'||ex==='angry'){X.arc(0,-326,14,Math.PI*1.15,Math.PI*1.85);X.stroke()}else if(ex==='smile'){X.arc(0,-346,16,Math.PI*.15,Math.PI*.85);X.stroke()}else{X.moveTo(-12,-338);X.lineTo(12,-338);X.stroke()}
 if(o.sweat){X.fillStyle='#8fd6ff';X.beginPath();X.ellipse(48,-390+((t||0)*40%30),7,11,0,0,7);X.fill()}
 X.restore()}
const crowdP=(i)=>({shirt:SHIRTS[i%SHIRTS.length],skin:SKINS[i%4],hair:HAIRS[i%5],long:i%4===1});
function sky(top,bot){const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,top);g.addColorStop(.78,bot);g.addColorStop(.78,'#0d1220');g.addColorStop(1,'#080b14');X.fillStyle=g;X.fillRect(-200,-200,W+400,H+400)}
function stars(t){SEED=3;for(let i=0;i<110;i++){X.fillStyle=`rgba(255,255,255,${.2+.4*Math.abs(Math.sin(t+i))})`;X.beginPath();X.arc(R()*W,R()*800,R()*2+.5,0,7);X.fill()}}
function city(t,day){SEED=11;let x=-40;while(x<W+40){const w=110+R()*130,h=380+R()*520;X.fillStyle=day?['#9fb4c9','#8aa3bb','#b2c4d6'][Math.floor(R()*3)]:['#172238','#1b2a44','#14203a'][Math.floor(R()*3)];X.fillRect(x,GY-h,w,h);
 for(let wy=GY-h+30;wy<GY-20;wy+=58)for(let wx=x+18;wx<x+w-30;wx+=40){const on=R()<.38;if(day){X.fillStyle='rgba(60,90,130,.55)';X.fillRect(wx,wy,22,30)}else if(on){X.fillStyle='rgba(255,205,110,.85)';X.fillRect(wx,wy,22,30)}}x+=w+10}
 X.fillStyle=day?'#6b7480':'#0d1220';X.fillRect(-200,GY,W+400,H-GY+200);X.fillStyle='rgba(255,255,255,.07)';X.fillRect(-200,GY,W+400,6)}
function pill(txt,x,y,sz,bg,fg,bd){X.save();X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+sz*1.3;X.fillStyle=bg;rr(x-w/2,y-sz*.85,w,sz*1.7,sz*.85);X.fill();if(bd){X.strokeStyle=bd;X.lineWidth=4;X.stroke()}X.fillStyle=fg;X.fillText(txt,x,y+2);X.restore()}
function bigText(lines,y,sz,col){X.save();X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';X.lineJoin='round';lines.forEach((l,i)=>{X.lineWidth=16;X.strokeStyle='rgba(0,0,0,.6)';X.strokeText(l,540,y+i*sz*1.18);X.fillStyle=col||'#fff';X.fillText(l,540,y+i*sz*1.18)});X.restore()}
function tag(txt,x,y,sz,col){X.save();X.font=`900 ${sz}px Heebo`;X.direction='rtl';X.textAlign='center';X.textBaseline='middle';const w=X.measureText(txt).width+sz;X.fillStyle='rgba(10,14,28,.85)';rr(x-w/2,y-sz*.8,w,sz*1.6,14);X.fill();X.strokeStyle=col||'#ffb347';X.lineWidth=4;X.stroke();X.fillStyle=col||'#ffb347';X.fillText(txt,x,y+2);X.restore()}
function bank(x,y,s,o){o=o||{};X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#d9d2c3';X.beginPath();X.moveTo(-330,-430);X.lineTo(0,-560);X.lineTo(330,-430);X.closePath();X.fill();
 X.fillStyle='#b9b09d';X.fillRect(-300,-390,600,330);X.fillStyle='#c7bfae';X.fillRect(-310,-430,620,40);
 for(let i=0;i<5;i++){X.fillStyle='#e8e2d4';X.fillRect(-270+i*130,-390,56,330)}X.fillStyle='#c7bfae';X.fillRect(-330,-60,660,60);
 X.fillStyle='#2a3a55';X.font='900 64px Heebo';X.direction='rtl';X.textAlign='center';X.textBaseline='alphabetic';X.fillText(o.name||'בנק',0,-470);
 X.fillStyle=o.dark?'#0b0b10':'#1b1b22';rr(-70,-250,140,190,10);X.fill();if(o.crack){X.strokeStyle='#3a2f20';X.lineWidth=8;X.beginPath();X.moveTo(-200,-430);X.lineTo(-150,-330);X.lineTo(-190,-240);X.lineTo(-130,-120);X.moveTo(120,-430);X.lineTo(170,-300);X.lineTo(130,-200);X.stroke()}X.restore()}
function atm(x,y,s,empty,t){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#3d4b63';rr(-90,-260,180,260,16);X.fill();X.fillStyle=empty?(Math.sin((t||0)*8)>0?'#8a1a1a':'#5a1010'):'#9fd8ff';rr(-60,-230,120,80,8);X.fill();
 X.fillStyle='#fff';X.font='900 26px Heebo';X.textAlign='center';X.textBaseline='alphabetic';X.direction='rtl';X.fillText(empty?'אין כסף':'כספומט',0,-182);X.fillStyle='#222';rr(-50,-120,100,14,6);X.fill();X.restore()}
function bill(x,y,s,rot){X.save();X.translate(x,y);X.rotate(rot||0);X.scale(s,s);X.fillStyle='#e8a33c';rr(-70,-36,140,72,8);X.fill();X.strokeStyle='#b0731d';X.lineWidth=4;rr(-62,-28,124,56,6);X.stroke();X.fillStyle='#8a5612';X.font='900 30px Heebo';X.textAlign='center';X.textBaseline='middle';X.fillText('200',0,2);X.restore()}
function moneyPile(x,y,k,t){SEED=17;const n=Math.floor(60*k);for(let i=0;i<n;i++){const row=Math.floor(Math.sqrt(i*2));const px=x+(R()-.5)*(520-row*28),py=y-row*26-R()*10;bill(px,py,1,(R()-.5)*.6)}}
function house(x,y,s,c){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=c||'#e8d7b0';X.fillRect(-80,-120,160,120);X.fillStyle='#b5523b';X.beginPath();X.moveTo(-100,-118);X.lineTo(0,-200);X.lineTo(100,-118);X.closePath();X.fill();X.fillStyle='#5a3b24';X.fillRect(-20,-70,40,70);X.fillStyle='#9fd8ff';X.fillRect(-62,-95,30,30);X.fillRect(32,-95,30,30);X.restore()}
function car(x,y,s,c){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle=c||'#2e86de';rr(-110,-70,220,50,20);X.fill();X.beginPath();X.moveTo(-60,-70);X.lineTo(-30,-110);X.lineTo(50,-110);X.lineTo(80,-70);X.fill();X.fillStyle='#9fd8ff';X.beginPath();X.moveTo(-48,-72);X.lineTo(-24,-102);X.lineTo(8,-102);X.lineTo(8,-72);X.fill();X.fillStyle='#111';[-60,60].forEach(w=>{X.beginPath();X.arc(w,-20,22,0,7);X.fill()});X.restore()}
function shop(x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='#f4f1ea';X.fillRect(-110,-170,220,170);for(let i=0;i<6;i++){X.fillStyle=i%2?'#e74c3c':'#fff';X.fillRect(-120+i*40,-200,40,40)}X.fillStyle='#9fd8ff';X.fillRect(-90,-130,90,90);X.fillStyle='#5a3b24';X.fillRect(30,-110,50,110);X.restore()}
function phoneBig(x,y,s,draw,t,buzz){X.save();X.translate(x+(buzz?Math.sin(t*70)*6:0),y);X.scale(s,s);X.fillStyle='#16161c';rr(-250,-480,500,960,60);X.fill();X.fillStyle='#0b141a';rr(-226,-450,452,900,40);X.fill();X.save();rr(-226,-450,452,900,40);X.clip();draw();X.restore();X.fillStyle='#222';rr(-60,-468,120,14,7);X.fill();X.restore()}
function waBubble(y,txt,sz,a){X.save();X.globalAlpha=a??1;X.font=`700 ${sz||38}px Heebo`;X.direction='rtl';X.textAlign='right';X.textBaseline='middle';const w=Math.min(400,X.measureText(txt).width+50);X.fillStyle='#1f2c34';rr(200-w,y-40,w,80,18);X.fill();X.fillStyle='#e9edef';X.fillText(txt,180,y+2);X.restore()}
function clockBadge(txt,x,y,s){X.save();X.translate(x,y);X.scale(s,s);X.fillStyle='rgba(10,14,28,.9)';rr(-230,-80,460,160,30);X.fill();X.strokeStyle='#ff5a5a';X.lineWidth=6;rr(-230,-80,460,160,30);X.stroke();X.fillStyle='#ff5a5a';X.font='900 110px Heebo';X.textAlign='center';X.textBaseline='middle';X.direction='ltr';X.fillText(txt,0,8);X.restore()}
function bar(x,y,w,h,col,lab,val,k){X.fillStyle='rgba(255,255,255,.08)';rr(x,y-h,w,h,16);X.fill();X.fillStyle=col;const hh=h*k;rr(x,y-hh,w,hh,16);X.fill();X.save();X.font='900 46px Heebo';X.direction='rtl';X.textAlign='center';X.fillStyle='#fff';X.fillText(lab,x+w/2,y+60);X.fillStyle=col;X.font='900 54px Heebo';X.fillText(val,x+w/2,y-hh-30);X.restore()}
function vignette(){const g=X.createRadialGradient(540,960,500,540,960,1200);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.55)');X.fillStyle=g;X.fillRect(0,0,W,H)}
function zoomCam(u,z0,z1,cx,cy){const z=L(z0,z1,EIO(u));X.translate(cx,cy);X.scale(z,z);X.translate(-cx,-cy)}

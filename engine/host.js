// ===== "האח" — the channel host. host(x,y,s,o,t)
// o: ex 'cool'|'smile'|'shock'|'wink', talk (bool: animated mouth), armL/armR (rad), pose 'wave'|'point'|'shrug'|'cross', flip, glasses (default true), look
function host(x,y,s,o,t){o=o||{};t=t||0;X.save();X.translate(x,y+(o.bob!==false?Math.sin(t*3)*4:0));X.scale((o.flip?-1:1)*s,s);
 const hood='#16161c',hood2='#23232b',gold='#ffc93c';
 let aL=.15,aR=-.15;if(o.pose==='wave'){aR=-2.5+Math.sin(t*8)*.25}if(o.pose==='point'){aR=-1.75}if(o.pose==='shrug'){aL=1.0;aR=-1.0}if(o.armL!=null)aL=o.armL;if(o.armR!=null)aR=o.armR;
 // legs + sneakers
 X.fillStyle='#2b3550';rr(-40,-160,34,160,14);X.fill();rr(6,-160,34,160,14);X.fill();
 X.fillStyle='#fff';rr(-52,-14,50,22,10);X.fill();rr(4,-14,50,22,10);X.fill();X.fillStyle=gold;X.fillRect(-52,2,50,6);X.fillRect(4,2,50,6);
 // arms (behind body for cross pose handled after)
 const arm=(side,rot)=>{X.save();X.translate(side*58,-300);X.rotate(rot);X.fillStyle=hood;rr(-17,0,34,140,17);X.fill();X.fillStyle=hood2;rr(-17,112,34,22,8);X.fill();X.fillStyle='#f0a838';X.beginPath();X.arc(0,146,17,0,7);X.fill();X.restore()};
 if(o.pose!=='cross'){arm(-1,aL);arm(1,aR)}
 // hoodie body
 X.fillStyle=hood;rr(-64,-320,128,180,40);X.fill();X.fillStyle=hood2;rr(-44,-210,88,46,16);X.fill(); // pocket
 X.strokeStyle='#e8e8e8';X.lineWidth=4;X.beginPath();X.moveTo(-18,-312);X.lineTo(-22,-250);X.moveTo(18,-312);X.lineTo(22,-250);X.stroke();
 // chain + key
 X.strokeStyle=gold;X.lineWidth=6;X.beginPath();X.moveTo(-40,-318);X.quadraticCurveTo(0,-250,40,-318);X.stroke();
 X.save();X.translate(0,-262);X.rotate(Math.sin(t*3)*.08);glow(0,14,46,'rgba(255,200,60,A)',.45);X.fillStyle=gold;X.beginPath();X.arc(0,0,13,0,7);X.fill();X.fillStyle=hood;X.beginPath();X.arc(0,0,5,0,7);X.fill();X.fillStyle=gold;X.fillRect(-4,10,8,34);X.fillRect(-12,30,8,6);X.fillRect(-12,40,8,5);X.restore();
 if(o.pose==='cross'){X.fillStyle=hood;rr(-70,-250,140,40,20);X.fill();X.fillStyle='#f0a838';X.beginPath();X.arc(-70,-230,16,0,7);X.arc(70,-230,16,0,7);X.fill()}
 // head
 const hy=-400,ex=o.ex||'cool';const g=X.createRadialGradient(-20,hy-30,10,0,hy,90);g.addColorStop(0,'#ffe08a');g.addColorStop(1,'#f0a030');X.fillStyle=g;X.beginPath();X.arc(0,hy,82,0,7);X.fill();
 // cap (dome + side brim + star)
 X.fillStyle='#0d0d10';X.beginPath();X.ellipse(0,hy-22,84,66,0,Math.PI,0);X.fill();X.fillRect(-84,hy-28,168,16);X.beginPath();X.ellipse(80,hy-30,62,18,-.25,0,7);X.fill();
 X.fillStyle=gold;star5(0,hy-58,16);
 // face
 const glasses=o.glasses!==false&&ex!=='shock';
 if(glasses){X.fillStyle='#0b0b0b';X.beginPath();X.moveTo(-64,hy+2);X.lineTo(64,hy+2);X.lineTo(58,hy+16);X.quadraticCurveTo(40,hy+44,14,hy+22);X.lineTo(-14,hy+22);X.quadraticCurveTo(-40,hy+44,-58,hy+16);X.closePath();X.fill();
  X.fillStyle='rgba(255,255,255,.85)';X.fillRect(-46,hy+9,20,6);X.fillRect(26,hy+9,20,6);if(ex==='wink'){}}
 else{X.fillStyle='#fff';X.beginPath();X.ellipse(-26,hy+12,17,ex==='shock'?22:16,0,0,7);X.ellipse(26,hy+12,17,ex==='shock'?22:16,0,0,7);X.fill();X.fillStyle='#111';const lk=(o.look||0)*5;X.beginPath();X.arc(-26+lk,hy+14,7,0,7);X.arc(26+lk,hy+14,7,0,7);X.fill();
  X.strokeStyle='#3a2410';X.lineWidth=6;X.lineCap='round';X.beginPath();X.moveTo(-42,hy-18);X.lineTo(-12,hy-22);X.moveTo(42,hy-18);X.lineTo(12,hy-22);X.stroke()}
 // mouth
 const open=o.talk?Math.max(0,Math.sin(t*15))*Math.abs(Math.sin(t*4.3)):0;X.lineCap='round';
 if(ex==='shock'){X.fillStyle='#4a1a0a';X.beginPath();X.ellipse(0,hy+52,16,20,0,0,7);X.fill()}
 else if(open>.15){X.fillStyle='#4a1a0a';X.beginPath();X.ellipse(4,hy+50,24,6+open*14,0,0,7);X.fill();X.fillStyle='#ff7a6a';X.beginPath();X.ellipse(4,hy+54+open*6,12,4+open*4,0,0,7);X.fill()}
 else if(ex==='smile'||ex==='wink'){X.strokeStyle='#3a2410';X.lineWidth=7;X.beginPath();X.arc(0,hy+30,30,Math.PI*.18,Math.PI*.82);X.stroke()}
 else{X.strokeStyle='#3a2410';X.lineWidth=7;X.beginPath();X.moveTo(-28,hy+46);X.quadraticCurveTo(4,hy+62,30,hy+40);X.stroke()}
 X.restore()}
function star5(x,y,r){X.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr_=i%2?r*.45:r;X.lineTo(x+Math.cos(a)*rr_,y+Math.sin(a)*rr_)}X.closePath();X.fill()}

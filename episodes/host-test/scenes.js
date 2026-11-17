const SC={};
function rays(c1,c2,ray){const g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,c1);g.addColorStop(1,c2);X.fillStyle=g;X.fillRect(0,0,W,H);for(let i=0;i<24;i++){if(i%2)continue;X.fillStyle=ray;X.beginPath();X.moveTo(540,1100);const a=i/24*Math.PI*2,b=(i+1)/24*Math.PI*2;X.lineTo(540+Math.cos(a)*2500,1100+Math.sin(a)*2500);X.lineTo(540+Math.cos(b)*2500,1100+Math.sin(b)*2500);X.closePath();X.fill()}}
SC.hero=(t,d)=>{rays('#2a1a06','#0a0602','rgba(255,190,60,.08)');glow(540,1050,650,'rgba(255,180,50,A)',.35);host(540,1820,2.15,{ex:'cool',pose:'wave'},t);
 pill('סיפורים של אחים 🔑',540,250,52,'rgba(0,0,0,.65)','#ffc93c','#ffc93c');bigText(['אחי, תקשיב','לסיפור הזה...'],380,100,'#fff')};
SC.sheet=(t,d)=>{rays('#0e1430','#05070f','rgba(120,150,255,.05)');
 host(200,1450,1.25,{ex:'cool',talk:true,pose:'point'},t);host(540,1450,1.25,{ex:'shock',pose:'shrug'},t);host(880,1450,1.25,{ex:'smile',pose:'wave'},t);
 [['מדבר',200],['בהלם',540],['מרוצה',880]].forEach(a=>pill(a[0],a[1],1580,40,'rgba(0,0,0,.7)','#fff'));
 bigText(['האח'],500,110,'#ffc93c');
};

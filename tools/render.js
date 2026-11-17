// node tools/render.js <ep> <k> <n> <dur> <port> [frames...]  -> episodes/<ep>/frames/NNNNN.jpg
const {chromium}=require('playwright');const [ep,k,n,dur,port,...only]=process.argv.slice(2);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto(`http://127.0.0.1:${port}/video.html?ep=${ep}`);await p.waitForFunction('window.READY===true');
const out=`episodes/${ep}/frames`;const F=Math.round(+dur*30);
const list=only.length?only.map(Number):[...Array(F).keys()].filter(f=>f%+n===+k);
for(const f of list){await p.evaluate(t=>window.render(t),f/30);await p.screenshot({path:`${out}/${String(f).padStart(5,'0')}.jpg`,type:'jpeg',quality:90})}await b.close()})();

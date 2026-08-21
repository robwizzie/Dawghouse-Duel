const http=require('http'),fs=require('fs'),p=require('path');
const root=__dirname;
const TYPES={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.gif':'image/gif','.txt':'text/plain','.md':'text/markdown'};
function send(res,f){
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('404');}
    res.writeHead(200,{'Content-Type':TYPES[p.extname(f).toLowerCase()]||'application/octet-stream','Cache-Control':'no-store'});
    res.end(d);
  });
}
http.createServer((req,res)=>{
  let u=decodeURIComponent(req.url.split('?')[0]);
  if(u==='/')u='/index.html';
  const f=p.join(root,p.normalize(u).replace(/^(\.\.[\/\\])+/,''));
  fs.stat(f,(e,st)=>{
    if(!e&&st.isFile())return send(res,f);
    // Cloudflare Pages serves /host as host.html. Match that here so the
    // URLs in DEPLOY.md behave the same on the laptop as they do live.
    if(!p.extname(f))return send(res,f+'.html');
    send(res,f);
  });
}).listen(8777,()=>console.log('serving on 8777'));

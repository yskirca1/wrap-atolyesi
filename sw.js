const CACHE='wrap-atolyesi-v3';
const CORE=["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "t/cybertruck-car.png", "t/cybertruck-lines.png", "t/cybertruck-mask.png", "t/model3-2024-base-car.png", "t/model3-2024-base-lines.png", "t/model3-2024-base-mask.png", "t/model3-2024-performance-car.png", "t/model3-2024-performance-lines.png", "t/model3-2024-performance-mask.png", "t/model3-car.png", "t/model3-lines.png", "t/model3-mask.png", "t/models-2021-car.png", "t/models-2021-lines.png", "t/models-2021-mask.png", "t/models-2025-plaid-car.png", "t/models-2025-plaid-lines.png", "t/models-2025-plaid-mask.png", "t/modelx-2021-car.png", "t/modelx-2021-lines.png", "t/modelx-2021-mask.png", "t/modely-2025-base-car.png", "t/modely-2025-base-lines.png", "t/modely-2025-base-mask.png", "t/modely-2025-performance-car.png", "t/modely-2025-performance-lines.png", "t/modely-2025-performance-mask.png", "t/modely-2025-premium-car.png", "t/modely-2025-premium-lines.png", "t/modely-2025-premium-mask.png", "t/modely-car.png", "t/modely-l-car.png", "t/modely-l-lines.png", "t/modely-l-mask.png", "t/modely-lines.png", "t/modely-mask.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>{
    const net=fetch(req).then(res=>{ if(res && (res.ok||res.type==='opaque')){ const copy=res.clone(); caches.open(CACHE).then(c=>c.put(req,copy)); } return res; }).catch(()=>hit);
    return hit||net;
  }));
});

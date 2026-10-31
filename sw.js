// 알림 + 새 버전 바로 받기(페이지는 항상 네트워크 우선, 캐시 안 씀). 오프라인 캐시 없음.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.mode!=='navigate')return;
  e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>fetch(r)))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});

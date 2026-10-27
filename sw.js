// Version erhöhen, wenn du index.html änderst – dann lädt die App die neue Version.
const V = 'haspa27-v1';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-180.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (u.origin === location.origin) {
    // Netzwerk zuerst, damit Updates sofort ankommen; offline aus dem Cache.
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com/.test(u.host)) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(n => { const c = n.clone(); caches.open(V).then(x => x.put(e.request, c)); return n; })));
  }
});

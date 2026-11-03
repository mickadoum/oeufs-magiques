/* Le Cahier Magique : fonctionnement hors ligne.
   Les fichiers sont servis depuis l'appareil, puis mis à jour en arrière-plan quand internet est là. */
const CACHE = 'cahier-magique-v1';
const FILES = [
  './', 'index.html', 'manifest.webmanifest',
  'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-512-maskable.png',
  'fonts/andika-latin-400-normal.woff2', 'fonts/andika-latin-700-normal.woff2',
  'fonts/grandstander-latin-700-normal.woff2', 'fonts/grandstander-latin-800-normal.woff2', 'fonts/grandstander-latin-900-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const net = fetch(req).then(res => {
    if (res && res.ok){ const copy = res.clone(); return caches.open(CACHE).then(c => c.put(req, copy)).then(() => res); }
    return res;
  }).catch(() => null);
  e.waitUntil(net.then(() => {}));
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || net.then(res =>
      res || (req.mode === 'navigate' ? caches.match('index.html') : Response.error())
    ))
  );
});

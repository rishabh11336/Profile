const CACHE = 'rs-portfolio-v1';
const STATIC = [
    '/',
    '/blog/',
    '/css/style.css',
    '/css/style-switcher.css',
    '/css/lazy-skeleton.css',
    '/css/opensource.css',
    '/css/blog.css',
    '/css/skins/color-4.css',
    '/js/script.js',
    '/js/lazy-loader.js',
    '/js/style-switcher.js',
    '/images/me.png',
    '/images/Logo.svg'
];

self.addEventListener('install', e =>
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(STATIC)).then(() => self.skipWaiting())
    )
);

self.addEventListener('activate', e =>
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    )
);

self.addEventListener('fetch', e => {
    if (e.request.mode === 'navigate') {
        e.respondWith(
            fetch(e.request).catch(() => caches.match('/'))
        );
    } else {
        e.respondWith(
            caches.match(e.request).then(r => r || fetch(e.request))
        );
    }
});

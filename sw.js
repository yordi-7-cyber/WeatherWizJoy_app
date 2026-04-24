const CACHE = "skye-v1";
const ASSETS = ["/", "/index.html", "/style.css", "/app.js", "/dashboard.html", "/dashboard.css", "/dashboard.js", "/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }).catch(() => caches.match(e.request))
  );
});

// Walk suggestion notification
self.addEventListener("push", e => {
  const data = e.data ? e.data.json() : { title: "Skye", body: "Great time for a walk!" };
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icons/icon-192.png",
    badge: "/icons/icon-192.png",
    tag: "walk-suggestion",
    renotify: true,
    actions: [
      { action: "open", title: "Open Skye" },
      { action: "dismiss", title: "Dismiss" }
    ]
  }));
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  if (e.action !== "dismiss") {
    e.waitUntil(clients.openWindow("/dashboard.html"));
  }
});

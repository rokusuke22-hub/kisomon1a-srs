// ========================================
// 基礎問題精講I・A SRS - Service Worker
// 作成日時: 2026-03-26T19:30:00+09:00
// ========================================
// ★ CACHE_NAME は config.js の SW_CACHE_NAME と一致させること
// ========================================

var CACHE_NAME = "kisomon1a-srs-v1";  // ★ config.jsのSW_CACHE_NAMEと同一

var ASSETS = [
  "./",
  "./index.html",
  "./config.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// インストール時にキャッシュ
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// 古いキャッシュを削除
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

// フェッチ時のキャッシュ戦略（Network First, Cache Fallback）
self.addEventListener("fetch", function(event) {
  // http/https以外のスキーム（chrome-extension://等）はスキップ
  if (!event.request.url.startsWith("http")) return;

  // GAS APIリクエストはキャッシュしない
  if (event.request.url.includes("script.google.com") ||
      event.request.url.includes("script.googleusercontent.com")) {
    return;
  }

  // CDNリクエスト（React等）はキャッシュしない
  if (event.request.url.includes("cdnjs.cloudflare.com")) {
    return;
  }

  event.respondWith(
    fetch(event.request).then(function(response) {
      // 成功したらキャッシュを更新
      var clone = response.clone();
      caches.open(CACHE_NAME).then(function(cache) {
        cache.put(event.request, clone);
      });
      return response;
    }).catch(function() {
      // オフライン時はキャッシュから返す
      return caches.match(event.request);
    })
  );
});

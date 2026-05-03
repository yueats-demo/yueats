self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("yu-eats").then(cache => {
      return cache.addAll(["/yueats/"]);
    })
  );
});

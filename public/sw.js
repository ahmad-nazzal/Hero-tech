/**
  Copyright 2019 Google LLC
      Use of this source code is governed by an MIT-style
      license that can be found in the LICENSE file or at
      https://opensource.org/licenses/MIT.
 */

if (!self.define) {
  let registry = {};
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return (
      registry[uri] ||
      new Promise((resolve) => {
        if ("document" in self) {
          const script = document.createElement("script");
          script.src = uri;
          script.onload = resolve;
          document.head.appendChild(script);
        } else {
          nextDefineUri = uri;
          importScripts(uri);
          resolve();
        }
      }).then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn't register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri =
      nextDefineUri ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (registry[uri]) {
      return;
    }
    let exports = {};
    const require = (depUri) => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require,
    };
    registry[uri] = Promise.all(
      depsNames.map((depName) => specialDeps[depName] || require(depName))
    ).then((deps) => {
      factory(...deps);
      return exports;
    });
  };
}

define(["./workbox-e43f5367"], function (workbox) {
  "use strict";

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();

  // التعامل مع URL الرئيسي
  workbox.registerRoute(
    "/",
    new workbox.NetworkFirst({
      cacheName: "start-url",
      plugins: [
        {
          cacheWillUpdate: async ({ response }) => {
            if (response && response.type === "opaqueredirect") {
              return new Response(response.body, {
                status: 200,
                statusText: "OK",
                headers: response.headers,
              });
            }
            return response;
          },
        },
        {
          // إضافة معالجة للأخطاء
          handlerDidError: async () => {
            return await caches.match("/offline.html");
          },
        },
      ],
    }),
    "GET"
  );

  // تخزين الصور
  workbox.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.CacheFirst({
      cacheName: "images",
      plugins: [
        new workbox.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 أيام
        }),
      ],
    })
  );

  // تخزين المحتوى الثابت مثل CSS و JavaScript
  workbox.registerRoute(
    /\.(?:js|css)$/,
    new workbox.StaleWhileRevalidate({
      cacheName: "static-resources",
    })
  );

  // تخزين صفحات الموقع
  workbox.registerRoute(
    /^https?.*/,
    new workbox.NetworkFirst({
      cacheName: "dynamic-content",
      plugins: [
        new workbox.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60, // يوم واحد
        }),
        {
          // معالجة حالة عدم الاتصال
          handlerDidError: async () => {
            return (
              (await caches.match("/offline.html")) ||
              new Response(
                '<html><body dir="rtl"><h1>لا يوجد اتصال بالإنترنت</h1><p>يرجى التحقق من اتصالك والمحاولة مرة أخرى</p></body></html>',
                {
                  headers: { "Content-Type": "text/html;charset=utf-8" },
                }
              )
            );
          },
        },
      ],
      networkTimeoutSeconds: 10,
    }),
    "GET"
  );

  // معالجة الطلبات الأخرى
  workbox.registerRoute(
    /.*/i,
    new workbox.NetworkOnly({
      cacheName: "dev",
      plugins: [
        {
          // معالجة الأخطاء لجميع الطلبات
          handlerDidError: async () => {
            return new Response("غير متصل بالإنترنت", { status: 503 });
          },
        },
      ],
    }),
    "GET"
  );
});

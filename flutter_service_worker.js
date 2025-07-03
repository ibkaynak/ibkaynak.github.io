'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d51653eabad3e62e8a0f7486c0cbd754",
".git/config": "f872bb3d1e40eaf1dcc93d722d8e7bde",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e46b96ed3d001bbc3c9192d0f1d4049",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44038d773ee4c0f5833a0da746a09142",
".git/logs/refs/heads/main": "5a1039ac57eb1cc6b8d7517fbec96c5a",
".git/logs/refs/remotes/origin/main": "23186e899e125cd50afc7de167a41abf",
".git/objects/06/82fe30331885e198757e67512294a010cb307e": "d18e832d6921f6229f314b686a74b554",
".git/objects/0e/e3e9d750d87e6ca2b71ab481da27fc71ade1a5": "f10c7bb6ae3734edc719e9523ce5d1ec",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/1c/76ad40830fabd7aaf2e68bfe663598e4c22f89": "ce3e99b6f750e4eac8e1a39209f842aa",
".git/objects/1d/e239758af7c1e8ff508b44981874200808871c": "3c429a236325a1e495e4e838b5a185be",
".git/objects/1f/3fe0fc3ddd834155c9fa10acc59f3ee3c819fa": "e812cf27725ecb341d1b5e8423247c30",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/25/3bd1eaa0d6c81cb64a6b8fc80028b8ef28cf99": "014fa31a2de4517378cbae4aa553ba91",
".git/objects/29/25dbd818c540b42adc9284bd544f72b6ec024b": "7ae98e71b78f57c85882669c9df5adb2",
".git/objects/2a/e9d4eb7ba49660950d23a7f3351c567a1c6390": "28cb7ac60cfc522d75118053dfc6b447",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/2770c4ad35698f04ea2958ebd9b772e49b60ea": "58338bd4b38d9bbac2c786e42d550a3d",
".git/objects/36/93cf9a4ba68bca521654ca93af911df125149a": "6feae4c4196f217affc94606bac4a500",
".git/objects/37/bcc84ac15d518620f147cb9f0ed7b5f471af71": "661639f3f399ad181f18d6136b32448e",
".git/objects/39/c2ab6ef71c9c762130106cd53ee699a71be15f": "99a98269db2c98cf02caf9db6fde038b",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/44/cba8bebb1f6035137c51d203f7acd35b289b4d": "d53b88ab5b881a0587a5d3f642aa83ef",
".git/objects/45/35bcd74cd9d5641428767ce0e536626e038936": "2efc89158ed052a042075d37a5343ba4",
".git/objects/47/a514e97507d4dca872c5e81e6201b5d78a6514": "ded530ab8cfbd94cab1d81d81eee6e2b",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4b/60ec2b5a2cc439042f5cd819b5143e30cc076a": "fa7733d5c4f7da7e2dc35b1251f7f1cf",
".git/objects/4b/ce0c722602d4187242d5f43aab8b2fa38e1df7": "92f084e8ba89fecfae96ff9160c45757",
".git/objects/4c/8a09e7f361baec833ae9cbf4408ce0d5855743": "93cdb9d6eec5fd4e2ba5b555075bf67c",
".git/objects/57/a0087e02fc4663d813dd6c949e13f873ed5d87": "a6a8167545ce7ab7eb71cbe211dd71e1",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/59/c5cf068272c58e5532a274c06aafe51cc46b01": "45a467ec0c46dea00b929cc24da017ca",
".git/objects/5e/7f74369b8289d18d85d57bb645a0e8f74c6bb3": "4a94378cdb4cbcea98c57c8d59eefc9c",
".git/objects/63/47433b625fbff490fe7964a40f1674ad6be8f8": "47f1e37c35ff9078263dc1ce2145143a",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/78/b59d4a4bac5981bfc45d753bb942562424bbee": "733e01c4a84c296e85b68482793c9329",
".git/objects/7e/13f4451d94cf7f906eeabc3501effc1c5afc01": "c87b6794f79128849692017357fec8ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/5622cebb6fc44f9562c90b73f0961895c28569": "9ddfeaa931a116b6400ad36650565504",
".git/objects/97/9f4d70819f1805b2609b92e15a19ce85d43ac4": "aed24b12a6b4ce9e0bb6214a37b18038",
".git/objects/98/d868ec2c4bcc481681ac775407968e754be0cf": "967018dfa4ff9b928a2ec32413b5adfe",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a1/47a004b102d7a47a5f09c7e97cb93f552ffec6": "f5e1bbefd139edcbcd48b5dd3471ca16",
".git/objects/a4/5dd329cdaa8bc539cfb9b0eebb239d5477f770": "0ead6aa981c321cba1c0f193826dfc3a",
".git/objects/a6/71ac2e952e9dde2d02d6f3dc06ec94604d1a01": "30931bc57bdf96e11a540a15d3f89782",
".git/objects/a6/ae7f6726ebdd083e58316df335e4529d511d19": "9980a10972eaaaf755cc8e7ca04bbc94",
".git/objects/b6/ae230d45115baae2b788dad977a2eb7b488ca2": "071fc5d1532a5765d864da1442eec578",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cee2fe8f942cad517cf138679ea2bf87d8a737": "54e1050c1440a602eab0dde82909a7cc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/1b52d3abe8a00586e7e2225fbe329cb830d92f": "4a129940c38bd20059a3bee296f2059e",
".git/objects/be/33659650b9893395c735690b324454d8ee82fe": "6554fd5e9e529ff9172afcc9c223eeaa",
".git/objects/c1/90fe211b1608562ca90c5955a60eb6de283e79": "22d1e1ca29335968efa28677beb46b1c",
".git/objects/c3/47249097c1ab7369b051e90f98ba4b3457b643": "c3da4926c96963e4c65c1557761ad7bc",
".git/objects/c4/3acb08405df14b58ddbe1cbd134912876dd0cd": "9a831e3dd07dd907117030c2631b11d2",
".git/objects/d3/5907801752d8aa5847848ad85c7cb9bfb3a115": "13c9df94897b3f8a93001032e14983e0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/91d1e2f0b8f7c8f46c8902e04f2090937a6835": "46259f1367b9dcf335a09b26c4ecf5ff",
".git/objects/e0/883824dc4730b2eb16f469feaa342b2089a15a": "b167de17ae8ea61321ce4149c7f64dac",
".git/objects/e2/3e106bbf995b18d78d1b7e645f5047161e972f": "901f7682c3f09c2f5bcb40b2d238e5db",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/9d5a23888760d4afa25ac10eed71594cac37b3": "8d394092c568c16e4bb169b81c021a91",
".git/objects/f0/16c6c9c4d780d5900003fbd4116a13f71b9b40": "68a205519cf0f00fff42d0d39e728e75",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/51a7216c334da465e20036a50d2a5836fcf8e1": "cdd3d32483782be43eba5df44a945089",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/ff/20d809f53c3064bf9b2a75dcaa974e007d03a0": "8be08fa2005c121824971819598942da",
".git/refs/heads/main": "1b91d669f01ab159adc0aa1162edfef8",
".git/refs/remotes/origin/main": "1b91d669f01ab159adc0aa1162edfef8",
"assets/AssetManifest.bin": "9046dafa511cebcc64fa0b3fe0d70de2",
"assets/AssetManifest.bin.json": "6b8775a5fad3fd3018db5b64cc327960",
"assets/AssetManifest.json": "68484c230825e45735978b62df81a3b5",
"assets/assets/fizikkaynaklar.json": "8f2df292b033008497bf193f7ae9ccbd",
"assets/assets/images/calc.jpg": "bebf574aef6cc77ce4824597a901a036",
"assets/assets/images/fizik.jpg": "e352de47f315290896c0b2afeb93cf9d",
"assets/assets/images/ibdocs.png": "00e795dfe2acd04338193cd0c8db4f9c",
"assets/assets/images/kimya.jpg": "7ce894ce3f235acb0fb76286f7132d5f",
"assets/assets/images/kitap.jpeg": "c81fc86d96949b83aa94db16859360f3",
"assets/assets/images/notebooklm.png": "e6ecead04b0c8673d84dd12298ea2158",
"assets/assets/images/oguz.jpg": "fdadcf16da56a0cf2b0fe31066801f6f",
"assets/assets/images/reddit.png": "57d4f32afa0972c36d98063de9ec47c3",
"assets/assets/images/revision.jpeg": "806cd987e1809e1a7bef3c0e07b49403",
"assets/assets/images/titc.jpg": "c5067c0ee2c3a3ad531d57ad15a08961",
"assets/assets/images/youtube.png": "d337e86234003f84a90624e9a34727c9",
"assets/assets/kimyakaynaklar.json": "23f34948887a22eb9f67da1345e63240",
"assets/assets/matkaynaklar.json": "8602bd04aef7817b87fddd729e1be845",
"assets/assets/titckaynaklar.json": "a2b206f5a3f2bfe3d211c79feb2f20ce",
"assets/assets/turkkaynaklar.json": "bbf4c34e2b0ff87383cd771ded48291b",
"assets/FontManifest.json": "76fdfdf06a29ed5347a1eaed893c28bd",
"assets/fonts/MaterialIcons-Regular.otf": "26fd11eab04ddd0f59cf9ff759d0a844",
"assets/NOTICES": "f9dbbee4bbf945af831dd3aac4e29e86",
"assets/packages/hugeicons/lib/fonts/hugeicons-stroke-rounded.ttf": "85511f0673daae174f9e9f28a9e0c86e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "38d92fda4bdebce9e33055a89690ce31",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c7464ebe185000487123f2845866a49b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9bb4026af24f8b117b5d6a872801623f",
"/": "9bb4026af24f8b117b5d6a872801623f",
"main.dart.js": "3d6031c6e243e554dcf339f188c15734",
"manifest.json": "cb3010fa1fdd7727ae783e74b45147fd",
"preview.png": "62d5a3ea1ea45f1d3f0ef2c0e0e73838",
"version.json": "daf7d87c601cbe10db4bc13742a71ce9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

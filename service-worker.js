if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,i,a)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const r={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return s;case"module":return r;default:return e(c)}})).then(e=>{const c=a(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"wedding-invitation-frontend"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/3.5008606b.css",revision:"aa552dd67d88bfebfe5738b08b3a7ecd"},{url:"css/app.f494a24f.css",revision:"e8d5b668e4a262ab493271d7a9c8ac3c"},{url:"css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"css/vendor.78f0aed0.css",revision:"b698c2cc3363a8be310c145ace550591"},{url:"favicon.ico",revision:"8b9eb314ff597f6f7c7bf8c7a5f717ec"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"64aa9e88dd6545f64226c1e2230f66cc"},{url:"icons/favicon-96x96.png",revision:"d22664397060743b24e8956a5a3fcdec"},{url:"icons/icon-128x128.png",revision:"1be07e62226c8f6a7086f132d9be1642"},{url:"icons/icon-192x192.png",revision:"a1b423855a450ae7adbd9d2a782e0dfb"},{url:"icons/icon-256x256.png",revision:"9f33ebc999e51d0dc2975fc573d53a0b"},{url:"icons/icon-384x384.png",revision:"a126be0d50ed682c3129e0b8b31f680a"},{url:"icons/icon-512x512.png",revision:"02abd24e7c8638e848d96a6bf78d2c27"},{url:"icons/ms-icon-144x144.png",revision:"f256ec55be616f32ae486ab7571eb936"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"index.html",revision:"7023a32ac2d4d7c7fd70a0d69f73d5ed"},{url:"js/1.d1e9b807.js",revision:"69dfbcc9eafca99f30fc094a249174c8"},{url:"js/10.f475cab8.js",revision:"9b792239aa3034cd46e2a068b2588ca2"},{url:"js/11.dabbe620.js",revision:"f1129a46eadc9e02db88b228cadadbfc"},{url:"js/12.f482a211.js",revision:"3ed7efb5b20358431a18574a671a415e"},{url:"js/3.266d4263.js",revision:"e31713c03bc3dee6eb9d3b781dc0ef6a"},{url:"js/4.05585ce1.js",revision:"c15b1fe3d7d8cdbdf3f45bcec3f73fcc"},{url:"js/5.bfce224f.js",revision:"700e958e31313a07f3abcdb6cf8b0383"},{url:"js/6.827c6124.js",revision:"ecd26fef50bfb604f3b968fc4e2b9545"},{url:"js/7.296cf837.js",revision:"20e826c08603ca24564ee984a1759d6a"},{url:"js/8.3a1c612c.js",revision:"e3f85a2a5e2787c46558b162d18c18ec"},{url:"js/9.ca9df311.js",revision:"9327d21d7c4b0cbda31a34720a9a8341"},{url:"js/app.62924f98.js",revision:"99d9b80d9672b2e24f26b78ac1eb0d06"},{url:"js/vendor.8ed65e82.js",revision:"62044c341a74028d65ce629acad56833"},{url:"manifest.json",revision:"77a6b82c4cd9034375ed6d7d8947c9f3"},{url:"static/brooke-lark-oaz0raysASk-unsplash.jpg",revision:"72004665fb6d1d533c80e887d4b3df16"},{url:"static/casey-lee-awj7sRviVXo-unsplash.jpg",revision:"364399d49ac84905a45e624b7a977956"},{url:"static/colours-of-turkey-p7I07kuPSyU-unsplash.jpg",revision:"8caac8cdc5a4c9adb7b2d3799a7261a2"},{url:"static/errant-official-A16vcemhFgc-unsplash.jpg",revision:"69e162090c038b4cf384e8d805fc9ab3"},{url:"static/food-photographer-david-fedulov-E94j3rMcxlw-unsplash.jpg",revision:"4595c4ec41eab556e150f59060aee4cb"},{url:"static/irene-kredenets-KStSiM1UvPw-unsplash.jpg",revision:"ffd6b7fb38d1a31b4f9ceb70c1031461"},{url:"static/irene-kredenets-dwKiHoqqxk8-unsplash.jpg",revision:"f97ffa73613e86bd873263b6f1cf317e"},{url:"static/joseph-gonzalez-QaGDmf5tMiE-unsplash.jpg",revision:"d246ea1ebff46a8030d1ed9c6d7e5346"},{url:"static/set-sj-dDStbFpL-G4-unsplash.jpg",revision:"7221900645faf5fdcb32dcc37aef2f8d"},{url:"static/victoria-volkova-OtSpaD1FBzk-unsplash.jpg",revision:"3918d251e6d808057c76d185dfb78b7e"},{url:"static/victoria-volkova-SvuUJPQZ73s-unsplash.jpg",revision:"b8c20d9c4afab235c6073f441d631d89"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));

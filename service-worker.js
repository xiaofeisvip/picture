if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2019/12/26/hello-world/index.html",revision:"779e67de53563f3823454a33d5a19ed8"},{url:"2020/01/20/暴力提升网速——多拨/index.html",revision:"7b261dac059567e6d78797516433e06d"},{url:"2020/03/24/windows-XP安装pyqt5和pyinstaller的坑/index.html",revision:"a2af06ced4eadd4d56b9566f45863582"},{url:"2020/05/22/travis-ci在Node.js-v14.0下自动构建hexo报错/index.html",revision:"b037dd1e81f880d5001a2385c3ba382c"},{url:"2021/09/13/使用Cloudflare Workers反向代理/index.html",revision:"95f6a5cbb478b47e62384f07f83188e9"},{url:"2021/09/30/win11启用wsl2/index.html",revision:"36d84ed11ad9eb8aa0661bf87e71040d"},{url:"2021/10/02/开机执行python脚本自动登录SNNU校园网/index.html",revision:"b88b1fbef81023bcd530e5a86599098e"},{url:"404.html",revision:"4c00501a96c1896492ce332fd53a3ab7"},{url:"about/index.html",revision:"6db4c45f93f55ae1ca7295fcbad7f12d"},{url:"archives/2019/12/index.html",revision:"4643421846ce78c48e126cbcf4af3e86"},{url:"archives/2019/index.html",revision:"18d4f5615b89a09525418b80d513b0de"},{url:"archives/2020/01/index.html",revision:"a61f1f5c3dfc44d48f7a0d541dd1c920"},{url:"archives/2020/03/index.html",revision:"27b53132f1d5528e4fa4936b7bcc620d"},{url:"archives/2020/05/index.html",revision:"2f3ade4e4b78705a8a6907e06e719d82"},{url:"archives/2020/index.html",revision:"2a719f327bcf820ae65f9adc2f4c2bfb"},{url:"archives/2021/09/index.html",revision:"f6142d68b33b5e69aa526d3f6a7e3382"},{url:"archives/2021/10/index.html",revision:"a1292f3be7919c83fa82c977827a3ea7"},{url:"archives/2021/index.html",revision:"674cc939d49714d4131f970f0ba22618"},{url:"archives/index.html",revision:"c7bd6d17e227787169da07729257684c"},{url:"categories/index.html",revision:"a8d8c65a0a9c16fa2c85e2e95423919b"},{url:"categories/python/index.html",revision:"949edc97577c301d6baf5ad3bcfdc7cd"},{url:"categories/SNNU/index.html",revision:"38787da95adbf570555c7f7fd89a9f60"},{url:"categories/博客/index.html",revision:"54d375c23ad648fe5badadbd23349135"},{url:"categories/宽带/index.html",revision:"eac761c89796a4beaa5798bc2517def1"},{url:"categories/技术/index.html",revision:"8c6203621e0844083fe1de76b83aac28"},{url:"css/index.css",revision:"6ca81837a256e93f1267908881838092"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"03e9fe93f4439ce180fa6c5f9e6db56c"},{url:"hexoimg/about_me.jpg",revision:"30135f02dbbf18b1e7bac3a84b6bace7"},{url:"hexoimg/archive_img.jpg",revision:"b49f3f1be034292343d8523cf5eff418"},{url:"hexoimg/bg1.png",revision:"66090af1abb0720a27a763d937748e70"},{url:"hexoimg/bg2.jpg",revision:"1fa68f2c8b22b8df11315eb687dd651e"},{url:"hexoimg/bg3.jpg",revision:"c118eb0eae96a70760ea93dc08af3121"},{url:"hexoimg/bg4.jpg",revision:"13773ec1c6324d9d984875d7916406d5"},{url:"hexoimg/bg5.jpg",revision:"99abbf6c539a0396c75d2365ae6c39d9"},{url:"hexoimg/category_img.jpg",revision:"27b3a1740aa4b18d048a415e7ed00280"},{url:"hexoimg/music.jpg",revision:"3284d20fbc8827a8d19e4e735ef36f93"},{url:"hexoimg/tag_img.jpg",revision:"d136fad0780208c3e353035c9ff5fe9c"},{url:"img/404.jpg",revision:"cae3eebf3121aedff311f6eea7e76a5e"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/avatar.png",revision:"34d7feb6ea8ef6a36a675634303e36ef"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/cover.jpg",revision:"ad85f42ead6c51a701ab62a6a5681b18"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/index.jpg",revision:"dce4b2c6fe3c36d9c9e8059f64f4d506"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/post_loadding.svg",revision:"2901bcb74c0f032ed139676618432304"},{url:"img/post.jpg",revision:"8fb7d10986b67a1dcba885f50a5de3a9"},{url:"index.html",revision:"512e6893c5c8ec87cf0210aef683c606"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"369e1d7615b84e3e05251eeeb7e25df0"},{url:"live2dw/assets/moc/hijiki.2048/texture_00.png",revision:"817ca52e35fef3ef3a452127d1c88f43"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"47e49ba0964f41d5ce909e8815aed94b"},{url:"tags/hexo/index.html",revision:"00b4ab2911d05d28a393fddbc3b3a1ee"},{url:"tags/index.html",revision:"5040e5b65bc693a3da5f6941a028e630"},{url:"tags/pyqt5/index.html",revision:"f0980b6a86a5cca32820bb93aca93bea"},{url:"tags/serverless/index.html",revision:"c313adb3b89ff5c2f9925960a8277cad"},{url:"tags/travis-CI/index.html",revision:"8c8ed27d919ef8a746e76ed4440dc6e0"},{url:"tags/v2ray/index.html",revision:"fc3d91cdde5980a9e4480a6e509f384e"},{url:"tags/wifi/index.html",revision:"a8f7882fc20af78a4490477eaab3b883"},{url:"tags/windowsXP/index.html",revision:"b8d4e647f3d7075bdad1dfd5f2577dcb"},{url:"tags/多拨/index.html",revision:"513b78763ec5664df930ee211aab1416"},{url:"tags/宽带/index.html",revision:"e4108401a903635e711d93e43df6a83e"},{url:"tags/技术/index.html",revision:"ea4424accb055cdbdf809ffb84c4d925"},{url:"tags/提速/index.html",revision:"158b2037c2fe861fc0af2be53c0eae47"},{url:"tags/网络/index.html",revision:"d1471d4b9b958ca554a1f1e8ce3b674f"},{url:"tags/虚拟机/index.html",revision:"19b6984b98f2c5621191f9d220f5fcf2"},{url:"tags/语雀/index.html",revision:"da8a31f96498ee26babaccfd57c7cd4c"}],{})}));
//# sourceMappingURL=service-worker.js.map

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function e(t){return void 0===t}function r(t){return null===t}function o(t){return!e(t)&&!r(t)}function i(t){return t}function c(t,n,e){const r=t.length;for(let o=0;o<r;o++)n(t[o],o,t,r,e);return t}function u(t,n=i,e=[],r){return c(t,((t,i,c,u)=>{const s=n(t,i,e,c,u,r);o(s)&&e.push(s)})),e}async function s(t,n){const e=t.length;for(let r=0;r<e;r++)await n(t[r],r,t,e);return t}async function a(t,n=i){const e=[];return await s(t,(async(t,r,i)=>{const c=await n(t,r,e,i);o(c)&&e.push(c)})),e}function l(t,n,e){const r=[];let o=t;for(;o<n;)r.push(o),o+=e;return r}function f(t,n,e){const r=e<0?-1*e:e,o=[];let i=t;for(;i>n;)o.push(i),i-=r;return o}function h(t,n){return t.forEach(n),t}const p=Array.isArray;function d(t){return p(t)&&t||o(t)&&[t]||[]}function g(t){return t.flat(1/0)}const m=Reflect.construct;function y(t,n=[],e){return e?m(t,n,e):m(t,n)}function b(...t){const n=y(Map),e=[];return c(t,((t,e)=>{c(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),h(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function A(t,n,e=t.length){return t.splice(n,e)}function w(t,n,e){const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function v(t,n){const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function C(t,n,e){const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}function I(t,n,e=[],r){return c(t,((t,o,i,c)=>{!0===n(t,o,e,i,c,r)&&e.push(t)})),e}const O=Object.keys;function F(t){if(t)return O(t)}const S=/\.|\[/,j=/]/g,x="";function E(t){return t.replace(j,x).split(S)}function M(t,n){if(!n)return!1;let e=n;return C(p(t)?t:E(t),(t=>(e=e[t],o(e)))),e}const L=Object.hasOwn;function T(t,...n){return C(n,(n=>{const e=E(n);if(1===e.length)return L(t,n);{const n=e.pop(),r=M(e,t);return!!r&&L(r,n)}}))}const N=t=>!!o(t)&&"Object("===t.constructor.toString().trim().slice(9,16),R=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(N(t)){const e=F(t);if(T(n,e))return C(e,(e=>R(t[e],n[e])))}else if(p(t)&&t.length===n.length)return C(t,((t,e)=>R(t,n[e])));return!1};const k=Math.max;function $(t,n,e=[],r){return c(t,((t,o,i,c)=>{e[o]=n(t,o,e,i,c,r)})),e}async function U(t,n){const e=[];return await s(t,(async(t,r,o)=>{e[r]=await n(t,r,o)})),e}const B=(t,n)=>t-n;const D=(t,n)=>n-t;const{floor:P,random:q}=Math;function z(t,n=0){return P(q()*(t-n))+n}const W=Array.from;function H(t,n=t.length){if(t.length<=1)return W(t);const e=W(t);let r,o,i=0;for(;i<n;)r=z(e.length-1,0),o=e[i],e[i]=e[r],e[r]=o,i++;return e}const K=Math.min;function V(t,n,e){return e.indexOf(t)===n}function _(t,n,e){return t!==e[n-1]}function Z(t,n){return n?t.filter(_):t.filter(V)}function J(t,n,e,r,o){if(t[o]===r)return!0}function G(t,n,e=!0){return(e?t:[...t]).sort(((t,e)=>function(t,n,e){return n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1}(t,e,n)))}function Q(t,n,e){return n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1}function X(t,n="id",e=!0){return(e?t:[...t]).sort(((t,e)=>Q(t,e,n)))}function Y(t,n){return $(n,(n=>t[n]))}const tt=/\.([0-9a-z]+)/;function nt(t){return n=>!!o(n)&&t.test(n)}const et=nt(/\.css$/),rt=nt(/\.html$/),ot=nt(/\.js$/),it=nt(/\.json$/);const ct=t=>!!o(t)&&t instanceof Function;function ut(t,n){return c(F(t),((e,r,o,i)=>{n(t[e],e,t,i,o)}))}function st(t,n,e={}){return ut(t,((t,r,o,i,c)=>{e[r]=n(t,r,e,o,i,c)})),e}function at(t){return!!t&&t instanceof Promise}function lt(t,n){return!!o(t)&&t.constructor===n}function ft(t){return n=>lt(n,t)}function ht(t){return t?.constructor?.name}function pt(t){return n=>n&&ht(n)===t||!1}function dt(t){return function(n,...e){return e?t(n)&&C(e,t):t(n)}}const gt=pt("AsyncFunction"),mt=dt(gt);function yt(t,n,e,r,i,c,u,s){return(a,l,f)=>{let h;const d=mt(l);if(o(a)&&l)return p(a)?h=d?n:t:N(a)?h=d?r:e:c&&a.forEach?h=d?c:i:s&&(h=d?u:s),h(a,l,f)}}const bt=yt($,st);const At=Object.assign;function wt(t,...n){if(t)return At(t,...n)}const vt=async(t,n)=>{const e=F(t);return await s(e,((r,o,i,c)=>n(t[r],r,t,c,e))),t};async function Ct(t,n){const e=[],r=[];let o=0;t.forEach(((t,n)=>{e[o]=t,r[o]=t,o++}));for(let t=0;t<o;t++)await n(e[t],r[t]);return t}function It(t,n){for(const[e,r]of t)n(r,e,t);return t}async function Ot(t,n){for await(const[e,r]of t)await n(r,e,t);return t}const Ft=yt(c,s,ut,vt,h,Ct,It,Ot),St=(t,n)=>(Ft(n,((n,e)=>{t.methods[e]=(...e)=>(n(t.value,...e),t.methods)})),t);const jt=!0,xt=!1,Et=()=>{};function Mt(t,n){for(let e=0;e<t;e++)n(e)}class Lt{list=y(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,jt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Tt=y(Lt);function Nt(t,n){return Tt.set(t,n)}const Rt=Reflect.apply;const kt=yt(c,s,ut,vt,h,Ct,It,Ot);const $t=Object.is,Ut=Function.prototype;function Bt(t){return Ut.call.bind(t)}const Dt=Object.getOwnPropertyNames,Pt=Object.getOwnPropertyDescriptor,qt=Object.defineProperty,zt=Bt(Object.hasOwnProperty);const{random:Wt}=Math;function Ht(t,n=i,e={}){return ut(t,((t,r,i,c,u)=>{const s=n(t,r,e,i,c,u);o(s)&&(e[r]=s)})),e}async function Kt(t,n=i,e={}){return await vt(t,(async(t,r,i,c,u)=>{const s=await n(t,r,e,i,c,u);o(s)&&(e[r]=s)})),e}function Vt(t,n,e={}){return ut(t,((t,r,o,i,c)=>{!0===n(t,r,e,o,i,c)&&(e[r]=t)})),e}function _t(t){return F(t).length}const Zt=(t,n)=>{const e={};return c(t,((t,r)=>{e[t]=n[r]})),e},Jt=/[-_]/g,Gt=/ (.)/g;function Qt(t,n=1){return t.substr(n)}const Xt=/%(?![\da-f]{2})/gi,Yt=/&/g,tn=/</g,nn=/>/g,en=/"/g;function rn(t){return decodeURIComponent(t.replace(Xt,(()=>"%25")))}function on(t){return t.replace(Yt,"&amp;").replace(tn,"&lt;").replace(nn,"&gt;").replace(en,"&quot;")}const cn=/\S+/g,un=/\w+/g;const sn=(t,n,e)=>{const r=t.split(""),o=r.length;let i,c=e-n;for(;c<o&&c>=0&&(i=r[c]," "!==i);c--);return t.slice(0,c).trim()},an=(t,n,e)=>{const r=t.split(""),o=r.length;let i,c=n;for(;c<o&&c>0&&(i=r[c]," "!==i);c++);return t.substr(c,e).trim()};const ln=/ (.)/g;function fn(t){return t[0].toUpperCase()}function hn(t){return fn(t)+Qt(t).toLowerCase()}const pn="[object Arguments]";const dn=pt("Number"),gn=dt(dn);function mn(t){return!o(t)}const yn=pt("BigInt"),bn=dt(yn),An=pt("Boolean"),wn=dt(An),vn=pt("ArrayBuffer"),Cn=dt(vn);const In=pt("Set"),On=dt(In),Fn=pt("Date"),Sn=dt(Fn),jn=ft(String);function xn(t){return Boolean(t.length)}const En=pt("Float32Array"),Mn=dt(En),Ln=pt("Float64Array"),Tn=dt(Ln),{isInteger:Nn}=Number,Rn=Nn,kn=pt("Int16Array"),$n=dt(kn),Un=pt("Int32Array"),Bn=dt(Un),Dn=pt("Int8Array"),Pn=dt(Dn),qn=pt("Map"),zn=dt(qn);const Wn=pt("RegExp"),Hn=dt(Wn);const{isSafeInteger:Kn}=Number,Vn=Kn,_n=pt("Uint16Array"),Zn=dt(_n),Jn=pt("Uint32Array"),Gn=dt(Jn),Qn=pt("Uint8Array"),Xn=dt(Qn),Yn=pt("Uint8ClampedArray"),te=dt(Yn),ne=pt("WeakMap"),ee=dt(ne);function re(t,n){return!1===R(t,n)}const oe=JSON;const ie=oe.stringify;const ce=globalThis.structuredClone;function ue(t,n=!0){return Boolean(t)&&n}const se=yt(u,a,Ht,Kt);const ae=yt(I,Vt);function le(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const fe=le(c),he=le(w);function pe(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const de=pe(s),ge=pe(v);const me=nt(/\./);class ye{list=y(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,jt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const be=y(ye);class Ae{static models={};constructor(t,n){o(n)?(wt(this,n),this.modelName=t,Ae.models.set(t,n)):wt(this,t)}}function we(t){return new Promise(t)}class ve{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;ut(t,(n=>{t[n]=new ve(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new ve(e),!0)})}}class Ce{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return o(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,e=this.totalActive===this.totalFree;n&&e&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const Ie=y(Ce);class Oe{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function Fe(t){return new Oe(t)}function Se(t){return t?Se[t]:F(Se)}const je=globalThis.navigator?.userAgentData;if(je)ut(je,((t,n)=>{wn(t)&&t&&(Se[n]=t)})),c(je.brands,(t=>{Se[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");c(t.split(/ |\//),(t=>{Se[t]=!0}))}function xe(t,n,e,r){return t.addEventListener(n,e,r),t}const Ee=document.createDocumentFragment.bind(document);function Me(t,n){return t.appendChild(n),n}function Le(t,n){return p(n)?Zt(n,$(n,(n=>t.getAttribute(n)))):(ut(n,((n,e)=>{t.setAttribute(e,n)})),t)}const Te=".",Ne="#",Re=/^.[\w_-]+$/,ke=/^[A-Za-z]+$/,$e=/\s/,Ue=document.getElementsByClassName.bind(document),Be=document.getElementsByTagName.bind(document),De=document.getElementById.bind(document),Pe=document.querySelector.bind(document),qe=document.querySelectorAll.bind(document);const ze=document.createElement.bind(document),We=t=>we((n=>{xe(t,"load",n,!0),xe(t,"error",n,!0),Me(Pe("head"),t)}));function He(t){const n=me(t)&&t||`${t}.js`,e=Le(ze("script"),{async:"",src:n});return We(e)}function Ke(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&xe(document,"DOMContentLoaded",t),!1)}Ke((()=>{const t=De("AcidLib");He(t&&t.getAttribute("data-index")||"/index")}));const Ve=location.protocol,_e="http:"===Ve?"ws":"wss",Ze=location.hostname,Je={hardware:{cores:navigator.hardwareConcurrency},host:{name:Ze,protocol:Ve,protocolSocket:_e}};function Ge(){wt(Je,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Qe(){Ge()}Ke(Qe),xe(window,"load",Qe,!0),xe(window,"resize",Qe,!0),t.hasLocal=void 0,function(n){try{n().removeItem("TESTING"),t.hasLocal=!0}catch(n){t.hasLocal=!1}}((()=>localStorage));class Xe{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=Fe(t)}hasLocal=t.hasLocal;setItem(t,n){return this.hasLocal&&this.local.setItem(t,jn(n)?n:ie(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return o(n)?n:!o(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}const Ye=(t,n)=>`color:${t};background:${n};`,tr={alert:Ye("#fff","#f44336"),important:Ye("#fff","#E91E63"),notify:Ye("#fff","#651FFF"),warning:Ye("#000","#FFEA00")};const nr="[object HTMLCollection]";const er="[object NodeList]";t.Crate=Xe,t.Intervals=ye,t.Model=Ae,t.Store=ve,t.Timers=Lt,t.UniqID=Ce,t.VirtualStorage=Oe,t.add=function(t,n){return t+n},t.after=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)},t.append=Me,t.apply=Rt,t.arrayToObject=function(t,n){const e={};return c(t,((t,r)=>{e[n[r]]=t})),e},t.ary=function(t,n){return(...e)=>t(...e.splice(0,n))},t.assert=function(t,n,e){return!(ct(n)&&!1===n(t,e))&&!re(t,n)||function(t,n,e){const r=globalThis.options||e;let o;return ct(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${ie(t)}\n\t\tExpected: ${ie(n)}`,r)}(t,n,e)},t.assign=wt,t.before=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)},t.bindAll=function(t,n){return bt(t,(t=>ct(t)?t.bind(n):t))},t.cacheNativeMethod=Bt,t.camelCase=function(t){return t.toLowerCase().replace(Gt,(t=>t.toUpperCase().replace(/ /g,"")))},t.chain=function(t){const n=t=>(n.value=t,n.methods);return wt(n,{add:t=>St(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n},t.chunk=function(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=n,t.clearIntervals=function(){Mt(setTimeout(Et,0),(t=>{be.remove(t)}))},t.clearTimers=function(){Mt(setTimeout(Et,0),(t=>{Tt.remove(t)}))},t.clone=function(t){return ce(t)},t.cloneArray=function(t){return t.slice()},t.cnsl=(t,n)=>{const e=jn(t)?t:ie(t);if("alert"===n||"warning"===n)return console.trace(`%c${e}`,`${tr[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${e}`,`${tr[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},t.cnslTheme=(t,n,e)=>{tr[t]=Ye(n,e)},t.compact=function(t){if(N(t)){const n=F(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],i=t[e];ue(i)&&(r[e]=i)}return r}return t.filter((t=>ue(t)))},t.compactKeys=function(t){const n=[];return ut(t,((t,e)=>{t&&n.push(e)})),n},t.compactMap=se,t.compactMapArray=u,t.compactMapAsyncArray=a,t.compactMapAsyncObject=Kt,t.compactMapObject=Ht,t.compactMapObjectAsync=async(t,n,e={})=>(await vt(t,(async(t,r,i,c,u)=>{const s=await n(t,r,e,c,u);o(s)&&(e[r]=s)})),e),t.construct=y,t.constructorName=ht,t.countBy=function(t,n){const e={};let r;return c(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e},t.countKey=function(t,n){let e=0;return c(t,(t=>{t[n]&&e++})),e},t.countWithoutKey=function(t,n){let e=0;return c(t,(t=>{t[n]||e++})),e},t.crate=function(t){return new Xe(t)},t.createFragment=Ee,t.curry=function(t,e=t.length){const r=[],o=(...i)=>{if(r.push(...i),r.length===e){const e=t(...r);return n(r),e}return o};return o},t.curryRight=function(t,e=t.length){const r=[],o=(...i)=>{if(r.unshift(...i),r.length===e){const e=t(...r);return n(r),e}return o};return o},t.debounce=function(t,n){function e(...t){e.id!==xt&&Tt.remove(e.id),e.id=Nt((()=>{e.callable(...t),e.id=xt}),n)}return e.id=xt,e.callable=t.bind(e),e.clear=()=>{e.id!==xt&&(Tt.remove(e.id),e.id=xt)},e},t.deduct=function(t){return t-1},t.defProp=qt,t.difference=b,t.divide=function(t,n){return t/n},t.drop=A,t.dropRight=(t,n,e=t.length)=>A(t,0,e-n),t.each=Ft,t.eachArray=c,t.eachAsyncArray=s,t.eachAsyncObject=vt,t.eachObject=ut,t.eachRight=w,t.eachRightAsync=v,t.ensureArray=d,t.eventAdd=xe,t.eventRemove=function(t,n,e,r){return t.removeEventListener(n,e,r),t},t.every=kt,t.everyArg=function(t,n,...e){return e?t(n)&&C(e,t):t(n)},t.everyArray=C,t.everyObject=function(t,n){return C(F(t),((e,r,o,i)=>n(t[e],e,t,i,o)))},t.falsey=function(t,n=!0){return!1===Boolean(t)&&n},t.falsy=xt,t.filter=ae,t.filterArray=I,t.filterObject=Vt,t.findIndex=function(t,n,e="id"){const r=t.findIndex(((t,r)=>J(t,0,0,n,e)));return-1!==r&&r},t.findIndexCache=J,t.findItem=function(t,n,e="id"){const r=t.find(((t,r)=>J(t,0,0,n,e)));return-1!==r&&r},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(d(n))),[]);return e},t.flattenDeep=g,t.flow=fe,t.flowAsync=de,t.flowAsyncRight=ge,t.flowRight=he,t.forEach=h,t.forEachAsync=Ct,t.forOf=It,t.forOfAsync=Ot,t.forOfCompactMap=function(t,n=i,e={}){for(const[r,i]of t){const c=n(i,r,e,t);o(c)&&(e[r]=c)}return t},t.forOfCompactMapAsync=async function(t,n=i,e={}){for await(const[r,i]of t){const c=await n(i,r,e,t);o(c)&&(e[r]=c)}return t},t.forOfMap=function(t,n=i,e={}){for(const[r,o]of t)e[r]=n(o,r,e,t);return t},t.forOfMapAsync=async function(t,n=i,e={}){for await(const[r,o]of t)e[r]=await n(o,r,e,t);return t},t.generateLoop=yt,t.get=M,t.getByClass=Ue,t.getById=De,t.getByTag=Be,t.getExtensionRegex=tt,t.getFileExtension=function(t){const n=t.match(tt);if(n)return n[1]},t.getNewest=function(t,n){return G(t,n,!1)[0]},t.getOldest=function(t,n="id"){return X(t,n)[0]},t.getPropDesc=Pt,t.getPropNames=Dt,t.groupBy=function(t,n){const e={};return c(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e},t.has=function(t,...n){return t&&t.includes&&t.includes(...n)},t.hasAnyKeys=function(t,...n){return Boolean(n.find((n=>{const e=E(n);if(1===e.length)return L(t,n);{const n=e.pop(),r=M(e,t);return!!r&&L(r,n)}})))},t.hasDot=me,t.hasKeys=T,t.hasLength=xn,t.hasProp=zt,t.hasValue=o,t.htmlEntities=on,t.ifInvoke=function(t,...n){if(ct(t))return t(...n)},t.ifNotEqual=(t,n,e)=>(n&&!o(t[n])&&(t[n]=e),t),t.ifValue=function(t){if(o(t))return t},t.importjs=He,t.inAsync=async function(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t},t.inSync=(t,n)=>Ft(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const e={};return c(t,(t=>{e[t[n]]=t})),e},t.info=Je,t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)},t.intersection=function(t,...n){return u(t,(t=>{if(C(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return be.set(t,n)},t.intervals=be,t.invert=function(t,n={}){return ut(t,((t,e)=>{n[t]=e})),n},t.invoke=function(t,n,e){return $(t,((t,r)=>t[n](e,r)))},t.invokeAsync=function(t,n,e){return U(t,(async(t,r)=>t[n](e,r)))},t.isAgent=Se,t.isArguments=function(t){return!!o(t)&&t.toString()===pn},t.isArray=p,t.isArrayLike=function(t,n){if(mn(t)||ct(t))return!1;const e=t.length;return!(!e||!gn(e)||e<0)&&(!!n&&C(t,((t,n)=>n>=0&&gn(n))))},t.isAsync=mt,t.isAsyncCall=gt,t.isBigInt=bn,t.isBigIntCall=yn,t.isBoolean=wn,t.isBooleanCall=An,t.isBuffer=Cn,t.isBufferCall=vn,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isConstructor=lt,t.isConstructorFactory=ft,t.isConstructorNameFactory=pt,t.isDate=Sn,t.isDateCall=Fn,t.isDocumentReady=Ke,t.isDom=function(t){return t&&9!==t.nodeType},t.isEmpty=function(t){return jn(t)||p(t)?!xn(t):N(t)?!_t(t):!o(t)},t.isEnter=function(t){return 13===t.keyCode},t.isEqual=R,t.isF32=Mn,t.isF32Call=En,t.isF64=Tn,t.isF64Call=Ln,t.isFileCSS=et,t.isFileHTML=rt,t.isFileJS=ot,t.isFileJSON=it,t.isFloat=Rn,t.isFunction=ct,t.isHTMLCollection=function(t){return!!o(t)&&t.toString()===nr},t.isI16=$n,t.isI16Call=kn,t.isI32=Bn,t.isI32Call=Un,t.isI8=Pn,t.isI8Call=Dn,t.isKindAsync=function(t){return!!t&&(at(t)||mt(t))},t.isMap=zn,t.isMapCall=qn,t.isMatchArray=function(t,n){return t.length===n.length&&C(t,((t,e)=>R(n[e],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const e=F(t),r=F(n);return e.length===r.length&&C(e,(e=>t[e]===n[e]))},t.isNodeList=function(t){return!!o(t)&&t.toString()===er},t.isNull=r,t.isNumber=gn,t.isNumberCall=dn,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,e){return t>n&&t<e},t.isNumberNotInRange=function(t,n,e){return t<n||t>e},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=N,t.isPrimitive=function(t){const n=typeof t;return null==t||"object"!==n&&"function"!==n},t.isPromise=at,t.isRegExp=Hn,t.isRegExpCall=Wn,t.isRelated=function(t,n){return!mn(t)&&!mn(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=Vn,t.isSame=$t,t.isSet=On,t.isSetCall=In,t.isString=jn,t.isTypeFactory=dt,t.isU16=Zn,t.isU16Call=_n,t.isU32=Gn,t.isU32Call=Jn,t.isU8=Xn,t.isU8C=te,t.isU8CCall=Yn,t.isU8Call=Qn,t.isUndefined=e,t.isWeakMap=ee,t.isWeakMapCall=ne,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return oe.parse(t,n)},t.kebabCase=function(t){return t.replace(Jt," ").trim().toLowerCase().replace(Gt,"-$1")},t.keys=F,t.largest=function(t){return k(...t)},t.last=function(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]},t.map=bt,t.mapArray=$,t.mapAsyncArray=U,t.mapObject=st,t.mapObjectAsync=async(t,n,e={})=>(await vt(t,(async(t,r,o,i,c)=>{e[r]=await n(t,r,e,o,i,c)})),e),t.mapRightArray=function(t,n,e=[],r){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)e[o]=n(t[c],c,t,i,r),o++;return e},t.mapWhile=function(t,n,e=[],r){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,e,t,o,r))break;e[i]=c}return e},t.merge=function t(n,...e){return Ft(e,(e=>{Ft(e,((e,r)=>{if(n[r]&&(N(e)||p(e)||e.forEach))return t(n[r],e);n[r]=e}))})),n},t.minus=function(t,n){return t-n},t.model=function(t,n){return o(n)?y(Ae,[t,n]):M(t,Ae.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=mn,t.nodeAttribute=Le,t.noop=Et,t.notEqual=re,t.nthArg=function(t=0){return(...n)=>n[t]},t.numSort=function(t){return t.sort(B)},t.numericalCompare=B,t.numericalCompareReverse=D,t.objectSize=_t,t.omit=function(t,n){return Vt(t,((t,e)=>!n.includes(e)))},t.once=t=>{let n;return(...e)=>(o(n)||(n=t(...e)),n)},t.onlyUnique=V,t.over=function(t){return(...n)=>bt(t,(t=>t(...n)))},t.overEvery=function(t){return(...n)=>kt(t,(t=>t(...n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const e=[];return[u(t,(t=>{if(n(t))return t;e.push(t)})),e]},t.pick=(t,n,e={})=>(c(n,(n=>{e[n]=t[n]})),e),t.pluck=function(t,n){return $(t,(t=>t[n]))},t.pluckObject=Y,t.pluckValues=function(t,n){return $(t,(t=>Y(t,n)))},t.promise=we,t.propertyMatch=(t,n,e=F(t))=>C(e,(e=>R(t[e],n[e]))),t.querySelector=Pe,t.querySelectorAll=qe,t.rNumSort=function(t){return t.sort(D)},t.randomFloat=function(t,n=0){return Wt()*(t-n)+n},t.randomInt=z,t.range=function(t,n,e=1){return t<n?l(t,n,e):f(t,n,e)},t.rangeDown=f,t.rangeUp=l,t.rawURLDecode=rn,t.reArg=function(t,n){return(...e)=>t(...n.map((t=>e[t])))},t.regexTestFactory=nt,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t},t.removeBy=function(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t},t.replaceList=function(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Qt,t.returnValue=i,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return H(t);if(1===n)return[t[z(e-1,0)]];const r=[],o={};let i,c=0;for(;c<n;)i=z(t.length-1,0),o[i]||(r.push(t[i]),o[i]=!0,c++);return r},t.sanitize=function(t){return on(rn(t))},t.saveDimensions=Ge,t.selector=function(t){switch(t[0]){case Ne:if(!$e.test(t))return De(Qt(t));break;case Te:if(Re.test(t))return Ue(Qt(t));break;default:if(ke.test(t))return Be(t)}return qe(t)},t.shuffle=H,t.smallest=function(t){return K(...t)},t.snakeCase=function(t){return t.replace(Jt," ").trim().toLowerCase().replace(Gt,"_$1")},t.sortAlphabetical=function(t,n){return t.sort(((t,e)=>{const r=t[n],o=e[n];return r<o?-1:r>o?1:0}))},t.sortNewest=G,t.sortOldest=X,t.sortOldestFilter=Q,t.sortUnique=_,t.sortedIndex=function(t,n){let e=0;return C(t,((t,r)=>(e=r,n>t))),e},t.stringify=ie,t.stubArray=()=>[],t.stubFalse=()=>xt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>jt,t.sub=function(t){return t.reduce(((t,n)=>t-n),0)},t.sum=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const e=t.length;return t.slice(e-n,e)},t.themes=tr,t.throttle=function(t,n){function e(...t){e.id?e.shouldThrottle=jt:(e.callable(...t),e.id=Nt((()=>{e.shouldThrottle&&e.callable(...t),e.id=xt}),n))}return e.id=xt,e.callable=t.bind(e),e.clear=()=>{Tt.remove(e.id),e.id=xt},e},t.timer=Nt,t.timers=Tt,t.times=Mt,t.timesAsync=async function(t,n){for(let e=0;e<t;e++)await n(t)},t.timesMap=function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e},t.timesMapAsync=async function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e},t.toArray=W,t.toPath=E,t.toggle=function(t,n=!0,e=!1){return R(n,t)?e:n},t.tokenize=function(t){return t.match(cn)||[]},t.truey=ue,t.truncate=function(t,n){const e=t.length;return e>n?sn(t,n,e):t},t.truncateRight=function(t,n){const e=t.length;return e>n?an(t,n,e):t},t.truth=jt,t.unZip=function(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.unZipObject=t=>{const n=[],e=[];return ut(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},t.union=function(...t){return Z(g(t))},t.uniqID=Ie,t.unique=Z,t.untilFalseArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!1===n(t[r],r))return!1;return!0},t.untilTrueArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!0===n(t[r],r))return!1;return!0},t.updateDimensions=Qe,t.upperCase=function(t){return t.replace(Jt," ").trim().toUpperCase()},t.upperFirst=function(t){return fn(t)+Qt(t)},t.upperFirstAll=function(t){return t.replace(ln,(t=>t.toUpperCase()))},t.upperFirstLetter=fn,t.upperFirstOnly=hn,t.upperFirstOnlyAll=function(t){return hn(t.toLowerCase()).replace(ln,(t=>t.toUpperCase()))},t.virtualStorage=Fe,t.whileCompactMap=function(t,n,e=[],r){let i=0;for(;i<t.length;){const c=e.push(n(t[i],i,t,t.length,r));i++,o(c)&&e.push(c)}return t},t.whileEachArray=function(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t},t.whileMapArray=function(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t},t.without=function(t,n){if(!n)return t;const e=y(Set,n);return t.filter((t=>!e.has(t)))},t.words=function(t){return t.match(un)||[]},t.wrap=function(t,n){return(...e)=>n(t,...e)},t.xor=function(...t){const n=y(Map),e=[];return 2===t.length?b(t[0],t[1]):(c(t,((t,e)=>{c(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),h(n,(t=>{1===t.count&&e.push(t.child)})),e)},t.zip=function(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.zipObject=Zt}));
//# sourceMappingURL=browser.js.map

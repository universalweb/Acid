!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function r(t){return void 0===t}function e(t){return null===t}function o(t){return!r(t)&&!e(t)}function i(t){return t}function c(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)n(t[o],o,t,e,r);return t}function u(t,n=i,r=[],e){return c(t,((t,i,c,u)=>{const s=n(t,i,r,c,u,e);o(s)&&r.push(s)})),r}async function s(t,n){if(!t)return;const r=t.length;for(let e=0;e<r;e++)await n(t[e],e,t,r);return t}async function f(t,n=i){const r=[];return await s(t,(async(t,e,i)=>{const c=await n(t,e,r,i);o(c)&&r.push(c)})),r}function a(t,n,r){const e=[];let o=t;for(;o<n;)e.push(o),o+=r;return e}function l(t,n,r){const e=r<0?-1*r:r,o=[];let i=t;for(;i>n;)o.push(i),i-=e;return o}function h(t,n){return t.forEach(n),t}const p=Array.isArray;function y(t){return p(t)&&t||o(t)&&[t]||[]}function g(t){return t.flat(1/0)}const d=Reflect.construct;function m(t,n=[],r){const e=p(n)?n:[n];return r?d(t,e,r):d(t,e)}function A(...t){const n=m(Map),r=[];return c(t,((t,r)=>{c(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),h(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function b(t,n,r=t.length){return t.splice(n,r)}function w(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function v(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function C(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function O(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function I(t,n,r=[],e){return c(t,((t,o,i,c)=>{!0===n(t,o,r,i,c,e)&&r.push(t)})),r}async function F(t,n,r=[],e){return await s(t,(async(t,o,i,c)=>{!0===await n(t,o,r,i,c,e)&&r.push(t)})),r}const j=Object.keys;function S(t){if(t)return j(t)}const M=/\.|\[/,x=/]/g,E="";function R(t){return t.replace(x,E).split(M)}function T(t,n){if(!n)return!1;let r=n;return C(p(t)?t:R(t),(t=>(r=r[t],o(r)))),r}const U=Object.hasOwn;function N(t,...n){if(t)return C(n,(n=>{const r=R(n);if(1===r.length)return U(t,n);{const n=r.pop(),e=T(r,t);return!!e&&U(e,n)}}))}const k=t=>!!o(t)&&"Object("===t.constructor.toString().trim().slice(9,16),B=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(k(t)){const r=S(t);if(N(n,r))return C(r,(r=>B(t[r],n[r])))}else if(p(t)&&t.length===n.length)return C(t,((t,r)=>B(t,n[r])));return!1};const P=Math.max;function $(t,n,r=[],e){return c(t,((t,o,i,c)=>{r[o]=n(t,o,r,i,c,e)})),r}async function L(t,n){const r=[];return await s(t,(async(t,e,o)=>{r[e]=await n(t,e,o)})),r}const D=(t,n)=>t-n;const q=(t,n)=>n-t;const{floor:K,random:V}=Math;function z(t,n=0){return K(V()*(t-n))+n}const W=Array.from;function G(t,n=t.length){if(t.length<=1)return W(t);const r=W(t);let e,o,i=0;for(;i<n;)e=z(r.length-1,0),o=r[i],r[i]=r[e],r[e]=o,i++;return r}const J=Math.min;function Z(t,n,r){return r.indexOf(t)===n}function _(t,n,r){return t!==r[n-1]}function H(t,n){return n?t.filter(_):t.filter(Z)}function Q(t,n,r,e,o){if(t[o]===e)return!0}function X(t,n,r=!0){return(r?t:[...t]).sort(((t,r)=>function(t,n,r){return n[r]?t[r]?t[r]<n[r]?1:t[r]>n[r]?-1:0:1:-1}(t,r,n)))}function Y(t,n,r){return n[r]?t[r]?t[r]<n[r]?-1:t[r]>n[r]?1:0:-1:1}function tt(t,n="id",r=!0){return(r?t:[...t]).sort(((t,r)=>Y(t,r,n)))}function nt(t,n){if(t)return $(n,(n=>t[n]))}const rt=/\.([0-9a-z]+)/;function et(t){return n=>!!o(n)&&t.test(n)}const ot=et(/\.css$/),it=et(/\.html$/),ct=et(/\.js$/),ut=et(/\.json$/);const st=Object.assign;function ft(t,...n){if(t)return st(t,...n)}const at=async(t,n)=>{if(!t)return;const r=S(t);return await s(r,((e,o,i,c)=>n(t[e],e,t,c,r))),t};function lt(t,n){if(!t)return;return c(S(t),((r,e,o,i)=>{n(t[r],r,t,i,o)}))}function ht(t,n){return!!o(t)&&t.constructor===n}function pt(t){return n=>ht(n,t)}function yt(t){return t?.constructor?.name}function gt(t){return n=>n&&yt(n)===t||!1}function dt(t){return function(n,...r){return r?t(n)&&C(r,t):t(n)}}const mt=gt("Set"),At=dt(mt);function bt(t,n){if(At(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const wt=gt("GeneratorFunction"),vt=dt(wt);async function Ct(t,n,r){if(At(t)){for(const r of t)await n(r,t);return t}if(vt(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const Ot=t=>!!o(t)&&t instanceof Function,It=gt("AsyncFunction"),Ft=dt(It);function jt(t,n,r,e,i,c){return(u,s,f)=>{let a;const l=Ft(s);if(o(u)&&s)return a=p(u)?l?n:t:k(u)||Ot(u)?l?e:r:i?l?c:i:vt(u)?c:l?e:r,a(u,s,f)}}const St=jt(c,s,lt,at,bt,Ct);const Mt=!0,xt=!1,Et=()=>{};function Rt(t,n){for(let r=0;r<t;r++)n(r)}class Tt{list=m(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,Mt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Ut=m(Tt);function Nt(t,n){return Ut.set(t,n)}const kt=Reflect.apply;async function Bt(t,n,r={}){if(t)return await at(t,(async(t,e,o,i,c)=>{r[e]=await n(t,e,r,o,i,c)})),r}function Pt(t,n,r={}){if(t)return lt(t,((t,e,o,i,c)=>{r[e]=n(t,e,r,o,i,c)})),r}function $t(t){return t?.constructor}function Lt(t,n=[]){const r=$t(t);return r===Function&&"function"===r.name?function(){}:m(r,n)}function Dt(t,n=i,r){const e=r||Lt(t);if(p(t)||At(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=Ot(e.set);for(const[r,i]of t){const c=n(i,r,e,t);o?e.set(r,c):e[r]=c}return e}async function qt(t,n=i,r,e){if(vt(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||Lt(t);if(p(t)||At(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const c=Ot(o.set);for await(const[r,e]of t){const i=await n(e,r,o,t);c?o.set(r,i):o[r]=i}return o}const Kt=jt($,L,Pt,Bt,Dt,qt);async function Vt(t,n){if(!t)return;return O(S(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function zt(t,n){if(!t)return;return C(S(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function Wt(t,n=i){if(p(t)||At(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function Gt(t,n=i,r){if(vt(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(p(t)||At(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const Jt=jt(C,O,zt,Vt,Wt,Gt);const Zt=Object.is,_t=Function.prototype;function Ht(t){return _t.call.bind(t)}const Qt=Object.getOwnPropertyNames,Xt=Object.getOwnPropertyDescriptor,Yt=Object.defineProperty,tn=Ht(Object.hasOwnProperty);const{random:nn}=Math;async function rn(t,n=i,r={}){return await at(t,(async(t,e,i,c,u)=>{const s=await n(t,e,r,i,c,u);o(s)&&(r[e]=s)})),r}function en(t,n=i,r={}){return lt(t,((t,e,i,c,u)=>{const s=n(t,e,r,i,c,u);o(s)&&(r[e]=s)})),r}function on(t,n,r={}){return lt(t,((t,e,o,i,c)=>{!0===n(t,e,r,o,i,c)&&(r[e]=t)})),r}async function cn(t,n,r={}){return await at(t,(async(t,e,o,i,c)=>{!0===await n(t,e,r,o,i,c)&&(r[e]=t)})),r}function un(t){if(t)return S(t).length}const sn=/[-_]/g,fn=/ (.)/g;function an(t,n=1){return t.substr(n)}const ln=/%(?![\da-f]{2})/gi,hn=/&/g,pn=/</g,yn=/>/g,gn=/"/g;function dn(t){return decodeURIComponent(t.replace(ln,(()=>"%25")))}function mn(t){return t.replace(hn,"&amp;").replace(pn,"&lt;").replace(yn,"&gt;").replace(gn,"&quot;")}const An=/\S+/g,bn=/\w+/g;const wn=/ (.)/g;function vn(t){return t[0].toUpperCase()}function Cn(t){return vn(t)+an(t).toLowerCase()}function On(t){return $t(t)?.name}const In=gt("Number"),Fn=dt(In);function jn(t){return!o(t)}const Sn=gt("Map"),Mn=dt(Sn),xn=/Array/,En="Array";function Rn(t){if(t){const n=On(t);if(xn.test(n)&&n!==En)return!0}return!1}const Tn=gt("BigInt"),Un=dt(Tn),Nn=gt("Boolean"),kn=dt(Nn),Bn=gt("ArrayBuffer"),Pn=dt(Bn);const $n=gt("Date"),Ln=dt($n),Dn=pt(String);function qn(t){return Boolean(t.length)}const Kn=gt("Float32Array"),Vn=dt(Kn),zn=gt("Float64Array"),Wn=dt(zn),{isInteger:Gn}=Number,Jn=Gn,Zn=gt("Int16Array"),_n=dt(Zn),Hn=gt("Int32Array"),Qn=dt(Hn),Xn=gt("Int8Array"),Yn=dt(Xn);function tr(t){return!!t&&t instanceof Promise}const nr=gt("RegExp"),rr=dt(nr);const{isSafeInteger:er}=Number,or=er;const ir=gt("Uint16Array"),cr=dt(ir),ur=gt("Uint32Array"),sr=dt(ur),fr=gt("Uint8Array"),ar=dt(fr),lr=gt("Uint8ClampedArray"),hr=dt(lr),pr=gt("WeakMap"),yr=dt(pr);function gr(t,n){return!1===B(t,n)}const dr=JSON;const mr=dr.stringify;const Ar=globalThis.structuredClone;function br(t,n=!0){return Boolean(t)&&n}async function wr(t,n=i,r,e){if(vt(t)){const r=[];for await(const i of t(...e)){const e=await n(i,r,t);o(e)&&r.push(e)}return r}const c=r||Lt(t);if(p(t)||At(t)){const r=c.push||c.add,e=r&&r.bind(c);for(const r of t){const i=await n(r,c,t);o(i)&&e(i)}return c}const u=Ot(c.set);for await(const[r,e]of t){const i=await n(e,r,c,t);o(i)&&(u?c.set(r,i):c[r]=i)}return c}function vr(t,n=i,r){const e=r||Lt(t);if(p(t)||At(t)){const r=e.push||e.add,i=r&&r.bind(e);for(const r of t){const c=n(r,e,t);o(c)&&i(c)}return e}const c=Ot(e.set);for(const[r,i]of t){const u=n(i,r,e,t);o(u)&&(c?e.set(r,u):e[r]=u)}return e}const Cr=jt(u,f,en,rn,vr,wr);function Or(t,n=i,r){const e=r||Lt(t);if(p(t)||At(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=Ot(e.set);for(const[o,i]of t){!0===n(i,o,e,t)&&(r?e.set(o,i):e[o]=i)}}return e}async function Ir(t,n=i,r,e){if(vt(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||Lt(t);if(p(t)||At(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=Ot(o.set);for await(const[e,i]of t){!0===await n(i,e,o,t)&&(r?o.set(e,i):o[e]=i)}}return o}const Fr=jt(I,F,on,cn,Or,Ir);function jr(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const Sr=jr(c),Mr=jr(w);function xr(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const Er=xr(s),Rr=xr(v);const Tr=et(/\./);class Ur{list=m(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,Mt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Nr=m(Ur);class kr{static models={};constructor(t,n){o(n)?(ft(this,n),this.modelName=t,kr.models.set(t,n)):ft(this,t)}}class Br{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;lt(t,(n=>{t[n]=new Br(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new Br(r),!0)})}}class Pr{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return o(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const $r=m(Pr);class Lr{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}t.Intervals=Ur,t.Model=kr,t.Store=Br,t.Timers=Tt,t.UniqID=Pr,t.VirtualStorage=Lr,t.add=function(t,n){return t+n},t.after=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)},t.apply=kt,t.arrayToObject=function(t,n){const r={};return c(t,((t,e)=>{r[n[e]]=t})),r},t.ary=function(t,n){return(...r)=>t(...r.splice(0,n))},t.assert=function(t,n,r){return!(Ot(n)&&!1===n(t,r))&&!gr(t,n)||function(t,n,r){const e=globalThis.options||r;let o;return Ot(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${mr(t)}\n\t\tExpected: ${mr(n)}`,e)}(t,n,r)},t.assign=ft,t.before=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)},t.bindAll=function(t,n,r){const e=Kt(t,(t=>Ot(t)?t.bind(n):t));return r?ft(r,e):e},t.cacheNativeMethod=Ht,t.camelCase=function(t){return t.toLowerCase().replace(fn,(t=>t.toUpperCase().replace(/ /g,"")))},t.chain=function(t){const n=t=>(n.value=t,n.methods);return ft(n,{add:t=>((t,n)=>(St(n,((n,r)=>{t.methods[r]=(...r)=>(n(t.value,...r),t.methods)})),t))(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n},t.chunk=function(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=n,t.clearIntervals=function(){Rt(setTimeout(Et,0),(t=>{Nr.remove(t)}))},t.clearTimers=function(){Rt(setTimeout(Et,0),(t=>{Ut.remove(t)}))},t.clone=function(t){return Ar(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=Lt,t.compact=function(t){if(k(t)){const n=S(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],i=t[r];br(i)&&(e[r]=i)}return e}return t.filter((t=>br(t)))},t.compactKeys=function(t){const n=[];return lt(t,((t,r)=>{o(t)&&n.push(r)})),n},t.compactMap=Cr,t.compactMapArray=u,t.compactMapAsyncArray=f,t.compactMapAsyncObject=rn,t.compactMapObject=en,t.concurrent=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.all(o)},t.concurrentStatus=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.allSettled(o)},t.construct=m,t.constructorName=yt,t.countBy=function(t,n){const r={};let e;return c(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r},t.countKey=function(t,n){let r=0;return c(t,(t=>{t[n]&&r++})),r},t.countWithoutKey=function(t,n){let r=0;return c(t,(t=>{t[n]||r++})),r},t.curry=function(t,r=t.length){const e=[],o=(...i)=>{if(e.push(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.curryRight=function(t,r=t.length){const e=[],o=(...i)=>{if(e.unshift(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.debounce=function(t,n){function r(...t){r.id!==xt&&Ut.remove(r.id),r.id=Nt((()=>{r.callable(...t),r.id=xt}),n)}return r.id=xt,r.callable=t.bind(r),r.clear=()=>{r.id!==xt&&(Ut.remove(r.id),r.id=xt)},r},t.deduct=function(t){return t-1},t.defProp=Yt,t.difference=A,t.divide=function(t,n){return t/n},t.drop=b,t.dropRight=(t,n,r=t.length)=>b(t,0,r-n),t.each=St,t.eachArray=c,t.eachAsyncArray=s,t.eachAsyncObject=at,t.eachObject=lt,t.eachRight=w,t.eachRightAsync=v,t.ensureArray=y,t.every=Jt,t.everyArg=function(...t){return Ft(t[0])?async function(...n){return Jt(t,(async t=>Jt(n,(async n=>t(n)))))}:function(...n){return Jt(t,(t=>Jt(n,(n=>t(n)))))}},t.everyArray=C,t.everyAsyncArray=O,t.everyAsyncObject=Vt,t.everyObject=zt,t.falsey=function(t,n=!0){return!1===Boolean(t)&&n},t.falsy=xt,t.filter=Fr,t.filterArray=I,t.filterAsyncArray=F,t.filterAsyncObject=cn,t.filterObject=on,t.findIndex=function(t,n,r="id"){const e=t.findIndex(((t,e)=>Q(t,0,0,n,r)));return-1!==e&&e},t.findIndexCache=Q,t.findItem=function(t,n,r="id"){const e=t.find(((t,e)=>Q(t,0,0,n,r)));return-1!==e&&e},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(y(n))),[]);return r},t.flattenDeep=g,t.flow=Sr,t.flowAsync=Er,t.flowAsyncRight=Rr,t.flowRight=Mr,t.forEach=h,t.forEachAsync=async function(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t},t.forMap=function(t,n){const r=Lt(t),e=r.push||r.add;if(e&&Ot(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else Ot(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r},t.forOf=bt,t.forOfAsync=Ct,t.forOfCompactMap=vr,t.forOfCompactMapAsync=wr,t.forOfEvery=Wt,t.forOfEveryAsync=Gt,t.forOfFilter=Or,t.forOfFilterAsync=Ir,t.forOfMap=Dt,t.forOfMapAsync=qt,t.generateLoop=jt,t.get=T,t.getExtensionRegex=rt,t.getFileExtension=function(t){const n=t.match(rt);if(n)return n[1]},t.getNewest=function(t,n){return X(t,n,!1)[0]},t.getOldest=function(t,n="id"){return tt(t,n)[0]},t.getPropDesc=Xt,t.getPropNames=Qt,t.getType=$t,t.getTypeName=On,t.groupBy=function(t,n){const r={};return c(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r},t.has=function t(n,r,e){if(jn(n)||jn(r))return!1;if(Dn(n))return Dn(r)?n.includes(r,e):rr(r)?r.test(n):Ot(r)?Boolean(r(n)):Jt(r,(r=>Boolean(t(n,r))));if(p(n)){if(Dn(r))return n.includes(r,e);if(rr(r))return Jt(n,(t=>t.test(r)));if(p(r))return Jt(r,(r=>Boolean(t(n,r))))}return!1},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const r=R(n);if(1===r.length)return U(t,n);{const n=r.pop(),e=T(r,t);return!!e&&U(e,n)}})))},t.hasDot=Tr,t.hasKeys=N,t.hasLength=qn,t.hasProp=tn,t.hasValue=o,t.htmlEntities=mn,t.ifInvoke=function(t,...n){if(Ot(t))return t(...n)},t.ifNotAssign=(t,n,r)=>(n&&!o(t[n])&&(t[n]=r),t),t.ifValue=function(t,n){if(o(t))return n?n(t):t},t.inAsync=async function(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t},t.inSync=(t,n)=>St(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const r={};return c(t,(t=>{r[t[n]]=t})),r},t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)},t.intersection=function(t,...n){return u(t,(t=>{if(C(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return Nr.set(t,n)},t.intervals=Nr,t.invert=function(t,n={}){if(t)return lt(t,((t,r)=>{n[t]=r})),n},t.invoke=function(t,n,r){return $(t,((t,e)=>t[n](r,e)))},t.invokeAsync=function(t,n,r){return L(t,(async(t,e)=>t[n](r,e)))},t.isArguments=function(t){return!!o(t)&&"[object Arguments]"===t.toString()},t.isArray=p,t.isArrayLike=function(t,n){if(jn(t)||Ot(t))return!1;if(p(t)||Rn(t))return!0;const r=t.length;if(!jn(r)||!Fn(r)||r<0)return!1;if(n){const n=S(t);return!!n&&Jt(n,((t,n)=>n>=0&&Fn(n)))}return!0},t.isAsync=Ft,t.isAsyncCall=It,t.isBigInt=Un,t.isBigIntCall=Tn,t.isBoolean=kn,t.isBooleanCall=Nn,t.isBuffer=Pn,t.isBufferCall=Bn,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isConstructor=ht,t.isConstructorFactory=pt,t.isConstructorNameFactory=gt,t.isDate=Ln,t.isDateCall=$n,t.isEmpty=function(t){return Dn(t)||p(t)?!qn(t):k(t)?!un(t):!o(t)},t.isEqual=B,t.isF32=Vn,t.isF32Call=Kn,t.isF64=Wn,t.isF64Call=zn,t.isFileCSS=ot,t.isFileHTML=it,t.isFileJS=ct,t.isFileJSON=ut,t.isFloat=Jn,t.isFunction=Ot,t.isGenerator=vt,t.isGeneratorCall=wt,t.isI16=_n,t.isI16Call=Zn,t.isI32=Qn,t.isI32Call=Hn,t.isI8=Yn,t.isI8Call=Xn,t.isIterable=function(t){return o(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=function(t){return!!t&&(tr(t)||Ft(t)||vt(t))},t.isMap=Mn,t.isMapCall=Sn,t.isMatchArray=function(t,n){return t.length===n.length&&C(t,((t,r)=>B(n[r],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const r=S(t),e=S(n);return r.length===e.length&&C(r,(r=>t[r]===n[r]))},t.isNull=e,t.isNumber=Fn,t.isNumberCall=In,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,r){return t>n&&t<r},t.isNumberNotInRange=function(t,n,r){return t<n||t>r},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=k,t.isPrimitive=function(t){const n=typeof t;return null==t||"object"!==n&&"function"!==n},t.isPromise=tr,t.isRegex=rr,t.isRegexCall=nr,t.isRelated=function(t,n){return!jn(t)&&!jn(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=or,t.isSame=Zt,t.isSameType=function(t,n){const r=$t(t),e=$t(n);return r===e&&r.name===e.name},t.isSet=At,t.isSetCall=mt,t.isString=Dn,t.isTypeFactory=dt,t.isTypedArray=Rn,t.isU16=cr,t.isU16Call=ir,t.isU32=sr,t.isU32Call=ur,t.isU8=ar,t.isU8C=hr,t.isU8CCall=lr,t.isU8Call=fr,t.isUndefined=r,t.isWeakMap=yr,t.isWeakMapCall=pr,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return dr.parse(t,n)},t.kebabCase=function(t){return t.replace(sn," ").trim().toLowerCase().replace(fn,"-$1")},t.keys=S,t.largest=function(t){return P(...t)},t.last=function(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]},t.map=Kt,t.mapArray=$,t.mapAsyncArray=L,t.mapAsyncObject=Bt,t.mapObject=Pt,t.mapRightArray=function(t,n,r=[],e){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)r[o]=n(t[c],c,t,i,e),o++;return r},t.mapWhile=function(t,n,r=[],e){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,r,t,o,e))break;r[i]=c}return r},t.merge=function t(n,...r){return St(r,(r=>{St(r,((r,e)=>{if(n[e]&&(k(r)||p(r)||r.forEach))return t(n[e],r);n[e]=r}))})),n},t.minus=function(t,n){return t-n},t.model=function(t,n){return o(n)?m(kr,[t,n]):T(t,kr.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=jn,t.noop=Et,t.notEqual=gr,t.nthArg=function(t=0){return(...n)=>n[t]},t.numSort=function(t){return t.sort(D)},t.numericalCompare=D,t.numericalCompareReverse=q,t.objectSize=un,t.omit=function(t,n){if(t)return on(t,((t,r)=>!n.includes(r)))},t.once=t=>{let n;return(...r)=>(o(n)||(n=t(...r)),n)},t.onlyUnique=Z,t.over=function(t){return(...n)=>Kt(t,(t=>t(...n)))},t.overEvery=function(t){return n=>Jt(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const r=[];return[u(t,(t=>{if(n(t))return t;r.push(t)})),r]},t.pick=(t,n,r={})=>{if(t)return c(n,(n=>{r[n]=t[n]})),r},t.pluck=function(t,n){return $(t,(t=>t[n]))},t.pluckObject=nt,t.pluckValues=function(t,n){return $(t,(t=>nt(t,n)))},t.promise=function(t){return new Promise(t)},t.propertyMatch=(t,n,r=S(t))=>C(r,(r=>B(t[r],n[r]))),t.rNumSort=function(t){return t.sort(q)},t.randomFloat=function(t,n=0){return nn()*(t-n)+n},t.randomInt=z,t.range=function(t,n,r=1){return t<n?a(t,n,r):l(t,n,r)},t.rangeDown=l,t.rangeUp=a,t.rawURLDecode=dn,t.reArg=function(t,n){return(...r)=>t(...n.map((t=>r[t])))},t.regexTestFactory=et,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t},t.removeBy=function(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t},t.replaceList=function(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)},t.rest=function(t){return t.slice(1,t.length)},t.restString=an,t.returnValue=i,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return G(t);if(1===n)return[t[z(r-1,0)]];const e=[],o={};let i,c=0;for(;c<n;)i=z(t.length-1,0),o[i]||(e.push(t[i]),o[i]=!0,c++);return e},t.sanitize=function(t){return mn(dn(t))},t.setKey=function(t,n,r){return n&&k(t)||Fn(n)&&p(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t},t.setValue=function(t,n,r){return Fn(r)&&p(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t},t.shuffle=G,t.smallest=function(t){return J(...t)},t.snakeCase=function(t){return t.replace(sn," ").trim().toLowerCase().replace(fn,"_$1")},t.sortAlphabetical=function(t,n){return t.sort(((t,r)=>{const e=t[n],o=r[n];return e<o?-1:e>o?1:0}))},t.sortNewest=X,t.sortOldest=tt,t.sortOldestFilter=Y,t.sortUnique=_,t.sortedIndex=function(t,n){let r=0;return C(t,((t,e)=>(r=e,n>t))),r},t.stringify=mr,t.stubArray=()=>[],t.stubFalse=()=>xt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Mt,t.sub=function(t){return t.reduce(((t,n)=>t-n),0)},t.sum=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const r=t.length;return t.slice(r-n,r)},t.throttle=function(t,n){function r(...t){r.id?r.shouldThrottle=Mt:(r.callable(...t),r.id=Nt((()=>{r.shouldThrottle&&r.callable(...t),r.id=xt}),n))}return r.id=xt,r.callable=t.bind(r),r.clear=()=>{Ut.remove(r.id),r.id=xt},r},t.timer=Nt,t.timers=Ut,t.times=Rt,t.timesAsync=async function(t,n){for(let r=0;r<t;r++)await n(t)},t.timesMap=function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r},t.timesMapAsync=async function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r},t.toArray=W,t.toPath=R,t.toggle=function(t,n=!0,r=!1){return B(n,t)?r:n},t.tokenize=function(t){return t.match(An)||[]},t.truey=br,t.truncate=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=r-n;for(;c<o&&c>=0&&(i=e[c]," "!==i);c--);return t.slice(0,c).trim()})(t,n,r):t},t.truncateRight=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=n;for(;c<o&&c>0&&(i=e[c]," "!==i);c++);return t.substr(c,r).trim()})(t,n,r):t},t.truth=Mt,t.unZip=function(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.unZipObject=t=>{const n=[],r=[];return lt(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},t.union=function(...t){return H(g(t))},t.uniqID=$r,t.unique=H,t.untilFalseArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0},t.untilTrueArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0},t.upperCase=function(t){return t.replace(sn," ").trim().toUpperCase()},t.upperFirst=function(t){return vn(t)+an(t)},t.upperFirstAll=function(t){return t.replace(wn,(t=>t.toUpperCase()))},t.upperFirstLetter=vn,t.upperFirstOnly=Cn,t.upperFirstOnlyAll=function(t){return Cn(t.toLowerCase()).replace(wn,(t=>t.toUpperCase()))},t.virtualStorage=function(t){return new Lr(t)},t.whileCompactMap=function(t,n,r=[],e){let i=0;for(;i<t.length;){const c=r.push(n(t[i],i,t,t.length,e));i++,o(c)&&r.push(c)}return t},t.whileEachArray=function(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t},t.whileMapArray=function(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t},t.without=function(t,n){if(!n)return t;const r=m(Set,n);return t.filter((t=>!r.has(t)))},t.words=function(t){return t.match(bn)||[]},t.wrap=function(t,n){return(...r)=>n(t,...r)},t.xor=function(...t){const n=m(Map),r=[];return 2===t.length?A(t[0],t[1]):(c(t,((t,r)=>{c(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),h(n,(t=>{1===t.count&&r.push(t.child)})),r)},t.zip=function(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.zipObject=(t,n)=>{const r={};return c(t,((t,e)=>{r[t]=n[e]})),r}}));
//# sourceMappingURL=index.js.map

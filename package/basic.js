!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function r(t){return void 0===t}function e(t){return Boolean(t.length)}function o(t){return null===t}function i(t){return!r(t)&&!o(t)}function c(t){return t}function u(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)n(t[o],o,t,e,r);return t}function s(t,n=c,r=[],e){return u(t,((t,o,c,u)=>{const s=n(t,o,r,c,u,e);i(s)&&r.push(s)})),r}async function a(t,n){if(!t)return;const r=t.length;for(let e=0;e<r;e++)await n(t[e],e,t,r);return t}async function f(t,n=c){const r=[];return await a(t,(async(t,e,o)=>{const c=await n(t,e,r,o);i(c)&&r.push(c)})),r}const{sign:l}=Math;function h(t){return-1===l(t)}function p(t,n,r,e){let o=t;for(;o<n;)e.push(o),o+=r;return e}function g(t,n,r,e){let o=t;for(;o>n;)e.push(o),o-=r;return e}function y(t,n){return t.forEach(n),t}const d=Array.isArray;function m(t){return d(t)&&t||i(t)&&[t]||[]}function A(t){return t.flat(1/0)}const b=Reflect.construct;function w(t,n=[],r){const e=d(n)?n:[n];return r?b(t,e,r):b(t,e)}function v(...t){const n=w(Map),r=[];return u(t,((t,r)=>{u(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),y(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function C(t,n=1,r=t.length){return t.splice(n,r)}function O(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function I(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function j(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function F(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function E(t,n,r=[],e){return u(t,((t,o,i,c)=>{!0===n(t,o,r,i,c,e)&&r.push(t)})),r}async function M(t,n,r=[],e){return await a(t,(async(t,o,i,c)=>{!0===await n(t,o,r,i,c,e)&&r.push(t)})),r}const S=Object.keys;function R(t){if(t)return S(t)}const x=/\.|\[/,B=/]/g,T="";function N(t){return t.replace(B,T).split(x)}function U(t,n){if(!n)return!1;let r=n;return j(d(t)?t:N(t),(t=>(r=r[t],i(r)))),r}const P=Object.hasOwn;function k(t,...n){if(t)return j(n,(n=>{const r=N(n);if(1===r.length)return P(t,n);{const n=r.pop(),e=U(r,t);return!!e&&P(e,n)}}))}const $=t=>!!i(t)&&"Object("===t.constructor.toString().trim().slice(9,16);function D(t,n){return t?.constructor===n||!1}function L(t){return n=>D(n,t)}function q(t){return t?.constructor?.name}function V(t){return n=>q(n)===t||!1}function K(t){return function(n,...r){return r?t(n)&&j(r,t):t(n)}}const Z=V("Buffer"),_=K(Z),z=(t,n)=>{if(t===n)return!0;if(_(t))return t.equals(n);if(t.toString()===n.toString())if($(t)){const r=R(t);if(k(n,r))return j(r,(r=>z(t[r],n[r])))}else if(d(t)&&t.length===n.length)return j(t,((t,r)=>z(t,n[r])));return!1};const W=Math.max;function G(t,n,r=[],e){return u(t,((t,o,i,c)=>{r[o]=n(t,o,r,i,c,e)})),r}async function J(t,n){const r=[];return await a(t,(async(t,e,o)=>{r[e]=await n(t,e,o)})),r}function H(t,n){return t-n}function Q(t,n){return n-t}const{floor:X,random:Y}=Math;function tt(t,n=0){return X(Y()*(t-n))+n}const nt=Array.from;function rt(t,n,r){if(i(t))return nt(t,n,r)}function et(t,n=t.length){if(t.length<=1)return rt(t);const r=rt(t);let e,o,i=0;for(;i<n;)e=tt(r.length-1,0),o=r[i],r[i]=r[e],r[e]=o,i++;return r}const ot=Math.min;function it(t,n,r){return r.indexOf(t)===n}function ct(t,n,r){return t!==r[n-1]}function ut(t,n){return n?t.filter(ct):t.filter(it)}function st(t){return t.fill(0),t}function at(t,n,r,e,o){if(t[o]===e)return!0}function ft(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i?o?o<i?1:o>i?-1:0:1:-1}function lt(t,n="id",r){return t.sort(((t,e)=>ft(t,e,n,r)))}function ht(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):o.localeCompare(i)}function pt(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i?o?o<i?-1:o>i?1:0:-1:1}function gt(t,n="id",r){return t.sort(((t,e)=>pt(t,e,n,r)))}const yt=L(String);function dt(t,n){if(t)return yt(n)?t[n]:G(n,(n=>t[n]))}function mt(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i.localeCompare(o)}function At(t){return n=>!!i(n)&&t.test(n)}const bt=At(/\.css$/),wt=At(/\.html$/),vt=At(/\.js$/),Ct=At(/\.json$/);const Ot=Object.assign;function It(t,...n){if(i(t))return Ot(t,...n)}const jt=async(t,n)=>{if(!t)return;const r=R(t);return await a(r,((e,o,i,c)=>n(t[e],e,t,c,r))),t};function Ft(t,n){if(!t)return;return u(R(t),((r,e,o,i)=>{n(t[r],r,t,i,o)}))}const Et=V("Set"),Mt=K(Et);function St(t,n){if(Mt(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const Rt=V("GeneratorFunction"),xt=K(Rt);async function Bt(t,n,r){if(Mt(t)){for(const r of t)await n(r,t);return t}if(xt(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const Tt=t=>!!i(t)&&t instanceof Function,Nt=V("AsyncFunction"),Ut=K(Nt);function Pt(t,n,r,e,o,c){return(u,s,a)=>{let f;const l=Ut(s);if(i(u)&&s)return f=d(u)?l?n:t:$(u)||Tt(u)?l?e:r:o?l?c:o:xt(u)?c:l?e:r,f(u,s,a)}}const kt=Pt(u,a,Ft,jt,St,Bt);class $t{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;kt(t,((t,r)=>{n[r]=function(...r){return this.value=t.call(n,n.value,...r),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}const Dt=!0,Lt=!1,qt=()=>{};function Vt(t,n){for(let r=0;r<t;r++)n(r)}class Kt{list=w(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,Dt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Zt=w(Kt);function _t(t,n){return Zt.set(t,n)}const zt=Reflect.apply;function Wt(t,n,r){if(Tt(t))return zt(t,n,r)}async function Gt(t,n,r={}){if(t)return await jt(t,(async(t,e,o,i,c)=>{r[e]=await n(t,e,r,o,i,c)})),r}function Jt(t,n,r={}){if(t)return Ft(t,((t,e,o,i,c)=>{r[e]=n(t,e,r,o,i,c)})),r}function Ht(t){return t?.constructor}function Qt(t,n=[]){const r=Ht(t);return r===Function&&"function"===r.name?function(){}:w(r,n)}function Xt(t,n=c,r){const e=r||Qt(t);if(d(t)||Mt(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=Tt(e.set);for(const[r,i]of t){const c=n(i,r,e,t);o?e.set(r,c):e[r]=c}return e}async function Yt(t,n=c,r,e){if(xt(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||Qt(t);if(d(t)||Mt(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const i=Tt(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);i?o.set(r,c):o[r]=c}return o}const tn=Pt(G,J,Jt,Gt,Xt,Yt);async function nn(t,n){if(!t)return;return F(R(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function rn(t,n){if(!t)return;return j(R(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function en(t,n=c){if(d(t)||Mt(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function on(t,n=c,r){if(xt(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(d(t)||Mt(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const cn=Pt(j,F,rn,nn,en,on);const un=Function.prototype;function sn(t){return un.call.bind(t)}const an=Object.getOwnPropertyNames,fn=Object.getOwnPropertyDescriptor,ln=Object.defineProperty,hn=sn(Object.hasOwnProperty),pn=Object.is;const{random:gn}=Math;const{sign:yn}=Math;const dn=Object.entries;async function mn(t,n=c,r={}){return await jt(t,(async(t,e,o,c,u)=>{const s=await n(t,e,r,o,c,u);i(s)&&(r[e]=s)})),r}function An(t,n=c,r={}){return Ft(t,((t,e,o,c,u)=>{const s=n(t,e,r,o,c,u);i(s)&&(r[e]=s)})),r}function bn(t,n,r={}){return Ft(t,((t,e,o,i,c)=>{!0===n(t,e,r,o,i,c)&&(r[e]=t)})),r}async function wn(t,n,r={}){return await jt(t,(async(t,e,o,i,c)=>{!0===await n(t,e,r,o,i,c)&&(r[e]=t)})),r}const vn=V("Number"),Cn=K(vn),On=V("RegExp"),In=K(On),jn=/[()[\]{}*+?^$|#.,/\\\s-]/g;function Fn(t){return t.replace(jn,"\\$&")}function En(t,n){return n?En(G(t,Fn)):RegExp(t.join("|"))}function Mn(t){if(t)return R(t).length}const Sn=/[ _-]+/g;const Rn=/[ _-]+/g,xn=/[ ]+/g;const Bn=/[ _-]+/g,Tn=/[ ]+/g;const Nn=/[ _-]+/g;const Un=/[ _-]+/g;function Pn(t,n=1){return t.substring(n)}const kn=/%(?![\da-f]{2})/gi,$n=/&/g,Dn=/</g,Ln=/>/g,qn=/"/g;function Vn(t){return decodeURIComponent(t.replace(kn,(()=>"%25")))}function Kn(t){return t.replace($n,"&amp;").replace(Dn,"&lt;").replace(Ln,"&gt;").replace(qn,"&quot;")}const Zn=/\S+/g,_n=/\w+/g;const zn=/\w+/g;function Wn(t){return t[0].toUpperCase()}function Gn(t){return Wn(t)+Pn(t)}function Jn(t){return Wn(t)+Pn(t).toLowerCase()}function Hn(t){return Ht(t)?.name}function Qn(t){return!i(t)}const Xn=V("Map"),Yn=K(Xn),tr=/Array/,nr="Array";function rr(t){if(t){const n=Hn(t);if(tr.test(n)&&n!==nr)return!0}return!1}const er=V("BigInt"),or=K(er),ir=V("Boolean"),cr=K(ir),ur=V("ArrayBuffer"),sr=K(ur);const ar=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");const fr=V("Date"),lr=K(fr);function hr(t){return!1===t}const pr=V("Float32Array"),gr=K(pr),yr=V("Float64Array"),dr=K(yr),{isInteger:mr}=Number,Ar=mr,br=V("Int16Array"),wr=K(br),vr=V("Int32Array"),Cr=K(vr),Or=V("Int8Array"),Ir=K(Or);function jr(t){return!!t&&t instanceof Promise}function Fr(t){return!!t&&(jr(t)||Ut(t)||xt(t))}const{isSafeInteger:Er}=Number,Mr=Er;const Sr=V("Uint16Array"),Rr=K(Sr),xr=V("Uint32Array"),Br=K(xr),Tr=V("Uint8Array"),Nr=K(Tr),Ur=V("Uint8ClampedArray"),Pr=K(Ur),kr=V("WeakMap"),$r=K(kr),Dr=void 0!==globalThis.Deno,Lr=void 0!==globalThis.process&&process.versions&&process.versions.node;function qr(t,n=!0){return Boolean(t)&&n}function Vr(t,n){return hr(z(t,n))}const Kr=JSON;const Zr=Kr.stringify;function _r(t,n,r){const e=globalThis.options||r;let o;return Tt(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Zr(t)}\n\t\tExpected: ${Zr(n)}`,e)}async function zr(t,n,r){const e=await t;return!(Tt(n)&&!1===await n(e,r))&&!Vr(e,n)||_r(e,n,r)}const Wr=globalThis.structuredClone;async function Gr(t,n=c,r,e){if(xt(t)){const r=[];for await(const o of t(...e)){const e=await n(o,r,t);i(e)&&r.push(e)}return r}const o=r||Qt(t);if(d(t)||Mt(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){const c=await n(r,o,t);i(c)&&e(c)}return o}const u=Tt(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);i(c)&&(u?o.set(r,c):o[r]=c)}return o}function Jr(t,n=c,r){const e=r||Qt(t);if(d(t)||Mt(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){const c=n(r,e,t);i(c)&&o(c)}return e}const o=Tt(e.set);for(const[r,c]of t){const u=n(c,r,e,t);i(u)&&(o?e.set(r,u):e[r]=u)}return e}const Hr=Pt(s,f,An,mn,Jr,Gr);function Qr(t,n=c,r){const e=r||Qt(t);if(d(t)||Mt(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=Tt(e.set);for(const[o,i]of t){!0===n(i,o,e,t)&&(r?e.set(o,i):e[o]=i)}}return e}async function Xr(t,n=c,r,e){if(xt(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||Qt(t);if(d(t)||Mt(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=Tt(o.set);for await(const[e,i]of t){!0===await n(i,e,o,t)&&(r?o.set(e,i):o[e]=i)}}return o}const Yr=Pt(E,M,bn,wn,Qr,Xr);function te(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const ne=te(u),re=te(O);function ee(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const oe=ee(a),ie=ee(I);const ce=At(/\./);class ue{list=w(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,Dt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const se=w(ue);class ae{static models={};constructor(t,n){i(n)?(It(this,n),this.modelName=t,ae.models.set(t,n)):It(this,t)}}class fe{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;Ft(t,(n=>{t[n]=new fe(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new fe(r),!0)})}}class le{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return i(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const he=w(le);class pe{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}t.Chain=$t,t.Intervals=ue,t.Model=ae,t.Store=fe,t.Timers=Kt,t.UniqID=le,t.VirtualStorage=pe,t.add=function(t,n){return t+n},t.after=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)},t.apply=Wt,t.arrayToRegex=En,t.arraysToObject=function(t,n){const r={};return u(t,((t,e)=>{r[n[e]]=t})),r},t.ary=function(t,n){return(...r)=>t(...r.splice(0,n))},t.assert=function(t,n,r){return Fr(t)||Fr(n)?zr(t,n,r):!(Tt(n)&&!1===n(t,r))&&!Vr(t,n)||_r(t,n,r)},t.assertAsync=zr,t.assign=It,t.before=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)},t.bindAll=function(t,n,r){const e=tn(t,(t=>Tt(t)?t.bind(n):t));return r?It(r,e):e},t.cacheNativeMethod=sn,t.calcProgress=function(t,n){return 0!==t&&(0===n?0:n/t*100)},t.camelCase=function(t){let n="";return t.replace(Sn," ").trim().split(" ").forEach(((t,r)=>{n+=0===r?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n},t.chain=function(t){return w($t,[t])},t.chunk=function(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=function(t){if(t){if(_(t))return st(t);if(d(t))return n(t);t.clear?t.clear():t.length&&(t.length=0)}return t},t.clearArray=n,t.clearBuffer=st,t.clearIntervals=function(){Vt(setTimeout(qt,0),(t=>{se.remove(t)}))},t.clearTimers=function(){Vt(setTimeout(qt,0),(t=>{Zt.remove(t)}))},t.clone=function(t){return Wr(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=Qt,t.compact=function(t){if($(t)){const n=R(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],i=t[r];qr(i)&&(e[r]=i)}return e}return t.filter((t=>qr(t)))},t.compactKeys=function(t){const n=[];return Ft(t,((t,r)=>{i(t)&&n.push(r)})),n},t.compactMap=Hr,t.compactMapArray=s,t.compactMapAsyncArray=f,t.compactMapAsyncObject=mn,t.compactMapObject=An,t.concurrent=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.all(o)},t.concurrentStatus=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.allSettled(o)},t.construct=w,t.constructorName=q,t.countBy=function(t,n){const r={};let e;return u(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r},t.countKey=function(t,n){let r=0;return u(t,(t=>{t[n]&&r++})),r},t.countWithoutKey=function(t,n){let r=0;return u(t,(t=>{t[n]||r++})),r},t.curry=function(t,r=t.length){const e=[],o=(...i)=>{if(e.push(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.curryRight=function(t,r=t.length){const e=[],o=(...i)=>{if(e.unshift(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.debounce=function(t,n){function r(...t){r.id!==Lt&&Zt.remove(r.id),r.id=_t((()=>{r.callable(...t),r.id=Lt}),n)}return r.id=Lt,r.callable=t.bind(r),r.clear=()=>{r.id!==Lt&&(Zt.remove(r.id),r.id=Lt)},r},t.deduct=function(t){return t-1},t.defProp=ln,t.difference=v,t.divide=function(t,n){return t/n},t.drop=C,t.dropRight=(t,n=1,r=t.length)=>C(t,0,r-n),t.each=kt,t.eachArray=u,t.eachAsyncArray=a,t.eachAsyncObject=jt,t.eachObject=Ft,t.eachRight=O,t.eachRightAsync=I,t.ensureArray=m,t.ensureBuffer=function(t){return _(t)&&t||i(t)&&Buffer.from(t)||Buffer.alloc(0)},t.escapeRegex=Fn,t.escapeRegexRegex=jn,t.every=cn,t.everyArg=function(...t){return Ut(t[0])?async function(...n){return cn(t,(async t=>cn(n,(async n=>t(n)))))}:function(...n){return cn(t,(t=>cn(n,(n=>t(n)))))}},t.everyArray=j,t.everyAsyncArray=F,t.everyAsyncObject=nn,t.everyObject=rn,t.falsy=Lt,t.filter=Yr,t.filterArray=E,t.filterAsyncArray=M,t.filterAsyncObject=wn,t.filterObject=bn,t.findIndex=function(t,n,r="id"){const e=t.findIndex(((t,e)=>at(t,0,0,n,r)));return-1!==e&&e},t.findIndexCache=at,t.findItem=function(t,n,r="id"){const e=t.find(((t,e)=>at(t,0,0,n,r)));return-1!==e&&e},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(m(n))),[]);return r},t.flattenDeep=A,t.flow=ne,t.flowAsync=oe,t.flowAsyncRight=ie,t.flowRight=re,t.forEach=y,t.forEachAsync=async function(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t},t.forMap=function(t,n){const r=Qt(t),e=r.push||r.add;if(e&&Tt(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else Tt(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r},t.forOf=St,t.forOfAsync=Bt,t.forOfCompactMap=Jr,t.forOfCompactMapAsync=Gr,t.forOfEvery=en,t.forOfEveryAsync=on,t.forOfFilter=Qr,t.forOfFilterAsync=Xr,t.forOfMap=Xt,t.forOfMapAsync=Yt,t.generateLoop=Pt,t.get=U,t.getEntries=function(t){if(i(t))return dn(t)},t.getFileExtension=function(t){if(t)return t.substring(t.lastIndexOf(".")+1)},t.getFilename=function(t){if(t)return t.substring(t.lastIndexOf("/")+1)},t.getHighest=function(t,n="id"){return gt(t,n)[0]},t.getLowest=function(t,n){return lt(t,n,!1)[0]},t.getNumberInsertIndex=function(t,n){let r=0;return j(t,((t,e)=>(r=e,n>=t&&(r=e+1,!0)))),r},t.getPropDesc=fn,t.getPropNames=an,t.getType=Ht,t.getTypeName=Hn,t.groupBy=function(t,n){const r={};return u(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r},t.has=function t(n,r,e){if(Qn(n)||Qn(r))return!1;if(yt(n))return yt(r)?n.includes(r,e):In(r)?r.test(n):Tt(r)?Boolean(r(n)):cn(r,(r=>Boolean(t(n,r))));if(d(n)){if(yt(r))return n.includes(r,e);if(In(r))return cn(n,(t=>t.test(r)));if(d(r))return cn(r,(r=>Boolean(t(n,r))))}return!1},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const r=N(n);if(1===r.length)return P(t,n);{const n=r.pop(),e=U(r,t);return!!e&&P(e,n)}})))},t.hasDot=ce,t.hasKeys=k,t.hasLength=e,t.hasProp=hn,t.hasValue=i,t.htmlEntities=Kn,t.ifInvoke=function(t,...n){if(Tt(t))return t(...n)},t.ifNotAssign=(t,n,r)=>(n&&!i(t[n])&&(t[n]=r),t),t.ifValue=function(t,n,r,e){if(i(t)){if(Tt(n))return r?Wt(n,r,e):n(...e);if($(n))return n[r]=t,n}},t.inAsync=async function(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t},t.inSync=(t,n)=>kt(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const r={};return u(t,(t=>{r[t[n]]=t})),r},t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)},t.intersection=function(t,...n){return s(t,(t=>{if(j(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return se.set(t,n)},t.intervals=se,t.invert=function(t,n={}){if(t)return Ft(t,((t,r)=>{n[t]=r})),n},t.invoke=function(t,n,r){return G(t,((t,e)=>t[n](r,e)))},t.invokeAsync=function(t,n,r){return J(t,(async(t,e)=>t[n](r,e)))},t.isArguments=function(t){return!!i(t)&&"[object Arguments]"===t.toString()},t.isArray=d,t.isArrayBuffer=sr,t.isArrayBufferCall=ur,t.isArrayLike=function(t,n){if(Qn(t)||Tt(t))return!1;if(d(t)||rr(t))return!0;const r=t.length;if(!Qn(r)||!Cn(r)||r<0)return!1;if(n){const n=R(t);return!!n&&cn(n,((t,n)=>n>=0&&Cn(n)))}return!0},t.isAsync=Ut,t.isAsyncCall=Nt,t.isBigInt=or,t.isBigIntCall=er,t.isBoolean=cr,t.isBooleanCall=ir,t.isBuffer=_,t.isBufferCall=Z,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isCloneable=function(t){if(i(t)){const n=t?.constructor?.name;return ar.test(n)}return!1},t.isConstructor=D,t.isConstructorFactory=L,t.isConstructorNameFactory=V,t.isDate=lr,t.isDateCall=fr,t.isDeno=Dr,t.isEmpty=function(t){return yt(t)||d(t)?!e(t):$(t)?!Mn(t):!i(t)},t.isEqual=z,t.isF32=gr,t.isF32Call=pr,t.isF64=dr,t.isF64Call=yr,t.isFalse=hr,t.isFalsy=function(t,n=!0){return!1===Boolean(t)&&n},t.isFileCSS=bt,t.isFileHTML=wt,t.isFileJS=vt,t.isFileJSON=Ct,t.isFloat=Ar,t.isFunction=Tt,t.isGenerator=xt,t.isGeneratorCall=Rt,t.isI16=wr,t.isI16Call=br,t.isI32=Cr,t.isI32Call=vr,t.isI8=Ir,t.isI8Call=Or,t.isIterable=function(t){return i(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=Fr,t.isMap=Yn,t.isMapCall=Xn,t.isMatchArray=function(t,n){return t.length===n.length&&j(t,((t,r)=>z(n[r],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const r=R(t),e=R(n);return r.length===e.length&&j(r,(r=>t[r]===n[r]))},t.isNegative=h,t.isNodejs=Lr,t.isNull=o,t.isNumber=Cn,t.isNumberCall=vn,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,r){return t>n&&t<r},t.isNumberNotInRange=function(t,n,r){return t<n||t>r},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=$,t.isPositive=function(t){return 1===yn(t)},t.isPrimitive=function(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n},t.isPromise=jr,t.isRegex=In,t.isRegexCall=On,t.isRelated=function(t,n){return!Qn(t)&&!Qn(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=Mr,t.isSame=pn,t.isSameType=function(t,n){const r=Ht(t),e=Ht(n);return r===e&&r.name===e.name},t.isSet=Mt,t.isSetCall=Et,t.isString=yt,t.isTrue=function(t){return!0===t},t.isTruthy=qr,t.isTypeFactory=K,t.isTypedArray=rr,t.isU16=Rr,t.isU16Call=Sr,t.isU32=Br,t.isU32Call=xr,t.isU8=Nr,t.isU8C=Pr,t.isU8CCall=Ur,t.isU8Call=Tr,t.isUndefined=r,t.isWeakMap=$r,t.isWeakMapCall=kr,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return Kr.parse(t,n)},t.kebabCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Rn," ").trim().toLowerCase().replace(xn,"-")},t.keys=R,t.largest=function(t){return W(...t)},t.last=function(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]},t.lowerCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Un," ").trim().toLowerCase()},t.map=tn,t.mapArray=G,t.mapAsyncArray=J,t.mapAsyncObject=Gt,t.mapObject=Jt,t.mapRightArray=function(t,n,r=[],e){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)r[o]=n(t[c],c,t,i,e),o++;return r},t.mapWhile=function(t,n,r=[],e){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,r,t,o,e))break;r[i]=c}return r},t.merge=function t(n,...r){return kt(r,(r=>{kt(r,((r,e)=>{if(n[e]&&($(r)||d(r)||r.forEach))return t(n[e],r);n[e]=r}))})),n},t.model=function(t,n){return i(n)?w(ae,[t,n]):U(t,ae.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=Qn,t.noop=qt,t.notEqual=Vr,t.nthArg=function(t=0){return(...n)=>n[t]},t.objectAssign=Ot,t.objectEntries=dn,t.objectSize=Mn,t.omit=function(t,n){if(t){if(d(n)){const r=En(n);return bn(t,((t,n)=>!r.test(n)))}if(In(n))return bn(t,((t,r)=>!n.test(r)));if(yt(n))return bn(t,((t,r)=>r!==n));if(Cn(n)){const r=n.toString();return bn(t,((t,n)=>n!==r))}return Tt(n)?bn(t,((t,r)=>!n(t,r))):void 0}},t.once=t=>{let n;return(...r)=>(i(n)||(n=t(...r)),n)},t.onlyUnique=it,t.over=function(t){return(...n)=>tn(t,(t=>t(...n)))},t.overEvery=function(t){return n=>cn(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const r=[];return[s(t,((t,e)=>{if(n(t,e))return t;r.push(t)})),r]},t.pick=(t,n,r={})=>{if(t)return u(n,(n=>{r[n]=t[n]})),r},t.pluck=function(t,n){return G(t,(t=>dt(t,n)))},t.pluckObject=dt,t.promise=function(t){return new Promise(t)},t.propertyMatch=(t,n,r=R(t))=>j(r,(r=>z(t[r],n[r]))),t.randomFloat=function(t,n=0){return gn()*(t-n)+n},t.randomInt=tt,t.range=function(t,n,r=1,e=[]){return h(r)?e:t<n?p(t,n,r,e):g(t,n,r,e)},t.rangeDown=g,t.rangeUp=p,t.rawURLDecode=Vn,t.reArg=function(t,n){return(...r)=>t(...n.map((t=>r[t])))},t.regexTestFactory=At,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t},t.removeBy=function(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t},t.replaceList=function(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Pn,t.returnValue=c,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return et(t);if(1===n)return[t[tt(r-1,0)]];const e=[],o={};let i,c=0;for(;c<n;)i=tt(t.length-1,0),o[i]||(e.push(t[i]),o[i]=!0,c++);return e},t.sanitize=function(t){return Kn(Vn(t))},t.setKey=function(t,n,r){return n&&$(t)||Cn(n)&&d(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t},t.setValue=function(t,n,r){return Cn(r)&&d(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t},t.shuffle=et,t.smallest=function(t){return ot(...t)},t.snakeCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Bn," ").trim().toLowerCase().replace(Tn,"_")},t.sortCollectionAlphabetically=function(t,n="id",r){return t.sort(((t,e)=>ht(t,e,n,r)))},t.sortCollectionAlphabeticallyReverse=function(t,n="id",r){return t.sort(((t,e)=>mt(t,e,n,r)))},t.sortCollectionAscending=gt,t.sortCollectionAscendingFilter=pt,t.sortCollectionDescending=lt,t.sortCollectionDescendingFilter=ft,t.sortNumberAscending=function(t){return t.sort(H)},t.sortNumberDescening=function(t){return t.sort(Q)},t.sortObjectsAlphabetically=ht,t.sortObjectsAlphabeticallyReverse=mt,t.sortUnique=ct,t.stringify=Zr,t.stubArray=()=>[],t.stubFalse=()=>Lt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Dt,t.subtract=H,t.subtractAll=function(t){return t.reduce(((t,n)=>t-n),0)},t.subtractReverse=Q,t.sumAll=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const r=t.length;return t.slice(r-n,r)},t.throttle=function(t,n){function r(...t){r.id?r.shouldThrottle=Dt:(r.callable(...t),r.id=_t((()=>{r.shouldThrottle&&r.callable(...t),r.id=Lt}),n))}return r.id=Lt,r.callable=t.bind(r),r.clear=()=>{Zt.remove(r.id),r.id=Lt},r},t.timer=_t,t.timers=Zt,t.times=Vt,t.timesAsync=async function(t,n){for(let r=0;r<t;r++)await n(t)},t.timesMap=function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r},t.timesMapAsync=async function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r},t.toArray=rt,t.toPath=N,t.toggle=function(t,n=!0,r=!1){return z(n,t)?r:n},t.tokenize=function(t){return t.match(Zn)||[]},t.truncate=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=r-n;for(;c<o&&c>=0&&(i=e[c]," "!==i);c--);return t.slice(0,c).trim()})(t,n,r):t},t.truncateRight=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=n;for(;c<o&&c>0&&(i=e[c]," "!==i);c++);return t.substring(c,r).trim()})(t,n,r):t},t.truth=Dt,t.unZip=function(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.unZipObject=t=>{const n=[],r=[];return Ft(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},t.union=function(...t){return ut(A(t))},t.uniqID=he,t.unique=ut,t.untilFalseArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0},t.untilTrueArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0},t.upperCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Nn," ").trim().toUpperCase()},t.upperFirst=Gn,t.upperFirstAll=function(t){return t.replace(zn,(t=>Gn(t)))},t.upperFirstLetter=Wn,t.upperFirstOnly=Jn,t.upperFirstOnlyAll=function(t){return t.replace(zn,(t=>Jn(t)))},t.virtualStorage=function(t){return new pe(t)},t.whileCompactMap=function(t,n,r=[],e){let o=0;for(;o<t.length;){const c=r.push(n(t[o],o,t,t.length,e));o++,i(c)&&r.push(c)}return t},t.whileEachArray=function(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t},t.whileMapArray=function(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t},t.without=function(t,n){if(!n)return t;const r=w(Set,n);return t.filter((t=>!r.has(t)))},t.words=function(t){return t.match(_n)||[]},t.wrap=function(t,n){return(...r)=>n(t,...r)},t.xor=function(...t){const n=w(Map),r=[];return 2===t.length?v(t[0],t[1]):(u(t,((t,r)=>{u(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),y(n,(t=>{1===t.count&&r.push(t.child)})),r)},t.zip=function(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.zipObject=(t,n)=>{const r={};return u(t,((t,e)=>{r[t]=n[e]})),r}}));
//# sourceMappingURL=basic.js.map

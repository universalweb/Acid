!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function r(t){return void 0===t}function e(t){return Boolean(t.length)}function o(t){return null===t}function i(t){return!r(t)&&!o(t)}function c(t){return t}function u(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)n(t[o],o,t,e,r);return t}function s(t,n=c,r=[],e){return u(t,((t,o,c,u)=>{const s=n(t,o,r,c,u,e);i(s)&&r.push(s)})),r}async function a(t,n){if(!t)return;const r=t.length;for(let e=0;e<r;e++)await n(t[e],e,t,r);return t}async function f(t,n=c){const r=[];return await a(t,(async(t,e,o)=>{const c=await n(t,e,r,o);i(c)&&r.push(c)})),r}function l(t,n,r){const e=[];let o=t;for(;o<n;)e.push(o),o+=r;return e}function h(t,n,r){const e=r<0?-1*r:r,o=[];let i=t;for(;i>n;)o.push(i),i-=e;return o}function p(t,n){return t.forEach(n),t}const g=Array.isArray;function y(t){return g(t)&&t||i(t)&&[t]||[]}function d(t){return t.flat(1/0)}const m=Reflect.construct;function b(t,n=[],r){const e=g(n)?n:[n];return r?m(t,e,r):m(t,e)}function A(...t){const n=b(Map),r=[];return u(t,((t,r)=>{u(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),p(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function w(t,n,r=t.length){return t.splice(n,r)}function v(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function C(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function O(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function I(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function F(t,n,r=[],e){return u(t,((t,o,i,c)=>{!0===n(t,o,r,i,c,e)&&r.push(t)})),r}async function j(t,n,r=[],e){return await a(t,(async(t,o,i,c)=>{!0===await n(t,o,r,i,c,e)&&r.push(t)})),r}const E=Object.keys;function M(t){if(t)return E(t)}const S=/\.|\[/,R=/]/g,x="";function B(t){return t.replace(R,x).split(S)}function T(t,n){if(!n)return!1;let r=n;return O(g(t)?t:B(t),(t=>(r=r[t],i(r)))),r}const N=Object.hasOwn;function U(t,...n){if(t)return O(n,(n=>{const r=B(n);if(1===r.length)return N(t,n);{const n=r.pop(),e=T(r,t);return!!e&&N(e,n)}}))}const k=t=>!!i(t)&&"Object("===t.constructor.toString().trim().slice(9,16),P=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(k(t)){const r=M(t);if(U(n,r))return O(r,(r=>P(t[r],n[r])))}else if(g(t)&&t.length===n.length)return O(t,((t,r)=>P(t,n[r])));return!1};const D=Math.max;function $(t,n,r=[],e){return u(t,((t,o,i,c)=>{r[o]=n(t,o,r,i,c,e)})),r}async function L(t,n){const r=[];return await a(t,(async(t,e,o)=>{r[e]=await n(t,e,o)})),r}function q(t,n){return t-n}function V(t,n){return n-t}const{floor:K,random:z}=Math;function W(t,n=0){return K(z()*(t-n))+n}const G=Array.from;function J(t,n=t.length){if(t.length<=1)return G(t);const r=G(t);let e,o,i=0;for(;i<n;)e=W(r.length-1,0),o=r[i],r[i]=r[e],r[e]=o,i++;return r}const Z=Math.min;function H(t,n,r){return r.indexOf(t)===n}function _(t,n,r){return t!==r[n-1]}function Q(t,n){return n?t.filter(_):t.filter(H)}function X(t,n){return t?.constructor===n||!1}function Y(t){return n=>X(n,t)}function tt(t){return t?.constructor?.name}function nt(t){return n=>tt(n)===t||!1}function rt(t){return function(n,...r){return r?t(n)&&O(r,t):t(n)}}const et=nt("Buffer"),ot=rt(et);function it(t,n,r,e,o){if(t[o]===e)return!0}function ct(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i?o?o<i?1:o>i?-1:0:1:-1}function ut(t,n="id",r){return t.sort(((t,e)=>ct(t,e,n,r)))}function st(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):o.localeCompare(i)}function at(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i?o?o<i?-1:o>i?1:0:-1:1}function ft(t,n="id",r){return t.sort(((t,e)=>at(t,e,n,r)))}function lt(t,n){if(t)return $(n,(n=>t[n]))}function ht(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i.localeCompare(o)}function pt(t){return n=>!!i(n)&&t.test(n)}const gt=pt(/\.css$/),yt=pt(/\.html$/),dt=pt(/\.js$/),mt=pt(/\.json$/);const bt=Object.assign;function At(t,...n){if(t)return bt(t,...n)}const wt=async(t,n)=>{if(!t)return;const r=M(t);return await a(r,((e,o,i,c)=>n(t[e],e,t,c,r))),t};function vt(t,n){if(!t)return;return u(M(t),((r,e,o,i)=>{n(t[r],r,t,i,o)}))}const Ct=nt("Set"),Ot=rt(Ct);function It(t,n){if(Ot(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const Ft=nt("GeneratorFunction"),jt=rt(Ft);async function Et(t,n,r){if(Ot(t)){for(const r of t)await n(r,t);return t}if(jt(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const Mt=t=>!!i(t)&&t instanceof Function,St=nt("AsyncFunction"),Rt=rt(St);function xt(t,n,r,e,o,c){return(u,s,a)=>{let f;const l=Rt(s);if(i(u)&&s)return f=g(u)?l?n:t:k(u)||Mt(u)?l?e:r:o?l?c:o:jt(u)?c:l?e:r,f(u,s,a)}}const Bt=xt(u,a,vt,wt,It,Et);class Tt{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;Bt(t,((t,r)=>{n[r]=function(...r){return this.value=t.call(n,n.value,...r),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}const Nt=!0,Ut=!1,kt=()=>{};function Pt(t,n){for(let r=0;r<t;r++)n(r)}class Dt{list=b(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,Nt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const $t=b(Dt);function Lt(t,n){return $t.set(t,n)}const qt=Reflect.apply;async function Vt(t,n,r={}){if(t)return await wt(t,(async(t,e,o,i,c)=>{r[e]=await n(t,e,r,o,i,c)})),r}function Kt(t,n,r={}){if(t)return vt(t,((t,e,o,i,c)=>{r[e]=n(t,e,r,o,i,c)})),r}function zt(t){return t?.constructor}function Wt(t,n=[]){const r=zt(t);return r===Function&&"function"===r.name?function(){}:b(r,n)}function Gt(t,n=c,r){const e=r||Wt(t);if(g(t)||Ot(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=Mt(e.set);for(const[r,i]of t){const c=n(i,r,e,t);o?e.set(r,c):e[r]=c}return e}async function Jt(t,n=c,r,e){if(jt(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||Wt(t);if(g(t)||Ot(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const i=Mt(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);i?o.set(r,c):o[r]=c}return o}const Zt=xt($,L,Kt,Vt,Gt,Jt);async function Ht(t,n){if(!t)return;return I(M(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function _t(t,n){if(!t)return;return O(M(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function Qt(t,n=c){if(g(t)||Ot(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function Xt(t,n=c,r){if(jt(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(g(t)||Ot(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const Yt=xt(O,I,_t,Ht,Qt,Xt);const tn=Object.is,nn=Function.prototype;function rn(t){return nn.call.bind(t)}const en=Object.getOwnPropertyNames,on=Object.getOwnPropertyDescriptor,cn=Object.defineProperty,un=rn(Object.hasOwnProperty);const{random:sn}=Math;async function an(t,n=c,r={}){return await wt(t,(async(t,e,o,c,u)=>{const s=await n(t,e,r,o,c,u);i(s)&&(r[e]=s)})),r}function fn(t,n=c,r={}){return vt(t,((t,e,o,c,u)=>{const s=n(t,e,r,o,c,u);i(s)&&(r[e]=s)})),r}function ln(t,n,r={}){return vt(t,((t,e,o,i,c)=>{!0===n(t,e,r,o,i,c)&&(r[e]=t)})),r}async function hn(t,n,r={}){return await wt(t,(async(t,e,o,i,c)=>{!0===await n(t,e,r,o,i,c)&&(r[e]=t)})),r}const pn=Y(String),gn=nt("Number"),yn=rt(gn),dn=nt("RegExp"),mn=rt(dn),bn=/[()[\]{}*+?^$|#.,/\\\s-]/g;function An(t){return t.replace(bn,"\\$&")}function wn(t,n){return n?wn($(t,An)):RegExp(t.join("|"))}function vn(t){if(t)return M(t).length}const Cn=/[-_]/g,On=/ (.)/g;function In(t,n=1){return t.substr(n)}const Fn=/%(?![\da-f]{2})/gi,jn=/&/g,En=/</g,Mn=/>/g,Sn=/"/g;function Rn(t){return decodeURIComponent(t.replace(Fn,(()=>"%25")))}function xn(t){return t.replace(jn,"&amp;").replace(En,"&lt;").replace(Mn,"&gt;").replace(Sn,"&quot;")}const Bn=/\S+/g,Tn=/\w+/g;const Nn=/ (.)/g;function Un(t){return t[0].toUpperCase()}function kn(t){return Un(t)+In(t).toLowerCase()}function Pn(t){return zt(t)?.name}function Dn(t){return!i(t)}const $n=nt("Map"),Ln=rt($n),qn=/Array/,Vn="Array";function Kn(t){if(t){const n=Pn(t);if(qn.test(n)&&n!==Vn)return!0}return!1}const zn=nt("BigInt"),Wn=rt(zn),Gn=nt("Boolean"),Jn=rt(Gn),Zn=nt("ArrayBuffer"),Hn=rt(Zn);const _n=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");const Qn=nt("Date"),Xn=rt(Qn);const Yn=nt("Float32Array"),tr=rt(Yn),nr=nt("Float64Array"),rr=rt(nr),{isInteger:er}=Number,or=er,ir=nt("Int16Array"),cr=rt(ir),ur=nt("Int32Array"),sr=rt(ur),ar=nt("Int8Array"),fr=rt(ar);function lr(t){return!!t&&t instanceof Promise}const{isSafeInteger:hr}=Number,pr=hr;const gr=nt("Uint16Array"),yr=rt(gr),dr=nt("Uint32Array"),mr=rt(dr),br=nt("Uint8Array"),Ar=rt(br),wr=nt("Uint8ClampedArray"),vr=rt(wr),Cr=nt("WeakMap"),Or=rt(Cr),Ir=void 0!==globalThis.Deno,Fr=void 0!==globalThis.process&&process.versions&&process.versions.node;function jr(t,n){return!1===P(t,n)}const Er=JSON;const Mr=Er.stringify;const Sr=globalThis.structuredClone;function Rr(t,n=!0){return Boolean(t)&&n}async function xr(t,n=c,r,e){if(jt(t)){const r=[];for await(const o of t(...e)){const e=await n(o,r,t);i(e)&&r.push(e)}return r}const o=r||Wt(t);if(g(t)||Ot(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){const c=await n(r,o,t);i(c)&&e(c)}return o}const u=Mt(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);i(c)&&(u?o.set(r,c):o[r]=c)}return o}function Br(t,n=c,r){const e=r||Wt(t);if(g(t)||Ot(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){const c=n(r,e,t);i(c)&&o(c)}return e}const o=Mt(e.set);for(const[r,c]of t){const u=n(c,r,e,t);i(u)&&(o?e.set(r,u):e[r]=u)}return e}const Tr=xt(s,f,fn,an,Br,xr);function Nr(t,n=c,r){const e=r||Wt(t);if(g(t)||Ot(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=Mt(e.set);for(const[o,i]of t){!0===n(i,o,e,t)&&(r?e.set(o,i):e[o]=i)}}return e}async function Ur(t,n=c,r,e){if(jt(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||Wt(t);if(g(t)||Ot(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=Mt(o.set);for await(const[e,i]of t){!0===await n(i,e,o,t)&&(r?o.set(e,i):o[e]=i)}}return o}const kr=xt(F,j,ln,hn,Nr,Ur);function Pr(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const Dr=Pr(u),$r=Pr(v);function Lr(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const qr=Lr(a),Vr=Lr(C);const Kr=pt(/\./);class zr{list=b(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,Nt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Wr=b(zr);class Gr{static models={};constructor(t,n){i(n)?(At(this,n),this.modelName=t,Gr.models.set(t,n)):At(this,t)}}class Jr{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;vt(t,(n=>{t[n]=new Jr(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new Jr(r),!0)})}}class Zr{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return i(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const Hr=b(Zr);class _r{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}t.Chain=Tt,t.Intervals=zr,t.Model=Gr,t.Store=Jr,t.Timers=Dt,t.UniqID=Zr,t.VirtualStorage=_r,t.add=function(t,n){return t+n},t.after=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)},t.apply=qt,t.arrayToObject=function(t,n){const r={};return u(t,((t,e)=>{r[n[e]]=t})),r},t.arrayToRegex=wn,t.ary=function(t,n){return(...r)=>t(...r.splice(0,n))},t.assert=function(t,n,r){return!(Mt(n)&&!1===n(t,r))&&!jr(t,n)||function(t,n,r){const e=globalThis.options||r;let o;return Mt(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Mr(t)}\n\t\tExpected: ${Mr(n)}`,e)}(t,n,r)},t.assign=At,t.before=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)},t.bindAll=function(t,n,r){const e=Zt(t,(t=>Mt(t)?t.bind(n):t));return r?At(r,e):e},t.cacheNativeMethod=rn,t.camelCase=function(t){return t.toLowerCase().replace(On,(t=>t.toUpperCase().replace(/ /g,"")))},t.chain=function(t){return b(Tt,[t])},t.chunk=function(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=n,t.clearIntervals=function(){Pt(setTimeout(kt,0),(t=>{Wr.remove(t)}))},t.clearTimers=function(){Pt(setTimeout(kt,0),(t=>{$t.remove(t)}))},t.clone=function(t){return Sr(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=Wt,t.compact=function(t){if(k(t)){const n=M(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],i=t[r];Rr(i)&&(e[r]=i)}return e}return t.filter((t=>Rr(t)))},t.compactKeys=function(t){const n=[];return vt(t,((t,r)=>{i(t)&&n.push(r)})),n},t.compactMap=Tr,t.compactMapArray=s,t.compactMapAsyncArray=f,t.compactMapAsyncObject=an,t.compactMapObject=fn,t.concurrent=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.all(o)},t.concurrentStatus=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.allSettled(o)},t.construct=b,t.constructorName=tt,t.countBy=function(t,n){const r={};let e;return u(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r},t.countKey=function(t,n){let r=0;return u(t,(t=>{t[n]&&r++})),r},t.countWithoutKey=function(t,n){let r=0;return u(t,(t=>{t[n]||r++})),r},t.curry=function(t,r=t.length){const e=[],o=(...i)=>{if(e.push(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.curryRight=function(t,r=t.length){const e=[],o=(...i)=>{if(e.unshift(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.debounce=function(t,n){function r(...t){r.id!==Ut&&$t.remove(r.id),r.id=Lt((()=>{r.callable(...t),r.id=Ut}),n)}return r.id=Ut,r.callable=t.bind(r),r.clear=()=>{r.id!==Ut&&($t.remove(r.id),r.id=Ut)},r},t.deduct=function(t){return t-1},t.defProp=cn,t.difference=A,t.divide=function(t,n){return t/n},t.drop=w,t.dropRight=(t,n,r=t.length)=>w(t,0,r-n),t.each=Bt,t.eachArray=u,t.eachAsyncArray=a,t.eachAsyncObject=wt,t.eachObject=vt,t.eachRight=v,t.eachRightAsync=C,t.ensureArray=y,t.ensureBuffer=function(t){return ot(t)&&t||i(t)&&Buffer.from(t)||Buffer.alloc(0)},t.escapeRegex=An,t.escapeRegexRegex=bn,t.every=Yt,t.everyArg=function(...t){return Rt(t[0])?async function(...n){return Yt(t,(async t=>Yt(n,(async n=>t(n)))))}:function(...n){return Yt(t,(t=>Yt(n,(n=>t(n)))))}},t.everyArray=O,t.everyAsyncArray=I,t.everyAsyncObject=Ht,t.everyObject=_t,t.falsey=function(t,n=!0){return!1===Boolean(t)&&n},t.falsy=Ut,t.filter=kr,t.filterArray=F,t.filterAsyncArray=j,t.filterAsyncObject=hn,t.filterObject=ln,t.findIndex=function(t,n,r="id"){const e=t.findIndex(((t,e)=>it(t,0,0,n,r)));return-1!==e&&e},t.findIndexCache=it,t.findItem=function(t,n,r="id"){const e=t.find(((t,e)=>it(t,0,0,n,r)));return-1!==e&&e},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(y(n))),[]);return r},t.flattenDeep=d,t.flow=Dr,t.flowAsync=qr,t.flowAsyncRight=Vr,t.flowRight=$r,t.forEach=p,t.forEachAsync=async function(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t},t.forMap=function(t,n){const r=Wt(t),e=r.push||r.add;if(e&&Mt(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else Mt(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r},t.forOf=It,t.forOfAsync=Et,t.forOfCompactMap=Br,t.forOfCompactMapAsync=xr,t.forOfEvery=Qt,t.forOfEveryAsync=Xt,t.forOfFilter=Nr,t.forOfFilterAsync=Ur,t.forOfMap=Gt,t.forOfMapAsync=Jt,t.generateLoop=xt,t.get=T,t.getFileExtension=function(t){if(t)return t.substring(t.lastIndexOf(".")+1)},t.getFilename=function(t){if(t)return t.substring(t.lastIndexOf("/")+1)},t.getHighest=function(t,n="id"){return ft(t,n)[0]},t.getLowest=function(t,n){return ut(t,n,!1)[0]},t.getNumberInsertIndex=function(t,n){let r=0;return O(t,((t,e)=>(r=e,n>=t&&(r=e+1,!0)))),r},t.getPropDesc=on,t.getPropNames=en,t.getType=zt,t.getTypeName=Pn,t.groupBy=function(t,n){const r={};return u(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r},t.has=function t(n,r,e){if(Dn(n)||Dn(r))return!1;if(pn(n))return pn(r)?n.includes(r,e):mn(r)?r.test(n):Mt(r)?Boolean(r(n)):Yt(r,(r=>Boolean(t(n,r))));if(g(n)){if(pn(r))return n.includes(r,e);if(mn(r))return Yt(n,(t=>t.test(r)));if(g(r))return Yt(r,(r=>Boolean(t(n,r))))}return!1},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const r=B(n);if(1===r.length)return N(t,n);{const n=r.pop(),e=T(r,t);return!!e&&N(e,n)}})))},t.hasDot=Kr,t.hasKeys=U,t.hasLength=e,t.hasProp=un,t.hasValue=i,t.htmlEntities=xn,t.ifInvoke=function(t,...n){if(Mt(t))return t(...n)},t.ifNotAssign=(t,n,r)=>(n&&!i(t[n])&&(t[n]=r),t),t.ifValue=function(t,n){if(i(t))return n?n(t):t},t.inAsync=async function(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t},t.inSync=(t,n)=>Bt(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const r={};return u(t,(t=>{r[t[n]]=t})),r},t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)},t.intersection=function(t,...n){return s(t,(t=>{if(O(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return Wr.set(t,n)},t.intervals=Wr,t.invert=function(t,n={}){if(t)return vt(t,((t,r)=>{n[t]=r})),n},t.invoke=function(t,n,r){return $(t,((t,e)=>t[n](r,e)))},t.invokeAsync=function(t,n,r){return L(t,(async(t,e)=>t[n](r,e)))},t.isArguments=function(t){return!!i(t)&&"[object Arguments]"===t.toString()},t.isArray=g,t.isArrayBuffer=Hn,t.isArrayBufferCall=Zn,t.isArrayLike=function(t,n){if(Dn(t)||Mt(t))return!1;if(g(t)||Kn(t))return!0;const r=t.length;if(!Dn(r)||!yn(r)||r<0)return!1;if(n){const n=M(t);return!!n&&Yt(n,((t,n)=>n>=0&&yn(n)))}return!0},t.isAsync=Rt,t.isAsyncCall=St,t.isBigInt=Wn,t.isBigIntCall=zn,t.isBoolean=Jn,t.isBooleanCall=Gn,t.isBuffer=ot,t.isBufferCall=et,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isCloneable=function(t){if(i(t)){const n=t?.constructor?.name;return _n.test(n)}return!1},t.isConstructor=X,t.isConstructorFactory=Y,t.isConstructorNameFactory=nt,t.isDate=Xn,t.isDateCall=Qn,t.isDeno=Ir,t.isEmpty=function(t){return pn(t)||g(t)?!e(t):k(t)?!vn(t):!i(t)},t.isEqual=P,t.isF32=tr,t.isF32Call=Yn,t.isF64=rr,t.isF64Call=nr,t.isFalse=function(t){return!1===t},t.isFileCSS=gt,t.isFileHTML=yt,t.isFileJS=dt,t.isFileJSON=mt,t.isFloat=or,t.isFunction=Mt,t.isGenerator=jt,t.isGeneratorCall=Ft,t.isI16=cr,t.isI16Call=ir,t.isI32=sr,t.isI32Call=ur,t.isI8=fr,t.isI8Call=ar,t.isIterable=function(t){return i(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=function(t){return!!t&&(lr(t)||Rt(t)||jt(t))},t.isMap=Ln,t.isMapCall=$n,t.isMatchArray=function(t,n){return t.length===n.length&&O(t,((t,r)=>P(n[r],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const r=M(t),e=M(n);return r.length===e.length&&O(r,(r=>t[r]===n[r]))},t.isNodejs=Fr,t.isNull=o,t.isNumber=yn,t.isNumberCall=gn,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,r){return t>n&&t<r},t.isNumberNotInRange=function(t,n,r){return t<n||t>r},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=k,t.isPrimitive=function(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n},t.isPromise=lr,t.isRegex=mn,t.isRegexCall=dn,t.isRelated=function(t,n){return!Dn(t)&&!Dn(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=pr,t.isSame=tn,t.isSameType=function(t,n){const r=zt(t),e=zt(n);return r===e&&r.name===e.name},t.isSet=Ot,t.isSetCall=Ct,t.isString=pn,t.isTrue=function(t){return!0===t},t.isTypeFactory=rt,t.isTypedArray=Kn,t.isU16=yr,t.isU16Call=gr,t.isU32=mr,t.isU32Call=dr,t.isU8=Ar,t.isU8C=vr,t.isU8CCall=wr,t.isU8Call=br,t.isUndefined=r,t.isWeakMap=Or,t.isWeakMapCall=Cr,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return Er.parse(t,n)},t.kebabCase=function(t){return t.replace(Cn," ").trim().toLowerCase().replace(On,"-$1")},t.keys=M,t.largest=function(t){return D(...t)},t.last=function(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]},t.map=Zt,t.mapArray=$,t.mapAsyncArray=L,t.mapAsyncObject=Vt,t.mapObject=Kt,t.mapRightArray=function(t,n,r=[],e){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)r[o]=n(t[c],c,t,i,e),o++;return r},t.mapWhile=function(t,n,r=[],e){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,r,t,o,e))break;r[i]=c}return r},t.merge=function t(n,...r){return Bt(r,(r=>{Bt(r,((r,e)=>{if(n[e]&&(k(r)||g(r)||r.forEach))return t(n[e],r);n[e]=r}))})),n},t.model=function(t,n){return i(n)?b(Gr,[t,n]):T(t,Gr.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=Dn,t.noop=kt,t.notEqual=jr,t.nthArg=function(t=0){return(...n)=>n[t]},t.objectSize=vn,t.omit=function(t,n){if(t){if(g(n)){const r=wn(n);return ln(t,((t,n)=>!r.test(n)))}if(mn(n))return ln(t,((t,r)=>!n.test(r)));if(pn(n))return ln(t,((t,r)=>r!==n));if(yn(n)){const r=n.toString();return ln(t,((t,n)=>n!==r))}return Mt(n)?ln(t,((t,r)=>!n(t,r))):void 0}},t.once=t=>{let n;return(...r)=>(i(n)||(n=t(...r)),n)},t.onlyUnique=H,t.over=function(t){return(...n)=>Zt(t,(t=>t(...n)))},t.overEvery=function(t){return n=>Yt(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const r=[];return[s(t,(t=>{if(n(t))return t;r.push(t)})),r]},t.pick=(t,n,r={})=>{if(t)return u(n,(n=>{r[n]=t[n]})),r},t.pluck=function(t,n){return $(t,(t=>t[n]))},t.pluckObject=lt,t.pluckValues=function(t,n){return $(t,(t=>lt(t,n)))},t.promise=function(t){return new Promise(t)},t.propertyMatch=(t,n,r=M(t))=>O(r,(r=>P(t[r],n[r]))),t.randomFloat=function(t,n=0){return sn()*(t-n)+n},t.randomInt=W,t.range=function(t,n,r=1){return t<n?l(t,n,r):h(t,n,r)},t.rangeDown=h,t.rangeUp=l,t.rawURLDecode=Rn,t.reArg=function(t,n){return(...r)=>t(...n.map((t=>r[t])))},t.regexTestFactory=pt,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t},t.removeBy=function(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t},t.replaceList=function(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)},t.rest=function(t){return t.slice(1,t.length)},t.restString=In,t.returnValue=c,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return J(t);if(1===n)return[t[W(r-1,0)]];const e=[],o={};let i,c=0;for(;c<n;)i=W(t.length-1,0),o[i]||(e.push(t[i]),o[i]=!0,c++);return e},t.sanitize=function(t){return xn(Rn(t))},t.setKey=function(t,n,r){return n&&k(t)||yn(n)&&g(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t},t.setValue=function(t,n,r){return yn(r)&&g(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t},t.shuffle=J,t.smallest=function(t){return Z(...t)},t.snakeCase=function(t){return t.replace(Cn," ").trim().toLowerCase().replace(On,"_$1")},t.sortCollectionAlphabetically=function(t,n="id",r){return t.sort(((t,e)=>st(t,e,n,r)))},t.sortCollectionAlphabeticallyReverse=function(t,n="id",r){return t.sort(((t,e)=>ht(t,e,n,r)))},t.sortCollectionAscending=ft,t.sortCollectionAscendingFilter=at,t.sortCollectionDescending=ut,t.sortCollectionDescendingFilter=ct,t.sortNumberAscending=function(t){return t.sort(q)},t.sortNumberDescening=function(t){return t.sort(V)},t.sortObjectsAlphabetically=st,t.sortObjectsAlphabeticallyReverse=ht,t.sortUnique=_,t.stringify=Mr,t.stubArray=()=>[],t.stubFalse=()=>Ut,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Nt,t.subtract=q,t.subtractAll=function(t){return t.reduce(((t,n)=>t-n),0)},t.subtractReverse=V,t.sumAll=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const r=t.length;return t.slice(r-n,r)},t.throttle=function(t,n){function r(...t){r.id?r.shouldThrottle=Nt:(r.callable(...t),r.id=Lt((()=>{r.shouldThrottle&&r.callable(...t),r.id=Ut}),n))}return r.id=Ut,r.callable=t.bind(r),r.clear=()=>{$t.remove(r.id),r.id=Ut},r},t.timer=Lt,t.timers=$t,t.times=Pt,t.timesAsync=async function(t,n){for(let r=0;r<t;r++)await n(t)},t.timesMap=function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r},t.timesMapAsync=async function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r},t.toArray=G,t.toPath=B,t.toggle=function(t,n=!0,r=!1){return P(n,t)?r:n},t.tokenize=function(t){return t.match(Bn)||[]},t.truey=Rr,t.truncate=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=r-n;for(;c<o&&c>=0&&(i=e[c]," "!==i);c--);return t.slice(0,c).trim()})(t,n,r):t},t.truncateRight=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=n;for(;c<o&&c>0&&(i=e[c]," "!==i);c++);return t.substr(c,r).trim()})(t,n,r):t},t.truth=Nt,t.unZip=function(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.unZipObject=t=>{const n=[],r=[];return vt(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},t.union=function(...t){return Q(d(t))},t.uniqID=Hr,t.unique=Q,t.untilFalseArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0},t.untilTrueArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0},t.upperCase=function(t){return t.replace(Cn," ").trim().toUpperCase()},t.upperFirst=function(t){return Un(t)+In(t)},t.upperFirstAll=function(t){return t.replace(Nn,(t=>t.toUpperCase()))},t.upperFirstLetter=Un,t.upperFirstOnly=kn,t.upperFirstOnlyAll=function(t){return kn(t.toLowerCase()).replace(Nn,(t=>t.toUpperCase()))},t.virtualStorage=function(t){return new _r(t)},t.whileCompactMap=function(t,n,r=[],e){let o=0;for(;o<t.length;){const c=r.push(n(t[o],o,t,t.length,e));o++,i(c)&&r.push(c)}return t},t.whileEachArray=function(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t},t.whileMapArray=function(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t},t.without=function(t,n){if(!n)return t;const r=b(Set,n);return t.filter((t=>!r.has(t)))},t.words=function(t){return t.match(Tn)||[]},t.wrap=function(t,n){return(...r)=>n(t,...r)},t.xor=function(...t){const n=b(Map),r=[];return 2===t.length?A(t[0],t[1]):(u(t,((t,r)=>{u(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),p(n,(t=>{1===t.count&&r.push(t.child)})),r)},t.zip=function(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.zipObject=(t,n)=>{const r={};return u(t,((t,e)=>{r[t]=n[e]})),r}}));
//# sourceMappingURL=basic.js.map

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function r(t){return void 0===t}function e(t){return Boolean(t.length)}function o(t){return null===t}function i(t){return!r(t)&&!o(t)}function c(t){return t}function u(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)n(t[o],o,t,e,r);return t}function s(t,n=c,r=[],e){return u(t,((t,o,c,u)=>{const s=n(t,o,r,c,u,e);i(s)&&r.push(s)})),r}async function a(t,n){if(!t)return;const r=t.length;for(let e=0;e<r;e++)await n(t[e],e,t,r);return t}async function f(t,n=c){const r=[];return await a(t,(async(t,e,o)=>{const c=await n(t,e,r,o);i(c)&&r.push(c)})),r}const{sign:l}=Math;function h(t){return-1===l(t)}function p(t,n,r,e){let o=t;for(;o<n;)e.push(o),o+=r;return e}function g(t,n,r,e){let o=t;for(;o>n;)e.push(o),o-=r;return e}function y(t,n){return t.forEach(n),t}const d=Array.isArray;function m(t){return d(t)&&t||i(t)&&[t]||[]}function A(t){return t.flat(1/0)}const b=Reflect.construct;function w(t,n=[],r){const e=d(n)?n:[n];return r?b(t,e,r):b(t,e)}function C(...t){const n=w(Map),r=[];return u(t,((t,r)=>{u(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),y(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function v(t,n=1,r=t.length){return t.splice(n,r)}function O(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function I(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function F(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function j(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function M(t,n,r=[],e){return u(t,((t,o,i,c)=>{!0===n(t,o,r,i,c,e)&&r.push(t)})),r}async function E(t,n,r=[],e){return await a(t,(async(t,o,i,c)=>{!0===await n(t,o,r,i,c,e)&&r.push(t)})),r}const S=Object.keys;function R(t){if(t)return S(t)}const x=/\.|\[/,B=/]/g,T="";function N(t){return t.replace(B,T).split(x)}function U(t,n){if(!n)return!1;let r=n;return F(d(t)?t:N(t),(t=>(r=r[t],i(r)))),r}const k=Object.hasOwn;function P(t,...n){if(t)return F(n,(n=>{const r=N(n);if(1===r.length)return k(t,n);{const n=r.pop(),e=U(r,t);return!!e&&k(e,n)}}))}const $=t=>!!i(t)&&"Object("===t.constructor.toString().trim().slice(9,16),D=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if($(t)){const r=R(t);if(P(n,r))return F(r,(r=>D(t[r],n[r])))}else if(d(t)&&t.length===n.length)return F(t,((t,r)=>D(t,n[r])));return!1};const L=Math.max;function q(t,n,r=[],e){return u(t,((t,o,i,c)=>{r[o]=n(t,o,r,i,c,e)})),r}async function V(t,n){const r=[];return await a(t,(async(t,e,o)=>{r[e]=await n(t,e,o)})),r}function K(t,n){return t-n}function Z(t,n){return n-t}const{floor:_,random:z}=Math;function W(t,n=0){return _(z()*(t-n))+n}const G=Array.from;function J(t,n=t.length){if(t.length<=1)return G(t);const r=G(t);let e,o,i=0;for(;i<n;)e=W(r.length-1,0),o=r[i],r[i]=r[e],r[e]=o,i++;return r}const H=Math.min;function Q(t,n,r){return r.indexOf(t)===n}function X(t,n,r){return t!==r[n-1]}function Y(t,n){return n?t.filter(X):t.filter(Q)}function tt(t,n){return t?.constructor===n||!1}function nt(t){return n=>tt(n,t)}function rt(t){return t?.constructor?.name}function et(t){return n=>rt(n)===t||!1}function ot(t){return function(n,...r){return r?t(n)&&F(r,t):t(n)}}const it=et("Buffer"),ct=ot(it);function ut(t,n,r,e,o){if(t[o]===e)return!0}function st(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i?o?o<i?1:o>i?-1:0:1:-1}function at(t,n="id",r){return t.sort(((t,e)=>st(t,e,n,r)))}function ft(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):o.localeCompare(i)}function lt(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i?o?o<i?-1:o>i?1:0:-1:1}function ht(t,n="id",r){return t.sort(((t,e)=>lt(t,e,n,r)))}const pt=nt(String);function gt(t,n){if(t)return pt(n)?t[n]:q(n,(n=>t[n]))}function yt(t,n,r,e){const o=t[r],i=n[r];return o===i&&e?e(t,n,r):i.localeCompare(o)}function dt(t){return n=>!!i(n)&&t.test(n)}const mt=dt(/\.css$/),At=dt(/\.html$/),bt=dt(/\.js$/),wt=dt(/\.json$/);const Ct=Object.assign;function vt(t,...n){if(t)return Ct(t,...n)}const Ot=async(t,n)=>{if(!t)return;const r=R(t);return await a(r,((e,o,i,c)=>n(t[e],e,t,c,r))),t};function It(t,n){if(!t)return;return u(R(t),((r,e,o,i)=>{n(t[r],r,t,i,o)}))}const Ft=et("Set"),jt=ot(Ft);function Mt(t,n){if(jt(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const Et=et("GeneratorFunction"),St=ot(Et);async function Rt(t,n,r){if(jt(t)){for(const r of t)await n(r,t);return t}if(St(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const xt=t=>!!i(t)&&t instanceof Function,Bt=et("AsyncFunction"),Tt=ot(Bt);function Nt(t,n,r,e,o,c){return(u,s,a)=>{let f;const l=Tt(s);if(i(u)&&s)return f=d(u)?l?n:t:$(u)||xt(u)?l?e:r:o?l?c:o:St(u)?c:l?e:r,f(u,s,a)}}const Ut=Nt(u,a,It,Ot,Mt,Rt);class kt{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;Ut(t,((t,r)=>{n[r]=function(...r){return this.value=t.call(n,n.value,...r),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}const Pt=!0,$t=!1,Dt=()=>{};function Lt(t,n){for(let r=0;r<t;r++)n(r)}class qt{list=w(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,Pt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Vt=w(qt);function Kt(t,n){return Vt.set(t,n)}const Zt=Reflect.apply;async function _t(t,n,r={}){if(t)return await Ot(t,(async(t,e,o,i,c)=>{r[e]=await n(t,e,r,o,i,c)})),r}function zt(t,n,r={}){if(t)return It(t,((t,e,o,i,c)=>{r[e]=n(t,e,r,o,i,c)})),r}function Wt(t){return t?.constructor}function Gt(t,n=[]){const r=Wt(t);return r===Function&&"function"===r.name?function(){}:w(r,n)}function Jt(t,n=c,r){const e=r||Gt(t);if(d(t)||jt(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=xt(e.set);for(const[r,i]of t){const c=n(i,r,e,t);o?e.set(r,c):e[r]=c}return e}async function Ht(t,n=c,r,e){if(St(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||Gt(t);if(d(t)||jt(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const i=xt(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);i?o.set(r,c):o[r]=c}return o}const Qt=Nt(q,V,zt,_t,Jt,Ht);async function Xt(t,n){if(!t)return;return j(R(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function Yt(t,n){if(!t)return;return F(R(t),((r,e,o,i)=>n(t[r],r,t,i,o)))}function tn(t,n=c){if(d(t)||jt(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function nn(t,n=c,r){if(St(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(d(t)||jt(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const rn=Nt(F,j,Yt,Xt,tn,nn);const en=Object.is,on=Function.prototype;function cn(t){return on.call.bind(t)}const un=Object.getOwnPropertyNames,sn=Object.getOwnPropertyDescriptor,an=Object.defineProperty,fn=cn(Object.hasOwnProperty);const{random:ln}=Math;const{sign:hn}=Math;async function pn(t,n=c,r={}){return await Ot(t,(async(t,e,o,c,u)=>{const s=await n(t,e,r,o,c,u);i(s)&&(r[e]=s)})),r}function gn(t,n=c,r={}){return It(t,((t,e,o,c,u)=>{const s=n(t,e,r,o,c,u);i(s)&&(r[e]=s)})),r}function yn(t,n,r={}){return It(t,((t,e,o,i,c)=>{!0===n(t,e,r,o,i,c)&&(r[e]=t)})),r}async function dn(t,n,r={}){return await Ot(t,(async(t,e,o,i,c)=>{!0===await n(t,e,r,o,i,c)&&(r[e]=t)})),r}const mn=et("Number"),An=ot(mn),bn=et("RegExp"),wn=ot(bn),Cn=/[()[\]{}*+?^$|#.,/\\\s-]/g;function vn(t){return t.replace(Cn,"\\$&")}function On(t,n){return n?On(q(t,vn)):RegExp(t.join("|"))}function In(t){if(t)return R(t).length}const Fn=/[ _-]+/g;const jn=/[ _-]+/g,Mn=/[ ]+/g;const En=/[ _-]+/g,Sn=/[ ]+/g;const Rn=/[ _-]+/g;const xn=/[ _-]+/g;function Bn(t,n=1){return t.substr(n)}const Tn=/%(?![\da-f]{2})/gi,Nn=/&/g,Un=/</g,kn=/>/g,Pn=/"/g;function $n(t){return decodeURIComponent(t.replace(Tn,(()=>"%25")))}function Dn(t){return t.replace(Nn,"&amp;").replace(Un,"&lt;").replace(kn,"&gt;").replace(Pn,"&quot;")}const Ln=/\S+/g,qn=/\w+/g;const Vn=/ (.)/g;function Kn(t){return t[0].toUpperCase()}function Zn(t){return Kn(t)+Bn(t).toLowerCase()}function _n(t){return Wt(t)?.name}function zn(t){return!i(t)}const Wn=et("Map"),Gn=ot(Wn),Jn=/Array/,Hn="Array";function Qn(t){if(t){const n=_n(t);if(Jn.test(n)&&n!==Hn)return!0}return!1}const Xn=et("BigInt"),Yn=ot(Xn),tr=et("Boolean"),nr=ot(tr),rr=et("ArrayBuffer"),er=ot(rr);const or=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");const ir=et("Date"),cr=ot(ir);const ur=et("Float32Array"),sr=ot(ur),ar=et("Float64Array"),fr=ot(ar),{isInteger:lr}=Number,hr=lr,pr=et("Int16Array"),gr=ot(pr),yr=et("Int32Array"),dr=ot(yr),mr=et("Int8Array"),Ar=ot(mr);function br(t){return!!t&&t instanceof Promise}const{isSafeInteger:wr}=Number,Cr=wr;const vr=et("Uint16Array"),Or=ot(vr),Ir=et("Uint32Array"),Fr=ot(Ir),jr=et("Uint8Array"),Mr=ot(jr),Er=et("Uint8ClampedArray"),Sr=ot(Er),Rr=et("WeakMap"),xr=ot(Rr),Br=void 0!==globalThis.Deno,Tr=void 0!==globalThis.process&&process.versions&&process.versions.node;function Nr(t,n){return!1===D(t,n)}const Ur=JSON;const kr=Ur.stringify;const Pr=globalThis.structuredClone;function $r(t,n=!0){return Boolean(t)&&n}async function Dr(t,n=c,r,e){if(St(t)){const r=[];for await(const o of t(...e)){const e=await n(o,r,t);i(e)&&r.push(e)}return r}const o=r||Gt(t);if(d(t)||jt(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){const c=await n(r,o,t);i(c)&&e(c)}return o}const u=xt(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);i(c)&&(u?o.set(r,c):o[r]=c)}return o}function Lr(t,n=c,r){const e=r||Gt(t);if(d(t)||jt(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){const c=n(r,e,t);i(c)&&o(c)}return e}const o=xt(e.set);for(const[r,c]of t){const u=n(c,r,e,t);i(u)&&(o?e.set(r,u):e[r]=u)}return e}const qr=Nt(s,f,gn,pn,Lr,Dr);function Vr(t,n=c,r){const e=r||Gt(t);if(d(t)||jt(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=xt(e.set);for(const[o,i]of t){!0===n(i,o,e,t)&&(r?e.set(o,i):e[o]=i)}}return e}async function Kr(t,n=c,r,e){if(St(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||Gt(t);if(d(t)||jt(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=xt(o.set);for await(const[e,i]of t){!0===await n(i,e,o,t)&&(r?o.set(e,i):o[e]=i)}}return o}const Zr=Nt(M,E,yn,dn,Vr,Kr);function _r(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const zr=_r(u),Wr=_r(O);function Gr(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const Jr=Gr(a),Hr=Gr(I);const Qr=dt(/\./);class Xr{list=w(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,Pt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Yr=w(Xr);class te{static models={};constructor(t,n){i(n)?(vt(this,n),this.modelName=t,te.models.set(t,n)):vt(this,t)}}class ne{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;It(t,(n=>{t[n]=new ne(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new ne(r),!0)})}}class re{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return i(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const ee=w(re);class oe{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}t.Chain=kt,t.Intervals=Xr,t.Model=te,t.Store=ne,t.Timers=qt,t.UniqID=re,t.VirtualStorage=oe,t.add=function(t,n){return t+n},t.after=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)},t.apply=Zt,t.arrayToObject=function(t,n){const r={};return u(t,((t,e)=>{r[n[e]]=t})),r},t.arrayToRegex=On,t.ary=function(t,n){return(...r)=>t(...r.splice(0,n))},t.assert=function(t,n,r){return!(xt(n)&&!1===n(t,r))&&!Nr(t,n)||function(t,n,r){const e=globalThis.options||r;let o;return xt(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${kr(t)}\n\t\tExpected: ${kr(n)}`,e)}(t,n,r)},t.assign=vt,t.before=function(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)},t.bindAll=function(t,n,r){const e=Qt(t,(t=>xt(t)?t.bind(n):t));return r?vt(r,e):e},t.cacheNativeMethod=cn,t.camelCase=function(t){let n="";return t.replace(Fn," ").trim().split(" ").forEach(((t,r)=>{n+=0===r?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n},t.chain=function(t){return w(kt,[t])},t.chunk=function(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=n,t.clearIntervals=function(){Lt(setTimeout(Dt,0),(t=>{Yr.remove(t)}))},t.clearTimers=function(){Lt(setTimeout(Dt,0),(t=>{Vt.remove(t)}))},t.clone=function(t){return Pr(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=Gt,t.compact=function(t){if($(t)){const n=R(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],i=t[r];$r(i)&&(e[r]=i)}return e}return t.filter((t=>$r(t)))},t.compactKeys=function(t){const n=[];return It(t,((t,r)=>{i(t)&&n.push(r)})),n},t.compactMap=qr,t.compactMapArray=s,t.compactMapAsyncArray=f,t.compactMapAsyncObject=pn,t.compactMapObject=gn,t.concurrent=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.all(o)},t.concurrentStatus=function(t,n,r){const e=t.length,o=[];for(let i=0;i<e;i++)o[i]=n(t[i],i,t,e,r);return Promise.allSettled(o)},t.construct=w,t.constructorName=rt,t.countBy=function(t,n){const r={};let e;return u(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r},t.countKey=function(t,n){let r=0;return u(t,(t=>{t[n]&&r++})),r},t.countWithoutKey=function(t,n){let r=0;return u(t,(t=>{t[n]||r++})),r},t.curry=function(t,r=t.length){const e=[],o=(...i)=>{if(e.push(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.curryRight=function(t,r=t.length){const e=[],o=(...i)=>{if(e.unshift(...i),e.length===r){const r=t(...e);return n(e),r}return o};return o},t.debounce=function(t,n){function r(...t){r.id!==$t&&Vt.remove(r.id),r.id=Kt((()=>{r.callable(...t),r.id=$t}),n)}return r.id=$t,r.callable=t.bind(r),r.clear=()=>{r.id!==$t&&(Vt.remove(r.id),r.id=$t)},r},t.deduct=function(t){return t-1},t.defProp=an,t.difference=C,t.divide=function(t,n){return t/n},t.drop=v,t.dropRight=(t,n=1,r=t.length)=>v(t,0,r-n),t.each=Ut,t.eachArray=u,t.eachAsyncArray=a,t.eachAsyncObject=Ot,t.eachObject=It,t.eachRight=O,t.eachRightAsync=I,t.ensureArray=m,t.ensureBuffer=function(t){return ct(t)&&t||i(t)&&Buffer.from(t)||Buffer.alloc(0)},t.escapeRegex=vn,t.escapeRegexRegex=Cn,t.every=rn,t.everyArg=function(...t){return Tt(t[0])?async function(...n){return rn(t,(async t=>rn(n,(async n=>t(n)))))}:function(...n){return rn(t,(t=>rn(n,(n=>t(n)))))}},t.everyArray=F,t.everyAsyncArray=j,t.everyAsyncObject=Xt,t.everyObject=Yt,t.falsy=$t,t.filter=Zr,t.filterArray=M,t.filterAsyncArray=E,t.filterAsyncObject=dn,t.filterObject=yn,t.findIndex=function(t,n,r="id"){const e=t.findIndex(((t,e)=>ut(t,0,0,n,r)));return-1!==e&&e},t.findIndexCache=ut,t.findItem=function(t,n,r="id"){const e=t.find(((t,e)=>ut(t,0,0,n,r)));return-1!==e&&e},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(m(n))),[]);return r},t.flattenDeep=A,t.flow=zr,t.flowAsync=Jr,t.flowAsyncRight=Hr,t.flowRight=Wr,t.forEach=y,t.forEachAsync=async function(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t},t.forMap=function(t,n){const r=Gt(t),e=r.push||r.add;if(e&&xt(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else xt(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r},t.forOf=Mt,t.forOfAsync=Rt,t.forOfCompactMap=Lr,t.forOfCompactMapAsync=Dr,t.forOfEvery=tn,t.forOfEveryAsync=nn,t.forOfFilter=Vr,t.forOfFilterAsync=Kr,t.forOfMap=Jt,t.forOfMapAsync=Ht,t.generateLoop=Nt,t.get=U,t.getFileExtension=function(t){if(t)return t.substring(t.lastIndexOf(".")+1)},t.getFilename=function(t){if(t)return t.substring(t.lastIndexOf("/")+1)},t.getHighest=function(t,n="id"){return ht(t,n)[0]},t.getLowest=function(t,n){return at(t,n,!1)[0]},t.getNumberInsertIndex=function(t,n){let r=0;return F(t,((t,e)=>(r=e,n>=t&&(r=e+1,!0)))),r},t.getPropDesc=sn,t.getPropNames=un,t.getType=Wt,t.getTypeName=_n,t.groupBy=function(t,n){const r={};return u(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r},t.has=function t(n,r,e){if(zn(n)||zn(r))return!1;if(pt(n))return pt(r)?n.includes(r,e):wn(r)?r.test(n):xt(r)?Boolean(r(n)):rn(r,(r=>Boolean(t(n,r))));if(d(n)){if(pt(r))return n.includes(r,e);if(wn(r))return rn(n,(t=>t.test(r)));if(d(r))return rn(r,(r=>Boolean(t(n,r))))}return!1},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const r=N(n);if(1===r.length)return k(t,n);{const n=r.pop(),e=U(r,t);return!!e&&k(e,n)}})))},t.hasDot=Qr,t.hasKeys=P,t.hasLength=e,t.hasProp=fn,t.hasValue=i,t.htmlEntities=Dn,t.ifInvoke=function(t,...n){if(xt(t))return t(...n)},t.ifNotAssign=(t,n,r)=>(n&&!i(t[n])&&(t[n]=r),t),t.ifValue=function(t,n){if(i(t))return n?n(t):t},t.inAsync=async function(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t},t.inSync=(t,n)=>Ut(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const r={};return u(t,(t=>{r[t[n]]=t})),r},t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)},t.intersection=function(t,...n){return s(t,(t=>{if(F(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return Yr.set(t,n)},t.intervals=Yr,t.invert=function(t,n={}){if(t)return It(t,((t,r)=>{n[t]=r})),n},t.invoke=function(t,n,r){return q(t,((t,e)=>t[n](r,e)))},t.invokeAsync=function(t,n,r){return V(t,(async(t,e)=>t[n](r,e)))},t.isArguments=function(t){return!!i(t)&&"[object Arguments]"===t.toString()},t.isArray=d,t.isArrayBuffer=er,t.isArrayBufferCall=rr,t.isArrayLike=function(t,n){if(zn(t)||xt(t))return!1;if(d(t)||Qn(t))return!0;const r=t.length;if(!zn(r)||!An(r)||r<0)return!1;if(n){const n=R(t);return!!n&&rn(n,((t,n)=>n>=0&&An(n)))}return!0},t.isAsync=Tt,t.isAsyncCall=Bt,t.isBigInt=Yn,t.isBigIntCall=Xn,t.isBoolean=nr,t.isBooleanCall=tr,t.isBuffer=ct,t.isBufferCall=it,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isCloneable=function(t){if(i(t)){const n=t?.constructor?.name;return or.test(n)}return!1},t.isConstructor=tt,t.isConstructorFactory=nt,t.isConstructorNameFactory=et,t.isDate=cr,t.isDateCall=ir,t.isDeno=Br,t.isEmpty=function(t){return pt(t)||d(t)?!e(t):$(t)?!In(t):!i(t)},t.isEqual=D,t.isF32=sr,t.isF32Call=ur,t.isF64=fr,t.isF64Call=ar,t.isFalse=function(t){return!1===t},t.isFalsy=function(t,n=!0){return!1===Boolean(t)&&n},t.isFileCSS=mt,t.isFileHTML=At,t.isFileJS=bt,t.isFileJSON=wt,t.isFloat=hr,t.isFunction=xt,t.isGenerator=St,t.isGeneratorCall=Et,t.isI16=gr,t.isI16Call=pr,t.isI32=dr,t.isI32Call=yr,t.isI8=Ar,t.isI8Call=mr,t.isIterable=function(t){return i(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=function(t){return!!t&&(br(t)||Tt(t)||St(t))},t.isMap=Gn,t.isMapCall=Wn,t.isMatchArray=function(t,n){return t.length===n.length&&F(t,((t,r)=>D(n[r],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const r=R(t),e=R(n);return r.length===e.length&&F(r,(r=>t[r]===n[r]))},t.isNegative=h,t.isNodejs=Tr,t.isNull=o,t.isNumber=An,t.isNumberCall=mn,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,r){return t>n&&t<r},t.isNumberNotInRange=function(t,n,r){return t<n||t>r},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=$,t.isPositive=function(t){return 1===hn(t)},t.isPrimitive=function(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n},t.isPromise=br,t.isRegex=wn,t.isRegexCall=bn,t.isRelated=function(t,n){return!zn(t)&&!zn(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=Cr,t.isSame=en,t.isSameType=function(t,n){const r=Wt(t),e=Wt(n);return r===e&&r.name===e.name},t.isSet=jt,t.isSetCall=Ft,t.isString=pt,t.isTrue=function(t){return!0===t},t.isTruthy=$r,t.isTypeFactory=ot,t.isTypedArray=Qn,t.isU16=Or,t.isU16Call=vr,t.isU32=Fr,t.isU32Call=Ir,t.isU8=Mr,t.isU8C=Sr,t.isU8CCall=Er,t.isU8Call=jr,t.isUndefined=r,t.isWeakMap=xr,t.isWeakMapCall=Rr,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return Ur.parse(t,n)},t.kebabCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(jn," ").trim().toLowerCase().replace(Mn,"-")},t.keys=R,t.largest=function(t){return L(...t)},t.last=function(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]},t.lowerCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(xn," ").trim().toLowerCase()},t.map=Qt,t.mapArray=q,t.mapAsyncArray=V,t.mapAsyncObject=_t,t.mapObject=zt,t.mapRightArray=function(t,n,r=[],e){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)r[o]=n(t[c],c,t,i,e),o++;return r},t.mapWhile=function(t,n,r=[],e){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,r,t,o,e))break;r[i]=c}return r},t.merge=function t(n,...r){return Ut(r,(r=>{Ut(r,((r,e)=>{if(n[e]&&($(r)||d(r)||r.forEach))return t(n[e],r);n[e]=r}))})),n},t.model=function(t,n){return i(n)?w(te,[t,n]):U(t,te.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=zn,t.noop=Dt,t.notEqual=Nr,t.nthArg=function(t=0){return(...n)=>n[t]},t.objectSize=In,t.omit=function(t,n){if(t){if(d(n)){const r=On(n);return yn(t,((t,n)=>!r.test(n)))}if(wn(n))return yn(t,((t,r)=>!n.test(r)));if(pt(n))return yn(t,((t,r)=>r!==n));if(An(n)){const r=n.toString();return yn(t,((t,n)=>n!==r))}return xt(n)?yn(t,((t,r)=>!n(t,r))):void 0}},t.once=t=>{let n;return(...r)=>(i(n)||(n=t(...r)),n)},t.onlyUnique=Q,t.over=function(t){return(...n)=>Qt(t,(t=>t(...n)))},t.overEvery=function(t){return n=>rn(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const r=[];return[s(t,((t,e)=>{if(n(t,e))return t;r.push(t)})),r]},t.pick=(t,n,r={})=>{if(t)return u(n,(n=>{r[n]=t[n]})),r},t.pluck=function(t,n){return q(t,(t=>gt(t,n)))},t.pluckObject=gt,t.promise=function(t){return new Promise(t)},t.propertyMatch=(t,n,r=R(t))=>F(r,(r=>D(t[r],n[r]))),t.randomFloat=function(t,n=0){return ln()*(t-n)+n},t.randomInt=W,t.range=function(t,n,r=1,e=[]){return h(r)?e:t<n?p(t,n,r,e):g(t,n,r,e)},t.rangeDown=g,t.rangeUp=p,t.rawURLDecode=$n,t.reArg=function(t,n){return(...r)=>t(...n.map((t=>r[t])))},t.regexTestFactory=dt,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t},t.removeBy=function(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t},t.replaceList=function(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Bn,t.returnValue=c,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return J(t);if(1===n)return[t[W(r-1,0)]];const e=[],o={};let i,c=0;for(;c<n;)i=W(t.length-1,0),o[i]||(e.push(t[i]),o[i]=!0,c++);return e},t.sanitize=function(t){return Dn($n(t))},t.setKey=function(t,n,r){return n&&$(t)||An(n)&&d(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t},t.setValue=function(t,n,r){return An(r)&&d(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t},t.shuffle=J,t.smallest=function(t){return H(...t)},t.snakeCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(En," ").trim().toLowerCase().replace(Sn,"_")},t.sortCollectionAlphabetically=function(t,n="id",r){return t.sort(((t,e)=>ft(t,e,n,r)))},t.sortCollectionAlphabeticallyReverse=function(t,n="id",r){return t.sort(((t,e)=>yt(t,e,n,r)))},t.sortCollectionAscending=ht,t.sortCollectionAscendingFilter=lt,t.sortCollectionDescending=at,t.sortCollectionDescendingFilter=st,t.sortNumberAscending=function(t){return t.sort(K)},t.sortNumberDescening=function(t){return t.sort(Z)},t.sortObjectsAlphabetically=ft,t.sortObjectsAlphabeticallyReverse=yt,t.sortUnique=X,t.stringify=kr,t.stubArray=()=>[],t.stubFalse=()=>$t,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Pt,t.subtract=K,t.subtractAll=function(t){return t.reduce(((t,n)=>t-n),0)},t.subtractReverse=Z,t.sumAll=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const r=t.length;return t.slice(r-n,r)},t.throttle=function(t,n){function r(...t){r.id?r.shouldThrottle=Pt:(r.callable(...t),r.id=Kt((()=>{r.shouldThrottle&&r.callable(...t),r.id=$t}),n))}return r.id=$t,r.callable=t.bind(r),r.clear=()=>{Vt.remove(r.id),r.id=$t},r},t.timer=Kt,t.timers=Vt,t.times=Lt,t.timesAsync=async function(t,n){for(let r=0;r<t;r++)await n(t)},t.timesMap=function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r},t.timesMapAsync=async function(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r},t.toArray=G,t.toPath=N,t.toggle=function(t,n=!0,r=!1){return D(n,t)?r:n},t.tokenize=function(t){return t.match(Ln)||[]},t.truncate=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=r-n;for(;c<o&&c>=0&&(i=e[c]," "!==i);c--);return t.slice(0,c).trim()})(t,n,r):t},t.truncateRight=function(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let i,c=n;for(;c<o&&c>0&&(i=e[c]," "!==i);c++);return t.substr(c,r).trim()})(t,n,r):t},t.truth=Pt,t.unZip=function(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.unZipObject=t=>{const n=[],r=[];return It(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},t.union=function(...t){return Y(A(t))},t.uniqID=ee,t.unique=Y,t.untilFalseArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0},t.untilTrueArray=function(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0},t.upperCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Rn," ").trim().toUpperCase()},t.upperFirst=function(t){return Kn(t)+Bn(t)},t.upperFirstAll=function(t){return t.replace(Vn,(t=>t.toUpperCase()))},t.upperFirstLetter=Kn,t.upperFirstOnly=Zn,t.upperFirstOnlyAll=function(t){return Zn(t.toLowerCase()).replace(Vn,(t=>t.toUpperCase()))},t.virtualStorage=function(t){return new oe(t)},t.whileCompactMap=function(t,n,r=[],e){let o=0;for(;o<t.length;){const c=r.push(n(t[o],o,t,t.length,e));o++,i(c)&&r.push(c)}return t},t.whileEachArray=function(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t},t.whileMapArray=function(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t},t.without=function(t,n){if(!n)return t;const r=w(Set,n);return t.filter((t=>!r.has(t)))},t.words=function(t){return t.match(qn)||[]},t.wrap=function(t,n){return(...r)=>n(t,...r)},t.xor=function(...t){const n=w(Map),r=[];return 2===t.length?C(t[0],t[1]):(u(t,((t,r)=>{u(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),y(n,(t=>{1===t.count&&r.push(t.child)})),r)},t.zip=function(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))},t.zipObject=(t,n)=>{const r={};return u(t,((t,e)=>{r[t]=n[e]})),r}}));
//# sourceMappingURL=basic.js.map

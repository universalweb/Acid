!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function e(t){return void 0===t}function r(t){return Boolean(t.length)}function o(t){return null===t}function i(t){return!e(t)&&!o(t)}function s(t){return t}function c(t,n,e,r){if(!t)return;const o=t.length;if(i(e))for(let i=0;i<o;i++)n.call(e,t[i],i,t,o,r);else for(let e=0;e<o;e++)n(t[e],e,t,o,r);return t}function u(t,n=s,e=[],r,o){return i(r)?c(t,((t,s,c,u)=>{const a=n.call(r,t,s,e,c,u,o);i(a)&&e.push(a)})):c(t,((t,s,c,u)=>{const a=n(t,s,e,c,u,r,o);i(a)&&e.push(a)})),e}async function a(t,n,e,r){if(!t)return;const o=t.length;if(i(e))for(let i=0;i<o;i++)await n.call(e,t[i],i,t,o,r);else for(let e=0;e<o;e++)await n(t[e],e,t,o,r);return t}async function f(t,n=s){const e=[];return await a(t,(async(t,r,o)=>{const s=await n(t,r,e,o);i(s)&&e.push(s)})),e}const{sign:l}=Math;function h(t){return-1===l(t)}function p(t,n,e,r){let o=t;for(;o<n;)r.push(o),o+=e;return r}function g(t,n,e,r){let o=t;for(;o>n;)r.push(o),o-=e;return r}const y=Array.isArray;const d=Reflect.construct;function m(t,n=[],e){const r=y(n)?n:[n];return e?d(t,r,e):d(t,r)}function A(t){return y(t)&&t||i(t)&&[t]||[]}function b(t){return t.flat(1/0)}function w(t,n){return t.forEach(n),t}function v(...t){const n=m(Map),e=[];return c(t,((t,e)=>{c(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),w(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function C(t,n=1,e=t.length){return t.splice(n,e)}function O(t,n,e){if(!t)return;const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function I(t,n){if(!t)return;const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function M(t,n,e){if(!t)return;const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}async function j(t,n,e){if(!t)return;const r=t.length;for(let o=0;o<r;o++)if(!1===await n(t[o],o,t,r,e))return!1;return!0}function F(t,n,e=[],r){return c(t,((t,o,i,s)=>{!0===n(t,o,e,i,s,r)&&e.push(t)})),e}async function E(t,n,e=[],r){return await a(t,(async(t,o,i,s)=>{!0===await n(t,o,e,i,s,r)&&e.push(t)})),e}const S=/\.|\[/,x=/]/g,R="";function N(t){return t.replace(x,R).split(S)}function T(t,n){if(!n)return!1;let e=n;return M(y(t)?t:N(t),(t=>(e=e[t],i(e)))),e}const B=Object.keys;function U(t){if(t)return B(t)}const k=Object.hasOwn;function P(t,...n){if(t)return M(n,(n=>{const e=N(n);if(1===e.length)return k(t,n);{const n=e.pop(),r=T(e,t);return!!r&&k(r,n)}}))}function $(t,n){return t?.constructor===n||!1}function D(t){return n=>$(n,t)}function L(t){return t?.constructor?.name}function q(t){return n=>L(n)===t||!1}function V(t){return function(n,...e){return e?t(n)&&M(e,t):t(n)}}const _=q("Buffer"),K=V(_),Z=t=>!!i(t)&&"Object("===t.constructor.toString().trim().slice(9,16),z=(t,n)=>{if(t===n)return!0;if(K(t))return t.equals(n);if(t.toString()===n.toString())if(Z(t)){const e=U(t);if(P(n,e))return M(e,(e=>z(t[e],n[e])))}else if(y(t)&&t.length===n.length)return M(t,((t,e)=>z(t,n[e])));return!1};const W=Math.max;function G(t,n,e=[],r,o){return i(r)?c(t,((t,i,s,c)=>{e[i]=n.call(r,t,i,e,s,c,o)})):c(t,((t,r,i,s)=>{e[r]=n(t,r,e,i,s,o)})),e}async function J(t,n){if(!t)return;const e=[],r=t.length;for(let o=0;o<r;o++)e[o]=n(t[o],o,e,r);return Promise.all(e)}async function H(t,n){const e=[];return await a(t,(async(t,r,o)=>{e[r]=await n(t,r,e,o)})),e}function Q(t,n){return t-n}function X(t,n){return n-t}const{floor:Y,random:tt}=Math;function nt(t,n=0){return Y(tt()*(t-n))+n}const et=Array.from;function rt(t,n,e){if(i(t))return et(t,n,e)}function ot(t,n=t.length){if(t.length<=1)return rt(t);const e=rt(t);let r,o,i=0;for(;i<n;)r=nt(e.length-1,0),o=e[i],e[i]=e[r],e[r]=o,i++;return e}const it=Math.min;function st(t,n,e){return e.indexOf(t)===n}function ct(t,n,e){return t!==e[n-1]}function ut(t,n){return n?t.filter(ct):t.filter(st)}function at(t){return t.fill(0),t}const ft=t=>!!i(t)&&t instanceof Function,lt=q("Number"),ht=V(lt);const pt=D(String);const gt=Object.assign;function yt(t,n){if(Z(n))gt(t,n);else if(ft(n)){const e=n.name;e?t[e]=n:gt(t,n)}else(pt(n)||ht(n))&&(t[n]=n);return t}function dt(t,...n){const e=n.length;for(let r=0;r<e;r++)yt(t,n[r]);return t}function mt(t,n){if(Z(n))gt(t.prototype,n);else if(ft(n)){const e=n.name;e&&(t.prototype[e]=n)}else if($(n)){const e=n.constructor?.name;e&&(t.prototype[e]=n)}else(pt(n)||ht(n))&&(t.prototype[n]=n);return t}function At(t,n,e,r,o){if(t[o]===r)return!0}function bt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):o.localeCompare(i)}function wt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i?o?o<i?-1:o>i?1:0:-1:1}function vt(t,n="id",e){return t.sort(((t,r)=>wt(t,r,n,e)))}function Ct(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i?o?o<i?1:o>i?-1:0:1:-1}function Ot(t,n="id",e){return t.sort(((t,r)=>Ct(t,r,n,e)))}function It(t,n){if(t)return pt(n)?t[n]:G(n,(n=>t[n]))}function Mt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i.localeCompare(o)}function jt(t){return n=>!!i(n)&&t.test(n)}const Ft=jt(/\.css$/),Et=jt(/\.html$/),St=jt(/\.js$/),xt=jt(/\.json$/);const Rt=async(t,n,e,r)=>{if(!t)return;const o=U(t);return i(e)?await a(o,((i,s,c,u)=>n.call(e,t[i],i,t,u,o,r))):await a(o,((e,i,s,c)=>n(t[e],e,t,c,o,r))),t};function Nt(t,n,e,r){if(!t)return;const o=U(t);return i(e)?c(o,((o,i,s,c)=>{n.call(e,t[o],o,t,c,s,r)})):c(o,((e,o,i,s)=>{n(t[e],e,t,s,i,r)})),t}const Tt=q("Set"),Bt=V(Tt);function Ut(t,n){if(Bt(t)){for(const e of t)n(e,t);return t}for(const[e,r]of t)n(r,e,t);return t}const kt=q("GeneratorFunction"),Pt=V(kt);async function $t(t,n,e){if(Bt(t)){for(const e of t)await n(e,t);return t}if(Pt(t))for await(const r of t(...e))await n(r,t);for(const[e,r]of t)await n(r,e,t);return t}const Dt=q("AsyncFunction"),Lt=V(Dt);function qt(t,n,e,r,o,s){return(c,u,a,f,l)=>{let h;const p=Lt(u);if(i(c)&&u)return h=y(c)?p?n:t:Z(c)||ft(c)?p?r:e:o?p?s:o:Pt(c)?s:p?r:e,h(c,u,a,f,l)}}const Vt=qt(c,a,Nt,Rt,Ut,$t);class _t{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;Vt(t,((t,e)=>{n[e]=function(...e){return this.value=t.call(n,n.value,...e),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}function Kt(t,n){if(!t)return;return M(U(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}function Zt(){}const zt=!1;function Wt(t,n){for(let e=0;e<t;e++)n(e)}const Gt=!0;class Jt{list=m(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,Gt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Ht=m(Jt);function Qt(t,n){return Ht.set(t,n)}const Xt=Reflect.apply;function Yt(t,n,e){if(ft(t))return Xt(t,n,e)}function tn(t){return t?.constructor}function nn(t,n=[]){const e=tn(t);return e===Function&&"function"===e.name?function(){}:m(e,n)}function en(t,n=s,e){const r=e||nn(t);if(y(t)||Bt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){o(n(e,r,t))}return r}const o=ft(r.set);for(const[e,i]of t){const s=n(i,e,r,t);o?r.set(e,s):r[e]=s}return r}async function rn(t,n=s,e,r){if(Pt(t)){const e=[];for await(const o of t(...r))e.push(await n(o,e,t));return e}const o=e||nn(t);if(y(t)||Bt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){r(await n(e,o,t))}return o}const i=ft(o.set);for await(const[e,r]of t){const s=await n(r,e,o,t);i?o.set(e,s):o[e]=s}return o}async function on(t,n,e={}){if(t)return await Rt(t,(async(t,r,o,i,s)=>{e[r]=await n(t,r,e,o,i,s)})),e}function sn(t,n,e={},r,o){if(t)return i(r)?Nt(t,((t,i,s,c,u)=>{e[i]=n.call(r,t,i,e,s,c,u,o)})):Nt(t,((t,r,i,s,c)=>{e[r]=n(t,r,e,i,s,c,o)})),e}const cn=qt(G,H,sn,on,en,rn);async function un(t,n){if(!t)return;return j(U(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}function an(t,n=s){if(y(t)||Bt(t))for(const e of t){if(!1===n(e,t))return!1}else for(const[e,r]of t){if(!1===n(r,e,t))return!1}return!0}async function fn(t,n=s,e){if(Pt(t))for await(const r of t(...e)){if(!1===await n(r,t))return!1}else if(y(t)||Bt(t))for(const e of t){if(!1===await n(e,t))return!1}else for(const[e,r]of t){if(!1===await n(r,e,t))return!1}return!0}const ln=qt(M,j,Kt,un,an,fn);const hn=Function.prototype;function pn(t){return hn.call.bind(t)}const gn=Object.getOwnPropertyNames,yn=Object.getOwnPropertyDescriptor,dn=Object.defineProperty,mn=pn(Object.hasOwnProperty),An=Object.is;const{random:bn}=Math;const{sign:wn}=Math;const vn=Object.entries;async function Cn(t,n=s,e={}){return await Rt(t,(async(t,r,o,s,c)=>{const u=await n(t,r,e,o,s,c);i(u)&&(e[r]=u)})),e}function On(t,n=s,e={}){return Nt(t,((t,r,o,s,c)=>{const u=n(t,r,e,o,s,c);i(u)&&(e[r]=u)})),e}function In(t,n,e={}){return Nt(t,((t,r,o,i,s)=>{!0===n(t,r,e,o,i,s)&&(e[r]=t)})),e}async function Mn(t,n,e={}){return await Rt(t,(async(t,r,o,i,s)=>{!0===await n(t,r,e,o,i,s)&&(e[r]=t)})),e}const jn=/[()[\]{}*+?^$|#.,/\\\s-]/g;function Fn(t){return t.replace(jn,"\\$&")}function En(t,n){return n?En(G(t,Fn)):RegExp(t.join("|"))}const Sn=q("RegExp"),xn=V(Sn);function Rn(t){if(!t)return;if(Z(t))return U(t).length;const n=t.length;if(i(n))return n;const e=t.size;return i(n)?e:U(t).length}const Nn=/[ _-]+/g;const Tn=/[ _-]+/g,Bn=/[ ]+/g;const Un=/[ _-]+/g,kn=/[ ]+/g;const Pn=/[ _-]+/g;const $n=/[ _-]+/g;function Dn(t,n=1){return t.substring(n)}const Ln=/%(?![\da-f]{2})/gi,qn=/&/g,Vn=/</g,_n=/>/g,Kn=/"/g;function Zn(t){return decodeURIComponent(t.replace(Ln,(()=>"%25")))}function zn(t){return t.replace(qn,"&amp;").replace(Vn,"&lt;").replace(_n,"&gt;").replace(Kn,"&quot;")}const Wn=/\S+/g,Gn=/\w+/g;const Jn=/\w+/g;function Hn(t){return t[0].toUpperCase()}function Qn(t){return Hn(t)+Dn(t)}function Xn(t){return Hn(t)+Dn(t).toLowerCase()}function Yn(t){return tn(t)?.name}const te=q("Map"),ne=V(te),ee=/Array/,re="Array";function oe(t){if(t){const n=Yn(t);if(ee.test(n)&&n!==re)return!0}return!1}function ie(t){return!i(t)}const se=q("BigInt"),ce=V(se),ue=q("Boolean"),ae=V(ue),fe=q("ArrayBuffer"),le=V(fe);const he=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");const pe=q("Date"),ge=V(pe);function ye(t){return!1===t}const de=q("Float32Array"),me=V(de),Ae=q("Float64Array"),be=V(Ae),{isInteger:we}=Number,ve=we,Ce=q("Int16Array"),Oe=V(Ce),Ie=q("Int32Array"),Me=V(Ie),je=q("Int8Array"),Fe=V(je);function Ee(t){return!!t&&t instanceof Promise}function Se(t){return!!t&&(Ee(t)||Lt(t)||Pt(t))}const{isSafeInteger:xe}=Number,Re=xe;const Ne=q("Uint16Array"),Te=V(Ne),Be=q("Uint32Array"),Ue=V(Be),ke=q("Uint8Array"),Pe=V(ke),$e=q("Uint8ClampedArray"),De=V($e),Le=q("WeakMap"),qe=V(Le),Ve=void 0!==globalThis.Deno,_e=void 0!==globalThis.process&&process.versions&&process.versions.node;function Ke(t,n=!0){return Boolean(t)&&n}function Ze(t,n){return ye(z(t,n))}const ze=JSON;const We=ze.stringify;function Ge(t,n,e){const r=globalThis.options||e;let o;return ft(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${We(t)}\n\t\tExpected: ${We(n)}`,r)}async function Je(t,n,e){const r=await t;return!(ft(n)&&!1===await n(r,e))&&!Ze(r,n)||Ge(r,n,e)}const He=globalThis.structuredClone;async function Qe(t,n=s,e,r){if(Pt(t)){const e=[];for await(const o of t(...r)){const r=await n(o,e,t);i(r)&&e.push(r)}return e}const o=e||nn(t);if(y(t)||Bt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){const s=await n(e,o,t);i(s)&&r(s)}return o}const c=ft(o.set);for await(const[e,r]of t){const s=await n(r,e,o,t);i(s)&&(c?o.set(e,s):o[e]=s)}return o}function Xe(t,n=s,e){const r=e||nn(t);if(y(t)||Bt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){const s=n(e,r,t);i(s)&&o(s)}return r}const o=ft(r.set);for(const[e,s]of t){const c=n(s,e,r,t);i(c)&&(o?r.set(e,c):r[e]=c)}return r}const Ye=qt(u,f,On,Cn,Xe,Qe);function tr(t,n=s,e){const r=e||nn(t);if(y(t)||Bt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){!0===n(e,r,t)&&o(e)}}else{const e=ft(r.set);for(const[o,i]of t){!0===n(i,o,r,t)&&(e?r.set(o,i):r[o]=i)}}return r}async function nr(t,n=s,e,r){if(Pt(t)){const e=[];for await(const o of t(...r))!0===await n(o,e,t)&&e.push(o);return e}const o=e||nn(t);if(y(t)||Bt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){!0===await n(e,o,t)&&r(e)}}else{const e=ft(o.set);for await(const[r,i]of t){!0===await n(i,r,o,t)&&(e?o.set(r,i):o[r]=i)}}return o}const er=qt(F,E,In,Mn,tr,nr);function rr(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const or=rr(c),ir=rr(O);function sr(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const cr=sr(a),ur=sr(I);const ar=jt(/\./);class fr{list=m(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,Gt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const lr=m(fr);function hr(t){return i(t)?hr[t]:U(hr)}const pr=globalThis.navigator?.userAgentData;if(pr)Nt(pr,((t,n)=>{ae(t)&&t&&(hr[n]=t)})),c(pr.brands,(t=>{hr[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");c(t.split(/ |\//),(t=>{hr[t]=!0}))}class gr{static models=new Map;constructor(t,n){i(n)?(dt(this,n),this.modelName=t,gr.models.set(t,n)):dt(this,t)}delete(t){gr.models.delete(t||this.modelName)}set(t){t&&(this.modelName=t),gr.models.set(t||this.modelName,this)}has(t){return gr.models.has(t||this.modelName)}get(t){return gr.models.get(t||this.modelName)}}class yr{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;Nt(t,(n=>{t[n]=new yr(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new yr(e),!0)})}}class dr{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return i(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,e=this.totalActive===this.totalFree;n&&e&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const mr=m(dr);class Ar{constructor(t=new Map){this.items=t}getItem(t){return this.isMap?this.items.get(t):this.items[t]}get(...t){return this.getItem(...t)}hasItem(t){return this.isMap?this.items.has(t):i(this.items[t])}has(...t){return this.hasItem(...t)}setItem(t,n){return this.isMap?this.items.set(t,n):this.items[t]=n,this}set(...t){return this.setItem(...t)}clear(){return this.isMap?this.items.clear():this.items=nn(this.items),this}removeItem(t){return this.isMap?this.items.delete(t):this.items[t]=null,this}remove(...t){return this.removeItem(...t)}}t.Chain=_t,t.Intervals=fr,t.Model=gr,t.Store=yr,t.Timers=Jt,t.UniqID=dr,t.VirtualStorage=Ar,t.add=function(t,n){return t+n},t.after=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)},t.apply=Yt,t.arrayToRegex=En,t.arraysToObject=function(t,n){const e={};return c(t,((t,r)=>{e[n[r]]=t})),e},t.ary=function(t,n){return(...e)=>t(...e.splice(0,n))},t.assert=function(t,n,e){return Se(t)||Se(n)?Je(t,n,e):!(ft(n)&&!1===n(t,e))&&!Ze(t,n)||Ge(t,n,e)},t.assertAsync=Je,t.assign=dt,t.assignToClass=mt,t.assignToObject=yt,t.before=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)},t.bindAll=function(t,n,e){const r=cn(t,(t=>ft(t)?t.bind(n):t));return e?dt(e,r):r},t.cacheNativeMethod=pn,t.calcProgress=function(t,n){return 0!==t&&(0===n?0:n/t*100)},t.camelCase=function(t){let n="";return t.replace(Nn," ").trim().split(" ").forEach(((t,e)=>{n+=0===e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n},t.chain=function(t){return m(_t,[t])},t.chunk=function(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=function(t){if(t){if(K(t))return at(t);if(y(t))return n(t);t.clear?t.clear():t.length&&(t.length=0)}return t},t.clearArray=n,t.clearBuffer=at,t.clearIntervals=function(){Wt(setTimeout(Zt,0),(t=>{lr.remove(t)}))},t.clearTimers=function(){Wt(setTimeout(Zt,0),(t=>{Ht.remove(t)}))},t.clone=function(t){return He(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=nn,t.compact=function(t){if(Z(t)){const n=U(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],i=t[e];Ke(i)&&(r[e]=i)}return r}return t.filter((t=>Ke(t)))},t.compactKeys=function(t){const n=[];return Nt(t,((t,e)=>{i(t)&&n.push(e)})),n},t.compactMap=Ye,t.compactMapArray=u,t.compactMapAsyncArray=f,t.compactMapAsyncObject=Cn,t.compactMapObject=On,t.concurrent=async function(t,n,e){if(t)return y(t)?J(t,n):void 0},t.concurrentArray=J,t.concurrentStatus=function(t,n,e){const r=t.length,o=[];for(let i=0;i<r;i++)o[i]=n(t[i],i,t,r,e);return Promise.allSettled(o)},t.construct=m,t.constructorName=L,t.countBy=function(t,n){const e={};let r;return c(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e},t.countKey=function(t,n){let e=0;return c(t,(t=>{t[n]&&e++})),e},t.countWithoutKey=function(t,n){let e=0;return c(t,(t=>{t[n]||e++})),e},t.curry=function(t,e=t.length){const r=[],o=(...i)=>{if(r.push(...i),r.length===e){const e=t(...r);return n(r),e}return o};return o},t.curryRight=function(t,e=t.length){const r=[],o=(...i)=>{if(r.unshift(...i),r.length===e){const e=t(...r);return n(r),e}return o};return o},t.debounce=function(t,n){function e(...t){e.id!==zt&&Ht.remove(e.id),e.id=Qt((()=>{e.callable(...t),e.id=zt}),n)}return e.id=zt,e.callable=t.bind(e),e.clear=()=>{e.id!==zt&&(Ht.remove(e.id),e.id=zt)},e},t.deduct=function(t){return t-1},t.defProp=dn,t.difference=v,t.divide=function(t,n){return t/n},t.drop=C,t.dropRight=(t,n=1,e=t.length)=>C(t,0,e-n),t.each=Vt,t.eachArray=c,t.eachAsyncArray=a,t.eachAsyncObject=Rt,t.eachObject=Nt,t.eachRight=O,t.eachRightAsync=I,t.ensureArray=A,t.ensureBuffer=function(t){return K(t)&&t||i(t)&&Buffer.from(t)||Buffer.alloc(0)},t.escapeRegex=Fn,t.escapeRegexRegex=jn,t.every=ln,t.everyArg=function(...t){return Lt(t[0])?async function(...n){return ln(t,(async t=>ln(n,(async n=>t(n)))))}:function(...n){return ln(t,(t=>ln(n,(n=>t(n)))))}},t.everyArray=M,t.everyAsyncArray=j,t.everyAsyncObject=un,t.everyObject=Kt,t.extendClass=function(t,...n){const e=n.length;for(let r=0;r<e;r++)mt(t,n[r]);return t},t.falsy=zt,t.filter=er,t.filterArray=F,t.filterAsyncArray=E,t.filterAsyncObject=Mn,t.filterObject=In,t.findIndex=function(t,n,e="id"){const r=t.findIndex(((t,r)=>At(t,0,0,n,e)));return-1!==r&&r},t.findIndexCache=At,t.findItem=function(t,n,e="id"){const r=t.find(((t,r)=>At(t,0,0,n,e)));return-1!==r&&r},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(A(n))),[]);return e},t.flattenDeep=b,t.flow=or,t.flowAsync=cr,t.flowAsyncRight=ur,t.flowRight=ir,t.forEach=w,t.forEachAsync=async function(t,n){const e=[],r=[];let o=0;t.forEach(((t,n)=>{e[o]=t,r[o]=t,o++}));for(let t=0;t<o;t++)await n(e[t],r[t]);return t},t.forMap=function(t,n){const e=nn(t),r=e.push||e.add;if(r&&ft(r)){const o=r.bind(e);t.forEach((t=>{const r=n(t,e);o(r)}))}else ft(e.set)?t.forEach(((t,r)=>{const o=n(t,r,e);e.set(r,o)})):t.forEach(((t,r)=>{const o=n(t,r,e);e[r]=o}));return e},t.forOf=Ut,t.forOfAsync=$t,t.forOfCompactMap=Xe,t.forOfCompactMapAsync=Qe,t.forOfEvery=an,t.forOfEveryAsync=fn,t.forOfFilter=tr,t.forOfFilterAsync=nr,t.forOfMap=en,t.forOfMapAsync=rn,t.generateLoop=qt,t.get=T,t.getEntries=function(t){if(i(t))return vn(t)},t.getFileExtension=function(t){if(t)return t.substring(t.lastIndexOf(".")+1)},t.getFilename=function(t){if(t)return t.substring(t.lastIndexOf("/")+1)},t.getHighest=function(t,n="id"){return vt(t,n)[0]},t.getLowest=function(t,n){return Ot(t,n,!1)[0]},t.getNumberInsertIndex=function(t,n){let e=0;return M(t,((t,r)=>(e=r,n>=t&&(e=r+1,!0)))),e},t.getPropDesc=yn,t.getPropNames=gn,t.getType=tn,t.getTypeName=Yn,t.groupBy=function(t,n){const e={};return c(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e},t.has=function t(n,e,r){return!ie(n)&&!ie(e)&&(n===e||(pt(n)?pt(e)?n.includes(e,r):xn(e)?e.test(n):ft(e)?e(n):y(e)?M(e,(e=>t(n,e))):ln(e,(e=>t(n,e))):y(n)?xn(e)?M(n,(t=>t.test(e))):ft(e)?M(n,e):y(e)?M(e,(e=>t(n,e))):n.includes(e,r):!!Z(n)&&(xn(e)?Kt(n,(t=>t.test(e))):ft(e)?Kt(n,e):Z(e)?Kt(n,((t,n)=>t===e[n])):Kt(n,(n=>t(n,e))))))},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const e=N(n);if(1===e.length)return k(t,n);{const n=e.pop(),r=T(e,t);return!!r&&k(r,n)}})))},t.hasDot=ar,t.hasKeys=P,t.hasLength=r,t.hasProp=mn,t.hasValue=i,t.htmlEntities=zn,t.ifInvoke=function(t,...n){if(ft(t))return t(...n)},t.ifNotAssign=(t,n,e)=>(n&&!i(t[n])&&(t[n]=e),t),t.ifValue=function(t,n,e,r){if(i(t)){if(ft(n))return e?Yt(n,e,r):n(...r);if(Z(n))return n[e]=t,n}},t.inAsync=async function(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t},t.inSync=(t,n)=>Vt(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const e={};return c(t,(t=>{e[t[n]]=t})),e},t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)},t.intersection=function(t,...n){return u(t,(t=>{if(M(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return lr.set(t,n)},t.intervals=lr,t.invert=function(t,n={}){if(t)return Nt(t,((t,e)=>{n[t]=e})),n},t.invokeArray=function(t,n,e){if(!t)return;const r=t.length;if(i(e))for(let o=0;o<r;o++)t[o].call(e,n);else for(let e=0;e<r;e++)t[e](n);return t},t.invokeCollection=function(t,n,e,r){return G(t,r?(t,o)=>t[n].call(r,e):(t,r)=>t[n](e))},t.invokeCollectionAsync=function(t,n,e,r){return H(t,r?t=>t[n].call(r,e):async t=>t[n](e))},t.isArguments=function(t){return!!i(t)&&"[object Arguments]"===t.toString()},t.isArray=y,t.isArrayBuffer=le,t.isArrayBufferCall=fe,t.isArrayLike=function(t,n){if(ie(t)||ft(t))return!1;if(y(t)||oe(t))return!0;const e=t.length;if(!ie(e)||!ht(e)||e<0)return!1;if(n){const n=U(t);return!!n&&ln(n,((t,n)=>n>=0&&ht(n)))}return!0},t.isAsync=Lt,t.isAsyncCall=Dt,t.isBigInt=ce,t.isBigIntCall=se,t.isBoolean=ae,t.isBooleanCall=ue,t.isBuffer=K,t.isBufferCall=_,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isCloneable=function(t){if(i(t)){const n=t?.constructor?.name;return he.test(n)}return!1},t.isConstructor=$,t.isConstructorFactory=D,t.isConstructorNameFactory=q,t.isDate=ge,t.isDateCall=pe,t.isDeno=Ve,t.isEmpty=function(t){return pt(t)||y(t)?!r(t):Z(t)?!Rn(t):!i(t)},t.isEqual=z,t.isF32=me,t.isF32Call=de,t.isF64=be,t.isF64Call=Ae,t.isFalse=ye,t.isFalsy=function(t,n=!0){return!1===Boolean(t)&&n},t.isFileCSS=Ft,t.isFileHTML=Et,t.isFileJS=St,t.isFileJSON=xt,t.isFloat=ve,t.isFunction=ft,t.isGenerator=Pt,t.isGeneratorCall=kt,t.isI16=Oe,t.isI16Call=Ce,t.isI32=Me,t.isI32Call=Ie,t.isI8=Fe,t.isI8Call=je,t.isIterable=function(t){return i(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=Se,t.isMap=ne,t.isMapCall=te,t.isMatchArray=function(t,n){return t.length===n.length&&M(t,((t,e)=>z(n[e],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const e=U(t),r=U(n);return e.length===r.length&&M(e,(e=>t[e]===n[e]))},t.isNegative=h,t.isNodejs=_e,t.isNotArray=function(t){return!y(t)},t.isNotNumber=function(t){return!ht(t)},t.isNotString=function(t){return!pt(t)},t.isNull=o,t.isNumber=ht,t.isNumberCall=lt,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,e){return t>n&&t<e},t.isNumberNotInRange=function(t,n,e){return t<n||t>e},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=Z,t.isPositive=function(t){return 1===wn(t)},t.isPrimitive=function(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n},t.isPromise=Ee,t.isRegex=xn,t.isRegexCall=Sn,t.isRelated=function(t,n){return!ie(t)&&!ie(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=Re,t.isSame=An,t.isSameType=function(t,n){const e=tn(t),r=tn(n);return e===r&&e.name===r.name},t.isSet=Bt,t.isSetCall=Tt,t.isString=pt,t.isTrue=function(t){return!0===t},t.isTruthy=Ke,t.isTypeFactory=V,t.isTypedArray=oe,t.isU16=Te,t.isU16Call=Ne,t.isU32=Ue,t.isU32Call=Be,t.isU8=Pe,t.isU8C=De,t.isU8CCall=$e,t.isU8Call=ke,t.isUndefined=e,t.isWeakMap=qe,t.isWeakMapCall=Le,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return ze.parse(t,n)},t.kebabCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Tn," ").trim().toLowerCase().replace(Bn,"-")},t.keys=U,t.largest=function(t){return W(...t)},t.last=function(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]},t.lowerCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace($n," ").trim().toLowerCase()},t.map=cn,t.mapArray=G,t.mapAsyncArray=H,t.mapAsyncObject=on,t.mapObject=sn,t.mapRightArray=function(t,n,e=[],r){let o=0;const i=t.length;for(let s=i-1;s>=0;s--)e[o]=n(t[s],s,t,i,r),o++;return e},t.mapWhile=function(t,n,e=[],r){const o=t.length;for(let i=0;i<o;i++){const s=t[i];if(!1===n(s,i,e,t,o,r))break;e[i]=s}return e},t.merge=function t(n,...e){return Vt(e,(e=>{Vt(e,((e,r)=>{if(n[r]&&(Z(e)||y(e)||e.forEach))return t(n[r],e);n[r]=e}))})),n},t.model=function(t,n){return i(n)?m(gr,[t,n]):T(t,gr.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=ie,t.noop=Zt,t.notEqual=Ze,t.nthArg=function(t=0){return(...n)=>n[t]},t.objectAssign=gt,t.objectEntries=vn,t.objectSize=Rn,t.omit=function(t,n){if(!t)return{};if(y(n)){const e=En(n);return In(t,((t,n)=>!e.test(n)))}if(xn(n))return In(t,((t,e)=>!n.test(e)));if(pt(n))return In(t,((t,e)=>e!==n));if(ht(n)){const e=n.toString();return In(t,((t,n)=>n!==e))}return ft(n)?In(t,((t,e)=>!n(t,e))):gt({},t)},t.once=t=>{let n;return(...e)=>(i(n)||(n=t(...e)),n)},t.onlyUnique=st,t.over=function(t){return(...n)=>cn(t,(t=>t(...n)))},t.overEvery=function(t){return n=>ln(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const e=[];return[u(t,((t,r)=>{if(n(t,r))return t;e.push(t)})),e]},t.pick=(t,n,e={})=>{if(t)return c(n,(n=>{e[n]=t[n]})),e},t.pluck=function(t,n){return G(t,(t=>It(t,n)))},t.pluckObject=It,t.promise=function(t){return new Promise(t)},t.propertyMatch=(t,n,e=U(t))=>M(e,(e=>z(t[e],n[e]))),t.randomFloat=function(t,n=0){return bn()*(t-n)+n},t.randomInt=nt,t.range=function(t,n,e=1,r=[]){return h(e)?r:t<n?p(t,n,e,r):g(t,n,e,r)},t.rangeDown=g,t.rangeUp=p,t.rawURLDecode=Zn,t.reArg=function(t,n){return(...e)=>t(...n.map((t=>e[t])))},t.regexTestFactory=jt,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t},t.removeBy=function(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t},t.replaceList=function(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Dn,t.returnValue=s,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return ot(t);if(1===n)return[t[nt(e-1,0)]];const r=[],o={};let i,s=0;for(;s<n;)i=nt(t.length-1,0),o[i]||(r.push(t[i]),o[i]=!0,s++);return r},t.sanitize=function(t){return zn(Zn(t))},t.setKey=function(t,n,e){return n&&Z(t)||ht(n)&&y(t)?t[n]=e:t.set?t.set(n,e):t.push?t.push(e):t.add?t.add(e):t[n]=e,t},t.setValue=function(t,n,e){return ht(e)&&y(t)?t[e]=n:t.push?t.push(n):t.add?t.add(n):t[e]=n,t},t.shuffle=ot,t.smallest=function(t){return it(...t)},t.snakeCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Un," ").trim().toLowerCase().replace(kn,"_")},t.sortCollectionAlphabetically=function(t,n="id",e){return t.sort(((t,r)=>bt(t,r,n,e)))},t.sortCollectionAlphabeticallyReverse=function(t,n="id",e){return t.sort(((t,r)=>Mt(t,r,n,e)))},t.sortCollectionAscending=vt,t.sortCollectionAscendingFilter=wt,t.sortCollectionDescending=Ot,t.sortCollectionDescendingFilter=Ct,t.sortNumberAscending=function(t){return t.sort(Q)},t.sortNumberDescening=function(t){return t.sort(X)},t.sortObjectsAlphabetically=bt,t.sortObjectsAlphabeticallyReverse=Mt,t.sortUnique=ct,t.stringify=We,t.stubArray=()=>[],t.stubFalse=()=>zt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Gt,t.subtract=Q,t.subtractAll=function(t){return t.reduce(((t,n)=>t-n),0)},t.subtractReverse=X,t.sumAll=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const e=t.length;return t.slice(e-n,e)},t.throttle=function(t,n){function e(...t){e.id?e.shouldThrottle=Gt:(e.callable(...t),e.id=Qt((()=>{e.shouldThrottle&&e.callable(...t),e.id=zt}),n))}return e.id=zt,e.callable=t.bind(e),e.clear=()=>{Ht.remove(e.id),e.id=zt},e},t.timer=Qt,t.timers=Ht,t.times=Wt,t.timesAsync=async function(t,n){for(let e=0;e<t;e++)await n(t)},t.timesMap=function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e},t.timesMapAsync=async function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e},t.toArray=rt,t.toPath=N,t.toggle=function(t,n=!0,e=!1){return z(n,t)?e:n},t.tokenize=function(t){return t.match(Wn)||[]},t.truncate=function(t,n){const e=t.length;return e>n?((t,n,e)=>{const r=t.split(""),o=r.length;let i,s=e-n;for(;s<o&&s>=0&&(i=r[s]," "!==i);s--);return t.slice(0,s).trim()})(t,n,e):t},t.truncateRight=function(t,n){const e=t.length;return e>n?((t,n,e)=>{const r=t.split(""),o=r.length;let i,s=n;for(;s<o&&s>0&&(i=r[s]," "!==i);s++);return t.substring(s,e).trim()})(t,n,e):t},t.truth=Gt,t.unZip=function(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.unZipObject=t=>{const n=[],e=[];return Nt(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},t.union=function(...t){return ut(b(t))},t.uniqID=mr,t.unique=ut,t.untilFalseArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!1===n(t[r],r))return!1;return!0},t.untilTrueArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!0===n(t[r],r))return!1;return!0},t.upperCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Pn," ").trim().toUpperCase()},t.upperFirst=Qn,t.upperFirstAll=function(t){return t.replace(Jn,(t=>Qn(t)))},t.upperFirstLetter=Hn,t.upperFirstOnly=Xn,t.upperFirstOnlyAll=function(t){return t.replace(Jn,(t=>Xn(t)))},t.virtualStorage=function(t){return new Ar(t)},t.whileCompactMap=function(t,n,e=[],r){let o=0;for(;o<t.length;){const s=e.push(n(t[o],o,t,t.length,r));o++,i(s)&&e.push(s)}return t},t.whileEachArray=function(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t},t.whileMapArray=function(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t},t.without=function(t,n){if(!n)return t;const e=m(Set,n);return t.filter((t=>!e.has(t)))},t.words=function(t){return t.match(Gn)||[]},t.wrap=function(t,n){return(...e)=>n(t,...e)},t.xor=function(...t){const n=m(Map),e=[];return 2===t.length?v(t[0],t[1]):(c(t,((t,e)=>{c(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),w(n,(t=>{1===t.count&&e.push(t.child)})),e)},t.zip=function(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.zipObject=(t,n)=>{const e={};return c(t,((t,r)=>{e[t]=n[r]})),e}}));
//# sourceMappingURL=basic.js.map

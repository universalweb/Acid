!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";function n(t){return t.length=0,t}function e(t){return void 0===t}function r(t){return Boolean(t.length)}function o(t){return null===t}function i(t){return!e(t)&&!o(t)}function c(t){return t}function s(t,n,e,r){if(!t)return;const o=t.length;if(i(e))for(let i=0;i<o;i++)n.call(e,t[i],i,t,o,r);else for(let e=0;e<o;e++)n(t[e],e,t,o,r);return t}function u(t,n=c,e=[],r,o){return i(r)?s(t,((t,c,s,u)=>{const a=n.call(r,t,c,e,s,u,o);i(a)&&e.push(a)})):s(t,((t,c,s,u)=>{const a=n(t,c,e,s,u,r,o);i(a)&&e.push(a)})),e}async function a(t,n,e,r){if(!t)return;const o=t.length;if(i(e))for(let i=0;i<o;i++)await n.call(e,t[i],i,t,o,r);else for(let e=0;e<o;e++)await n(t[e],e,t,o,r);return t}async function l(t,n=c){const e=[];return await a(t,(async(t,r,o)=>{const c=await n(t,r,e,o);i(c)&&e.push(c)})),e}const{sign:f}=Math;function h(t){return-1===f(t)}function g(t,n,e,r){let o=t;for(;o<n;)r.push(o),o+=e;return r}function p(t,n,e,r){let o=t;for(;o>n;)r.push(o),o-=e;return r}const d=Array.isArray;const m=Reflect.construct;function y(t,n=[],e){const r=d(n)?n:[n];return e?m(t,r,e):m(t,r)}function b(t){return d(t)&&t||i(t)&&[t]||[]}function A(t){return t.flat(1/0)}function w(t,n){return t.forEach(n),t}function v(...t){const n=y(Map),e=[];return s(t,((t,e)=>{s(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),w(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function C(t,n=1,e=t.length){return t.splice(n,e)}function I(t,n,e){if(!t)return;const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function O(t,n){if(!t)return;const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function E(t,n,e){if(!t)return;const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}async function S(t,n,e){if(!t)return;const r=t.length;for(let o=0;o<r;o++)if(!1===await n(t[o],o,t,r,e))return!1;return!0}function F(t,n,e=[],r){return s(t,((t,o,i,c)=>{!0===n(t,o,e,i,c,r)&&e.push(t)})),e}async function M(t,n,e=[],r){return await a(t,(async(t,o,i,c)=>{!0===await n(t,o,e,i,c,r)&&e.push(t)})),e}const j=/\.|\[/,x=/]/g,T="";function N(t){return t.replace(x,T).split(j)}function R(t,n){if(!n)return!1;let e=n;return E(d(t)?t:N(t),(t=>(e=e[t],i(e)))),e}const B=Object.keys;function L(t){if(t)return B(t)}const $=Object.hasOwn;function k(t,...n){if(t)return E(n,(n=>{const e=N(n);if(1===e.length)return $(t,n);{const n=e.pop(),r=R(e,t);return!!r&&$(r,n)}}))}function D(t,n){return t?.constructor===n||!1}function U(t){return n=>D(n,t)}function P(t){return t?.constructor?.name}function q(t){return n=>P(n)===t||!1}function z(t){return function(n,...e){return e?t(n)&&E(e,t):t(n)}}const W=q("Buffer"),Z=z(W),_=t=>!!i(t)&&"Object("===t.constructor.toString().trim().slice(9,16),H=(t,n)=>{if(t===n)return!0;if(Z(t))return t.equals(n);if(t.toString()===n.toString())if(_(t)){const e=L(t);if(k(n,e))return E(e,(e=>H(t[e],n[e])))}else if(d(t)&&t.length===n.length)return E(t,((t,e)=>H(t,n[e])));return!1};const V=Math.max;function K(t,n,e=[],r,o){return i(r)?s(t,((t,i,c,s)=>{e[i]=n.call(r,t,i,e,c,s,o)})):s(t,((t,r,i,c)=>{e[r]=n(t,r,e,i,c,o)})),e}async function G(t,n){const e=[];return await a(t,(async(t,r,o)=>{e[r]=await n(t,r,e,o)})),e}function J(t,n){return t-n}function Q(t,n){return n-t}const{floor:X,random:Y}=Math;function tt(t,n=0){return X(Y()*(t-n))+n}const nt=Array.from;function et(t,n,e){if(i(t))return nt(t,n,e)}function rt(t,n=t.length){if(t.length<=1)return et(t);const e=et(t);let r,o,i=0;for(;i<n;)r=tt(e.length-1,0),o=e[i],e[i]=e[r],e[r]=o,i++;return e}const ot=Math.min;function it(t,n,e){return e.indexOf(t)===n}function ct(t,n,e){return t!==e[n-1]}function st(t,n){return n?t.filter(ct):t.filter(it)}function ut(t){return t.fill(0),t}const at=t=>!!i(t)&&t instanceof Function,lt=q("Number"),ft=z(lt);const ht=U(String);const gt=Object.assign;function pt(t,n){if(_(n))gt(t,n);else if(at(n)){const e=n.name;e?t[e]=n:gt(t,n)}else(ht(n)||ft(n))&&(t[n]=n);return t}function dt(t,...n){const e=n.length;for(let r=0;r<e;r++)pt(t,n[r]);return t}function mt(t,n){if(_(n))gt(t.prototype,n);else if(at(n)){const e=n.name;e&&(t.prototype[e]=n)}else if(D(n)){const e=n.constructor?.name;e&&(t.prototype[e]=n)}else(ht(n)||ft(n))&&(t.prototype[n]=n);return t}function yt(t,n,e,r,o){if(t[o]===r)return!0}function bt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i?o?o<i?1:o>i?-1:0:1:-1}function At(t,n="id",e){return t.sort(((t,r)=>bt(t,r,n,e)))}function wt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i?o?o<i?-1:o>i?1:0:-1:1}function vt(t,n="id",e){return t.sort(((t,r)=>wt(t,r,n,e)))}function Ct(t,n){if(t)return ht(n)?t[n]:K(n,(n=>t[n]))}function It(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):o.localeCompare(i)}function Ot(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i.localeCompare(o)}function Et(t){return n=>!!i(n)&&t.test(n)}const St=Et(/\.css$/),Ft=Et(/\.html$/),Mt=Et(/\.js$/),jt=Et(/\.json$/);const xt=async(t,n,e,r)=>{if(!t)return;const o=L(t);return i(e)?await a(o,((i,c,s,u)=>n.call(e,t[i],i,t,u,o,r))):await a(o,((e,i,c,s)=>n(t[e],e,t,s,o,r))),t};function Tt(t,n,e,r){if(!t)return;const o=L(t);return i(e)?s(o,((o,i,c,s)=>{n.call(e,t[o],o,t,s,c,r)})):s(o,((e,o,i,c)=>{n(t[e],e,t,c,i,r)})),t}const Nt=q("Set"),Rt=z(Nt);function Bt(t,n){if(Rt(t)){for(const e of t)n(e,t);return t}for(const[e,r]of t)n(r,e,t);return t}const Lt=q("GeneratorFunction"),$t=z(Lt);async function kt(t,n,e){if(Rt(t)){for(const e of t)await n(e,t);return t}if($t(t))for await(const r of t(...e))await n(r,t);for(const[e,r]of t)await n(r,e,t);return t}const Dt=q("AsyncFunction"),Ut=z(Dt);function Pt(t,n,e,r,o,c){return(s,u,a,l,f)=>{let h;const g=Ut(u);if(i(s)&&u)return h=d(s)?g?n:t:_(s)||at(s)?g?r:e:o?g?c:o:$t(s)?c:g?r:e,h(s,u,a,l,f)}}const qt=Pt(s,a,Tt,xt,Bt,kt);class zt{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;qt(t,((t,e)=>{n[e]=function(...e){return this.value=t.call(n,n.value,...e),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}function Wt(){}function Zt(t,n){for(let e=0;e<t;e++)n(e)}class _t{list=y(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,!0),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Ht=y(_t);function Vt(t,n){return Ht.set(t,n)}const Kt=Reflect.apply;function Gt(t,n,e){if(at(t))return Kt(t,n,e)}function Jt(t){return t?.constructor}function Qt(t,n=[]){const e=Jt(t);return e===Function&&"function"===e.name?function(){}:y(e,n)}function Xt(t,n=c,e){const r=e||Qt(t);if(d(t)||Rt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){o(n(e,r,t))}return r}const o=at(r.set);for(const[e,i]of t){const c=n(i,e,r,t);o?r.set(e,c):r[e]=c}return r}async function Yt(t,n=c,e,r){if($t(t)){const e=[];for await(const o of t(...r))e.push(await n(o,e,t));return e}const o=e||Qt(t);if(d(t)||Rt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){r(await n(e,o,t))}return o}const i=at(o.set);for await(const[e,r]of t){const c=await n(r,e,o,t);i?o.set(e,c):o[e]=c}return o}async function tn(t,n,e={}){if(t)return await xt(t,(async(t,r,o,i,c)=>{e[r]=await n(t,r,e,o,i,c)})),e}function nn(t,n,e={},r,o){if(t)return i(r)?Tt(t,((t,i,c,s,u)=>{e[i]=n.call(r,t,i,e,c,s,u,o)})):Tt(t,((t,r,i,c,s)=>{e[r]=n(t,r,e,i,c,s,o)})),e}const en=Pt(K,G,nn,tn,Xt,Yt);async function rn(t,n){if(!t)return;return S(L(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}function on(t,n){if(!t)return;return E(L(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}function cn(t,n=c){if(d(t)||Rt(t))for(const e of t){if(!1===n(e,t))return!1}else for(const[e,r]of t){if(!1===n(r,e,t))return!1}return!0}async function sn(t,n=c,e){if($t(t))for await(const r of t(...e)){if(!1===await n(r,t))return!1}else if(d(t)||Rt(t))for(const e of t){if(!1===await n(e,t))return!1}else for(const[e,r]of t){if(!1===await n(r,e,t))return!1}return!0}const un=Pt(E,S,on,rn,cn,sn);const an=Function.prototype;function ln(t){return an.call.bind(t)}const fn=Object.getOwnPropertyNames,hn=Object.getOwnPropertyDescriptor,gn=Object.defineProperty,pn=ln(Object.hasOwnProperty),dn=Object.is;const{random:mn}=Math;const{sign:yn}=Math;function bn(t){return 0===t}const An=Object.entries;async function wn(t,n=c,e={}){return await xt(t,(async(t,r,o,c,s)=>{const u=await n(t,r,e,o,c,s);i(u)&&(e[r]=u)})),e}function vn(t,n=c,e={}){return Tt(t,((t,r,o,c,s)=>{const u=n(t,r,e,o,c,s);i(u)&&(e[r]=u)})),e}function Cn(t,n,e={}){return Tt(t,((t,r,o,i,c)=>{!0===n(t,r,e,o,i,c)&&(e[r]=t)})),e}async function In(t,n,e={}){return await xt(t,(async(t,r,o,i,c)=>{!0===await n(t,r,e,o,i,c)&&(e[r]=t)})),e}const On=/[()[\]{}*+?^$|#.,/\\\s-]/g;function En(t){return t.replace(On,"\\$&")}function Sn(t,n){return n?Sn(K(t,En)):RegExp(t.join("|"))}const Fn=q("RegExp"),Mn=z(Fn);function jn(t){if(!t)return;if(_(t))return L(t).length;const n=t.length;if(i(n))return n;const e=t.size;return i(n)?e:L(t).length}const xn=(t,n)=>{const e={};return s(t,((t,r)=>{e[t]=n[r]})),e},Tn=/[ _-]+/g;const Nn=/[ _-]+/g,Rn=/[ ]+/g;const Bn=/[ _-]+/g,Ln=/[ ]+/g;const $n=/[ _-]+/g;const kn=/[ _-]+/g;function Dn(t,n=1){return t.substring(n)}const Un=/%(?![\da-f]{2})/gi,Pn=/&/g,qn=/</g,zn=/>/g,Wn=/"/g;function Zn(t){return decodeURIComponent(t.replace(Un,(()=>"%25")))}function _n(t){return t.replace(Pn,"&amp;").replace(qn,"&lt;").replace(zn,"&gt;").replace(Wn,"&quot;")}const Hn=/\S+/g,Vn=/\w+/g;const Kn=/\w+/g;function Gn(t){return t[0].toUpperCase()}function Jn(t){return Gn(t)+Dn(t)}function Qn(t){return Gn(t)+Dn(t).toLowerCase()}function Xn(t){return Jt(t)?.name}const Yn=q("Map"),te=z(Yn),ne=/Array/,ee="Array";function re(t){if(t){const n=Xn(t);if(ne.test(n)&&n!==ee)return!0}return!1}function oe(t){return!i(t)}const ie=q("BigInt"),ce=z(ie),se=q("Boolean"),ue=z(se),ae=q("ArrayBuffer"),le=z(ae);const fe=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");const he=q("Date"),ge=z(he);function pe(t){return!1===t}const de=q("Float32Array"),me=z(de),ye=q("Float64Array"),be=z(ye),{isInteger:Ae}=Number,we=Ae,ve=q("Int16Array"),Ce=z(ve),Ie=q("Int32Array"),Oe=z(Ie),Ee=q("Int8Array"),Se=z(Ee);function Fe(t){return!!t&&t instanceof Promise}function Me(t){return!!t&&(Fe(t)||Ut(t)||$t(t))}const{isSafeInteger:je}=Number,xe=je;const Te=q("Uint16Array"),Ne=z(Te),Re=q("Uint32Array"),Be=z(Re),Le=q("Uint8Array"),$e=z(Le),ke=q("Uint8ClampedArray"),De=z(ke),Ue=q("WeakMap"),Pe=z(Ue),qe=void 0!==globalThis.Deno,ze=void 0!==globalThis.process&&process.versions&&process.versions.node;function We(t,n=!0){return Boolean(t)&&n}function Ze(t,n){return pe(H(t,n))}const _e=JSON;const He=_e.stringify;function Ve(t,n,e){const r=globalThis.options||e;let o;return at(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${He(t)}\n\t\tExpected: ${He(n)}`,r)}async function Ke(t,n,e){const r=await t;return!(at(n)&&!1===await n(r,e))&&!Ze(r,n)||Ve(r,n,e)}const Ge=globalThis.structuredClone;async function Je(t,n=c,e,r){if($t(t)){const e=[];for await(const o of t(...r)){const r=await n(o,e,t);i(r)&&e.push(r)}return e}const o=e||Qt(t);if(d(t)||Rt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){const c=await n(e,o,t);i(c)&&r(c)}return o}const s=at(o.set);for await(const[e,r]of t){const c=await n(r,e,o,t);i(c)&&(s?o.set(e,c):o[e]=c)}return o}function Qe(t,n=c,e){const r=e||Qt(t);if(d(t)||Rt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){const c=n(e,r,t);i(c)&&o(c)}return r}const o=at(r.set);for(const[e,c]of t){const s=n(c,e,r,t);i(s)&&(o?r.set(e,s):r[e]=s)}return r}const Xe=Pt(u,l,vn,wn,Qe,Je);function Ye(t,n=c,e){const r=e||Qt(t);if(d(t)||Rt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){!0===n(e,r,t)&&o(e)}}else{const e=at(r.set);for(const[o,i]of t){!0===n(i,o,r,t)&&(e?r.set(o,i):r[o]=i)}}return r}async function tr(t,n=c,e,r){if($t(t)){const e=[];for await(const o of t(...r))!0===await n(o,e,t)&&e.push(o);return e}const o=e||Qt(t);if(d(t)||Rt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){!0===await n(e,o,t)&&r(e)}}else{const e=at(o.set);for await(const[r,i]of t){!0===await n(i,r,o,t)&&(e?o.set(r,i):o[r]=i)}}return o}const nr=Pt(F,M,Cn,In,Ye,tr);function er(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const rr=er(s),or=er(I);function ir(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const cr=ir(a),sr=ir(O);const ur=Et(/\./);class ar{list=y(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,!0),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const lr=y(ar);class fr{static models=new Map;constructor(t,n){i(n)?(dt(this,n),this.modelName=t,fr.models.set(t,n)):dt(this,t)}delete(t){fr.models.delete(t||this.modelName)}set(t){t&&(this.modelName=t),fr.models.set(t||this.modelName,this)}has(t){return fr.models.has(t||this.modelName)}get(t){return fr.models.get(t||this.modelName)}}function hr(t){return new Promise(t)}class gr{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;Tt(t,(n=>{t[n]=new gr(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new gr(e),!0)})}}class pr{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return i(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,e=this.totalActive===this.totalFree;n&&e&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const dr=y(pr);class mr{constructor(t=new Map){this.items=t}getItem(t){return this.isMap?this.items.get(t):this.items[t]}get(...t){return this.getItem(...t)}hasItem(t){return this.isMap?this.items.has(t):i(this.items[t])}has(...t){return this.hasItem(...t)}setItem(t,n){return this.isMap?this.items.set(t,n):this.items[t]=n,this}set(...t){return this.setItem(...t)}clear(){return this.isMap?this.items.clear():this.items=Qt(this.items),this}removeItem(t){return this.isMap?this.items.delete(t):this.items[t]=null,this}remove(...t){return this.removeItem(...t)}}function yr(t){return new mr(t)}function br(t){return i(t)?br[t]:L(br)}const Ar=globalThis.navigator?.userAgentData;if(Ar)Tt(Ar,((t,n)=>{ue(t)&&t&&(br[n]=t)})),s(Ar.brands,(t=>{br[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");s(t.split(/ |\//),(t=>{br[t]=!0}))}function wr(t,n,e,r){return t.addEventListener(n,e,r),t}const vr=document.createDocumentFragment.bind(document);function Cr(t,n){return t.appendChild(n),n}function Ir(t,n){return d(n)?xn(n,K(n,(n=>t.getAttribute(n)))):(Tt(n,((n,e)=>{t.setAttribute(e,n)})),t)}const Or=/^.[\w_-]+$/,Er=/^[A-Za-z]+$/,Sr=/\s/,Fr=document.getElementsByClassName.bind(document),Mr=document.getElementsByTagName.bind(document),jr=document.getElementById.bind(document),xr=document.querySelector.bind(document),Tr=document.querySelectorAll.bind(document);const Nr=document.createElement.bind(document);function Rr(t){const n=ur(t)&&t||`${t}.js`;return(t=>hr((n=>{wr(t,"load",n,!0),wr(t,"error",n,!0),Cr(xr("head"),t)})))(Ir(Nr("script"),{async:"",src:n}))}function Br(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&wr(document,"DOMContentLoaded",t),!1)}Br((()=>{const t=jr("AcidLib");Rr(t&&t.getAttribute("data-index")||"/index")}));const Lr=location.protocol,$r="http:"===Lr?"ws":"wss",kr=location.hostname,Dr={hardware:{cores:navigator.hardwareConcurrency},host:{name:kr,protocol:Lr,protocolSocket:$r}};function Ur(){dt(Dr,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Pr(){Ur()}Br(Pr),wr(window,"load",Pr,!0),wr(window,"resize",Pr,!0),t.hasLocal=void 0,function(n){try{n().removeItem("TESTING"),t.hasLocal=!0}catch(n){t.hasLocal=!1}}((()=>localStorage));class qr{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=yr(t)}hasLocal=t.hasLocal;setItem(t,n){return this.hasLocal&&this.local.setItem(t,ht(n)?n:He(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return i(n)?n:!i(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}const zr=(t,n)=>`color:${t};background:${n};`,Wr={alert:zr("#fff","#f44336"),important:zr("#fff","#E91E63"),notify:zr("#fff","#651FFF"),warning:zr("#000","#FFEA00")};t.BrowserStorage=qr,t.Chain=zt,t.Intervals=ar,t.Model=fr,t.Store=gr,t.Timers=_t,t.UniqID=pr,t.VirtualStorage=mr,t.add=function(t,n){return t+n},t.after=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)},t.append=Cr,t.apply=Gt,t.arrayToRegex=Sn,t.arraysToObject=function(t,n){const e={};return s(t,((t,r)=>{e[n[r]]=t})),e},t.ary=function(t,n){return(...e)=>t(...e.splice(0,n))},t.assert=function(t,n,e){return Me(t)||Me(n)?Ke(t,n,e):!(at(n)&&!1===n(t,e))&&!Ze(t,n)||Ve(t,n,e)},t.assertAsync=Ke,t.assign=dt,t.assignToClass=mt,t.assignToObject=pt,t.before=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)},t.bindAll=function(t,n,e){const r=en(t,(t=>at(t)?t.bind(n):t));return e?dt(e,r):r},t.browserStorage=function(t){return new qr(t)},t.cacheNativeMethod=ln,t.calcProgress=function(t,n){return 0!==t&&(0===n?0:n/t*100)},t.camelCase=function(t){let n="";return t.replace(Tn," ").trim().split(" ").forEach(((t,e)=>{n+=0===e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n},t.chain=function(t){return y(zt,[t])},t.chunk=function(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=function(t){if(t){if(Z(t))return ut(t);if(d(t))return n(t);t.clear?t.clear():t.length&&(t.length=0)}return t},t.clearArray=n,t.clearBuffer=ut,t.clearIntervals=function(){Zt(setTimeout(Wt,0),(t=>{lr.remove(t)}))},t.clearTimers=function(){Zt(setTimeout(Wt,0),(t=>{Ht.remove(t)}))},t.clone=function(t){return Ge(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=Qt,t.cnsl=(t,n)=>{const e=ht(t)?t:He(t);if("alert"===n||"warning"===n)return console.trace(`%c${e}`,`${Wr[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${e}`,`${Wr[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},t.cnslTheme=(t,n,e)=>{Wr[t]=zr(n,e)},t.compact=function(t){if(_(t)){const n=L(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],i=t[e];We(i)&&(r[e]=i)}return r}return t.filter((t=>We(t)))},t.compactKeys=function(t){const n=[];return Tt(t,((t,e)=>{i(t)&&n.push(e)})),n},t.compactMap=Xe,t.compactMapArray=u,t.compactMapAsyncArray=l,t.compactMapAsyncObject=wn,t.compactMapObject=vn,t.concurrent=async function(t,n,...e){const r=t.length,o=[];if(n)for(let i=0;i<r;i++){const r=t[i];o[i]=t[i].call(n,...e,i,o,r)}else for(let n=0;n<r;n++){const r=t[n];o[n]=t[n](...e,n,o,r)}return Promise.all(o)},t.concurrentEachArray=async function(t,n,e){if(!t)return;const r=[],o=t.length;if(e)for(let i=0;i<o;i++)r[i]=n.call(e,t[i],i,r,o);else for(let e=0;e<o;e++)r[e]=n(t[e],e,r,o);return Promise.all(r)},t.concurrentStatus=function(t,n,e){const r=t.length,o=[];for(let i=0;i<r;i++)o[i]=n(t[i],i,t,r,e);return Promise.allSettled(o)},t.construct=y,t.constructorName=P,t.countBy=function(t,n){const e={};let r;return s(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e},t.countKey=function(t,n){let e=0;return s(t,(t=>{t[n]&&e++})),e},t.countWithoutKey=function(t,n){let e=0;return s(t,(t=>{t[n]||e++})),e},t.createFragment=vr,t.curry=function(t,e=t.length){const r=[],o=(...i)=>{if(r.push(...i),r.length===e){const e=t(...r);return n(r),e}return o};return o},t.curryRight=function(t,e=t.length){const r=[],o=(...i)=>{if(r.unshift(...i),r.length===e){const e=t(...r);return n(r),e}return o};return o},t.debounce=function(t,n){function e(...t){!1!==e.id&&Ht.remove(e.id),e.id=Vt((()=>{e.callable(...t),e.id=!1}),n)}return e.id=!1,e.callable=t.bind(e),e.clear=()=>{!1!==e.id&&(Ht.remove(e.id),e.id=!1)},e},t.deduct=function(t){return t-1},t.defProp=gn,t.difference=v,t.divide=function(t,n){return t/n},t.drop=C,t.dropRight=(t,n=1,e=t.length)=>C(t,0,e-n),t.each=qt,t.eachArray=s,t.eachAsyncArray=a,t.eachAsyncObject=xt,t.eachObject=Tt,t.eachRight=I,t.eachRightAsync=O,t.ensureArray=b,t.ensureBuffer=function(t){return Z(t)&&t||i(t)&&Buffer.from(t)||Buffer.alloc(0)},t.equalsZero=bn,t.escapeRegex=En,t.escapeRegexRegex=On,t.eventAdd=wr,t.eventRemove=function(t,n,e,r){return t.removeEventListener(n,e,r),t},t.every=un,t.everyArg=function(...t){return Ut(t[0])?async function(...n){return un(t,(async t=>un(n,(async n=>t(n)))))}:function(...n){return un(t,(t=>un(n,(n=>t(n)))))}},t.everyArray=E,t.everyAsyncArray=S,t.everyAsyncObject=rn,t.everyObject=on,t.extendClass=function(t,...n){const e=n.length;for(let r=0;r<e;r++)mt(t,n[r]);return t},t.filter=nr,t.filterArray=F,t.filterAsyncArray=M,t.filterAsyncObject=In,t.filterObject=Cn,t.findIndex=function(t,n,e="id"){const r=t.findIndex(((t,r)=>yt(t,0,0,n,e)));return-1!==r&&r},t.findIndexCache=yt,t.findItem=function(t,n,e="id"){const r=t.find(((t,r)=>yt(t,0,0,n,e)));return-1!==r&&r},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(b(n))),[]);return e},t.flattenDeep=A,t.flow=rr,t.flowAsync=cr,t.flowAsyncRight=sr,t.flowRight=or,t.forEach=w,t.forEachAsync=async function(t,n){const e=[],r=[];let o=0;t.forEach(((t,n)=>{e[o]=t,r[o]=t,o++}));for(let t=0;t<o;t++)await n(e[t],r[t]);return t},t.forMap=function(t,n){const e=Qt(t),r=e.push||e.add;if(r&&at(r)){const o=r.bind(e);t.forEach((t=>{const r=n(t,e);o(r)}))}else at(e.set)?t.forEach(((t,r)=>{const o=n(t,r,e);e.set(r,o)})):t.forEach(((t,r)=>{const o=n(t,r,e);e[r]=o}));return e},t.forOf=Bt,t.forOfAsync=kt,t.forOfCompactMap=Qe,t.forOfCompactMapAsync=Je,t.forOfEvery=cn,t.forOfEveryAsync=sn,t.forOfFilter=Ye,t.forOfFilterAsync=tr,t.forOfMap=Xt,t.forOfMapAsync=Yt,t.generateLoop=Pt,t.get=R,t.getByClass=Fr,t.getById=jr,t.getByTag=Mr,t.getEntries=function(t){if(i(t))return An(t)},t.getFileExtension=function(t){if(t)return t.substring(t.lastIndexOf(".")+1)},t.getFilename=function(t){if(t)return t.substring(t.lastIndexOf("/")+1)},t.getHighest=function(t,n="id"){return vt(t,n)[0]},t.getLowest=function(t,n){return At(t,n,!1)[0]},t.getNumberInsertIndex=function(t,n){let e=0;return E(t,((t,r)=>(e=r,n>=t&&(e=r+1,!0)))),e},t.getPropDesc=hn,t.getPropNames=fn,t.getType=Jt,t.getTypeName=Xn,t.groupBy=function(t,n){const e={};return s(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e},t.has=function t(n,e,r){return!oe(n)&&!oe(e)&&(n===e||(ht(n)?ht(e)?n.includes(e,r):Mn(e)?e.test(n):at(e)?e(n):d(e)?E(e,(e=>t(n,e))):un(e,(e=>t(n,e))):d(n)?Mn(e)?E(n,(t=>t.test(e))):at(e)?E(n,e):d(e)?E(e,(e=>t(n,e))):n.includes(e,r):!!_(n)&&(Mn(e)?on(n,(t=>t.test(e))):at(e)?on(n,e):_(e)?on(n,((t,n)=>t===e[n])):on(n,(n=>t(n,e))))))},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const e=N(n);if(1===e.length)return $(t,n);{const n=e.pop(),r=R(e,t);return!!r&&$(r,n)}})))},t.hasDot=ur,t.hasKeys=k,t.hasLength=r,t.hasProp=pn,t.hasValue=i,t.htmlEntities=_n,t.ifInvoke=function(t,n,...e){if(at(t))return n?t.call(n,...e):t(...e)},t.ifNotAssign=(t,n,e)=>(n&&!i(t[n])&&(t[n]=e),t),t.ifValue=function(t,n,e,r){if(i(t)){if(at(n))return e?Gt(n,e,r):n(...r);if(_(n))return n[e]=t,n}},t.importjs=Rr,t.inAsync=async function(t,n,...e){const r=t.length,o=[];if(n)for(let i=0;i<r;i++){const r=t[i];o[i]=await t[i].call(n,...e,i,r)}else for(let n=0;n<r;n++){const r=t[n];o[n]=await t[n](...e,n,r)}return o},t.inSync=function(t,n,...e){const r=t.length,o=[];if(n)for(let i=0;i<r;i++){const r=t[i];o[i]=r.call(n,...e,i,r)}else for(let n=0;n<r;n++){const r=t[n];o[n]=r(...e,n,r)}return o},t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const e={};return s(t,(t=>{e[t[n]]=t})),e},t.info=Dr,t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)},t.intersection=function(t,...n){return u(t,(t=>{if(E(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return lr.set(t,n)},t.intervals=lr,t.invert=function(t,n={}){if(t)return Tt(t,((t,e)=>{n[t]=e})),n},t.invokeArray=function(t,n,e){if(!t)return;const r=t.length;if(i(e))for(let o=0;o<r;o++)t[o].call(e,n);else for(let e=0;e<r;e++)t[e](n);return t},t.invokeCollection=function(t,n,e,r){return K(t,r?(t,o)=>t[n].call(r,e):(t,r)=>t[n](e))},t.invokeCollectionAsync=function(t,n,e,r){return G(t,r?t=>t[n].call(r,e):async t=>t[n](e))},t.isAgent=br,t.isArguments=function(t){return!!i(t)&&"[object Arguments]"===t.toString()},t.isArray=d,t.isArrayBuffer=le,t.isArrayBufferCall=ae,t.isArrayLike=function(t,n){if(oe(t)||at(t))return!1;if(d(t)||re(t))return!0;const e=t.length;if(!oe(e)||!ft(e)||e<0)return!1;if(n){const n=L(t);return!!n&&un(n,((t,n)=>n>=0&&ft(n)))}return!0},t.isAsync=Ut,t.isAsyncCall=Dt,t.isBigInt=ce,t.isBigIntCall=ie,t.isBoolean=ue,t.isBooleanCall=se,t.isBuffer=Z,t.isBufferCall=W,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isCloneable=function(t){if(i(t)){const n=t?.constructor?.name;return fe.test(n)}return!1},t.isConstructor=D,t.isConstructorFactory=U,t.isConstructorNameFactory=q,t.isDate=ge,t.isDateCall=he,t.isDeno=qe,t.isDocumentReady=Br,t.isDom=function(t){return t&&9!==t.nodeType},t.isEmpty=function(t){return ht(t)||d(t)?!r(t):_(t)?!jn(t):!i(t)},t.isEnter=function(t){return 13===t.keyCode},t.isEqual=H,t.isF32=me,t.isF32Call=de,t.isF64=be,t.isF64Call=ye,t.isFalse=pe,t.isFalsy=function(t,n=!0){return!1===Boolean(t)&&n},t.isFileCSS=St,t.isFileHTML=Ft,t.isFileJS=Mt,t.isFileJSON=jt,t.isFloat=we,t.isFunction=at,t.isGenerator=$t,t.isGeneratorCall=Lt,t.isHTMLCollection=function(t){return!!i(t)&&"[object HTMLCollection]"===t.toString()},t.isI16=Ce,t.isI16Call=ve,t.isI32=Oe,t.isI32Call=Ie,t.isI8=Se,t.isI8Call=Ee,t.isIterable=function(t){return i(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=Me,t.isMap=te,t.isMapCall=Yn,t.isMatchArray=function(t,n){return t.length===n.length&&E(t,((t,e)=>H(n[e],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const e=L(t),r=L(n);return e.length===r.length&&E(e,(e=>t[e]===n[e]))},t.isNegative=h,t.isNodeList=function(t){return!!i(t)&&"[object NodeList]"===t.toString()},t.isNodejs=ze,t.isNotArray=function(t){return!d(t)},t.isNotNumber=function(t){return!ft(t)},t.isNotString=function(t){return!ht(t)},t.isNull=o,t.isNumber=ft,t.isNumberCall=lt,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,e){return t>n&&t<e},t.isNumberNotInRange=function(t,n,e){return t<n||t>e},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=_,t.isPositive=function(t){return 1===yn(t)},t.isPrimitive=function(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n},t.isPromise=Fe,t.isRegex=Mn,t.isRegexCall=Fn,t.isRelated=function(t,n){return!oe(t)&&!oe(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=xe,t.isSame=dn,t.isSameType=function(t,n){const e=Jt(t),r=Jt(n);return e===r&&e.name===r.name},t.isSet=Rt,t.isSetCall=Nt,t.isString=ht,t.isTrue=function(t){return!0===t},t.isTruthy=We,t.isTypeFactory=z,t.isTypedArray=re,t.isU16=Ne,t.isU16Call=Te,t.isU32=Be,t.isU32Call=Re,t.isU8=$e,t.isU8C=De,t.isU8CCall=ke,t.isU8Call=Le,t.isUndefined=e,t.isWeakMap=Pe,t.isWeakMapCall=Ue,t.isZero=bn,t.jsonParse=function(t,n){if(t)return _e.parse(t,n)},t.kebabCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Nn," ").trim().toLowerCase().replace(Rn,"-")},t.keys=L,t.largest=function(t){return V(...t)},t.last=function(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]},t.lowerCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(kn," ").trim().toLowerCase()},t.map=en,t.mapArray=K,t.mapAsyncArray=G,t.mapAsyncObject=tn,t.mapObject=nn,t.mapRightArray=function(t,n,e=[],r){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)e[o]=n(t[c],c,t,i,r),o++;return e},t.mapWhile=function(t,n,e=[],r){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,e,t,o,r))break;e[i]=c}return e},t.merge=function t(n,...e){return qt(e,(e=>{qt(e,((e,r)=>{if(n[r]&&(_(e)||d(e)||e.forEach))return t(n[r],e);n[r]=e}))})),n},t.model=function(t,n){return i(n)?y(fr,[t,n]):R(t,fr.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=oe,t.nodeAttribute=Ir,t.noop=Wt,t.notEqual=Ze,t.nthArg=function(t=0){return(...n)=>n[t]},t.objectAssign=gt,t.objectEntries=An,t.objectSize=jn,t.omit=function(t,n){if(!t)return{};if(d(n)){const e=Sn(n);return Cn(t,((t,n)=>!e.test(n)))}if(Mn(n))return Cn(t,((t,e)=>!n.test(e)));if(ht(n))return Cn(t,((t,e)=>e!==n));if(ft(n)){const e=n.toString();return Cn(t,((t,n)=>n!==e))}return at(n)?Cn(t,((t,e)=>!n(t,e))):gt({},t)},t.once=t=>{let n;return(...e)=>(i(n)||(n=t(...e)),n)},t.onlyUnique=it,t.over=function(t){return(...n)=>en(t,(t=>t(...n)))},t.overEvery=function(t){return n=>un(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const e=[];return[u(t,((t,r)=>{if(n(t,r))return t;e.push(t)})),e]},t.pick=(t,n,e={})=>{if(t)return s(n,(n=>{e[n]=t[n]})),e},t.pluck=function(t,n){return K(t,(t=>Ct(t,n)))},t.pluckObject=Ct,t.promise=hr,t.propertyMatch=(t,n,e=L(t))=>E(e,(e=>H(t[e],n[e]))),t.querySelector=xr,t.querySelectorAll=Tr,t.randomFloat=function(t,n=0){return mn()*(t-n)+n},t.randomInt=tt,t.range=function(t,n,e=1,r=[]){return h(e)?r:t<n?g(t,n,e,r):p(t,n,e,r)},t.rangeDown=p,t.rangeUp=g,t.rawURLDecode=Zn,t.reArg=function(t,n){return(...e)=>t(...n.map((t=>e[t])))},t.regexTestFactory=Et,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t},t.removeBy=function(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t},t.replaceList=function(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Dn,t.returnValue=c,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return rt(t);if(1===n)return[t[tt(e-1,0)]];const r=[],o={};let i,c=0;for(;c<n;)i=tt(t.length-1,0),o[i]||(r.push(t[i]),o[i]=!0,c++);return r},t.sanitize=function(t){return _n(Zn(t))},t.saveDimensions=Ur,t.selector=function(t){switch(t[0]){case"#":if(!Sr.test(t))return jr(Dn(t));break;case".":if(Or.test(t))return Fr(Dn(t));break;default:if(Er.test(t))return Mr(t)}return Tr(t)},t.setKey=function(t,n,e){return n&&_(t)||ft(n)&&d(t)?t[n]=e:t.set?t.set(n,e):t.push?t.push(e):t.add?t.add(e):t[n]=e,t},t.setValue=function(t,n,e){return ft(e)&&d(t)?t[e]=n:t.push?t.push(n):t.add?t.add(n):t[e]=n,t},t.shuffle=rt,t.smallest=function(t){return ot(...t)},t.snakeCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Bn," ").trim().toLowerCase().replace(Ln,"_")},t.sortCollectionAlphabetically=function(t,n="id",e){return t.sort(((t,r)=>It(t,r,n,e)))},t.sortCollectionAlphabeticallyReverse=function(t,n="id",e){return t.sort(((t,r)=>Ot(t,r,n,e)))},t.sortCollectionAscending=vt,t.sortCollectionAscendingFilter=wt,t.sortCollectionDescending=At,t.sortCollectionDescendingFilter=bt,t.sortNumberAscending=function(t){return t.sort(J)},t.sortNumberDescening=function(t){return t.sort(Q)},t.sortObjectsAlphabetically=It,t.sortObjectsAlphabeticallyReverse=Ot,t.sortUnique=ct,t.stringify=He,t.stubArray=function(){return[]},t.stubFalse=function(){return!1},t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>!0,t.subtract=J,t.subtractAll=function(t){return t.reduce(((t,n)=>t-n),0)},t.subtractReverse=Q,t.sumAll=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const e=t.length;return t.slice(e-n,e)},t.themes=Wr,t.throttle=function(t,n){function e(...t){e.id?e.shouldThrottle=!0:(e.callable(...t),e.id=Vt((()=>{e.shouldThrottle&&e.callable(...t),e.id=!1}),n))}return e.id=!1,e.callable=t.bind(e),e.clear=()=>{Ht.remove(e.id),e.id=!1},e},t.timer=Vt,t.timers=Ht,t.times=Zt,t.timesAsync=async function(t,n){for(let e=0;e<t;e++)await n(t)},t.timesMap=function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e},t.timesMapAsync=async function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e},t.toArray=et,t.toPath=N,t.toggle=function(t,n=!0,e=!1){return H(n,t)?e:n},t.tokenize=function(t){return t.match(Hn)||[]},t.truncate=function(t,n){const e=t.length;return e>n?((t,n,e)=>{const r=t.split(""),o=r.length;let i,c=e-n;for(;c<o&&c>=0&&(i=r[c]," "!==i);c--);return t.slice(0,c).trim()})(t,n,e):t},t.truncateRight=function(t,n){const e=t.length;return e>n?((t,n,e)=>{const r=t.split(""),o=r.length;let i,c=n;for(;c<o&&c>0&&(i=r[c]," "!==i);c++);return t.substring(c,e).trim()})(t,n,e):t},t.unZip=function(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.unZipObject=t=>{const n=[],e=[];return Tt(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},t.union=function(...t){return st(A(t))},t.uniqID=dr,t.unique=st,t.untilFalseArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!1===n(t[r],r))return!1;return!0},t.untilTrueArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!0===n(t[r],r))return!1;return!0},t.updateDimensions=Pr,t.upperCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace($n," ").trim().toUpperCase()},t.upperFirst=Jn,t.upperFirstAll=function(t){return t.replace(Kn,(t=>Jn(t)))},t.upperFirstLetter=Gn,t.upperFirstOnly=Qn,t.upperFirstOnlyAll=function(t){return t.replace(Kn,(t=>Qn(t)))},t.virtualStorage=yr,t.whileCompactMap=function(t,n,e=[],r){let o=0;for(;o<t.length;){const c=e.push(n(t[o],o,t,t.length,r));o++,i(c)&&e.push(c)}return t},t.whileEachArray=function(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t},t.whileMapArray=function(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t},t.without=function(t,n){if(!n)return t;const e=y(Set,n);return t.filter((t=>!e.has(t)))},t.words=function(t){return t.match(Vn)||[]},t.wrap=function(t,n){return(...e)=>n(t,...e)},t.xor=function(...t){const n=y(Map),e=[];return 2===t.length?v(t[0],t[1]):(s(t,((t,e)=>{s(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),w(n,(t=>{1===t.count&&e.push(t.child)})),e)},t.zip=function(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.zipObject=xn}));
//# sourceMappingURL=browser.js.map

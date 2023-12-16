!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("types/hasValue.js"),require("types/isPlainObject.js")):"function"==typeof define&&define.amd?define(["exports","types/hasValue.js","types/isPlainObject.js"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={},t.hasValue_js,t.isPlainObject_js)}(this,(function(t,n,e){"use strict";function r(t){return t.length=0,t}function o(t){return void 0===t}function i(t){return Boolean(t.length)}function s(t){return null===t}function c(t){return!o(t)&&!s(t)}function u(t){return t}function a(t,n,e,r){if(!t)return;const o=t.length;if(c(e))for(let i=0;i<o;i++)n.call(e,t[i],i,t,o,r);else for(let e=0;e<o;e++)n(t[e],e,t,o,r);return t}function f(t,n=u,e=[],r,o){return c(r)?a(t,((t,i,s,u)=>{const a=n.call(r,t,i,e,s,u,o);c(a)&&e.push(a)})):a(t,((t,i,s,u)=>{const a=n(t,i,e,s,u,r,o);c(a)&&e.push(a)})),e}async function l(t,n,e,r){if(!t)return;const o=t.length;if(c(e))for(let i=0;i<o;i++)await n.call(e,t[i],i,t,o,r);else for(let e=0;e<o;e++)await n(t[e],e,t,o,r);return t}async function h(t,n=u){const e=[];return await l(t,(async(t,r,o)=>{const i=await n(t,r,e,o);c(i)&&e.push(i)})),e}const{sign:p}=Math;function g(t){return-1===p(t)}function y(t,n,e,r){let o=t;for(;o<n;)r.push(o),o+=e;return r}function d(t,n,e,r){let o=t;for(;o>n;)r.push(o),o-=e;return r}const m=Array.isArray;const b=Reflect.construct;function A(t,n=[],e){const r=m(n)?n:[n];return e?b(t,r,e):b(t,r)}function w(t){return m(t)&&t||c(t)&&[t]||[]}function v(t){return t.flat(1/0)}function C(t,n){return t.forEach(n),t}function O(...t){const n=A(Map),e=[];return a(t,((t,e)=>{a(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),C(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function j(t,n=1,e=t.length){return t.splice(n,e)}function I(t,n,e){if(!t)return;const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function M(t,n){if(!t)return;const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function F(t,n,e){if(!t)return;const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}async function E(t,n,e){if(!t)return;const r=t.length;for(let o=0;o<r;o++)if(!1===await n(t[o],o,t,r,e))return!1;return!0}function S(t,n,e=[],r){return a(t,((t,o,i,s)=>{!0===n(t,o,e,i,s,r)&&e.push(t)})),e}async function x(t,n,e=[],r){return await l(t,(async(t,o,i,s)=>{!0===await n(t,o,e,i,s,r)&&e.push(t)})),e}const R=/\.|\[/,N=/]/g,T="";function B(t){return t.replace(N,T).split(R)}function P(t,n){if(!n)return!1;let e=n;return F(m(t)?t:B(t),(t=>(e=e[t],c(e)))),e}const U=Object.keys;function k(t){if(t)return U(t)}const $=Object.hasOwn;function D(t,...n){if(t)return F(n,(n=>{const e=B(n);if(1===e.length)return $(t,n);{const n=e.pop(),r=P(e,t);return!!r&&$(r,n)}}))}function L(t,n){return t?.constructor===n||!1}function V(t){return n=>L(n,t)}function q(t){return t?.constructor?.name}function _(t){return n=>q(n)===t||!1}function K(t){return function(n,...e){return e?t(n)&&F(e,t):t(n)}}const Z=_("Buffer"),z=K(Z),W=t=>!!c(t)&&"Object("===t.constructor.toString().trim().slice(9,16),G=(t,n)=>{if(t===n)return!0;if(z(t))return t.equals(n);if(t.toString()===n.toString())if(W(t)){const e=k(t);if(D(n,e))return F(e,(e=>G(t[e],n[e])))}else if(m(t)&&t.length===n.length)return F(t,((t,e)=>G(t,n[e])));return!1};const J=Math.max;function H(t,n,e=[],r,o){return c(r)?a(t,((t,i,s,c)=>{e[i]=n.call(r,t,i,e,s,c,o)})):a(t,((t,r,i,s)=>{e[r]=n(t,r,e,i,s,o)})),e}async function Q(t,n){const e=[];return await l(t,(async(t,r,o)=>{e[r]=await n(t,r,o)})),e}function X(t,n){return t-n}function Y(t,n){return n-t}const{floor:tt,random:nt}=Math;function et(t,n=0){return tt(nt()*(t-n))+n}const rt=Array.from;function ot(t,n,e){if(c(t))return rt(t,n,e)}function it(t,n=t.length){if(t.length<=1)return ot(t);const e=ot(t);let r,o,i=0;for(;i<n;)r=et(e.length-1,0),o=e[i],e[i]=e[r],e[r]=o,i++;return e}const st=Math.min;function ct(t,n,e){return e.indexOf(t)===n}function ut(t,n,e){return t!==e[n-1]}function at(t,n){return n?t.filter(ut):t.filter(ct)}function ft(t){return t.fill(0),t}const lt=t=>!!c(t)&&t instanceof Function,ht=_("Number"),pt=K(ht);const gt=V(String);const yt=Object.assign;function dt(t,n){if(W(n))yt(t,n);else if(lt(n)){const e=n.name;e?t[e]=n:yt(t,n)}else(gt(n)||pt(n))&&(t[n]=n);return t}function mt(t,...n){const e=n.length;for(let r=0;r<e;r++)dt(t,n[r]);return t}function bt(t,n){if(W(n))yt(t.prototype,n);else if(lt(n)){const e=n.name;e&&(t.prototype[e]=n)}else if(L(n)){const e=n.constructor?.name;e&&(t.prototype[e]=n)}else(gt(n)||pt(n))&&(t.prototype[n]=n);return t}function At(t,n,e,r,o){if(t[o]===r)return!0}function wt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):o.localeCompare(i)}function vt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i?o?o<i?-1:o>i?1:0:-1:1}function Ct(t,n="id",e){return t.sort(((t,r)=>vt(t,r,n,e)))}function Ot(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i?o?o<i?1:o>i?-1:0:1:-1}function jt(t,n="id",e){return t.sort(((t,r)=>Ot(t,r,n,e)))}function It(t,n){if(t)return gt(n)?t[n]:H(n,(n=>t[n]))}function Mt(t,n,e,r){const o=t[e],i=n[e];return o===i&&r?r(t,n,e):i.localeCompare(o)}function Ft(t){return n=>!!c(n)&&t.test(n)}const Et=Ft(/\.css$/),St=Ft(/\.html$/),xt=Ft(/\.js$/),Rt=Ft(/\.json$/);const Nt=async(t,n,e,r)=>{if(!t)return;const o=k(t);return c(e)?await l(o,((i,s,c,u)=>n.call(e,t[i],i,t,u,o,r))):await l(o,((e,i,s,c)=>n(t[e],e,t,c,o,r))),t};function Tt(t,n,e,r){if(!t)return;const o=k(t);return c(e)?a(o,((o,i,s,c)=>{n.call(e,t[o],o,t,c,s,r)})):a(o,((e,o,i,s)=>{n(t[e],e,t,s,i,r)})),t}const Bt=_("Set"),Pt=K(Bt);function Ut(t,n){if(Pt(t)){for(const e of t)n(e,t);return t}for(const[e,r]of t)n(r,e,t);return t}const kt=_("GeneratorFunction"),$t=K(kt);async function Dt(t,n,e){if(Pt(t)){for(const e of t)await n(e,t);return t}if($t(t))for await(const r of t(...e))await n(r,t);for(const[e,r]of t)await n(r,e,t);return t}const Lt=_("AsyncFunction"),Vt=K(Lt);function qt(t,n,e,r,o,i){return(s,u,a,f,l)=>{let h;const p=Vt(u);if(c(s)&&u)return h=m(s)?p?n:t:W(s)||lt(s)?p?r:e:o?p?i:o:$t(s)?i:p?r:e,h(s,u,a,f,l)}}const _t=qt(a,l,Tt,Nt,Ut,Dt);class Kt{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;_t(t,((t,e)=>{n[e]=function(...e){return this.value=t.call(n,n.value,...e),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}function Zt(t,n){if(!t)return;return F(k(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}function zt(){}const Wt=!1;function Gt(t,n){for(let e=0;e<t;e++)n(e)}const Jt=!0;class Ht{list=A(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,Jt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Qt=A(Ht);function Xt(t,n){return Qt.set(t,n)}const Yt=Reflect.apply;function tn(t,n,e){if(lt(t))return Yt(t,n,e)}function nn(t){return t?.constructor}function en(t,n=[]){const e=nn(t);return e===Function&&"function"===e.name?function(){}:A(e,n)}function rn(t,n=u,e){const r=e||en(t);if(m(t)||Pt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){o(n(e,r,t))}return r}const o=lt(r.set);for(const[e,i]of t){const s=n(i,e,r,t);o?r.set(e,s):r[e]=s}return r}async function on(t,n=u,e,r){if($t(t)){const e=[];for await(const o of t(...r))e.push(await n(o,e,t));return e}const o=e||en(t);if(m(t)||Pt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){r(await n(e,o,t))}return o}const i=lt(o.set);for await(const[e,r]of t){const s=await n(r,e,o,t);i?o.set(e,s):o[e]=s}return o}async function sn(t,n,e={}){if(t)return await Nt(t,(async(t,r,o,i,s)=>{e[r]=await n(t,r,e,o,i,s)})),e}function cn(t,n,e={},r,o){if(t)return c(r)?Tt(t,((t,i,s,c,u)=>{e[i]=n.call(r,t,i,e,s,c,u,o)})):Tt(t,((t,r,i,s,c)=>{e[r]=n(t,r,e,i,s,c,o)})),e}const un=qt(H,Q,cn,sn,rn,on);async function an(t,n){if(!t)return;return E(k(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}function fn(t,n=u){if(m(t)||Pt(t))for(const e of t){if(!1===n(e,t))return!1}else for(const[e,r]of t){if(!1===n(r,e,t))return!1}return!0}async function ln(t,n=u,e){if($t(t))for await(const r of t(...e)){if(!1===await n(r,t))return!1}else if(m(t)||Pt(t))for(const e of t){if(!1===await n(e,t))return!1}else for(const[e,r]of t){if(!1===await n(r,e,t))return!1}return!0}const hn=qt(F,E,Zt,an,fn,ln);const pn=Function.prototype;function gn(t){return pn.call.bind(t)}const yn=Object.getOwnPropertyNames,dn=Object.getOwnPropertyDescriptor,mn=Object.defineProperty,bn=gn(Object.hasOwnProperty),An=Object.is;const{random:wn}=Math;const{sign:vn}=Math;const Cn=Object.entries;async function On(t,n=u,e={}){return await Nt(t,(async(t,r,o,i,s)=>{const u=await n(t,r,e,o,i,s);c(u)&&(e[r]=u)})),e}function jn(t,n=u,e={}){return Tt(t,((t,r,o,i,s)=>{const u=n(t,r,e,o,i,s);c(u)&&(e[r]=u)})),e}function In(t,n,e={}){return Tt(t,((t,r,o,i,s)=>{!0===n(t,r,e,o,i,s)&&(e[r]=t)})),e}async function Mn(t,n,e={}){return await Nt(t,(async(t,r,o,i,s)=>{!0===await n(t,r,e,o,i,s)&&(e[r]=t)})),e}const Fn=/[()[\]{}*+?^$|#.,/\\\s-]/g;function En(t){return t.replace(Fn,"\\$&")}function Sn(t,n){return n?Sn(H(t,En)):RegExp(t.join("|"))}const xn=_("RegExp"),Rn=K(xn);function Nn(t){if(!t)return;if(e.isPlainObject(t))return k(t).length;const r=t.length;if(n.hasValue(r))return r;const o=t.size;return n.hasValue(r)?o:k(t).length}const Tn=/[ _-]+/g;const Bn=/[ _-]+/g,Pn=/[ ]+/g;const Un=/[ _-]+/g,kn=/[ ]+/g;const $n=/[ _-]+/g;const Dn=/[ _-]+/g;function Ln(t,n=1){return t.substring(n)}const Vn=/%(?![\da-f]{2})/gi,qn=/&/g,_n=/</g,Kn=/>/g,Zn=/"/g;function zn(t){return decodeURIComponent(t.replace(Vn,(()=>"%25")))}function Wn(t){return t.replace(qn,"&amp;").replace(_n,"&lt;").replace(Kn,"&gt;").replace(Zn,"&quot;")}const Gn=/\S+/g,Jn=/\w+/g;const Hn=/\w+/g;function Qn(t){return t[0].toUpperCase()}function Xn(t){return Qn(t)+Ln(t)}function Yn(t){return Qn(t)+Ln(t).toLowerCase()}function te(t){return nn(t)?.name}const ne=_("Map"),ee=K(ne),re=/Array/,oe="Array";function ie(t){if(t){const n=te(t);if(re.test(n)&&n!==oe)return!0}return!1}function se(t){return!c(t)}const ce=_("BigInt"),ue=K(ce),ae=_("Boolean"),fe=K(ae),le=_("ArrayBuffer"),he=K(le);const pe=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");const ge=_("Date"),ye=K(ge);function de(t){return!1===t}const me=_("Float32Array"),be=K(me),Ae=_("Float64Array"),we=K(Ae),{isInteger:ve}=Number,Ce=ve,Oe=_("Int16Array"),je=K(Oe),Ie=_("Int32Array"),Me=K(Ie),Fe=_("Int8Array"),Ee=K(Fe);function Se(t){return!!t&&t instanceof Promise}function xe(t){return!!t&&(Se(t)||Vt(t)||$t(t))}const{isSafeInteger:Re}=Number,Ne=Re;const Te=_("Uint16Array"),Be=K(Te),Pe=_("Uint32Array"),Ue=K(Pe),ke=_("Uint8Array"),$e=K(ke),De=_("Uint8ClampedArray"),Le=K(De),Ve=_("WeakMap"),qe=K(Ve),_e=void 0!==globalThis.Deno,Ke=void 0!==globalThis.process&&process.versions&&process.versions.node;function Ze(t,n=!0){return Boolean(t)&&n}function ze(t,n){return de(G(t,n))}const We=JSON;const Ge=We.stringify;function Je(t,n,e){const r=globalThis.options||e;let o;return lt(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Ge(t)}\n\t\tExpected: ${Ge(n)}`,r)}async function He(t,n,e){const r=await t;return!(lt(n)&&!1===await n(r,e))&&!ze(r,n)||Je(r,n,e)}const Qe=globalThis.structuredClone;async function Xe(t,n=u,e,r){if($t(t)){const e=[];for await(const o of t(...r)){const r=await n(o,e,t);c(r)&&e.push(r)}return e}const o=e||en(t);if(m(t)||Pt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){const i=await n(e,o,t);c(i)&&r(i)}return o}const i=lt(o.set);for await(const[e,r]of t){const s=await n(r,e,o,t);c(s)&&(i?o.set(e,s):o[e]=s)}return o}function Ye(t,n=u,e){const r=e||en(t);if(m(t)||Pt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){const i=n(e,r,t);c(i)&&o(i)}return r}const o=lt(r.set);for(const[e,i]of t){const s=n(i,e,r,t);c(s)&&(o?r.set(e,s):r[e]=s)}return r}const tr=qt(f,h,jn,On,Ye,Xe);function nr(t,n=u,e){const r=e||en(t);if(m(t)||Pt(t)){const e=r.push||r.add,o=e&&e.bind(r);for(const e of t){!0===n(e,r,t)&&o(e)}}else{const e=lt(r.set);for(const[o,i]of t){!0===n(i,o,r,t)&&(e?r.set(o,i):r[o]=i)}}return r}async function er(t,n=u,e,r){if($t(t)){const e=[];for await(const o of t(...r))!0===await n(o,e,t)&&e.push(o);return e}const o=e||en(t);if(m(t)||Pt(t)){const e=o.push||o.add,r=e&&e.bind(o);for(const e of t){!0===await n(e,o,t)&&r(e)}}else{const e=lt(o.set);for await(const[r,i]of t){!0===await n(i,r,o,t)&&(e?o.set(r,i):o[r]=i)}}return o}const rr=qt(S,x,In,Mn,nr,er);function or(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const ir=or(a),sr=or(I);function cr(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const ur=cr(l),ar=cr(M);const fr=Ft(/\./);class lr{list=A(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,Jt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const hr=A(lr);function pr(t){return n.hasValue(t)?pr[t]:k(pr)}const gr=globalThis.navigator?.userAgentData;if(gr)Tt(gr,((t,n)=>{fe(t)&&t&&(pr[n]=t)})),a(gr.brands,(t=>{pr[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");a(t.split(/ |\//),(t=>{pr[t]=!0}))}class yr{static models=new Map;constructor(t,n){c(n)?(mt(this,n),this.modelName=t,yr.models.set(t,n)):mt(this,t)}delete(t){yr.models.delete(t||this.modelName)}set(t){t&&(this.modelName=t),yr.models.set(t||this.modelName,this)}has(t){return yr.models.has(t||this.modelName)}get(t){return yr.models.get(t||this.modelName)}}class dr{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;Tt(t,(n=>{t[n]=new dr(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new dr(e),!0)})}}class mr{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return c(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,e=this.totalActive===this.totalFree;n&&e&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const br=A(mr);class Ar{constructor(t=new Map){this.items=t}getItem(t){return this.isMap?this.items.get(t):this.items[t]}get(...t){return this.getItem(...t)}hasItem(t){return this.isMap?this.items.has(t):n.hasValue(this.items[t])}has(...t){return this.hasItem(...t)}setItem(t,n){return this.isMap?this.items.set(t,n):this.items[t]=n,this}set(...t){return this.setItem(...t)}clear(){return this.isMap?this.items.clear():this.items=en(this.items),this}removeItem(t){return this.isMap?this.items.delete(t):this.items[t]=null,this}remove(...t){return this.removeItem(...t)}}t.Chain=Kt,t.Intervals=lr,t.Model=yr,t.Store=dr,t.Timers=Ht,t.UniqID=mr,t.VirtualStorage=Ar,t.add=function(t,n){return t+n},t.after=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)},t.apply=tn,t.arrayToRegex=Sn,t.arraysToObject=function(t,n){const e={};return a(t,((t,r)=>{e[n[r]]=t})),e},t.ary=function(t,n){return(...e)=>t(...e.splice(0,n))},t.assert=function(t,n,e){return xe(t)||xe(n)?He(t,n,e):!(lt(n)&&!1===n(t,e))&&!ze(t,n)||Je(t,n,e)},t.assertAsync=He,t.assign=mt,t.assignToClass=bt,t.assignToObject=dt,t.before=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)},t.bindAll=function(t,n,e){const r=un(t,(t=>lt(t)?t.bind(n):t));return e?mt(e,r):r},t.cacheNativeMethod=gn,t.calcProgress=function(t,n){return 0!==t&&(0===n?0:n/t*100)},t.camelCase=function(t){let n="";return t.replace(Tn," ").trim().split(" ").forEach(((t,e)=>{n+=0===e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n},t.chain=function(t){return A(Kt,[t])},t.chunk=function(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=function(t){if(t){if(z(t))return ft(t);if(m(t))return r(t);t.clear?t.clear():t.length&&(t.length=0)}return t},t.clearArray=r,t.clearBuffer=ft,t.clearIntervals=function(){Gt(setTimeout(zt,0),(t=>{hr.remove(t)}))},t.clearTimers=function(){Gt(setTimeout(zt,0),(t=>{Qt.remove(t)}))},t.clone=function(t){return Qe(t)},t.cloneArray=function(t){return t.slice()},t.cloneType=en,t.compact=function(t){if(W(t)){const n=k(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],i=t[e];Ze(i)&&(r[e]=i)}return r}return t.filter((t=>Ze(t)))},t.compactKeys=function(t){const n=[];return Tt(t,((t,e)=>{c(t)&&n.push(e)})),n},t.compactMap=tr,t.compactMapArray=f,t.compactMapAsyncArray=h,t.compactMapAsyncObject=On,t.compactMapObject=jn,t.concurrent=function(t,n,e){const r=t.length,o=[];for(let i=0;i<r;i++)o[i]=n(t[i],i,t,r,e);return Promise.all(o)},t.concurrentStatus=function(t,n,e){const r=t.length,o=[];for(let i=0;i<r;i++)o[i]=n(t[i],i,t,r,e);return Promise.allSettled(o)},t.construct=A,t.constructorName=q,t.countBy=function(t,n){const e={};let r;return a(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e},t.countKey=function(t,n){let e=0;return a(t,(t=>{t[n]&&e++})),e},t.countWithoutKey=function(t,n){let e=0;return a(t,(t=>{t[n]||e++})),e},t.curry=function(t,n=t.length){const e=[],o=(...i)=>{if(e.push(...i),e.length===n){const n=t(...e);return r(e),n}return o};return o},t.curryRight=function(t,n=t.length){const e=[],o=(...i)=>{if(e.unshift(...i),e.length===n){const n=t(...e);return r(e),n}return o};return o},t.debounce=function(t,n){function e(...t){e.id!==Wt&&Qt.remove(e.id),e.id=Xt((()=>{e.callable(...t),e.id=Wt}),n)}return e.id=Wt,e.callable=t.bind(e),e.clear=()=>{e.id!==Wt&&(Qt.remove(e.id),e.id=Wt)},e},t.deduct=function(t){return t-1},t.defProp=mn,t.difference=O,t.divide=function(t,n){return t/n},t.drop=j,t.dropRight=(t,n=1,e=t.length)=>j(t,0,e-n),t.each=_t,t.eachArray=a,t.eachAsyncArray=l,t.eachAsyncObject=Nt,t.eachObject=Tt,t.eachRight=I,t.eachRightAsync=M,t.ensureArray=w,t.ensureBuffer=function(t){return z(t)&&t||c(t)&&Buffer.from(t)||Buffer.alloc(0)},t.escapeRegex=En,t.escapeRegexRegex=Fn,t.every=hn,t.everyArg=function(...t){return Vt(t[0])?async function(...n){return hn(t,(async t=>hn(n,(async n=>t(n)))))}:function(...n){return hn(t,(t=>hn(n,(n=>t(n)))))}},t.everyArray=F,t.everyAsyncArray=E,t.everyAsyncObject=an,t.everyObject=Zt,t.extendClass=function(t,...n){const e=n.length;for(let r=0;r<e;r++)bt(t,n[r]);return t},t.falsy=Wt,t.filter=rr,t.filterArray=S,t.filterAsyncArray=x,t.filterAsyncObject=Mn,t.filterObject=In,t.findIndex=function(t,n,e="id"){const r=t.findIndex(((t,r)=>At(t,0,0,n,e)));return-1!==r&&r},t.findIndexCache=At,t.findItem=function(t,n,e="id"){const r=t.find(((t,r)=>At(t,0,0,n,e)));return-1!==r&&r},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){if(!t)return;let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(w(n))),[]);return e},t.flattenDeep=v,t.flow=ir,t.flowAsync=ur,t.flowAsyncRight=ar,t.flowRight=sr,t.forEach=C,t.forEachAsync=async function(t,n){const e=[],r=[];let o=0;t.forEach(((t,n)=>{e[o]=t,r[o]=t,o++}));for(let t=0;t<o;t++)await n(e[t],r[t]);return t},t.forMap=function(t,n){const e=en(t),r=e.push||e.add;if(r&&lt(r)){const o=r.bind(e);t.forEach((t=>{const r=n(t,e);o(r)}))}else lt(e.set)?t.forEach(((t,r)=>{const o=n(t,r,e);e.set(r,o)})):t.forEach(((t,r)=>{const o=n(t,r,e);e[r]=o}));return e},t.forOf=Ut,t.forOfAsync=Dt,t.forOfCompactMap=Ye,t.forOfCompactMapAsync=Xe,t.forOfEvery=fn,t.forOfEveryAsync=ln,t.forOfFilter=nr,t.forOfFilterAsync=er,t.forOfMap=rn,t.forOfMapAsync=on,t.generateLoop=qt,t.get=P,t.getEntries=function(t){if(c(t))return Cn(t)},t.getFileExtension=function(t){if(t)return t.substring(t.lastIndexOf(".")+1)},t.getFilename=function(t){if(t)return t.substring(t.lastIndexOf("/")+1)},t.getHighest=function(t,n="id"){return Ct(t,n)[0]},t.getLowest=function(t,n){return jt(t,n,!1)[0]},t.getNumberInsertIndex=function(t,n){let e=0;return F(t,((t,r)=>(e=r,n>=t&&(e=r+1,!0)))),e},t.getPropDesc=dn,t.getPropNames=yn,t.getType=nn,t.getTypeName=te,t.groupBy=function(t,n){const e={};return a(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e},t.has=function t(n,e,r){if(se(n)||se(e))return!1;if(gt(n))return gt(e)?n.includes(e,r):Rn(e)?e.test(n):lt(e)?Boolean(e(n)):hn(e,(e=>Boolean(t(n,e))));if(m(n)){if(gt(e))return n.includes(e,r);if(Rn(e))return hn(n,(t=>t.test(e)));if(m(e))return hn(e,(e=>Boolean(t(n,e))))}return!1},t.hasAnyKeys=function(t,...n){if(t)return Boolean(n.find((n=>{const e=B(n);if(1===e.length)return $(t,n);{const n=e.pop(),r=P(e,t);return!!r&&$(r,n)}})))},t.hasDot=fr,t.hasKeys=D,t.hasLength=i,t.hasProp=bn,t.hasValue=c,t.htmlEntities=Wn,t.ifInvoke=function(t,...n){if(lt(t))return t(...n)},t.ifNotAssign=(t,n,e)=>(n&&!c(t[n])&&(t[n]=e),t),t.ifValue=function(t,n,e,r){if(c(t)){if(lt(n))return e?tn(n,e,r):n(...r);if(W(n))return n[e]=t,n}},t.inAsync=async function(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t},t.inSync=(t,n)=>_t(t,(t=>{t(n)})),t.increment=function(t){return t+1},t.indexBy=function(t,n="id"){const e={};return a(t,(t=>{e[t[n]]=t})),e},t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)},t.intersection=function(t,...n){return f(t,(t=>{if(F(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return hr.set(t,n)},t.intervals=hr,t.invert=function(t,n={}){if(t)return Tt(t,((t,e)=>{n[t]=e})),n},t.invokeArray=function(t,n,e){if(!t)return;const r=t.length;if(c(e))for(let o=0;o<r;o++)t[o].call(e,n);else for(let e=0;e<r;e++)t[e](n);return t},t.invokeCollection=function(t,n,e,r){return H(t,r?(t,o)=>t[n].call(r,e):(t,r)=>t[n](e))},t.invokeCollectionAsync=function(t,n,e,r){return Q(t,r?t=>t[n].call(r,e):async t=>t[n](e))},t.isArguments=function(t){return!!c(t)&&"[object Arguments]"===t.toString()},t.isArray=m,t.isArrayBuffer=he,t.isArrayBufferCall=le,t.isArrayLike=function(t,n){if(se(t)||lt(t))return!1;if(m(t)||ie(t))return!0;const e=t.length;if(!se(e)||!pt(e)||e<0)return!1;if(n){const n=k(t);return!!n&&hn(n,((t,n)=>n>=0&&pt(n)))}return!0},t.isAsync=Vt,t.isAsyncCall=Lt,t.isBigInt=ue,t.isBigIntCall=ce,t.isBoolean=fe,t.isBooleanCall=ae,t.isBuffer=z,t.isBufferCall=Z,t.isChild=function(t,n){return!(!t||!n)&&t instanceof n},t.isCloneable=function(t){if(c(t)){const n=t?.constructor?.name;return pe.test(n)}return!1},t.isConstructor=L,t.isConstructorFactory=V,t.isConstructorNameFactory=_,t.isDate=ye,t.isDateCall=ge,t.isDeno=_e,t.isEmpty=function(t){return gt(t)||m(t)?!i(t):W(t)?!Nn(t):!c(t)},t.isEqual=G,t.isF32=be,t.isF32Call=me,t.isF64=we,t.isF64Call=Ae,t.isFalse=de,t.isFalsy=function(t,n=!0){return!1===Boolean(t)&&n},t.isFileCSS=Et,t.isFileHTML=St,t.isFileJS=xt,t.isFileJSON=Rt,t.isFloat=Ce,t.isFunction=lt,t.isGenerator=$t,t.isGeneratorCall=kt,t.isI16=je,t.isI16Call=Oe,t.isI32=Me,t.isI32Call=Ie,t.isI8=Ee,t.isI8Call=Fe,t.isIterable=function(t){return c(t)&&"function"==typeof t[Symbol.iterator]},t.isKindAsync=xe,t.isMap=ee,t.isMapCall=ne,t.isMatchArray=function(t,n){return t.length===n.length&&F(t,((t,e)=>G(n[e],t)))},t.isMatchObject=(t,n)=>{if(t===n)return!0;const e=k(t),r=k(n);return e.length===r.length&&F(e,(e=>t[e]===n[e]))},t.isNegative=g,t.isNodejs=Ke,t.isNotArray=function(t){return!m(t)},t.isNotNumber=function(t){return!pt(t)},t.isNotString=function(t){return!gt(t)},t.isNull=s,t.isNumber=pt,t.isNumberCall=ht,t.isNumberEqual=function(t,n){return t===n},t.isNumberInRange=function(t,n,e){return t>n&&t<e},t.isNumberNotInRange=function(t,n,e){return t<n||t>e},t.isParent=function(t,n){return!!(t&&n&&n.call)&&t instanceof n},t.isPlainObject=W,t.isPositive=function(t){return 1===vn(t)},t.isPrimitive=function(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n},t.isPromise=Se,t.isRegex=Rn,t.isRegexCall=xn,t.isRelated=function(t,n){return!se(t)&&!se(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)},t.isSafeInt=Ne,t.isSame=An,t.isSameType=function(t,n){const e=nn(t),r=nn(n);return e===r&&e.name===r.name},t.isSet=Pt,t.isSetCall=Bt,t.isString=gt,t.isTrue=function(t){return!0===t},t.isTruthy=Ze,t.isTypeFactory=K,t.isTypedArray=ie,t.isU16=Be,t.isU16Call=Te,t.isU32=Ue,t.isU32Call=Pe,t.isU8=$e,t.isU8C=Le,t.isU8CCall=De,t.isU8Call=ke,t.isUndefined=o,t.isWeakMap=qe,t.isWeakMapCall=Ve,t.isZero=function(t){return 0===t},t.jsonParse=function(t,n){if(t)return We.parse(t,n)},t.kebabCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Bn," ").trim().toLowerCase().replace(Pn,"-")},t.keys=k,t.largest=function(t){return J(...t)},t.last=function(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]},t.lowerCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Dn," ").trim().toLowerCase()},t.map=un,t.mapArray=H,t.mapAsyncArray=Q,t.mapAsyncObject=sn,t.mapObject=cn,t.mapRightArray=function(t,n,e=[],r){let o=0;const i=t.length;for(let s=i-1;s>=0;s--)e[o]=n(t[s],s,t,i,r),o++;return e},t.mapWhile=function(t,n,e=[],r){const o=t.length;for(let i=0;i<o;i++){const s=t[i];if(!1===n(s,i,e,t,o,r))break;e[i]=s}return e},t.merge=function t(n,...e){return _t(e,(e=>{_t(e,((e,r)=>{if(n[r]&&(W(e)||m(e)||e.forEach))return t(n[r],e);n[r]=e}))})),n},t.model=function(t,n){return c(n)?A(yr,[t,n]):P(t,yr.models)},t.multiply=function(t,n){return t*n},t.negate=function(t){return(...n)=>!t(...n)},t.noValue=se,t.noop=zt,t.notEqual=ze,t.nthArg=function(t=0){return(...n)=>n[t]},t.objectAssign=yt,t.objectEntries=Cn,t.objectSize=Nn,t.omit=function(t,n){if(!t)return{};if(m(n)){const e=Sn(n);return In(t,((t,n)=>!e.test(n)))}if(Rn(n))return In(t,((t,e)=>!n.test(e)));if(gt(n))return In(t,((t,e)=>e!==n));if(pt(n)){const e=n.toString();return In(t,((t,n)=>n!==e))}return lt(n)?In(t,((t,e)=>!n(t,e))):yt({},t)},t.once=t=>{let n;return(...e)=>(c(n)||(n=t(...e)),n)},t.onlyUnique=ct,t.over=function(t){return(...n)=>un(t,(t=>t(...n)))},t.overEvery=function(t){return n=>hn(t,(t=>t(n)))},t.pair=function(t,n){return[t,n]},t.partition=function(t,n){const e=[];return[f(t,((t,r)=>{if(n(t,r))return t;e.push(t)})),e]},t.pick=(t,n,e={})=>{if(t)return a(n,(n=>{e[n]=t[n]})),e},t.pluck=function(t,n){return H(t,(t=>It(t,n)))},t.pluckObject=It,t.promise=function(t){return new Promise(t)},t.propertyMatch=(t,n,e=k(t))=>F(e,(e=>G(t[e],n[e]))),t.randomFloat=function(t,n=0){return wn()*(t-n)+n},t.randomInt=et,t.range=function(t,n,e=1,r=[]){return g(e)?r:t<n?y(t,n,e,r):d(t,n,e,r)},t.rangeDown=d,t.rangeUp=y,t.rawURLDecode=zn,t.reArg=function(t,n){return(...e)=>t(...n.map((t=>e[t])))},t.regexTestFactory=Ft,t.remainder=function(t,n){return t%n},t.remove=function(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t},t.removeBy=function(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t},t.replaceList=function(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Ln,t.returnValue=u,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return it(t);if(1===n)return[t[et(e-1,0)]];const r=[],o={};let i,s=0;for(;s<n;)i=et(t.length-1,0),o[i]||(r.push(t[i]),o[i]=!0,s++);return r},t.sanitize=function(t){return Wn(zn(t))},t.setKey=function(t,n,e){return n&&W(t)||pt(n)&&m(t)?t[n]=e:t.set?t.set(n,e):t.push?t.push(e):t.add?t.add(e):t[n]=e,t},t.setValue=function(t,n,e){return pt(e)&&m(t)?t[e]=n:t.push?t.push(n):t.add?t.add(n):t[e]=n,t},t.shuffle=it,t.smallest=function(t){return st(...t)},t.snakeCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace(Un," ").trim().toLowerCase().replace(kn,"_")},t.sortCollectionAlphabetically=function(t,n="id",e){return t.sort(((t,r)=>wt(t,r,n,e)))},t.sortCollectionAlphabeticallyReverse=function(t,n="id",e){return t.sort(((t,r)=>Mt(t,r,n,e)))},t.sortCollectionAscending=Ct,t.sortCollectionAscendingFilter=vt,t.sortCollectionDescending=jt,t.sortCollectionDescendingFilter=Ot,t.sortNumberAscending=function(t){return t.sort(X)},t.sortNumberDescening=function(t){return t.sort(Y)},t.sortObjectsAlphabetically=wt,t.sortObjectsAlphabeticallyReverse=Mt,t.sortUnique=ut,t.stringify=Ge,t.stubArray=()=>[],t.stubFalse=()=>Wt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Jt,t.subtract=X,t.subtractAll=function(t){return t.reduce(((t,n)=>t-n),0)},t.subtractReverse=Y,t.sumAll=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.takeRight=function(t,n=1){const e=t.length;return t.slice(e-n,e)},t.throttle=function(t,n){function e(...t){e.id?e.shouldThrottle=Jt:(e.callable(...t),e.id=Xt((()=>{e.shouldThrottle&&e.callable(...t),e.id=Wt}),n))}return e.id=Wt,e.callable=t.bind(e),e.clear=()=>{Qt.remove(e.id),e.id=Wt},e},t.timer=Xt,t.timers=Qt,t.times=Gt,t.timesAsync=async function(t,n){for(let e=0;e<t;e++)await n(t)},t.timesMap=function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e},t.timesMapAsync=async function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e},t.toArray=ot,t.toPath=B,t.toggle=function(t,n=!0,e=!1){return G(n,t)?e:n},t.tokenize=function(t){return t.match(Gn)||[]},t.truncate=function(t,n){const e=t.length;return e>n?((t,n,e)=>{const r=t.split(""),o=r.length;let i,s=e-n;for(;s<o&&s>=0&&(i=r[s]," "!==i);s--);return t.slice(0,s).trim()})(t,n,e):t},t.truncateRight=function(t,n){const e=t.length;return e>n?((t,n,e)=>{const r=t.split(""),o=r.length;let i,s=n;for(;s<o&&s>0&&(i=r[s]," "!==i);s++);return t.substring(s,e).trim()})(t,n,e):t},t.truth=Jt,t.unZip=function(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.unZipObject=t=>{const n=[],e=[];return Tt(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},t.union=function(...t){return at(v(t))},t.uniqID=br,t.unique=at,t.untilFalseArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!1===n(t[r],r))return!1;return!0},t.untilTrueArray=function(t,n){const e=t.length;for(let r=0;r<e;r++)if(!0===n(t[r],r))return!1;return!0},t.upperCase=function(t){return t.replace(/([A-Z]+)/g," $1").replace($n," ").trim().toUpperCase()},t.upperFirst=Xn,t.upperFirstAll=function(t){return t.replace(Hn,(t=>Xn(t)))},t.upperFirstLetter=Qn,t.upperFirstOnly=Yn,t.upperFirstOnlyAll=function(t){return t.replace(Hn,(t=>Yn(t)))},t.virtualStorage=function(t){return new Ar(t)},t.whileCompactMap=function(t,n,e=[],r){let o=0;for(;o<t.length;){const i=e.push(n(t[o],o,t,t.length,r));o++,c(i)&&e.push(i)}return t},t.whileEachArray=function(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t},t.whileMapArray=function(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t},t.without=function(t,n){if(!n)return t;const e=A(Set,n);return t.filter((t=>!e.has(t)))},t.words=function(t){return t.match(Jn)||[]},t.wrap=function(t,n){return(...e)=>n(t,...e)},t.xor=function(...t){const n=A(Map),e=[];return 2===t.length?O(t[0],t[1]):(a(t,((t,e)=>{a(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),C(n,(t=>{1===t.count&&e.push(t.child)})),e)},t.zip=function(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.zipObject=(t,n)=>{const e={};return a(t,((t,r)=>{e[t]=n[r]})),e}}));
//# sourceMappingURL=basic.js.map

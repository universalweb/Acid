function n(n,t=1){const r=[];let e=0;return n.forEach(((n,o)=>{o%t||(r.push([]),o&&e++),r[e].push(n)})),r}function t(n){return n.length=0,n}function r(n){return n.slice()}function e(n){return void 0===n}function o(n){return Boolean(n.length)}function u(n){return null===n}function c(n){return!e(n)&&!u(n)}function i(n){return n}function s(n,t,r){if(!n)return;const e=n.length;for(let o=0;o<e;o++)t(n[o],o,n,e,r);return n}function f(n,t=i,r=[],e){return s(n,((n,o,u,i)=>{const s=t(n,o,r,u,i,e);c(s)&&r.push(s)})),r}async function a(n,t){if(!n)return;const r=n.length;for(let e=0;e<r;e++)await t(n[e],e,n,r);return n}async function l(n,t=i){const r=[];return await a(n,(async(n,e,o)=>{const u=await t(n,e,r,o);c(u)&&r.push(u)})),r}function h(n,t,r){const e=[];let o=n;for(;o<t;)e.push(o),o+=r;return e}function p(n,t,r){const e=r<0?-1*r:r,o=[];let u=n;for(;u>t;)o.push(u),u-=e;return o}function d(n,t,r=1){return n<t?h(n,t,r):p(n,t,r)}function g(n,t){return n.forEach(t),n}const m=Array.isArray;function y(n){return m(n)&&n||c(n)&&[n]||[]}function w(n){return n.flat(1/0)}const b=Reflect.construct;function v(n,t=[],r){const e=m(t)?t:[t];return r?b(n,e,r):b(n,e)}function A(...n){const t=v(Map),r=[];return s(n,((n,r)=>{s(n,((n,e)=>{let o=t.get(n);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:n},t.set(n,o)}))})),g(t,(n=>{1===n.count&&0===n.parentIndex&&r.push(n.child)})),r}function E(n,t,r=n.length){return n.splice(t,r)}const I=(n,t,r=n.length)=>E(n,0,r-t);function x(n,t,r){if(!n)return;const e=n.length;for(let o=e-1;o>=0;o--)t(n[o],o,n,e,r);return n}async function O(n,t){if(!n)return;const r=n.length;for(let e=r-1;e>=0;e--)await t(n[e],e,n,r);return n}function j(n,t,r){if(!n)return;const e=n.length;for(let o=0;o<e;o++)if(!1===t(n[o],o,n,e,r))return!1;return!0}async function B(n,t,r){if(!n)return;const e=n.length;for(let o=0;o<e;o++)if(!1===await t(n[o],o,n,e,r))return!1;return!0}function C(n,t,r=[],e){return s(n,((n,o,u,c)=>{!0===t(n,o,r,u,c,e)&&r.push(n)})),r}async function $(n,t,r=[],e){return await a(n,(async(n,o,u,c)=>{!0===await t(n,o,r,u,c,e)&&r.push(n)})),r}function S(n,t){return t?n.slice(0,t):n[0]}function F(n,t=1){if(!n)return;let r=n;for(let n=0;n<t;n++)r=r.reduce(((n,t)=>n.concat(y(t))),[]);return r}function M(n){return n.slice(0,n.length-1)}function R(n,...t){return f(n,(n=>{if(j(t,(t=>t.includes(n))))return n}))}const T=Object.keys;function U(n){if(n)return T(n)}const P=/\.|\[/,N=/]/g,D="";function L(n){return n.replace(N,D).split(P)}function k(n,t){if(!t)return!1;let r=t;return j(m(n)?n:L(n),(n=>(r=r[n],c(r)))),r}const V=Object.hasOwn;function _(n,...t){if(n)return j(t,(t=>{const r=L(t);if(1===r.length)return V(n,t);{const t=r.pop(),e=k(r,n);return!!e&&V(e,t)}}))}function q(n,...t){if(n)return Boolean(t.find((t=>{const r=L(t);if(1===r.length)return V(n,t);{const t=r.pop(),e=k(r,n);return!!e&&V(e,t)}})))}const G=n=>!!c(n)&&"Object("===n.constructor.toString().trim().slice(9,16),J=(n,t)=>{if(n===t)return!0;if(n.toString()===t.toString())if(G(n)){const r=U(n);if(_(t,r))return j(r,(r=>J(n[r],t[r])))}else if(m(n)&&n.length===t.length)return j(n,((n,r)=>J(n,t[r])));return!1};function W(n,t){return n.length===t.length&&j(n,((n,r)=>J(t[r],n)))}const z=Math.max;function H(n){return z(...n)}function K(n,t){const r=n.length;return t?n.slice(r-t,r):n[r-1]}function Q(n,t,r=[],e){return s(n,((n,o,u,c)=>{r[o]=t(n,o,r,u,c,e)})),r}async function X(n,t){const r=[];return await a(n,(async(n,e,o)=>{r[e]=await t(n,e,o)})),r}function Y(n,t,r=[],e){let o=0;const u=n.length;for(let c=u-1;c>=0;c--)r[o]=t(n[c],c,n,u,e),o++;return r}function Z(n,t,r=[],e){const o=n.length;for(let u=0;u<o;u++){const c=n[u];if(!1===t(c,u,r,n,o,e))break;r[u]=c}return r}function nn(n,t){return n-t}function tn(n){return n.sort(nn)}function rn(n,t){const r={};return s(n,((n,e)=>{r[t[e]]=n})),r}function en(n,t){const r=[];return[f(n,(n=>{if(t(n))return n;r.push(n)})),r]}function on(n,t){return t-n}function un(n){return n.sort(on)}function cn(n,t){let r=n.length;for(let e=0;e<r;e++){const o=n[e];t.includes(o)&&(n.splice(e,1),e--,r--)}return n}function sn(n,t){let r=n.length;for(let e=0;e<r;e++){t(n[e],e)&&(n.splice(e,1),e--,r--)}return n}function fn(n){return n.slice(1,n.length)}function an(n,t){return n[n.length-1-t]}const{floor:ln,random:hn}=Math;function pn(n,t=0){return ln(hn()*(n-t))+t}const dn=Array.from;function gn(n,t){return n===t}function mn(n,t=n.length){if(n.length<=1)return dn(n);const r=dn(n);let e,o,u=0;for(;u<t;)e=pn(r.length-1,0),o=r[u],r[u]=r[e],r[e]=o,u++;return r}function yn(n,t){if(!n)return!1;const r=n.length;if(r===t||t>r)return mn(n);if(1===t)return[n[pn(r-1,0)]];const e=[],o={};let u,c=0;for(;c<t;)u=pn(n.length-1,0),o[u]||(e.push(n[u]),o[u]=!0,c++);return e}const wn=Math.min;function bn(n){return wn(...n)}function vn(n,t){let r=0;return j(n,((n,e)=>(r=e,t>=n&&(r=e+1,!0)))),r}function An(n,t=1){return n.slice(0,t)}function En(n,t=1){const r=n.length;return n.slice(r-t,r)}function In(n,t,r){return r.indexOf(n)===t}function xn(n,t,r){return n!==r[t-1]}function On(n,t){return t?n.filter(xn):n.filter(In)}function jn(...n){return On(w(n))}function Bn(n,t){const r=n.length;for(let e=0;e<r;e++)if(!1===t(n[e],e))return!1;return!0}function Cn(n,t){const r=n.length;for(let e=0;e<r;e++)if(!0===t(n[e],e))return!1;return!0}function $n(n,t,r=[],e){let o=0;for(;o<n.length;){const u=r.push(t(n[o],o,n,n.length,e));o++,c(u)&&r.push(u)}return n}function Sn(n,t,r){let e=0;for(;e<n.length;)t(n[e],e,n,n.length,r),e++;return n}function Fn(n,t,r=[],e){let o=0;for(;o<n.length;)r.push(t(n[o],o,n,n.length,e)),o++;return n}function Mn(n,t){if(!t)return n;const r=v(Set,t);return n.filter((n=>!r.has(n)))}function Rn(...n){const t=v(Map),r=[];return 2===n.length?A(n[0],n[1]):(s(n,((n,r)=>{s(n,((n,e)=>{let o=t.get(n);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:n},t.set(n,o)}))})),g(t,(n=>{1===n.count&&r.push(n.child)})),r)}function Tn(...n){return n[0].map(((t,r)=>n.map((n=>n[r]))))}function Un(n){return n[0].map(((t,r)=>n.map((n=>n[r]))))}function Pn(n,t){return n?.constructor===t||!1}function Nn(n){return t=>Pn(t,n)}function Dn(n){return n?.constructor?.name}function Ln(n){return t=>Dn(t)===n||!1}function kn(n){return function(t,...r){return r?n(t)&&j(r,n):n(t)}}const Vn=Ln("Buffer"),_n=kn(Vn);function qn(n){return _n(n)&&n||c(n)&&Buffer.from(n)||Buffer.alloc(0)}function Gn(n,t){const r={};let e;return s(n,(n=>{e=t(n),r[e]||(r[e]=0),r[e]++})),r}function Jn(n,t){let r=0;return s(n,(n=>{n[t]&&r++})),r}function Wn(n,t){let r=0;return s(n,(n=>{n[t]||r++})),r}function zn(n,t,r,e,o){if(n[o]===e)return!0}function Hn(n,t,r="id"){const e=n.findIndex(((n,e)=>zn(n,0,0,t,r)));return-1!==e&&e}function Kn(n,t,r="id"){const e=n.find(((n,e)=>zn(n,0,0,t,r)));return-1!==e&&e}function Qn(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):u?o?o<u?1:o>u?-1:0:1:-1}function Xn(n,t="id",r){return n.sort(((n,e)=>Qn(n,e,t,r)))}function Yn(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):o.localeCompare(u)}function Zn(n,t="id",r){return n.sort(((n,e)=>Yn(n,e,t,r)))}function nt(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):u?o?o<u?-1:o>u?1:0:-1:1}function tt(n,t="id",r){return n.sort(((n,e)=>nt(n,e,t,r)))}function rt(n,t="id"){return tt(n,t)[0]}function et(n,t){return Xn(n,t,!1)[0]}function ot(n,t){const r={};return s(n,(n=>{const e=t(n);r[e]||(r[e]=[]),r[e].push(n)})),r}function ut(n,t="id"){const r={};return s(n,(n=>{r[n[t]]=n})),r}function ct(n,t,r){return Q(n,((n,e)=>n[t](r,e)))}function it(n,t,r){return X(n,(async(n,e)=>n[t](r,e)))}function st(n,t){return Q(n,(n=>n[t]))}function ft(n,t){if(n)return Q(t,(t=>n[t]))}function at(n,t){return Q(n,(n=>ft(n,t)))}function lt(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):u.localeCompare(o)}function ht(n,t="id",r){return n.sort(((n,e)=>lt(n,e,t,r)))}function pt(n){if(n)return n.substring(n.lastIndexOf(".")+1)}function dt(n){if(n)return n.substring(n.lastIndexOf("/")+1)}function gt(n){return t=>!!c(t)&&n.test(t)}const mt=gt(/\.css$/),yt=gt(/\.html$/),wt=gt(/\.js$/),bt=gt(/\.json$/);function vt(n,t){let r,e=n;return(...n)=>(null!==e&&e--,e<=0&&(r=t(...n),e=null),r)}function At(n,t){return(...r)=>n(...r.splice(0,t))}function Et(n,t){let r,e=n;return(...n)=>(null!==e&&e--,e>=1?r=t(...n):e=null,r)}const It=Object.assign;function xt(n,...t){if(n)return It(n,...t)}const Ot=async(n,t)=>{if(!n)return;const r=U(n);return await a(r,((e,o,u,c)=>t(n[e],e,n,c,r))),n};function jt(n,t){if(!n)return;return s(U(n),((r,e,o,u)=>{t(n[r],r,n,u,o)}))}async function Bt(n,t){const r=[],e=[];let o=0;n.forEach(((n,t)=>{r[o]=n,e[o]=n,o++}));for(let n=0;n<o;n++)await t(r[n],e[n]);return n}const Ct=Ln("Set"),$t=kn(Ct);function St(n,t){if($t(n)){for(const r of n)t(r,n);return n}for(const[r,e]of n)t(e,r,n);return n}const Ft=Ln("GeneratorFunction"),Mt=kn(Ft);async function Rt(n,t,r){if($t(n)){for(const r of n)await t(r,n);return n}if(Mt(n))for await(const e of n(...r))await t(e,n);for(const[r,e]of n)await t(e,r,n);return n}const Tt=n=>!!c(n)&&n instanceof Function,Ut=Ln("AsyncFunction"),Pt=kn(Ut);function Nt(n,t,r,e,o,u){return(i,s,f)=>{let a;const l=Pt(s);if(c(i)&&s)return a=m(i)?l?t:n:G(i)||Tt(i)?l?e:r:o?l?u:o:Mt(i)?u:l?e:r,a(i,s,f)}}const Dt=Nt(s,a,jt,Ot,St,Rt);class Lt{constructor(n){this.addChainMethod(n)}addChainMethod(n){const t=this;Dt(n,((n,r)=>{t[r]=function(...r){return this.value=n.call(t,t.value,...r),t}}))}setValue(n){return this.value=n,this}done(){const n=this.value;return this.value=null,n}value=null}function kt(n){return v(Lt,[n])}function Vt(n,r=n.length){const e=[],o=(...u)=>{if(e.push(...u),e.length===r){const r=n(...e);return t(e),r}return o};return o}function _t(n,r=n.length){const e=[],o=(...u)=>{if(e.unshift(...u),e.length===r){const r=n(...e);return t(e),r}return o};return o}const qt=!0,Gt=()=>qt,Jt=!1,Wt=()=>Jt,zt=()=>{};function Ht(n,t){for(let r=0;r<n;r++)t(r)}function Kt(n,t,r=[]){for(let e=0;e<n;e++)r[e]=t(n);return r}class Qt{list=v(Map);construct(){}remove(n){clearTimeout(n),this.list.delete(n)}has(n){return this.list.has(n)}get(n){return this.list.get(n)}set(n,t){const r=this,e=setTimeout((()=>{n(),r.remove(e)}),t);return this.list.set(e,qt),e}clear(){const n=this;n.list.forEach((t=>{n.remove(t)}))}}const Xt=v(Qt);function Yt(n,t){return Xt.set(n,t)}function Zt(){Ht(setTimeout(zt,0),(n=>{Xt.remove(n)}))}const nr=Reflect.apply;function tr(n,t){function r(...n){r.id!==Jt&&Xt.remove(r.id),r.id=Yt((()=>{r.callable(...n),r.id=Jt}),t)}return r.id=Jt,r.callable=n.bind(r),r.clear=()=>{r.id!==Jt&&(Xt.remove(r.id),r.id=Jt)},r}function rr(n,...t){if(Tt(n))return n(...t)}async function er(n,t){const r=n.length;for(let e=0;e<r;e++){const o=n[e];await o(t,e,n,r)}return n}const or=(n,t)=>Dt(n,(n=>{n(t)}));function ur(n){return(...t)=>!n(...t)}function cr(n=0){return(...t)=>t[n]}const ir=n=>{let t;return(...r)=>(c(t)||(t=n(...r)),t)};async function sr(n,t,r={}){if(n)return await Ot(n,(async(n,e,o,u,c)=>{r[e]=await t(n,e,r,o,u,c)})),r}function fr(n,t,r={}){if(n)return jt(n,((n,e,o,u,c)=>{r[e]=t(n,e,r,o,u,c)})),r}function ar(n){return n?.constructor}function lr(n,t=[]){const r=ar(n);return r===Function&&"function"===r.name?function(){}:v(r,t)}function hr(n,t=i,r){const e=r||lr(n);if(m(n)||$t(n)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of n){o(t(r,e,n))}return e}const o=Tt(e.set);for(const[r,u]of n){const c=t(u,r,e,n);o?e.set(r,c):e[r]=c}return e}async function pr(n,t=i,r,e){if(Mt(n)){const r=[];for await(const o of n(...e))r.push(await t(o,r,n));return r}const o=r||lr(n);if(m(n)||$t(n)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of n){e(await t(r,o,n))}return o}const u=Tt(o.set);for await(const[r,e]of n){const c=await t(e,r,o,n);u?o.set(r,c):o[r]=c}return o}const dr=Nt(Q,X,fr,sr,hr,pr);function gr(n){return(...t)=>dr(n,(n=>n(...t)))}async function mr(n,t){if(!n)return;return B(U(n),((r,e,o,u)=>t(n[r],r,n,u,o)))}function yr(n,t){if(!n)return;return j(U(n),((r,e,o,u)=>t(n[r],r,n,u,o)))}function wr(n,t=i){if(m(n)||$t(n))for(const r of n){if(!1===t(r,n))return!1}else for(const[r,e]of n){if(!1===t(e,r,n))return!1}return!0}async function br(n,t=i,r){if(Mt(n))for await(const e of n(...r)){if(!1===await t(e,n))return!1}else if(m(n)||$t(n))for(const r of n){if(!1===await t(r,n))return!1}else for(const[r,e]of n){if(!1===await t(e,r,n))return!1}return!0}const vr=Nt(j,B,yr,mr,wr,br);function Ar(n){return t=>vr(n,(n=>n(t)))}function Er(n,t){return(...r)=>n(...t.map((n=>r[n])))}function Ir(n,t){function r(...n){r.id?r.shouldThrottle=qt:(r.callable(...n),r.id=Yt((()=>{r.shouldThrottle&&r.callable(...n),r.id=Jt}),t))}return r.id=Jt,r.callable=n.bind(r),r.clear=()=>{Xt.remove(r.id),r.id=Jt},r}function xr(n,t){return(...r)=>t(n,...r)}const Or=Object.is,jr=Function.prototype;function Br(n){return jr.call.bind(n)}const Cr=Object.getOwnPropertyNames,$r=Object.getOwnPropertyDescriptor,Sr=Object.defineProperty,Fr=Br(Object.hasOwnProperty);function Mr(n,t){return n+t}function Rr(n){return n-1}function Tr(n,t){return n/t}function Ur(n){return n+1}function Pr(n,t){return n*t}const{random:Nr}=Math;function Dr(n,t=0){return Nr()*(n-t)+t}function Lr(n,t){return n%t}function kr(n){return n.reduce(((n,t)=>n-t),0)}function Vr(n){return n.reduce(((n,t)=>n+t),0)}function _r(n,t,r){return n>t&&n<r}function qr(n,t,r){return n<t||n>r}function Gr(n){return 0===n}function Jr(n){const t=[];return jt(n,((n,r)=>{c(n)&&t.push(r)})),t}async function Wr(n,t=i,r={}){return await Ot(n,(async(n,e,o,u,i)=>{const s=await t(n,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function zr(n,t=i,r={}){return jt(n,((n,e,o,u,i)=>{const s=t(n,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function Hr(n,t,r={}){return jt(n,((n,e,o,u,c)=>{!0===t(n,e,r,o,u,c)&&(r[e]=n)})),r}async function Kr(n,t,r={}){return await Ot(n,(async(n,e,o,u,c)=>{!0===await t(n,e,r,o,u,c)&&(r[e]=n)})),r}function Qr(n,t={}){if(n)return jt(n,((n,r)=>{t[n]=r})),t}const Xr=(n,t)=>{if(n===t)return!0;const r=U(n),e=U(t);return r.length===e.length&&j(r,(r=>n[r]===t[r]))},Yr=Nn(String),Zr=Ln("Number"),ne=kn(Zr),te=Ln("RegExp"),re=kn(te),ee=/[()[\]{}*+?^$|#.,/\\\s-]/g;function oe(n){return n.replace(ee,"\\$&")}function ue(n,t){return t?ue(Q(n,oe)):RegExp(n.join("|"))}function ce(n,t){if(n){if(m(t)){const r=ue(t);return Hr(n,((n,t)=>!r.test(t)))}if(re(t))return Hr(n,((n,r)=>!t.test(r)));if(Yr(t))return Hr(n,((n,r)=>r!==t));if(ne(t)){const r=t.toString();return Hr(n,((n,t)=>t!==r))}return Tt(t)?Hr(n,((n,r)=>!t(n,r))):void 0}}const ie=(n,t,r={})=>{if(n)return s(t,(t=>{r[t]=n[t]})),r};function se(n){if(n)return U(n).length}const fe=(n,t)=>{const r={};return s(n,((n,e)=>{r[n]=t[e]})),r},ae=n=>{const t=[],r=[];return jt(n,((n,e)=>{t.push(e),r.push(n)})),[t,r]},le=/[-_]/g,he=/ (.)/g;function pe(n){return n.replace(le," ").trim().toUpperCase()}function de(n){return n.toLowerCase().replace(he,(n=>n.toUpperCase().replace(/ /g,"")))}function ge(n){return n.replace(le," ").trim().toLowerCase().replace(he,"-$1")}function me(n){return n.replace(le," ").trim().toLowerCase().replace(he,"_$1")}function ye(n,t,r){return n.slice(0,t)+r+n.slice(t,n.length)}function we(n,t=1){return n[n.length-t]}function be(n,t){return n.match(new RegExp(`(.|[\r\n]){1,${t}}`,"g"))}function ve(n,t=1){return n.slice(0,-1*t)}function Ae(n,t=1){return n.substr(t)}function Ee(n,t,r){return n.replace(new RegExp(`\\b${t.join("|")}\\b`,"gi"),r)}const Ie=/%(?![\da-f]{2})/gi,xe=/&/g,Oe=/</g,je=/>/g,Be=/"/g;function Ce(n){return decodeURIComponent(n.replace(Ie,(()=>"%25")))}function $e(n){return n.replace(xe,"&amp;").replace(Oe,"&lt;").replace(je,"&gt;").replace(Be,"&quot;")}function Se(n){return $e(Ce(n))}const Fe=/\S+/g,Me=/\w+/g;function Re(n){return n.match(Fe)||[]}function Te(n){return n.match(Me)||[]}function Ue(n,t){const r=n.length;return r>t?((n,t,r)=>{const e=n.split(""),o=e.length;let u,c=r-t;for(;c<o&&c>=0&&(u=e[c]," "!==u);c--);return n.slice(0,c).trim()})(n,t,r):n}function Pe(n,t){const r=n.length;return r>t?((n,t,r)=>{const e=n.split(""),o=e.length;let u,c=t;for(;c<o&&c>0&&(u=e[c]," "!==u);c++);return n.substr(c,r).trim()})(n,t,r):n}const Ne=/ (.)/g;function De(n){return n[0].toUpperCase()}function Le(n){return De(n)+Ae(n)}function ke(n){return n.replace(Ne,(n=>n.toUpperCase()))}function Ve(n){return De(n)+Ae(n).toLowerCase()}function _e(n){return Ve(n.toLowerCase()).replace(Ne,(n=>n.toUpperCase()))}function qe(n){return ar(n)?.name}function Ge(n){return!!c(n)&&"[object Arguments]"===n.toString()}function Je(n){return!c(n)}const We=Ln("Map"),ze=kn(We),He=/Array/,Ke="Array";function Qe(n){if(n){const t=qe(n);if(He.test(t)&&t!==Ke)return!0}return!1}function Xe(n,t){if(Je(n)||Tt(n))return!1;if(m(n)||Qe(n))return!0;const r=n.length;if(!Je(r)||!ne(r)||r<0)return!1;if(t){const t=U(n);return!!t&&vr(t,((n,t)=>t>=0&&ne(t)))}return!0}const Ye=Ln("BigInt"),Ze=kn(Ye),no=Ln("Boolean"),to=kn(no),ro=Ln("ArrayBuffer"),eo=kn(ro);function oo(n,t){return!(!n||!t)&&n instanceof t}const uo=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");function co(n){if(c(n)){const t=n?.constructor?.name;return uo.test(t)}return!1}const io=Ln("Date"),so=kn(io);function fo(n){return Yr(n)||m(n)?!o(n):G(n)?!se(n):!c(n)}function ao(n){return!1===n}const lo=Ln("Float32Array"),ho=kn(lo),po=Ln("Float64Array"),go=kn(po),{isInteger:mo}=Number,yo=mo,wo=Ln("Int16Array"),bo=kn(wo),vo=Ln("Int32Array"),Ao=kn(vo),Eo=Ln("Int8Array"),Io=kn(Eo);function xo(n){return c(n)&&"function"==typeof n[Symbol.iterator]}function Oo(n){return!!n&&n instanceof Promise}function jo(n){return!!n&&(Oo(n)||Pt(n)||Mt(n))}function Bo(n,t){return!!(n&&t&&t.call)&&n instanceof t}function Co(n){const t=typeof value;return null==n||"object"!==t&&"function"!==t}function $o(n,t){return!Je(n)&&!Je(t)&&(n.call?t instanceof n:t.call?n instanceof t:t.constructor===n.constructor)}const{isSafeInteger:So}=Number,Fo=So;function Mo(n,t){const r=ar(n),e=ar(t);return r===e&&r.name===e.name}function Ro(n){return!0===n}const To=Ln("Uint16Array"),Uo=kn(To),Po=Ln("Uint32Array"),No=kn(Po),Do=Ln("Uint8Array"),Lo=kn(Do),ko=Ln("Uint8ClampedArray"),Vo=kn(ko),_o=Ln("WeakMap"),qo=kn(_o),Go=void 0!==globalThis.Deno,Jo=void 0!==globalThis.process&&process.versions&&process.versions.node;function Wo(n,t){if(c(n))return t?t(n):n}function zo(n,t){return!1===J(n,t)}const Ho=JSON;function Ko(n,t){if(n)return Ho.parse(n,t)}const Qo=Ho.stringify;function Xo(n,t,r){return!(Tt(t)&&!1===t(n,r))&&!zo(n,t)||function(n,t,r){const e=globalThis.options||r;let o;return Tt(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Qo(n)}\n\t\tExpected: ${Qo(t)}`,e)}(n,t,r)}function Yo(n,t,r){const e=dr(n,(n=>Tt(n)?n.bind(t):n));return r?xt(r,e):e}const Zo=globalThis.structuredClone;function nu(n){return Zo(n)}function tu(n,t=!0){return Boolean(n)&&t}function ru(n){if(G(n)){const t=U(n),r=t.length,e={};for(let o=0;o<r;o++){const r=t[o],u=n[r];tu(u)&&(e[r]=u)}return e}return n.filter((n=>tu(n)))}async function eu(n,t=i,r,e){if(Mt(n)){const r=[];for await(const o of n(...e)){const e=await t(o,r,n);c(e)&&r.push(e)}return r}const o=r||lr(n);if(m(n)||$t(n)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of n){const u=await t(r,o,n);c(u)&&e(u)}return o}const u=Tt(o.set);for await(const[r,e]of n){const i=await t(e,r,o,n);c(i)&&(u?o.set(r,i):o[r]=i)}return o}function ou(n,t=i,r){const e=r||lr(n);if(m(n)||$t(n)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of n){const u=t(r,e,n);c(u)&&o(u)}return e}const o=Tt(e.set);for(const[r,u]of n){const i=t(u,r,e,n);c(i)&&(o?e.set(r,i):e[r]=i)}return e}const uu=Nt(f,l,zr,Wr,ou,eu);function cu(...n){return Pt(n[0])?async function(...t){return vr(n,(async n=>vr(t,(async t=>n(t)))))}:function(...t){return vr(n,(n=>vr(t,(t=>n(t)))))}}function iu(n,t=!0){return!1===Boolean(n)&&t}function su(n,t=i,r){const e=r||lr(n);if(m(n)||$t(n)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of n){!0===t(r,e,n)&&o(r)}}else{const r=Tt(e.set);for(const[o,u]of n){!0===t(u,o,e,n)&&(r?e.set(o,u):e[o]=u)}}return e}async function fu(n,t=i,r,e){if(Mt(n)){const r=[];for await(const o of n(...e))!0===await t(o,r,n)&&r.push(o);return r}const o=r||lr(n);if(m(n)||$t(n)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of n){!0===await t(r,o,n)&&e(r)}}else{const r=Tt(o.set);for await(const[e,u]of n){!0===await t(u,e,o,n)&&(r?o.set(e,u):o[e]=u)}}return o}const au=Nt(C,$,Hr,Kr,su,fu);function lu(n){return(...t)=>r=>{let e=r;return n(t,(n=>{e=n(e)})),e}}const hu=lu(s),pu=lu(x);function du(n){return(...t)=>async r=>{let e=r;return await n(t,(async n=>{e=await n(e)})),e}}const gu=du(a),mu=du(O);function yu(n,t){const r=lr(n),e=r.push||r.add;if(e&&Tt(e)){const o=e.bind(r);n.forEach((n=>{const e=t(n,r);o(e)}))}else Tt(r.set)?n.forEach(((n,e)=>{const o=t(n,e,r);r.set(e,o)})):n.forEach(((n,e)=>{const o=t(n,e,r);r[e]=o}));return r}function wu(n,t,r){if(Je(n)||Je(t))return!1;if(Yr(n))return Yr(t)?n.includes(t,r):re(t)?t.test(n):Tt(t)?Boolean(t(n)):vr(t,(t=>Boolean(wu(n,t))));if(m(n)){if(Yr(t))return n.includes(t,r);if(re(t))return vr(n,(n=>n.test(t)));if(m(t))return vr(t,(t=>Boolean(wu(n,t))))}return!1}const bu=gt(/\./),vu=(n,t,r)=>(t&&!c(n[t])&&(n[t]=r),n);class Au{list=v(Map);construct(){}remove(n){clearInterval(n),this.list.delete(n)}has(n){return this.list.has(n)}get(n){return this.list.get(n)}set(n,t){const r=setInterval((()=>{n()}),t);return this.list.set(r,qt),r}clear(){const n=this;n.list.forEach((t=>{n.remove(t)}))}}const Eu=v(Au);function Iu(n,t){return Eu.set(n,t)}function xu(){Ht(setTimeout(zt,0),(n=>{Eu.remove(n)}))}function Ou(n,...t){return Dt(t,(t=>{Dt(t,((t,r)=>{if(n[r]&&(G(t)||m(t)||t.forEach))return Ou(n[r],t);n[r]=t}))})),n}class ju{static models={};constructor(n,t){c(t)?(xt(this,t),this.modelName=n,ju.models.set(n,t)):xt(this,n)}}function Bu(n,t){return c(t)?v(ju,[n,t]):k(n,ju.models)}function Cu(n,t){return[n,t]}function $u(n,t,r){const e=n.length,o=[];for(let u=0;u<e;u++)o[u]=t(n[u],u,n,e,r);return Promise.all(o)}function Su(n,t,r){const e=n.length,o=[];for(let u=0;u<e;u++)o[u]=t(n[u],u,n,e,r);return Promise.allSettled(o)}function Fu(n){return new Promise(n)}const Mu=(n,t,r=U(n))=>j(r,(r=>J(n[r],t[r])));function Ru(n,t,r){return t&&G(n)||ne(t)&&m(n)?n[t]=r:n.set?n.set(t,r):n.push?n.push(r):n.add?n.add(r):n[t]=r,n}function Tu(n,t,r){return ne(r)&&m(n)?n[r]=t:n.push?n.push(t):n.add?n.add(t):n[r]=t,n}class Uu{source;constructor(n={}){if(this.source=n,null===n||"object"!=typeof n)return n;jt(n,(t=>{n[t]=new Uu(n[t])})),this.data=new Proxy(n,{get:(n,t)=>(console.log(n,t,n[t]),n[t]),set:(n,t,r)=>(console.log(n,t,n[t]),n[t]=new Uu(r),!0)})}}const Pu=()=>[],Nu=()=>({}),Du=()=>"";async function Lu(n,t){for(let r=0;r<n;r++)await t(n)}async function ku(n,t,r=[]){for(let e=0;e<n;e++)r[e]=await t(n);return r}function Vu(n,t=!0,r=!1){return J(t,n)?r:t}class _u{totalActive=0;freed=[];totalFree=0;get(){let n=this.freed.shift();return c(n)?this.totalFree--:(n=this.totalActive,this.totalActive++),n}free(n){this.freed.push(n),this.totalFree++;const t=this.totalActive>0,r=this.totalActive===this.totalFree;t&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const qu=v(_u);class Gu{constructor(n={}){this.items=n}getItem(n){return this.items[n]}setItem(n,t){this.items[n]=t}clear(){this.items={}}removeItem(n){this.items[n]=null}}function Ju(n){return new Gu(n)}export{Lt as Chain,Au as Intervals,ju as Model,Uu as Store,Qt as Timers,_u as UniqID,Gu as VirtualStorage,Mr as add,vt as after,nr as apply,rn as arrayToObject,ue as arrayToRegex,At as ary,Xo as assert,xt as assign,Et as before,Yo as bindAll,Br as cacheNativeMethod,de as camelCase,kt as chain,n as chunk,be as chunkString,t as clear,xu as clearIntervals,Zt as clearTimers,nu as clone,r as cloneArray,lr as cloneType,ru as compact,Jr as compactKeys,uu as compactMap,f as compactMapArray,l as compactMapAsyncArray,Wr as compactMapAsyncObject,zr as compactMapObject,$u as concurrent,Su as concurrentStatus,v as construct,Dn as constructorName,Gn as countBy,Jn as countKey,Wn as countWithoutKey,Vt as curry,_t as curryRight,tr as debounce,Rr as deduct,Sr as defProp,A as difference,Tr as divide,E as drop,I as dropRight,Dt as each,s as eachArray,a as eachAsyncArray,Ot as eachAsyncObject,jt as eachObject,x as eachRight,O as eachRightAsync,y as ensureArray,qn as ensureBuffer,oe as escapeRegex,ee as escapeRegexRegex,vr as every,cu as everyArg,j as everyArray,B as everyAsyncArray,mr as everyAsyncObject,yr as everyObject,iu as falsey,Jt as falsy,au as filter,C as filterArray,$ as filterAsyncArray,Kr as filterAsyncObject,Hr as filterObject,Hn as findIndex,zn as findIndexCache,Kn as findItem,S as first,F as flatten,w as flattenDeep,hu as flow,gu as flowAsync,mu as flowAsyncRight,pu as flowRight,g as forEach,Bt as forEachAsync,yu as forMap,St as forOf,Rt as forOfAsync,ou as forOfCompactMap,eu as forOfCompactMapAsync,wr as forOfEvery,br as forOfEveryAsync,su as forOfFilter,fu as forOfFilterAsync,hr as forOfMap,pr as forOfMapAsync,Nt as generateLoop,k as get,pt as getFileExtension,dt as getFilename,rt as getHighest,et as getLowest,vn as getNumberInsertIndex,$r as getPropDesc,Cr as getPropNames,ar as getType,qe as getTypeName,ot as groupBy,wu as has,q as hasAnyKeys,bu as hasDot,_ as hasKeys,o as hasLength,Fr as hasProp,c as hasValue,$e as htmlEntities,rr as ifInvoke,vu as ifNotAssign,Wo as ifValue,er as inAsync,or as inSync,Ur as increment,ut as indexBy,M as initial,ve as initialString,ye as insertInRange,R as intersection,Iu as interval,Eu as intervals,Qr as invert,ct as invoke,it as invokeAsync,Ge as isArguments,m as isArray,eo as isArrayBuffer,ro as isArrayBufferCall,Xe as isArrayLike,Pt as isAsync,Ut as isAsyncCall,Ze as isBigInt,Ye as isBigIntCall,to as isBoolean,no as isBooleanCall,_n as isBuffer,Vn as isBufferCall,oo as isChild,co as isCloneable,Pn as isConstructor,Nn as isConstructorFactory,Ln as isConstructorNameFactory,so as isDate,io as isDateCall,Go as isDeno,fo as isEmpty,J as isEqual,ho as isF32,lo as isF32Call,go as isF64,po as isF64Call,ao as isFalse,mt as isFileCSS,yt as isFileHTML,wt as isFileJS,bt as isFileJSON,yo as isFloat,Tt as isFunction,Mt as isGenerator,Ft as isGeneratorCall,bo as isI16,wo as isI16Call,Ao as isI32,vo as isI32Call,Io as isI8,Eo as isI8Call,xo as isIterable,jo as isKindAsync,ze as isMap,We as isMapCall,W as isMatchArray,Xr as isMatchObject,Jo as isNodejs,u as isNull,ne as isNumber,Zr as isNumberCall,gn as isNumberEqual,_r as isNumberInRange,qr as isNumberNotInRange,Bo as isParent,G as isPlainObject,Co as isPrimitive,Oo as isPromise,re as isRegex,te as isRegexCall,$o as isRelated,Fo as isSafeInt,Or as isSame,Mo as isSameType,$t as isSet,Ct as isSetCall,Yr as isString,Ro as isTrue,kn as isTypeFactory,Qe as isTypedArray,Uo as isU16,To as isU16Call,No as isU32,Po as isU32Call,Lo as isU8,Vo as isU8C,ko as isU8CCall,Do as isU8Call,e as isUndefined,qo as isWeakMap,_o as isWeakMapCall,Gr as isZero,Ko as jsonParse,ge as kebabCase,U as keys,H as largest,K as last,dr as map,Q as mapArray,X as mapAsyncArray,sr as mapAsyncObject,fr as mapObject,Y as mapRightArray,Z as mapWhile,Ou as merge,Bu as model,Pr as multiply,ur as negate,Je as noValue,zt as noop,zo as notEqual,cr as nthArg,se as objectSize,ce as omit,ir as once,In as onlyUnique,gr as over,Ar as overEvery,Cu as pair,en as partition,ie as pick,st as pluck,ft as pluckObject,at as pluckValues,Fu as promise,Mu as propertyMatch,Dr as randomFloat,pn as randomInt,d as range,p as rangeDown,h as rangeUp,Ce as rawURLDecode,Er as reArg,gt as regexTestFactory,Lr as remainder,cn as remove,sn as removeBy,Ee as replaceList,fn as rest,Ae as restString,i as returnValue,an as right,we as rightString,yn as sample,Se as sanitize,Ru as setKey,Tu as setValue,mn as shuffle,bn as smallest,me as snakeCase,Zn as sortCollectionAlphabetically,ht as sortCollectionAlphabeticallyReverse,tt as sortCollectionAscending,nt as sortCollectionAscendingFilter,Xn as sortCollectionDescending,Qn as sortCollectionDescendingFilter,tn as sortNumberAscending,un as sortNumberDescening,Yn as sortObjectsAlphabetically,lt as sortObjectsAlphabeticallyReverse,xn as sortUnique,Qo as stringify,Pu as stubArray,Wt as stubFalse,Nu as stubObject,Du as stubString,Gt as stubTrue,nn as subtract,kr as subtractAll,on as subtractReverse,Vr as sumAll,An as take,En as takeRight,Ir as throttle,Yt as timer,Xt as timers,Ht as times,Lu as timesAsync,Kt as timesMap,ku as timesMapAsync,dn as toArray,L as toPath,Vu as toggle,Re as tokenize,tu as truey,Ue as truncate,Pe as truncateRight,qt as truth,Un as unZip,ae as unZipObject,jn as union,qu as uniqID,On as unique,Bn as untilFalseArray,Cn as untilTrueArray,pe as upperCase,Le as upperFirst,ke as upperFirstAll,De as upperFirstLetter,Ve as upperFirstOnly,_e as upperFirstOnlyAll,Ju as virtualStorage,$n as whileCompactMap,Sn as whileEachArray,Fn as whileMapArray,Mn as without,Te as words,xr as wrap,Rn as xor,Tn as zip,fe as zipObject};
//# sourceMappingURL=basic.js.map
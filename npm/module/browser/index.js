function t(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r}function n(t){return t.length=0,t}function r(t){return t.slice()}function e(t){return void 0===t}function o(t){return Boolean(t.length)}function u(t){return null===t}function c(t){return!e(t)&&!u(t)}function i(t){return t}function s(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)n(t[o],o,t,e,r);return t}function f(t,n=i,r=[],e){return s(t,((t,o,u,i)=>{const s=n(t,o,r,u,i,e);c(s)&&r.push(s)})),r}async function a(t,n){if(!t)return;const r=t.length;for(let e=0;e<r;e++)await n(t[e],e,t,r);return t}async function l(t,n=i){const r=[];return await a(t,(async(t,e,o)=>{const u=await n(t,e,r,o);c(u)&&r.push(u)})),r}const{sign:h}=Math;function d(t){return-1===h(t)}function g(t,n,r,e){let o=t;for(;o<n;)e.push(o),o+=r;return e}function p(t,n,r,e){let o=t;for(;o>n;)e.push(o),o-=r;return e}function m(t,n,r=1,e=[]){return d(r)?e:t<n?g(t,n,r,e):p(t,n,r,e)}function w(t,n){return t.forEach(n),t}const y=Array.isArray;function b(t){return y(t)&&t||c(t)&&[t]||[]}function v(t){return t.flat(1/0)}const A=Reflect.construct;function E(t,n=[],r){const e=y(n)?n:[n];return r?A(t,e,r):A(t,e)}function I(...t){const n=E(Map),r=[];return s(t,((t,r)=>{s(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),w(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function x(t,n=1,r=t.length){return t.splice(n,r)}const $=(t,n=1,r=t.length)=>x(t,0,r-n);function C(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function S(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function j(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function B(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function L(t,n,r=[],e){return s(t,((t,o,u,c)=>{!0===n(t,o,r,u,c,e)&&r.push(t)})),r}async function F(t,n,r=[],e){return await a(t,(async(t,o,u,c)=>{!0===await n(t,o,r,u,c,e)&&r.push(t)})),r}function O(t,n){return n?t.slice(0,n):t[0]}function T(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(b(n))),[]);return r}function M(t){return t.slice(0,t.length-1)}function R(t,...n){return f(t,(t=>{if(j(n,(n=>n.includes(t))))return t}))}const N=Object.keys;function U(t){if(t)return N(t)}const P=/\.|\[/,_=/]/g,k="";function D(t){return t.replace(_,k).split(P)}function H(t,n){if(!n)return!1;let r=n;return j(y(t)?t:D(t),(t=>(r=r[t],c(r)))),r}const W=Object.hasOwn;function Z(t,...n){if(t)return j(n,(n=>{const r=D(n);if(1===r.length)return W(t,n);{const n=r.pop(),e=H(r,t);return!!e&&W(e,n)}}))}function z(t,...n){if(t)return Boolean(n.find((n=>{const r=D(n);if(1===r.length)return W(t,n);{const n=r.pop(),e=H(r,t);return!!e&&W(e,n)}})))}const q=t=>!!c(t)&&"Object("===t.constructor.toString().trim().slice(9,16),G=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(q(t)){const r=U(t);if(Z(n,r))return j(r,(r=>G(t[r],n[r])))}else if(y(t)&&t.length===n.length)return j(t,((t,r)=>G(t,n[r])));return!1};function V(t,n){return t.length===n.length&&j(t,((t,r)=>G(n[r],t)))}const J=Math.max;function K(t){return J(...t)}function Q(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]}function X(t,n,r=[],e){return s(t,((t,o,u,c)=>{r[o]=n(t,o,r,u,c,e)})),r}async function Y(t,n){const r=[];return await a(t,(async(t,e,o)=>{r[e]=await n(t,e,o)})),r}function tt(t,n,r=[],e){let o=0;const u=t.length;for(let c=u-1;c>=0;c--)r[o]=n(t[c],c,t,u,e),o++;return r}function nt(t,n,r=[],e){const o=t.length;for(let u=0;u<o;u++){const c=t[u];if(!1===n(c,u,r,t,o,e))break;r[u]=c}return r}function rt(t,n){return t-n}function et(t){return t.sort(rt)}function ot(t,n){const r={};return s(t,((t,e)=>{r[n[e]]=t})),r}function ut(t,n){const r=[];return[f(t,((t,e)=>{if(n(t,e))return t;r.push(t)})),r]}function ct(t,n){return n-t}function it(t){return t.sort(ct)}function st(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t}function ft(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t}function at(t){return t.slice(1,t.length)}function lt(t,n){return t[t.length-1-n]}const{floor:ht,random:dt}=Math;function gt(t,n=0){return ht(dt()*(t-n))+n}const pt=Array.from;function mt(t,n){return t===n}function wt(t,n=t.length){if(t.length<=1)return pt(t);const r=pt(t);let e,o,u=0;for(;u<n;)e=gt(r.length-1,0),o=r[u],r[u]=r[e],r[e]=o,u++;return r}function yt(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return wt(t);if(1===n)return[t[gt(r-1,0)]];const e=[],o={};let u,c=0;for(;c<n;)u=gt(t.length-1,0),o[u]||(e.push(t[u]),o[u]=!0,c++);return e}const bt=Math.min;function vt(t){return bt(...t)}function At(t,n){let r=0;return j(t,((t,e)=>(r=e,n>=t&&(r=e+1,!0)))),r}function Et(t,n=1){return t.slice(0,n)}function It(t,n=1){const r=t.length;return t.slice(r-n,r)}function xt(t,n,r){return r.indexOf(t)===n}function $t(t,n,r){return t!==r[n-1]}function Ct(t,n){return n?t.filter($t):t.filter(xt)}function St(...t){return Ct(v(t))}function jt(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0}function Bt(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0}function Lt(t,n,r=[],e){let o=0;for(;o<t.length;){const u=r.push(n(t[o],o,t,t.length,e));o++,c(u)&&r.push(u)}return t}function Ft(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t}function Ot(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t}function Tt(t,n){if(!n)return t;const r=E(Set,n);return t.filter((t=>!r.has(t)))}function Mt(...t){const n=E(Map),r=[];return 2===t.length?I(t[0],t[1]):(s(t,((t,r)=>{s(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),w(n,(t=>{1===t.count&&r.push(t.child)})),r)}function Rt(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))}function Nt(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))}function Ut(t,n){return t?.constructor===n||!1}function Pt(t){return n=>Ut(n,t)}function _t(t){return t?.constructor?.name}function kt(t){return n=>_t(n)===t||!1}function Dt(t){return function(n,...r){return r?t(n)&&j(r,t):t(n)}}const Ht=kt("Buffer"),Wt=Dt(Ht);function Zt(t){return Wt(t)&&t||c(t)&&Buffer.from(t)||Buffer.alloc(0)}function zt(t,n){const r={};let e;return s(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r}function qt(t,n){let r=0;return s(t,(t=>{t[n]&&r++})),r}function Gt(t,n){let r=0;return s(t,(t=>{t[n]||r++})),r}function Vt(t,n,r,e,o){if(t[o]===e)return!0}function Jt(t,n,r="id"){const e=t.findIndex(((t,e)=>Vt(t,0,0,n,r)));return-1!==e&&e}function Kt(t,n,r="id"){const e=t.find(((t,e)=>Vt(t,0,0,n,r)));return-1!==e&&e}function Qt(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):u?o?o<u?1:o>u?-1:0:1:-1}function Xt(t,n="id",r){return t.sort(((t,e)=>Qt(t,e,n,r)))}function Yt(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):o.localeCompare(u)}function tn(t,n="id",r){return t.sort(((t,e)=>Yt(t,e,n,r)))}function nn(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):u?o?o<u?-1:o>u?1:0:-1:1}function rn(t,n="id",r){return t.sort(((t,e)=>nn(t,e,n,r)))}function en(t,n="id"){return rn(t,n)[0]}function on(t,n){return Xt(t,n,!1)[0]}function un(t,n){const r={};return s(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r}function cn(t,n="id"){const r={};return s(t,(t=>{r[t[n]]=t})),r}function sn(t,n,r){return X(t,((t,e)=>t[n](r,e)))}function fn(t,n,r){return Y(t,(async(t,e)=>t[n](r,e)))}function an(t,n){return X(t,(t=>t[n]))}function ln(t,n){if(t)return X(n,(n=>t[n]))}function hn(t,n){return X(t,(t=>ln(t,n)))}function dn(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):u.localeCompare(o)}function gn(t,n="id",r){return t.sort(((t,e)=>dn(t,e,n,r)))}function pn(t){if(t)return t.substring(t.lastIndexOf(".")+1)}function mn(t){if(t)return t.substring(t.lastIndexOf("/")+1)}function wn(t){return n=>!!c(n)&&t.test(n)}const yn=wn(/\.css$/),bn=wn(/\.html$/),vn=wn(/\.js$/),An=wn(/\.json$/);function En(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)}function In(t,n){return(...r)=>t(...r.splice(0,n))}function xn(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)}const $n=Object.assign;function Cn(t,...n){if(t)return $n(t,...n)}const Sn=async(t,n)=>{if(!t)return;const r=U(t);return await a(r,((e,o,u,c)=>n(t[e],e,t,c,r))),t};function jn(t,n){if(!t)return;return s(U(t),((r,e,o,u)=>{n(t[r],r,t,u,o)}))}async function Bn(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t}const Ln=kt("Set"),Fn=Dt(Ln);function On(t,n){if(Fn(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const Tn=kt("GeneratorFunction"),Mn=Dt(Tn);async function Rn(t,n,r){if(Fn(t)){for(const r of t)await n(r,t);return t}if(Mn(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const Nn=t=>!!c(t)&&t instanceof Function,Un=kt("AsyncFunction"),Pn=Dt(Un);function _n(t,n,r,e,o,u){return(i,s,f)=>{let a;const l=Pn(s);if(c(i)&&s)return a=y(i)?l?n:t:q(i)||Nn(i)?l?e:r:o?l?u:o:Mn(i)?u:l?e:r,a(i,s,f)}}const kn=_n(s,a,jn,Sn,On,Rn);class Dn{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;kn(t,((t,r)=>{n[r]=function(...r){return this.value=t.call(n,n.value,...r),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}function Hn(t){return E(Dn,[t])}function Wn(t,r=t.length){const e=[],o=(...u)=>{if(e.push(...u),e.length===r){const r=t(...e);return n(e),r}return o};return o}function Zn(t,r=t.length){const e=[],o=(...u)=>{if(e.unshift(...u),e.length===r){const r=t(...e);return n(e),r}return o};return o}const zn=!0,qn=()=>zn,Gn=!1,Vn=()=>Gn,Jn=()=>{};function Kn(t,n){for(let r=0;r<t;r++)n(r)}function Qn(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r}class Xn{list=E(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,zn),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Yn=E(Xn);function tr(t,n){return Yn.set(t,n)}function nr(){Kn(setTimeout(Jn,0),(t=>{Yn.remove(t)}))}const rr=Reflect.apply;function er(t,n){function r(...t){r.id!==Gn&&Yn.remove(r.id),r.id=tr((()=>{r.callable(...t),r.id=Gn}),n)}return r.id=Gn,r.callable=t.bind(r),r.clear=()=>{r.id!==Gn&&(Yn.remove(r.id),r.id=Gn)},r}function or(t,...n){if(Nn(t))return t(...n)}async function ur(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t}const cr=(t,n)=>kn(t,(t=>{t(n)}));function ir(t){return(...n)=>!t(...n)}function sr(t=0){return(...n)=>n[t]}const fr=t=>{let n;return(...r)=>(c(n)||(n=t(...r)),n)};async function ar(t,n,r={}){if(t)return await Sn(t,(async(t,e,o,u,c)=>{r[e]=await n(t,e,r,o,u,c)})),r}function lr(t,n,r={}){if(t)return jn(t,((t,e,o,u,c)=>{r[e]=n(t,e,r,o,u,c)})),r}function hr(t){return t?.constructor}function dr(t,n=[]){const r=hr(t);return r===Function&&"function"===r.name?function(){}:E(r,n)}function gr(t,n=i,r){const e=r||dr(t);if(y(t)||Fn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=Nn(e.set);for(const[r,u]of t){const c=n(u,r,e,t);o?e.set(r,c):e[r]=c}return e}async function pr(t,n=i,r,e){if(Mn(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||dr(t);if(y(t)||Fn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const u=Nn(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);u?o.set(r,c):o[r]=c}return o}const mr=_n(X,Y,lr,ar,gr,pr);function wr(t){return(...n)=>mr(t,(t=>t(...n)))}async function yr(t,n){if(!t)return;return B(U(t),((r,e,o,u)=>n(t[r],r,t,u,o)))}function br(t,n){if(!t)return;return j(U(t),((r,e,o,u)=>n(t[r],r,t,u,o)))}function vr(t,n=i){if(y(t)||Fn(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function Ar(t,n=i,r){if(Mn(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(y(t)||Fn(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const Er=_n(j,B,br,yr,vr,Ar);function Ir(t){return n=>Er(t,(t=>t(n)))}function xr(t,n){return(...r)=>t(...n.map((t=>r[t])))}function $r(t,n){function r(...t){r.id?r.shouldThrottle=zn:(r.callable(...t),r.id=tr((()=>{r.shouldThrottle&&r.callable(...t),r.id=Gn}),n))}return r.id=Gn,r.callable=t.bind(r),r.clear=()=>{Yn.remove(r.id),r.id=Gn},r}function Cr(t,n){return(...r)=>n(t,...r)}const Sr=Object.is,jr=Function.prototype;function Br(t){return jr.call.bind(t)}const Lr=Object.getOwnPropertyNames,Fr=Object.getOwnPropertyDescriptor,Or=Object.defineProperty,Tr=Br(Object.hasOwnProperty);function Mr(t,n){return t+n}function Rr(t){return t-1}function Nr(t,n){return t/n}function Ur(t){return t+1}function Pr(t,n){return t*n}const{random:_r}=Math;function kr(t,n=0){return _r()*(t-n)+n}function Dr(t,n){return t%n}function Hr(t){return t.reduce(((t,n)=>t-n),0)}function Wr(t){return t.reduce(((t,n)=>t+n),0)}function Zr(t,n,r){return t>n&&t<r}function zr(t,n,r){return t<n||t>r}const{sign:qr}=Math;function Gr(t){return 1===qr(t)}function Vr(t){return 0===t}function Jr(t){const n=[];return jn(t,((t,r)=>{c(t)&&n.push(r)})),n}async function Kr(t,n=i,r={}){return await Sn(t,(async(t,e,o,u,i)=>{const s=await n(t,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function Qr(t,n=i,r={}){return jn(t,((t,e,o,u,i)=>{const s=n(t,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function Xr(t,n,r={}){return jn(t,((t,e,o,u,c)=>{!0===n(t,e,r,o,u,c)&&(r[e]=t)})),r}async function Yr(t,n,r={}){return await Sn(t,(async(t,e,o,u,c)=>{!0===await n(t,e,r,o,u,c)&&(r[e]=t)})),r}function te(t,n={}){if(t)return jn(t,((t,r)=>{n[t]=r})),n}const ne=(t,n)=>{if(t===n)return!0;const r=U(t),e=U(n);return r.length===e.length&&j(r,(r=>t[r]===n[r]))},re=Pt(String),ee=kt("Number"),oe=Dt(ee),ue=kt("RegExp"),ce=Dt(ue),ie=/[()[\]{}*+?^$|#.,/\\\s-]/g;function se(t){return t.replace(ie,"\\$&")}function fe(t,n){return n?fe(X(t,se)):RegExp(t.join("|"))}function ae(t,n){if(t){if(y(n)){const r=fe(n);return Xr(t,((t,n)=>!r.test(n)))}if(ce(n))return Xr(t,((t,r)=>!n.test(r)));if(re(n))return Xr(t,((t,r)=>r!==n));if(oe(n)){const r=n.toString();return Xr(t,((t,n)=>n!==r))}return Nn(n)?Xr(t,((t,r)=>!n(t,r))):void 0}}const le=(t,n,r={})=>{if(t)return s(n,(n=>{r[n]=t[n]})),r};function he(t){if(t)return U(t).length}const de=(t,n)=>{const r={};return s(t,((t,e)=>{r[t]=n[e]})),r},ge=t=>{const n=[],r=[];return jn(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},pe=/[ _-]+/g;function me(t){let n="";return t.replace(pe," ").trim().split(" ").forEach(((t,r)=>{n+=0===r?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n}const we=/[ _-]+/g,ye=/[ ]+/g;function be(t){return t.replace(/([A-Z]+)/g," $1").replace(we," ").trim().toLowerCase().replace(ye,"-")}const ve=/[ _-]+/g,Ae=/[ ]+/g;function Ee(t){return t.replace(/([A-Z]+)/g," $1").replace(ve," ").trim().toLowerCase().replace(Ae,"_")}const Ie=/[ _-]+/g;function xe(t){return t.replace(/([A-Z]+)/g," $1").replace(Ie," ").trim().toUpperCase()}const $e=/[ _-]+/g;function Ce(t){return t.replace(/([A-Z]+)/g," $1").replace($e," ").trim().toLowerCase()}function Se(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)}function je(t,n=1){return t[t.length-n]}function Be(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))}function Le(t,n=1){return t.slice(0,-1*n)}function Fe(t,n=1){return t.substr(n)}function Oe(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)}const Te=/%(?![\da-f]{2})/gi,Me=/&/g,Re=/</g,Ne=/>/g,Ue=/"/g;function Pe(t){return decodeURIComponent(t.replace(Te,(()=>"%25")))}function _e(t){return t.replace(Me,"&amp;").replace(Re,"&lt;").replace(Ne,"&gt;").replace(Ue,"&quot;")}function ke(t){return _e(Pe(t))}const De=/\S+/g,He=/\w+/g;function We(t){return t.match(De)||[]}function Ze(t){return t.match(He)||[]}function ze(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let u,c=r-n;for(;c<o&&c>=0&&(u=e[c]," "!==u);c--);return t.slice(0,c).trim()})(t,n,r):t}function qe(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let u,c=n;for(;c<o&&c>0&&(u=e[c]," "!==u);c++);return t.substr(c,r).trim()})(t,n,r):t}const Ge=/ (.)/g;function Ve(t){return t[0].toUpperCase()}function Je(t){return Ve(t)+Fe(t)}function Ke(t){return t.replace(Ge,(t=>t.toUpperCase()))}function Qe(t){return Ve(t)+Fe(t).toLowerCase()}function Xe(t){return Qe(t.toLowerCase()).replace(Ge,(t=>t.toUpperCase()))}function Ye(t){return hr(t)?.name}function to(t){return!!c(t)&&"[object Arguments]"===t.toString()}function no(t){return!c(t)}const ro=kt("Map"),eo=Dt(ro),oo=/Array/,uo="Array";function co(t){if(t){const n=Ye(t);if(oo.test(n)&&n!==uo)return!0}return!1}function io(t,n){if(no(t)||Nn(t))return!1;if(y(t)||co(t))return!0;const r=t.length;if(!no(r)||!oe(r)||r<0)return!1;if(n){const n=U(t);return!!n&&Er(n,((t,n)=>n>=0&&oe(n)))}return!0}const so=kt("BigInt"),fo=Dt(so),ao=kt("Boolean"),lo=Dt(ao),ho=kt("ArrayBuffer"),go=Dt(ho);function po(t,n){return!(!t||!n)&&t instanceof n}const mo=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");function wo(t){if(c(t)){const n=t?.constructor?.name;return mo.test(n)}return!1}const yo=kt("Date"),bo=Dt(yo);function vo(t){return re(t)||y(t)?!o(t):q(t)?!he(t):!c(t)}function Ao(t){return!1===t}const Eo=kt("Float32Array"),Io=Dt(Eo),xo=kt("Float64Array"),$o=Dt(xo),{isInteger:Co}=Number,So=Co,jo=kt("Int16Array"),Bo=Dt(jo),Lo=kt("Int32Array"),Fo=Dt(Lo),Oo=kt("Int8Array"),To=Dt(Oo);function Mo(t){return c(t)&&"function"==typeof t[Symbol.iterator]}function Ro(t){return!!t&&t instanceof Promise}function No(t){return!!t&&(Ro(t)||Pn(t)||Mn(t))}function Uo(t,n){return!!(t&&n&&n.call)&&t instanceof n}function Po(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n}function _o(t,n){return!no(t)&&!no(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)}const{isSafeInteger:ko}=Number,Do=ko;function Ho(t,n){const r=hr(t),e=hr(n);return r===e&&r.name===e.name}function Wo(t){return!0===t}const Zo=kt("Uint16Array"),zo=Dt(Zo),qo=kt("Uint32Array"),Go=Dt(qo),Vo=kt("Uint8Array"),Jo=Dt(Vo),Ko=kt("Uint8ClampedArray"),Qo=Dt(Ko),Xo=kt("WeakMap"),Yo=Dt(Xo),tu=void 0!==globalThis.Deno,nu=void 0!==globalThis.process&&process.versions&&process.versions.node;function ru(t,n){if(c(t))return n?n(t):t}function eu(t,n){return!1===G(t,n)}const ou=JSON;function uu(t,n){if(t)return ou.parse(t,n)}const cu=ou.stringify;function iu(t,n,r){return!(Nn(n)&&!1===n(t,r))&&!eu(t,n)||function(t,n,r){const e=globalThis.options||r;let o;return Nn(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${cu(t)}\n\t\tExpected: ${cu(n)}`,e)}(t,n,r)}function su(t,n,r){const e=mr(t,(t=>Nn(t)?t.bind(n):t));return r?Cn(r,e):e}const fu=globalThis.structuredClone;function au(t){return fu(t)}function lu(t,n=!0){return Boolean(t)&&n}function hu(t){if(q(t)){const n=U(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],u=t[r];lu(u)&&(e[r]=u)}return e}return t.filter((t=>lu(t)))}async function du(t,n=i,r,e){if(Mn(t)){const r=[];for await(const o of t(...e)){const e=await n(o,r,t);c(e)&&r.push(e)}return r}const o=r||dr(t);if(y(t)||Fn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){const u=await n(r,o,t);c(u)&&e(u)}return o}const u=Nn(o.set);for await(const[r,e]of t){const i=await n(e,r,o,t);c(i)&&(u?o.set(r,i):o[r]=i)}return o}function gu(t,n=i,r){const e=r||dr(t);if(y(t)||Fn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){const u=n(r,e,t);c(u)&&o(u)}return e}const o=Nn(e.set);for(const[r,u]of t){const i=n(u,r,e,t);c(i)&&(o?e.set(r,i):e[r]=i)}return e}const pu=_n(f,l,Qr,Kr,gu,du);function mu(...t){return Pn(t[0])?async function(...n){return Er(t,(async t=>Er(n,(async n=>t(n)))))}:function(...n){return Er(t,(t=>Er(n,(n=>t(n)))))}}function wu(t,n=!0){return!1===Boolean(t)&&n}function yu(t,n=i,r){const e=r||dr(t);if(y(t)||Fn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=Nn(e.set);for(const[o,u]of t){!0===n(u,o,e,t)&&(r?e.set(o,u):e[o]=u)}}return e}async function bu(t,n=i,r,e){if(Mn(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||dr(t);if(y(t)||Fn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=Nn(o.set);for await(const[e,u]of t){!0===await n(u,e,o,t)&&(r?o.set(e,u):o[e]=u)}}return o}const vu=_n(L,F,Xr,Yr,yu,bu);function Au(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const Eu=Au(s),Iu=Au(C);function xu(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const $u=xu(a),Cu=xu(S);function Su(t,n){const r=dr(t),e=r.push||r.add;if(e&&Nn(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else Nn(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r}function ju(t,n,r){if(no(t)||no(n))return!1;if(re(t))return re(n)?t.includes(n,r):ce(n)?n.test(t):Nn(n)?Boolean(n(t)):Er(n,(n=>Boolean(ju(t,n))));if(y(t)){if(re(n))return t.includes(n,r);if(ce(n))return Er(t,(t=>t.test(n)));if(y(n))return Er(n,(n=>Boolean(ju(t,n))))}return!1}const Bu=wn(/\./),Lu=(t,n,r)=>(n&&!c(t[n])&&(t[n]=r),t);class Fu{list=E(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,zn),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Ou=E(Fu);function Tu(t,n){return Ou.set(t,n)}function Mu(){Kn(setTimeout(Jn,0),(t=>{Ou.remove(t)}))}function Ru(t,...n){return kn(n,(n=>{kn(n,((n,r)=>{if(t[r]&&(q(n)||y(n)||n.forEach))return Ru(t[r],n);t[r]=n}))})),t}class Nu{static models={};constructor(t,n){c(n)?(Cn(this,n),this.modelName=t,Nu.models.set(t,n)):Cn(this,t)}}function Uu(t,n){return c(n)?E(Nu,[t,n]):H(t,Nu.models)}function Pu(t,n){return[t,n]}function _u(t,n,r){const e=t.length,o=[];for(let u=0;u<e;u++)o[u]=n(t[u],u,t,e,r);return Promise.all(o)}function ku(t,n,r){const e=t.length,o=[];for(let u=0;u<e;u++)o[u]=n(t[u],u,t,e,r);return Promise.allSettled(o)}function Du(t){return new Promise(t)}const Hu=(t,n,r=U(t))=>j(r,(r=>G(t[r],n[r])));function Wu(t,n,r){return n&&q(t)||oe(n)&&y(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t}function Zu(t,n,r){return oe(r)&&y(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t}class zu{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;jn(t,(n=>{t[n]=new zu(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new zu(r),!0)})}}const qu=()=>[],Gu=()=>({}),Vu=()=>"";async function Ju(t,n){for(let r=0;r<t;r++)await n(t)}async function Ku(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r}function Qu(t,n=!0,r=!1){return G(n,t)?r:n}class Xu{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return c(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const Yu=E(Xu);class tc{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function nc(t){return new tc(t)}function rc(t){return t?rc[t]:U(rc)}const ec=globalThis.navigator?.userAgentData;if(ec)jn(ec,((t,n)=>{lo(t)&&t&&(rc[n]=t)})),s(ec.brands,(t=>{rc[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");s(t.split(/ |\//),(t=>{rc[t]=!0}))}function oc(t,n,r,e){return t.addEventListener(n,r,e),t}function uc(t,n,r,e){return t.removeEventListener(n,r,e),t}function cc(t){return 13===t.keyCode}const ic=document.createDocumentFragment.bind(document);function sc(t,n){return t.appendChild(n),n}function fc(t,n){return y(n)?de(n,X(n,(n=>t.getAttribute(n)))):(jn(n,((n,r)=>{t.setAttribute(r,n)})),t)}const ac=/^.[\w_-]+$/,lc=/^[A-Za-z]+$/,hc=/\s/,dc=document.getElementsByClassName.bind(document),gc=document.getElementsByTagName.bind(document),pc=document.getElementById.bind(document),mc=document.querySelector.bind(document),wc=document.querySelectorAll.bind(document);function yc(t){switch(t[0]){case"#":if(!hc.test(t))return pc(Fe(t));break;case".":if(ac.test(t))return dc(Fe(t));break;default:if(lc.test(t))return gc(t)}return wc(t)}const bc=document.createElement.bind(document);function vc(t){const n=Bu(t)&&t||`${t}.js`;return(t=>Du((n=>{oc(t,"load",n,!0),oc(t,"error",n,!0),sc(mc("head"),t)})))(fc(bc("script"),{async:"",src:n}))}function Ac(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&oc(document,"DOMContentLoaded",t),!1)}Ac((()=>{const t=pc("AcidLib");vc(t&&t.getAttribute("data-index")||"/index")}));const Ec=location.protocol,Ic="http:"===Ec?"ws":"wss",xc=location.hostname,$c={hardware:{cores:navigator.hardwareConcurrency},host:{name:xc,protocol:Ec,protocolSocket:Ic}};function Cc(){Cn($c,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Sc(){Cc()}let jc;Ac(Sc),oc(window,"load",Sc,!0),oc(window,"resize",Sc,!0),function(t){try{t().removeItem("TESTING"),jc=!0}catch(t){jc=!1}}((()=>localStorage));class Bc{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=nc(t)}hasLocal=jc;setItem(t,n){return this.hasLocal&&this.local.setItem(t,re(n)?n:cu(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return c(n)?n:!c(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}function Lc(t){return new Bc(t)}const Fc=(t,n)=>`color:${t};background:${n};`,Oc={alert:Fc("#fff","#f44336"),important:Fc("#fff","#E91E63"),notify:Fc("#fff","#651FFF"),warning:Fc("#000","#FFEA00")},Tc=(t,n)=>{const r=re(t)?t:cu(t);if("alert"===n||"warning"===n)return console.trace(`%c${r}`,`${Oc[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${r}`,`${Oc[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},Mc=(t,n,r)=>{Oc[t]=Fc(n,r)};function Rc(t){return t&&9!==t.nodeType}function Nc(t){return!!c(t)&&"[object HTMLCollection]"===t.toString()}function Uc(t){return!!c(t)&&"[object NodeList]"===t.toString()}export{Dn as Chain,Bc as Crate,Fu as Intervals,Nu as Model,zu as Store,Xn as Timers,Xu as UniqID,tc as VirtualStorage,Mr as add,En as after,sc as append,rr as apply,ot as arrayToObject,fe as arrayToRegex,In as ary,iu as assert,Cn as assign,xn as before,su as bindAll,Br as cacheNativeMethod,me as camelCase,Hn as chain,t as chunk,Be as chunkString,n as clear,Mu as clearIntervals,nr as clearTimers,au as clone,r as cloneArray,dr as cloneType,Tc as cnsl,Mc as cnslTheme,hu as compact,Jr as compactKeys,pu as compactMap,f as compactMapArray,l as compactMapAsyncArray,Kr as compactMapAsyncObject,Qr as compactMapObject,_u as concurrent,ku as concurrentStatus,E as construct,_t as constructorName,zt as countBy,qt as countKey,Gt as countWithoutKey,Lc as crate,ic as createFragment,Wn as curry,Zn as curryRight,er as debounce,Rr as deduct,Or as defProp,I as difference,Nr as divide,x as drop,$ as dropRight,kn as each,s as eachArray,a as eachAsyncArray,Sn as eachAsyncObject,jn as eachObject,C as eachRight,S as eachRightAsync,b as ensureArray,Zt as ensureBuffer,se as escapeRegex,ie as escapeRegexRegex,oc as eventAdd,uc as eventRemove,Er as every,mu as everyArg,j as everyArray,B as everyAsyncArray,yr as everyAsyncObject,br as everyObject,wu as falsey,Gn as falsy,vu as filter,L as filterArray,F as filterAsyncArray,Yr as filterAsyncObject,Xr as filterObject,Jt as findIndex,Vt as findIndexCache,Kt as findItem,O as first,T as flatten,v as flattenDeep,Eu as flow,$u as flowAsync,Cu as flowAsyncRight,Iu as flowRight,w as forEach,Bn as forEachAsync,Su as forMap,On as forOf,Rn as forOfAsync,gu as forOfCompactMap,du as forOfCompactMapAsync,vr as forOfEvery,Ar as forOfEveryAsync,yu as forOfFilter,bu as forOfFilterAsync,gr as forOfMap,pr as forOfMapAsync,_n as generateLoop,H as get,dc as getByClass,pc as getById,gc as getByTag,pn as getFileExtension,mn as getFilename,en as getHighest,on as getLowest,At as getNumberInsertIndex,Fr as getPropDesc,Lr as getPropNames,hr as getType,Ye as getTypeName,un as groupBy,ju as has,z as hasAnyKeys,Bu as hasDot,Z as hasKeys,o as hasLength,jc as hasLocal,Tr as hasProp,c as hasValue,_e as htmlEntities,or as ifInvoke,Lu as ifNotAssign,ru as ifValue,vc as importjs,ur as inAsync,cr as inSync,Ur as increment,cn as indexBy,$c as info,M as initial,Le as initialString,Se as insertInRange,R as intersection,Tu as interval,Ou as intervals,te as invert,sn as invoke,fn as invokeAsync,rc as isAgent,to as isArguments,y as isArray,go as isArrayBuffer,ho as isArrayBufferCall,io as isArrayLike,Pn as isAsync,Un as isAsyncCall,fo as isBigInt,so as isBigIntCall,lo as isBoolean,ao as isBooleanCall,Wt as isBuffer,Ht as isBufferCall,po as isChild,wo as isCloneable,Ut as isConstructor,Pt as isConstructorFactory,kt as isConstructorNameFactory,bo as isDate,yo as isDateCall,tu as isDeno,Ac as isDocumentReady,Rc as isDom,vo as isEmpty,cc as isEnter,G as isEqual,Io as isF32,Eo as isF32Call,$o as isF64,xo as isF64Call,Ao as isFalse,yn as isFileCSS,bn as isFileHTML,vn as isFileJS,An as isFileJSON,So as isFloat,Nn as isFunction,Mn as isGenerator,Tn as isGeneratorCall,Nc as isHTMLCollection,Bo as isI16,jo as isI16Call,Fo as isI32,Lo as isI32Call,To as isI8,Oo as isI8Call,Mo as isIterable,No as isKindAsync,eo as isMap,ro as isMapCall,V as isMatchArray,ne as isMatchObject,d as isNegative,Uc as isNodeList,nu as isNodejs,u as isNull,oe as isNumber,ee as isNumberCall,mt as isNumberEqual,Zr as isNumberInRange,zr as isNumberNotInRange,Uo as isParent,q as isPlainObject,Gr as isPositive,Po as isPrimitive,Ro as isPromise,ce as isRegex,ue as isRegexCall,_o as isRelated,Do as isSafeInt,Sr as isSame,Ho as isSameType,Fn as isSet,Ln as isSetCall,re as isString,Wo as isTrue,Dt as isTypeFactory,co as isTypedArray,zo as isU16,Zo as isU16Call,Go as isU32,qo as isU32Call,Jo as isU8,Qo as isU8C,Ko as isU8CCall,Vo as isU8Call,e as isUndefined,Yo as isWeakMap,Xo as isWeakMapCall,Vr as isZero,uu as jsonParse,be as kebabCase,U as keys,K as largest,Q as last,Ce as lowerCase,mr as map,X as mapArray,Y as mapAsyncArray,ar as mapAsyncObject,lr as mapObject,tt as mapRightArray,nt as mapWhile,Ru as merge,Uu as model,Pr as multiply,ir as negate,no as noValue,fc as nodeAttribute,Jn as noop,eu as notEqual,sr as nthArg,he as objectSize,ae as omit,fr as once,xt as onlyUnique,wr as over,Ir as overEvery,Pu as pair,ut as partition,le as pick,an as pluck,ln as pluckObject,hn as pluckValues,Du as promise,Hu as propertyMatch,mc as querySelector,wc as querySelectorAll,kr as randomFloat,gt as randomInt,m as range,p as rangeDown,g as rangeUp,Pe as rawURLDecode,xr as reArg,wn as regexTestFactory,Dr as remainder,st as remove,ft as removeBy,Oe as replaceList,at as rest,Fe as restString,i as returnValue,lt as right,je as rightString,yt as sample,ke as sanitize,Cc as saveDimensions,yc as selector,Wu as setKey,Zu as setValue,wt as shuffle,vt as smallest,Ee as snakeCase,tn as sortCollectionAlphabetically,gn as sortCollectionAlphabeticallyReverse,rn as sortCollectionAscending,nn as sortCollectionAscendingFilter,Xt as sortCollectionDescending,Qt as sortCollectionDescendingFilter,et as sortNumberAscending,it as sortNumberDescening,Yt as sortObjectsAlphabetically,dn as sortObjectsAlphabeticallyReverse,$t as sortUnique,cu as stringify,qu as stubArray,Vn as stubFalse,Gu as stubObject,Vu as stubString,qn as stubTrue,rt as subtract,Hr as subtractAll,ct as subtractReverse,Wr as sumAll,Et as take,It as takeRight,Oc as themes,$r as throttle,tr as timer,Yn as timers,Kn as times,Ju as timesAsync,Qn as timesMap,Ku as timesMapAsync,pt as toArray,D as toPath,Qu as toggle,We as tokenize,lu as truey,ze as truncate,qe as truncateRight,zn as truth,Nt as unZip,ge as unZipObject,St as union,Yu as uniqID,Ct as unique,jt as untilFalseArray,Bt as untilTrueArray,Sc as updateDimensions,xe as upperCase,Je as upperFirst,Ke as upperFirstAll,Ve as upperFirstLetter,Qe as upperFirstOnly,Xe as upperFirstOnlyAll,nc as virtualStorage,Lt as whileCompactMap,Ft as whileEachArray,Ot as whileMapArray,Tt as without,Ze as words,Cr as wrap,Mt as xor,Rt as zip,de as zipObject};
//# sourceMappingURL=index.js.map

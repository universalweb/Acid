function n(n,t=1){const r=[];let e=0;return n.forEach(((n,o)=>{o%t||(r.push([]),o&&e++),r[e].push(n)})),r}function t(n){return n.length=0,n}function r(n){return n.slice()}function e(n){return void 0===n}function o(n){return Boolean(n.length)}function u(n){return null===n}function c(n){return!e(n)&&!u(n)}function i(n){return n}function s(n,t,r){if(!n)return;const e=n.length;for(let o=0;o<e;o++)t(n[o],o,n,e,r);return n}function f(n,t=i,r=[],e){return s(n,((n,o,u,i)=>{const s=t(n,o,r,u,i,e);c(s)&&r.push(s)})),r}async function a(n,t){if(!n)return;const r=n.length;for(let e=0;e<r;e++)await t(n[e],e,n,r);return n}async function l(n,t=i){const r=[];return await a(n,(async(n,e,o)=>{const u=await t(n,e,r,o);c(u)&&r.push(u)})),r}const{sign:h}=Math;function p(n){return-1===h(n)}function g(n,t,r,e){let o=n;for(;o<t;)e.push(o),o+=r;return e}function d(n,t,r,e){let o=n;for(;o>t;)e.push(o),o-=r;return e}function m(n,t,r=1,e=[]){return p(r)?e:n<t?g(n,t,r,e):d(n,t,r,e)}function w(n,t){return n.forEach(t),n}const y=Array.isArray;function b(n){return y(n)&&n||c(n)&&[n]||[]}function v(n){return n.flat(1/0)}const A=Reflect.construct;function E(n,t=[],r){const e=y(t)?t:[t];return r?A(n,e,r):A(n,e)}function I(...n){const t=E(Map),r=[];return s(n,((n,r)=>{s(n,((n,e)=>{let o=t.get(n);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:n},t.set(n,o)}))})),w(t,(n=>{1===n.count&&0===n.parentIndex&&r.push(n.child)})),r}function x(n,t=1,r=n.length){return n.splice(t,r)}const C=(n,t=1,r=n.length)=>x(n,0,r-t);function $(n,t,r){if(!n)return;const e=n.length;for(let o=e-1;o>=0;o--)t(n[o],o,n,e,r);return n}async function O(n,t){if(!n)return;const r=n.length;for(let e=r-1;e>=0;e--)await t(n[e],e,n,r);return n}function j(n,t,r){if(!n)return;const e=n.length;for(let o=0;o<e;o++)if(!1===t(n[o],o,n,e,r))return!1;return!0}async function B(n,t,r){if(!n)return;const e=n.length;for(let o=0;o<e;o++)if(!1===await t(n[o],o,n,e,r))return!1;return!0}function S(n,t,r=[],e){return s(n,((n,o,u,c)=>{!0===t(n,o,r,u,c,e)&&r.push(n)})),r}async function M(n,t,r=[],e){return await a(n,(async(n,o,u,c)=>{!0===await t(n,o,r,u,c,e)&&r.push(n)})),r}function F(n,t){return t?n.slice(0,t):n[0]}function R(n,t=1){if(!n)return;let r=n;for(let n=0;n<t;n++)r=r.reduce(((n,t)=>n.concat(b(t))),[]);return r}function T(n){return n.slice(0,n.length-1)}function U(n,...t){return f(n,(n=>{if(j(t,(t=>t.includes(n))))return n}))}const P=Object.keys;function L(n){if(n)return P(n)}const N=/\.|\[/,_=/]/g,D="";function Z(n){return n.replace(_,D).split(N)}function k(n,t){if(!t)return!1;let r=t;return j(y(n)?n:Z(n),(n=>(r=r[n],c(r)))),r}const q=Object.hasOwn;function V(n,...t){if(n)return j(t,(t=>{const r=Z(t);if(1===r.length)return q(n,t);{const t=r.pop(),e=k(r,n);return!!e&&q(e,t)}}))}function G(n,...t){if(n)return Boolean(t.find((t=>{const r=Z(t);if(1===r.length)return q(n,t);{const t=r.pop(),e=k(r,n);return!!e&&q(e,t)}})))}const J=n=>!!c(n)&&"Object("===n.constructor.toString().trim().slice(9,16);function W(n,t){return n?.constructor===t||!1}function z(n){return t=>W(t,n)}function H(n){return n?.constructor?.name}function K(n){return t=>H(t)===n||!1}function Q(n){return function(t,...r){return r?n(t)&&j(r,n):n(t)}}const X=K("Buffer"),Y=Q(X),nn=(n,t)=>{if(n===t)return!0;if(Y(n))return n.equals(t);if(n.toString()===t.toString())if(J(n)){const r=L(n);if(V(t,r))return j(r,(r=>nn(n[r],t[r])))}else if(y(n)&&n.length===t.length)return j(n,((n,r)=>nn(n,t[r])));return!1};function tn(n,t){return n.length===t.length&&j(n,((n,r)=>nn(t[r],n)))}const rn=Math.max;function en(n){return rn(...n)}function on(n,t){const r=n.length;return t?n.slice(r-t,r):n[r-1]}function un(n,t,r=[],e){return s(n,((n,o,u,c)=>{r[o]=t(n,o,r,u,c,e)})),r}async function cn(n,t){const r=[];return await a(n,(async(n,e,o)=>{r[e]=await t(n,e,o)})),r}function sn(n,t,r=[],e){let o=0;const u=n.length;for(let c=u-1;c>=0;c--)r[o]=t(n[c],c,n,u,e),o++;return r}function fn(n,t,r=[],e){const o=n.length;for(let u=0;u<o;u++){const c=n[u];if(!1===t(c,u,r,n,o,e))break;r[u]=c}return r}function an(n,t){return n-t}function ln(n){return n.sort(an)}function hn(n,t){const r={};return s(n,((n,e)=>{r[t[e]]=n})),r}function pn(n,t){const r=[];return[f(n,((n,e)=>{if(t(n,e))return n;r.push(n)})),r]}function gn(n,t){return t-n}function dn(n){return n.sort(gn)}function mn(n,t){let r=n.length;for(let e=0;e<r;e++){const o=n[e];t.includes(o)&&(n.splice(e,1),e--,r--)}return n}function wn(n,t){let r=n.length;for(let e=0;e<r;e++){t(n[e],e)&&(n.splice(e,1),e--,r--)}return n}function yn(n){return n.slice(1,n.length)}function bn(n,t){return n[n.length-1-t]}const{floor:vn,random:An}=Math;function En(n,t=0){return vn(An()*(n-t))+t}const In=Array.from;function xn(n,t){return n===t}function Cn(n,t=n.length){if(n.length<=1)return In(n);const r=In(n);let e,o,u=0;for(;u<t;)e=En(r.length-1,0),o=r[u],r[u]=r[e],r[e]=o,u++;return r}function $n(n,t){if(!n)return!1;const r=n.length;if(r===t||t>r)return Cn(n);if(1===t)return[n[En(r-1,0)]];const e=[],o={};let u,c=0;for(;c<t;)u=En(n.length-1,0),o[u]||(e.push(n[u]),o[u]=!0,c++);return e}const On=Math.min;function jn(n){return On(...n)}function Bn(n,t){let r=0;return j(n,((n,e)=>(r=e,t>=n&&(r=e+1,!0)))),r}function Sn(n,t=1){return n.slice(0,t)}function Mn(n,t=1){const r=n.length;return n.slice(r-t,r)}function Fn(n,t,r){return r.indexOf(n)===t}function Rn(n,t,r){return n!==r[t-1]}function Tn(n,t){return t?n.filter(Rn):n.filter(Fn)}function Un(...n){return Tn(v(n))}function Pn(n,t){const r=n.length;for(let e=0;e<r;e++)if(!1===t(n[e],e))return!1;return!0}function Ln(n,t){const r=n.length;for(let e=0;e<r;e++)if(!0===t(n[e],e))return!1;return!0}function Nn(n,t,r=[],e){let o=0;for(;o<n.length;){const u=r.push(t(n[o],o,n,n.length,e));o++,c(u)&&r.push(u)}return n}function _n(n,t,r){let e=0;for(;e<n.length;)t(n[e],e,n,n.length,r),e++;return n}function Dn(n,t,r=[],e){let o=0;for(;o<n.length;)r.push(t(n[o],o,n,n.length,e)),o++;return n}function Zn(n,t){if(!t)return n;const r=E(Set,t);return n.filter((n=>!r.has(n)))}function kn(...n){const t=E(Map),r=[];return 2===n.length?I(n[0],n[1]):(s(n,((n,r)=>{s(n,((n,e)=>{let o=t.get(n);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:n},t.set(n,o)}))})),w(t,(n=>{1===n.count&&r.push(n.child)})),r)}function qn(...n){return n[0].map(((t,r)=>n.map((n=>n[r]))))}function Vn(n){return n[0].map(((t,r)=>n.map((n=>n[r]))))}function Gn(n){return Y(n)&&n||c(n)&&Buffer.from(n)||Buffer.alloc(0)}function Jn(n){return n.fill(0),n}function Wn(n,t){const r={};let e;return s(n,(n=>{e=t(n),r[e]||(r[e]=0),r[e]++})),r}function zn(n,t){let r=0;return s(n,(n=>{n[t]&&r++})),r}function Hn(n,t){let r=0;return s(n,(n=>{n[t]||r++})),r}function Kn(n,t,r,e,o){if(n[o]===e)return!0}function Qn(n,t,r="id"){const e=n.findIndex(((n,e)=>Kn(n,0,0,t,r)));return-1!==e&&e}function Xn(n,t,r="id"){const e=n.find(((n,e)=>Kn(n,0,0,t,r)));return-1!==e&&e}function Yn(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):u?o?o<u?1:o>u?-1:0:1:-1}function nt(n,t="id",r){return n.sort(((n,e)=>Yn(n,e,t,r)))}function tt(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):o.localeCompare(u)}function rt(n,t="id",r){return n.sort(((n,e)=>tt(n,e,t,r)))}function et(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):u?o?o<u?-1:o>u?1:0:-1:1}function ot(n,t="id",r){return n.sort(((n,e)=>et(n,e,t,r)))}function ut(n,t="id"){return ot(n,t)[0]}function ct(n,t){return nt(n,t,!1)[0]}function it(n,t){const r={};return s(n,(n=>{const e=t(n);r[e]||(r[e]=[]),r[e].push(n)})),r}function st(n,t="id"){const r={};return s(n,(n=>{r[n[t]]=n})),r}function ft(n,t,r){return un(n,((n,e)=>n[t](r,e)))}function at(n,t,r){return cn(n,(async(n,e)=>n[t](r,e)))}const lt=z(String);function ht(n,t){if(n)return lt(t)?n[t]:un(t,(t=>n[t]))}function pt(n,t){return un(n,(n=>ht(n,t)))}function gt(n,t,r,e){const o=n[r],u=t[r];return o===u&&e?e(n,t,r):u.localeCompare(o)}function dt(n,t="id",r){return n.sort(((n,e)=>gt(n,e,t,r)))}function mt(n){if(n)return n.substring(n.lastIndexOf(".")+1)}function wt(n){if(n)return n.substring(n.lastIndexOf("/")+1)}function yt(n){return t=>!!c(t)&&n.test(t)}const bt=yt(/\.css$/),vt=yt(/\.html$/),At=yt(/\.js$/),Et=yt(/\.json$/);function It(n,t){let r,e=n;return(...n)=>(null!==e&&e--,e<=0&&(r=t(...n),e=null),r)}function xt(n,t){return(...r)=>n(...r.splice(0,t))}function Ct(n,t){let r,e=n;return(...n)=>(null!==e&&e--,e>=1?r=t(...n):e=null,r)}const $t=Object.assign;function Ot(n,...t){if(n)return $t(n,...t)}const jt=async(n,t)=>{if(!n)return;const r=L(n);return await a(r,((e,o,u,c)=>t(n[e],e,n,c,r))),n};function Bt(n,t){if(!n)return;return s(L(n),((r,e,o,u)=>{t(n[r],r,n,u,o)}))}async function St(n,t){const r=[],e=[];let o=0;n.forEach(((n,t)=>{r[o]=n,e[o]=n,o++}));for(let n=0;n<o;n++)await t(r[n],e[n]);return n}const Mt=K("Set"),Ft=Q(Mt);function Rt(n,t){if(Ft(n)){for(const r of n)t(r,n);return n}for(const[r,e]of n)t(e,r,n);return n}const Tt=K("GeneratorFunction"),Ut=Q(Tt);async function Pt(n,t,r){if(Ft(n)){for(const r of n)await t(r,n);return n}if(Ut(n))for await(const e of n(...r))await t(e,n);for(const[r,e]of n)await t(e,r,n);return n}const Lt=n=>!!c(n)&&n instanceof Function,Nt=K("AsyncFunction"),_t=Q(Nt);function Dt(n,t,r,e,o,u){return(i,s,f)=>{let a;const l=_t(s);if(c(i)&&s)return a=y(i)?l?t:n:J(i)||Lt(i)?l?e:r:o?l?u:o:Ut(i)?u:l?e:r,a(i,s,f)}}const Zt=Dt(s,a,Bt,jt,Rt,Pt);class kt{constructor(n){this.addChainMethod(n)}addChainMethod(n){const t=this;Zt(n,((n,r)=>{t[r]=function(...r){return this.value=n.call(t,t.value,...r),t}}))}setValue(n){return this.value=n,this}done(){const n=this.value;return this.value=null,n}value=null}function qt(n){return E(kt,[n])}function Vt(n,r=n.length){const e=[],o=(...u)=>{if(e.push(...u),e.length===r){const r=n(...e);return t(e),r}return o};return o}function Gt(n,r=n.length){const e=[],o=(...u)=>{if(e.unshift(...u),e.length===r){const r=n(...e);return t(e),r}return o};return o}const Jt=!0,Wt=()=>Jt,zt=!1,Ht=()=>zt,Kt=()=>{};function Qt(n,t){for(let r=0;r<n;r++)t(r)}function Xt(n,t,r=[]){for(let e=0;e<n;e++)r[e]=t(n);return r}class Yt{list=E(Map);construct(){}remove(n){clearTimeout(n),this.list.delete(n)}has(n){return this.list.has(n)}get(n){return this.list.get(n)}set(n,t){const r=this,e=setTimeout((()=>{n(),r.remove(e)}),t);return this.list.set(e,Jt),e}clear(){const n=this;n.list.forEach((t=>{n.remove(t)}))}}const nr=E(Yt);function tr(n,t){return nr.set(n,t)}function rr(){Qt(setTimeout(Kt,0),(n=>{nr.remove(n)}))}const er=Reflect.apply;function or(n,t){function r(...n){r.id!==zt&&nr.remove(r.id),r.id=tr((()=>{r.callable(...n),r.id=zt}),t)}return r.id=zt,r.callable=n.bind(r),r.clear=()=>{r.id!==zt&&(nr.remove(r.id),r.id=zt)},r}function ur(n,...t){if(Lt(n))return n(...t)}async function cr(n,t){const r=n.length;for(let e=0;e<r;e++){const o=n[e];await o(t,e,n,r)}return n}const ir=(n,t)=>Zt(n,(n=>{n(t)}));function sr(n){return(...t)=>!n(...t)}function fr(n=0){return(...t)=>t[n]}const ar=n=>{let t;return(...r)=>(c(t)||(t=n(...r)),t)};async function lr(n,t,r={}){if(n)return await jt(n,(async(n,e,o,u,c)=>{r[e]=await t(n,e,r,o,u,c)})),r}function hr(n,t,r={}){if(n)return Bt(n,((n,e,o,u,c)=>{r[e]=t(n,e,r,o,u,c)})),r}function pr(n){return n?.constructor}function gr(n,t=[]){const r=pr(n);return r===Function&&"function"===r.name?function(){}:E(r,t)}function dr(n,t=i,r){const e=r||gr(n);if(y(n)||Ft(n)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of n){o(t(r,e,n))}return e}const o=Lt(e.set);for(const[r,u]of n){const c=t(u,r,e,n);o?e.set(r,c):e[r]=c}return e}async function mr(n,t=i,r,e){if(Ut(n)){const r=[];for await(const o of n(...e))r.push(await t(o,r,n));return r}const o=r||gr(n);if(y(n)||Ft(n)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of n){e(await t(r,o,n))}return o}const u=Lt(o.set);for await(const[r,e]of n){const c=await t(e,r,o,n);u?o.set(r,c):o[r]=c}return o}const wr=Dt(un,cn,hr,lr,dr,mr);function yr(n){return(...t)=>wr(n,(n=>n(...t)))}async function br(n,t){if(!n)return;return B(L(n),((r,e,o,u)=>t(n[r],r,n,u,o)))}function vr(n,t){if(!n)return;return j(L(n),((r,e,o,u)=>t(n[r],r,n,u,o)))}function Ar(n,t=i){if(y(n)||Ft(n))for(const r of n){if(!1===t(r,n))return!1}else for(const[r,e]of n){if(!1===t(e,r,n))return!1}return!0}async function Er(n,t=i,r){if(Ut(n))for await(const e of n(...r)){if(!1===await t(e,n))return!1}else if(y(n)||Ft(n))for(const r of n){if(!1===await t(r,n))return!1}else for(const[r,e]of n){if(!1===await t(e,r,n))return!1}return!0}const Ir=Dt(j,B,vr,br,Ar,Er);function xr(n){return t=>Ir(n,(n=>n(t)))}function Cr(n,t){return(...r)=>n(...t.map((n=>r[n])))}function $r(n,t){function r(...n){r.id?r.shouldThrottle=Jt:(r.callable(...n),r.id=tr((()=>{r.shouldThrottle&&r.callable(...n),r.id=zt}),t))}return r.id=zt,r.callable=n.bind(r),r.clear=()=>{nr.remove(r.id),r.id=zt},r}function Or(n,t){return(...r)=>t(n,...r)}const jr=Object.is,Br=Function.prototype;function Sr(n){return Br.call.bind(n)}const Mr=Object.getOwnPropertyNames,Fr=Object.getOwnPropertyDescriptor,Rr=Object.defineProperty,Tr=Sr(Object.hasOwnProperty);function Ur(n,t){return n+t}function Pr(n){return n-1}function Lr(n,t){return n/t}function Nr(n){return n+1}function _r(n,t){return n*t}const{random:Dr}=Math;function Zr(n,t=0){return Dr()*(n-t)+t}function kr(n,t){return n%t}function qr(n){return n.reduce(((n,t)=>n-t),0)}function Vr(n){return n.reduce(((n,t)=>n+t),0)}function Gr(n,t,r){return n>t&&n<r}function Jr(n,t,r){return n<t||n>r}const{sign:Wr}=Math;function zr(n){return 1===Wr(n)}function Hr(n){return 0===n}function Kr(n){const t=[];return Bt(n,((n,r)=>{c(n)&&t.push(r)})),t}async function Qr(n,t=i,r={}){return await jt(n,(async(n,e,o,u,i)=>{const s=await t(n,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function Xr(n,t=i,r={}){return Bt(n,((n,e,o,u,i)=>{const s=t(n,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function Yr(n,t,r={}){return Bt(n,((n,e,o,u,c)=>{!0===t(n,e,r,o,u,c)&&(r[e]=n)})),r}async function ne(n,t,r={}){return await jt(n,(async(n,e,o,u,c)=>{!0===await t(n,e,r,o,u,c)&&(r[e]=n)})),r}function te(n,t={}){if(n)return Bt(n,((n,r)=>{t[n]=r})),t}const re=(n,t)=>{if(n===t)return!0;const r=L(n),e=L(t);return r.length===e.length&&j(r,(r=>n[r]===t[r]))},ee=K("Number"),oe=Q(ee),ue=K("RegExp"),ce=Q(ue),ie=/[()[\]{}*+?^$|#.,/\\\s-]/g;function se(n){return n.replace(ie,"\\$&")}function fe(n,t){return t?fe(un(n,se)):RegExp(n.join("|"))}function ae(n,t){if(n){if(y(t)){const r=fe(t);return Yr(n,((n,t)=>!r.test(t)))}if(ce(t))return Yr(n,((n,r)=>!t.test(r)));if(lt(t))return Yr(n,((n,r)=>r!==t));if(oe(t)){const r=t.toString();return Yr(n,((n,t)=>t!==r))}return Lt(t)?Yr(n,((n,r)=>!t(n,r))):void 0}}const le=(n,t,r={})=>{if(n)return s(t,(t=>{r[t]=n[t]})),r};function he(n){if(n)return L(n).length}const pe=(n,t)=>{const r={};return s(n,((n,e)=>{r[n]=t[e]})),r},ge=n=>{const t=[],r=[];return Bt(n,((n,e)=>{t.push(e),r.push(n)})),[t,r]},de=/[ _-]+/g;function me(n){let t="";return n.replace(de," ").trim().split(" ").forEach(((n,r)=>{t+=0===r?n.toLowerCase():n[0].toUpperCase()+n.slice(1).toLowerCase()})),t}const we=/[ _-]+/g,ye=/[ ]+/g;function be(n){return n.replace(/([A-Z]+)/g," $1").replace(we," ").trim().toLowerCase().replace(ye,"-")}const ve=/[ _-]+/g,Ae=/[ ]+/g;function Ee(n){return n.replace(/([A-Z]+)/g," $1").replace(ve," ").trim().toLowerCase().replace(Ae,"_")}const Ie=/[ _-]+/g;function xe(n){return n.replace(/([A-Z]+)/g," $1").replace(Ie," ").trim().toUpperCase()}const Ce=/[ _-]+/g;function $e(n){return n.replace(/([A-Z]+)/g," $1").replace(Ce," ").trim().toLowerCase()}function Oe(n,t,r){return n.slice(0,t)+r+n.slice(t,n.length)}function je(n,t=1){return n[n.length-t]}function Be(n,t){return n.match(new RegExp(`(.|[\r\n]){1,${t}}`,"g"))}function Se(n,t=1){return n.slice(0,-1*t)}function Me(n,t=1){return n.substr(t)}function Fe(n,t,r){return n.replace(new RegExp(`\\b${t.join("|")}\\b`,"gi"),r)}const Re=/%(?![\da-f]{2})/gi,Te=/&/g,Ue=/</g,Pe=/>/g,Le=/"/g;function Ne(n){return decodeURIComponent(n.replace(Re,(()=>"%25")))}function _e(n){return n.replace(Te,"&amp;").replace(Ue,"&lt;").replace(Pe,"&gt;").replace(Le,"&quot;")}function De(n){return _e(Ne(n))}const Ze=/\S+/g,ke=/\w+/g;function qe(n){return n.match(Ze)||[]}function Ve(n){return n.match(ke)||[]}function Ge(n,t){const r=n.length;return r>t?((n,t,r)=>{const e=n.split(""),o=e.length;let u,c=r-t;for(;c<o&&c>=0&&(u=e[c]," "!==u);c--);return n.slice(0,c).trim()})(n,t,r):n}function Je(n,t){const r=n.length;return r>t?((n,t,r)=>{const e=n.split(""),o=e.length;let u,c=t;for(;c<o&&c>0&&(u=e[c]," "!==u);c++);return n.substr(c,r).trim()})(n,t,r):n}const We=/ (.)/g;function ze(n){return n[0].toUpperCase()}function He(n){return ze(n)+Me(n)}function Ke(n){return n.replace(We,(n=>n.toUpperCase()))}function Qe(n){return ze(n)+Me(n).toLowerCase()}function Xe(n){return Qe(n.toLowerCase()).replace(We,(n=>n.toUpperCase()))}function Ye(n){return pr(n)?.name}function no(n){return!!c(n)&&"[object Arguments]"===n.toString()}function to(n){return!c(n)}const ro=K("Map"),eo=Q(ro),oo=/Array/,uo="Array";function co(n){if(n){const t=Ye(n);if(oo.test(t)&&t!==uo)return!0}return!1}function io(n,t){if(to(n)||Lt(n))return!1;if(y(n)||co(n))return!0;const r=n.length;if(!to(r)||!oe(r)||r<0)return!1;if(t){const t=L(n);return!!t&&Ir(t,((n,t)=>t>=0&&oe(t)))}return!0}const so=K("BigInt"),fo=Q(so),ao=K("Boolean"),lo=Q(ao),ho=K("ArrayBuffer"),po=Q(ho);function go(n,t){return!(!n||!t)&&n instanceof t}const mo=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");function wo(n){if(c(n)){const t=n?.constructor?.name;return mo.test(t)}return!1}const yo=K("Date"),bo=Q(yo);function vo(n){return lt(n)||y(n)?!o(n):J(n)?!he(n):!c(n)}function Ao(n){return!1===n}const Eo=K("Float32Array"),Io=Q(Eo),xo=K("Float64Array"),Co=Q(xo),{isInteger:$o}=Number,Oo=$o,jo=K("Int16Array"),Bo=Q(jo),So=K("Int32Array"),Mo=Q(So),Fo=K("Int8Array"),Ro=Q(Fo);function To(n){return c(n)&&"function"==typeof n[Symbol.iterator]}function Uo(n){return!!n&&n instanceof Promise}function Po(n){return!!n&&(Uo(n)||_t(n)||Ut(n))}function Lo(n,t){return!!(n&&t&&t.call)&&n instanceof t}function No(n){const t=typeof value;return null==n||"object"!==t&&"function"!==t}function _o(n,t){return!to(n)&&!to(t)&&(n.call?t instanceof n:t.call?n instanceof t:t.constructor===n.constructor)}const{isSafeInteger:Do}=Number,Zo=Do;function ko(n,t){const r=pr(n),e=pr(t);return r===e&&r.name===e.name}function qo(n){return!0===n}const Vo=K("Uint16Array"),Go=Q(Vo),Jo=K("Uint32Array"),Wo=Q(Jo),zo=K("Uint8Array"),Ho=Q(zo),Ko=K("Uint8ClampedArray"),Qo=Q(Ko),Xo=K("WeakMap"),Yo=Q(Xo),nu=void 0!==globalThis.Deno,tu=void 0!==globalThis.process&&process.versions&&process.versions.node;function ru(n,t=!0){return Boolean(n)&&t}function eu(n,t=!0){return!1===Boolean(n)&&t}function ou(n,t){if(c(n))return t?t(n):n}function uu(n,t){return Ao(nn(n,t))}const cu=JSON;function iu(n,t){if(n)return cu.parse(n,t)}const su=cu.stringify;function fu(n,t,r){return!(Lt(t)&&!1===t(n,r))&&!uu(n,t)||function(n,t,r){const e=globalThis.options||r;let o;return Lt(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${su(n)}\n\t\tExpected: ${su(t)}`,e)}(n,t,r)}function au(n,t,r){const e=wr(n,(n=>Lt(n)?n.bind(t):n));return r?Ot(r,e):e}const lu=globalThis.structuredClone;function hu(n){return lu(n)}function pu(n){if(J(n)){const t=L(n),r=t.length,e={};for(let o=0;o<r;o++){const r=t[o],u=n[r];ru(u)&&(e[r]=u)}return e}return n.filter((n=>ru(n)))}async function gu(n,t=i,r,e){if(Ut(n)){const r=[];for await(const o of n(...e)){const e=await t(o,r,n);c(e)&&r.push(e)}return r}const o=r||gr(n);if(y(n)||Ft(n)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of n){const u=await t(r,o,n);c(u)&&e(u)}return o}const u=Lt(o.set);for await(const[r,e]of n){const i=await t(e,r,o,n);c(i)&&(u?o.set(r,i):o[r]=i)}return o}function du(n,t=i,r){const e=r||gr(n);if(y(n)||Ft(n)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of n){const u=t(r,e,n);c(u)&&o(u)}return e}const o=Lt(e.set);for(const[r,u]of n){const i=t(u,r,e,n);c(i)&&(o?e.set(r,i):e[r]=i)}return e}const mu=Dt(f,l,Xr,Qr,du,gu);function wu(...n){return _t(n[0])?async function(...t){return Ir(n,(async n=>Ir(t,(async t=>n(t)))))}:function(...t){return Ir(n,(n=>Ir(t,(t=>n(t)))))}}function yu(n,t=i,r){const e=r||gr(n);if(y(n)||Ft(n)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of n){!0===t(r,e,n)&&o(r)}}else{const r=Lt(e.set);for(const[o,u]of n){!0===t(u,o,e,n)&&(r?e.set(o,u):e[o]=u)}}return e}async function bu(n,t=i,r,e){if(Ut(n)){const r=[];for await(const o of n(...e))!0===await t(o,r,n)&&r.push(o);return r}const o=r||gr(n);if(y(n)||Ft(n)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of n){!0===await t(r,o,n)&&e(r)}}else{const r=Lt(o.set);for await(const[e,u]of n){!0===await t(u,e,o,n)&&(r?o.set(e,u):o[e]=u)}}return o}const vu=Dt(S,M,Yr,ne,yu,bu);function Au(n){return(...t)=>r=>{let e=r;return n(t,(n=>{e=n(e)})),e}}const Eu=Au(s),Iu=Au($);function xu(n){return(...t)=>async r=>{let e=r;return await n(t,(async n=>{e=await n(e)})),e}}const Cu=xu(a),$u=xu(O);function Ou(n,t){const r=gr(n),e=r.push||r.add;if(e&&Lt(e)){const o=e.bind(r);n.forEach((n=>{const e=t(n,r);o(e)}))}else Lt(r.set)?n.forEach(((n,e)=>{const o=t(n,e,r);r.set(e,o)})):n.forEach(((n,e)=>{const o=t(n,e,r);r[e]=o}));return r}function ju(n,t,r){if(to(n)||to(t))return!1;if(lt(n))return lt(t)?n.includes(t,r):ce(t)?t.test(n):Lt(t)?Boolean(t(n)):Ir(t,(t=>Boolean(ju(n,t))));if(y(n)){if(lt(t))return n.includes(t,r);if(ce(t))return Ir(n,(n=>n.test(t)));if(y(t))return Ir(t,(t=>Boolean(ju(n,t))))}return!1}const Bu=yt(/\./),Su=(n,t,r)=>(t&&!c(n[t])&&(n[t]=r),n);class Mu{list=E(Map);construct(){}remove(n){clearInterval(n),this.list.delete(n)}has(n){return this.list.has(n)}get(n){return this.list.get(n)}set(n,t){const r=setInterval((()=>{n()}),t);return this.list.set(r,Jt),r}clear(){const n=this;n.list.forEach((t=>{n.remove(t)}))}}const Fu=E(Mu);function Ru(n,t){return Fu.set(n,t)}function Tu(){Qt(setTimeout(Kt,0),(n=>{Fu.remove(n)}))}function Uu(n,...t){return Zt(t,(t=>{Zt(t,((t,r)=>{if(n[r]&&(J(t)||y(t)||t.forEach))return Uu(n[r],t);n[r]=t}))})),n}class Pu{static models={};constructor(n,t){c(t)?(Ot(this,t),this.modelName=n,Pu.models.set(n,t)):Ot(this,n)}}function Lu(n,t){return c(t)?E(Pu,[n,t]):k(n,Pu.models)}function Nu(n,t){return[n,t]}function _u(n,t,r){const e=n.length,o=[];for(let u=0;u<e;u++)o[u]=t(n[u],u,n,e,r);return Promise.all(o)}function Du(n,t,r){const e=n.length,o=[];for(let u=0;u<e;u++)o[u]=t(n[u],u,n,e,r);return Promise.allSettled(o)}function Zu(n){return new Promise(n)}const ku=(n,t,r=L(n))=>j(r,(r=>nn(n[r],t[r])));function qu(n,t,r){return t&&J(n)||oe(t)&&y(n)?n[t]=r:n.set?n.set(t,r):n.push?n.push(r):n.add?n.add(r):n[t]=r,n}function Vu(n,t,r){return oe(r)&&y(n)?n[r]=t:n.push?n.push(t):n.add?n.add(t):n[r]=t,n}class Gu{source;constructor(n={}){if(this.source=n,null===n||"object"!=typeof n)return n;Bt(n,(t=>{n[t]=new Gu(n[t])})),this.data=new Proxy(n,{get:(n,t)=>(console.log(n,t,n[t]),n[t]),set:(n,t,r)=>(console.log(n,t,n[t]),n[t]=new Gu(r),!0)})}}const Ju=()=>[],Wu=()=>({}),zu=()=>"";async function Hu(n,t){for(let r=0;r<n;r++)await t(n)}async function Ku(n,t,r=[]){for(let e=0;e<n;e++)r[e]=await t(n);return r}function Qu(n,t=!0,r=!1){return nn(t,n)?r:t}class Xu{totalActive=0;freed=[];totalFree=0;get(){let n=this.freed.shift();return c(n)?this.totalFree--:(n=this.totalActive,this.totalActive++),n}free(n){this.freed.push(n),this.totalFree++;const t=this.totalActive>0,r=this.totalActive===this.totalFree;t&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const Yu=E(Xu);class nc{constructor(n={}){this.items=n}getItem(n){return this.items[n]}setItem(n,t){this.items[n]=t}clear(){this.items={}}removeItem(n){this.items[n]=null}}function tc(n){return new nc(n)}export{kt as Chain,Mu as Intervals,Pu as Model,Gu as Store,Yt as Timers,Xu as UniqID,nc as VirtualStorage,Ur as add,It as after,er as apply,hn as arrayToObject,fe as arrayToRegex,xt as ary,fu as assert,Ot as assign,Ct as before,au as bindAll,Sr as cacheNativeMethod,me as camelCase,qt as chain,n as chunk,Be as chunkString,t as clearArray,Jn as clearBuffer,Tu as clearIntervals,rr as clearTimers,hu as clone,r as cloneArray,gr as cloneType,pu as compact,Kr as compactKeys,mu as compactMap,f as compactMapArray,l as compactMapAsyncArray,Qr as compactMapAsyncObject,Xr as compactMapObject,_u as concurrent,Du as concurrentStatus,E as construct,H as constructorName,Wn as countBy,zn as countKey,Hn as countWithoutKey,Vt as curry,Gt as curryRight,or as debounce,Pr as deduct,Rr as defProp,I as difference,Lr as divide,x as drop,C as dropRight,Zt as each,s as eachArray,a as eachAsyncArray,jt as eachAsyncObject,Bt as eachObject,$ as eachRight,O as eachRightAsync,b as ensureArray,Gn as ensureBuffer,se as escapeRegex,ie as escapeRegexRegex,Ir as every,wu as everyArg,j as everyArray,B as everyAsyncArray,br as everyAsyncObject,vr as everyObject,zt as falsy,vu as filter,S as filterArray,M as filterAsyncArray,ne as filterAsyncObject,Yr as filterObject,Qn as findIndex,Kn as findIndexCache,Xn as findItem,F as first,R as flatten,v as flattenDeep,Eu as flow,Cu as flowAsync,$u as flowAsyncRight,Iu as flowRight,w as forEach,St as forEachAsync,Ou as forMap,Rt as forOf,Pt as forOfAsync,du as forOfCompactMap,gu as forOfCompactMapAsync,Ar as forOfEvery,Er as forOfEveryAsync,yu as forOfFilter,bu as forOfFilterAsync,dr as forOfMap,mr as forOfMapAsync,Dt as generateLoop,k as get,mt as getFileExtension,wt as getFilename,ut as getHighest,ct as getLowest,Bn as getNumberInsertIndex,Fr as getPropDesc,Mr as getPropNames,pr as getType,Ye as getTypeName,it as groupBy,ju as has,G as hasAnyKeys,Bu as hasDot,V as hasKeys,o as hasLength,Tr as hasProp,c as hasValue,_e as htmlEntities,ur as ifInvoke,Su as ifNotAssign,ou as ifValue,cr as inAsync,ir as inSync,Nr as increment,st as indexBy,T as initial,Se as initialString,Oe as insertInRange,U as intersection,Ru as interval,Fu as intervals,te as invert,ft as invoke,at as invokeAsync,no as isArguments,y as isArray,po as isArrayBuffer,ho as isArrayBufferCall,io as isArrayLike,_t as isAsync,Nt as isAsyncCall,fo as isBigInt,so as isBigIntCall,lo as isBoolean,ao as isBooleanCall,Y as isBuffer,X as isBufferCall,go as isChild,wo as isCloneable,W as isConstructor,z as isConstructorFactory,K as isConstructorNameFactory,bo as isDate,yo as isDateCall,nu as isDeno,vo as isEmpty,nn as isEqual,Io as isF32,Eo as isF32Call,Co as isF64,xo as isF64Call,Ao as isFalse,eu as isFalsy,bt as isFileCSS,vt as isFileHTML,At as isFileJS,Et as isFileJSON,Oo as isFloat,Lt as isFunction,Ut as isGenerator,Tt as isGeneratorCall,Bo as isI16,jo as isI16Call,Mo as isI32,So as isI32Call,Ro as isI8,Fo as isI8Call,To as isIterable,Po as isKindAsync,eo as isMap,ro as isMapCall,tn as isMatchArray,re as isMatchObject,p as isNegative,tu as isNodejs,u as isNull,oe as isNumber,ee as isNumberCall,xn as isNumberEqual,Gr as isNumberInRange,Jr as isNumberNotInRange,Lo as isParent,J as isPlainObject,zr as isPositive,No as isPrimitive,Uo as isPromise,ce as isRegex,ue as isRegexCall,_o as isRelated,Zo as isSafeInt,jr as isSame,ko as isSameType,Ft as isSet,Mt as isSetCall,lt as isString,qo as isTrue,ru as isTruthy,Q as isTypeFactory,co as isTypedArray,Go as isU16,Vo as isU16Call,Wo as isU32,Jo as isU32Call,Ho as isU8,Qo as isU8C,Ko as isU8CCall,zo as isU8Call,e as isUndefined,Yo as isWeakMap,Xo as isWeakMapCall,Hr as isZero,iu as jsonParse,be as kebabCase,L as keys,en as largest,on as last,$e as lowerCase,wr as map,un as mapArray,cn as mapAsyncArray,lr as mapAsyncObject,hr as mapObject,sn as mapRightArray,fn as mapWhile,Uu as merge,Lu as model,_r as multiply,sr as negate,to as noValue,Kt as noop,uu as notEqual,fr as nthArg,he as objectSize,ae as omit,ar as once,Fn as onlyUnique,yr as over,xr as overEvery,Nu as pair,pn as partition,le as pick,pt as pluck,ht as pluckObject,Zu as promise,ku as propertyMatch,Zr as randomFloat,En as randomInt,m as range,d as rangeDown,g as rangeUp,Ne as rawURLDecode,Cr as reArg,yt as regexTestFactory,kr as remainder,mn as remove,wn as removeBy,Fe as replaceList,yn as rest,Me as restString,i as returnValue,bn as right,je as rightString,$n as sample,De as sanitize,qu as setKey,Vu as setValue,Cn as shuffle,jn as smallest,Ee as snakeCase,rt as sortCollectionAlphabetically,dt as sortCollectionAlphabeticallyReverse,ot as sortCollectionAscending,et as sortCollectionAscendingFilter,nt as sortCollectionDescending,Yn as sortCollectionDescendingFilter,ln as sortNumberAscending,dn as sortNumberDescening,tt as sortObjectsAlphabetically,gt as sortObjectsAlphabeticallyReverse,Rn as sortUnique,su as stringify,Ju as stubArray,Ht as stubFalse,Wu as stubObject,zu as stubString,Wt as stubTrue,an as subtract,qr as subtractAll,gn as subtractReverse,Vr as sumAll,Sn as take,Mn as takeRight,$r as throttle,tr as timer,nr as timers,Qt as times,Hu as timesAsync,Xt as timesMap,Ku as timesMapAsync,In as toArray,Z as toPath,Qu as toggle,qe as tokenize,Ge as truncate,Je as truncateRight,Jt as truth,Vn as unZip,ge as unZipObject,Un as union,Yu as uniqID,Tn as unique,Pn as untilFalseArray,Ln as untilTrueArray,xe as upperCase,He as upperFirst,Ke as upperFirstAll,ze as upperFirstLetter,Qe as upperFirstOnly,Xe as upperFirstOnlyAll,tc as virtualStorage,Nn as whileCompactMap,_n as whileEachArray,Dn as whileMapArray,Zn as without,Ve as words,Or as wrap,kn as xor,qn as zip,pe as zipObject};
//# sourceMappingURL=basic.js.map

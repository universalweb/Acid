function t(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r}function n(t){return t.length=0,t}function r(t){return t.slice()}function e(t){return void 0===t}function o(t){return Boolean(t.length)}function u(t){return null===t}function c(t){return!e(t)&&!u(t)}function i(t){return t}function s(t,n,r,e){if(!t)return;const o=t.length;if(c(r))for(let u=0;u<o;u++)n.call(r,t[u],u,t,o,e);else for(let r=0;r<o;r++)n(t[r],r,t,o,e);return t}function f(t,n=i,r=[],e,o){return c(e)?s(t,((t,u,i,s)=>{const f=n.call(e,t,u,r,i,s,o);c(f)&&r.push(f)})):s(t,((t,u,i,s)=>{const f=n(t,u,r,i,s,e,o);c(f)&&r.push(f)})),r}async function a(t,n,r,e){if(!t)return;const o=t.length;if(c(r))for(let u=0;u<o;u++)await n.call(r,t[u],u,t,o,e);else for(let r=0;r<o;r++)await n(t[r],r,t,o,e);return t}async function l(t,n=i){const r=[];return await a(t,(async(t,e,o)=>{const u=await n(t,e,r,o);c(u)&&r.push(u)})),r}const{sign:h}=Math;function g(t){return-1===h(t)}function p(t,n,r,e){let o=t;for(;o<n;)e.push(o),o+=r;return e}function d(t,n,r,e){let o=t;for(;o>n;)e.push(o),o-=r;return e}function m(t,n,r=1,e=[]){return g(r)?e:t<n?p(t,n,r,e):d(t,n,r,e)}const w=Array.isArray;function y(t){return!w(t)}const b=Reflect.construct;function v(t,n=[],r){const e=w(n)?n:[n];return r?b(t,e,r):b(t,e)}function A(t){return w(t)&&t||c(t)&&[t]||[]}function I(t){return t.flat(1/0)}function E(t,n){return t.forEach(n),t}function M(...t){const n=v(Map),r=[];return s(t,((t,r)=>{s(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),E(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function x(t,n=1,r=t.length){return t.splice(n,r)}const O=(t,n=1,r=t.length)=>x(t,0,r-n);function $(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function j(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function C(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function S(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function B(t,n,r=[],e){return s(t,((t,o,u,c)=>{!0===n(t,o,r,u,c,e)&&r.push(t)})),r}async function F(t,n,r=[],e){return await a(t,(async(t,o,u,c)=>{!0===await n(t,o,r,u,c,e)&&r.push(t)})),r}function R(t,n){return n?t.slice(0,n):t[0]}function T(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(A(n))),[]);return r}function N(t){return t.slice(0,t.length-1)}function P(t,...n){return f(t,(t=>{if(C(n,(n=>n.includes(t))))return t}))}function U(t,n,r){if(!t)return;const e=t.length;if(c(r))for(let o=0;o<e;o++)t[o].call(r,n);else for(let r=0;r<e;r++)t[r](n);return t}const _=/\.|\[/,L=/]/g,D="";function Z(t){return t.replace(L,D).split(_)}function k(t,n){if(!n)return!1;let r=n;return C(w(t)?t:Z(t),(t=>(r=r[t],c(r)))),r}const q=Object.keys;function V(t){if(t)return q(t)}const z=Object.hasOwn;function G(t,...n){if(t)return C(n,(n=>{const r=Z(n);if(1===r.length)return z(t,n);{const n=r.pop(),e=k(r,t);return!!e&&z(e,n)}}))}function J(t,...n){if(t)return Boolean(n.find((n=>{const r=Z(n);if(1===r.length)return z(t,n);{const n=r.pop(),e=k(r,t);return!!e&&z(e,n)}})))}function W(t,n){return t?.constructor===n||!1}function H(t){return n=>W(n,t)}function K(t){return t?.constructor?.name}function Q(t){return n=>K(n)===t||!1}function X(t){return function(n,...r){return r?t(n)&&C(r,t):t(n)}}const Y=Q("Buffer"),tt=X(Y),nt=t=>!!c(t)&&"Object("===t.constructor.toString().trim().slice(9,16),rt=(t,n)=>{if(t===n)return!0;if(tt(t))return t.equals(n);if(t.toString()===n.toString())if(nt(t)){const r=V(t);if(G(n,r))return C(r,(r=>rt(t[r],n[r])))}else if(w(t)&&t.length===n.length)return C(t,((t,r)=>rt(t,n[r])));return!1};function et(t,n){return t.length===n.length&&C(t,((t,r)=>rt(n[r],t)))}const ot=Math.max;function ut(t){return ot(...t)}function ct(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]}function it(t,n,r=[],e,o){return c(e)?s(t,((t,u,c,i)=>{r[u]=n.call(e,t,u,r,c,i,o)})):s(t,((t,e,u,c)=>{r[e]=n(t,e,r,u,c,o)})),r}async function st(t,n){if(!t)return;const r=[],e=t.length;for(let o=0;o<e;o++)r[o]=n(t[o],o,r,e);return Promise.all(r)}async function ft(t,n){const r=[];return await a(t,(async(t,e,o)=>{r[e]=await n(t,e,r,o)})),r}function at(t,n,r=[],e){let o=0;const u=t.length;for(let c=u-1;c>=0;c--)r[o]=n(t[c],c,t,u,e),o++;return r}function lt(t,n,r=[],e){const o=t.length;for(let u=0;u<o;u++){const c=t[u];if(!1===n(c,u,r,t,o,e))break;r[u]=c}return r}function ht(t,n){return t-n}function gt(t){return t.sort(ht)}function pt(t,n){const r=[];return[f(t,((t,e)=>{if(n(t,e))return t;r.push(t)})),r]}function dt(t,n){return n-t}function mt(t){return t.sort(dt)}function wt(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t}function yt(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t}function bt(t){return t.slice(1,t.length)}function vt(t,n){return t[t.length-1-n]}const{floor:At,random:It}=Math;function Et(t,n=0){return At(It()*(t-n))+n}function Mt(t,n){return t===n}const xt=Array.from;function Ot(t,n,r){if(c(t))return xt(t,n,r)}function $t(t,n=t.length){if(t.length<=1)return Ot(t);const r=Ot(t);let e,o,u=0;for(;u<n;)e=Et(r.length-1,0),o=r[u],r[u]=r[e],r[e]=o,u++;return r}function jt(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return $t(t);if(1===n)return[t[Et(r-1,0)]];const e=[],o={};let u,c=0;for(;c<n;)u=Et(t.length-1,0),o[u]||(e.push(t[u]),o[u]=!0,c++);return e}const Ct=Math.min;function St(t){return Ct(...t)}function Bt(t,n){let r=0;return C(t,((t,e)=>(r=e,n>=t&&(r=e+1,!0)))),r}function Ft(t,n=1){return t.slice(0,n)}function Rt(t,n=1){const r=t.length;return t.slice(r-n,r)}function Tt(t,n,r){return r.indexOf(t)===n}function Nt(t,n,r){return t!==r[n-1]}function Pt(t,n){return n?t.filter(Nt):t.filter(Tt)}function Ut(...t){return Pt(I(t))}function _t(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0}function Lt(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0}function Dt(t,n,r=[],e){let o=0;for(;o<t.length;){const u=r.push(n(t[o],o,t,t.length,e));o++,c(u)&&r.push(u)}return t}function Zt(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t}function kt(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t}function qt(t,n){if(!n)return t;const r=v(Set,n);return t.filter((t=>!r.has(t)))}function Vt(...t){const n=v(Map),r=[];return 2===t.length?M(t[0],t[1]):(s(t,((t,r)=>{s(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),E(n,(t=>{1===t.count&&r.push(t.child)})),r)}function zt(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))}function Gt(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))}function Jt(t){return tt(t)&&t||c(t)&&Buffer.from(t)||Buffer.alloc(0)}function Wt(t){return t.fill(0),t}const Ht=t=>!!c(t)&&t instanceof Function,Kt=Q("Number"),Qt=X(Kt);function Xt(t){return!Qt(t)}const Yt=H(String);function tn(t){return!Yt(t)}const nn=Object.assign;function rn(t,n){if(nt(n))nn(t,n);else if(Ht(n)){const r=n.name;r?t[r]=n:nn(t,n)}else(Yt(n)||Qt(n))&&(t[n]=n);return t}function en(t,...n){const r=n.length;for(let e=0;e<r;e++)rn(t,n[e]);return t}function on(t,n){if(nt(n))nn(t.prototype,n);else if(Ht(n)){const r=n.name;r&&(t.prototype[r]=n)}else if(W(n)){const r=n.constructor?.name;r&&(t.prototype[r]=n)}else(Yt(n)||Qt(n))&&(t.prototype[n]=n);return t}function un(t,...n){const r=n.length;for(let e=0;e<r;e++)on(t,n[e]);return t}function cn(t,n){const r={};let e;return s(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r}function sn(t,n){let r=0;return s(t,(t=>{t[n]&&r++})),r}function fn(t,n){let r=0;return s(t,(t=>{t[n]||r++})),r}function an(t,n,r,e,o){if(t[o]===e)return!0}function ln(t,n,r="id"){const e=t.findIndex(((t,e)=>an(t,0,0,n,r)));return-1!==e&&e}function hn(t,n,r="id"){const e=t.find(((t,e)=>an(t,0,0,n,r)));return-1!==e&&e}function gn(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):o.localeCompare(u)}function pn(t,n="id",r){return t.sort(((t,e)=>gn(t,e,n,r)))}function dn(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):u?o?o<u?-1:o>u?1:0:-1:1}function mn(t,n="id",r){return t.sort(((t,e)=>dn(t,e,n,r)))}function wn(t,n="id"){return mn(t,n)[0]}function yn(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):u?o?o<u?1:o>u?-1:0:1:-1}function bn(t,n="id",r){return t.sort(((t,e)=>yn(t,e,n,r)))}function vn(t,n){return bn(t,n,!1)[0]}function An(t,n){const r={};return s(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r}function In(t,n="id"){const r={};return s(t,(t=>{r[t[n]]=t})),r}function En(t,n,r,e){return it(t,e?(t,o)=>t[n].call(e,r):(t,e)=>t[n](r))}function Mn(t,n,r,e){return ft(t,e?t=>t[n].call(e,r):async t=>t[n](r))}function xn(t,n){if(t)return Yt(n)?t[n]:it(n,(n=>t[n]))}function On(t,n){return it(t,(t=>xn(t,n)))}function $n(t,n,r,e){const o=t[r],u=n[r];return o===u&&e?e(t,n,r):u.localeCompare(o)}function jn(t,n="id",r){return t.sort(((t,e)=>$n(t,e,n,r)))}function Cn(t){if(t)return t.substring(t.lastIndexOf(".")+1)}function Sn(t){if(t)return t.substring(t.lastIndexOf("/")+1)}function Bn(t){return n=>!!c(n)&&t.test(n)}const Fn=Bn(/\.css$/),Rn=Bn(/\.html$/),Tn=Bn(/\.js$/),Nn=Bn(/\.json$/);function Pn(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)}function Un(t,n){return(...r)=>t(...r.splice(0,n))}function _n(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)}const Ln=async(t,n,r,e)=>{if(!t)return;const o=V(t);return c(r)?await a(o,((u,c,i,s)=>n.call(r,t[u],u,t,s,o,e))):await a(o,((r,u,c,i)=>n(t[r],r,t,i,o,e))),t};function Dn(t,n,r,e){if(!t)return;const o=V(t);return c(r)?s(o,((o,u,c,i)=>{n.call(r,t[o],o,t,i,c,e)})):s(o,((r,o,u,c)=>{n(t[r],r,t,c,u,e)})),t}async function Zn(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t}const kn=Q("Set"),qn=X(kn);function Vn(t,n){if(qn(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const zn=Q("GeneratorFunction"),Gn=X(zn);async function Jn(t,n,r){if(qn(t)){for(const r of t)await n(r,t);return t}if(Gn(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const Wn=Q("AsyncFunction"),Hn=X(Wn);function Kn(t,n,r,e,o,u){return(i,s,f,a,l)=>{let h;const g=Hn(s);if(c(i)&&s)return h=w(i)?g?n:t:nt(i)||Ht(i)?g?e:r:o?g?u:o:Gn(i)?u:g?e:r,h(i,s,f,a,l)}}const Qn=Kn(s,a,Dn,Ln,Vn,Jn);class Xn{constructor(t){this.addChainMethod(t)}addChainMethod(t){const n=this;Qn(t,((t,r)=>{n[r]=function(...r){return this.value=t.call(n,n.value,...r),n}}))}setValue(t){return this.value=t,this}done(){const t=this.value;return this.value=null,t}value=null}function Yn(t){return v(Xn,[t])}function tr(t,r=t.length){const e=[],o=(...u)=>{if(e.push(...u),e.length===r){const r=t(...e);return n(e),r}return o};return o}function nr(t,r=t.length){const e=[],o=(...u)=>{if(e.unshift(...u),e.length===r){const r=t(...e);return n(e),r}return o};return o}function rr(t,n){if(!t)return;return C(V(t),((r,e,o,u)=>n(t[r],r,t,u,o)))}function er(){}const or=()=>[],ur=!1,cr=()=>ur;function ir(t,n){for(let r=0;r<t;r++)n(r)}function sr(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r}const fr=()=>({}),ar=()=>"",lr=!0,hr=()=>lr;class gr{list=v(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,lr),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const pr=v(gr);function dr(t,n){return pr.set(t,n)}function mr(){ir(setTimeout(er,0),(t=>{pr.remove(t)}))}const wr=Reflect.apply;function yr(t,n,r){if(Ht(t))return wr(t,n,r)}function br(t,n){function r(...t){r.id!==ur&&pr.remove(r.id),r.id=dr((()=>{r.callable(...t),r.id=ur}),n)}return r.id=ur,r.callable=t.bind(r),r.clear=()=>{r.id!==ur&&(pr.remove(r.id),r.id=ur)},r}function vr(t,...n){if(Ht(t))return t(...n)}async function Ar(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t}const Ir=(t,n)=>Qn(t,(t=>{t(n)}));function Er(t){return(...n)=>!t(...n)}function Mr(t=0){return(...n)=>n[t]}const xr=t=>{let n;return(...r)=>(c(n)||(n=t(...r)),n)};function Or(t){return t?.constructor}function $r(t,n=[]){const r=Or(t);return r===Function&&"function"===r.name?function(){}:v(r,n)}function jr(t,n=i,r){const e=r||$r(t);if(w(t)||qn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=Ht(e.set);for(const[r,u]of t){const c=n(u,r,e,t);o?e.set(r,c):e[r]=c}return e}async function Cr(t,n=i,r,e){if(Gn(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||$r(t);if(w(t)||qn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const u=Ht(o.set);for await(const[r,e]of t){const c=await n(e,r,o,t);u?o.set(r,c):o[r]=c}return o}async function Sr(t,n,r={}){if(t)return await Ln(t,(async(t,e,o,u,c)=>{r[e]=await n(t,e,r,o,u,c)})),r}function Br(t,n,r={},e,o){if(t)return c(e)?Dn(t,((t,u,c,i,s)=>{r[u]=n.call(e,t,u,r,c,i,s,o)})):Dn(t,((t,e,u,c,i)=>{r[e]=n(t,e,r,u,c,i,o)})),r}const Fr=Kn(it,ft,Br,Sr,jr,Cr);function Rr(t){return(...n)=>Fr(t,(t=>t(...n)))}async function Tr(t,n){if(!t)return;return S(V(t),((r,e,o,u)=>n(t[r],r,t,u,o)))}function Nr(t,n=i){if(w(t)||qn(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function Pr(t,n=i,r){if(Gn(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(w(t)||qn(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const Ur=Kn(C,S,rr,Tr,Nr,Pr);function _r(t){return n=>Ur(t,(t=>t(n)))}function Lr(t,n){return(...r)=>t(...n.map((t=>r[t])))}function Dr(t,n){function r(...t){r.id?r.shouldThrottle=lr:(r.callable(...t),r.id=dr((()=>{r.shouldThrottle&&r.callable(...t),r.id=ur}),n))}return r.id=ur,r.callable=t.bind(r),r.clear=()=>{pr.remove(r.id),r.id=ur},r}function Zr(t,n){return(...r)=>n(t,...r)}const kr=Function.prototype;function qr(t){return kr.call.bind(t)}const Vr=Object.getOwnPropertyNames,zr=Object.getOwnPropertyDescriptor,Gr=Object.defineProperty,Jr=qr(Object.hasOwnProperty),Wr=Object.is;function Hr(t,n){return t+n}function Kr(t){return t-1}function Qr(t,n){return t/n}function Xr(t){return t+1}function Yr(t,n){return t*n}function te(t,n){return 0!==t&&(0===n?0:n/t*100)}const{random:ne}=Math;function re(t,n=0){return ne()*(t-n)+n}function ee(t,n){return t%n}function oe(t){return t.reduce(((t,n)=>t-n),0)}function ue(t){return t.reduce(((t,n)=>t+n),0)}function ce(t,n,r){return t>n&&t<r}function ie(t,n,r){return t<n||t>r}const{sign:se}=Math;function fe(t){return 1===se(t)}function ae(t){return 0===t}const le=Object.entries;function he(t){if(c(t))return le(t)}function ge(t){const n=[];return Dn(t,((t,r)=>{c(t)&&n.push(r)})),n}async function pe(t,n=i,r={}){return await Ln(t,(async(t,e,o,u,i)=>{const s=await n(t,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function de(t,n=i,r={}){return Dn(t,((t,e,o,u,i)=>{const s=n(t,e,r,o,u,i);c(s)&&(r[e]=s)})),r}function me(t,n,r={}){return Dn(t,((t,e,o,u,c)=>{!0===n(t,e,r,o,u,c)&&(r[e]=t)})),r}async function we(t,n,r={}){return await Ln(t,(async(t,e,o,u,c)=>{!0===await n(t,e,r,o,u,c)&&(r[e]=t)})),r}function ye(t,n={}){if(t)return Dn(t,((t,r)=>{n[t]=r})),n}const be=(t,n)=>{if(t===n)return!0;const r=V(t),e=V(n);return r.length===e.length&&C(r,(r=>t[r]===n[r]))},ve=/[()[\]{}*+?^$|#.,/\\\s-]/g;function Ae(t){return t.replace(ve,"\\$&")}function Ie(t,n){return n?Ie(it(t,Ae)):RegExp(t.join("|"))}const Ee=Q("RegExp"),Me=X(Ee);function xe(t,n){if(!t)return{};if(w(n)){const r=Ie(n);return me(t,((t,n)=>!r.test(n)))}if(Me(n))return me(t,((t,r)=>!n.test(r)));if(Yt(n))return me(t,((t,r)=>r!==n));if(Qt(n)){const r=n.toString();return me(t,((t,n)=>n!==r))}return Ht(n)?me(t,((t,r)=>!n(t,r))):nn({},t)}const Oe=(t,n,r={})=>{if(t)return s(n,(n=>{r[n]=t[n]})),r};function $e(t){if(!t)return;if(nt(t))return V(t).length;const n=t.length;if(c(n))return n;const r=t.size;return c(n)?r:V(t).length}const je=(t,n)=>{const r={};return s(t,((t,e)=>{r[t]=n[e]})),r},Ce=t=>{const n=[],r=[];return Dn(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},Se=/[ _-]+/g;function Be(t){let n="";return t.replace(Se," ").trim().split(" ").forEach(((t,r)=>{n+=0===r?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()})),n}const Fe=/[ _-]+/g,Re=/[ ]+/g;function Te(t){return t.replace(/([A-Z]+)/g," $1").replace(Fe," ").trim().toLowerCase().replace(Re,"-")}const Ne=/[ _-]+/g,Pe=/[ ]+/g;function Ue(t){return t.replace(/([A-Z]+)/g," $1").replace(Ne," ").trim().toLowerCase().replace(Pe,"_")}const _e=/[ _-]+/g;function Le(t){return t.replace(/([A-Z]+)/g," $1").replace(_e," ").trim().toUpperCase()}const De=/[ _-]+/g;function Ze(t){return t.replace(/([A-Z]+)/g," $1").replace(De," ").trim().toLowerCase()}function ke(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)}function qe(t,n=1){return t[t.length-n]}function Ve(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))}function ze(t,n=1){return t.slice(0,-1*n)}function Ge(t,n=1){return t.substring(n)}function Je(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)}function We(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let u,c=r-n;for(;c<o&&c>=0&&(u=e[c]," "!==u);c--);return t.slice(0,c).trim()})(t,n,r):t}function He(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let u,c=n;for(;c<o&&c>0&&(u=e[c]," "!==u);c++);return t.substring(c,r).trim()})(t,n,r):t}const Ke=/%(?![\da-f]{2})/gi,Qe=/&/g,Xe=/</g,Ye=/>/g,to=/"/g;function no(t){return decodeURIComponent(t.replace(Ke,(()=>"%25")))}function ro(t){return t.replace(Qe,"&amp;").replace(Xe,"&lt;").replace(Ye,"&gt;").replace(to,"&quot;")}function eo(t){return ro(no(t))}const oo=/\S+/g,uo=/\w+/g;function co(t){return t.match(oo)||[]}function io(t){return t.match(uo)||[]}const so=/\w+/g;function fo(t){return t[0].toUpperCase()}function ao(t){return fo(t)+Ge(t)}function lo(t){return fo(t)+Ge(t).toLowerCase()}function ho(t){return t.replace(so,(t=>ao(t)))}function go(t){return t.replace(so,(t=>lo(t)))}function po(t){return Or(t)?.name}function mo(t){return!!c(t)&&"[object Arguments]"===t.toString()}const wo=Q("Map"),yo=X(wo),bo=/Array/,vo="Array";function Ao(t){if(t){const n=po(t);if(bo.test(n)&&n!==vo)return!0}return!1}function Io(t){return!c(t)}function Eo(t,n){if(Io(t)||Ht(t))return!1;if(w(t)||Ao(t))return!0;const r=t.length;if(!Io(r)||!Qt(r)||r<0)return!1;if(n){const n=V(t);return!!n&&Ur(n,((t,n)=>n>=0&&Qt(n)))}return!0}const Mo=Q("BigInt"),xo=X(Mo),Oo=Q("Boolean"),$o=X(Oo),jo=Q("ArrayBuffer"),Co=X(jo);function So(t,n){return!(!t||!n)&&t instanceof n}const Bo=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");function Fo(t){if(c(t)){const n=t?.constructor?.name;return Bo.test(n)}return!1}const Ro=Q("Date"),To=X(Ro);function No(t){return Yt(t)||w(t)?!o(t):nt(t)?!$e(t):!c(t)}function Po(t){return!1===t}const Uo=Q("Float32Array"),_o=X(Uo),Lo=Q("Float64Array"),Do=X(Lo),{isInteger:Zo}=Number,ko=Zo,qo=Q("Int16Array"),Vo=X(qo),zo=Q("Int32Array"),Go=X(zo),Jo=Q("Int8Array"),Wo=X(Jo);function Ho(t){return c(t)&&"function"==typeof t[Symbol.iterator]}function Ko(t){return!!t&&t instanceof Promise}function Qo(t){return!!t&&(Ko(t)||Hn(t)||Gn(t))}function Xo(t,n){return!!(t&&n&&n.call)&&t instanceof n}function Yo(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n}function tu(t,n){return!Io(t)&&!Io(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)}const{isSafeInteger:nu}=Number,ru=nu;function eu(t,n){const r=Or(t),e=Or(n);return r===e&&r.name===e.name}function ou(t){return!0===t}const uu=Q("Uint16Array"),cu=X(uu),iu=Q("Uint32Array"),su=X(iu),fu=Q("Uint8Array"),au=X(fu),lu=Q("Uint8ClampedArray"),hu=X(lu),gu=Q("WeakMap"),pu=X(gu),du=void 0!==globalThis.Deno,mu=void 0!==globalThis.process&&process.versions&&process.versions.node;function wu(t,n=!0){return Boolean(t)&&n}function yu(t,n=!0){return!1===Boolean(t)&&n}function bu(t,n,r,e){if(c(t)){if(Ht(n))return r?yr(n,r,e):n(...e);if(nt(n))return n[r]=t,n}}function vu(t,n){return Po(rt(t,n))}const Au=JSON;function Iu(t,n){if(t)return Au.parse(t,n)}const Eu=Au.stringify;function Mu(t,n,r){const e=globalThis.options||r;let o;return Ht(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Eu(t)}\n\t\tExpected: ${Eu(n)}`,e)}async function xu(t,n,r){const e=await t;return!(Ht(n)&&!1===await n(e,r))&&!vu(e,n)||Mu(e,n,r)}function Ou(t,n,r){if(Qo(t)||Qo(n))return xu(t,n,r);return!(Ht(n)&&!1===n(t,r))&&!vu(t,n)||Mu(t,n,r)}function $u(t,n,r){const e=Fr(t,(t=>Ht(t)?t.bind(n):t));return r?en(r,e):e}function ju(t){if(t){if(tt(t))return Wt(t);if(w(t))return n(t);t.clear?t.clear():t.length&&(t.length=0)}return t}const Cu=globalThis.structuredClone;function Su(t){return Cu(t)}function Bu(t){if(nt(t)){const n=V(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],u=t[r];wu(u)&&(e[r]=u)}return e}return t.filter((t=>wu(t)))}async function Fu(t,n=i,r,e){if(Gn(t)){const r=[];for await(const o of t(...e)){const e=await n(o,r,t);c(e)&&r.push(e)}return r}const o=r||$r(t);if(w(t)||qn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){const u=await n(r,o,t);c(u)&&e(u)}return o}const u=Ht(o.set);for await(const[r,e]of t){const i=await n(e,r,o,t);c(i)&&(u?o.set(r,i):o[r]=i)}return o}function Ru(t,n=i,r){const e=r||$r(t);if(w(t)||qn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){const u=n(r,e,t);c(u)&&o(u)}return e}const o=Ht(e.set);for(const[r,u]of t){const i=n(u,r,e,t);c(i)&&(o?e.set(r,i):e[r]=i)}return e}const Tu=Kn(f,l,de,pe,Ru,Fu);function Nu(...t){return Hn(t[0])?async function(...n){return Ur(t,(async t=>Ur(n,(async n=>t(n)))))}:function(...n){return Ur(t,(t=>Ur(n,(n=>t(n)))))}}function Pu(t,n=i,r){const e=r||$r(t);if(w(t)||qn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=Ht(e.set);for(const[o,u]of t){!0===n(u,o,e,t)&&(r?e.set(o,u):e[o]=u)}}return e}async function Uu(t,n=i,r,e){if(Gn(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||$r(t);if(w(t)||qn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=Ht(o.set);for await(const[e,u]of t){!0===await n(u,e,o,t)&&(r?o.set(e,u):o[e]=u)}}return o}const _u=Kn(B,F,me,we,Pu,Uu);function Lu(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const Du=Lu(s),Zu=Lu($);function ku(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const qu=ku(a),Vu=ku(j);function zu(t,n){const r=$r(t),e=r.push||r.add;if(e&&Ht(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else Ht(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r}function Gu(t,n){const r={};return s(t,((t,e)=>{r[n[e]]=t})),r}function Ju(t,n,r){return!Io(t)&&!Io(n)&&(t===n||(Yt(t)?Yt(n)?t.includes(n,r):Me(n)?n.test(t):Ht(n)?n(t):w(n)?C(n,(n=>Ju(t,n))):Ur(n,(n=>Ju(t,n))):w(t)?Me(n)?C(t,(t=>t.test(n))):Ht(n)?C(t,n):w(n)?C(n,(n=>Ju(t,n))):t.includes(n,r):!!nt(t)&&(Me(n)?rr(t,(t=>t.test(n))):Ht(n)?rr(t,n):nt(n)?rr(t,((t,r)=>t===n[r])):rr(t,(t=>Ju(t,n))))))}const Wu=Bn(/\./),Hu=(t,n,r)=>(n&&!c(t[n])&&(t[n]=r),t);class Ku{list=v(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,lr),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Qu=v(Ku);function Xu(t,n){return Qu.set(t,n)}function Yu(){ir(setTimeout(er,0),(t=>{Qu.remove(t)}))}function tc(t,...n){return Qn(n,(n=>{Qn(n,((n,r)=>{if(t[r]&&(nt(n)||w(n)||n.forEach))return tc(t[r],n);t[r]=n}))})),t}function nc(t){return c(t)?nc[t]:V(nc)}const rc=globalThis.navigator?.userAgentData;if(rc)Dn(rc,((t,n)=>{$o(t)&&t&&(nc[n]=t)})),s(rc.brands,(t=>{nc[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");s(t.split(/ |\//),(t=>{nc[t]=!0}))}class ec{static models=new Map;constructor(t,n){c(n)?(en(this,n),this.modelName=t,ec.models.set(t,n)):en(this,t)}delete(t){ec.models.delete(t||this.modelName)}set(t){t&&(this.modelName=t),ec.models.set(t||this.modelName,this)}has(t){return ec.models.has(t||this.modelName)}get(t){return ec.models.get(t||this.modelName)}}function oc(t,n){return c(n)?v(ec,[t,n]):k(t,ec.models)}function uc(t,n){return[t,n]}async function cc(t,n,r){if(t)return w(t)?st(t,n):void 0}function ic(t,n,r){const e=t.length,o=[];for(let u=0;u<e;u++)o[u]=n(t[u],u,t,e,r);return Promise.allSettled(o)}function sc(t){return new Promise(t)}const fc=(t,n,r=V(t))=>C(r,(r=>rt(t[r],n[r])));function ac(t,n,r){return n&&nt(t)||Qt(n)&&w(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t}function lc(t,n,r){return Qt(r)&&w(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t}class hc{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;Dn(t,(n=>{t[n]=new hc(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new hc(r),!0)})}}async function gc(t,n){for(let r=0;r<t;r++)await n(t)}async function pc(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r}function dc(t,n=!0,r=!1){return rt(n,t)?r:n}class mc{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return c(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const wc=v(mc);class yc{constructor(t=new Map){this.items=t}getItem(t){return this.isMap?this.items.get(t):this.items[t]}get(...t){return this.getItem(...t)}hasItem(t){return this.isMap?this.items.has(t):c(this.items[t])}has(...t){return this.hasItem(...t)}setItem(t,n){return this.isMap?this.items.set(t,n):this.items[t]=n,this}set(...t){return this.setItem(...t)}clear(){return this.isMap?this.items.clear():this.items=$r(this.items),this}removeItem(t){return this.isMap?this.items.delete(t):this.items[t]=null,this}remove(...t){return this.removeItem(...t)}}function bc(t){return new yc(t)}export{Xn as Chain,Ku as Intervals,ec as Model,hc as Store,gr as Timers,mc as UniqID,yc as VirtualStorage,Hr as add,Pn as after,yr as apply,Ie as arrayToRegex,Gu as arraysToObject,Un as ary,Ou as assert,xu as assertAsync,en as assign,on as assignToClass,rn as assignToObject,_n as before,$u as bindAll,qr as cacheNativeMethod,te as calcProgress,Be as camelCase,Yn as chain,t as chunk,Ve as chunkString,ju as clear,n as clearArray,Wt as clearBuffer,Yu as clearIntervals,mr as clearTimers,Su as clone,r as cloneArray,$r as cloneType,Bu as compact,ge as compactKeys,Tu as compactMap,f as compactMapArray,l as compactMapAsyncArray,pe as compactMapAsyncObject,de as compactMapObject,cc as concurrent,st as concurrentArray,ic as concurrentStatus,v as construct,K as constructorName,cn as countBy,sn as countKey,fn as countWithoutKey,tr as curry,nr as curryRight,br as debounce,Kr as deduct,Gr as defProp,M as difference,Qr as divide,x as drop,O as dropRight,Qn as each,s as eachArray,a as eachAsyncArray,Ln as eachAsyncObject,Dn as eachObject,$ as eachRight,j as eachRightAsync,A as ensureArray,Jt as ensureBuffer,Ae as escapeRegex,ve as escapeRegexRegex,Ur as every,Nu as everyArg,C as everyArray,S as everyAsyncArray,Tr as everyAsyncObject,rr as everyObject,un as extendClass,ur as falsy,_u as filter,B as filterArray,F as filterAsyncArray,we as filterAsyncObject,me as filterObject,ln as findIndex,an as findIndexCache,hn as findItem,R as first,T as flatten,I as flattenDeep,Du as flow,qu as flowAsync,Vu as flowAsyncRight,Zu as flowRight,E as forEach,Zn as forEachAsync,zu as forMap,Vn as forOf,Jn as forOfAsync,Ru as forOfCompactMap,Fu as forOfCompactMapAsync,Nr as forOfEvery,Pr as forOfEveryAsync,Pu as forOfFilter,Uu as forOfFilterAsync,jr as forOfMap,Cr as forOfMapAsync,Kn as generateLoop,k as get,he as getEntries,Cn as getFileExtension,Sn as getFilename,wn as getHighest,vn as getLowest,Bt as getNumberInsertIndex,zr as getPropDesc,Vr as getPropNames,Or as getType,po as getTypeName,An as groupBy,Ju as has,J as hasAnyKeys,Wu as hasDot,G as hasKeys,o as hasLength,Jr as hasProp,c as hasValue,ro as htmlEntities,vr as ifInvoke,Hu as ifNotAssign,bu as ifValue,Ar as inAsync,Ir as inSync,Xr as increment,In as indexBy,N as initial,ze as initialString,ke as insertInRange,P as intersection,Xu as interval,Qu as intervals,ye as invert,U as invokeArray,En as invokeCollection,Mn as invokeCollectionAsync,mo as isArguments,w as isArray,Co as isArrayBuffer,jo as isArrayBufferCall,Eo as isArrayLike,Hn as isAsync,Wn as isAsyncCall,xo as isBigInt,Mo as isBigIntCall,$o as isBoolean,Oo as isBooleanCall,tt as isBuffer,Y as isBufferCall,So as isChild,Fo as isCloneable,W as isConstructor,H as isConstructorFactory,Q as isConstructorNameFactory,To as isDate,Ro as isDateCall,du as isDeno,No as isEmpty,rt as isEqual,_o as isF32,Uo as isF32Call,Do as isF64,Lo as isF64Call,Po as isFalse,yu as isFalsy,Fn as isFileCSS,Rn as isFileHTML,Tn as isFileJS,Nn as isFileJSON,ko as isFloat,Ht as isFunction,Gn as isGenerator,zn as isGeneratorCall,Vo as isI16,qo as isI16Call,Go as isI32,zo as isI32Call,Wo as isI8,Jo as isI8Call,Ho as isIterable,Qo as isKindAsync,yo as isMap,wo as isMapCall,et as isMatchArray,be as isMatchObject,g as isNegative,mu as isNodejs,y as isNotArray,Xt as isNotNumber,tn as isNotString,u as isNull,Qt as isNumber,Kt as isNumberCall,Mt as isNumberEqual,ce as isNumberInRange,ie as isNumberNotInRange,Xo as isParent,nt as isPlainObject,fe as isPositive,Yo as isPrimitive,Ko as isPromise,Me as isRegex,Ee as isRegexCall,tu as isRelated,ru as isSafeInt,Wr as isSame,eu as isSameType,qn as isSet,kn as isSetCall,Yt as isString,ou as isTrue,wu as isTruthy,X as isTypeFactory,Ao as isTypedArray,cu as isU16,uu as isU16Call,su as isU32,iu as isU32Call,au as isU8,hu as isU8C,lu as isU8CCall,fu as isU8Call,e as isUndefined,pu as isWeakMap,gu as isWeakMapCall,ae as isZero,Iu as jsonParse,Te as kebabCase,V as keys,ut as largest,ct as last,Ze as lowerCase,Fr as map,it as mapArray,ft as mapAsyncArray,Sr as mapAsyncObject,Br as mapObject,at as mapRightArray,lt as mapWhile,tc as merge,oc as model,Yr as multiply,Er as negate,Io as noValue,er as noop,vu as notEqual,Mr as nthArg,nn as objectAssign,le as objectEntries,$e as objectSize,xe as omit,xr as once,Tt as onlyUnique,Rr as over,_r as overEvery,uc as pair,pt as partition,Oe as pick,On as pluck,xn as pluckObject,sc as promise,fc as propertyMatch,re as randomFloat,Et as randomInt,m as range,d as rangeDown,p as rangeUp,no as rawURLDecode,Lr as reArg,Bn as regexTestFactory,ee as remainder,wt as remove,yt as removeBy,Je as replaceList,bt as rest,Ge as restString,i as returnValue,vt as right,qe as rightString,jt as sample,eo as sanitize,ac as setKey,lc as setValue,$t as shuffle,St as smallest,Ue as snakeCase,pn as sortCollectionAlphabetically,jn as sortCollectionAlphabeticallyReverse,mn as sortCollectionAscending,dn as sortCollectionAscendingFilter,bn as sortCollectionDescending,yn as sortCollectionDescendingFilter,gt as sortNumberAscending,mt as sortNumberDescening,gn as sortObjectsAlphabetically,$n as sortObjectsAlphabeticallyReverse,Nt as sortUnique,Eu as stringify,or as stubArray,cr as stubFalse,fr as stubObject,ar as stubString,hr as stubTrue,ht as subtract,oe as subtractAll,dt as subtractReverse,ue as sumAll,Ft as take,Rt as takeRight,Dr as throttle,dr as timer,pr as timers,ir as times,gc as timesAsync,sr as timesMap,pc as timesMapAsync,Ot as toArray,Z as toPath,dc as toggle,co as tokenize,We as truncate,He as truncateRight,lr as truth,Gt as unZip,Ce as unZipObject,Ut as union,wc as uniqID,Pt as unique,_t as untilFalseArray,Lt as untilTrueArray,Le as upperCase,ao as upperFirst,ho as upperFirstAll,fo as upperFirstLetter,lo as upperFirstOnly,go as upperFirstOnlyAll,bc as virtualStorage,Dt as whileCompactMap,Zt as whileEachArray,kt as whileMapArray,qt as without,io as words,Zr as wrap,Vt as xor,zt as zip,je as zipObject};
//# sourceMappingURL=basic.js.map

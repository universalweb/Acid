function t(t,n=1){const r=[];let e=0;return t.forEach(((t,o)=>{o%n||(r.push([]),o&&e++),r[e].push(t)})),r}function n(t){return t.length=0,t}function r(t){return t.slice()}function e(t){return void 0===t}function o(t){return Boolean(t.length)}function c(t){return null===t}function u(t){return!e(t)&&!c(t)}function i(t){return t}function s(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)n(t[o],o,t,e,r);return t}function f(t,n=i,r=[],e){return s(t,((t,o,c,i)=>{const s=n(t,o,r,c,i,e);u(s)&&r.push(s)})),r}async function a(t,n){if(!t)return;const r=t.length;for(let e=0;e<r;e++)await n(t[e],e,t,r);return t}async function l(t,n=i){const r=[];return await a(t,(async(t,e,o)=>{const c=await n(t,e,r,o);u(c)&&r.push(c)})),r}function h(t,n,r){const e=[];let o=t;for(;o<n;)e.push(o),o+=r;return e}function d(t,n,r){const e=r<0?-1*r:r,o=[];let c=t;for(;c>n;)o.push(c),c-=e;return o}function g(t,n,r=1){return t<n?h(t,n,r):d(t,n,r)}function p(t,n){return t.forEach(n),t}const m=Array.isArray;function w(t){return m(t)&&t||u(t)&&[t]||[]}function y(t){return t.flat(1/0)}const b=Reflect.construct;function v(t,n=[],r){const e=m(n)?n:[n];return r?b(t,e,r):b(t,e)}function A(...t){const n=v(Map),r=[];return s(t,((t,r)=>{s(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),p(n,(t=>{1===t.count&&0===t.parentIndex&&r.push(t.child)})),r}function E(t,n,r=t.length){return t.splice(n,r)}const I=(t,n,r=t.length)=>E(t,0,r-n);function x(t,n,r){if(!t)return;const e=t.length;for(let o=e-1;o>=0;o--)n(t[o],o,t,e,r);return t}async function S(t,n){if(!t)return;const r=t.length;for(let e=r-1;e>=0;e--)await n(t[e],e,t,r);return t}function $(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===n(t[o],o,t,e,r))return!1;return!0}async function j(t,n,r){if(!t)return;const e=t.length;for(let o=0;o<e;o++)if(!1===await n(t[o],o,t,e,r))return!1;return!0}function B(t,n,r=[],e){return s(t,((t,o,c,u)=>{!0===n(t,o,r,c,u,e)&&r.push(t)})),r}async function C(t,n,r=[],e){return await a(t,(async(t,o,c,u)=>{!0===await n(t,o,r,c,u,e)&&r.push(t)})),r}function F(t,n){return n?t.slice(0,n):t[0]}function L(t,n=1){if(!t)return;let r=t;for(let t=0;t<n;t++)r=r.reduce(((t,n)=>t.concat(w(n))),[]);return r}function O(t){return t.slice(0,t.length-1)}function T(t,...n){return f(t,(t=>{if($(n,(n=>n.includes(t))))return t}))}const M=Object.keys;function R(t){if(t)return M(t)}const N=/\.|\[/,U=/]/g,P="";function k(t){return t.replace(U,P).split(N)}function D(t,n){if(!n)return!1;let r=n;return $(m(t)?t:k(t),(t=>(r=r[t],u(r)))),r}const z=Object.hasOwn;function H(t,...n){if(t)return $(n,(n=>{const r=k(n);if(1===r.length)return z(t,n);{const n=r.pop(),e=D(r,t);return!!e&&z(e,n)}}))}function W(t,...n){if(t)return Boolean(n.find((n=>{const r=k(n);if(1===r.length)return z(t,n);{const n=r.pop(),e=D(r,t);return!!e&&z(e,n)}})))}const _=t=>!!u(t)&&"Object("===t.constructor.toString().trim().slice(9,16),q=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(_(t)){const r=R(t);if(H(n,r))return $(r,(r=>q(t[r],n[r])))}else if(m(t)&&t.length===n.length)return $(t,((t,r)=>q(t,n[r])));return!1};function G(t,n){return t.length===n.length&&$(t,((t,r)=>q(n[r],t)))}const J=Math.max;function V(t){return J(...t)}function Z(t,n){const r=t.length;return n?t.slice(r-n,r):t[r-1]}function K(t,n,r=[],e){return s(t,((t,o,c,u)=>{r[o]=n(t,o,r,c,u,e)})),r}async function Q(t,n){const r=[];return await a(t,(async(t,e,o)=>{r[e]=await n(t,e,o)})),r}function X(t,n,r=[],e){let o=0;const c=t.length;for(let u=c-1;u>=0;u--)r[o]=n(t[u],u,t,c,e),o++;return r}function Y(t,n,r=[],e){const o=t.length;for(let c=0;c<o;c++){const u=t[c];if(!1===n(u,c,r,t,o,e))break;r[c]=u}return r}const tt=(t,n)=>t-n;function nt(t){return t.sort(tt)}function rt(t,n){const r={};return s(t,((t,e)=>{r[n[e]]=t})),r}function et(t,n){const r=[];return[f(t,(t=>{if(n(t))return t;r.push(t)})),r]}const ot=(t,n)=>n-t;function ct(t){return t.sort(ot)}function ut(t,n){let r=t.length;for(let e=0;e<r;e++){const o=t[e];n.includes(o)&&(t.splice(e,1),e--,r--)}return t}function it(t,n){let r=t.length;for(let e=0;e<r;e++){n(t[e],e)&&(t.splice(e,1),e--,r--)}return t}function st(t){return t.slice(1,t.length)}function ft(t,n){return t[t.length-1-n]}const{floor:at,random:lt}=Math;function ht(t,n=0){return at(lt()*(t-n))+n}const dt=Array.from;function gt(t,n){return t===n}function pt(t,n=t.length){if(t.length<=1)return dt(t);const r=dt(t);let e,o,c=0;for(;c<n;)e=ht(r.length-1,0),o=r[c],r[c]=r[e],r[e]=o,c++;return r}function mt(t,n){if(!t)return!1;const r=t.length;if(r===n||n>r)return pt(t);if(1===n)return[t[ht(r-1,0)]];const e=[],o={};let c,u=0;for(;u<n;)c=ht(t.length-1,0),o[c]||(e.push(t[c]),o[c]=!0,u++);return e}const wt=Math.min;function yt(t){return wt(...t)}function bt(t,n){let r=0;return $(t,((t,e)=>(r=e,n>t))),r}function vt(t,n=1){return t.slice(0,n)}function At(t,n=1){const r=t.length;return t.slice(r-n,r)}function Et(t,n,r){return r.indexOf(t)===n}function It(t,n,r){return t!==r[n-1]}function xt(t,n){return n?t.filter(It):t.filter(Et)}function St(...t){return xt(y(t))}function $t(t,n){const r=t.length;for(let e=0;e<r;e++)if(!1===n(t[e],e))return!1;return!0}function jt(t,n){const r=t.length;for(let e=0;e<r;e++)if(!0===n(t[e],e))return!1;return!0}function Bt(t,n,r=[],e){let o=0;for(;o<t.length;){const c=r.push(n(t[o],o,t,t.length,e));o++,u(c)&&r.push(c)}return t}function Ct(t,n,r){let e=0;for(;e<t.length;)n(t[e],e,t,t.length,r),e++;return t}function Ft(t,n,r=[],e){let o=0;for(;o<t.length;)r.push(n(t[o],o,t,t.length,e)),o++;return t}function Lt(t,n){if(!n)return t;const r=v(Set,n);return t.filter((t=>!r.has(t)))}function Ot(...t){const n=v(Map),r=[];return 2===t.length?A(t[0],t[1]):(s(t,((t,r)=>{s(t,((t,e)=>{let o=n.get(t);if(o){if(o.parentIndex===r)return;o.count++}else o={count:1,parentIndex:r,child:t},n.set(t,o)}))})),p(n,(t=>{1===t.count&&r.push(t.child)})),r)}function Tt(...t){return t[0].map(((n,r)=>t.map((t=>t[r]))))}function Mt(t){return t[0].map(((n,r)=>t.map((t=>t[r]))))}function Rt(t,n){return t?.constructor===n||!1}function Nt(t){return n=>Rt(n,t)}function Ut(t){return t?.constructor?.name}function Pt(t){return n=>Ut(n)===t||!1}function kt(t){return function(n,...r){return r?t(n)&&$(r,t):t(n)}}const Dt=Pt("Buffer"),zt=kt(Dt);function Ht(t){return zt(t)&&t||u(t)&&Buffer.from(t)||Buffer.alloc(0)}function Wt(t,n){const r={};let e;return s(t,(t=>{e=n(t),r[e]||(r[e]=0),r[e]++})),r}function _t(t,n){let r=0;return s(t,(t=>{t[n]&&r++})),r}function qt(t,n){let r=0;return s(t,(t=>{t[n]||r++})),r}function Gt(t,n,r,e,o){if(t[o]===e)return!0}function Jt(t,n,r="id"){const e=t.findIndex(((t,e)=>Gt(t,0,0,n,r)));return-1!==e&&e}function Vt(t,n,r="id"){const e=t.find(((t,e)=>Gt(t,0,0,n,r)));return-1!==e&&e}function Zt(t,n,r=!0){return(r?t:[...t]).sort(((t,r)=>function(t,n,r){return n[r]?t[r]?t[r]<n[r]?1:t[r]>n[r]?-1:0:1:-1}(t,r,n)))}function Kt(t,n){return Zt(t,n,!1)[0]}function Qt(t,n,r){return n[r]?t[r]?t[r]<n[r]?-1:t[r]>n[r]?1:0:-1:1}function Xt(t,n="id",r=!0){return(r?t:[...t]).sort(((t,r)=>Qt(t,r,n)))}function Yt(t,n="id"){return Xt(t,n)[0]}function tn(t,n){const r={};return s(t,(t=>{const e=n(t);r[e]||(r[e]=[]),r[e].push(t)})),r}function nn(t,n="id"){const r={};return s(t,(t=>{r[t[n]]=t})),r}function rn(t,n,r){return K(t,((t,e)=>t[n](r,e)))}function en(t,n,r){return Q(t,(async(t,e)=>t[n](r,e)))}function on(t,n){return K(t,(t=>t[n]))}function cn(t,n){if(t)return K(n,(n=>t[n]))}function un(t,n){return K(t,(t=>cn(t,n)))}function sn(t,n){return t.sort(((t,r)=>{const e=t[n],o=r[n];return e<o?-1:e>o?1:0}))}const fn=/\.([0-9a-z]+)/;function an(t){const n=t.match(fn);if(n)return n[1]}function ln(t){return n=>!!u(n)&&t.test(n)}const hn=ln(/\.css$/),dn=ln(/\.html$/),gn=ln(/\.js$/),pn=ln(/\.json$/);function mn(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e<=0&&(r=n(...t),e=null),r)}function wn(t,n){return(...r)=>t(...r.splice(0,n))}function yn(t,n){let r,e=t;return(...t)=>(null!==e&&e--,e>=1?r=n(...t):e=null,r)}const bn=Object.assign;function vn(t,...n){if(t)return bn(t,...n)}const An=async(t,n)=>{if(!t)return;const r=R(t);return await a(r,((e,o,c,u)=>n(t[e],e,t,u,r))),t};function En(t,n){if(!t)return;return s(R(t),((r,e,o,c)=>{n(t[r],r,t,c,o)}))}async function In(t,n){const r=[],e=[];let o=0;t.forEach(((t,n)=>{r[o]=t,e[o]=t,o++}));for(let t=0;t<o;t++)await n(r[t],e[t]);return t}const xn=Pt("Set"),Sn=kt(xn);function $n(t,n){if(Sn(t)){for(const r of t)n(r,t);return t}for(const[r,e]of t)n(e,r,t);return t}const jn=Pt("GeneratorFunction"),Bn=kt(jn);async function Cn(t,n,r){if(Sn(t)){for(const r of t)await n(r,t);return t}if(Bn(t))for await(const e of t(...r))await n(e,t);for(const[r,e]of t)await n(e,r,t);return t}const Fn=t=>!!u(t)&&t instanceof Function,Ln=Pt("AsyncFunction"),On=kt(Ln);function Tn(t,n,r,e,o,c){return(i,s,f)=>{let a;const l=On(s);if(u(i)&&s)return a=m(i)?l?n:t:_(i)||Fn(i)?l?e:r:o?l?c:o:Bn(i)?c:l?e:r,a(i,s,f)}}const Mn=Tn(s,a,En,An,$n,Cn);function Rn(t){const n=t=>(n.value=t,n.methods);return vn(n,{add:t=>((t,n)=>(Mn(n,((n,r)=>{t.methods[r]=(...r)=>(n(t.value,...r),t.methods)})),t))(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n}function Nn(t,r=t.length){const e=[],o=(...c)=>{if(e.push(...c),e.length===r){const r=t(...e);return n(e),r}return o};return o}function Un(t,r=t.length){const e=[],o=(...c)=>{if(e.unshift(...c),e.length===r){const r=t(...e);return n(e),r}return o};return o}const Pn=!0,kn=()=>Pn,Dn=!1,zn=()=>Dn,Hn=()=>{};function Wn(t,n){for(let r=0;r<t;r++)n(r)}function _n(t,n,r=[]){for(let e=0;e<t;e++)r[e]=n(t);return r}class qn{list=v(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=this,e=setTimeout((()=>{t(),r.remove(e)}),n);return this.list.set(e,Pn),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Gn=v(qn);function Jn(t,n){return Gn.set(t,n)}function Vn(){Wn(setTimeout(Hn,0),(t=>{Gn.remove(t)}))}const Zn=Reflect.apply;function Kn(t,n){function r(...t){r.id!==Dn&&Gn.remove(r.id),r.id=Jn((()=>{r.callable(...t),r.id=Dn}),n)}return r.id=Dn,r.callable=t.bind(r),r.clear=()=>{r.id!==Dn&&(Gn.remove(r.id),r.id=Dn)},r}function Qn(t,...n){if(Fn(t))return t(...n)}async function Xn(t,n){const r=t.length;for(let e=0;e<r;e++){const o=t[e];await o(n,e,t,r)}return t}const Yn=(t,n)=>Mn(t,(t=>{t(n)}));function tr(t){return(...n)=>!t(...n)}function nr(t=0){return(...n)=>n[t]}const rr=t=>{let n;return(...r)=>(u(n)||(n=t(...r)),n)};async function er(t,n,r={}){if(t)return await An(t,(async(t,e,o,c,u)=>{r[e]=await n(t,e,r,o,c,u)})),r}function or(t,n,r={}){if(t)return En(t,((t,e,o,c,u)=>{r[e]=n(t,e,r,o,c,u)})),r}function cr(t){return t?.constructor}function ur(t,n=[]){const r=cr(t);return r===Function&&"function"===r.name?function(){}:v(r,n)}function ir(t,n=i,r){const e=r||ur(t);if(m(t)||Sn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){o(n(r,e,t))}return e}const o=Fn(e.set);for(const[r,c]of t){const u=n(c,r,e,t);o?e.set(r,u):e[r]=u}return e}async function sr(t,n=i,r,e){if(Bn(t)){const r=[];for await(const o of t(...e))r.push(await n(o,r,t));return r}const o=r||ur(t);if(m(t)||Sn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){e(await n(r,o,t))}return o}const c=Fn(o.set);for await(const[r,e]of t){const u=await n(e,r,o,t);c?o.set(r,u):o[r]=u}return o}const fr=Tn(K,Q,or,er,ir,sr);function ar(t){return(...n)=>fr(t,(t=>t(...n)))}async function lr(t,n){if(!t)return;return j(R(t),((r,e,o,c)=>n(t[r],r,t,c,o)))}function hr(t,n){if(!t)return;return $(R(t),((r,e,o,c)=>n(t[r],r,t,c,o)))}function dr(t,n=i){if(m(t)||Sn(t))for(const r of t){if(!1===n(r,t))return!1}else for(const[r,e]of t){if(!1===n(e,r,t))return!1}return!0}async function gr(t,n=i,r){if(Bn(t))for await(const e of t(...r)){if(!1===await n(e,t))return!1}else if(m(t)||Sn(t))for(const r of t){if(!1===await n(r,t))return!1}else for(const[r,e]of t){if(!1===await n(e,r,t))return!1}return!0}const pr=Tn($,j,hr,lr,dr,gr);function mr(t){return n=>pr(t,(t=>t(n)))}function wr(t,n){return(...r)=>t(...n.map((t=>r[t])))}function yr(t,n){function r(...t){r.id?r.shouldThrottle=Pn:(r.callable(...t),r.id=Jn((()=>{r.shouldThrottle&&r.callable(...t),r.id=Dn}),n))}return r.id=Dn,r.callable=t.bind(r),r.clear=()=>{Gn.remove(r.id),r.id=Dn},r}function br(t,n){return(...r)=>n(t,...r)}const vr=Object.is,Ar=Function.prototype;function Er(t){return Ar.call.bind(t)}const Ir=Object.getOwnPropertyNames,xr=Object.getOwnPropertyDescriptor,Sr=Object.defineProperty,$r=Er(Object.hasOwnProperty);function jr(t,n){return t+n}function Br(t){return t-1}function Cr(t,n){return t/n}function Fr(t){return t+1}function Lr(t,n){return t-n}function Or(t,n){return t*n}const{random:Tr}=Math;function Mr(t,n=0){return Tr()*(t-n)+n}function Rr(t,n){return t%n}function Nr(t){return t.reduce(((t,n)=>t-n),0)}function Ur(t){return t.reduce(((t,n)=>t+n),0)}function Pr(t,n,r){return t>n&&t<r}function kr(t,n,r){return t<n||t>r}function Dr(t){return 0===t}function zr(t){const n=[];return En(t,((t,r)=>{u(t)&&n.push(r)})),n}async function Hr(t,n=i,r={}){return await An(t,(async(t,e,o,c,i)=>{const s=await n(t,e,r,o,c,i);u(s)&&(r[e]=s)})),r}function Wr(t,n=i,r={}){return En(t,((t,e,o,c,i)=>{const s=n(t,e,r,o,c,i);u(s)&&(r[e]=s)})),r}function _r(t,n,r={}){return En(t,((t,e,o,c,u)=>{!0===n(t,e,r,o,c,u)&&(r[e]=t)})),r}async function qr(t,n,r={}){return await An(t,(async(t,e,o,c,u)=>{!0===await n(t,e,r,o,c,u)&&(r[e]=t)})),r}function Gr(t,n={}){if(t)return En(t,((t,r)=>{n[t]=r})),n}const Jr=(t,n)=>{if(t===n)return!0;const r=R(t),e=R(n);return r.length===e.length&&$(r,(r=>t[r]===n[r]))};function Vr(t,n){if(!t)return;let r=n;return m(r)&&(r=RegExp(r.join("|"))),_r(t,((t,n)=>!r.includes(n)))}const Zr=(t,n,r={})=>{if(t)return s(n,(n=>{r[n]=t[n]})),r};function Kr(t){if(t)return R(t).length}const Qr=(t,n)=>{const r={};return s(t,((t,e)=>{r[t]=n[e]})),r},Xr=t=>{const n=[],r=[];return En(t,((t,e)=>{n.push(e),r.push(t)})),[n,r]},Yr=/[-_]/g,te=/ (.)/g;function ne(t){return t.replace(Yr," ").trim().toUpperCase()}function re(t){return t.toLowerCase().replace(te,(t=>t.toUpperCase().replace(/ /g,"")))}function ee(t){return t.replace(Yr," ").trim().toLowerCase().replace(te,"-$1")}function oe(t){return t.replace(Yr," ").trim().toLowerCase().replace(te,"_$1")}function ce(t,n,r){return t.slice(0,n)+r+t.slice(n,t.length)}function ue(t,n=1){return t[t.length-n]}function ie(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))}function se(t,n=1){return t.slice(0,-1*n)}function fe(t,n=1){return t.substr(n)}function ae(t,n,r){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),r)}const le=/%(?![\da-f]{2})/gi,he=/&/g,de=/</g,ge=/>/g,pe=/"/g;function me(t){return decodeURIComponent(t.replace(le,(()=>"%25")))}function we(t){return t.replace(he,"&amp;").replace(de,"&lt;").replace(ge,"&gt;").replace(pe,"&quot;")}function ye(t){return we(me(t))}const be=/\S+/g,ve=/\w+/g;function Ae(t){return t.match(be)||[]}function Ee(t){return t.match(ve)||[]}function Ie(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let c,u=r-n;for(;u<o&&u>=0&&(c=e[u]," "!==c);u--);return t.slice(0,u).trim()})(t,n,r):t}function xe(t,n){const r=t.length;return r>n?((t,n,r)=>{const e=t.split(""),o=e.length;let c,u=n;for(;u<o&&u>0&&(c=e[u]," "!==c);u++);return t.substr(u,r).trim()})(t,n,r):t}const Se=/ (.)/g;function $e(t){return t[0].toUpperCase()}function je(t){return $e(t)+fe(t)}function Be(t){return t.replace(Se,(t=>t.toUpperCase()))}function Ce(t){return $e(t)+fe(t).toLowerCase()}function Fe(t){return Ce(t.toLowerCase()).replace(Se,(t=>t.toUpperCase()))}function Le(t){return cr(t)?.name}function Oe(t){return!!u(t)&&"[object Arguments]"===t.toString()}const Te=Pt("Number"),Me=kt(Te);function Re(t){return!u(t)}const Ne=Pt("Map"),Ue=kt(Ne),Pe=/Array/,ke="Array";function De(t){if(t){const n=Le(t);if(Pe.test(n)&&n!==ke)return!0}return!1}function ze(t,n){if(Re(t)||Fn(t))return!1;if(m(t)||De(t))return!0;const r=t.length;if(!Re(r)||!Me(r)||r<0)return!1;if(n){const n=R(t);return!!n&&pr(n,((t,n)=>n>=0&&Me(n)))}return!0}const He=Pt("BigInt"),We=kt(He),_e=Pt("Boolean"),qe=kt(_e),Ge=Pt("ArrayBuffer"),Je=kt(Ge);function Ve(t,n){return!(!t||!n)&&t instanceof n}const Ze=RegExp("Array|ArrayBuffer|Boolean|DataView|Date|Map|Object|Boolean|Number|BigInt|String|RegExp|Set|Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError");function Ke(t){if(u(t)){const n=t?.constructor?.name;return Ze.test(n)}return!1}const Qe=Pt("Date"),Xe=kt(Qe),Ye=Nt(String);function to(t){return Ye(t)||m(t)?!o(t):_(t)?!Kr(t):!u(t)}const no=Pt("Float32Array"),ro=kt(no),eo=Pt("Float64Array"),oo=kt(eo),{isInteger:co}=Number,uo=co,io=Pt("Int16Array"),so=kt(io),fo=Pt("Int32Array"),ao=kt(fo),lo=Pt("Int8Array"),ho=kt(lo);function go(t){return u(t)&&"function"==typeof t[Symbol.iterator]}function po(t){return!!t&&t instanceof Promise}function mo(t){return!!t&&(po(t)||On(t)||Bn(t))}function wo(t,n){return!!(t&&n&&n.call)&&t instanceof n}function yo(t){const n=typeof value;return null==t||"object"!==n&&"function"!==n}const bo=Pt("RegExp"),vo=kt(bo);function Ao(t,n){return!Re(t)&&!Re(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)}const{isSafeInteger:Eo}=Number,Io=Eo;function xo(t,n){const r=cr(t),e=cr(n);return r===e&&r.name===e.name}const So=Pt("Uint16Array"),$o=kt(So),jo=Pt("Uint32Array"),Bo=kt(jo),Co=Pt("Uint8Array"),Fo=kt(Co),Lo=Pt("Uint8ClampedArray"),Oo=kt(Lo),To=Pt("WeakMap"),Mo=kt(To);function Ro(t,n){if(u(t))return n?n(t):t}function No(t,n){return!1===q(t,n)}const Uo=JSON;function Po(t,n){if(t)return Uo.parse(t,n)}const ko=Uo.stringify;function Do(t,n,r){return!(Fn(n)&&!1===n(t,r))&&!No(t,n)||function(t,n,r){const e=globalThis.options||r;let o;return Fn(e)?o=`${e.name} : ${e.constructor.name}`:e&&(o=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Stringify(t)}\n\t\tExpected: ${Stringify(n)}`,e)}(t,n,r)}function zo(t,n,r){const e=fr(t,(t=>Fn(t)?t.bind(n):t));return r?vn(r,e):e}const Ho=globalThis.structuredClone;function Wo(t){return Ho(t)}function _o(t,n=!0){return Boolean(t)&&n}function qo(t){if(_(t)){const n=R(t),r=n.length,e={};for(let o=0;o<r;o++){const r=n[o],c=t[r];_o(c)&&(e[r]=c)}return e}return t.filter((t=>_o(t)))}async function Go(t,n=i,r,e){if(Bn(t)){const r=[];for await(const o of t(...e)){const e=await n(o,r,t);u(e)&&r.push(e)}return r}const o=r||ur(t);if(m(t)||Sn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){const c=await n(r,o,t);u(c)&&e(c)}return o}const c=Fn(o.set);for await(const[r,e]of t){const i=await n(e,r,o,t);u(i)&&(c?o.set(r,i):o[r]=i)}return o}function Jo(t,n=i,r){const e=r||ur(t);if(m(t)||Sn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){const c=n(r,e,t);u(c)&&o(c)}return e}const o=Fn(e.set);for(const[r,c]of t){const i=n(c,r,e,t);u(i)&&(o?e.set(r,i):e[r]=i)}return e}const Vo=Tn(f,l,Wr,Hr,Jo,Go);function Zo(...t){return On(t[0])?async function(...n){return pr(t,(async t=>pr(n,(async n=>t(n)))))}:function(...n){return pr(t,(t=>pr(n,(n=>t(n)))))}}function Ko(t,n=!0){return!1===Boolean(t)&&n}function Qo(t,n=i,r){const e=r||ur(t);if(m(t)||Sn(t)){const r=e.push||e.add,o=r&&r.bind(e);for(const r of t){!0===n(r,e,t)&&o(r)}}else{const r=Fn(e.set);for(const[o,c]of t){!0===n(c,o,e,t)&&(r?e.set(o,c):e[o]=c)}}return e}async function Xo(t,n=i,r,e){if(Bn(t)){const r=[];for await(const o of t(...e))!0===await n(o,r,t)&&r.push(o);return r}const o=r||ur(t);if(m(t)||Sn(t)){const r=o.push||o.add,e=r&&r.bind(o);for(const r of t){!0===await n(r,o,t)&&e(r)}}else{const r=Fn(o.set);for await(const[e,c]of t){!0===await n(c,e,o,t)&&(r?o.set(e,c):o[e]=c)}}return o}const Yo=Tn(B,C,_r,qr,Qo,Xo);function tc(t){return(...n)=>r=>{let e=r;return t(n,(t=>{e=t(e)})),e}}const nc=tc(s),rc=tc(x);function ec(t){return(...n)=>async r=>{let e=r;return await t(n,(async t=>{e=await t(e)})),e}}const oc=ec(a),cc=ec(S);function uc(t,n){const r=ur(t),e=r.push||r.add;if(e&&Fn(e)){const o=e.bind(r);t.forEach((t=>{const e=n(t,r);o(e)}))}else Fn(r.set)?t.forEach(((t,e)=>{const o=n(t,e,r);r.set(e,o)})):t.forEach(((t,e)=>{const o=n(t,e,r);r[e]=o}));return r}function ic(t,n,r){if(Re(t)||Re(n))return!1;if(Ye(t))return Ye(n)?t.includes(n,r):vo(n)?n.test(t):Fn(n)?Boolean(n(t)):pr(n,(n=>Boolean(ic(t,n))));if(m(t)){if(Ye(n))return t.includes(n,r);if(vo(n))return pr(t,(t=>t.test(n)));if(m(n))return pr(n,(n=>Boolean(ic(t,n))))}return!1}const sc=ln(/\./),fc=(t,n,r)=>(n&&!u(t[n])&&(t[n]=r),t);class ac{list=v(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const r=setInterval((()=>{t()}),n);return this.list.set(r,Pn),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const lc=v(ac);function hc(t,n){return lc.set(t,n)}function dc(){Wn(setTimeout(Hn,0),(t=>{lc.remove(t)}))}function gc(t,...n){return Mn(n,(n=>{Mn(n,((n,r)=>{if(t[r]&&(_(n)||m(n)||n.forEach))return gc(t[r],n);t[r]=n}))})),t}class pc{static models={};constructor(t,n){u(n)?(vn(this,n),this.modelName=t,pc.models.set(t,n)):vn(this,t)}}function mc(t,n){return u(n)?v(pc,[t,n]):D(t,pc.models)}function wc(t,n){return[t,n]}function yc(t,n,r){const e=t.length,o=[];for(let c=0;c<e;c++)o[c]=n(t[c],c,t,e,r);return Promise.all(o)}function bc(t,n,r){const e=t.length,o=[];for(let c=0;c<e;c++)o[c]=n(t[c],c,t,e,r);return Promise.allSettled(o)}function vc(t){return new Promise(t)}const Ac=(t,n,r=R(t))=>$(r,(r=>q(t[r],n[r])));function Ec(t,n,r){return n&&_(t)||Me(n)&&m(t)?t[n]=r:t.set?t.set(n,r):t.push?t.push(r):t.add?t.add(r):t[n]=r,t}function Ic(t,n,r){return Me(r)&&m(t)?t[r]=n:t.push?t.push(n):t.add?t.add(n):t[r]=n,t}class xc{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;En(t,(n=>{t[n]=new xc(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,r)=>(console.log(t,n,t[n]),t[n]=new xc(r),!0)})}}const Sc=()=>[],$c=()=>({}),jc=()=>"";async function Bc(t,n){for(let r=0;r<t;r++)await n(t)}async function Cc(t,n,r=[]){for(let e=0;e<t;e++)r[e]=await n(t);return r}function Fc(t,n=!0,r=!1){return q(n,t)?r:n}class Lc{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return u(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,r=this.totalActive===this.totalFree;n&&r&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const Oc=v(Lc);class Tc{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function Mc(t){return new Tc(t)}function Rc(t){return t?Rc[t]:R(Rc)}const Nc=globalThis.navigator?.userAgentData;if(Nc)En(Nc,((t,n)=>{qe(t)&&t&&(Rc[n]=t)})),s(Nc.brands,(t=>{Rc[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");s(t.split(/ |\//),(t=>{Rc[t]=!0}))}function Uc(t,n,r,e){return t.addEventListener(n,r,e),t}function Pc(t,n,r,e){return t.removeEventListener(n,r,e),t}function kc(t){return 13===t.keyCode}const Dc=document.createDocumentFragment.bind(document);function zc(t,n){return t.appendChild(n),n}function Hc(t,n){return m(n)?Qr(n,K(n,(n=>t.getAttribute(n)))):(En(n,((n,r)=>{t.setAttribute(r,n)})),t)}const Wc=/^.[\w_-]+$/,_c=/^[A-Za-z]+$/,qc=/\s/,Gc=document.getElementsByClassName.bind(document),Jc=document.getElementsByTagName.bind(document),Vc=document.getElementById.bind(document),Zc=document.querySelector.bind(document),Kc=document.querySelectorAll.bind(document);function Qc(t){switch(t[0]){case"#":if(!qc.test(t))return Vc(fe(t));break;case".":if(Wc.test(t))return Gc(fe(t));break;default:if(_c.test(t))return Jc(t)}return Kc(t)}const Xc=document.createElement.bind(document);function Yc(t){const n=sc(t)&&t||`${t}.js`;return(t=>vc((n=>{Uc(t,"load",n,!0),Uc(t,"error",n,!0),zc(Zc("head"),t)})))(Hc(Xc("script"),{async:"",src:n}))}function tu(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&Uc(document,"DOMContentLoaded",t),!1)}tu((()=>{const t=Vc("AcidLib");Yc(t&&t.getAttribute("data-index")||"/index")}));const nu=location.protocol,ru="http:"===nu?"ws":"wss",eu=location.hostname,ou={hardware:{cores:navigator.hardwareConcurrency},host:{name:eu,protocol:nu,protocolSocket:ru}};function cu(){vn(ou,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function uu(){cu()}let iu;tu(uu),Uc(window,"load",uu,!0),Uc(window,"resize",uu,!0),function(t){try{t().removeItem("TESTING"),iu=!0}catch(t){iu=!1}}((()=>localStorage));class su{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=Mc(t)}hasLocal=iu;setItem(t,n){return this.hasLocal&&this.local.setItem(t,Ye(n)?n:ko(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return u(n)?n:!u(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}function fu(t){return new su(t)}const au=(t,n)=>`color:${t};background:${n};`,lu={alert:au("#fff","#f44336"),important:au("#fff","#E91E63"),notify:au("#fff","#651FFF"),warning:au("#000","#FFEA00")},hu=(t,n)=>{const r=Ye(t)?t:ko(t);if("alert"===n||"warning"===n)return console.trace(`%c${r}`,`${lu[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${r}`,`${lu[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},du=(t,n,r)=>{lu[t]=au(n,r)};function gu(t){return t&&9!==t.nodeType}function pu(t){return!!u(t)&&"[object HTMLCollection]"===t.toString()}function mu(t){return!!u(t)&&"[object NodeList]"===t.toString()}export{su as Crate,ac as Intervals,pc as Model,xc as Store,qn as Timers,Lc as UniqID,Tc as VirtualStorage,jr as add,mn as after,zc as append,Zn as apply,rt as arrayToObject,wn as ary,Do as assert,vn as assign,yn as before,zo as bindAll,Er as cacheNativeMethod,re as camelCase,Rn as chain,t as chunk,ie as chunkString,n as clear,dc as clearIntervals,Vn as clearTimers,Wo as clone,r as cloneArray,ur as cloneType,hu as cnsl,du as cnslTheme,qo as compact,zr as compactKeys,Vo as compactMap,f as compactMapArray,l as compactMapAsyncArray,Hr as compactMapAsyncObject,Wr as compactMapObject,yc as concurrent,bc as concurrentStatus,v as construct,Ut as constructorName,Wt as countBy,_t as countKey,qt as countWithoutKey,fu as crate,Dc as createFragment,Nn as curry,Un as curryRight,Kn as debounce,Br as deduct,Sr as defProp,A as difference,Cr as divide,E as drop,I as dropRight,Mn as each,s as eachArray,a as eachAsyncArray,An as eachAsyncObject,En as eachObject,x as eachRight,S as eachRightAsync,w as ensureArray,Ht as ensureBuffer,Uc as eventAdd,Pc as eventRemove,pr as every,Zo as everyArg,$ as everyArray,j as everyAsyncArray,lr as everyAsyncObject,hr as everyObject,Ko as falsey,Dn as falsy,Yo as filter,B as filterArray,C as filterAsyncArray,qr as filterAsyncObject,_r as filterObject,Jt as findIndex,Gt as findIndexCache,Vt as findItem,F as first,L as flatten,y as flattenDeep,nc as flow,oc as flowAsync,cc as flowAsyncRight,rc as flowRight,p as forEach,In as forEachAsync,uc as forMap,$n as forOf,Cn as forOfAsync,Jo as forOfCompactMap,Go as forOfCompactMapAsync,dr as forOfEvery,gr as forOfEveryAsync,Qo as forOfFilter,Xo as forOfFilterAsync,ir as forOfMap,sr as forOfMapAsync,Tn as generateLoop,D as get,Gc as getByClass,Vc as getById,Jc as getByTag,fn as getExtensionRegex,an as getFileExtension,Kt as getNewest,Yt as getOldest,xr as getPropDesc,Ir as getPropNames,cr as getType,Le as getTypeName,tn as groupBy,ic as has,W as hasAnyKeys,sc as hasDot,H as hasKeys,o as hasLength,iu as hasLocal,$r as hasProp,u as hasValue,we as htmlEntities,Qn as ifInvoke,fc as ifNotAssign,Ro as ifValue,Yc as importjs,Xn as inAsync,Yn as inSync,Fr as increment,nn as indexBy,sn as indexedAlphabetically,ou as info,O as initial,se as initialString,ce as insertInRange,T as intersection,hc as interval,lc as intervals,Gr as invert,rn as invoke,en as invokeAsync,Rc as isAgent,Oe as isArguments,m as isArray,Je as isArrayBuffer,Ge as isArrayBufferCall,ze as isArrayLike,On as isAsync,Ln as isAsyncCall,We as isBigInt,He as isBigIntCall,qe as isBoolean,_e as isBooleanCall,zt as isBuffer,Dt as isBufferCall,Ve as isChild,Ke as isCloneable,Rt as isConstructor,Nt as isConstructorFactory,Pt as isConstructorNameFactory,Xe as isDate,Qe as isDateCall,tu as isDocumentReady,gu as isDom,to as isEmpty,kc as isEnter,q as isEqual,ro as isF32,no as isF32Call,oo as isF64,eo as isF64Call,hn as isFileCSS,dn as isFileHTML,gn as isFileJS,pn as isFileJSON,uo as isFloat,Fn as isFunction,Bn as isGenerator,jn as isGeneratorCall,pu as isHTMLCollection,so as isI16,io as isI16Call,ao as isI32,fo as isI32Call,ho as isI8,lo as isI8Call,go as isIterable,mo as isKindAsync,Ue as isMap,Ne as isMapCall,G as isMatchArray,Jr as isMatchObject,mu as isNodeList,c as isNull,Me as isNumber,Te as isNumberCall,gt as isNumberEqual,Pr as isNumberInRange,kr as isNumberNotInRange,wo as isParent,_ as isPlainObject,yo as isPrimitive,po as isPromise,vo as isRegex,bo as isRegexCall,Ao as isRelated,Io as isSafeInt,vr as isSame,xo as isSameType,Sn as isSet,xn as isSetCall,Ye as isString,kt as isTypeFactory,De as isTypedArray,$o as isU16,So as isU16Call,Bo as isU32,jo as isU32Call,Fo as isU8,Oo as isU8C,Lo as isU8CCall,Co as isU8Call,e as isUndefined,Mo as isWeakMap,To as isWeakMapCall,Dr as isZero,Po as jsonParse,ee as kebabCase,R as keys,V as largest,Z as last,fr as map,K as mapArray,Q as mapAsyncArray,er as mapAsyncObject,or as mapObject,X as mapRightArray,Y as mapWhile,gc as merge,Lr as minus,mc as model,Or as multiply,tr as negate,Re as noValue,Hc as nodeAttribute,Hn as noop,No as notEqual,nr as nthArg,nt as numSort,tt as numericalCompare,ot as numericalCompareReverse,Kr as objectSize,Vr as omit,rr as once,Et as onlyUnique,ar as over,mr as overEvery,wc as pair,et as partition,Zr as pick,on as pluck,cn as pluckObject,un as pluckValues,vc as promise,Ac as propertyMatch,Zc as querySelector,Kc as querySelectorAll,ct as rNumSort,Mr as randomFloat,ht as randomInt,g as range,d as rangeDown,h as rangeUp,me as rawURLDecode,wr as reArg,ln as regexTestFactory,Rr as remainder,ut as remove,it as removeBy,ae as replaceList,st as rest,fe as restString,i as returnValue,ft as right,ue as rightString,mt as sample,ye as sanitize,cu as saveDimensions,Qc as selector,Ec as setKey,Ic as setValue,pt as shuffle,yt as smallest,oe as snakeCase,Zt as sortNewest,Xt as sortOldest,Qt as sortOldestFilter,It as sortUnique,bt as sortedIndex,ko as stringify,Sc as stubArray,zn as stubFalse,$c as stubObject,jc as stubString,kn as stubTrue,Nr as sub,Ur as sum,vt as take,At as takeRight,lu as themes,yr as throttle,Jn as timer,Gn as timers,Wn as times,Bc as timesAsync,_n as timesMap,Cc as timesMapAsync,dt as toArray,k as toPath,Fc as toggle,Ae as tokenize,_o as truey,Ie as truncate,xe as truncateRight,Pn as truth,Mt as unZip,Xr as unZipObject,St as union,Oc as uniqID,xt as unique,$t as untilFalseArray,jt as untilTrueArray,uu as updateDimensions,ne as upperCase,je as upperFirst,Be as upperFirstAll,$e as upperFirstLetter,Ce as upperFirstOnly,Fe as upperFirstOnlyAll,Mc as virtualStorage,Bt as whileCompactMap,Ct as whileEachArray,Ft as whileMapArray,Lt as without,Ee as words,br as wrap,Ot as xor,Tt as zip,Qr as zipObject};
//# sourceMappingURL=index.js.map

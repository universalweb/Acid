function t(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e}function n(t){return t.length=0,t}function e(t){return t.slice()}function r(t){return void 0===t}function o(t){return null===t}function c(t){return!r(t)&&!o(t)}function u(t){return t}function i(t,n,e){const r=t.length;for(let o=0;o<r;o++)n(t[o],o,t,r,e);return t}function s(t,n=u,e=[],r){return i(t,((t,o,u,i)=>{const s=n(t,o,e,u,i,r);c(s)&&e.push(s)})),e}async function f(t,n){const e=t.length;for(let r=0;r<e;r++)await n(t[r],r,t,e);return t}async function a(t,n=u){const e=[];return await f(t,(async(t,r,o)=>{const u=await n(t,r,e,o);c(u)&&e.push(u)})),e}function l(t,n,e){const r=[];let o=t;for(;o<n;)r.push(o),o+=e;return r}function h(t,n,e){const r=e<0?-1*e:e,o=[];let c=t;for(;c>n;)o.push(c),c-=r;return o}function d(t,n,e=1){return t<n?l(t,n,e):h(t,n,e)}function g(t,n){return t.forEach(n),t}const p=Array.isArray;function m(t){return p(t)&&t||c(t)&&[t]||[]}function w(t){return t.flat(1/0)}const y=Reflect.construct;function b(t,n=[],e){return e?y(t,n,e):y(t,n)}function v(...t){const n=b(Map),e=[];return i(t,((t,e)=>{i(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),g(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function A(t,n,e=t.length){return t.splice(n,e)}const I=(t,n,e=t.length)=>A(t,0,e-n);function x(t,n,e){const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function $(t,n){const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function E(t,n,e){const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}async function C(t,n,e){const r=t.length;for(let o=0;o<r;o++)if(!1===await n(t[o],o,t,r,e))return!1;return!0}function S(t,n,e=[],r){return i(t,((t,o,c,u)=>{!0===n(t,o,e,c,u,r)&&e.push(t)})),e}async function j(t,n,e=[],r){return await f(t,(async(t,o,c,u)=>{!0===await n(t,o,e,c,u,r)&&e.push(t)})),e}function L(t,n){return n?t.slice(0,n):t[0]}function F(t,n=1){let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(m(n))),[]);return e}function O(t){return t.slice(0,t.length-1)}function T(t,...n){return s(t,(t=>{if(E(n,(n=>n.includes(t))))return t}))}const B=Object.keys;function M(t){if(t)return B(t)}const N=/\.|\[/,U=/]/g,k="";function P(t){return t.replace(U,k).split(N)}function R(t,n){if(!n)return!1;let e=n;return E(p(t)?t:P(t),(t=>(e=e[t],c(e)))),e}const z=Object.hasOwn;function D(t,...n){return E(n,(n=>{const e=P(n);if(1===e.length)return z(t,n);{const n=e.pop(),r=R(e,t);return!!r&&z(r,n)}}))}function H(t,...n){return Boolean(n.find((n=>{const e=P(n);if(1===e.length)return z(t,n);{const n=e.pop(),r=R(e,t);return!!r&&z(r,n)}})))}const W=t=>!!c(t)&&"Object("===t.constructor.toString().trim().slice(9,16),_=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(W(t)){const e=M(t);if(D(n,e))return E(e,(e=>_(t[e],n[e])))}else if(p(t)&&t.length===n.length)return E(t,((t,e)=>_(t,n[e])));return!1};function q(t,n){return t.length===n.length&&E(t,((t,e)=>_(n[e],t)))}const G=Math.max;function J(t){return G(...t)}function Z(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]}function K(t,n,e=[],r){return i(t,((t,o,c,u)=>{e[o]=n(t,o,e,c,u,r)})),e}async function Q(t,n){const e=[];return await f(t,(async(t,r,o)=>{e[r]=await n(t,r,o)})),e}function V(t,n,e=[],r){let o=0;const c=t.length;for(let u=c-1;u>=0;u--)e[o]=n(t[u],u,t,c,r),o++;return e}function X(t,n,e=[],r){const o=t.length;for(let c=0;c<o;c++){const u=t[c];if(!1===n(u,c,e,t,o,r))break;e[c]=u}return e}const Y=(t,n)=>t-n;function tt(t){return t.sort(Y)}function nt(t,n){const e={};return i(t,((t,r)=>{e[n[r]]=t})),e}function et(t,n){const e=[];return[s(t,(t=>{if(n(t))return t;e.push(t)})),e]}const rt=(t,n)=>n-t;function ot(t){return t.sort(rt)}function ct(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t}function ut(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t}function it(t){return t.slice(1,t.length)}function st(t,n){return t[t.length-1-n]}const{floor:ft,random:at}=Math;function lt(t,n=0){return ft(at()*(t-n))+n}const ht=Array.from;function dt(t,n){return t===n}function gt(t,n=t.length){if(t.length<=1)return ht(t);const e=ht(t);let r,o,c=0;for(;c<n;)r=lt(e.length-1,0),o=e[c],e[c]=e[r],e[r]=o,c++;return e}function pt(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return gt(t);if(1===n)return[t[lt(e-1,0)]];const r=[],o={};let c,u=0;for(;u<n;)c=lt(t.length-1,0),o[c]||(r.push(t[c]),o[c]=!0,u++);return r}const mt=Math.min;function wt(t){return mt(...t)}function yt(t,n){let e=0;return E(t,((t,r)=>(e=r,n>t))),e}function bt(t,n=1){return t.slice(0,n)}function vt(t,n=1){const e=t.length;return t.slice(e-n,e)}function At(t,n,e){return e.indexOf(t)===n}function It(t,n,e){return t!==e[n-1]}function xt(t,n){return n?t.filter(It):t.filter(At)}function $t(...t){return xt(w(t))}function Et(t,n){const e=t.length;for(let r=0;r<e;r++)if(!1===n(t[r],r))return!1;return!0}function Ct(t,n){const e=t.length;for(let r=0;r<e;r++)if(!0===n(t[r],r))return!1;return!0}function St(t,n,e=[],r){let o=0;for(;o<t.length;){const u=e.push(n(t[o],o,t,t.length,r));o++,c(u)&&e.push(u)}return t}function jt(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t}function Lt(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t}function Ft(t,n){if(!n)return t;const e=b(Set,n);return t.filter((t=>!e.has(t)))}function Ot(...t){const n=b(Map),e=[];return 2===t.length?v(t[0],t[1]):(i(t,((t,e)=>{i(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),g(n,(t=>{1===t.count&&e.push(t.child)})),e)}function Tt(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))}function Bt(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))}function Mt(t,n){const e={};let r;return i(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e}function Nt(t,n){let e=0;return i(t,(t=>{t[n]&&e++})),e}function Ut(t,n){let e=0;return i(t,(t=>{t[n]||e++})),e}function kt(t,n,e,r,o){if(t[o]===r)return!0}function Pt(t,n,e="id"){const r=t.findIndex(((t,r)=>kt(t,0,0,n,e)));return-1!==r&&r}function Rt(t,n,e="id"){const r=t.find(((t,r)=>kt(t,0,0,n,e)));return-1!==r&&r}function zt(t,n,e=!0){return(e?t:[...t]).sort(((t,e)=>function(t,n,e){return n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1}(t,e,n)))}function Dt(t,n){return zt(t,n,!1)[0]}function Ht(t,n,e){return n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1}function Wt(t,n="id",e=!0){return(e?t:[...t]).sort(((t,e)=>Ht(t,e,n)))}function _t(t,n="id"){return Wt(t,n)[0]}function qt(t,n){const e={};return i(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e}function Gt(t,n="id"){const e={};return i(t,(t=>{e[t[n]]=t})),e}function Jt(t,n,e){return K(t,((t,r)=>t[n](e,r)))}function Zt(t,n,e){return Q(t,(async(t,r)=>t[n](e,r)))}function Kt(t,n){return K(t,(t=>t[n]))}function Qt(t,n){return K(n,(n=>t[n]))}function Vt(t,n){return K(t,(t=>Qt(t,n)))}function Xt(t,n){return t.sort(((t,e)=>{const r=t[n],o=e[n];return r<o?-1:r>o?1:0}))}const Yt=/\.([0-9a-z]+)/;function tn(t){const n=t.match(Yt);if(n)return n[1]}function nn(t){return n=>!!c(n)&&t.test(n)}const en=nn(/\.css$/),rn=nn(/\.html$/),on=nn(/\.js$/),cn=nn(/\.json$/);function un(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)}function sn(t,n){return(...e)=>t(...e.splice(0,n))}function fn(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)}const an=t=>!!c(t)&&t instanceof Function;function ln(t,n){return i(M(t),((e,r,o,c)=>{n(t[e],e,t,c,o)}))}function hn(t,n,e={}){return ln(t,((t,r,o,c,u)=>{e[r]=n(t,r,e,o,c,u)})),e}function dn(t){return!!t&&t instanceof Promise}function gn(t,n){return!!c(t)&&t.constructor===n}function pn(t){return n=>gn(n,t)}function mn(t){return t?.constructor?.name}function wn(t){return n=>n&&mn(n)===t||!1}function yn(t){return function(n,...e){return e?t(n)&&E(e,t):t(n)}}const bn=wn("AsyncFunction"),vn=yn(bn);function An(t){return!!t&&(dn(t)||vn(t))}function In(t,n,e,r,o,u,i,s){return(f,a,l)=>{let h;const d=vn(a);if(c(f)&&a)return h=p(f)?d?n:t:W(f)?d?r:e:u&&f.forEach?d?u:o:s?d?i:s:d?r:e,h(f,a,l)}}const xn=In(K,hn);function $n(t,n){return xn(t,(t=>an(t)?t.bind(n):t))}const En=Object.assign;function Cn(t,...n){if(t)return En(t,...n)}const Sn=async(t,n)=>{const e=M(t);return await f(e,((r,o,c,u)=>n(t[r],r,t,u,e))),t};async function jn(t,n){const e=[],r=[];let o=0;t.forEach(((t,n)=>{e[o]=t,r[o]=t,o++}));for(let t=0;t<o;t++)await n(e[t],r[t]);return t}function Ln(t,n){for(const[e,r]of t)n(r,e,t);return t}async function Fn(t,n){for await(const[e,r]of t)await n(r,e,t);return t}const On=In(i,f,ln,Sn,g,jn,Ln,Fn),Tn=(t,n)=>(On(n,((n,e)=>{t.methods[e]=(...e)=>(n(t.value,...e),t.methods)})),t);function Bn(t){const n=t=>(n.value=t,n.methods);return Cn(n,{add:t=>Tn(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n}function Mn(t,e=t.length){const r=[],o=(...c)=>{if(r.push(...c),r.length===e){const e=t(...r);return n(r),e}return o};return o}function Nn(t,e=t.length){const r=[],o=(...c)=>{if(r.unshift(...c),r.length===e){const e=t(...r);return n(r),e}return o};return o}const Un=!0,kn=()=>Un,Pn=!1,Rn=()=>Pn,zn=()=>{};function Dn(t,n){for(let e=0;e<t;e++)n(e)}function Hn(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e}class Wn{list=b(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,Un),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const _n=b(Wn);function qn(t,n){return _n.set(t,n)}function Gn(){Dn(setTimeout(zn,0),(t=>{_n.remove(t)}))}const Jn=Reflect.apply;function Zn(t,n){function e(...t){e.id!==Pn&&_n.remove(e.id),e.id=qn((()=>{e.callable(...t),e.id=Pn}),n)}return e.id=Pn,e.callable=t.bind(e),e.clear=()=>{e.id!==Pn&&(_n.remove(e.id),e.id=Pn)},e}function Kn(t,...n){if(an(t))return t(...n)}async function Qn(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t}const Vn=(t,n)=>On(t,(t=>{t(n)}));function Xn(t){return(...n)=>!t(...n)}function Yn(t=0){return(...n)=>n[t]}const te=t=>{let n;return(...e)=>(c(n)||(n=t(...e)),n)};function ne(t){return(...n)=>xn(t,(t=>t(...n)))}function ee(t,n){return C(M(t),((e,r,o,c)=>n(t[e],e,t,c,o)))}function re(t,n){return E(M(t),((e,r,o,c)=>n(t[e],e,t,c,o)))}const oe=In(E,C,re,ee);function ce(t){return(...n)=>oe(t,(t=>t(...n)))}function ue(t,n){return(...e)=>t(...n.map((t=>e[t])))}function ie(t,n){function e(...t){e.id?e.shouldThrottle=Un:(e.callable(...t),e.id=qn((()=>{e.shouldThrottle&&e.callable(...t),e.id=Pn}),n))}return e.id=Pn,e.callable=t.bind(e),e.clear=()=>{_n.remove(e.id),e.id=Pn},e}function se(t,n){return(...e)=>n(t,...e)}const fe=Object.is,ae=Function.prototype;function le(t){return ae.call.bind(t)}const he=Object.getOwnPropertyNames,de=Object.getOwnPropertyDescriptor,ge=Object.defineProperty,pe=le(Object.hasOwnProperty);function me(t,n){return t+n}function we(t){return t-1}function ye(t,n){return t/n}function be(t){return t+1}function ve(t,n){return t-n}function Ae(t,n){return t*n}const{random:Ie}=Math;function xe(t,n=0){return Ie()*(t-n)+n}function $e(t,n){return t%n}function Ee(t){return t.reduce(((t,n)=>t-n),0)}function Ce(t){return t.reduce(((t,n)=>t+n),0)}function Se(t,n,e){return t>n&&t<e}function je(t,n,e){return t<n||t>e}function Le(t){return 0===t}function Fe(t){const n=[];return ln(t,((t,e)=>{t&&n.push(e)})),n}function Oe(t,n=u,e={}){return ln(t,((t,r,o,u,i)=>{const s=n(t,r,e,o,u,i);c(s)&&(e[r]=s)})),e}async function Te(t,n=u,e={}){return await Sn(t,(async(t,r,o,u,i)=>{const s=await n(t,r,e,o,u,i);c(s)&&(e[r]=s)})),e}function Be(t,n,e={}){return ln(t,((t,r,o,c,u)=>{!0===n(t,r,e,o,c,u)&&(e[r]=t)})),e}async function Me(t,n,e={}){return await Sn(t,(async(t,r,o,c,u)=>{!0===await n(t,r,e,o,c,u)&&(e[r]=t)})),e}function Ne(t,n={}){return ln(t,((t,e)=>{n[t]=e})),n}const Ue=(t,n)=>{if(t===n)return!0;const e=M(t),r=M(n);return e.length===r.length&&E(e,(e=>t[e]===n[e]))},ke=async(t,n,e={})=>(await Sn(t,(async(t,r,o,c,u)=>{e[r]=await n(t,r,e,o,c,u)})),e),Pe=async(t,n,e={})=>(await Sn(t,(async(t,r,o,u,i)=>{const s=await n(t,r,e,u,i);c(s)&&(e[r]=s)})),e);function Re(t,n){return Be(t,((t,e)=>!n.includes(e)))}const ze=(t,n,e={})=>(i(n,(n=>{e[n]=t[n]})),e);function De(t){return M(t).length}const He=(t,n)=>{const e={};return i(t,((t,r)=>{e[t]=n[r]})),e},We=t=>{const n=[],e=[];return ln(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},_e=/[-_]/g,qe=/ (.)/g;function Ge(t){return t.replace(_e," ").trim().toUpperCase()}function Je(t){return t.toLowerCase().replace(qe,(t=>t.toUpperCase().replace(/ /g,"")))}function Ze(t){return t.replace(_e," ").trim().toLowerCase().replace(qe,"-$1")}function Ke(t){return t.replace(_e," ").trim().toLowerCase().replace(qe,"_$1")}function Qe(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)}function Ve(t,n=1){return t[t.length-n]}function Xe(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))}function Ye(t,n=1){return t.slice(0,-1*n)}function tr(t,n=1){return t.substr(n)}function nr(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)}const er=/%(?![\da-f]{2})/gi,rr=/&/g,or=/</g,cr=/>/g,ur=/"/g;function ir(t){return decodeURIComponent(t.replace(er,(()=>"%25")))}function sr(t){return t.replace(rr,"&amp;").replace(or,"&lt;").replace(cr,"&gt;").replace(ur,"&quot;")}function fr(t){return sr(ir(t))}const ar=/\S+/g,lr=/\w+/g;function hr(t){return t.match(ar)||[]}function dr(t){return t.match(lr)||[]}const gr=(t,n,e)=>{const r=t.split(""),o=r.length;let c,u=e-n;for(;u<o&&u>=0&&(c=r[u]," "!==c);u--);return t.slice(0,u).trim()},pr=(t,n,e)=>{const r=t.split(""),o=r.length;let c,u=n;for(;u<o&&u>0&&(c=r[u]," "!==c);u++);return t.substr(u,e).trim()};function mr(t,n){const e=t.length;return e>n?gr(t,n,e):t}function wr(t,n){const e=t.length;return e>n?pr(t,n,e):t}const yr=/ (.)/g;function br(t){return t[0].toUpperCase()}function vr(t){return br(t)+tr(t)}function Ar(t){return t.replace(yr,(t=>t.toUpperCase()))}function Ir(t){return br(t)+tr(t).toLowerCase()}function xr(t){return Ir(t.toLowerCase()).replace(yr,(t=>t.toUpperCase()))}const $r="[object Arguments]";function Er(t){return!!c(t)&&t.toString()===$r}const Cr=wn("Number"),Sr=yn(Cr);function jr(t){return!c(t)}function Lr(t,n){if(jr(t)||an(t))return!1;const e=t.length;return!(!e||!Sr(e)||e<0)&&(!!n&&oe(t,((t,n)=>n>=0&&Sr(n))))}const Fr=wn("BigInt"),Or=yn(Fr),Tr=wn("Boolean"),Br=yn(Tr),Mr=wn("ArrayBuffer"),Nr=yn(Mr);function Ur(t,n){return!(!t||!n)&&t instanceof n}const kr=wn("Set"),Pr=yn(kr),Rr=wn("Date"),zr=yn(Rr),Dr=pn(String);function Hr(t){return Boolean(t.length)}function Wr(t){return Dr(t)||p(t)?!Hr(t):W(t)?!De(t):!c(t)}const _r=wn("Float32Array"),qr=yn(_r),Gr=wn("Float64Array"),Jr=yn(Gr),{isInteger:Zr}=Number,Kr=Zr,Qr=wn("Int16Array"),Vr=yn(Qr),Xr=wn("Int32Array"),Yr=yn(Xr),to=wn("Int8Array"),no=yn(to),eo=wn("Map"),ro=yn(eo);function oo(t,n){return!!(t&&n&&n.call)&&t instanceof n}function co(t){const n=typeof t;return null==t||"object"!==n&&"function"!==n}const uo=wn("RegExp"),io=yn(uo);function so(t,n){return!jr(t)&&!jr(n)&&(t.call?n instanceof t:n.call?t instanceof n:n.constructor===t.constructor)}const{isSafeInteger:fo}=Number,ao=fo,lo=wn("Uint16Array"),ho=yn(lo),go=wn("Uint32Array"),po=yn(go),mo=wn("Uint8Array"),wo=yn(mo),yo=wn("Uint8ClampedArray"),bo=yn(yo),vo=wn("WeakMap"),Ao=yn(vo);function Io(t,n){return!1===_(t,n)}const xo=JSON;function $o(t,n){if(t)return xo.parse(t,n)}const Eo=xo.stringify;function Co(t,n,e){return!(an(n)&&!1===n(t,e))&&!Io(t,n)||function(t,n,e){const r=globalThis.options||e;let o;return an(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${Eo(t)}\n\t\tExpected: ${Eo(n)}`,r)}(t,n,e)}const So=globalThis.structuredClone;function jo(t){return So(t)}function Lo(t,n=!0){return Boolean(t)&&n}function Fo(t){if(W(t)){const n=M(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],c=t[e];Lo(c)&&(r[e]=c)}return r}return t.filter((t=>Lo(t)))}const Oo=In(s,a,Oe,Te);function To(t,n,...e){return e?t(n)&&E(e,t):t(n)}function Bo(t,n=!0){return!1===Boolean(t)&&n}const Mo=In(S,j,Be,Me);function No(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const Uo=No(i),ko=No(x);function Po(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const Ro=Po(f),zo=Po($);function Do(t,n=u,e={}){for(const[r,o]of t){const u=n(o,r,e,t);c(u)&&(e[r]=u)}return t}async function Ho(t,n=u,e={}){for await(const[r,o]of t){const u=await n(o,r,e,t);c(u)&&(e[r]=u)}return t}function Wo(t,n=u,e={}){for(const[r,o]of t)e[r]=n(o,r,e,t);return t}async function _o(t,n=u,e={}){for await(const[r,o]of t)e[r]=await n(o,r,e,t);return t}function qo(t,n,e){if(jr(t)||jr(n))return!1;if(Dr(t))return Dr(n)?t.includes(n,e):io(n)?n.test(t):an(n)?Boolean(n(t)):oe(n,(n=>Boolean(qo(t,n))));if(p(t)){if(Dr(n))return t.includes(n,e);if(io(n))return oe(t,(t=>t.test(n)));if(p(n))return oe(n,(n=>Boolean(qo(t,n))))}return!1}const Go=nn(/\./),Jo=(t,n,e)=>(n&&!c(t[n])&&(t[n]=e),t);function Zo(t){if(c(t))return t}class Ko{list=b(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,Un),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Qo=b(Ko);function Vo(t,n){return Qo.set(t,n)}function Xo(){Dn(setTimeout(zn,0),(t=>{Qo.remove(t)}))}function Yo(t,...n){return On(n,(n=>{On(n,((n,e)=>{if(t[e]&&(W(n)||p(n)||n.forEach))return Yo(t[e],n);t[e]=n}))})),t}class tc{static models={};constructor(t,n){c(n)?(Cn(this,n),this.modelName=t,tc.models.set(t,n)):Cn(this,t)}}function nc(t,n){return c(n)?b(tc,[t,n]):R(t,tc.models)}function ec(t,n){return[t,n]}function rc(t,n,e){const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}function oc(t){return new Promise(t)}const cc=(t,n,e=M(t))=>E(e,(e=>_(t[e],n[e])));class uc{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;ln(t,(n=>{t[n]=new uc(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new uc(e),!0)})}}const ic=()=>[],sc=()=>({}),fc=()=>"";async function ac(t,n){for(let e=0;e<t;e++)await n(t)}async function lc(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e}function hc(t,n=!0,e=!1){return _(n,t)?e:n}class dc{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return c(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,e=this.totalActive===this.totalFree;n&&e&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const gc=b(dc);class pc{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function mc(t){return new pc(t)}function wc(t){return t?wc[t]:M(wc)}const yc=globalThis.navigator?.userAgentData;if(yc)ln(yc,((t,n)=>{Br(t)&&t&&(wc[n]=t)})),i(yc.brands,(t=>{wc[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");i(t.split(/ |\//),(t=>{wc[t]=!0}))}function bc(t,n,e,r){return t.addEventListener(n,e,r),t}function vc(t,n,e,r){return t.removeEventListener(n,e,r),t}function Ac(t){return 13===t.keyCode}const Ic=document.createDocumentFragment.bind(document);function xc(t,n){return t.appendChild(n),n}function $c(t,n){return p(n)?He(n,K(n,(n=>t.getAttribute(n)))):(ln(n,((n,e)=>{t.setAttribute(e,n)})),t)}const Ec=".",Cc="#",Sc=/^.[\w_-]+$/,jc=/^[A-Za-z]+$/,Lc=/\s/,Fc=document.getElementsByClassName.bind(document),Oc=document.getElementsByTagName.bind(document),Tc=document.getElementById.bind(document),Bc=document.querySelector.bind(document),Mc=document.querySelectorAll.bind(document);function Nc(t){switch(t[0]){case Cc:if(!Lc.test(t))return Tc(tr(t));break;case Ec:if(Sc.test(t))return Fc(tr(t));break;default:if(jc.test(t))return Oc(t)}return Mc(t)}const Uc=document.createElement.bind(document),kc=t=>oc((n=>{bc(t,"load",n,!0),bc(t,"error",n,!0),xc(Bc("head"),t)}));function Pc(t){const n=Go(t)&&t||`${t}.js`,e=$c(Uc("script"),{async:"",src:n});return kc(e)}function Rc(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&bc(document,"DOMContentLoaded",t),!1)}Rc((()=>{const t=Tc("AcidLib");Pc(t&&t.getAttribute("data-index")||"/index")}));const zc=location.protocol,Dc="http:"===zc?"ws":"wss",Hc=location.hostname,Wc={hardware:{cores:navigator.hardwareConcurrency},host:{name:Hc,protocol:zc,protocolSocket:Dc}};function _c(){Cn(Wc,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function qc(){_c()}let Gc;Rc(qc),bc(window,"load",qc,!0),bc(window,"resize",qc,!0),function(t){try{t().removeItem("TESTING"),Gc=!0}catch(t){Gc=!1}}((()=>localStorage));class Jc{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=mc(t)}hasLocal=Gc;setItem(t,n){return this.hasLocal&&this.local.setItem(t,Dr(n)?n:Eo(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return c(n)?n:!c(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}function Zc(t){return new Jc(t)}const Kc=(t,n)=>`color:${t};background:${n};`,Qc={alert:Kc("#fff","#f44336"),important:Kc("#fff","#E91E63"),notify:Kc("#fff","#651FFF"),warning:Kc("#000","#FFEA00")},Vc=(t,n)=>{const e=Dr(t)?t:Eo(t);if("alert"===n||"warning"===n)return console.trace(`%c${e}`,`${Qc[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${e}`,`${Qc[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},Xc=(t,n,e)=>{Qc[t]=Kc(n,e)};function Yc(t){return t&&9!==t.nodeType}const tu="[object HTMLCollection]";function nu(t){return!!c(t)&&t.toString()===tu}const eu="[object NodeList]";function ru(t){return!!c(t)&&t.toString()===eu}export{Jc as Crate,Ko as Intervals,tc as Model,uc as Store,Wn as Timers,dc as UniqID,pc as VirtualStorage,me as add,un as after,xc as append,Jn as apply,nt as arrayToObject,sn as ary,Co as assert,Cn as assign,fn as before,$n as bindAll,le as cacheNativeMethod,Je as camelCase,Bn as chain,t as chunk,Xe as chunkString,n as clear,Xo as clearIntervals,Gn as clearTimers,jo as clone,e as cloneArray,Vc as cnsl,Xc as cnslTheme,Fo as compact,Fe as compactKeys,Oo as compactMap,s as compactMapArray,a as compactMapAsyncArray,Te as compactMapAsyncObject,Oe as compactMapObject,Pe as compactMapObjectAsync,b as construct,mn as constructorName,Mt as countBy,Nt as countKey,Ut as countWithoutKey,Zc as crate,Ic as createFragment,Mn as curry,Nn as curryRight,Zn as debounce,we as deduct,ge as defProp,v as difference,ye as divide,A as drop,I as dropRight,On as each,i as eachArray,f as eachAsyncArray,Sn as eachAsyncObject,ln as eachObject,x as eachRight,$ as eachRightAsync,m as ensureArray,bc as eventAdd,vc as eventRemove,oe as every,To as everyArg,E as everyArray,C as everyAsyncArray,ee as everyAsyncObject,re as everyObject,Bo as falsey,Pn as falsy,Mo as filter,S as filterArray,j as filterAsyncArray,Me as filterAsyncObject,Be as filterObject,Pt as findIndex,kt as findIndexCache,Rt as findItem,L as first,F as flatten,w as flattenDeep,Uo as flow,Ro as flowAsync,zo as flowAsyncRight,ko as flowRight,g as forEach,jn as forEachAsync,Ln as forOf,Fn as forOfAsync,Do as forOfCompactMap,Ho as forOfCompactMapAsync,Wo as forOfMap,_o as forOfMapAsync,In as generateLoop,R as get,Fc as getByClass,Tc as getById,Oc as getByTag,Yt as getExtensionRegex,tn as getFileExtension,Dt as getNewest,_t as getOldest,de as getPropDesc,he as getPropNames,qt as groupBy,qo as has,H as hasAnyKeys,Go as hasDot,D as hasKeys,Hr as hasLength,Gc as hasLocal,pe as hasProp,c as hasValue,sr as htmlEntities,Kn as ifInvoke,Jo as ifNotEqual,Zo as ifValue,Pc as importjs,Qn as inAsync,Vn as inSync,be as increment,Gt as indexBy,Wc as info,O as initial,Ye as initialString,Qe as insertInRange,T as intersection,Vo as interval,Qo as intervals,Ne as invert,Jt as invoke,Zt as invokeAsync,wc as isAgent,Er as isArguments,p as isArray,Lr as isArrayLike,vn as isAsync,bn as isAsyncCall,Or as isBigInt,Fr as isBigIntCall,Br as isBoolean,Tr as isBooleanCall,Nr as isBuffer,Mr as isBufferCall,Ur as isChild,gn as isConstructor,pn as isConstructorFactory,wn as isConstructorNameFactory,zr as isDate,Rr as isDateCall,Rc as isDocumentReady,Yc as isDom,Wr as isEmpty,Ac as isEnter,_ as isEqual,qr as isF32,_r as isF32Call,Jr as isF64,Gr as isF64Call,en as isFileCSS,rn as isFileHTML,on as isFileJS,cn as isFileJSON,Kr as isFloat,an as isFunction,nu as isHTMLCollection,Vr as isI16,Qr as isI16Call,Yr as isI32,Xr as isI32Call,no as isI8,to as isI8Call,An as isKindAsync,ro as isMap,eo as isMapCall,q as isMatchArray,Ue as isMatchObject,ru as isNodeList,o as isNull,Sr as isNumber,Cr as isNumberCall,dt as isNumberEqual,Se as isNumberInRange,je as isNumberNotInRange,oo as isParent,W as isPlainObject,co as isPrimitive,dn as isPromise,io as isRegex,uo as isRegexCall,so as isRelated,ao as isSafeInt,fe as isSame,Pr as isSet,kr as isSetCall,Dr as isString,yn as isTypeFactory,ho as isU16,lo as isU16Call,po as isU32,go as isU32Call,wo as isU8,bo as isU8C,yo as isU8CCall,mo as isU8Call,r as isUndefined,Ao as isWeakMap,vo as isWeakMapCall,Le as isZero,$o as jsonParse,Ze as kebabCase,M as keys,J as largest,Z as last,xn as map,K as mapArray,Q as mapAsyncArray,hn as mapObject,ke as mapObjectAsync,V as mapRightArray,X as mapWhile,Yo as merge,ve as minus,nc as model,Ae as multiply,Xn as negate,jr as noValue,$c as nodeAttribute,zn as noop,Io as notEqual,Yn as nthArg,tt as numSort,Y as numericalCompare,rt as numericalCompareReverse,De as objectSize,Re as omit,te as once,At as onlyUnique,ne as over,ce as overEvery,ec as pair,rc as parallel,et as partition,ze as pick,Kt as pluck,Qt as pluckObject,Vt as pluckValues,oc as promise,cc as propertyMatch,Bc as querySelector,Mc as querySelectorAll,ot as rNumSort,xe as randomFloat,lt as randomInt,d as range,h as rangeDown,l as rangeUp,ir as rawURLDecode,ue as reArg,nn as regexTestFactory,$e as remainder,ct as remove,ut as removeBy,nr as replaceList,it as rest,tr as restString,u as returnValue,st as right,Ve as rightString,pt as sample,fr as sanitize,_c as saveDimensions,Nc as selector,gt as shuffle,wt as smallest,Ke as snakeCase,Xt as sortAlphabetical,zt as sortNewest,Wt as sortOldest,Ht as sortOldestFilter,It as sortUnique,yt as sortedIndex,Eo as stringify,ic as stubArray,Rn as stubFalse,sc as stubObject,fc as stubString,kn as stubTrue,Ee as sub,Ce as sum,bt as take,vt as takeRight,Qc as themes,ie as throttle,qn as timer,_n as timers,Dn as times,ac as timesAsync,Hn as timesMap,lc as timesMapAsync,ht as toArray,P as toPath,hc as toggle,hr as tokenize,Lo as truey,mr as truncate,wr as truncateRight,Un as truth,Bt as unZip,We as unZipObject,$t as union,gc as uniqID,xt as unique,Et as untilFalseArray,Ct as untilTrueArray,qc as updateDimensions,Ge as upperCase,vr as upperFirst,Ar as upperFirstAll,br as upperFirstLetter,Ir as upperFirstOnly,xr as upperFirstOnlyAll,mc as virtualStorage,St as whileCompactMap,jt as whileEachArray,Lt as whileMapArray,Ft as without,dr as words,se as wrap,Ot as xor,Tt as zip,He as zipObject};
//# sourceMappingURL=index.js.map

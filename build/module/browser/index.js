const t=Reflect.apply,n=Array.from,e=Object.is,r=Object.getOwnPropertyDescriptor,o=Object.defineProperty,c=Object.getOwnPropertyNames;function u(t){return void 0===t}function i(t){return null===t}function s(t){return!u(t)&&!i(t)}function l(t){return n=>!!s(n)&&t.test(n)}function f(t){return"Boolean"===t.constructor.name}function a(t,n){return!!s(t)&&t.constructor===n}function h(t){return n=>a(n,t)}function d(t){return t?.constructor?.name}const g=h(String),m=Array.isArray,p=t=>!!s(t)&&"Object("===t.constructor.toString().trim().slice(9,16);function y(t){return Boolean(t.length)}const b=Object.keys;function w(t){if(t)return b(t)}function v(t){return w(t).length}function I(t){return g(t)||m(t)?!y(t):p(t)?!v(t):!s(t)}const A=h("Int32Array"),x=h("ArrayBuffer"),$=h("Float32Array"),S=h("Int8Array");function C(t){const n=typeof t;return null==t||"object"!==n&&"function"!==n}const E=h("Uint16Array"),j="[object WeakMap]";function L(t){return!!s(t)&&t.toString()===j}const T="[object Arguments]";function F(t){return!!s(t)&&t.toString()===T}const O=h("Float64Array"),U="[object Map]";function B(t){return!!s(t)&&t.toString()===U}function M(t){return!!t&&t instanceof Promise}const k=h("Uint32Array");function N(t){return t instanceof Date}const R=t=>!!s(t)&&t instanceof Function;function P(t){return t instanceof RegExp}const z=h("Uint8Array");function D(t){return!!t&&"AsyncFunction"===t.constructor?.name}function H(t){return!!t&&(M(t)||D(t))}const W=/\.|\+/,_=t=>W.test(t.toString()),q=h("Int16Array"),G=h(Number),J="[object Set]";function Z(t){return!!s(t)&&t.toString()===J}const K=h("Uint8ClampedArray"),Q=/\.([0-9a-z]+)/;function V(t){const n=t.match(Q);if(n)return n[1]}const X=l(/\.css$/),Y=l(/\.html$/),tt=l(/\.js$/),nt=l(/\.json$/);function et(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e}function rt(t){return t.length=0,t}function ot(t){return t.slice()}function ct(t){return t}function ut(t,n,e){const r=t.length;for(let o=0;o<r;o++)n(t[o],o,t,r,e);return t}function it(t,n=ct,e=[],r){return ut(t,((t,o,c,u)=>{const i=n(t,o,e,c,u,r);s(i)&&e.push(i)})),e}async function st(t,n){const e=t.length;for(let r=0;r<e;r++)await n(t[r],r,t,e);return t}async function lt(t,n=ct){const e=[];return await st(t,(async(t,r,o)=>{const c=await n(t,r,e,o);s(c)&&e.push(c)})),e}function ft(t,n,e){const r=[];let o=t;for(;o<n;)r.push(o),o+=e;return r}function at(t,n,e){const r=e<0?-1*e:e,o=[];let c=t;for(;c>n;)o.push(c),c-=r;return o}function ht(t,n,e=1){return t<n?ft(t,n,e):at(t,n,e)}function dt(t,n){return ut(w(t),((e,r,o,c)=>{n(t[e],e,t,c,o)}))}const gt=t=>m(t)&&t||s(t)&&[t]||[];function mt(t){return t.flat(1/0)}function pt(...t){const n={},e=[];return 2===t.length?pt(t[0],t[1]):(ut(t,((t,e)=>{ut(t,((t,r)=>{const o=typeof t;let c=n[o];c||(c=n[o]={});let u=c[t];if(u){if(u.parentIndex===e)return;u.count++}else u=c[t]={count:1,parentIndex:e,child:t}}))})),dt(n,(t=>{dt(t,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)}))})),e)}function yt(t,n,e=t.length){return t.splice(n,e)}const bt=(t,n,e=t.length)=>yt(t,0,e-n);function wt(t,n,e){const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function vt(t,n){const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function It(t,n,e){const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}function At(t,n,e=[],r){return ut(t,((t,o,c,u)=>{!0===n(t,o,e,c,u,r)&&e.push(t)})),e}function xt(t,n){return n?t.slice(0,n):t[0]}function $t(t,n=1){let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(gt(n))),[]);return e}function St(t){return t.slice(0,t.length-1)}function Ct(t,...n){return it(t,(t=>{if(It(n,(n=>n.includes(t))))return t}))}function Et(t,n){const e=w(t);return It(n,(t=>e.includes(t)))}function jt(t,n){const e=w(t);return Boolean(n.find((t=>e.includes(t))))}const Lt=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(p(t)){const e=w(t);if(Et(n,e))return It(e,(e=>Lt(t[e],n[e])))}else if(m(t)&&t.length===n.length)return It(t,((t,e)=>Lt(t,n[e])));return!1};function Tt(t,n){return t.length===n.length&&It(t,((t,e)=>Lt(n[e],t)))}const Ft=Math.max;function Ot(t){return Ft(...t)}function Ut(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]}function Bt(t,n,e=[],r){return ut(t,((t,o,c,u)=>{e[o]=n(t,o,e,c,u,r)})),e}async function Mt(t,n){const e=[];return await st(t,(async(t,r,o)=>{e[r]=await n(t,r,o)})),e}function kt(t,n,e=[],r){let o=0;const c=t.length;for(let u=c-1;u>=0;u--)e[o]=n(t[u],u,t,c,r),o++;return e}function Nt(t,n,e=[],r){const o=t.length;for(let c=0;c<o;c++){const u=t[c];if(!1===n(u,c,e,t,o,r))break;e[c]=u}return e}const Rt=(t,n)=>t-n;function Pt(t){return t.sort(Rt)}function zt(t,n){const e={};return ut(t,((t,r)=>{e[n[r]]=t})),e}function Dt(t,n){const e=[];return[it(t,(t=>{if(n(t))return t;e.push(t)})),e]}const Ht=(t,n)=>n-t;function Wt(t){return t.sort(Ht)}function _t(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t}function qt(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t}function Gt(t){return t.slice(1,t.length)}function Jt(t,n){return t[t.length-1-n]}const Zt=Math,Kt=Zt.floor,Qt=Zt.random,Vt=(t,n)=>t+n,Xt=(t,n)=>t-n,Yt=(t,n)=>t/n,tn=(t,n)=>t*n,nn=(t,n)=>t%n,en=t=>t+1,rn=t=>t-1,on=(t,n=0)=>Qt()*(t-n)+n,cn=(t,n=0)=>Kt(Qt()*(t-n))+n;function un(t,e=t.length){if(t.length<=1)return n(t);const r=n(t);let o,c,u=0;for(;u<e;)o=cn(r.length-1,0),c=r[u],r[u]=r[o],r[o]=c,u++;return r}function sn(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return un(t);if(1===n)return[t[cn(e-1,0)]];const r=[],o={};let c,u=0;for(;u<n;)c=cn(t.length-1,0),o[c]||(r.push(t[c]),o[c]=!0,u++);return r}const ln=Math.min;function fn(t){return ln(...t)}function an(t,n){let e=0;return It(t,((t,r)=>(e=r,n>t))),e}function hn(t){return t.reduce(((t,n)=>t+n),0)}function dn(t,n=1){return t.slice(0,n)}function gn(t,n,e){return e.indexOf(t)===n}function mn(t,n,e){return t!==e[n-1]}function pn(t,n){return n?t.filter(mn):t.filter(gn)}function yn(...t){return pn(mt(t))}function bn(t,n,e=[],r){let o=0;for(;o<t.length;){const c=e.push(n(t[o],o,t,t.length,r));o++,s(c)&&e.push(c)}return t}function wn(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t}function vn(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t}function In(t,n){return t.filter((t=>!n.includes(t)))}function An(...t){const n={},e=[];return 2===t.length?pt(t[0],t[1]):(ut(t,((t,e)=>{ut(t,((t,r)=>{const o=typeof t;let c=n[o];c||(c=n[o]={});let u=c[t];if(u){if(u.parentIndex===e)return;u.count++}else u=c[t]={count:1,parentIndex:e,child:t}}))})),dt(n,(t=>{dt(t,(t=>{1===t.count&&e.push(t.child)}))})),e)}function xn(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))}function $n(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))}function Sn(t,n){const e={};let r;return ut(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e}function Cn(t,n){let e=0;return ut(t,(t=>{t[n]&&e++})),e}function En(t,n){let e=0;return ut(t,(t=>{t[n]||e++})),e}function jn(t,n,e,r,o){if(t[o]===r)return!0}function Ln(t,n,e="id"){const r=t.find(((t,r)=>jn(t,0,0,n,e)));return-1!==r&&r}function Tn(t,n,e="id"){const r=t.findIndex(((t,r)=>jn(t,0,0,n,e)));return-1!==r&&r}function Fn(t,n){const e={};return ut(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e}function On(t,n="id"){const e={};return ut(t,(t=>{e[t[n]]=t})),e}function Un(t,n,e){return Bt(t,((t,r)=>t[n](e,r)))}function Bn(t,n,e){return Mt(t,(async(t,r)=>t[n](e,r)))}function Mn(t,n){return Bt(t,(t=>t[n]))}function kn(t,n){return Bt(n,(n=>t[n]))}function Nn(t,n){return Bt(t,(t=>kn(t,n)))}function Rn(t,n){return t.sort(((t,e)=>{const r=t[n],o=e[n];return r<o?-1:r>o?1:0}))}function Pn(t,n,e=!0){return(e?t:[...t]).sort(((t,e)=>e[n]?t[n]?t[n]<e[n]?1:t[n]>e[n]?-1:0:1:-1))}function zn(t,n){return Pn(t,n,!1)[0]}function Dn(t,n="id",e=!0){return(e?t:[...t]).sort(((t,e)=>e[n]?t[n]?t[n]<e[n]?-1:t[n]>e[n]?1:0:-1:1))}function Hn(t,n="id"){return Dn(t,n)[0]}function Wn(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)}function _n(t,n){return(...e)=>t(...e.splice(0,n))}function qn(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)}function Gn(t,n){return t.forEach(n)}function Jn(t,n){return(e,r,o)=>{let c;if(s(e))return c=m(e)?t:p(e)||R(e)?n:e.forEach?Gn:n,c(e,r,o)}}const Zn=Jn(Bt,(function(t,n,e={}){return dt(t,((t,r,o,c,u)=>{e[r]=n(t,r,e,o,c,u)})),e}));function Kn(t,n){return Zn(t,(t=>R(t)?t.bind(n):t))}const Qn=Object.assign;function Vn(t,...n){if(t)return Qn(t,...n)}const Xn=Jn(ut,dt),Yn=(t,n)=>(Xn(n,((n,e)=>{t.methods[e]=(...e)=>(n(t.value,...e),t.methods)})),t);function te(t){const n=t=>(n.value=t,n.methods);return Vn(n,{add:t=>Yn(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n}function ne(t,n=t.length){const e=[],r=(...o)=>{if(e.push(...o),e.length===n){const n=t(...e);return rt(e),n}return r};return r}function ee(t,n=t.length){const e=[],r=(...o)=>{if(e.unshift(...o),e.length===n){const n=t(...e);return rt(e),n}return r};return r}const re=!0,oe=()=>re,ce=!1,ue=()=>ce,ie=Reflect.construct;function se(t,n=[],e){return e?ie(t,n,e):ie(t,n)}const le=()=>{};function fe(t,n){for(let e=0;e<t;e++)n(e)}function ae(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e}class he{list=se(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,re),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const de=se(he);function ge(t,n){return de.set(t,n)}function me(){fe(setTimeout(le,0),(t=>{de.remove(t)}))}function pe(t,n){function e(...t){e.id!==ce&&de.remove(e.id),e.id=ge((()=>{e.callable(...t),e.id=ce}),n)}return e.id=ce,e.callable=t.bind(e),e.clear=()=>{e.id!==ce&&(de.remove(e.id),e.id=ce)},e}function ye(t,...n){if(R(t))return t(...n)}async function be(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t}const we=(t,n)=>Xn(t,(t=>{t(n)}));function ve(t){return(...n)=>!t(...n)}function Ie(t=0){return(...n)=>n[t]}const Ae=t=>{let n;return(...e)=>(s(n)||(n=t(...e)),n)};function xe(t,n){return It(w(t),((e,r,o,c)=>n(t[e],e,t,c,o)))}const $e=Jn(It,xe);function Se(t){return(...n)=>Zn(t,(t=>t(...n)))}function Ce(t){return(...n)=>$e(t,(t=>t(...n)))}function Ee(t,n){return(...e)=>t(...n.map((t=>e[t])))}function je(t,n){function e(...t){e.id?e.shouldThrottle=re:(e.callable(...t),e.id=ge((()=>{e.shouldThrottle&&e.callable(...t),e.id=ce}),n))}return e.id=ce,e.callable=t.bind(e),e.clear=()=>{de.remove(e.id),e.id=ce},e}function Le(t,n){return(...e)=>n(t,...e)}const Te=(t,n)=>t===n,Fe=(t,n,e)=>t>n&&t<e,Oe=t=>0===t;function Ue(t){const n=[];return dt(t,((t,e)=>{t&&n.push(e)})),n}const Be=async(t,n)=>{const e=w(t);return await st(e,((r,o,c,u)=>n(t[r],r,t,u,e))),t};function Me(t,n,e={}){return dt(t,((t,r,o,c,u)=>{!0===n(t,r,e,o,c,u)&&(e[r]=t)})),e}function ke(t,n={}){return dt(t,((t,e)=>{n[t]=e})),n}const Ne=(t,n)=>{const e=w(t);return!!Tt(e,w(n))&&It(e,(e=>t[e]===n[e]))},Re=async(t,n,e={})=>(await Be(t,(async(t,r,o,c,u)=>{e[r]=await n(t,r,e,o,c,u)})),e),Pe=async(t,n,e={})=>(await Be(t,(async(t,r,o,c,u)=>{const i=await n(t,r,e,c,u);s(i)&&(e[r]=i)})),e);function ze(t,n){return Me(t,((t,e)=>!n.includes(e)))}const De=(t,n,e={})=>(ut(n,(n=>{e[n]=t[n]})),e),He=(t,n)=>{const e={};return ut(t,((t,r)=>{e[t]=n[r]})),e},We=t=>{const n=[],e=[];return dt(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},_e=/[-_]/g,qe=/ (.)/g;function Ge(t){return t.replace(_e," ").trim().toUpperCase()}function Je(t){return t.toLowerCase().replace(qe,(t=>t.toUpperCase().replace(/ /g,"")))}function Ze(t){return t.replace(_e," ").trim().toLowerCase().replace(qe,"-$1")}function Ke(t){return t.replace(_e," ").trim().toLowerCase().replace(qe,"_$1")}function Qe(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)}function Ve(t,n=1){return t[t.length-n]}function Xe(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))}function Ye(t,n=1){return t.slice(0,-1*n)}function tr(t,n=1){return t.substr(n)}function nr(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)}const er=/%(?![\da-f]{2})/gi,rr=/&/g,or=/</g,cr=/>/g,ur=/"/g;function ir(t){return decodeURIComponent(t.replace(er,(()=>"%25")))}function sr(t){return t.replace(rr,"&amp;").replace(or,"&lt;").replace(cr,"&gt;").replace(ur,"&quot;")}function lr(t){return sr(ir(t))}const fr=/\S+/g,ar=/\w+/g;function hr(t){return t.match(fr)||[]}function dr(t){return t.match(ar)||[]}const gr=(t,n,e)=>{const r=t.split(""),o=r.length;let c,u=e-n;for(;u<o&&u>=0&&(c=r[u]," "!==c);u--);return t.slice(0,u).trim()},mr=(t,n,e)=>{const r=t.split(""),o=r.length;let c,u=n;for(;u<o&&u>0&&(c=r[u]," "!==c);u++);return t.substr(u,e).trim()};function pr(t,n){const e=t.length;return e>n?gr(t,n,e):t}function yr(t,n){const e=t.length;return e>n?mr(t,n,e):t}const br=/ (.)/g;function wr(t){return t[0].toUpperCase()}function vr(t){return wr(t)+tr(t)}function Ir(t){return t.replace(br,(t=>t.toUpperCase()))}function Ar(t){return wr(t)+tr(t).toLowerCase()}function xr(t){return Ar(t.toLowerCase()).replace(br,(t=>t.toUpperCase()))}const $r=JSON;function Sr(t,n){if(t)return $r.parse(t,n)}const Cr=$r.stringify;function Er(t,n,e){return!!Lt(t,n)||function(t,n,e){let r;return R(e)?r=`${e.name} : ${e.constructor.name}`:e&&(r=`${e.title||e.method.name} -> ${e.file}`),new Error(`Test Failed: ${r}\n\t\tResult: ${Cr(t)}\n\t\tExpected: ${Cr(n)}`,e)}(t,n,e)}const jr=Function.prototype;function Lr(t){return jr.call.bind(t)}const Tr=globalThis.structuredClone;function Fr(t){return Tr(t)}function Or(t,n=!0){return Boolean(t)&&n}function Ur(t){if(p(t)){const n=w(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],c=t[e];Or(c)&&(r[e]=c)}return r}return t.filter((t=>Or(t)))}function Br(t,n=!0){return!1===Boolean(t)&&n}const Mr=Jn(At,Me);function kr(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const Nr=kr(ut),Rr=kr(wt);function Pr(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const zr=Pr(st),Dr=Pr(vt),Hr=/\.|\[/,Wr=/]/g,_r="";function qr(t){return t.replace(Wr,_r).split(Hr)}const Gr=(t,n)=>{let e=n;return It(qr(t),(t=>(e=e[t],s(e)))),e};function Jr(t,...n){return t&&t.includes&&t.includes(...n)}const Zr=l(/\./),Kr=(t,n,e)=>(n&&!s(t[n])&&(t[n]=e),t);function Qr(t){if(s(t))return t}class Vr{list=se(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,re),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Xr=se(Vr);function Yr(t,n){return Xr.set(t,n)}function to(){fe(setTimeout(le,0),(t=>{Xr.remove(t)}))}class no{static models={};constructor(t,n){s(n)?(Vn(this,n),this.modelName=t,no.models.set(t,n)):Vn(this,t)}}function eo(t,n){return s(n)?se(no,[t,n]):Gr(t,no.models)}function ro(t){return new Promise(t)}const oo=(t,n,e=w(t))=>It(e,(e=>Lt(t[e],n[e])));class co{target;constructor(t={}){const n=this.target=t;if(null===n||"object"!=typeof n)return n;dt(n,(t=>{n[t]=new co(n[t])})),this.data=new Proxy(n,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new co(e),!0)})}}const uo=()=>[],io=()=>({}),so=()=>"";async function lo(t,n){for(let e=0;e<t;e++)await n(t)}async function fo(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e}function ao(t,n=!0,e=!1){return Lt(n,t)?e:n}let ho=0;const go=[];function mo(){let t=go.shift(go);return s(t)||(t=ho,ho++),t}mo.free=t=>{go.push(t)};class po{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function yo(t){return new po(t)}function bo(t){return t?bo[t]:w(bo)}const wo=globalThis.navigator?.userAgentData;if(wo)dt(wo,((t,n)=>{f(t)&&t&&(bo[n]=t)})),ut(wo.brands,(t=>{bo[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");ut(t.split(/ |\//),(t=>{bo[t]=!0}))}function vo(t,n,e,r){return t.addEventListener(n,e,r),t}function Io(t,n,e,r){return t.removeEventListener(n,e,r),t}function Ao(t){return 13===t.keyCode}const xo=document.createDocumentFragment.bind(document);function $o(t,n){return t.appendChild(n),n}function So(t,n){return m(n)?He(n,Bt(n,(n=>t.getAttribute(n)))):(dt(n,((n,e)=>{t.setAttribute(e,n)})),t)}const Co=".",Eo="#",jo=/^.[\w_-]+$/,Lo=/^[A-Za-z]+$/,To=/\s/,Fo=document.getElementsByClassName.bind(document),Oo=document.getElementsByTagName.bind(document),Uo=document.getElementById.bind(document),Bo=document.querySelector.bind(document),Mo=document.querySelectorAll.bind(document);function ko(t){switch(t[0]){case Eo:if(!To.test(t))return Uo(tr(t));break;case Co:if(jo.test(t))return Fo(tr(t));break;default:if(Lo.test(t))return Oo(t)}return Mo(t)}const No=document.createElement.bind(document),Ro=t=>ro((n=>{vo(t,"load",n,!0),vo(t,"error",n,!0),$o(Bo("head"),t)}));function Po(t){const n=Zr(t)&&t||`${t}.js`,e=So(No("script"),{async:"",src:n});return Ro(e)}function zo(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&vo(document,"DOMContentLoaded",t),!1)}zo((()=>{const t=Uo("AcidLib");Po(t&&t.getAttribute("data-index")||"/index")}));const Do=location.protocol,Ho="http:"===Do?"ws":"wss",Wo=location.hostname,_o={hardware:{cores:navigator.hardwareConcurrency},host:{name:Wo,protocol:Do,protocolSocket:Ho}};function qo(){Vn(_o,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function Go(){qo()}let Jo;zo(Go),vo(window,"load",Go,!0),vo(window,"resize",Go,!0),function(t){try{t().removeItem("TESTING"),Jo=!0}catch(t){Jo=!1}}((()=>localStorage));class Zo{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=yo(t)}hasLocal=Jo;setItem(t,n){return this.hasLocal&&this.local.setItem(t,g(n)?n:Cr(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return s(n)?n:!s(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}function Ko(t){return new Zo(t)}const Qo=(t,n)=>`color:${t};background:${n};`,Vo={alert:Qo("#fff","#f44336"),important:Qo("#fff","#E91E63"),notify:Qo("#fff","#651FFF"),warning:Qo("#000","#FFEA00")},Xo=(t,n)=>{const e=g(t)?t:Cr(t);if("alert"===n||"warning"===n)return console.trace(`%c${e}`,`${Vo[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${e}`,`${Vo[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},Yo=(t,n,e)=>{Vo[t]=Qo(n,e)};function tc(t){return t&&9!==t.nodeType}const nc="[object HTMLCollection]";function ec(t){return!!s(t)&&t.toString()===nc}const rc="[object NodeList]";function oc(t){return!!s(t)&&t.toString()===rc}export{Zo as Crate,Vr as Intervals,no as Model,co as Store,he as Timers,po as VirtualStorage,Vt as add,Wn as after,$o as append,t as apply,zt as arrayToObject,_n as ary,Er as assert,Vn as assign,qn as before,Kn as bindAll,Lr as cacheNativeMethod,Je as camelCase,te as chain,et as chunk,Xe as chunkString,rt as clear,to as clearIntervals,me as clearTimers,Fr as clone,ot as cloneArray,Xo as cnsl,Yo as cnslTheme,Ur as compact,Ue as compactKeys,it as compactMapArray,lt as compactMapAsync,Pe as compactMapObjectAsync,se as construct,d as constructorName,Sn as countBy,Cn as countKey,En as countWithoutKey,Ko as crate,xo as createFragment,ne as curry,ee as curryRight,pe as debounce,W as decimalCheck,rn as deduct,o as defineProperty,pt as difference,Yt as divide,yt as drop,bt as dropRight,Xn as each,ut as eachArray,st as eachAsyncArray,dt as eachObject,Be as eachObjectAsync,wt as eachRight,vt as eachRightAsync,gt as ensureArray,vo as eventAdd,Io as eventRemove,$e as every,It as everyArray,xe as everyObject,Br as falsey,ce as falsy,Mr as filter,At as filterArray,Me as filterObject,Tn as findIndex,Ln as findItem,xt as first,$t as flatten,mt as flattenDeep,Nr as flow,zr as flowAsync,Dr as flowAsyncRight,Rr as flowRight,Gr as get,Fo as getByClass,Uo as getById,Oo as getByTag,Q as getExtensionRegex,V as getFileExtension,zn as getNewest,Hn as getOldest,r as getOwnPropertyDescriptor,c as getOwnPropertyNames,Fn as groupBy,Jr as has,jt as hasAnyKeys,Zr as hasDot,Et as hasKeys,y as hasLength,Jo as hasLocal,s as hasValue,sr as htmlEntities,ye as ifInvoke,Kr as ifNotEqual,Qr as ifValue,Po as importjs,be as inAsync,we as inSync,en as increment,On as indexBy,_o as info,St as initial,Ye as initialString,Qe as insertInRange,Ct as intersection,Yr as interval,Xr as intervals,ke as invert,Un as invoke,Bn as invokeAsync,bo as isAgent,F as isArguments,m as isArray,D as isAsync,f as isBoolean,x as isBuffer,a as isConstructor,h as isConstructorFactory,N as isDate,_ as isDecimal,zo as isDocumentReady,tc as isDom,I as isEmpty,Ao as isEnter,Lt as isEqual,$ as isF32,O as isF64,X as isFileCSS,Y as isFileHTML,tt as isFileJS,nt as isFileJSON,R as isFunction,ec as isHTMLCollection,q as isI16,A as isI32,S as isI8,H as isKindAsync,B as isMap,Tt as isMatchArray,Ne as isMatchObject,oc as isNodeList,i as isNull,G as isNumber,Te as isNumberEqual,Fe as isNumberInRange,p as isPlainObject,C as isPrimitive,M as isPromise,P as isRegExp,e as isSame,Z as isSet,g as isString,E as isU16,k as isU32,z as isU8,K as isU8C,u as isUndefined,L as isWeakMap,Oe as isZero,Sr as jsonParse,Ze as kebabCase,w as keys,Ot as largest,Ut as last,Zn as map,Bt as mapArray,Mt as mapAsyncArray,Re as mapObjectAsync,kt as mapRightArray,Nt as mapWhile,Xt as minus,eo as model,tn as multiply,ve as negate,So as nodeAttribute,le as noop,Ie as nthArg,Pt as numSort,Rt as numericalCompare,Ht as numericalCompareReverse,v as objectSize,ze as omit,Ae as once,gn as onlyUnique,Se as over,Ce as overEvery,Dt as partition,De as pick,Mn as pluck,kn as pluckObject,Nn as pluckValues,ro as promise,oo as propertyMatch,Bo as querySelector,Mo as querySelectorAll,Wt as rNumSort,on as randomArbitrary,cn as randomInt,ht as range,at as rangeDown,ft as rangeUp,ir as rawURLDecode,Ee as reArg,l as regexTestFactory,nn as remainder,_t as remove,qt as removeBy,nr as replaceList,Gt as rest,tr as restString,ct as returnValue,Jt as right,Ve as rightString,sn as sample,lr as sanitize,qo as saveDimensions,ko as selector,un as shuffle,fn as smallest,Ke as snakeCase,Rn as sortAlphabetical,Pn as sortNewest,Dn as sortOldest,mn as sortUnique,an as sortedIndex,Cr as stringify,uo as stubArray,ue as stubFalse,io as stubObject,so as stubString,oe as stubTrue,hn as sum,dn as take,Vo as themes,je as throttle,ge as timer,de as timers,fe as times,lo as timesAsync,ae as timesMap,fo as timesMapAsync,n as toArray,qr as toPath,ao as toggle,hr as tokenize,Or as truey,pr as truncate,yr as truncateRight,re as truth,mo as uid,$n as unZip,We as unZipObject,yn as union,pn as unique,Go as updateDimensions,Ge as upperCase,vr as upperFirst,Ir as upperFirstAll,wr as upperFirstLetter,Ar as upperFirstOnly,xr as upperFirstOnlyAll,yo as virtualStorage,bn as whileCompactMap,wn as whileEachArray,vn as whileMapArray,In as without,dr as words,Le as wrap,An as xor,xn as zip,He as zipObject};
//# sourceMappingURL=index.js.map

const t=Array.from,e=Reflect.apply,n=Object,r=n.keys,o=n.is,c=n.assign,s=n.getOwnPropertyDescriptor,u=n.defineProperty,i=n.getOwnPropertyNames,l=t=>r(t).length;function a(t){return void 0===t}function f(t){return null===t}function h(t){return!a(t)&&!f(t)}function g(t){return e=>!!h(e)&&e.constructor===t}const d=/\.|\+/,m=t=>d.test(t.toString()),p=Array.isArray,y=g(String),w=g(Number),b=t=>!!h(t)&&"Object("===t.constructor.toString().trim().slice(9,16),A=t=>!!h(t)&&t instanceof Function,v=(t,...e)=>t.includes(...e),I=t=>Boolean(t.length),C=t=>y(t)||p(t)?!I(t):b(t)?!l(t):!h(t),S=t=>e=>!!h(e)&&t.test(e),x=S(/\.css$/),L=S(/\.json$/),$=S(/\.js$/),E=S(/\.html$/),j=S(/\./),T=/\.([0-9a-z]+)/,F=t=>{const e=t.match(T);if(e)return e[1]},U=t=>t instanceof RegExp,B=t=>"Boolean"===t.constructor.name,O=t=>t instanceof Date,k=t=>!!t&&t instanceof Promise,N=t=>!!t&&"AsyncFunction"===t.constructor?.name,M=t=>!!t&&(k(t)||N(t)),R=t=>{const e=typeof t;return null==t||"object"!==e&&"function"!==e};function z(t){return!!h(t)&&"[object Arguments]"===t.toString()}function D(t){return!!h(t)&&"[object Map]"===t.toString()}function H(t){return!!h(t)&&"[object Set]"===t.toString()}function P(t){return!!h(t)&&"[object WeakMap]"===t.toString()}function W(t){return!!h(t)&&"ArrayBuffer"===t.constructor?.name}function _(t){return!!h(t)&&"Float32Array"===t.constructor?.name}function q(t){return!!h(t)&&"Float64Array"===t.constructor?.name}function G(t){return!!h(t)&&"Int8Array"===t.constructor?.name}function J(t){return!!h(t)&&"Int16Array"===t.constructor?.name}function Z(t){return!!h(t)&&"Int32Array"===t.constructor?.name}function K(t){return!!h(t)&&"Uint8Array"===t.constructor?.name}function Q(t){return!!h(t)&&"Uint8ClampedArray"===t.constructor?.name}function V(t){return!!h(t)&&"Uint16Array"===t.constructor?.name}function X(t){return!!h(t)&&"Uint32Array"===t.constructor?.name}const Y=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const o=t[r];await o(e,r,t,n)}return t},tt=t=>p(t)&&t||h(t)&&[t]||[],et=(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(tt(e))),[]);return n},nt=t=>t.flat(1/0),rt=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const o=t[r];e.includes(o)&&(t.splice(r,1),r--,n--)}return t},ot=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--)}return t},ct=(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,o)=>{o%e||(n.push([]),o&&r++),n[r].push(t)})),n},st=t=>t.slice(1,t.length),ut=t=>(t.length=0,t),it=(t,e)=>t[t.length-1-e],lt=t=>t.slice(),at=Math,ft=at.floor,ht=at.random,gt=(t,e)=>t+e,dt=(t,e)=>t-e,mt=(t,e)=>t/e,pt=(t,e)=>t*e,yt=(t,e)=>t%e,wt=t=>t+1,bt=t=>t-1,At=(t,e=0)=>ht()*(t-e)+e,vt=(t,e=0)=>ft(ht()*(t-e))+e,It=(e,n=e.length)=>{if(e.length<=1)return t(e);const r=t(e);let o,c,s=0;for(;s<n;)o=vt(r.length-1,0),c=r[s],r[s]=r[o],r[o]=c,s++;return r},Ct=(t,e=1)=>{if(!t)return!1;const n=t.length;if(n===e||e>n)return It(t);if(1===e)return[t[vt(n-1,0)]];const r=[],o={};let c,s=0;for(;s<e;)c=vt(t.length-1,0),o[c]||(r.push(t[c]),o[c]=!0,s++);return r},St=t=>t.slice(0,t.length-1),xt=Math.min,Lt=t=>xt(...t),$t=(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let o=t;for(;o<e;)r.push(o),o+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,o=[];let c=t;for(;c>e;)o.push(c),c-=r;return o})(t,e,n);function Et(t,e,n){const r=t.length;for(let o=0;o<r;o++)e(t[o],o,t,r,n);return t}function jt(t,e,n){const r=t.length;for(let o=r-1;o>=0;o--)e(t[o],o,t,r,n);return t}function Tt(t,e,n){const r=t.length;for(let o=0;o<r;o++)if(!1===e(t[o],o,t,r,n))return!1;return!0}function Ft(t,e,n=[],r){return Et(t,((t,o,c,s)=>{!0===e(t,o,n,c,s,r)&&n.push(t)})),n}function Ut(t,e,n=[],r){return Et(t,((t,o,c,s)=>{n[o]=e(t,o,n,c,s,r)})),n}function Bt(t,e,n=[],r){let o=0;const c=t.length;for(let s=c-1;s>=0;s--)n[o]=e(t[s],s,t,c,r),o++;return n}function Ot(t){if(h(t))return t}function kt(t,e=Ot,n=[],r){return Et(t,((t,o,c,s)=>{const u=e(t,o,n,c,s,r);h(u)&&n.push(u)})),n}function Nt(t,e,n=[],r){const o=t.length;for(let c=0;c<o;c++){const s=t[c];if(!1===e(s,c,n,t,o,r))break;n[c]=s}return n}function Mt(t,e,n){let r=0;for(;r<t.length;)e(t[r],r,t,t.length,n),r++;return t}function Rt(t,e,n=[],r){let o=0;for(;o<t.length;)n.push(e(t[o],o,t,t.length,r)),o++;return t}function zt(t,e,n=[],r){let o=0;for(;o<t.length;){const c=n.push(e(t[o],o,t,t.length,r));o++,h(c)&&n.push(c)}return t}const Dt=(t,...e)=>kt(t,(t=>{if(Tt(e,(e=>e.includes(t))))return t})),Ht=(t,...e)=>{const n=nt(e);return kt(t,(t=>{if(!n.includes(t))return t}))},Pt=(t,e,n=t.length)=>t.splice(e,n),Wt=(t,e,n=t.length)=>Pt(t,0,n-e),_t=(t,e)=>t.length===e.length&&Tt(t,((t,n)=>e[n]===t)),qt=(t,e)=>{let n=0;return Tt(t,((t,r)=>(n=r,e>t))),n},Gt=Math.max,Jt=t=>Gt(...t),Zt=t=>t.reduce(((t,e)=>t+e),0),Kt=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},Qt=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t},Vt=(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]},Xt=(t,e=1)=>t.slice(0,e),Yt=(t,e=1)=>{const n=t.length;return t.slice(n-e,n)},te=async(t,e)=>{const n=[];return await Kt(t,(async(t,r,o)=>{n[r]=await e(t,r,o)})),n},ee=(t,e,n)=>n.indexOf(t)===e,ne=(t,e,n)=>t!==n[e-1],re=(t,e)=>e?t.filter(ne):t.filter(ee),oe=(...t)=>re(nt(t));function ce(t){if(h(t))return t}const se=async(t,e=ce)=>{const n=[];let r;return await Kt(t,(async(t,o,c)=>{r=await e(t,o,n,c),h(r)&&n.push(r)})),n},ue=(t,e)=>t-e,ie=t=>t.sort(ue),le=(t,e)=>{const n={};return Et(t,((t,r)=>{n[e[r]]=t})),n},ae=(t,e)=>t.filter((t=>!e.includes(t))),fe=(t,e)=>{const n=[];return[kt(t,(t=>{if(e(t))return t;n.push(t)})),n]},he=(...t)=>{const e=[];return Et(t,(t=>{Et(re(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)}))})),e},ge=(...t)=>t[0].map(((e,n)=>t.map((t=>t[n])))),de=t=>t[0].map(((e,n)=>t.map((t=>t[n])))),me=(t,e)=>e?t.slice(0,e):t[0],pe=(t,e)=>e-t,ye=t=>t.sort(pe),we=(t,e,n)=>{const r=n?t:0,o=n?e:t,c=n||e;for(let t=r;t<o;t++)c(t,r,o)},be=(t,e,n,r=[])=>{const o=n?t:0,c=n?e:t,s=n||e;let u;return we(o,c,(t=>{u=s(t,o,c,r),h(u)&&r.push(u)})),r},Ae=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1)),ve=(t,e)=>Ae(t,e,!1)[0],Ie=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1)),Ce=(t,e="id")=>Ie(t,e)[0],Se=(t,e)=>{const n={};return Et(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t)})),n},xe=(t,e)=>{const n={};let r;return Et(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++})),n},Le=(t,e)=>{let n=0;return Et(t,(t=>{t[e]&&n++})),n},$e=(t,e)=>{let n=0;return Et(t,(t=>{t[e]||n++})),n},Ee=(t,e="id")=>{const n={};return Et(t,(t=>{n[t[e]]=t})),n},je=(t,e)=>Ut(t,(t=>t[e])),Te=(t,e)=>Ut(e,(e=>t[e])),Fe=(t,e)=>Ut(t,(t=>Te(t,e))),Ue=(t,e,n)=>Ut(t,((t,r)=>t[e](n,r))),Be=(t,e,n)=>te(t,(async(t,r)=>t[e](n,r))),Oe=(t,e,n,r,o)=>{if(t[o]===r)return!0},ke=(t,e,n="id")=>{const r=t.find(((t,r)=>Oe(t,0,0,e,n)));return-1!==r&&r},Ne=(t,e,n="id")=>{const r=t.findIndex(((t,r)=>Oe(t,0,0,e,n)));return-1!==r&&r},Me=(t,e)=>t.sort(((t,n)=>{const r=t[e],o=n[e];return r<o?-1:r>o?1:0})),Re=(t,e)=>(...n)=>t(...n.splice(0,e)),ze=(t,e=t.length)=>{const n=[],r=(...o)=>{if(n.push(...o),n.length===e){const e=t(...n);return ut(n),e}return r};return r},De=(t,e=t.length)=>{const n=[],r=(...o)=>{if(n.unshift(...o),n.length===e){const e=t(...n);return ut(n),e}return r};return r},He=t=>{let e;return(...n)=>(h(e)||(e=t(...n)),e)},Pe=(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},We=(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},_e=()=>({}),qe=()=>[],Ge=()=>"",Je=()=>!1,Ze=()=>!0,Ke=()=>{},Qe=(t,e)=>Et(r(t),((n,r,o,c)=>{e(t[n],n,t,c,o)})),Ve=(t,e)=>Tt(r(t),((n,r,o,c)=>e(t[n],n,t,c,o))),Xe=(t,e,n={})=>(Qe(t,((t,r,o,c,s)=>{!0===e(t,r,n,o,c,s)&&(n[r]=t)})),n),Ye=(t,e,n={})=>(Qe(t,((t,r,o,c,s)=>{n[r]=e(t,r,n,o,c,s)})),n);function tn(t){if(h(t))return t}const en=(t,e=tn,n={})=>(Qe(t,((t,r,o,c,s)=>{const u=e(t,r,n,o,c,s);h(u)&&(n[r]=u)})),n),nn=(t,e)=>t.forEach(e),rn=(t,e)=>(n,r,o)=>{let c;if(h(n))return c=p(n)?t:b(n)||A(n)?e:n.forEach?nn:e,c(n,r,o)},on=rn(Tt,Ve),cn=rn(Et,Qe),sn=rn(Ft,Xe),un=rn(Ut,Ye),ln=rn(kt,en),an=(t,e)=>un(t,(t=>A(t)?t.bind(e):t)),fn=(t,...e)=>{if(A(t))return t(...e)},hn=t=>(...e)=>!t(...e),gn=on,dn=t=>(...e)=>un(t,(t=>t(...e))),mn=t=>(...e)=>on(t,(t=>t(...e))),pn=(t,e)=>setTimeout(t,e),yn=(t,e)=>setInterval(t,e),wn=(t,e)=>()=>{we(0,t((()=>{}),0),(t=>{e(t)}))},bn=wn(pn,clearTimeout),An=wn(yn,clearInterval),vn=(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=pn((()=>{t(...r),n=!1}),e)};return r.clear=()=>{n&&(clearTimeout(n),n=!1)},r},In=(t,e)=>{let n,r=!1;const o=(...o)=>{r?n=!0:(t(...o),r=pn((()=>{n&&t(...o),r=!1}),e))};return o.clear=()=>{clearTimeout(r),r=!1},o},Cn=t=>{const e=t=>(e.value=t,e.methods);return c(e,{add:t=>((t,e)=>(cn(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods)})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e},Sn=(t,e)=>cn(t,(t=>{t(e)})),xn=async(t,e)=>Kt(t,(async t=>{await t(e)})),Ln=(t=0)=>(...e)=>e[t],$n=(t,e)=>(...n)=>t(...e.map((t=>n[t]))),En=(t,e)=>(...n)=>e(t,...n),jn=t=>0===t,Tn=(t,e)=>t===e,Fn=(t,e,n)=>t>e&&t<n,Un=(t,e)=>{const n=r(t);return Tt(e,(t=>n.includes(t)))},Bn=(t,e)=>{const n=r(t);return Boolean(e.find((t=>n.includes(t))))},On=(t,e,n={})=>(Et(e,(e=>{n[e]=t[e]})),n),kn=t=>{const e=[];return Qe(t,((t,n)=>{t&&e.push(n)})),e},Nn=(t,e)=>{const n=r(t);return!!_t(n,r(e))&&Tt(n,(n=>t[n]===e[n]))},Mn=(t,e)=>{const n={};return Et(t,((t,r)=>{n[t]=e[r]})),n},Rn=t=>{const e=[],n=[];return Qe(t,((t,r)=>{e.push(r),n.push(t)})),[e,n]},zn=(t,e={})=>(Qe(t,((t,n)=>{e[t]=n})),e),Dn=(t,e)=>Xe(t,((t,n)=>!e.includes(n))),Hn=async(t,e)=>{const n=r(t);return await Kt(n,((r,o,c,s)=>e(t[r],r,t,s,n))),t},Pn=async(t,e,n={})=>(await Hn(t,(async(t,r,o,c,s)=>{n[r]=await e(t,r,n,o,c,s)})),n),Wn=async(t,e,n={})=>(await Hn(t,(async(t,r,o,c,s)=>{const u=await e(t,r,n,c,s);h(u)&&(n[r]=u)})),n),_n=/[-_]/g,qn=/ (.)/g,Gn=t=>t.replace(_n," ").trim().toUpperCase(),Jn=t=>t.toLowerCase().replace(qn,(t=>t.toUpperCase().replace(/ /g,""))),Zn=t=>t.replace(_n," ").trim().toLowerCase().replace(qn,"-$1"),Kn=t=>t.replace(_n," ").trim().toLowerCase().replace(qn,"_$1"),Qn=(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),Vn=(t,e=1)=>t[t.length-e],Xn=(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),Yn=(t,e=1)=>t.slice(0,-1*e),tr=(t,e=1)=>t.substr(e),er=(t,e,n)=>t.replace(new RegExp(`\\b${e.join("|")}\\b`,"gi"),n),nr=/%(?![\da-f]{2})/gi,rr=/&/g,or=/</g,cr=/>/g,sr=/"/g,ur=t=>decodeURIComponent(t.replace(nr,(()=>"%25"))),ir=t=>t.replace(rr,"&amp;").replace(or,"&lt;").replace(cr,"&gt;").replace(sr,"&quot;"),lr=t=>ir(ur(t)),ar=/\S+/g,fr=/\w+/g,hr=t=>t.match(ar)||[],gr=t=>t.match(fr)||[],dr=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),o=r.length;let c,s=n-e;for(;s<o&&s>=0&&(c=r[s]," "!==c);s--);return t.slice(0,s).trim()})(t,e,n):t},mr=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),o=r.length;let c,s=e;for(;s<o&&s>0&&(c=r[s]," "!==c);s++);return t.substr(s,n).trim()})(t,e,n):t},pr=/ (.)/g,yr=t=>t[0].toUpperCase(),wr=t=>yr(t)+tr(t),br=t=>t.replace(pr,(t=>t.toUpperCase())),Ar=t=>yr(t)+tr(t).toLowerCase(),vr=t=>Ar(t.toLowerCase()).replace(pr,(t=>t.toUpperCase())),Ir=Reflect.construct;function Cr(t,e=[],n){return n?Ir(t,e,n):Ir(t,e)}const Sr=Object.create,xr=(t,e,n=!1,o,c,s)=>{if(h(t)){if(s){const r=s.pop();if(r){const o=e[r];console.log(r,t[r],o),t[r]=xr(t[r],o,n),console.log(t[r])}else if(!c)return t;if(c){let r=o||0;if(r++,r<c)return xr(t,e,n,r,c,s)}return xr(t,e,n,null,null,s)}if(!c){if(p(e))return 0===c?t:xr(t,e,n,0,e.length);if(b(e)){const o=r(e);return xr(t,e,n,null,null,o)}return e}if(o<c){let r=o||0;const u=e[r];if(h(u)){const o=t[r];if(n?t.push(xr(o,u,n)):t[r]=xr(o,u,n),r++,r<c)return xr(t,e,n,r,c,s)}}}else{if(b(e))return s?xr({},e,n,null,null,s):xr({},e,n);if(p(e))return o<c?xr([],e,n,o,c,s):xr([],e,n)}return h(t)?t:e};let Lr;Lr=globalThis.structuredClone?t=>globalThis.structuredClone(t):t=>b(t)?xr({},t):p(t)?xr([],t):Sr(t);const $r=Function.prototype;function Er(t){return $r.call.bind(t)}const jr=(t,e,n)=>(e&&!h(t[e])&&(t[e]=n),t),Tr=(t,e)=>{if(t===e)return!0;if(t.toString()===e.toString())if(b(t)){const n=r(t);if(Un(e,n))return Tt(n,(n=>Tr(t[n],e[n])))}else if(p(t)&&t.length===e.length)return Tt(t,((t,n)=>Tr(t,e[n])));return!1},Fr=(t,e,n=r(t))=>Tt(n,(n=>Tr(t[n],e[n]))),Ur=/\.|\[/,Br=/]/g,Or=t=>t.replace(Br,"").split(Ur);let kr=0;const Nr=[];function Mr(){let t=Nr.shift(Nr);return h(t)||(t=kr,kr++),t}Mr.free=t=>{Nr.push(t)};const Rr=(t,e)=>{let n=e;return Tt(Or(t),(t=>(n=n[t],h(n)))),n},zr=JSON,Dr=zr.parse,Hr=zr.stringify;class Pr{static models={};constructor(t,e){h(e)?(c(this,e),this.modelName=t,Pr.models.set(t,e)):c(this,t)}}function Wr(t,e){return h(e)?Cr(Pr,[t,e]):Rr(t,Pr.models)}const _r=t=>new Promise(t),qr=(t,e=!0,n=!1)=>Tr(e,t)?n:e,Gr=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r)})),r},Jr=Gr(Et),Zr=Gr(jt),Kr=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r)})),r},Qr=Kr(Kt),Vr=Kr(Qt);class Xr{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,e){this.items[t]=e}clear(){this.items={}}removeItem(t){this.items[t]=null}}function Yr(){return new Xr}function to(t,e=!0){return!1===Boolean(t)&&e}function eo(t,e=!0){return Boolean(t)&&e}function no(t){if(b(t)){const e=r(t),n=e.length,o={};for(let r=0;r<n;r++){const n=e[r],c=t[n];eo(c)&&(o[n]=c)}return o}return t.filter((t=>eo(t)))}const ro=t=>t?ro[t]:r(ro),oo=globalThis.navigator?.userAgentData;if(oo)Qe(oo,((t,e)=>{B(t)&&t&&(ro[e]=t)})),Et(oo.brands,(t=>{ro[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");Et(t.split(/ |\//),(t=>{ro[t]=!0}))}const co=(t,e,n,r)=>(t.addEventListener(e,n,r),t),so=(t,e,n,r)=>(t.removeEventListener(e,n,r),t),uo=t=>13===t.keyCode,io=document.createDocumentFragment.bind(document),lo=(t,e)=>(t.appendChild(e),e),ao=(t,e)=>p(e)?Mn(e,Ut(e,(e=>t.getAttribute(e)))):(Qe(e,((e,n)=>{t.setAttribute(n,e)})),t),fo=/^.[\w_-]+$/,ho=/^[A-Za-z]+$/,go=/\s/,mo=document.getElementsByClassName.bind(document),po=document.getElementsByTagName.bind(document),yo=document.getElementById.bind(document),wo=document.querySelector.bind(document),bo=document.querySelectorAll.bind(document),Ao=t=>{switch(t[0]){case"#":if(!go.test(t))return yo(tr(t));break;case".":if(fo.test(t))return mo(tr(t));break;default:if(ho.test(t))return po(t)}return bo(t)},vo=document.createElement.bind(document),Io=t=>{const e=j(t)&&t||`${t}.js`;return(t=>_r((e=>{co(t,"load",e,!0),co(t,"error",e,!0),lo(wo("head"),t)})))(ao(vo("script"),{async:"",src:e}))},Co=t=>{const e=document.readyState;return"interactive"===e||"completed"===e||"complete"===e?!t||t():(t&&co(document,"DOMContentLoaded",t),!1)};Co((()=>{const t=yo("AcidLib"),e=t&&t.getAttribute("data-index")||"/index";Io(e)}));const So=location.protocol,xo="http:"===So?"ws":"wss",Lo=location.hostname,$o={hardware:{cores:navigator.hardwareConcurrency},host:{name:Lo,protocol:So,protocolSocket:xo}},Eo=()=>{c($o,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},jo=()=>{Eo()};let To;Co(jo),co(window,"load",jo,!0),co(window,"resize",jo,!0),function(t){try{t().removeItem("TESTING"),To=!0}catch(t){To=!1}}((()=>localStorage));class Fo{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=Yr()}hasLocal=To;setItem(t,e){return this.hasLocal&&this.local.setItem(t,y(e)?e:Hr(e)),this.storage.setItem(t,e)}getItem(t){const e=this.storage.getItem(t);return h(e)?e:!h(e)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}function Uo(t){return new Fo(t)}const Bo=(t,e)=>`color:${t};background:${e};`,Oo={alert:Bo("#fff","#f44336"),important:Bo("#fff","#E91E63"),notify:Bo("#fff","#651FFF"),warning:Bo("#000","#FFEA00")},ko=(t,e)=>{const n=y(t)?t:Hr(t);if("alert"===e||"warning"===e)return console.trace(`%c${n}`,`${Oo[e]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${n}`,`${Oo[e]}font-size:13px;padding:2px 5px;border-radius:2px;`)},No=(t,e,n)=>{Oo[t]=Bo(e,n)},Mo=t=>t&&9!==t.nodeType;function Ro(t){return!!h(t)&&"[object HTMLCollection]"===t.toString()}function zo(t){return!!h(t)&&"[object NodeList]"===t.toString()}export{Fo as Crate,Pr as Model,Xr as VirtualStorage,gt as add,Pe as after,lo as append,e as apply,le as arrayToObject,Re as ary,c as assign,Y as asyncEach,We as before,an as bindAll,Er as cacheNativeMethod,Jn as camelCase,Cn as chain,ct as chunk,Xn as chunkString,ut as clear,An as clearIntervals,bn as clearTimers,Lr as clone,lt as cloneArray,ko as cnsl,No as cnslTheme,no as compact,kn as compactKeys,ln as compactMap,kt as compactMapArray,se as compactMapAsync,en as compactMapObject,Wn as compactMapObjectAsync,Cr as construct,xe as countBy,Le as countKey,$e as countWithoutKey,Uo as crate,io as createFragment,ze as curry,De as curryRight,vn as debounce,d as decimalCheck,bt as deduct,u as defineProperty,Ht as difference,mt as divide,Pt as drop,Wt as dropRight,cn as each,Et as eachArray,jt as eachArrayRight,Kt as eachAsync,Qt as eachAsyncRight,Qe as eachObject,Hn as eachObjectAsync,on as eachWhile,tt as ensureArray,co as eventAdd,so as eventRemove,gn as every,to as falsey,sn as filter,Ft as filterArray,Xe as filterObject,Ne as findIndex,ke as findItem,me as first,et as flatten,nt as flattenDeep,Jr as flow,Qr as flowAsync,Vr as flowAsyncRight,Zr as flowRight,Rr as get,mo as getByClass,yo as getById,po as getByTag,T as getExtensionRegex,F as getFileExtension,ve as getNewest,Ce as getOldest,s as getOwnPropertyDescriptor,i as getOwnPropertyNames,Se as groupBy,v as has,Bn as hasAnyKeys,j as hasDot,Un as hasKeys,I as hasLength,To as hasLocal,h as hasValue,ir as htmlEntities,fn as ifInvoke,jr as ifNotEqual,Io as importjs,xn as inAsync,Sn as inSync,wt as increment,Ee as indexBy,$o as info,St as initial,Yn as initialString,Qn as insertInRange,Dt as intersect,yn as interval,zn as invert,Ue as invoke,Be as invokeAsync,ro as isAgent,z as isArguments,p as isArray,N as isAsync,B as isBoolean,W as isBuffer,g as isConstructor,O as isDate,m as isDecimal,Co as isDocumentReady,Mo as isDom,C as isEmpty,uo as isEnter,Tr as isEqual,x as isFileCSS,E as isFileHTML,$ as isFileJS,L as isFileJSON,_ as isFloat32,q as isFloat64,A as isFunction,Ro as isHTMLCollection,J as isInt16,Z as isInt32,G as isInt8,M as isKindAsync,D as isMap,_t as isMatchArray,Nn as isMatchObject,zo as isNodeList,f as isNull,w as isNumber,Tn as isNumberEqual,Fn as isNumberInRange,b as isPlainObject,R as isPrimitive,k as isPromise,U as isRegExp,o as isSame,H as isSet,y as isString,V as isUint16,X as isUint32,K as isUint8,Q as isUint8Clamped,a as isUndefined,P as isWeakMap,jn as isZero,Dr as jsonParse,Zn as kebabCase,r as keys,Jt as largest,Vt as last,un as map,Ut as mapArray,Bt as mapArrayRight,te as mapAsync,Ye as mapObject,Pn as mapObjectAsync,Nt as mapWhile,dt as minus,Wr as model,pt as multiply,hn as negate,ao as nodeAttribute,Ke as noop,Ln as nthArg,ie as numSort,ue as numericalCompare,pe as numericalCompareReverse,Sr as objectCreate,l as objectSize,Dn as omit,He as once,dn as over,mn as overEvery,fe as partition,On as pick,je as pluck,Te as pluckObject,Fe as pluckValues,_r as promise,Fr as propertyMatch,wo as querySelector,bo as querySelectorAll,ye as rNumSort,At as randomArbitrary,vt as randomInt,$t as range,ur as rawURLDecode,$n as reArg,S as regexGenerator,yt as remainder,rt as remove,ot as removeBy,er as replaceList,st as rest,tr as restString,it as right,Vn as rightString,Ct as sample,lr as sanitize,Eo as saveDimensions,Ao as selector,It as shuffle,Lt as smallest,Kn as snakeCase,Me as sortAlphabetical,Ae as sortNewest,Ie as sortOldest,qt as sortedIndex,Hr as stringify,qe as stubArray,Je as stubFalse,_e as stubObject,Ge as stubString,Ze as stubTrue,Zt as sum,Xt as take,Yt as takeRight,Oo as themes,In as throttle,pn as timer,we as times,be as timesMap,t as toArray,Or as toPath,qr as toggle,hr as tokenize,eo as truey,dr as truncate,mr as truncateRight,Mr as uid,de as unZip,Rn as unZipObject,oe as union,re as unique,jo as updateDimensions,Gn as upperCase,wr as upperFirst,br as upperFirstAll,yr as upperFirstLetter,Ar as upperFirstOnly,vr as upperFirstOnlyAll,Yr as virtualStorage,Tt as whileArray,zt as whileCompactMap,Mt as whileEachArray,Rt as whileMapArray,Ve as whileObject,ae as without,gr as words,En as wrap,he as xor,ge as zip,Mn as zipObject};
//# sourceMappingURL=index.js.map

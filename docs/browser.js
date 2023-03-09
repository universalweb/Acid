!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";const n=Reflect.apply,e=Array.from,r=Object.is,o=Object.getOwnPropertyDescriptor,i=Object.defineProperty,c=Object.getOwnPropertyNames;function u(t){return void 0===t}function s(t){return null===t}function a(t){return!u(t)&&!s(t)}function l(t){return n=>!!a(n)&&t.test(n)}function f(t){return"Boolean"===t.constructor.name}function h(t,n){return!!a(t)&&t.constructor===n}function d(t){return n=>h(n,t)}const p=d(String),g=Array.isArray,m=t=>!!a(t)&&"Object("===t.constructor.toString().trim().slice(9,16);function y(t){return Boolean(t.length)}const b=Object.keys;function A(t){if(t)return b(t)}function w(t){return A(t).length}const v=d("Int32Array"),S=d("ArrayBuffer"),I=d("Float32Array"),j=d("Int8Array");const O=d("Uint16Array"),x="[object WeakMap]";const C="[object Arguments]";const F=d("Float64Array"),E="[object Map]";function L(t){return!!t&&t instanceof Promise}const M=d("Uint32Array");const T=t=>!!a(t)&&t instanceof Function;const $=d("Uint8Array");function k(t){return!!t&&"AsyncFunction"===t.constructor?.name}const R=/\.|\+/,N=d("Int16Array"),U=d(Number),B="[object Set]";const D=d("Uint8ClampedArray"),P=/\.([0-9a-z]+)/;const q=l(/\.css$/),z=l(/\.html$/),W=l(/\.js$/),H=l(/\.json$/);function K(t){return t.length=0,t}function V(t){return t}function _(t,n,e){const r=t.length;for(let o=0;o<r;o++)n(t[o],o,t,r,e);return t}function Z(t,n=V,e=[],r){return _(t,((t,o,i,c)=>{const u=n(t,o,e,i,c,r);a(u)&&e.push(u)})),e}async function J(t,n){const e=t.length;for(let r=0;r<e;r++)await n(t[r],r,t,e);return t}function G(t,n,e){const r=[];let o=t;for(;o<n;)r.push(o),o+=e;return r}function Q(t,n,e){const r=e<0?-1*e:e,o=[];let i=t;for(;i>n;)o.push(i),i-=r;return o}function X(t,n){return _(A(t),((e,r,o,i)=>{n(t[e],e,t,i,o)}))}const Y=async(t,n)=>{const e=A(t);return await J(e,((r,o,i,c)=>n(t[r],r,t,c,e))),t};function tt(t,n,e,r,o,i){return(c,u,s)=>{let l;const f=k(u);if(a(c)&&u)return l=g(c)?f?n:t:c.forEach&&o&&i?f?o:i:f?r:e,l(c,u,s)}}async function nt(t,n){for(const[e,r]of t)await n(r,e,t);return t}function et(t,n){for(const[e,r]of t)n(r,e,t);return t}const rt=tt(_,J,X,Y,et,nt),ot=t=>g(t)&&t||a(t)&&[t]||[];function it(t){return t.flat(1/0)}const ct=Reflect.construct;function ut(t,n=[],e){return e?ct(t,n,e):ct(t,n)}function st(...t){const n=ut(Map),e=[];return _(t,((t,e)=>{_(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),rt(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function at(t,n,e=t.length){return t.splice(n,e)}function lt(t,n,e){const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function ft(t,n){const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function ht(t,n,e){const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}function dt(t,n,e=[],r){return _(t,((t,o,i,c)=>{!0===n(t,o,e,i,c,r)&&e.push(t)})),e}const pt=/\.|\[/,gt=/]/g,mt="";function yt(t){return t.replace(gt,mt).split(pt)}function bt(t,n){if(!n)return!1;let e=n;return ht(g(t)?t:yt(t),(t=>(e=e[t],a(e)))),e}const At=Object.hasOwn;function wt(t,...n){return ht(n,(n=>{const e=yt(n);if(1===e.length)return At(t,n);{const n=e.pop(),r=bt(e,t);return!!r&&At(r,n)}}))}const vt=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(m(t)){const e=A(t);if(wt(n,e))return ht(e,(e=>vt(t[e],n[e])))}else if(g(t)&&t.length===n.length)return ht(t,((t,e)=>vt(t,n[e])));return!1};function St(t,n){return t.length===n.length&&ht(t,((t,e)=>vt(n[e],t)))}const It=Math.max;function jt(t,n,e=[],r){return _(t,((t,o,i,c)=>{e[o]=n(t,o,e,i,c,r)})),e}async function Ot(t,n){const e=[];return await J(t,(async(t,r,o)=>{e[r]=await n(t,r,o)})),e}const xt=(t,n)=>t-n;const Ct=(t,n)=>n-t;const{floor:Ft,random:Et}=Math;function Lt(t,n=0){return Ft(Et()*(t-n))+n}function Mt(t,n=t.length){if(t.length<=1)return e(t);const r=e(t);let o,i,c=0;for(;c<n;)o=Lt(r.length-1,0),i=r[c],r[c]=r[o],r[o]=i,c++;return r}const Tt=Math.min;function $t(t,n,e){return e.indexOf(t)===n}function kt(t,n,e){return t!==e[n-1]}function Rt(t,n){return n?t.filter(kt):t.filter($t)}function Nt(t,n,e,r,o){if(t[o]===r)return!0}function Ut(t,n){return jt(n,(n=>t[n]))}function Bt(t,n,e=!0){return(e?t:[...t]).sort(((t,e)=>e[n]?t[n]?t[n]<e[n]?1:t[n]>e[n]?-1:0:1:-1))}function Dt(t,n="id",e=!0){return(e?t:[...t]).sort(((t,e)=>e[n]?t[n]?t[n]<e[n]?-1:t[n]>e[n]?1:0:-1:1))}function Pt(t,n,e={}){return X(t,((t,r,o,i,c)=>{e[r]=n(t,r,e,o,i,c)})),e}const qt=tt(jt,Pt);const zt=Object.assign;function Wt(t,...n){if(t)return zt(t,...n)}const Ht=(t,n)=>(rt(n,((n,e)=>{t.methods[e]=(...e)=>(n(t.value,...e),t.methods)})),t);const Kt=!0,Vt=!1,_t=()=>{};function Zt(t,n){for(let e=0;e<t;e++)n(e)}class Jt{list=ut(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,Kt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Gt=ut(Jt);function Qt(t,n){return Gt.set(t,n)}function Xt(t,n){return ht(A(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}const Yt=tt(ht,Xt);function tn(t,n,e={}){return X(t,((t,r,o,i,c)=>{!0===n(t,r,e,o,i,c)&&(e[r]=t)})),e}const nn=(t,n)=>{const e={};return _(t,((t,r)=>{e[t]=n[r]})),e},en=/[-_]/g,rn=/ (.)/g;function on(t,n=1){return t.substr(n)}const cn=/%(?![\da-f]{2})/gi,un=/&/g,sn=/</g,an=/>/g,ln=/"/g;function fn(t){return decodeURIComponent(t.replace(cn,(()=>"%25")))}function hn(t){return t.replace(un,"&amp;").replace(sn,"&lt;").replace(an,"&gt;").replace(ln,"&quot;")}const dn=/\S+/g,pn=/\w+/g;const gn=(t,n,e)=>{const r=t.split(""),o=r.length;let i,c=e-n;for(;c<o&&c>=0&&(i=r[c]," "!==i);c--);return t.slice(0,c).trim()},mn=(t,n,e)=>{const r=t.split(""),o=r.length;let i,c=n;for(;c<o&&c>0&&(i=r[c]," "!==i);c++);return t.substr(c,e).trim()};const yn=/ (.)/g;function bn(t){return t[0].toUpperCase()}function An(t){return bn(t)+on(t).toLowerCase()}const wn=JSON;const vn=wn.stringify;const Sn=Function.prototype;const In=globalThis.structuredClone;function jn(t,n=!0){return Boolean(t)&&n}const On=tt(dt,tn);function xn(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const Cn=xn(_),Fn=xn(lt);function En(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const Ln=En(J),Mn=En(ft);const Tn=l(/\./);class $n{list=ut(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,Kt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const kn=ut($n);class Rn{static models={};constructor(t,n){a(n)?(Wt(this,n),this.modelName=t,Rn.models.set(t,n)):Wt(this,t)}}function Nn(t){return new Promise(t)}class Un{source;constructor(t={}){if(this.source=t,null===t||"object"!=typeof t)return t;X(t,(n=>{t[n]=new Un(t[n])})),this.data=new Proxy(t,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new Un(e),!0)})}}class Bn{totalActive=0;freed=[];totalFree=0;get(){let t=this.freed.shift();return a(t)?this.totalFree--:(t=this.totalActive,this.totalActive++),t}free(t){this.freed.push(t),this.totalFree++;const n=this.totalActive>0,e=this.totalActive===this.totalFree;n&&e&&this.reset()}reset(){this.totalActive=0,this.freed.length=0,this.totalFree=0}}const Dn=ut(Bn);class Pn{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function qn(t){return new Pn(t)}function zn(t){return t?zn[t]:A(zn)}const Wn=globalThis.navigator?.userAgentData;if(Wn)X(Wn,((t,n)=>{f(t)&&t&&(zn[n]=t)})),_(Wn.brands,(t=>{zn[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");_(t.split(/ |\//),(t=>{zn[t]=!0}))}function Hn(t,n,e,r){return t.addEventListener(n,e,r),t}const Kn=document.createDocumentFragment.bind(document);function Vn(t,n){return t.appendChild(n),n}function _n(t,n){return g(n)?nn(n,jt(n,(n=>t.getAttribute(n)))):(X(n,((n,e)=>{t.setAttribute(e,n)})),t)}const Zn=".",Jn="#",Gn=/^.[\w_-]+$/,Qn=/^[A-Za-z]+$/,Xn=/\s/,Yn=document.getElementsByClassName.bind(document),te=document.getElementsByTagName.bind(document),ne=document.getElementById.bind(document),ee=document.querySelector.bind(document),re=document.querySelectorAll.bind(document);const oe=document.createElement.bind(document),ie=t=>Nn((n=>{Hn(t,"load",n,!0),Hn(t,"error",n,!0),Vn(ee("head"),t)}));function ce(t){const n=Tn(t)&&t||`${t}.js`,e=_n(oe("script"),{async:"",src:n});return ie(e)}function ue(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&Hn(document,"DOMContentLoaded",t),!1)}ue((()=>{const t=ne("AcidLib");ce(t&&t.getAttribute("data-index")||"/index")}));const se=location.protocol,ae="http:"===se?"ws":"wss",le=location.hostname,fe={hardware:{cores:navigator.hardwareConcurrency},host:{name:le,protocol:se,protocolSocket:ae}};function he(){Wt(fe,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function de(){he()}ue(de),Hn(window,"load",de,!0),Hn(window,"resize",de,!0),t.hasLocal=void 0,function(n){try{n().removeItem("TESTING"),t.hasLocal=!0}catch(n){t.hasLocal=!1}}((()=>localStorage));class pe{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=qn(t)}hasLocal=t.hasLocal;setItem(t,n){return this.hasLocal&&this.local.setItem(t,p(n)?n:vn(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return a(n)?n:!a(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}const ge=(t,n)=>`color:${t};background:${n};`,me={alert:ge("#fff","#f44336"),important:ge("#fff","#E91E63"),notify:ge("#fff","#651FFF"),warning:ge("#000","#FFEA00")};const ye="[object HTMLCollection]";const be="[object NodeList]";t.Crate=pe,t.Intervals=$n,t.Model=Rn,t.Store=Un,t.Timers=Jt,t.UniqID=Bn,t.VirtualStorage=Pn,t.add=function(t,n){return t+n},t.after=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)},t.append=Vn,t.apply=n,t.arrayToObject=function(t,n){const e={};return _(t,((t,r)=>{e[n[r]]=t})),e},t.ary=function(t,n){return(...e)=>t(...e.splice(0,n))},t.assert=function(t,n,e){return!(T(n)&&!1===n(t,e))&&!function(t,n){return!1===vt(t,n)}(t,n)||function(t,n,e){const r=globalThis.options||e;let o;return T(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${vn(t)}\n\t\tExpected: ${vn(n)}`,r)}(t,n,e)},t.assign=Wt,t.before=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)},t.bindAll=function(t,n){return qt(t,(t=>T(t)?t.bind(n):t))},t.cacheNativeMethod=function(t){return Sn.call.bind(t)},t.camelCase=function(t){return t.toLowerCase().replace(rn,(t=>t.toUpperCase().replace(/ /g,"")))},t.chain=function(t){const n=t=>(n.value=t,n.methods);return Wt(n,{add:t=>Ht(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n},t.chunk=function(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=K,t.clearIntervals=function(){Zt(setTimeout(_t,0),(t=>{kn.remove(t)}))},t.clearTimers=function(){Zt(setTimeout(_t,0),(t=>{Gt.remove(t)}))},t.clone=function(t){return In(t)},t.cloneArray=function(t){return t.slice()},t.cnsl=(t,n)=>{const e=p(t)?t:vn(t);if("alert"===n||"warning"===n)return console.trace(`%c${e}`,`${me[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${e}`,`${me[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},t.cnslTheme=(t,n,e)=>{me[t]=ge(n,e)},t.compact=function(t){if(m(t)){const n=A(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],i=t[e];jn(i)&&(r[e]=i)}return r}return t.filter((t=>jn(t)))},t.compactKeys=function(t){const n=[];return X(t,((t,e)=>{t&&n.push(e)})),n},t.compactMapArray=Z,t.compactMapAsyncArray=async function(t,n=V){const e=[];return await J(t,(async(t,r,o)=>{const i=await n(t,r,e,o);a(i)&&e.push(i)})),e},t.compactMapObject=function(t,n=V,e={}){return X(t,((t,r,o,i,c)=>{const u=n(t,r,e,o,i,c);a(u)&&(e[r]=u)})),e},t.compactMapObjectAsync=async(t,n,e={})=>(await Y(t,(async(t,r,o,i,c)=>{const u=await n(t,r,e,i,c);a(u)&&(e[r]=u)})),e),t.construct=ut,t.constructorName=function(t){return t?.constructor?.name},t.countBy=function(t,n){const e={};let r;return _(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e},t.countKey=function(t,n){let e=0;return _(t,(t=>{t[n]&&e++})),e},t.countWithoutKey=function(t,n){let e=0;return _(t,(t=>{t[n]||e++})),e},t.crate=function(t){return new pe(t)},t.createFragment=Kn,t.curry=function(t,n=t.length){const e=[],r=(...o)=>{if(e.push(...o),e.length===n){const n=t(...e);return K(e),n}return r};return r},t.curryRight=function(t,n=t.length){const e=[],r=(...o)=>{if(e.unshift(...o),e.length===n){const n=t(...e);return K(e),n}return r};return r},t.debounce=function(t,n){function e(...t){e.id!==Vt&&Gt.remove(e.id),e.id=Qt((()=>{e.callable(...t),e.id=Vt}),n)}return e.id=Vt,e.callable=t.bind(e),e.clear=()=>{e.id!==Vt&&(Gt.remove(e.id),e.id=Vt)},e},t.decimalCheck=R,t.defineProperty=i,t.difference=st,t.drop=at,t.dropRight=(t,n,e=t.length)=>at(t,0,e-n),t.each=rt,t.eachArray=_,t.eachAsyncArray=J,t.eachAsyncObject=Y,t.eachObject=X,t.eachRight=lt,t.eachRightAsync=ft,t.ensureArray=ot,t.eventAdd=Hn,t.eventRemove=function(t,n,e,r){return t.removeEventListener(n,e,r),t},t.every=Yt,t.everyArray=ht,t.everyObject=Xt,t.falsey=function(t,n=!0){return!1===Boolean(t)&&n},t.falsy=Vt,t.filter=On,t.filterArray=dt,t.filterObject=tn,t.findIndex=function(t,n,e="id"){const r=t.findIndex(((t,r)=>Nt(t,0,0,n,e)));return-1!==r&&r},t.findItem=function(t,n,e="id"){const r=t.find(((t,r)=>Nt(t,0,0,n,e)));return-1!==r&&r},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(ot(n))),[]);return e},t.flattenDeep=it,t.flow=Cn,t.flowAsync=Ln,t.flowAsyncRight=Mn,t.flowRight=Fn,t.forOf=et,t.forOfAsync=nt,t.get=bt,t.getByClass=Yn,t.getById=ne,t.getByTag=te,t.getExtensionRegex=P,t.getFileExtension=function(t){const n=t.match(P);if(n)return n[1]},t.getNewest=function(t,n){return Bt(t,n,!1)[0]},t.getOldest=function(t,n="id"){return Dt(t,n)[0]},t.getOwnPropertyDescriptor=o,t.getOwnPropertyNames=c,t.groupBy=function(t,n){const e={};return _(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e},t.has=function(t,...n){return t&&t.includes&&t.includes(...n)},t.hasAnyKeys=function(t,...n){return Boolean(n.find((n=>{const e=yt(n);if(1===e.length)return At(t,n);{const n=e.pop(),r=bt(e,t);return!!r&&At(r,n)}})))},t.hasDot=Tn,t.hasKeys=wt,t.hasLength=y,t.hasValue=a,t.htmlEntities=hn,t.ifInvoke=function(t,...n){if(T(t))return t(...n)},t.ifNotEqual=(t,n,e)=>(n&&!a(t[n])&&(t[n]=e),t),t.ifValue=function(t){if(a(t))return t},t.importjs=ce,t.inAsync=async function(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t},t.inSync=(t,n)=>rt(t,(t=>{t(n)})),t.indexBy=function(t,n="id"){const e={};return _(t,(t=>{e[t[n]]=t})),e},t.info=fe,t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)},t.intersection=function(t,...n){return Z(t,(t=>{if(ht(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return kn.set(t,n)},t.intervals=kn,t.invert=function(t,n={}){return X(t,((t,e)=>{n[t]=e})),n},t.invoke=function(t,n,e){return jt(t,((t,r)=>t[n](e,r)))},t.invokeAsync=function(t,n,e){return Ot(t,(async(t,r)=>t[n](e,r)))},t.isAgent=zn,t.isArguments=function(t){return!!a(t)&&t.toString()===C},t.isArray=g,t.isAsync=k,t.isBoolean=f,t.isBuffer=S,t.isConstructor=h,t.isConstructorFactory=d,t.isDate=function(t){return t instanceof Date},t.isDecimal=t=>R.test(t.toString()),t.isDocumentReady=ue,t.isDom=function(t){return t&&9!==t.nodeType},t.isEmpty=function(t){return p(t)||g(t)?!y(t):m(t)?!w(t):!a(t)},t.isEnter=function(t){return 13===t.keyCode},t.isEqual=vt,t.isF32=I,t.isF64=F,t.isFileCSS=q,t.isFileHTML=z,t.isFileJS=W,t.isFileJSON=H,t.isFunction=T,t.isHTMLCollection=function(t){return!!a(t)&&t.toString()===ye},t.isI16=N,t.isI32=v,t.isI8=j,t.isKindAsync=function(t){return!!t&&(L(t)||k(t))},t.isMap=function(t){return!!a(t)&&t.toString()===E},t.isMatchArray=St,t.isMatchObject=(t,n)=>{const e=A(t);return!!St(e,A(n))&&ht(e,(e=>t[e]===n[e]))},t.isNodeList=function(t){return!!a(t)&&t.toString()===be},t.isNull=s,t.isNumber=U,t.isNumberEqual=(t,n)=>t===n,t.isNumberInRange=(t,n,e)=>t>n&&t<e,t.isPlainObject=m,t.isPrimitive=function(t){const n=typeof t;return null==t||"object"!==n&&"function"!==n},t.isPromise=L,t.isRegExp=function(t){return t instanceof RegExp},t.isSame=r,t.isSet=function(t){return!!a(t)&&t.toString()===B},t.isString=p,t.isU16=O,t.isU32=M,t.isU8=$,t.isU8C=D,t.isUndefined=u,t.isWeakMap=function(t){return!!a(t)&&t.toString()===x},t.isZero=t=>0===t,t.jsonParse=function(t,n){if(t)return wn.parse(t,n)},t.kebabCase=function(t){return t.replace(en," ").trim().toLowerCase().replace(rn,"-$1")},t.keys=A,t.largest=function(t){return It(...t)},t.last=function(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]},t.map=qt,t.mapArray=jt,t.mapAsyncArray=Ot,t.mapObject=Pt,t.mapObjectAsync=async(t,n,e={})=>(await Y(t,(async(t,r,o,i,c)=>{e[r]=await n(t,r,e,o,i,c)})),e),t.mapRightArray=function(t,n,e=[],r){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)e[o]=n(t[c],c,t,i,r),o++;return e},t.mapWhile=function(t,n,e=[],r){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,e,t,o,r))break;e[i]=c}return e},t.merge=function t(n,...e){return rt(e,(e=>{rt(e,((e,r)=>{if(n[r]&&(m(e)||g(e)||e.forEach))return t(n[r],e);n[r]=e}))})),n},t.model=function(t,n){return a(n)?ut(Rn,[t,n]):bt(t,Rn.models)},t.negate=function(t){return(...n)=>!t(...n)},t.nodeAttribute=_n,t.noop=_t,t.nthArg=function(t=0){return(...n)=>n[t]},t.numSort=function(t){return t.sort(xt)},t.numericalCompare=xt,t.numericalCompareReverse=Ct,t.objectSize=w,t.omit=function(t,n){return tn(t,((t,e)=>!n.includes(e)))},t.once=t=>{let n;return(...e)=>(a(n)||(n=t(...e)),n)},t.onlyUnique=$t,t.over=function(t){return(...n)=>qt(t,(t=>t(...n)))},t.overEvery=function(t){return(...n)=>Yt(t,(t=>t(...n)))},t.partition=function(t,n){const e=[];return[Z(t,(t=>{if(n(t))return t;e.push(t)})),e]},t.pick=(t,n,e={})=>(_(n,(n=>{e[n]=t[n]})),e),t.pluck=function(t,n){return jt(t,(t=>t[n]))},t.pluckObject=Ut,t.pluckValues=function(t,n){return jt(t,(t=>Ut(t,n)))},t.promise=Nn,t.propertyMatch=(t,n,e=A(t))=>ht(e,(e=>vt(t[e],n[e]))),t.querySelector=ee,t.querySelectorAll=re,t.rNumSort=function(t){return t.sort(Ct)},t.range=function(t,n,e=1){return t<n?G(t,n,e):Q(t,n,e)},t.rangeDown=Q,t.rangeUp=G,t.rawURLDecode=fn,t.reArg=function(t,n){return(...e)=>t(...n.map((t=>e[t])))},t.regexTestFactory=l,t.remove=function(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t},t.removeBy=function(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t},t.replaceList=function(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)},t.rest=function(t){return t.slice(1,t.length)},t.restString=on,t.returnValue=V,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return Mt(t);if(1===n)return[t[Lt(e-1,0)]];const r=[],o={};let i,c=0;for(;c<n;)i=Lt(t.length-1,0),o[i]||(r.push(t[i]),o[i]=!0,c++);return r},t.sanitize=function(t){return hn(fn(t))},t.saveDimensions=he,t.selector=function(t){switch(t[0]){case Jn:if(!Xn.test(t))return ne(on(t));break;case Zn:if(Gn.test(t))return Yn(on(t));break;default:if(Qn.test(t))return te(t)}return re(t)},t.shuffle=Mt,t.smallest=function(t){return Tt(...t)},t.snakeCase=function(t){return t.replace(en," ").trim().toLowerCase().replace(rn,"_$1")},t.sortAlphabetical=function(t,n){return t.sort(((t,e)=>{const r=t[n],o=e[n];return r<o?-1:r>o?1:0}))},t.sortNewest=Bt,t.sortOldest=Dt,t.sortUnique=kt,t.sortedIndex=function(t,n){let e=0;return ht(t,((t,r)=>(e=r,n>t))),e},t.stringify=vn,t.stubArray=()=>[],t.stubFalse=()=>Vt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Kt,t.sub=function(t){return t.reduce(((t,n)=>t-n),0)},t.sum=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.themes=me,t.throttle=function(t,n){function e(...t){e.id?e.shouldThrottle=Kt:(e.callable(...t),e.id=Qt((()=>{e.shouldThrottle&&e.callable(...t),e.id=Vt}),n))}return e.id=Vt,e.callable=t.bind(e),e.clear=()=>{Gt.remove(e.id),e.id=Vt},e},t.timer=Qt,t.timers=Gt,t.times=Zt,t.timesAsync=async function(t,n){for(let e=0;e<t;e++)await n(t)},t.timesMap=function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e},t.timesMapAsync=async function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e},t.toArray=e,t.toPath=yt,t.toggle=function(t,n=!0,e=!1){return vt(n,t)?e:n},t.tokenize=function(t){return t.match(dn)||[]},t.truey=jn,t.truncate=function(t,n){const e=t.length;return e>n?gn(t,n,e):t},t.truncateRight=function(t,n){const e=t.length;return e>n?mn(t,n,e):t},t.truth=Kt,t.unZip=function(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.unZipObject=t=>{const n=[],e=[];return X(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},t.union=function(...t){return Rt(it(t))},t.uniqID=Dn,t.unique=Rt,t.updateDimensions=de,t.upperCase=function(t){return t.replace(en," ").trim().toUpperCase()},t.upperFirst=function(t){return bn(t)+on(t)},t.upperFirstAll=function(t){return t.replace(yn,(t=>t.toUpperCase()))},t.upperFirstLetter=bn,t.upperFirstOnly=An,t.upperFirstOnlyAll=function(t){return An(t.toLowerCase()).replace(yn,(t=>t.toUpperCase()))},t.virtualStorage=qn,t.whileCompactMap=function(t,n,e=[],r){let o=0;for(;o<t.length;){const i=e.push(n(t[o],o,t,t.length,r));o++,a(i)&&e.push(i)}return t},t.whileEachArray=function(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t},t.whileMapArray=function(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t},t.without=function(t,n){return t.filter((t=>!n.includes(t)))},t.words=function(t){return t.match(pn)||[]},t.wrap=function(t,n){return(...e)=>n(t,...e)},t.xor=function(...t){const n=ut(Map),e=[];return 2===t.length?st(t[0],t[1]):(_(t,((t,e)=>{_(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),rt(n,(t=>{1===t.count&&e.push(t.child)})),e)},t.zip=function(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.zipObject=nn}));
//# sourceMappingURL=browser.js.map

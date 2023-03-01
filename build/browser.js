!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";const n=Reflect.apply,e=Array.from,r=Object.is,o=Object.getOwnPropertyDescriptor,i=Object.defineProperty,c=Object.getOwnPropertyNames;function u(t){return void 0===t}function s(t){return null===t}function a(t){return!u(t)&&!s(t)}function l(t){return n=>!!a(n)&&t.test(n)}function f(t){return"Boolean"===t.constructor.name}function h(t,n){return!!a(t)&&t.constructor===n}function d(t){return n=>h(n,t)}const p=d(String),g=Array.isArray,m=t=>!!a(t)&&"Object("===t.constructor.toString().trim().slice(9,16);function y(t){return Boolean(t.length)}const b=Object.keys;function w(t){if(t)return b(t)}function A(t){return w(t).length}const v=d("Int32Array"),S=d("ArrayBuffer"),I=d("Float32Array"),j=d("Int8Array");const x=d("Uint16Array"),C="[object WeakMap]";const O="[object Arguments]";const E=d("Float64Array"),F="[object Map]";function L(t){return!!t&&t instanceof Promise}const M=d("Uint32Array");const T=t=>!!a(t)&&t instanceof Function;const $=d("Uint8Array");function k(t){return!!t&&"AsyncFunction"===t.constructor?.name}const R=/\.|\+/,N=d("Int16Array"),U=d(Number),B="[object Set]";const D=d("Uint8ClampedArray"),P=/\.([0-9a-z]+)/;const q=l(/\.css$/),z=l(/\.html$/),W=l(/\.js$/),H=l(/\.json$/);function K(t){return t.length=0,t}function V(t){return t}function _(t,n,e){const r=t.length;for(let o=0;o<r;o++)n(t[o],o,t,r,e);return t}function Z(t,n=V,e=[],r){return _(t,((t,o,i,c)=>{const u=n(t,o,e,i,c,r);a(u)&&e.push(u)})),e}async function J(t,n){const e=t.length;for(let r=0;r<e;r++)await n(t[r],r,t,e);return t}function G(t,n,e){const r=[];let o=t;for(;o<n;)r.push(o),o+=e;return r}function Q(t,n,e){const r=e<0?-1*e:e,o=[];let i=t;for(;i>n;)o.push(i),i-=r;return o}function X(t,n){return _(w(t),((e,r,o,i)=>{n(t[e],e,t,i,o)}))}function Y(t,n){return t.forEach(n)}function tt(t,n){return(e,r,o)=>{let i;if(a(e))return i=g(e)?t:m(e)||T(e)?n:e.forEach?Y:n,i(e,r,o)}}const nt=tt(_,X),et=t=>g(t)&&t||a(t)&&[t]||[];function rt(t){return t.flat(1/0)}const ot=Reflect.construct;function it(t,n=[],e){return e?ot(t,n,e):ot(t,n)}function ct(...t){const n=it(Map),e=[];return _(t,((t,e)=>{_(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),nt(n,(t=>{1===t.count&&0===t.parentIndex&&e.push(t.child)})),e}function ut(t,n,e=t.length){return t.splice(n,e)}function st(t,n,e){const r=t.length;for(let o=r-1;o>=0;o--)n(t[o],o,t,r,e);return t}async function at(t,n){const e=t.length;for(let r=e-1;r>=0;r--)await n(t[r],r,t,e);return t}function lt(t,n,e){const r=t.length;for(let o=0;o<r;o++)if(!1===n(t[o],o,t,r,e))return!1;return!0}function ft(t,n,e=[],r){return _(t,((t,o,i,c)=>{!0===n(t,o,e,i,c,r)&&e.push(t)})),e}function ht(t,n){const e=w(t);return lt(n,(t=>e.includes(t)))}const dt=(t,n)=>{if(t===n)return!0;if(t.toString()===n.toString())if(m(t)){const e=w(t);if(ht(n,e))return lt(e,(e=>dt(t[e],n[e])))}else if(g(t)&&t.length===n.length)return lt(t,((t,e)=>dt(t,n[e])));return!1};function pt(t,n){return t.length===n.length&&lt(t,((t,e)=>dt(n[e],t)))}const gt=Math.max;function mt(t,n,e=[],r){return _(t,((t,o,i,c)=>{e[o]=n(t,o,e,i,c,r)})),e}async function yt(t,n){const e=[];return await J(t,(async(t,r,o)=>{e[r]=await n(t,r,o)})),e}const bt=(t,n)=>t-n;const wt=(t,n)=>n-t;const At=Math,vt=At.floor,St=At.random,It=(t,n=0)=>vt(St()*(t-n))+n;function jt(t,n=t.length){if(t.length<=1)return e(t);const r=e(t);let o,i,c=0;for(;c<n;)o=It(r.length-1,0),i=r[c],r[c]=r[o],r[o]=i,c++;return r}const xt=Math.min;function Ct(t,n,e){return e.indexOf(t)===n}function Ot(t,n,e){return t!==e[n-1]}function Et(t,n){return n?t.filter(Ot):t.filter(Ct)}function Ft(t,n,e,r,o){if(t[o]===r)return!0}function Lt(t,n){return mt(n,(n=>t[n]))}function Mt(t,n,e=!0){return(e?t:[...t]).sort(((t,e)=>e[n]?t[n]?t[n]<e[n]?1:t[n]>e[n]?-1:0:1:-1))}function Tt(t,n="id",e=!0){return(e?t:[...t]).sort(((t,e)=>e[n]?t[n]?t[n]<e[n]?-1:t[n]>e[n]?1:0:-1:1))}function $t(t,n,e={}){return X(t,((t,r,o,i,c)=>{e[r]=n(t,r,e,o,i,c)})),e}const kt=tt(mt,$t);const Rt=Object.assign;function Nt(t,...n){if(t)return Rt(t,...n)}const Ut=(t,n)=>(nt(n,((n,e)=>{t.methods[e]=(...e)=>(n(t.value,...e),t.methods)})),t);const Bt=!0,Dt=!1,Pt=()=>{};function qt(t,n){for(let e=0;e<t;e++)n(e)}class zt{list=it(Map);construct(){}remove(t){clearTimeout(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=this,r=setTimeout((()=>{t(),e.remove(r)}),n);return this.list.set(r,Bt),r}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const Wt=it(zt);function Ht(t,n){return Wt.set(t,n)}function Kt(t,n){return lt(w(t),((e,r,o,i)=>n(t[e],e,t,i,o)))}const Vt=tt(lt,Kt);const _t=async(t,n)=>{const e=w(t);return await J(e,((r,o,i,c)=>n(t[r],r,t,c,e))),t};function Zt(t,n,e={}){return X(t,((t,r,o,i,c)=>{!0===n(t,r,e,o,i,c)&&(e[r]=t)})),e}const Jt=(t,n)=>{const e={};return _(t,((t,r)=>{e[t]=n[r]})),e},Gt=/[-_]/g,Qt=/ (.)/g;function Xt(t,n=1){return t.substr(n)}const Yt=/%(?![\da-f]{2})/gi,tn=/&/g,nn=/</g,en=/>/g,rn=/"/g;function on(t){return decodeURIComponent(t.replace(Yt,(()=>"%25")))}function cn(t){return t.replace(tn,"&amp;").replace(nn,"&lt;").replace(en,"&gt;").replace(rn,"&quot;")}const un=/\S+/g,sn=/\w+/g;const an=(t,n,e)=>{const r=t.split(""),o=r.length;let i,c=e-n;for(;c<o&&c>=0&&(i=r[c]," "!==i);c--);return t.slice(0,c).trim()},ln=(t,n,e)=>{const r=t.split(""),o=r.length;let i,c=n;for(;c<o&&c>0&&(i=r[c]," "!==i);c++);return t.substr(c,e).trim()};const fn=/ (.)/g;function hn(t){return t[0].toUpperCase()}function dn(t){return hn(t)+Xt(t).toLowerCase()}const pn=JSON;const gn=pn.stringify;const mn=Function.prototype;const yn=globalThis.structuredClone;function bn(t,n=!0){return Boolean(t)&&n}const wn=tt(ft,Zt);function An(t){return(...n)=>e=>{let r=e;return t(n,(t=>{r=t(r)})),r}}const vn=An(_),Sn=An(st);function In(t){return(...n)=>async e=>{let r=e;return await t(n,(async t=>{r=await t(r)})),r}}const jn=In(J),xn=In(at),Cn=/\.|\[/,On=/]/g,En="";function Fn(t){return t.replace(On,En).split(Cn)}const Ln=(t,n)=>{let e=n;return lt(Fn(t),(t=>(e=e[t],a(e)))),e};const Mn=l(/\./);class Tn{list=it(Map);construct(){}remove(t){clearInterval(t),this.list.delete(t)}has(t){return this.list.has(t)}get(t){return this.list.get(t)}set(t,n){const e=setInterval((()=>{t()}),n);return this.list.set(e,Bt),e}clear(){const t=this;t.list.forEach((n=>{t.remove(n)}))}}const $n=it(Tn);class kn{static models={};constructor(t,n){a(n)?(Nt(this,n),this.modelName=t,kn.models.set(t,n)):Nt(this,t)}}function Rn(t){return new Promise(t)}class Nn{target;constructor(t={}){const n=this.target=t;if(null===n||"object"!=typeof n)return n;X(n,(t=>{n[t]=new Nn(n[t])})),this.data=new Proxy(n,{get:(t,n)=>(console.log(t,n,t[n]),t[n]),set:(t,n,e)=>(console.log(t,n,t[n]),t[n]=new Nn(e),!0)})}}let Un=0;const Bn=[];function Dn(){let t=Bn.shift(Bn);return a(t)||(t=Un,Un++),t}Dn.free=t=>{Bn.push(t)};class Pn{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,n){this.items[t]=n}clear(){this.items={}}removeItem(t){this.items[t]=null}}function qn(t){return new Pn(t)}function zn(t){return t?zn[t]:w(zn)}const Wn=globalThis.navigator?.userAgentData;if(Wn)X(Wn,((t,n)=>{f(t)&&t&&(zn[n]=t)})),_(Wn.brands,(t=>{zn[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");_(t.split(/ |\//),(t=>{zn[t]=!0}))}function Hn(t,n,e,r){return t.addEventListener(n,e,r),t}const Kn=document.createDocumentFragment.bind(document);function Vn(t,n){return t.appendChild(n),n}function _n(t,n){return g(n)?Jt(n,mt(n,(n=>t.getAttribute(n)))):(X(n,((n,e)=>{t.setAttribute(e,n)})),t)}const Zn=".",Jn="#",Gn=/^.[\w_-]+$/,Qn=/^[A-Za-z]+$/,Xn=/\s/,Yn=document.getElementsByClassName.bind(document),te=document.getElementsByTagName.bind(document),ne=document.getElementById.bind(document),ee=document.querySelector.bind(document),re=document.querySelectorAll.bind(document);const oe=document.createElement.bind(document),ie=t=>Rn((n=>{Hn(t,"load",n,!0),Hn(t,"error",n,!0),Vn(ee("head"),t)}));function ce(t){const n=Mn(t)&&t||`${t}.js`,e=_n(oe("script"),{async:"",src:n});return ie(e)}function ue(t){const n=document.readyState;return"interactive"===n||"completed"===n||"complete"===n?!t||t():(t&&Hn(document,"DOMContentLoaded",t),!1)}ue((()=>{const t=ne("AcidLib");ce(t&&t.getAttribute("data-index")||"/index")}));const se=location.protocol,ae="http:"===se?"ws":"wss",le=location.hostname,fe={hardware:{cores:navigator.hardwareConcurrency},host:{name:le,protocol:se,protocolSocket:ae}};function he(){Nt(fe,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})}function de(){he()}ue(de),Hn(window,"load",de,!0),Hn(window,"resize",de,!0),t.hasLocal=void 0,function(n){try{n().removeItem("TESTING"),t.hasLocal=!0}catch(n){t.hasLocal=!1}}((()=>localStorage));class pe{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=qn(t)}hasLocal=t.hasLocal;setItem(t,n){return this.hasLocal&&this.local.setItem(t,p(n)?n:gn(n)),this.storage.setItem(t,n)}getItem(t){const n=this.storage.getItem(t);return a(n)?n:!a(n)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}const ge=(t,n)=>`color:${t};background:${n};`,me={alert:ge("#fff","#f44336"),important:ge("#fff","#E91E63"),notify:ge("#fff","#651FFF"),warning:ge("#000","#FFEA00")};const ye="[object HTMLCollection]";const be="[object NodeList]";t.Crate=pe,t.Intervals=Tn,t.Model=kn,t.Store=Nn,t.Timers=zt,t.VirtualStorage=Pn,t.add=(t,n)=>t+n,t.after=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r<=0&&(e=n(...t),r=null),e)},t.append=Vn,t.apply=n,t.arrayToObject=function(t,n){const e={};return _(t,((t,r)=>{e[n[r]]=t})),e},t.ary=function(t,n){return(...e)=>t(...e.splice(0,n))},t.assert=function(t,n,e){return!!dt(t,n)||function(t,n,e){const r=globalThis.options||e;let o;return T(r)?o=`${r.name} : ${r.constructor.name}`:r&&(o=`${r.title||r.method.name} -> ${r.file}`),new Error(`Test Failed: ${o}\n\t\tResult: ${gn(t)}\n\t\tExpected: ${gn(n)}`,r)}(t,n,e)},t.assign=Nt,t.before=function(t,n){let e,r=t;return(...t)=>(null!==r&&r--,r>=1?e=n(...t):r=null,e)},t.bindAll=function(t,n){return kt(t,(t=>T(t)?t.bind(n):t))},t.cacheNativeMethod=function(t){return mn.call.bind(t)},t.camelCase=function(t){return t.toLowerCase().replace(Qt,(t=>t.toUpperCase().replace(/ /g,"")))},t.chain=function(t){const n=t=>(n.value=t,n.methods);return Nt(n,{add:t=>Ut(n,t),done(){const t=n.value;return n.value=null,t},methods:{}}),n.add(t),n},t.chunk=function(t,n=1){const e=[];let r=0;return t.forEach(((t,o)=>{o%n||(e.push([]),o&&r++),e[r].push(t)})),e},t.chunkString=function(t,n){return t.match(new RegExp(`(.|[\r\n]){1,${n}}`,"g"))},t.clear=K,t.clearIntervals=function(){qt(setTimeout(Pt,0),(t=>{$n.remove(t)}))},t.clearTimers=function(){qt(setTimeout(Pt,0),(t=>{Wt.remove(t)}))},t.clone=function(t){return yn(t)},t.cloneArray=function(t){return t.slice()},t.cnsl=(t,n)=>{const e=p(t)?t:gn(t);if("alert"===n||"warning"===n)return console.trace(`%c${e}`,`${me[n]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${e}`,`${me[n]}font-size:13px;padding:2px 5px;border-radius:2px;`)},t.cnslTheme=(t,n,e)=>{me[t]=ge(n,e)},t.compact=function(t){if(m(t)){const n=w(t),e=n.length,r={};for(let o=0;o<e;o++){const e=n[o],i=t[e];bn(i)&&(r[e]=i)}return r}return t.filter((t=>bn(t)))},t.compactKeys=function(t){const n=[];return X(t,((t,e)=>{t&&n.push(e)})),n},t.compactMapArray=Z,t.compactMapAsync=async function(t,n=V){const e=[];return await J(t,(async(t,r,o)=>{const i=await n(t,r,e,o);a(i)&&e.push(i)})),e},t.compactMapObject=function(t,n=V,e={}){return X(t,((t,r,o,i,c)=>{const u=n(t,r,e,o,i,c);a(u)&&(e[r]=u)})),e},t.compactMapObjectAsync=async(t,n,e={})=>(await _t(t,(async(t,r,o,i,c)=>{const u=await n(t,r,e,i,c);a(u)&&(e[r]=u)})),e),t.construct=it,t.constructorName=function(t){return t?.constructor?.name},t.countBy=function(t,n){const e={};let r;return _(t,(t=>{r=n(t),e[r]||(e[r]=0),e[r]++})),e},t.countKey=function(t,n){let e=0;return _(t,(t=>{t[n]&&e++})),e},t.countWithoutKey=function(t,n){let e=0;return _(t,(t=>{t[n]||e++})),e},t.crate=function(t){return new pe(t)},t.createFragment=Kn,t.curry=function(t,n=t.length){const e=[],r=(...o)=>{if(e.push(...o),e.length===n){const n=t(...e);return K(e),n}return r};return r},t.curryRight=function(t,n=t.length){const e=[],r=(...o)=>{if(e.unshift(...o),e.length===n){const n=t(...e);return K(e),n}return r};return r},t.debounce=function(t,n){function e(...t){e.id!==Dt&&Wt.remove(e.id),e.id=Ht((()=>{e.callable(...t),e.id=Dt}),n)}return e.id=Dt,e.callable=t.bind(e),e.clear=()=>{e.id!==Dt&&(Wt.remove(e.id),e.id=Dt)},e},t.decimalCheck=R,t.deduct=t=>t-1,t.defineProperty=i,t.difference=ct,t.divide=(t,n)=>t/n,t.drop=ut,t.dropRight=(t,n,e=t.length)=>ut(t,0,e-n),t.each=nt,t.eachArray=_,t.eachAsyncArray=J,t.eachObject=X,t.eachObjectAsync=_t,t.eachRight=st,t.eachRightAsync=at,t.ensureArray=et,t.eventAdd=Hn,t.eventRemove=function(t,n,e,r){return t.removeEventListener(n,e,r),t},t.every=Vt,t.everyArray=lt,t.everyObject=Kt,t.falsey=function(t,n=!0){return!1===Boolean(t)&&n},t.falsy=Dt,t.filter=wn,t.filterArray=ft,t.filterObject=Zt,t.findIndex=function(t,n,e="id"){const r=t.findIndex(((t,r)=>Ft(t,0,0,n,e)));return-1!==r&&r},t.findItem=function(t,n,e="id"){const r=t.find(((t,r)=>Ft(t,0,0,n,e)));return-1!==r&&r},t.first=function(t,n){return n?t.slice(0,n):t[0]},t.flatten=function(t,n=1){let e=t;for(let t=0;t<n;t++)e=e.reduce(((t,n)=>t.concat(et(n))),[]);return e},t.flattenDeep=rt,t.flow=vn,t.flowAsync=jn,t.flowAsyncRight=xn,t.flowRight=Sn,t.get=Ln,t.getByClass=Yn,t.getById=ne,t.getByTag=te,t.getExtensionRegex=P,t.getFileExtension=function(t){const n=t.match(P);if(n)return n[1]},t.getNewest=function(t,n){return Mt(t,n,!1)[0]},t.getOldest=function(t,n="id"){return Tt(t,n)[0]},t.getOwnPropertyDescriptor=o,t.getOwnPropertyNames=c,t.groupBy=function(t,n){const e={};return _(t,(t=>{const r=n(t);e[r]||(e[r]=[]),e[r].push(t)})),e},t.has=function(t,...n){return t&&t.includes&&t.includes(...n)},t.hasAnyKeys=function(t,n){const e=w(t);return Boolean(n.find((t=>e.includes(t))))},t.hasDot=Mn,t.hasKeys=ht,t.hasLength=y,t.hasValue=a,t.htmlEntities=cn,t.ifInvoke=function(t,...n){if(T(t))return t(...n)},t.ifNotEqual=(t,n,e)=>(n&&!a(t[n])&&(t[n]=e),t),t.ifValue=function(t){if(a(t))return t},t.importjs=ce,t.inAsync=async function(t,n){const e=t.length;for(let r=0;r<e;r++){const o=t[r];await o(n,r,t,e)}return t},t.inSync=(t,n)=>nt(t,(t=>{t(n)})),t.increment=t=>t+1,t.indexBy=function(t,n="id"){const e={};return _(t,(t=>{e[t[n]]=t})),e},t.info=fe,t.initial=function(t){return t.slice(0,t.length-1)},t.initialString=function(t,n=1){return t.slice(0,-1*n)},t.insertInRange=function(t,n,e){return t.slice(0,n)+e+t.slice(n,t.length)},t.intersection=function(t,...n){return Z(t,(t=>{if(lt(n,(n=>n.includes(t))))return t}))},t.interval=function(t,n){return $n.set(t,n)},t.intervals=$n,t.invert=function(t,n={}){return X(t,((t,e)=>{n[t]=e})),n},t.invoke=function(t,n,e){return mt(t,((t,r)=>t[n](e,r)))},t.invokeAsync=function(t,n,e){return yt(t,(async(t,r)=>t[n](e,r)))},t.isAgent=zn,t.isArguments=function(t){return!!a(t)&&t.toString()===O},t.isArray=g,t.isAsync=k,t.isBoolean=f,t.isBuffer=S,t.isConstructor=h,t.isConstructorFactory=d,t.isDate=function(t){return t instanceof Date},t.isDecimal=t=>R.test(t.toString()),t.isDocumentReady=ue,t.isDom=function(t){return t&&9!==t.nodeType},t.isEmpty=function(t){return p(t)||g(t)?!y(t):m(t)?!A(t):!a(t)},t.isEnter=function(t){return 13===t.keyCode},t.isEqual=dt,t.isF32=I,t.isF64=E,t.isFileCSS=q,t.isFileHTML=z,t.isFileJS=W,t.isFileJSON=H,t.isFunction=T,t.isHTMLCollection=function(t){return!!a(t)&&t.toString()===ye},t.isI16=N,t.isI32=v,t.isI8=j,t.isKindAsync=function(t){return!!t&&(L(t)||k(t))},t.isMap=function(t){return!!a(t)&&t.toString()===F},t.isMatchArray=pt,t.isMatchObject=(t,n)=>{const e=w(t);return!!pt(e,w(n))&&lt(e,(e=>t[e]===n[e]))},t.isNodeList=function(t){return!!a(t)&&t.toString()===be},t.isNull=s,t.isNumber=U,t.isNumberEqual=(t,n)=>t===n,t.isNumberInRange=(t,n,e)=>t>n&&t<e,t.isPlainObject=m,t.isPrimitive=function(t){const n=typeof t;return null==t||"object"!==n&&"function"!==n},t.isPromise=L,t.isRegExp=function(t){return t instanceof RegExp},t.isSame=r,t.isSet=function(t){return!!a(t)&&t.toString()===B},t.isString=p,t.isU16=x,t.isU32=M,t.isU8=$,t.isU8C=D,t.isUndefined=u,t.isWeakMap=function(t){return!!a(t)&&t.toString()===C},t.isZero=t=>0===t,t.jsonParse=function(t,n){if(t)return pn.parse(t,n)},t.kebabCase=function(t){return t.replace(Gt," ").trim().toLowerCase().replace(Qt,"-$1")},t.keys=w,t.largest=function(t){return gt(...t)},t.last=function(t,n){const e=t.length;return n?t.slice(e-n,e):t[e-1]},t.map=kt,t.mapArray=mt,t.mapAsyncArray=yt,t.mapObject=$t,t.mapObjectAsync=async(t,n,e={})=>(await _t(t,(async(t,r,o,i,c)=>{e[r]=await n(t,r,e,o,i,c)})),e),t.mapRightArray=function(t,n,e=[],r){let o=0;const i=t.length;for(let c=i-1;c>=0;c--)e[o]=n(t[c],c,t,i,r),o++;return e},t.mapWhile=function(t,n,e=[],r){const o=t.length;for(let i=0;i<o;i++){const c=t[i];if(!1===n(c,i,e,t,o,r))break;e[i]=c}return e},t.minus=(t,n)=>t-n,t.model=function(t,n){return a(n)?it(kn,[t,n]):Ln(t,kn.models)},t.multiply=(t,n)=>t*n,t.negate=function(t){return(...n)=>!t(...n)},t.nodeAttribute=_n,t.noop=Pt,t.nthArg=function(t=0){return(...n)=>n[t]},t.numSort=function(t){return t.sort(bt)},t.numericalCompare=bt,t.numericalCompareReverse=wt,t.objectSize=A,t.omit=function(t,n){return Zt(t,((t,e)=>!n.includes(e)))},t.once=t=>{let n;return(...e)=>(a(n)||(n=t(...e)),n)},t.onlyUnique=Ct,t.over=function(t){return(...n)=>kt(t,(t=>t(...n)))},t.overEvery=function(t){return(...n)=>Vt(t,(t=>t(...n)))},t.partition=function(t,n){const e=[];return[Z(t,(t=>{if(n(t))return t;e.push(t)})),e]},t.pick=(t,n,e={})=>(_(n,(n=>{e[n]=t[n]})),e),t.pluck=function(t,n){return mt(t,(t=>t[n]))},t.pluckObject=Lt,t.pluckValues=function(t,n){return mt(t,(t=>Lt(t,n)))},t.promise=Rn,t.propertyMatch=(t,n,e=w(t))=>lt(e,(e=>dt(t[e],n[e]))),t.querySelector=ee,t.querySelectorAll=re,t.rNumSort=function(t){return t.sort(wt)},t.randomArbitrary=(t,n=0)=>St()*(t-n)+n,t.randomInt=It,t.range=function(t,n,e=1){return t<n?G(t,n,e):Q(t,n,e)},t.rangeDown=Q,t.rangeUp=G,t.rawURLDecode=on,t.reArg=function(t,n){return(...e)=>t(...n.map((t=>e[t])))},t.regexTestFactory=l,t.remainder=(t,n)=>t%n,t.remove=function(t,n){let e=t.length;for(let r=0;r<e;r++){const o=t[r];n.includes(o)&&(t.splice(r,1),r--,e--)}return t},t.removeBy=function(t,n){let e=t.length;for(let r=0;r<e;r++){n(t[r],r)&&(t.splice(r,1),r--,e--)}return t},t.replaceList=function(t,n,e){return t.replace(new RegExp(`\\b${n.join("|")}\\b`,"gi"),e)},t.rest=function(t){return t.slice(1,t.length)},t.restString=Xt,t.returnValue=V,t.right=function(t,n){return t[t.length-1-n]},t.rightString=function(t,n=1){return t[t.length-n]},t.sample=function(t,n){if(!t)return!1;const e=t.length;if(e===n||n>e)return jt(t);if(1===n)return[t[It(e-1,0)]];const r=[],o={};let i,c=0;for(;c<n;)i=It(t.length-1,0),o[i]||(r.push(t[i]),o[i]=!0,c++);return r},t.sanitize=function(t){return cn(on(t))},t.saveDimensions=he,t.selector=function(t){switch(t[0]){case Jn:if(!Xn.test(t))return ne(Xt(t));break;case Zn:if(Gn.test(t))return Yn(Xt(t));break;default:if(Qn.test(t))return te(t)}return re(t)},t.shuffle=jt,t.smallest=function(t){return xt(...t)},t.snakeCase=function(t){return t.replace(Gt," ").trim().toLowerCase().replace(Qt,"_$1")},t.sortAlphabetical=function(t,n){return t.sort(((t,e)=>{const r=t[n],o=e[n];return r<o?-1:r>o?1:0}))},t.sortNewest=Mt,t.sortOldest=Tt,t.sortUnique=Ot,t.sortedIndex=function(t,n){let e=0;return lt(t,((t,r)=>(e=r,n>t))),e},t.stringify=gn,t.stubArray=()=>[],t.stubFalse=()=>Dt,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>Bt,t.sum=function(t){return t.reduce(((t,n)=>t+n),0)},t.take=function(t,n=1){return t.slice(0,n)},t.themes=me,t.throttle=function(t,n){function e(...t){e.id?e.shouldThrottle=Bt:(e.callable(...t),e.id=Ht((()=>{e.shouldThrottle&&e.callable(...t),e.id=Dt}),n))}return e.id=Dt,e.callable=t.bind(e),e.clear=()=>{Wt.remove(e.id),e.id=Dt},e},t.timer=Ht,t.timers=Wt,t.times=qt,t.timesAsync=async function(t,n){for(let e=0;e<t;e++)await n(t)},t.timesMap=function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=n(t);return e},t.timesMapAsync=async function(t,n,e=[]){for(let r=0;r<t;r++)e[r]=await n(t);return e},t.toArray=e,t.toPath=Fn,t.toggle=function(t,n=!0,e=!1){return dt(n,t)?e:n},t.tokenize=function(t){return t.match(un)||[]},t.truey=bn,t.truncate=function(t,n){const e=t.length;return e>n?an(t,n,e):t},t.truncateRight=function(t,n){const e=t.length;return e>n?ln(t,n,e):t},t.truth=Bt,t.uid=Dn,t.unZip=function(t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.unZipObject=t=>{const n=[],e=[];return X(t,((t,r)=>{n.push(r),e.push(t)})),[n,e]},t.union=function(...t){return Et(rt(t))},t.unique=Et,t.updateDimensions=de,t.upperCase=function(t){return t.replace(Gt," ").trim().toUpperCase()},t.upperFirst=function(t){return hn(t)+Xt(t)},t.upperFirstAll=function(t){return t.replace(fn,(t=>t.toUpperCase()))},t.upperFirstLetter=hn,t.upperFirstOnly=dn,t.upperFirstOnlyAll=function(t){return dn(t.toLowerCase()).replace(fn,(t=>t.toUpperCase()))},t.virtualStorage=qn,t.whileCompactMap=function(t,n,e=[],r){let o=0;for(;o<t.length;){const i=e.push(n(t[o],o,t,t.length,r));o++,a(i)&&e.push(i)}return t},t.whileEachArray=function(t,n,e){let r=0;for(;r<t.length;)n(t[r],r,t,t.length,e),r++;return t},t.whileMapArray=function(t,n,e=[],r){let o=0;for(;o<t.length;)e.push(n(t[o],o,t,t.length,r)),o++;return t},t.without=function(t,n){return t.filter((t=>!n.includes(t)))},t.words=function(t){return t.match(sn)||[]},t.wrap=function(t,n){return(...e)=>n(t,...e)},t.xor=function(...t){const n=it(Map),e=[];return 2===t.length?ct(t[0],t[1]):(_(t,((t,e)=>{_(t,((t,r)=>{let o=n.get(t);if(o){if(o.parentIndex===e)return;o.count++}else o={count:1,parentIndex:e,child:t},n.set(t,o)}))})),nt(n,(t=>{1===t.count&&e.push(t.child)})),e)},t.zip=function(...t){return t[0].map(((n,e)=>t.map((t=>t[e]))))},t.zipObject=Jt}));
//# sourceMappingURL=browser.js.map

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).$={})}(this,(function(t){"use strict";const e=Array.from,n=Reflect.apply,r=Object,o=r.keys,s=r.is,i=r.assign,c=r.getOwnPropertyDescriptor,a=r.defineProperty,l=r.getOwnPropertyNames,u=t=>o(t).length;function h(t){return void 0===t}function f(t){return null===t}function p(t){return!h(t)&&!f(t)}function d(t){return e=>!!p(e)&&e.constructor===t}const g=/\.|\+/,m=Array.isArray,y=d(String),b=d(Number),w=t=>!!p(t)&&"Object("===t.constructor.toString().trim().slice(9,16),A=t=>!!p(t)&&t instanceof Function,v=t=>Boolean(t.length),S=t=>e=>!!p(e)&&t.test(e),C=S(/\.css$/),j=S(/\.json$/),I=S(/\.js$/),O=S(/\.html$/),x=S(/\./),L=/\.([0-9a-z]+)/,E=t=>"Boolean"===t.constructor.name,F=t=>!!t&&t instanceof Promise,k=t=>!!t&&"AsyncFunction"===t.constructor?.name;const M=t=>m(t)&&t||p(t)&&[t]||[],R=t=>t.flat(1/0),T=t=>(t.length=0,t),N=Math,$=N.floor,B=N.random,D=(t,e=0)=>$(B()*(t-e))+e,U=(t,n=t.length)=>{if(t.length<=1)return e(t);const r=e(t);let o,s,i=0;for(;i<n;)o=D(r.length-1,0),s=r[i],r[i]=r[o],r[o]=s,i++;return r},P=Math.min;function z(t,e,n){const r=t.length;for(let o=0;o<r;o++)e(t[o],o,t,r,n);return t}function q(t,e,n){const r=t.length;for(let o=r-1;o>=0;o--)e(t[o],o,t,r,n);return t}function W(t,e,n){const r=t.length;for(let o=0;o<r;o++)if(!1===e(t[o],o,t,r,n))return!1;return!0}function H(t,e,n=[],r){return z(t,((t,o,s,i)=>{!0===e(t,o,n,s,i,r)&&n.push(t)})),n}function _(t,e,n=[],r){return z(t,((t,o,s,i)=>{n[o]=e(t,o,n,s,i,r)})),n}function K(t,e,n=[],r){return z(t,((t,o,s,i)=>{const c=e(t,o,n,s,i,r);p(c)&&n.push(c)})),n}const Z=(t,e,n=t.length)=>t.splice(e,n),J=(t,e)=>t.length===e.length&&W(t,((t,n)=>e[n]===t)),V=Math.max,G=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},Q=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t},X=async(t,e)=>{const n=[];return await G(t,(async(t,r,o)=>{n[r]=await e(t,r,o)})),n},Y=(t,e,n)=>n.indexOf(t)===e,tt=(t,e,n)=>t!==n[e-1],et=(t,e)=>e?t.filter(tt):t.filter(Y),nt=(t,e)=>t-e,rt=(t,e)=>e-t,ot=(t,e,n)=>{const r=n?t:0,o=n?e:t,s=n||e;for(let t=r;t<o;t++)s(t,r,o)},st=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1)),it=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1)),ct=(t,e)=>_(e,(e=>t[e])),at=(t,e,n,r,o)=>{if(t[o]===r)return!0},lt=(t,e)=>{z(o(t),((n,r,o,s)=>{e(t[n],n,t,s,o)}))},ut=(t,e)=>W(o(t),((n,r,o,s)=>e(t[n],n,t,s,o))),ht=(t,e,n={})=>(lt(t,((t,r,o,s,i)=>{!0===e(t,r,n,o,s,i)&&(n[r]=t)})),n),ft=(t,e,n={})=>(lt(t,((t,r,o,s,i)=>{n[r]=e(t,r,n,o,s,i)})),n),pt=(t,e,n={})=>(lt(t,((t,r,o,s,i)=>{const c=e(t,r,n,o,s,i);p(c)&&(n[r]=c)})),n),dt=(t,e)=>t.forEach(e),gt=(t,e)=>(n,r,o)=>{let s;if(p(n))return s=m(n)?t:w(n)||A(n)?e:n.forEach?dt:e,s(n,r,o)},mt=gt(W,ut),yt=gt(z,lt),bt=gt(H,ht),wt=gt(_,ft),At=gt(K,pt),vt=mt,St=(t,e)=>setTimeout(t,e),Ct=(t,e)=>setInterval(t,e),jt=(t,e)=>()=>{ot(0,t((()=>{}),0),(t=>{e(t)}))},It=jt(St,clearTimeout),Ot=jt(Ct,clearInterval),xt=(t,e)=>{const n=o(t);return W(e,(t=>n.includes(t)))},Lt=(t,e)=>{const n={};return z(t,((t,r)=>{n[t]=e[r]})),n},Et=async(t,e)=>{const n=o(t);return await G(n,((r,o,s,i)=>e(t[r],r,t,i,n))),t},Ft=/[-_]/g,kt=/ (.)/g,Mt=(t,e=1)=>t.substr(e),Rt=/%(?![\da-f]{2})/gi,Tt=/&/g,Nt=/</g,$t=/>/g,Bt=/"/g,Dt=t=>decodeURIComponent(t.replace(Rt,(()=>"%25"))),Ut=t=>t.replace(Tt,"&amp;").replace(Nt,"&lt;").replace($t,"&gt;").replace(Bt,"&quot;"),Pt=/\S+/g,zt=/\w+/g,qt=/ (.)/g,Wt=t=>t[0].toUpperCase(),Ht=t=>Wt(t)+Mt(t).toLowerCase(),_t=Reflect.construct;function Kt(t,e=[],n){return n?_t(t,e,n):_t(t,e)}const Zt=Object.create,Jt=(t,e,n=!1,r,s,i)=>{if(t){if(i){const o=i.pop();if(o){const r=e[o];t[o]=Jt(t[o],r,n)}else if(!s)return t;if(s){let o=r||0;if(o++,o<s)return Jt(t,e,n,o,s,i)}return Jt(t,e,n,null,null,i)}if(s){if(r<s){let o=r||0;const c=e[o];if(c){const r=t[o];if(n?t.push(Jt(r,c,n)):t[o]=Jt(r,c,n),o++,o<s)return Jt(t,e,n,o,s,i)}}}else{if(m(e))return 0===s?t:Jt(t,e,n,0,e.length);if(w(e)){const r=o(e);return Jt(t,e,n,null,null,r)}}}else{if(w(e))return i?Jt({},e,n,null,null,i):Jt({},e,n);if(m(e))return r<s?Jt([],e,n,r,s,i):Jt([],e,n)}return t||e},Vt=globalThis.structuredClone;t.clone=void 0,t.clone=Vt?t=>globalThis.structuredClone(t):t=>w(t)?Jt({},t):m(t)?Jt([],t):Zt(t);const Gt=Function.prototype;const Qt=(t,e)=>{if(t===e)return!0;if(t.toString()===e.toString())if(w(t)){const n=o(t);if(xt(e,n))return W(n,(n=>Qt(t[n],e[n])))}else if(m(t)&&t.length===e.length)return W(t,((t,n)=>Qt(t,e[n])));return!1},Xt=/\.|\[/,Yt=/]/g,te=t=>t.replace(Yt,"").split(Xt);let ee=0;const ne=[],re={};function oe(){let t=ne.shift(ne);return p(t)||(t=ee,re[t]=!0,ee++),t}oe.free=t=>{re[t]=null,ne.push(t)};const se=(t,e)=>{let n=e;return W(te(t),(t=>(n=n[t],p(n)))),n},ie=JSON,ce=ie.parse,ae=ie.stringify;class le{static models={};constructor(t,e){p(e)?(i(this,e),this.modelName=t,le.models.set(t,e)):i(this,t)}}const ue=t=>new Promise(t),he=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r)})),r},fe=he(z),pe=he(q),de=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r)})),r},ge=de(G),me=de(Q),ye=t=>t?ye[t]:o(ye),be=globalThis.navigator?.userAgentData;if(be)lt(be,((t,e)=>{E(t)&&t&&(ye[e]=t)})),z(be.brands,(t=>{ye[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");z(t.split(/ |\//),(t=>{ye[t]=!0}))}const we=(t,...e)=>(t.addEventListener(...e),t),Ae=document.createDocumentFragment.bind(document),ve=(t,e)=>(t.appendChild(e),e),Se=(t,e)=>m(e)?Lt(e,_(e,(e=>t.getAttribute(e)))):(lt(e,((e,n)=>{t.setAttribute(n,e)})),t),Ce=/^.[\w_-]+$/,je=/^[A-Za-z]+$/,Ie=/\s/,Oe=document.getElementsByClassName.bind(document),xe=document.getElementsByTagName.bind(document),Le=document.getElementById.bind(document),Ee=document.querySelector.bind(document),Fe=document.querySelectorAll.bind(document),ke=document.createElement.bind(document),Me=t=>{const e=x(t)&&t||`${t}.js`;return(t=>ue((e=>{we(t,"load",e,!0),we(t,"error",e,!0),ve(Ee("head"),t)})))(Se(ke("script"),{async:"",src:e}))},Re=t=>{const e=document.readyState;return"interactive"===e||"completed"===e||"complete"===e?!t||t():(t&&we(document,"DOMContentLoaded",t),!1)};Re((()=>{const t=Le("AcidLib"),e=t&&t.getAttribute("data-index")||"/index";Me(e)}));const Te=location.protocol,Ne="http:"===Te?"ws":"wss",$e=location.hostname,Be={hardware:{cores:navigator.hardwareConcurrency},host:{name:$e,protocol:Te,protocolSocket:Ne}},De=()=>{i(Be,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},Ue=()=>{De()};Re(Ue),we(window,"load",Ue,!0),we(window,"resize",Ue,!0);class Pe{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,e){this.items[t]=e}clear(){this.items={}}removeItem(t){this.items[t]=null}}function ze(){return new Pe}t.hasLocal=void 0,function(e){try{e().removeItem("TESTING"),t.hasLocal=!0}catch(e){t.hasLocal=!1}}((()=>localStorage));class qe{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=ze()}hasLocal=t.hasLocal;setItem(t,e){return this.hasLocal&&this.local.setItem(t,y(e)?e:ae(e)),this.storage.setItem(t,e)}getItem(t){const e=this.storage.getItem(t);return p(e)?e:!p(e)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}const We=(t,e)=>`color:${t};background:${e};`,He={alert:We("#fff","#f44336"),important:We("#fff","#E91E63"),notify:We("#fff","#651FFF"),warning:We("#000","#FFEA00")};t.Crate=qe,t.Model=le,t.VirtualStorage=Pe,t.add=(t,e)=>t+e,t.after=(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},t.append=ve,t.apply=n,t.arrayToObject=(t,e)=>{const n={};return z(t,((t,r)=>{n[e[r]]=t})),n},t.ary=(t,e)=>(...n)=>t(...n.splice(0,e)),t.assign=i,t.assignDeep=Jt,t.asyncEach=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const o=t[r];await o(e,r,t,n)}return t},t.before=(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},t.bindAll=(t,e)=>wt(t,(t=>A(t)?t.bind(e):t)),t.cacheNativeMethod=function(t){return Gt.call.bind(t)},t.camelCase=t=>t.toLowerCase().replace(kt,(t=>t.toUpperCase().replace(/ /g,""))),t.chain=t=>{const e=t=>(e.value=t,e.methods);return i(e,{add:t=>((t,e)=>(yt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods)})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e},t.chunk=(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,o)=>{o%e||(n.push([]),o&&r++),n[r].push(t)})),n},t.chunkString=(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),t.clear=T,t.clearIntervals=Ot,t.clearTimers=It,t.cloneArray=t=>t.slice(),t.cnsl=(t,e)=>{const n=y(t)?t:ae(t);if("alert"===e||"warning"===e)return console.trace(`%c${n}`,`${He[e]}font-size:13px;padding:2px 5px;border-radius:2px;`);console.log(`%c${n}`,`${He[e]}font-size:13px;padding:2px 5px;border-radius:2px;`)},t.cnslTheme=(t,e,n)=>{He[t]=We(e,n)},t.compact=t=>t.filter((t=>!(y(t)&&!t.length)&&t)),t.compactKeys=t=>{const e=[];return lt(t,((t,n)=>{t&&e.push(n)})),e},t.compactMap=At,t.compactMapArray=K,t.compactMapAsync=async(t,e)=>{const n=[];let r;return await G(t,(async(t,o,s)=>{r=await e(t,o,n,s),p(r)&&n.push(r)})),n},t.compactMapObject=pt,t.compactMapObjectAsync=async(t,e,n={})=>(await Et(t,(async(t,r,o,s,i)=>{const c=await e(t,r,n,s,i);p(c)&&(n[r]=c)})),n),t.construct=Kt,t.countBy=(t,e)=>{const n={};let r;return z(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++})),n},t.countKey=(t,e)=>{let n=0;return z(t,(t=>{t[e]&&n++})),n},t.countWithoutKey=(t,e)=>{let n=0;return z(t,(t=>{t[e]||n++})),n},t.crate=function(t){return new qe(t)},t.createFragment=Ae,t.curry=(t,e=t.length)=>{const n=[],r=(...o)=>{if(n.push(...o),n.length===e){const e=t(...n);return T(n),e}return r};return r},t.curryRight=(t,e=t.length)=>{const n=[],r=(...o)=>{if(n.unshift(...o),n.length===e){const e=t(...n);return T(n),e}return r};return r},t.debounce=(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=St((()=>{t(...r),n=!1}),e)};return r.clear=()=>{n&&(clearTimeout(n),n=!1)},r},t.decimalCheck=g,t.deduct=t=>t-1,t.defineProperty=a,t.difference=(t,...e)=>{const n=R(e);return K(t,(t=>{if(!n.includes(t))return t}))},t.divide=(t,e)=>t/e,t.drop=Z,t.dropRight=(t,e,n=t.length)=>Z(t,0,n-e),t.each=yt,t.eachArray=z,t.eachArrayRight=q,t.eachAsync=G,t.eachAsyncRight=Q,t.eachObject=lt,t.eachObjectAsync=Et,t.eachWhile=mt,t.ensureArray=M,t.eventAdd=we,t.eventRemove=(t,...e)=>(t.removeEventListener(...e),t),t.every=vt,t.filter=bt,t.filterArray=H,t.filterObject=ht,t.findIndex=(t,e,n="id")=>{const r=t.findIndex(((t,r)=>at(t,0,0,e,n)));return-1!==r&&r},t.findItem=(t,e,n="id")=>{const r=t.find(((t,r)=>at(t,0,0,e,n)));return-1!==r&&r},t.first=(t,e)=>e?t.slice(0,e):t[0],t.flatten=(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(M(e))),[]);return n},t.flattenDeep=R,t.flow=fe,t.flowAsync=ge,t.flowAsyncRight=me,t.flowRight=pe,t.get=se,t.getByClass=Oe,t.getById=Le,t.getByTag=xe,t.getExtensionRegex=L,t.getFileExtension=t=>{const e=t.match(L);if(e)return e[1]},t.getNewest=(t,e)=>st(t,e,!1)[0],t.getOldest=(t,e="id")=>it(t,e)[0],t.getOwnPropertyDescriptor=c,t.getOwnPropertyNames=l,t.groupBy=(t,e)=>{const n={};return z(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t)})),n},t.has=(t,...e)=>t.includes(...e),t.hasAnyKeys=(t,e)=>{const n=o(t);return Boolean(e.find((t=>n.includes(t))))},t.hasDot=x,t.hasKeys=xt,t.hasLength=v,t.hasValue=p,t.htmlEntities=Ut,t.ifInvoke=(t,...e)=>{if(A(t))return t(...e)},t.ifNotEqual=(t,e,n)=>(e&&!p(t[e])&&(t[e]=n),t),t.importjs=Me,t.inAsync=async(t,e)=>G(t,(async t=>{await t(e)})),t.inSync=(t,e)=>yt(t,(t=>{t(e)})),t.increment=t=>t+1,t.indexBy=(t,e="id")=>{const n={};return z(t,(t=>{n[t[e]]=t})),n},t.info=Be,t.initial=t=>t.slice(0,t.length-1),t.initialString=(t,e=1)=>t.slice(0,-1*e),t.insertInRange=(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),t.intersect=(t,...e)=>K(t,(t=>{if(W(e,(e=>e.includes(t))))return t})),t.interval=Ct,t.invert=(t,e={})=>(lt(t,((t,n)=>{e[t]=n})),e),t.invoke=(t,e,n)=>_(t,((t,r)=>t[e](n,r))),t.invokeAsync=(t,e,n)=>X(t,(async(t,r)=>t[e](n,r))),t.is=s,t.isAgent=ye,t.isArguments=function(t){return!!p(t)&&"[object Arguments]"===t.toString()},t.isArray=m,t.isAsync=k,t.isBoolean=E,t.isBuffer=function(t){return!!p(t)&&"ArrayBuffer"===t.constructor?.name},t.isConstructor=d,t.isDate=t=>t instanceof Date,t.isDecimal=t=>g.test(t.toString()),t.isDocumentReady=Re,t.isDom=t=>t&&9!==t.nodeType,t.isEmpty=t=>y(t)||m(t)?!v(t):w(t)?!u(t):!p(t),t.isEnter=t=>13===t.keyCode,t.isEqual=Qt,t.isFileCSS=C,t.isFileHTML=O,t.isFileJS=I,t.isFileJSON=j,t.isFloat32=function(t){return!!p(t)&&"Float32Array"===t.constructor?.name},t.isFloat64=function(t){return!!p(t)&&"Float64Array"===t.constructor?.name},t.isFunction=A,t.isHTMLCollection=function(t){return!!p(t)&&"[object HTMLCollection]"===t.toString()},t.isInt16=function(t){return!!p(t)&&"Int16Array"===t.constructor?.name},t.isInt32=function(t){return!!p(t)&&"Int32Array"===t.constructor?.name},t.isInt8=function(t){return!!p(t)&&"Int8Array"===t.constructor?.name},t.isKindAsync=t=>!!t&&(F(t)||k(t)),t.isMap=function(t){return!!p(t)&&"[object Map]"===t.toString()},t.isMatchArray=J,t.isMatchObject=(t,e)=>{const n=o(t);return!!J(n,o(e))&&W(n,(n=>t[n]===e[n]))},t.isNodeList=function(t){return!!p(t)&&"[object NodeList]"===t.toString()},t.isNull=f,t.isNumber=b,t.isNumberEqual=(t,e)=>t===e,t.isNumberInRange=(t,e,n)=>t>e&&t<n,t.isPlainObject=w,t.isPrimitive=t=>{const e=typeof t;return null==t||"object"!==e&&"function"!==e},t.isPromise=F,t.isRegExp=t=>t instanceof RegExp,t.isSet=function(t){return!!p(t)&&"[object Set]"===t.toString()},t.isString=y,t.isUint16=function(t){return!!p(t)&&"Uint16Array"===t.constructor?.name},t.isUint32=function(t){return!!p(t)&&"Uint32Array"===t.constructor?.name},t.isUint8=function(t){return!!p(t)&&"Uint8Array"===t.constructor?.name},t.isUint8Clamped=function(t){return!!p(t)&&"Uint8ClampedArray"===t.constructor?.name},t.isUndefined=h,t.isWeakMap=function(t){return!!p(t)&&"[object WeakMap]"===t.toString()},t.isZero=t=>0===t,t.jsonParse=ce,t.kebabCase=t=>t.replace(Ft," ").trim().toLowerCase().replace(kt,"-$1"),t.keys=o,t.largest=t=>V(...t),t.last=(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]},t.map=wt,t.mapArray=_,t.mapArrayRight=function(t,e,n=[],r){let o=0;const s=t.length;for(let i=s-1;i>=0;i--)n[o]=e(t[i],i,t,s,r),o++;return n},t.mapAsync=X,t.mapObject=ft,t.mapObjectAsync=async(t,e,n={})=>(await Et(t,(async(t,r,o,s,i)=>{n[r]=await e(t,r,n,o,s,i)})),n),t.mapWhile=function(t,e,n=[],r){const o=t.length;for(let s=0;s<o;s++){const i=t[s];if(!1===e(i,s,n,t,o,r))break;n[s]=i}return n},t.minus=(t,e)=>t-e,t.model=function(t,e){return p(e)?Kt(le,[t,e]):se(t,le.models)},t.multiply=(t,e)=>t*e,t.negate=t=>(...e)=>!t(...e),t.nodeAttribute=Se,t.noop=()=>{},t.nthArg=(t=0)=>(...e)=>e[t],t.numSort=t=>t.sort(nt),t.numericalCompare=nt,t.numericalCompareReverse=rt,t.objectCreate=Zt,t.objectSize=u,t.omit=(t,e)=>ht(t,((t,n)=>!e.includes(n))),t.once=t=>{let e;return(...n)=>(p(e)||(e=t(...n)),e)},t.over=t=>(...e)=>wt(t,(t=>t(...e))),t.overEvery=t=>(...e)=>mt(t,(t=>t(...e))),t.partition=(t,e)=>{const n=[];return[K(t,(t=>{if(e(t))return t;n.push(t)})),n]},t.pick=(t,e,n={})=>(z(e,(e=>{n[e]=t[e]})),n),t.pluck=(t,e)=>_(t,(t=>t[e])),t.pluckObject=ct,t.pluckValues=(t,e)=>_(t,(t=>ct(t,e))),t.promise=ue,t.propertyMatch=(t,e,n=o(t))=>W(n,(n=>Qt(t[n],e[n]))),t.querySelector=Ee,t.querySelectorAll=Fe,t.rNumSort=t=>t.sort(rt),t.randomArbitrary=(t,e=0)=>B()*(t-e)+e,t.randomInt=D,t.range=(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let o=t;for(;o<e;)r.push(o),o+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,o=[];let s=t;for(;s>e;)o.push(s),s-=r;return o})(t,e,n),t.rawURLDecode=Dt,t.reArg=(t,e)=>(...n)=>t(...e.map((t=>n[t]))),t.regexGenerator=S,t.remainder=(t,e)=>t%e,t.remove=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const o=t[r];e.includes(o)&&(t.splice(r,1),r--,n--)}return t},t.removeBy=(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--)}return t},t.replaceList=(t,e,n)=>t.replace(new RegExp(`\\b${e.join("|")}\\b`,"gi"),n),t.rest=t=>t.slice(1,t.length),t.restString=Mt,t.right=(t,e)=>t[t.length-1-e],t.rightString=(t,e=1)=>t[t.length-e],t.sample=(t,e=1)=>{if(!t)return!1;const n=t.length;if(n===e||e>n)return U(t);if(1===e)return[t[D(n-1,0)]];const r=[],o={};let s,i=0;for(;i<e;)s=D(t.length-1,0),o[s]||(r.push(t[s]),o[s]=!0,i++);return r},t.sanitize=t=>Ut(Dt(t)),t.saveDimensions=De,t.selector=t=>{switch(t[0]){case"#":if(!Ie.test(t))return Le(Mt(t));break;case".":if(Ce.test(t))return Oe(Mt(t));break;default:if(je.test(t))return xe(t)}return Fe(t)},t.shuffle=U,t.smallest=t=>P(...t),t.snakeCase=t=>t.replace(Ft," ").trim().toLowerCase().replace(kt,"_$1"),t.sortAlphabetical=(t,e)=>t.sort(((t,n)=>{const r=t[e],o=n[e];return r<o?-1:r>o?1:0})),t.sortNewest=st,t.sortOldest=it,t.sortedIndex=(t,e)=>{let n=0;return W(t,((t,r)=>(n=r,e>t))),n},t.stringify=ae,t.stubArray=()=>[],t.stubFalse=()=>!1,t.stubObject=()=>({}),t.stubString=()=>"",t.stubTrue=()=>!0,t.sum=t=>t.reduce(((t,e)=>t+e),0),t.take=(t,e=1)=>t.slice(0,e),t.takeRight=(t,e=1)=>{const n=t.length;return t.slice(n-e,n)},t.themes=He,t.throttle=(t,e)=>{let n,r=!1;const o=(...o)=>{r?n=!0:(t(...o),r=St((()=>{n&&t(...o),r=!1}),e))};return o.clear=()=>{clearTimeout(r),r=!1},o},t.timer=St,t.times=ot,t.timesMap=(t,e,n,r=[])=>{const o=n?t:0,s=n?e:t,i=n||e;let c;return ot(o,s,(t=>{c=i(t,o,s,r),p(c)&&r.push(c)})),r},t.toArray=e,t.toPath=te,t.toggle=(t,e=!0,n=!1)=>Qt(e,t)?n:e,t.tokenize=t=>t.match(Pt)||[],t.truncate=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),o=r.length;let s,i=n-e;for(;i<o&&i>=0&&(s=r[i]," "!==s);i--);return t.slice(0,i).trim()})(t,e,n):t},t.truncateRight=(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),o=r.length;let s,i=e;for(;i<o&&i>0&&(s=r[i]," "!==s);i++);return t.substr(i,n).trim()})(t,e,n):t},t.uid=oe,t.unZip=t=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.unZipObject=t=>{const e=[],n=[];return lt(t,((t,r)=>{e.push(r),n.push(t)})),[e,n]},t.union=(...t)=>et(R(t)),t.unique=et,t.updateDimensions=Ue,t.upperCase=t=>t.replace(Ft," ").trim().toUpperCase(),t.upperFirst=t=>Wt(t)+Mt(t),t.upperFirstAll=t=>t.replace(qt,(t=>t.toUpperCase())),t.upperFirstLetter=Wt,t.upperFirstOnly=Ht,t.upperFirstOnlyAll=t=>Ht(t.toLowerCase()).replace(qt,(t=>t.toUpperCase())),t.virtualStorage=ze,t.whileArray=W,t.whileCompactMap=function(t,e,n=[],r){let o=0;for(;o<t.length;){const s=n.push(e(t[o],o,t,t.length,r));o++,p(s)&&n.push(s)}return t},t.whileEachArray=function(t,e,n){let r=0;for(;r<t.length;)e(t[r],r,t,t.length,n),r++;return t},t.whileMapArray=function(t,e,n=[],r){let o=0;for(;o<t.length;)n.push(e(t[o],o,t,t.length,r)),o++;return t},t.whileObject=ut,t.without=(t,e)=>t.filter((t=>!e.includes(t))),t.words=t=>t.match(zt)||[],t.wrap=(t,e)=>(...n)=>e(t,...n),t.xor=(...t)=>{const e=[];return z(t,(t=>{z(et(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)}))})),e},t.zip=(...t)=>t[0].map(((e,n)=>t.map((t=>t[n])))),t.zipObject=Lt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).$=e()}(this,(function(){"use strict";let t;const e=(...e)=>t(...e);e.superMethod=e=>{t=e};const n=Object,r=n.keys,s=n.is,o=n.assign,c=n.getOwnPropertyDescriptor,a=n.defineProperty,i=n.getOwnPropertyNames,l=t=>r(t).length;o(e,{assign:o,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:i,is:s,keys:r,objectSize:l});const u=Array.from;o(e,{toArray:u});const h=Reflect.apply;o(e,{apply:h});const p=function(t){return void 0===t},g=t=>null===t,d=t=>!p(t)&&!g(t),m=t=>e=>!!d(e)&&e.constructor===t,f=/\.|\+/,y=Array.isArray,b=m(String),w=m(Number),A=t=>!!d(t)&&"Object("===t.constructor.toString().trim().slice(9,16),v=t=>!!d(t)&&t instanceof Function,S=t=>Boolean(t.length),I=t=>e=>!!d(e)&&t.test(e),O=I(/\.css$/),C=I(/\.json$/),E=I(/\.js$/),j=I(/\.html$/),k=I(/\./),L=/\.([0-9a-z]+)/,F=t=>"Boolean"===t.constructor.name;o(e,{getFileExtension:t=>{const e=t.match(L);if(e)return e[1]},has:(t,...e)=>t.includes(...e),hasDot:k,hasLength:S,hasValue:d,isArray:y,isBoolean:F,isDate:t=>t instanceof Date,isDecimal:t=>f.test(t.toString()),isEmpty:t=>b(t)||y(t)?!S(t):A(t)?!l(t):!d(t),isFileCSS:O,isFileHTML:j,isFileJS:E,isFileJSON:C,isFunction:v,isNull:g,isNumber:w,isPlainObject:A,isRegExp:t=>t instanceof RegExp,isString:b,isUndefined:p});const M=(t,e)=>{const n=t.length;for(let r=0;r<n;r++)e(t[r],r,t,n);return t},x=(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)e(t[r],r,t,n);return t},R=(t,e)=>{const n=t.length;for(let r=0;r<n;r++)if(!1===e(t[r],r,t,n))return!1;return!0},$=(t,e,n=[])=>(M(t,((t,r,s,o)=>{!0===e(t,r,n,s,o)&&n.push(t)})),n),N=(T=M,(t,e,n=[])=>(T(t,((t,r,s,o)=>{n[r]=e(t,r,n,s,o)})),n));var T;const D=(t,e,n=[])=>(M(t,((t,r,s,o)=>{const c=e(t,r,n,s,o);d(c)&&n.push(c)})),n);o(e,{compactMapArray:D,eachArray:M,eachArrayRight:x,filterArray:$,mapArray:N,mapArrayRight:(t,e,n=[])=>{let r=0;const s=t.length;for(let o=s-1;o>=0;o--)n[r]=e(t[o],o,t,s),r++;return n},mapWhile:(t,e,n=[])=>{const r=t.length;for(let s=0;s<r;s++){const o=e(t[s],s,n,t,r);if(!1===o)break;n[s]=o}return n},whileArray:R,whileEachArray:(t,e)=>{let n=0;for(;n<t.length;)e(t[n],n,t,t.length),n++;return t},whileMapArray:(t,e,n=[])=>{let r=0;for(;r<t.length;)n.push(e(t[r],r,t,t.length)),r++;return t},whileCompactMap:(t,e,n=[])=>{let r=0;for(;r<t.length;){const s=n.push(e(t[r],r,t,t.length));r++,d(s)&&n.push(s)}return t}});const B=t=>`[object ${t}]`,U=t=>e=>!!d(e)&&e.toString()===t;M(["Arguments","Map","Set","WeakMap"],(t=>{e[`is${t}`]=U(B(t))}));M(["ArrayBuffer","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array"],(t=>{e[`is${t}`]=e=>!!d(e)&&e.constructor.name===t}));o(e,{asyncEach:async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const s=t[r];await s(e,r,t,n)}return t}});const P=t=>y(t)?t:[t];o(e,{ensureArray:P});const q=t=>t.flat(1/0);o(e,{flatten:(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(P(e))),[]);return n},flattenDeep:q});o(e,{remove:(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const s=t[r];e.includes(s)&&(t.splice(r,1),r--,n--)}return t},removeBy:(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--)}return t}});o(e,{chunk:(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,s)=>{s%e||(n.push([]),s&&r++),n[r].push(t)})),n}});o(e,{rest:t=>t.slice(1,t.length)});const z=t=>(t.length=0,t);o(e,{clear:z});o(e,{right:(t,e)=>t[t.length-1-e]});o(e,{cloneArray:t=>t.slice()});const W=Math,H=W.floor,K=W.random,_=(t,e=0)=>H(K()*(t-e))+e;o(e,{add:(t,e)=>t+e,deduct:t=>t-1,divide:(t,e)=>t/e,increment:t=>t+1,minus:(t,e)=>t-e,multiply:(t,e)=>t*e,randomArbitrary:(t,e=0)=>K()*(t-e)+e,randomInt:_,remainder:(t,e)=>t%e});const Z=(t,e=t.length)=>{if(t.length<=1)return u(t);const n=u(t);let r,s,o=0;for(;o<e;)r=_(n.length-1,0),s=n[o],n[o]=n[r],n[r]=s,o++;return n};o(e,{shuffle:Z});o(e,{sample:(t,e=1)=>{if(!t)return!1;const n=t.length;if(n===e||e>n)return Z(t);if(1===e)return[t[_(n-1,0)]];const r=[],s={};let o,c=0;for(;c<e;)o=_(t.length-1,0),s[o]||(r.push(t[o]),s[o]=!0,c++);return r}});o(e,{compact:t=>t.filter((t=>!(b(t)&&!t.length)&&t))});o(e,{initial:t=>t.slice(0,t.length-1)});const J=Math.min;o(e,{smallest:t=>J(...t)});o(e,{range:(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let s=t;for(;s<e;)r.push(s),s+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,s=[];let o=t;for(;o>e;)s.push(o),o-=r;return s})(t,e,n)});o(e,{intersect:(t,...e)=>D(t,(t=>{if(R(e,(e=>e.includes(t))))return t}))});o(e,{difference:(t,...e)=>{const n=q(e);return D(t,(t=>{if(!n.includes(t))return t}))}});const V=(t,e,n=t.length)=>t.splice(e,n);o(e,{drop:V,dropRight:(t,e,n=t.length)=>V(t,0,n-e)});const G=(t,e)=>t.length===e.length&&R(t,((t,n)=>e[n]===t));o(e,{isMatchArray:G});o(e,{sortedIndex:(t,e)=>{let n=0;return R(t,((t,r)=>(n=r,e>t))),n}});const Q=Math.max;o(e,{largest:t=>Q(...t)});o(e,{sum:t=>t.reduce(((t,e)=>t+e),0)});const X=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},Y=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t};o(e,{eachAsync:X,eachAsyncRight:Y});o(e,{last:(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]}});o(e,{take:(t,e=1)=>t.slice(0,e),takeRight:(t,e=1)=>{const n=t.length;return t.slice(n-e,n)}});const tt=async(t,e)=>{const n=[];return await X(t,(async(t,r,s)=>{n[r]=await e(t,r,s)})),n};o(e,{mapAsync:tt});const et=(t,e,n)=>n.indexOf(t)===e,nt=(t,e,n)=>t!==n[e-1],rt=(t,e)=>e?t.filter(nt):t.filter(et);o(e,{unique:rt});o(e,{union:(...t)=>rt(q(t))});o(e,{compactMapAsync:async(t,e)=>{const n=[];let r;return await X(t,(async(t,s,o)=>{r=await e(t,s,n,o),d(r)&&n.push(r)})),n}});const st=(t,e)=>t-e;o(e,{numSort:t=>t.sort(st)});o(e,{arrayToObject:(t,e)=>{const n={};return M(t,((t,r)=>{n[e[r]]=t})),n}});o(e,{without:(t,e)=>t.filter((t=>!e.includes(t)))});o(e,{partition:(t,e)=>{const n=[];return[D(t,(t=>{if(e(t))return t;n.push(t)})),n]}});o(e,{xor:(...t)=>{const e=[];return M(t,(t=>{M(rt(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)}))})),e}});o(e,{unZip:t=>t[0].map(((e,n)=>t.map((t=>t[n])))),zip:(...t)=>t[0].map(((e,n)=>t.map((t=>t[n]))))});o(e,{first:(t,e)=>e?t.slice(0,e):t[0]});const ot=(t,e)=>e-t;o(e,{rNumSort:t=>t.sort(ot)});const ct=(t,e,n)=>{const r=n?t:0,s=n?e:t,o=n||e;for(let t=r;t<s;t++)o(t,r,s)};o(e,{times:ct,timesMap:(t,e,n,r=[])=>{const s=n?t:0,o=n?e:t,c=n||e;let a;return ct(s,o,(t=>{a=c(t,s,o,r),d(a)&&r.push(a)})),r}});const at=(t,e)=>{const n=r(t);M(n,((n,r,s,o)=>{e(t[n],n,t,o,s)}))},it=(t,e)=>{const n=r(t);return R(n,((n,r,s,o)=>e(t[n],n,t,o,s)))},lt=(t,e,n={})=>(at(t,((t,r,s,o,c)=>{!0===e(t,r,n,s,o,c)&&(n[r]=t)})),n),ut=(t,e,n={})=>(at(t,((t,r,s,o,c)=>{n[r]=e(t,r,n,s,o,c)})),n),ht=(t,e,n={})=>(at(t,((t,r,s,o,c)=>{const a=e(t,r,n,s,o,c);d(a)&&(n[r]=a)})),n);o(e,{compactMapObject:ht,eachObject:at,filterObject:lt,mapObject:ut,whileObject:it});const pt=t=>t?pt[t]:r(pt),gt=navigator.userAgentData;if(gt)at(gt,((t,e)=>{F(t)&&t&&(pt[e]=t)})),M(gt.brands,(t=>{pt[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");const e=t.split(/ |\//);M(e,(t=>{pt[t]=!0}))}o(e,{isAgent:pt});const dt=(t,...e)=>(t.addEventListener(...e),t);o(e,{eventAdd:dt,eventRemove:(t,...e)=>(t.removeEventListener(...e),t)});o(e,{isEnter:t=>13===t.keyCode}),document.createDocumentFragment.bind(document);const mt=(t,e)=>{const n={};return M(t,((t,r)=>{n[t]=e[r]})),n};o(e,{unZipObject:t=>{const e=[],n=[];return at(t,((t,r)=>{e.push(r),n.push(t)})),[e,n]},zipObject:mt});const ft=(t,e)=>y(e)?mt(e,N(e,(e=>t.getAttribute(e)))):(at(e,((e,n)=>{t.setAttribute(n,e)})),t);o(e,{nodeAttribute:ft});const yt=t=>new Promise(t);o(e,{promise:yt});const bt=(t,e=1)=>t.substr(e);o(e,{chunkString:(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),initialString:(t,e=1)=>t.slice(0,-1*e),insertInRange:(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),restString:bt,rightString:(t,e=1)=>t[t.length-e]});const wt=/^.[\w_-]+$/,At=/^[A-Za-z]+$/,vt=/\s/,St=document.getElementsByClassName.bind(document),It=document.getElementsByTagName.bind(document),Ot=document.getElementById.bind(document),Ct=document.querySelector.bind(document),Et=document.querySelectorAll.bind(document);o(e,{getByClass:St,getById:Ot,getByTag:It,querySelector:Ct,querySelectorAll:Et,selector:t=>{switch(t[0]){case"#":if(!vt.test(t))return Ot(bt(t));break;case".":if(wt.test(t))return St(bt(t));break;default:if(At.test(t))return It(t)}return Et(t)}});const jt=document.createElement.bind(document),kt=t=>(t=>yt(((e,n)=>{var r,s;dt(t,"load",e,!0),dt(t,"error",n,!0),r=Ct("head"),s=t,r.appendChild(s)})))(ft(jt("script"),{async:"",src:`${t}.js`}));o(e,{importjs:kt});const Lt=t=>{const e=document.readyState;return"interactive"===e||"completed"===e||"complete"===e?!t||t():(t&&dt(document,"DOMContentLoaded",t),!1)};o(e,{isDocumentReady:Lt}),Lt((()=>{kt("/index")}));const Ft=location.protocol,Mt="http:"===Ft?"ws":"wss",xt=location.hostname,Rt={hardware:{cores:navigator.hardwareConcurrency},host:{name:xt,protocol:Ft,protocolSocket:Mt}};o(e,{info:Rt});const $t=()=>{o(Rt,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},Nt=()=>{$t()};Lt(Nt),dt(window,"load",Nt,!0),dt(window,"resize",Nt,!0),o(e,{saveDimensions:$t,updateDimensions:Nt});const Tt=JSON,Dt=Tt.parse,Bt=Tt.stringify;o(e,{jsonParse:Dt,stringify:Bt});class Ut{constructor(t={}){this.items=t}getItem(t){return this.items[t]}setItem(t,e){this.items[t]=e}clear(){this.items={}}removeItem(t){this.items[t]=null}}function Pt(){return new Ut}let qt;!function(t){try{t().removeItem("TESTING"),qt=!0}catch(t){qt=!1}}((()=>localStorage));class zt{constructor(t){this.hasLocal&&(this.local=localStorage),this.storage=Pt()}hasLocal=qt;setItem(t,e){return this.hasLocal&&this.local.setItem(t,b(e)?e:Bt(e)),this.storage.setItem(t,e)}getItem(t){const e=this.storage.getItem(t);return d(e)?e:!d(e)&&this.hasLocal?this.local.getItem(t):void 0}clear(){this.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){this.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}o(e,{VirtualStorage:Ut,Crate:zt,crate:function(t){return new zt(t)},virtualStorage:Pt,hasLocal:qt});const Wt=(t,e)=>`color:${t};background:${e};`,Ht={alert:Wt("#fff","#f44336"),important:Wt("#fff","#E91E63"),notify:Wt("#fff","#651FFF"),warning:Wt("#000","#FFEA00")};o(e,{cnsl:(t,e)=>{const n=b(t)?t:Bt(t);console.log(`%c${n}`,`${Ht[e]}font-size:13px;padding:2px 5px;border-radius:2px;`)},cnslTheme:(t,e,n)=>{Ht[t]=Wt(e,n)}});e.isDom=t=>t&&9!==t.nodeType,M(["HTMLCollection","NodeList"],(t=>{e[`is${t}`]=U(B(t))}));const Kt=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1));o(e,{getNewest:(t,e)=>Kt(t,e,!1)[0],sortNewest:Kt});const _t=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1));o(e,{getOldest:(t,e="id")=>_t(t,e)[0],sortOldest:_t});o(e,{groupBy:(t,e)=>{const n={};return M(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t)})),n}});o(e,{countBy:(t,e)=>{const n={};let r;return M(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++})),n},countKey:(t,e)=>{let n=0;return M(t,(t=>{t[e]&&n++})),n},countWithoutKey:(t,e)=>{let n=0;return M(t,(t=>{t[e]||n++})),n}});o(e,{indexBy:(t,e="id")=>{const n={};return M(t,(t=>{n[t[e]]=t})),n}});o(e,{pluck:(t,e)=>N(t,(t=>t[e]))});const Zt=(t,e)=>N(e,(e=>t[e]));o(e,{pluckObject:Zt});o(e,{pluckValues:(t,e)=>N(t,(t=>Zt(t,e)))});o(e,{invoke:(t,e,n)=>N(t,((t,r)=>t[e](n,r)))});o(e,{invokeAsync:(t,e,n)=>tt(t,(async(t,r)=>t[e](n,r)))});const Jt=(t,e,n,r,s)=>{if(t[s]===r)return!0};o(e,{findIndex:(t,e,n="id")=>{const r=t.findIndex(((t,r)=>Jt(t,0,0,e,n)));return-1!==r&&r},findItem:(t,e,n="id")=>{const r=t.find(((t,r)=>Jt(t,0,0,e,n)));return-1!==r&&r}});o(e,{sortAlphabetical:(t,e)=>t.sort(((t,n)=>{const r=t[e],s=n[e];return r<s?-1:r>s?1:0}))});o(e,{ary:(t,e)=>(...n)=>t(...n.splice(0,e))});o(e,{curry:(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.push(...s),n.length===e){const e=t(...n);return z(n),e}return r};return r},curryRight:(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.unshift(...s),n.length===e){const e=t(...n);return z(n),e}return r};return r}});o(e,{after:(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},before:(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},once:t=>{let e;return(...n)=>(d(e)||(e=t(...n)),e)}});o(e,{noop:()=>{},stubArray:()=>[],stubFalse:()=>!1,stubObject:()=>({}),stubString:()=>"",stubTrue:()=>!0});const Vt=(t,e)=>t.forEach(e),Gt=(t,e)=>(n,r,s)=>{let o;if(d(n))return o=y(n)?t:A(n)||v(n)?e:n.forEach?Vt:e,o(n,r,s)},Qt=Gt(R,it),Xt=Gt(M,at),Yt=Gt($,lt),te=Gt(N,ut),ee=Gt(D,ht);o(e,{compactMap:ee,each:Xt,eachWhile:Qt,filter:Yt,map:te});o(e,{bindAll:(t,e)=>te(t,(t=>v(t)?t.bind(e):t))});o(e,{ifInvoke:(t,...e)=>{if(v(t))return t(...e)}});o(e,{negate:t=>(...e)=>!t(...e)});o(e,{every:Qt});o(e,{over:t=>(...e)=>te(t,(t=>t(...e))),overEvery:t=>(...e)=>Qt(t,(t=>t(...e)))});const ne=(t,e)=>setTimeout(t,e),re=(t,e)=>setInterval(t,e),se=(t,e)=>()=>{ct(0,t((()=>{}),0),(t=>{e(t)}))},oe=se(ne,clearTimeout),ce=se(re,clearInterval);o(e,{clearIntervals:ce,clearTimers:oe,debounce:(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=ne((()=>{t(...r),n=!1}),e)};return r.clear=()=>{n&&(clearTimeout(n),n=!1)},r},interval:re,throttle:(t,e)=>{let n,r=!1;const s=(...s)=>{r?n=!0:(t(...s),r=ne((()=>{n&&t(...s),r=!1}),e))};return s.clear=()=>{clearTimeout(r),r=!1},s},timer:ne});o(e,{chain:t=>{const e=t=>(e.value=t,e.methods);return o(e,{add:t=>((t,e)=>(Xt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods)})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e}});o(e,{inAsync:async(t,e)=>X(t,(async t=>{await t(e)})),inSync:(t,e)=>Xt(t,(t=>{t(e)}))});o(e,{nthArg:(t=0)=>(...e)=>e[t]});o(e,{reArg:(t,e)=>(...n)=>t(...e.map((t=>n[t])))});o(e,{wrap:(t,e)=>(...n)=>e(t,...n)});o(e,{isNumberEqual:(t,e)=>t===e,isNumberInRange:(t,e,n)=>t>e&&t<n,isZero:t=>0===t});const ae=(t,e)=>{const n=r(t);return R(e,(t=>n.includes(t)))};o(e,{hasAnyKeys:(t,e)=>{const n=r(t);return Boolean(e.find((t=>n.includes(t))))},hasKeys:ae});o(e,{pick:(t,e,n={})=>(M(e,(e=>{n[e]=t[e]})),n)});o(e,{compactKeys:t=>{const e=[];return at(t,((t,n)=>{t&&e.push(n)})),e}});o(e,{isMatchObject:(t,e)=>{const n=r(t);return!!G(n,r(e))&&R(n,(n=>t[n]===e[n]))}});o(e,{invert:(t,e={})=>(at(t,((t,n)=>{e[t]=n})),e)});o(e,{omit:(t,e)=>lt(t,((t,n)=>!e.includes(n)))});const ie=async(t,e)=>{const n=r(t);return await X(n,((r,s,o,c)=>e(t[r],r,t,c,n))),t};o(e,{eachObjectAsync:ie});o(e,{compactMapObjectAsync:async(t,e,n={})=>(await ie(t,(async(t,r,s,o,c)=>{const a=await e(t,r,n,o,c);d(a)&&(n[r]=a)})),n),mapObjectAsync:async(t,e,n={})=>(await ie(t,(async(t,r,s,o,c)=>{n[r]=await e(t,r,n,s,o,c)})),n)});const le=/[-_]/g,ue=/ (.)/g;o(e,{camelCase:t=>t.toLowerCase().replace(ue,(t=>t.toUpperCase().replace(/ /g,""))),kebabCase:t=>t.replace(le," ").trim().toLowerCase().replace(ue,"-$1"),snakeCase:t=>t.replace(le," ").trim().toLowerCase().replace(ue,"_$1"),upperCase:t=>t.replace(le," ").trim().toUpperCase()});o(e,{replaceList:(t,e,n)=>t.replace(new RegExp(`\\b${e.join("|")}\\b`,"gi"),n)});const he=/%(?![\da-f]{2})/gi,pe=/&/g,ge=/</g,de=/>/g,me=/"/g,fe=t=>decodeURIComponent(t.replace(he,(()=>"%25"))),ye=t=>t.replace(pe,"&amp;").replace(ge,"&lt;").replace(de,"&gt;").replace(me,"&quot;");o(e,{htmlEntities:ye,rawURLDecode:fe,sanitize:t=>ye(fe(t))});const be=/\S+/g,we=/\w+/g;o(e,{tokenize:t=>t.match(be)||[],words:t=>t.match(we)||[]});o(e,{truncate:(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let o,c=n-e;for(;c<s&&c>=0&&(o=r[c]," "!==o);c--);return t.slice(0,c).trim()})(t,e,n):t},truncateRight:(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let o,c=e;for(;c<s&&c>0&&(o=r[c]," "!==o);c++);return t.substr(c,n).trim()})(t,e,n):t}});const Ae=/ (.)/g,ve=t=>t[0].toUpperCase(),Se=t=>ve(t)+bt(t).toLowerCase();o(e,{upperFirst:t=>ve(t)+bt(t),upperFirstAll:t=>t.replace(Ae,(t=>t.toUpperCase())),upperFirstLetter:ve,upperFirstOnly:Se,upperFirstOnlyAll:t=>Se(t.toLowerCase()).replace(Ae,(t=>t.toUpperCase()))});const Ie=(t,e,n=!0)=>(Xt(e,((e,r)=>{A(e)&&A(t[r])?Ie(t[r],e,n):n&&y(e)&&y(t[r])?t[r].push(...e):t[r]=e})),t);o(e,{assignDeep:Ie});const Oe=Function.prototype;o(e,{cacheNativeMethod:function(t){return Oe.call.bind(t)}});o(e,{ifNotEqual:(t,e,n)=>(e&&!d(t[e])&&(t[e]=n),t)});const Ce=(t,e)=>{if(t===e)return!0;if(t.toString()===e.toString())if(A(t)){const n=r(t);if(ae(e,n))return R(n,(n=>Ce(t[n],e[n])))}else if(y(t)&&t.length===e.length)return R(t,((t,n)=>Ce(t,e[n])));return!1};o(e,{isEqual:Ce});o(e,{propertyMatch:(t,e,n=r(t))=>R(n,(n=>Ce(t[n],e[n])))});const Ee=/\.|\[/,je=/]/g,ke=t=>t.replace(je,"").split(Ee);o(e,{toPath:ke});let Le=0;const Fe=[],Me={};function xe(){let t=Fe.shift(Fe);return d(t)||(t=Le,Me[t]=!0,Le++),t}xe.free=t=>{Me[t]=null,Fe.push(t)},o(e,{uid:xe});const Re=(t,n=e)=>{let r=n;return R(ke(t),(t=>(r=r[t],d(r)))),r};o(e,{get:Re});const $e=(t,e)=>(d(e)&&($e[t]=e),Re(t,$e));e.superMethod($e),o(e,{model:$e});o(e,{toggle:(t,e=!0,n=!1)=>Ce(e,t)?n:e});const Ne=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r)})),r},Te=Ne(M),De=Ne(x);o(e,{flow:Te,flowRight:De});const Be=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r)})),r},Ue=Be(X),Pe=Be(Y);return o(e,{flowAsync:Ue,flowAsyncRight:Pe}),e}));
//# sourceMappingURL=index.js.map

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).$=e()}(this,(function(){"use strict";let t;const e=(...e)=>t(...e);e.superMethod=e=>{t=e};const n=Object,r=n.keys,s=n.is,o=n.assign,c=n.getOwnPropertyDescriptor,a=n.defineProperty,i=n.getOwnPropertyNames,l=t=>r(t).length;o(e,{assign:o,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:i,is:s,keys:r,objectSize:l});const u=Array.from;o(e,{toArray:u});const h=Reflect.apply;o(e,{apply:h});const p=function(t){return void 0===t},d=t=>null===t,g=t=>!p(t)&&!d(t),m=t=>e=>!!g(e)&&e.constructor===t,f=/\.|\+/,y=Array.isArray,b=m(String),w=m(Number),A=t=>!!g(t)&&"Object("===t.constructor.toString().trim().slice(9,16),v=t=>!!g(t)&&t instanceof Function,S=t=>Boolean(t.length),I=t=>e=>!!g(e)&&t.test(e),O=I(/\.css$/),j=I(/\.json$/),C=I(/\.js$/),E=I(/\.html$/),k=I(/\./),L=/\.([0-9a-z]+)/,F=t=>"Boolean"===t.constructor.name;o(e,{getFileExtension:t=>{const e=t.match(L);if(e)return e[1]},has:(t,...e)=>t.includes(...e),hasDot:k,hasLength:S,hasValue:g,isArray:y,isBoolean:F,isDate:t=>t instanceof Date,isDecimal:t=>f.test(t.toString()),isEmpty:t=>b(t)||y(t)?!S(t):A(t)?!l(t):!g(t),isFileCSS:O,isFileHTML:E,isFileJS:C,isFileJSON:j,isFunction:v,isNull:d,isNumber:w,isPlainObject:A,isRegExp:t=>t instanceof RegExp,isString:b,isUndefined:p});const x=(t,e)=>{const n=t.length;for(let r=0;r<n;r++)e(t[r],r,t,n);return t},M=(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)e(t[r],r,t,n);return t},R=(t,e)=>{const n=t.length;for(let r=0;r<n;r++)if(!1===e(t[r],r,t,n))return!1;return!0},$=(t,e,n=[])=>(x(t,((t,r,s,o)=>{!0===e(t,r,n,s,o)&&n.push(t)})),n),N=(T=x,(t,e,n=[])=>(T(t,((t,r,s,o)=>{n[r]=e(t,r,n,s,o)})),n));var T;const D=(t,e,n=[])=>(x(t,((t,r,s,o)=>{const c=e(t,r,n,s,o);g(c)&&n.push(c)})),n);o(e,{compactMapArray:D,eachArray:x,eachArrayRight:M,filterArray:$,mapArray:N,mapArrayRight:(t,e,n=[])=>{let r=0;const s=t.length;for(let o=s-1;o>=0;o--)n[r]=e(t[o],o,t,s),r++;return n},mapWhile:(t,e,n=[])=>{const r=t.length;for(let s=0;s<r;s++){const o=e(t[s],s,n,t,r);if(!1===o)break;n[s]=o}return n},whileArray:R});const B=t=>`[object ${t}]`,U=t=>e=>!!g(e)&&e.toString()===t;x(["Arguments","Map","Set","WeakMap"],(t=>{e[`is${t}`]=U(B(t))}));x(["ArrayBuffer","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array"],(t=>{e[`is${t}`]=e=>!!g(e)&&e.constructor.name===t}));o(e,{asyncEach:async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const s=t[r];await s(e,r,t,n)}return t}});const P=t=>y(t)?t:[t];o(e,{ensureArray:P});const q=t=>t.flat(1/0);o(e,{flatten:(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(P(e))),[]);return n},flattenDeep:q});o(e,{remove:(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const s=t[r];e.includes(s)&&(t.splice(r,1),r--,n--)}return t},removeBy:(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--)}return t}});o(e,{chunk:(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,s)=>{s%e||(n.push([]),s&&r++),n[r].push(t)})),n}});o(e,{rest:t=>t.slice(1,t.length)});const z=t=>(t.length=0,t);o(e,{clear:z});o(e,{right:(t,e)=>t[t.length-1-e]});o(e,{cloneArray:t=>t.slice()});const W=Math,H=W.floor,K=W.random,_=(t,e=0)=>H(K()*(t-e))+e;o(e,{add:(t,e)=>t+e,deduct:t=>t-1,divide:(t,e)=>t/e,increment:t=>t+1,minus:(t,e)=>t-e,multiply:(t,e)=>t*e,randomArbitrary:(t,e=0)=>K()*(t-e)+e,randomInt:_,remainder:(t,e)=>t%e});const Z=(t,e=t.length)=>{if(t.length<=1)return u(t);const n=u(t);let r,s,o=0;for(;o<e;)r=_(n.length-1,0),s=n[o],n[o]=n[r],n[r]=s,o++;return n};o(e,{shuffle:Z});o(e,{sample:(t,e=1)=>{if(!t)return!1;const n=t.length;if(n===e||e>n)return Z(t);if(1===e)return[t[_(n-1,0)]];const r=[],s={};let o,c=0;for(;c<e;)o=_(t.length-1,0),s[o]||(r.push(t[o]),s[o]=!0,c++);return r}});o(e,{compact:t=>t.filter((t=>!(b(t)&&!t.length)&&t))});o(e,{initial:t=>t.slice(0,t.length-1)});const J=Math.min;o(e,{smallest:t=>J(...t)});o(e,{range:(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let s=t;for(;s<e;)r.push(s),s+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,s=[];let o=t;for(;o>e;)s.push(o),o-=r;return s})(t,e,n)});o(e,{intersect:(t,...e)=>D(t,(t=>{if(R(e,(e=>e.includes(t))))return t}))});o(e,{difference:(t,...e)=>{const n=q(e);return D(t,(t=>{if(!n.includes(t))return t}))}});const V=(t,e,n=t.length)=>t.splice(e,n);o(e,{drop:V,dropRight:(t,e,n=t.length)=>V(t,0,n-e)});const G=(t,e)=>t.length===e.length&&R(t,((t,n)=>e[n]===t));o(e,{isMatchArray:G});o(e,{sortedIndex:(t,e)=>{let n=0;return R(t,((t,r)=>(n=r,e>t))),n}});const Q=Math.max;o(e,{largest:t=>Q(...t)});o(e,{sum:t=>t.reduce(((t,e)=>t+e),0)});const X=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},Y=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t};o(e,{eachAsync:X,eachAsyncRight:Y});o(e,{last:(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]}});o(e,{take:(t,e=1)=>t.slice(0,e),takeRight:(t,e=1)=>{const n=t.length;return t.slice(n-e,n)}});const tt=async(t,e)=>{const n=[];return await X(t,(async(t,r,s)=>{n[r]=await e(t,r,s)})),n};o(e,{mapAsync:tt});const et=(t,e,n)=>n.indexOf(t)===e,nt=(t,e,n)=>t!==n[e-1],rt=(t,e)=>e?t.filter(nt):t.filter(et);o(e,{unique:rt});o(e,{union:(...t)=>rt(q(t))});o(e,{compactMapAsync:async(t,e)=>{const n=[];let r;return await X(t,(async(t,s,o)=>{r=await e(t,s,n,o),g(r)&&n.push(r)})),n}});const st=(t,e)=>t-e;o(e,{numSort:t=>t.sort(st)});o(e,{arrayToObject:(t,e)=>{const n={};return x(t,((t,r)=>{n[e[r]]=t})),n}});o(e,{without:(t,e)=>t.filter((t=>!e.includes(t)))});o(e,{partition:(t,e)=>{const n=[];return[D(t,(t=>{if(e(t))return t;n.push(t)})),n]}});o(e,{xor:(...t)=>{const e=[];return x(t,(t=>{x(rt(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)}))})),e}});o(e,{unZip:t=>t[0].map(((e,n)=>t.map((t=>t[n])))),zip:(...t)=>t[0].map(((e,n)=>t.map((t=>t[n]))))});o(e,{first:(t,e)=>e?t.slice(0,e):t[0]});const ot=(t,e)=>e-t;o(e,{rNumSort:t=>t.sort(ot)});const ct=(t,e,n)=>{const r=n?t:0,s=n?e:t,o=n||e;for(let t=r;t<s;t++)o(t,r,s)};o(e,{times:ct,timesMap:(t,e,n,r=[])=>{const s=n?t:0,o=n?e:t,c=n||e;let a;return ct(s,o,(t=>{a=c(t,s,o,r),g(a)&&r.push(a)})),r}});const at=(t,e)=>{const n=r(t);x(n,((r,s,o,c)=>{e(t[r],r,t,c,n)}))},it=(t,e)=>{const n=r(t);return R(n,((n,r,s,o)=>e(t[n],n,t,o,s)))},lt=(t,e,n={})=>(at(t,((t,r,s,o,c)=>{!0===e(t,r,n,s,o,c)&&(n[r]=t)})),n),ut=(t,e,n={})=>(at(t,((t,r,s,o,c)=>{n[r]=e(t,r,n,s,o,c)})),n),ht=(t,e,n={})=>(at(t,((t,r,s,o,c)=>{const a=e(t,r,n,o,c);g(a)&&(n[r]=a)})),n);o(e,{compactMapObject:ht,eachObject:at,filterObject:lt,mapObject:ut,whileObject:it});const pt=t=>t?pt[t]:r(pt),dt=navigator.userAgentData;if(dt)at(dt,((t,e)=>{F(t)&&t&&(pt[e]=t)})),x(dt.brands,(t=>{pt[t.brand]=t.version}));else if(navigator.userAgent){let t=navigator.userAgent.toLowerCase();t=t.replace(/_/g,"."),t=t.replace(/[#_,;()]/g,"");const e=t.split(/ |\//);x(e,(t=>{pt[t]=!0}))}o(e,{isAgent:pt});const gt=(t,...e)=>(t.addEventListener(...e),t);o(e,{eventAdd:gt,eventRemove:(t,...e)=>(t.removeEventListener(...e),t)});o(e,{isEnter:t=>13===t.keyCode}),document.createDocumentFragment.bind(document);const mt=(t,e)=>{const n={};return x(t,((t,r)=>{n[t]=e[r]})),n};o(e,{unZipObject:t=>{const e=[],n=[];return at(t,((t,r)=>{e.push(r),n.push(t)})),[e,n]},zipObject:mt});const ft=(t,e)=>y(e)?mt(e,N(e,(e=>t.getAttribute(e)))):(at(e,((e,n)=>{t.setAttribute(n,e)})),t);o(e,{nodeAttribute:ft});const yt=t=>new Promise(t);o(e,{promise:yt});const bt=(t,e=1)=>t.substr(e);o(e,{chunkString:(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),initialString:(t,e=1)=>t.slice(0,-1*e),insertInRange:(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),restString:bt,rightString:(t,e=1)=>t[t.length-e]});const wt=/^.[\w_-]+$/,At=/^[A-Za-z]+$/,vt=/\s/,St=document.getElementsByClassName.bind(document),It=document.getElementsByTagName.bind(document),Ot=document.getElementById.bind(document),jt=document.querySelector.bind(document),Ct=document.querySelectorAll.bind(document);o(e,{getByClass:St,getById:Ot,getByTag:It,querySelector:jt,querySelectorAll:Ct,selector:t=>{switch(t[0]){case"#":if(!vt.test(t))return Ot(bt(t));break;case".":if(wt.test(t))return St(bt(t));break;default:if(At.test(t))return It(t)}return Ct(t)}});const Et=document.createElement.bind(document),kt=t=>(t=>yt(((e,n)=>{var r,s;gt(t,"load",e,!0),gt(t,"error",n,!0),r=jt("head"),s=t,r.appendChild(s)})))(ft(Et("script"),{async:"",src:`${t}.js`}));o(e,{importjs:kt});const Lt=t=>{const e=document.readyState;return"interactive"===e||"completed"===e||"complete"===e?!t||t():(t&&gt(document,"DOMContentLoaded",t),!1)};o(e,{isDocumentReady:Lt}),Lt((()=>{kt("/index")}));const Ft=location.protocol,xt="http:"===Ft?"ws":"wss",Mt=location.hostname,Rt={hardware:{cores:navigator.hardwareConcurrency},host:{name:Mt,protocol:Ft,protocolSocket:xt}};o(e,{info:Rt});const $t=()=>{o(Rt,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},Nt=()=>{$t()};Lt(Nt),gt(window,"load",Nt,!0),gt(window,"resize",Nt,!0),o(e,{saveDimensions:$t,updateDimensions:Nt});const Tt=JSON,Dt=Tt.parse,Bt=Tt.stringify;o(e,{jsonParse:Dt,stringify:Bt});class Ut{constructor(){this.items={}}getItem(t){return this.items[t]}setItem(t,e){this.items[t]=e}clear(){this.storage.items={}}removeItem(t){this.items[t]=null}}function Pt(){return new Ut}!function(t){try{t().removeItem("TESTING"),e.hasLocal=!0}catch(t){e.hasLocal=!1}}((()=>localStorage));class qt{constructor(){e.hasLocal&&(this.local=localStorage),this.storage=Pt()}setItem(t,n){return e.hasLocal&&this.local.setItem(t,b(n)?n:Bt(n)),this.storage.setItem(t,n)}getItem(t){let n=this.storage.getItem(t);return g(n)?n:!g(n)&&e.hasLocal?this.local.getItem(t):void 0}clear(){e.hasLocal&&this.local.clear(),this.storage.clear()}removeItem(t){e.hasLocal&&this.local.removeItem(t),this.storage.removeItem(t)}}o(e,{crate:function(t){return new qt(t)},virtualCrate:Pt});const zt=(t,e)=>`color:${t};background:${e};`,Wt={alert:zt("#fff","#f44336"),important:zt("#fff","#E91E63"),notify:zt("#fff","#651FFF"),warning:zt("#000","#FFEA00")};o(e,{cnsl:(t,e)=>{const n=b(t)?t:Bt(t);console.log(`%c${n}`,`${Wt[e]}font-size:13px;padding:2px 5px;border-radius:2px;`)},cnslTheme:(t,e,n)=>{Wt[t]=zt(e,n)}});e.isDom=t=>t&&9!==t.nodeType,x(["HTMLCollection","NodeList"],(t=>{e[`is${t}`]=U(B(t))}));const Ht=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1));o(e,{getNewest:(t,e)=>Ht(t,e,!1)[0],sortNewest:Ht});const Kt=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1));o(e,{getOldest:(t,e="id")=>Kt(t,e)[0],sortOldest:Kt});o(e,{groupBy:(t,e)=>{const n={};return x(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t)})),n}});o(e,{countBy:(t,e)=>{const n={};let r;return x(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++})),n},countKey:(t,e)=>{let n=0;return x(t,(t=>{t[e]&&n++})),n},countWithoutKey:(t,e)=>{let n=0;return x(t,(t=>{t[e]||n++})),n}});o(e,{indexBy:(t,e="id")=>{const n={};return x(t,(t=>{n[t[e]]=t})),n}});o(e,{pluck:(t,e)=>N(t,(t=>t[e]))});const _t=(t,e)=>N(e,(e=>t[e]));o(e,{pluckObject:_t});o(e,{pluckValues:(t,e)=>N(t,(t=>_t(t,e)))});o(e,{invoke:(t,e,n)=>N(t,((t,r)=>t[e](n,r)))});o(e,{invokeAsync:(t,e,n)=>tt(t,(async(t,r)=>t[e](n,r)))});const Zt=(t,e,n,r,s)=>{if(t[s]===r)return!0};o(e,{findIndex:(t,e,n="id")=>{const r=t.findIndex(((t,r)=>Zt(t,0,0,e,n)));return-1!==r&&r},findItem:(t,e,n="id")=>{const r=t.find(((t,r)=>Zt(t,0,0,e,n)));return-1!==r&&r}});o(e,{sortAlphabetical:(t,e)=>t.sort(((t,n)=>{const r=t[e],s=n[e];return r<s?-1:r>s?1:0}))});o(e,{ary:(t,e)=>(...n)=>t(...n.splice(0,e))});o(e,{curry:(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.push(...s),n.length===e){const e=t(...n);return z(n),e}return r};return r},curryRight:(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.unshift(...s),n.length===e){const e=t(...n);return z(n),e}return r};return r}});o(e,{after:(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},before:(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},once:t=>{let e;return(...n)=>(g(e)||(e=t(...n)),e)}});o(e,{noop:()=>{},stubArray:()=>[],stubFalse:()=>!1,stubObject:()=>({}),stubString:()=>"",stubTrue:()=>!0});const Jt=(t,e)=>t.forEach(e),Vt=(t,e)=>(n,r,s)=>{let o;if(g(n))return o=y(n)?t:A(n)||v(n)?e:n.forEach?Jt:e,o(n,r,s)},Gt=Vt(R,it),Qt=Vt(x,at),Xt=Vt($,lt),Yt=Vt(N,ut),te=Vt(D,ht);o(e,{compactMap:te,each:Qt,eachWhile:Gt,filter:Xt,map:Yt});o(e,{bindAll:(t,e)=>Yt(t,(t=>v(t)?t.bind(e):t))});o(e,{ifInvoke:(t,...e)=>{if(v(t))return t(...e)}});o(e,{negate:t=>(...e)=>!t(...e)});o(e,{every:Gt});o(e,{over:t=>(...e)=>Yt(t,(t=>t(...e))),overEvery:t=>(...e)=>Gt(t,(t=>t(...e)))});const ee=(t,e)=>setTimeout(t,e),ne=(t,e)=>setInterval(t,e),re=(t,e)=>()=>{ct(0,t((()=>{}),0),(t=>{e(t)}))},se=re(ee,clearTimeout),oe=re(ne,clearInterval);o(e,{clearIntervals:oe,clearTimers:se,debounce:(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=ee((()=>{t(...r),n=!1}),e)};return r.clear=()=>{n&&(clearTimeout(n),n=!1)},r},interval:ne,throttle:(t,e)=>{let n,r=!1;const s=(...s)=>{r?n=!0:(t(...s),r=ee((()=>{n&&t(...s),r=!1}),e))};return s.clear=()=>{clearTimeout(r),r=!1},s},timer:ee});o(e,{chain:t=>{const e=t=>(e.value=t,e.methods);return o(e,{add:t=>((t,e)=>(Qt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods)})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e}});o(e,{inAsync:async(t,e)=>X(t,(async t=>{await t(e)})),inSync:(t,e)=>Qt(t,(t=>{t(e)}))});o(e,{nthArg:(t=0)=>(...e)=>e[t]});o(e,{reArg:(t,e)=>(...n)=>t(...e.map((t=>n[t])))});o(e,{wrap:(t,e)=>(...n)=>e(t,...n)});o(e,{isNumberEqual:(t,e)=>t===e,isNumberInRange:(t,e,n)=>t>e&&t<n,isZero:t=>0===t});const ce=(t,e)=>{const n=r(t);return R(e,(t=>n.includes(t)))};o(e,{hasAnyKeys:(t,e)=>{const n=r(t);return Boolean(e.find((t=>n.includes(t))))},hasKeys:ce});o(e,{pick:(t,e,n={})=>(x(e,(e=>{n[e]=t[e]})),n)});o(e,{compactKeys:t=>{const e=[];return at(t,((t,n)=>{t&&e.push(n)})),e}});o(e,{isMatchObject:(t,e)=>{const n=r(t);return!!G(n,r(e))&&R(n,(n=>t[n]===e[n]))}});o(e,{invert:(t,e={})=>(at(t,((t,n)=>{e[t]=n})),e)});o(e,{omit:(t,e)=>lt(t,((t,n)=>!e.includes(n)))});const ae=async(t,e)=>{const n=r(t);return await X(n,((r,s,o,c)=>e(t[r],r,t,c,n))),t};o(e,{eachObjectAsync:ae});o(e,{compactMapObjectAsync:async(t,e,n={})=>(await ae(t,(async(t,r,s,o,c)=>{const a=await e(t,r,n,o,c);g(a)&&(n[r]=a)})),n),mapObjectAsync:async(t,e,n={})=>(await ae(t,(async(t,r,s,o,c)=>{n[r]=await e(t,r,n,s,o,c)})),n)});const ie=/[-_]/g,le=/ (.)/g;o(e,{camelCase:t=>t.toLowerCase().replace(le,(t=>t.toUpperCase().replace(/ /g,""))),kebabCase:t=>t.replace(ie," ").trim().toLowerCase().replace(le,"-$1"),snakeCase:t=>t.replace(ie," ").trim().toLowerCase().replace(le,"_$1"),upperCase:t=>t.replace(ie," ").trim().toUpperCase()});o(e,{replaceList:(t,e,n)=>t.replace(new RegExp("\\b"+e.join("|")+"\\b","gi"),n)});const ue=/%(?![\da-f]{2})/gi,he=/&/g,pe=/</g,de=/>/g,ge=/"/g,me=t=>decodeURIComponent(t.replace(ue,(()=>"%25"))),fe=t=>t.replace(he,"&amp;").replace(pe,"&lt;").replace(de,"&gt;").replace(ge,"&quot;");o(e,{htmlEntities:fe,rawURLDecode:me,sanitize:t=>fe(me(t))});const ye=/\S+/g,be=/\w+/g;o(e,{tokenize:t=>t.match(ye)||[],words:t=>t.match(be)||[]});o(e,{truncate:(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let o,c=n-e;for(;c<s&&c>=0&&(o=r[c]," "!==o);c--);return t.slice(0,c).trim()})(t,e,n):t},truncateRight:(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let o,c=e;for(;c<s&&c>0&&(o=r[c]," "!==o);c++);return t.substr(c,n).trim()})(t,e,n):t}});const we=/ (.)/g,Ae=t=>t[0].toUpperCase(),ve=t=>Ae(t)+bt(t).toLowerCase();o(e,{upperFirst:t=>Ae(t)+bt(t),upperFirstAll:t=>t.replace(we,(t=>t.toUpperCase())),upperFirstLetter:Ae,upperFirstOnly:ve,upperFirstOnlyAll:t=>ve(t.toLowerCase()).replace(we,(t=>t.toUpperCase()))});const Se=(t,e,n=!0)=>(Qt(e,((e,r)=>{A(e)&&A(t[r])?Se(t[r],e,n):n&&y(e)&&y(t[r])?t[r].push(...e):t[r]=e})),t);o(e,{assignDeep:Se});const Ie=Function.prototype;o(e,{cacheNativeMethod:function(t){return Ie.call.bind(t)}});o(e,{ifNotEqual:(t,e,n)=>(e&&!g(t[e])&&(t[e]=n),t)});const Oe=(t,e)=>{if(t===e)return!0;if(t.toString()===e.toString())if(A(t)){const n=r(t);if(ce(e,n))return R(n,(n=>Oe(t[n],e[n])))}else if(y(t)&&t.length===e.length)return R(t,((t,n)=>Oe(t,e[n])));return!1};o(e,{isEqual:Oe});o(e,{propertyMatch:(t,e,n=r(t))=>R(n,(n=>Oe(t[n],e[n])))});const je=/\.|\[/,Ce=/]/g,Ee=t=>t.replace(Ce,"").split(je);o(e,{toPath:Ee});let ke=0;const Le=[],Fe={};function xe(){let t=Le.shift(Le);return g(t)||(t=ke,Fe[t]=!0,ke++),t}xe.free=t=>{Fe[t]=null,Le.push(t)},o(e,{uid:xe});const Me=(t,n=e)=>{let r=n;return R(Ee(t),(t=>(r=r[t],g(r)))),r};o(e,{get:Me});const Re=(t,e)=>(g(e)&&(Re[t]=e),Me(t,Re));e.superMethod(Re),o(e,{model:Re});o(e,{toggle:(t,e=!0,n=!1)=>Oe(e,t)?n:e});const $e=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r)})),r},Ne=$e(x),Te=$e(M);o(e,{flow:Ne,flowRight:Te});const De=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r)})),r},Be=De(X),Ue=De(Y);return o(e,{flowAsync:Be,flowAsyncRight:Ue}),e}));
//# sourceMappingURL=index.js.map

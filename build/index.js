!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).$=e()}(this,(function(){"use strict";let t;const e=(...e)=>t(...e);e.superMethod=e=>{t=e};const n=Object,r=n.keys,s=n.is,o=n.assign,c=n.getOwnPropertyDescriptor,i=n.defineProperty,a=n.getOwnPropertyNames,l=t=>r(t).length;o(e,{assign:o,defineProperty:i,getOwnPropertyDescriptor:c,getOwnPropertyNames:a,is:s,keys:r,objectSize:l});const u=Array.from;o(e,{toArray:u});const p=Reflect.apply;o(e,{apply:p});const d=function(t){return void 0===t},h=t=>null===t,g=t=>!d(t)&&!h(t),m=t=>e=>!!g(e)&&e.constructor===t,f=/\.|\+/,y=Array.isArray,b=m(String),w=m(Number),A=t=>!!g(t)&&"Object("===t.constructor.toString().trim().slice(9,16),v=t=>!!g(t)&&t instanceof Function,O=t=>Boolean(t.length),S=t=>e=>!!g(e)&&t.test(e),j=S(/\.css$/),E=S(/\.json$/),C=S(/\.js$/),F=S(/\.html$/),k=S(/\./),x=/\.([0-9a-z]+)/,M=t=>"Boolean"===t.constructor.name;o(e,{getFileExtension:t=>{const e=t.match(x);if(e)return e[1]},has:(t,...e)=>t.includes(...e),hasDot:k,hasLength:O,hasValue:g,isArray:y,isBoolean:M,isDate:t=>t instanceof Date,isDecimal:t=>f.test(t.toString()),isEmpty:t=>b(t)||y(t)?!O(t):A(t)?!l(t):!g(t),isFileCSS:j,isFileHTML:F,isFileJS:C,isFileJSON:E,isFunction:v,isNull:h,isNumber:w,isPlainObject:A,isRegExp:t=>t instanceof RegExp,isString:b,isUndefined:d});const R=(t,e)=>{const n=t.length;for(let r=0;r<n;r++)e(t[r],r,t,n);return t},$=(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)e(t[r],r,t,n);return t},I=(t,e)=>{const n=t.length;for(let r=0;r<n;r++)if(!1===e(t[r],r,t,n))return!1;return!0},N=(t,e,n=[])=>(R(t,((t,r,s,o)=>{!0===e(t,r,n,s,o)&&n.push(t)})),n),D=(T=R,(t,e,n=[])=>(T(t,((t,r,s,o)=>{n[r]=e(t,r,n,s,o)})),n));var T;const B=(t,e,n=[])=>(R(t,((t,r,s,o)=>{const c=e(t,r,n,s,o);g(c)&&n.push(c)})),n);o(e,{compactMapArray:B,eachArray:R,eachArrayRight:$,filterArray:N,mapArray:D,mapArrayRight:(t,e,n=[])=>{let r=0;const s=t.length;for(let o=s-1;o>=0;o--)n[r]=e(t[o],o,t,s),r++;return n},mapWhile:(t,e,n=[])=>{const r=t.length;for(let s=0;s<r;s++){const o=e(t[s],s,n,t,r);if(!1===o)break;n[s]=o}return n},whileArray:I});const L=t=>`[object ${t}]`,U=t=>e=>!!g(e)&&e.toString()===t;R(["Arguments","Map","Set","WeakMap"],(t=>{e[`is${t}`]=U(L(t))}));R(["ArrayBuffer","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array"],(t=>{e[`is${t}`]=e=>!!g(e)&&e.constructor.name===t}));o(e,{asyncEach:async(t,e)=>{const n=t.length;for(let r=0;r<n;r++){const s=t[r];await s(e,r,t,n)}return t}});const q=t=>y(t)?t:[t];o(e,{ensureArray:q});const P=t=>t.flat(1/0);o(e,{flatten:(t,e=1)=>{let n=t;for(let t=0;t<e;t++)n=n.reduce(((t,e)=>t.concat(q(e))),[]);return n},flattenDeep:P});o(e,{remove:(t,e)=>{let n=t.length;for(let r=0;r<n;r++){const s=t[r];e.includes(s)&&(t.splice(r,1),r--,n--)}return t},removeBy:(t,e)=>{let n=t.length;for(let r=0;r<n;r++){e(t[r],r)&&(t.splice(r,1),r--,n--)}return t}});o(e,{chunk:(t,e=1)=>{const n=[];let r=0;return t.forEach(((t,s)=>{s%e||(n.push([]),s&&r++),n[r].push(t)})),n}});o(e,{rest:t=>t.slice(1,t.length)});const z=t=>(t.length=0,t);o(e,{clear:z});o(e,{right:(t,e)=>t[t.length-1-e]});o(e,{cloneArray:t=>t.slice()});const W=Math,H=W.floor,K=W.random,Z=(t,e=0)=>H(K()*(t-e))+e;o(e,{add:(t,e)=>t+e,deduct:t=>t-1,divide:(t,e)=>t/e,increment:t=>t+1,minus:(t,e)=>t-e,multiply:(t,e)=>t*e,randomArbitrary:(t,e=0)=>K()*(t-e)+e,randomInt:Z,remainder:(t,e)=>t%e});const J=(t,e=t.length)=>{if(t.length<=1)return u(t);const n=u(t);let r,s,o=0;for(;o<e;)r=Z(n.length-1,0),s=n[o],n[o]=n[r],n[r]=s,o++;return n};o(e,{shuffle:J});o(e,{sample:(t,e=1)=>{if(!t)return!1;const n=t.length;if(n===e||e>n)return J(t);if(1===e)return[t[Z(n-1,0)]];const r=[],s={};let o,c=0;for(;c<e;)o=Z(t.length-1,0),s[o]||(r.push(t[o]),s[o]=!0,c++);return r}});o(e,{compact:t=>t.filter((t=>!(b(t)&&!t.length)&&t))});o(e,{initial:t=>t.slice(0,t.length-1)});const _=Math.min;o(e,{smallest:t=>_(...t)});o(e,{range:(t,e,n=1)=>t<e?((t,e,n)=>{const r=[];let s=t;for(;s<e;)r.push(s),s+=n;return r})(t,e,n):((t,e,n)=>{const r=n<0?-1*n:n,s=[];let o=t;for(;o>e;)s.push(o),o-=r;return s})(t,e,n)});o(e,{intersect:(t,...e)=>B(t,(t=>{if(I(e,(e=>e.includes(t))))return t}))});o(e,{difference:(t,...e)=>{const n=P(e);return B(t,(t=>{if(!n.includes(t))return t}))}});const V=(t,e,n=t.length)=>t.splice(e,n);o(e,{drop:V,dropRight:(t,e,n=t.length)=>V(t,0,n-e)});const G=(t,e)=>t.length===e.length&&I(t,((t,n)=>e[n]===t));o(e,{isMatchArray:G});o(e,{sortedIndex:(t,e)=>{let n=0;return I(t,((t,r)=>(n=r,e>t))),n}});const Q=Math.max;o(e,{largest:t=>Q(...t)});o(e,{sum:t=>t.reduce(((t,e)=>t+e),0)});const X=async(t,e)=>{const n=t.length;for(let r=0;r<n;r++)await e(t[r],r,t,n);return t},Y=async(t,e)=>{const n=t.length;for(let r=n-1;r>=0;r--)await e(t[r],r,t,n);return t};o(e,{eachAsync:X,eachAsyncRight:Y});o(e,{last:(t,e)=>{const n=t.length;return e?t.slice(n-e,n):t[n-1]}});o(e,{take:(t,e=1)=>t.slice(0,e),takeRight:(t,e=1)=>{const n=t.length;return t.slice(n-e,n)}});const tt=async(t,e)=>{const n=[];return await X(t,(async(t,r,s)=>{n[r]=await e(t,r,s)})),n};o(e,{mapAsync:tt});const et=(t,e,n)=>n.indexOf(t)===e,nt=(t,e,n)=>t!==n[e-1],rt=(t,e)=>e?t.filter(nt):t.filter(et);o(e,{unique:rt});o(e,{union:(...t)=>rt(P(t))});o(e,{compactMapAsync:async(t,e)=>{const n=[];let r;return await X(t,(async(t,s,o)=>{r=await e(t,s,n,o),g(r)&&n.push(r)})),n}});const st=(t,e)=>t-e;o(e,{numSort:t=>t.sort(st)});o(e,{arrayToObject:(t,e)=>{const n={};return R(t,((t,r)=>{n[e[r]]=t})),n}});o(e,{without:(t,e)=>t.filter((t=>!e.includes(t)))});o(e,{partition:(t,e)=>{const n=[];return[B(t,(t=>{if(e(t))return t;n.push(t)})),n]}});o(e,{xor:(...t)=>{const e=[];return R(t,(t=>{R(rt(t),(t=>{e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)}))})),e}});o(e,{unZip:t=>t[0].map(((e,n)=>t.map((t=>t[n])))),zip:(...t)=>t[0].map(((e,n)=>t.map((t=>t[n]))))});o(e,{first:(t,e)=>e?t.slice(0,e):t[0]});const ot=(t,e)=>e-t;o(e,{rNumSort:t=>t.sort(ot)});const ct=(t,e,n)=>{const r=n?t:0,s=n?e:t,o=n||e;for(let t=r;t<s;t++)o(t,r,s)};o(e,{times:ct,timesMap:(t,e,n,r=[])=>{const s=n?t:0,o=n?e:t,c=n||e;let i;return ct(s,o,(t=>{i=c(t,s,o,r),g(i)&&r.push(i)})),r}});const it=(t,e)=>{const n=r(t);R(n,((r,s,o,c)=>{e(t[r],r,t,c,n)}))},at=(t,e)=>{const n=r(t);return I(n,((n,r,s,o)=>e(t[n],n,t,o,s)))},lt=(t,e,n={})=>(it(t,((t,r,s,o,c)=>{!0===e(t,r,n,s,o,c)&&(n[r]=t)})),n),ut=(t,e,n={})=>(it(t,((t,r,s,o,c)=>{n[r]=e(t,r,n,s,o,c)})),n),pt=(t,e,n={})=>(it(t,((t,r,s,o,c)=>{const i=e(t,r,n,o,c);g(i)&&(n[r]=i)})),n);o(e,{compactMapObject:pt,eachObject:it,filterObject:lt,mapObject:ut,whileObject:at});const dt=t=>t?dt[t]:r(dt),ht=navigator.userAgentData();it(ht,((t,e)=>{M(t)&&t&&(dt[e]=t)})),R(ht.brands,(t=>{dt[t.brand]=t.version})),o(e,{isAgent:dt});const gt=(t,...e)=>(t.addEventListener(...e),t);o(e,{eventAdd:gt,eventRemove:(t,...e)=>(t.removeEventListener(...e),t)});o(e,{isEnter:t=>13===t.keyCode}),document.createDocumentFragment.bind(document);const mt=(t,e)=>{const n={};return R(t,((t,r)=>{n[t]=e[r]})),n};o(e,{unZipObject:t=>{const e=[],n=[];return it(t,((t,r)=>{e.push(r),n.push(t)})),[e,n]},zipObject:mt});const ft=(t,e)=>y(e)?mt(e,D(e,(e=>t.getAttribute(e)))):(it(e,((e,n)=>{t.setAttribute(n,e)})),t);o(e,{nodeAttribute:ft});const yt=t=>new Promise(t);o(e,{promise:yt});const bt=(t,e=1)=>t.substr(e);o(e,{chunkString:(t,e)=>t.match(new RegExp(`(.|[\r\n]){1,${e}}`,"g")),initialString:(t,e=1)=>t.slice(0,-1*e),insertInRange:(t,e,n)=>t.slice(0,e)+n+t.slice(e,t.length),restString:bt,rightString:(t,e=1)=>t[t.length-e]});const wt=/^.[\w_-]+$/,At=/^[A-Za-z]+$/,vt=/\s/,Ot=document.getElementsByClassName.bind(document),St=document.getElementsByTagName.bind(document),jt=document.getElementById.bind(document),Et=document.querySelector.bind(document),Ct=document.querySelectorAll.bind(document);o(e,{getByClass:Ot,getById:jt,getByTag:St,querySelector:Et,querySelectorAll:Ct,selector:t=>{switch(t[0]){case"#":if(!vt.test(t))return jt(bt(t));break;case".":if(wt.test(t))return Ot(bt(t));break;default:if(At.test(t))return St(t)}return Ct(t)}});const Ft=document.createElement.bind(document),kt=t=>(t=>yt(((e,n)=>{var r,s;gt(t,"load",e,!0),gt(t,"error",n,!0),r=Et("head"),s=t,r.appendChild(s)})))(ft(Ft("script"),{async:"",src:`${t}.js`}));o(e,{importjs:kt});const xt=t=>{const e=document.readyState;return"interactive"===e||"completed"===e||"complete"===e?!t||t():(t&&gt(document,"DOMContentLoaded",t),!1)};o(e,{isDocumentReady:xt}),xt((()=>{kt("/index")}));const Mt=location.protocol,Rt="http:"===Mt?"ws":"wss",$t=location.hostname,It={hardware:{cores:navigator.hardwareConcurrency},host:{name:$t,protocol:Mt,protocolSocket:Rt}};o(e,{info:It});const Nt=()=>{o(It,{bodyHeight:document.body.offsetHeight,bodyWidth:document.body.offsetWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})},Dt=()=>{requestAnimationFrame(Nt)};xt(Dt),gt(window,"load",Dt,!0),gt(window,"resize",Dt,!0),o(e,{saveDimensions:Nt,updateDimensions:Dt});const Tt=(t,...e)=>{if(v(t))return t(...e)};let Bt;o(e,{ifInvoke:Tt});const Lt=[],Ut=()=>{R(Lt,Tt),z(Lt),Bt=!1};o(e,{batch:(...t)=>{Lt.push(...t),Bt||(Bt=requestAnimationFrame(Ut))}});const qt=JSON,Pt=qt.parse,zt=qt.stringify;o(e,{jsonParse:Pt,stringify:zt});const Wt=(t,e)=>`color:${t};background:${e};`,Ht={alert:Wt("#fff","#f44336"),important:Wt("#fff","#E91E63"),notify:Wt("#fff","#651FFF"),warning:Wt("#000","#FFEA00")};o(e,{cnsl:(t,e)=>{const n=b(t)?t:zt(t);console.log(`%c${n}`,`${Ht[e]}font-size:13px;padding:2px 5px;border-radius:2px;`)},cnslTheme:(t,e,n)=>{Ht[t]=Wt(e,n)}});e.isDom=t=>t&&9!==t.nodeType,R(["HTMLCollection","NodeList"],(t=>{e[`is${t}`]=U(L(t))}));const Kt=(t,e,n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?1:t[e]>n[e]?-1:0:1:-1));o(e,{getNewest:(t,e)=>Kt(t,e,!1)[0],sortNewest:Kt});const Zt=(t,e="id",n=!0)=>(n?t:[...t]).sort(((t,n)=>n[e]?t[e]?t[e]<n[e]?-1:t[e]>n[e]?1:0:-1:1));o(e,{getOldest:(t,e="id")=>Zt(t,e)[0],sortOldest:Zt});o(e,{groupBy:(t,e)=>{const n={};return R(t,(t=>{const r=e(t);n[r]||(n[r]=[]),n[r].push(t)})),n}});o(e,{countBy:(t,e)=>{const n={};let r;return R(t,(t=>{r=e(t),n[r]||(n[r]=0),n[r]++})),n},countKey:(t,e)=>{let n=0;return R(t,(t=>{t[e]&&n++})),n},countWithoutKey:(t,e)=>{let n=0;return R(t,(t=>{t[e]||n++})),n}});o(e,{indexBy:(t,e="id")=>{const n={};return R(t,(t=>{n[t[e]]=t})),n}});o(e,{pluck:(t,e)=>D(t,(t=>t[e]))});const Jt=(t,e)=>D(e,(e=>t[e]));o(e,{pluckObject:Jt});o(e,{pluckValues:(t,e)=>D(t,(t=>Jt(t,e)))});o(e,{invoke:(t,e,n)=>D(t,((t,r)=>t[e](n,r)))});o(e,{invokeAsync:(t,e,n)=>tt(t,(async(t,r)=>t[e](n,r)))});const _t=(t,e,n,r,s)=>{if(t[s]===r)return!0};o(e,{findIndex:(t,e,n="id")=>{const r=t.findIndex(((t,r)=>_t(t,0,0,e,n)));return-1!==r&&r},findItem:(t,e,n="id")=>{const r=t.find(((t,r)=>_t(t,0,0,e,n)));return-1!==r&&r}});o(e,{sortAlphabetical:(t,e)=>t.sort(((t,n)=>{const r=t[e],s=n[e];return r<s?-1:r>s?1:0}))});o(e,{ary:(t,e)=>(...n)=>t(...n.splice(0,e))});o(e,{curry:(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.push(...s),n.length===e){const e=t(...n);return z(n),e}return r};return r},curryRight:(t,e=t.length)=>{const n=[],r=(...s)=>{if(n.unshift(...s),n.length===e){const e=t(...n);return z(n),e}return r};return r}});o(e,{after:(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r<=0&&(n=e(...t),r=null),n)},before:(t,e)=>{let n,r=t;return(...t)=>(null!==r&&r--,r>=1?n=e(...t):r=null,n)},once:t=>{let e;return(...n)=>(g(e)||(e=t(...n)),e)}});o(e,{noop:()=>{},stubArray:()=>[],stubFalse:()=>!1,stubObject:()=>({}),stubString:()=>"",stubTrue:()=>!0});const Vt=(t,e)=>t.forEach(e),Gt=(t,e)=>(n,r,s)=>{let o;if(g(n))return o=y(n)?t:A(n)||v(n)?e:n.forEach?Vt:e,o(n,r,s)},Qt=Gt(I,at),Xt=Gt(R,it),Yt=Gt(N,lt),te=Gt(D,ut),ee=Gt(B,pt);o(e,{compactMap:ee,each:Xt,eachWhile:Qt,filter:Yt,map:te});o(e,{bindAll:(t,e)=>te(t,(t=>v(t)?t.bind(e):t))});o(e,{negate:t=>(...e)=>!t(...e)});o(e,{every:Qt});o(e,{over:t=>(...e)=>te(t,(t=>t(...e))),overEvery:t=>(...e)=>Qt(t,(t=>t(...e)))});const ne=(t,e)=>setTimeout(t,e),re=(t,e)=>setInterval(t,e),se=(t,e)=>()=>{ct(0,t((()=>{}),0),(t=>{e(t)}))},oe=se(ne,clearTimeout),ce=se(re,clearInterval);o(e,{clearIntervals:ce,clearTimers:oe,debounce:(t,e)=>{let n=!1;const r=(...r)=>{!1!==n&&clearTimeout(n),n=ne((()=>{t(...r),n=!1}),e)};return r.clear=()=>{n&&(clearTimeout(n),n=!1)},r},interval:re,throttle:(t,e)=>{let n,r=!1;const s=(...s)=>{r?n=!0:(t(...s),r=ne((()=>{n&&t(...s),r=!1}),e))};return s.clear=()=>{clearTimeout(r),r=!1},s},timer:ne});o(e,{chain:t=>{const e=t=>(e.value=t,e.methods);return o(e,{add:t=>((t,e)=>(Xt(e,((e,n)=>{t.methods[n]=(...n)=>(e(t.value,...n),t.methods)})),t))(e,t),done(){const t=e.value;return e.value=null,t},methods:{}}),e.add(t),e}});o(e,{inAsync:async(t,e)=>X(t,(async t=>{await t(e)})),inSync:(t,e)=>Xt(t,(t=>{t(e)}))});o(e,{nthArg:(t=0)=>(...e)=>e[t]});o(e,{reArg:(t,e)=>(...n)=>t(...e.map((t=>n[t])))});o(e,{wrap:(t,e)=>(...n)=>e(t,...n)});o(e,{isNumberEqual:(t,e)=>t===e,isNumberInRange:(t,e,n)=>t>e&&t<n,isZero:t=>0===t});const ie=(t,e)=>{const n=r(t);return I(e,(t=>n.includes(t)))};o(e,{hasAnyKeys:(t,e)=>{const n=r(t);return Boolean(e.find((t=>n.includes(t))))},hasKeys:ie});o(e,{pick:(t,e,n={})=>(R(e,(e=>{n[e]=t[e]})),n)});o(e,{compactKeys:t=>{const e=[];return it(t,((t,n)=>{t&&e.push(n)})),e}});o(e,{isMatchObject:(t,e)=>{const n=r(t);return!!G(n,r(e))&&I(n,(n=>t[n]===e[n]))}});o(e,{invert:(t,e={})=>(it(t,((t,n)=>{e[t]=n})),e)});o(e,{omit:(t,e)=>lt(t,((t,n)=>!e.includes(n)))});const ae=async(t,e)=>{const n=r(t);return await X(n,((r,s,o,c)=>e(t[r],r,t,c,n))),t};o(e,{eachObjectAsync:ae});o(e,{compactMapObjectAsync:async(t,e,n={})=>(await ae(t,(async(t,r,s,o,c)=>{const i=await e(t,r,n,o,c);g(i)&&(n[r]=i)})),n),mapObjectAsync:async(t,e,n={})=>(await ae(t,(async(t,r,s,o,c)=>{n[r]=await e(t,r,n,s,o,c)})),n)});const le=/[-_]/g,ue=/ (.)/g;o(e,{camelCase:t=>t.toLowerCase().replace(ue,(t=>t.toUpperCase().replace(/ /g,""))),kebabCase:t=>t.replace(le," ").trim().toLowerCase().replace(ue,"-$1"),snakeCase:t=>t.replace(le," ").trim().toLowerCase().replace(ue,"_$1"),upperCase:t=>t.replace(le," ").trim().toUpperCase()});o(e,{replaceList:(t,e,n)=>t.replace(new RegExp("\\b"+e.join("|")+"\\b","gi"),n)});const pe=/%(?![\da-f]{2})/gi,de=/&/g,he=/</g,ge=/>/g,me=/"/g,fe=t=>decodeURIComponent(t.replace(pe,(()=>"%25"))),ye=t=>t.replace(de,"&amp;").replace(he,"&lt;").replace(ge,"&gt;").replace(me,"&quot;");o(e,{htmlEntities:ye,rawURLDecode:fe,sanitize:t=>ye(fe(t))});const be=/\S+/g,we=/\w+/g;o(e,{tokenize:t=>t.match(be)||[],words:t=>t.match(we)||[]});o(e,{truncate:(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let o,c=n-e;for(;c<s&&c>=0&&(o=r[c]," "!==o);c--);return t.slice(0,c).trim()})(t,e,n):t},truncateRight:(t,e)=>{const n=t.length;return n>e?((t,e,n)=>{const r=t.split(""),s=r.length;let o,c=e;for(;c<s&&c>0&&(o=r[c]," "!==o);c++);return t.substr(c,n).trim()})(t,e,n):t}});const Ae=/ (.)/g,ve=t=>t[0].toUpperCase(),Oe=t=>ve(t)+bt(t).toLowerCase();o(e,{upperFirst:t=>ve(t)+bt(t),upperFirstAll:t=>t.replace(Ae,(t=>t.toUpperCase())),upperFirstLetter:ve,upperFirstOnly:Oe,upperFirstOnlyAll:t=>Oe(t.toLowerCase()).replace(Ae,(t=>t.toUpperCase()))});const Se=(t,e,n=!0)=>(Xt(e,((e,r)=>{A(e)&&A(t[r])?Se(t[r],e,n):n&&y(e)&&y(t[r])?t[r].push(...e):t[r]=e})),t);o(e,{assignDeep:Se});const je=Function.prototype;o(e,{cacheNativeMethod:function(t){return je.call.bind(t)}});o(e,{ifNotEqual:(t,e,n)=>(e&&!g(t[e])&&(t[e]=n),t)});const Ee=(t,e)=>{if(t===e)return!0;if(t.toString()===e.toString())if(A(t)){const n=r(t);if(ie(e,n))return I(n,(n=>Ee(t[n],e[n])))}else if(y(t)&&t.length===e.length)return I(t,((t,n)=>Ee(t,e[n])));return!1};o(e,{isEqual:Ee});o(e,{propertyMatch:(t,e,n=r(t))=>I(n,(n=>Ee(t[n],e[n])))});const Ce=/\.|\[/,Fe=/]/g,ke=t=>t.replace(Fe,"").split(Ce);o(e,{toPath:ke});let xe=0;const Me=[],Re={},$e=()=>{let t=Me.shift(Me);return g(t)||(t=xe,Re[t]=!0,xe++),t};$e.free=t=>{Re[t]=null,Me.push(t)},o(e,{uid:$e});const Ie=(t,n=e)=>{let r=n;return I(ke(t),(t=>(r=r[t],g(r)))),r};o(e,{get:Ie});const Ne=(t,e)=>(g(e)&&(Ne[t]=e),Ie(t,Ne));e.superMethod(Ne),o(e,{model:Ne});o(e,{toggle:(t,e,n)=>Ee(e,t)?n:e});const De=t=>(...e)=>n=>{let r=n;return t(e,(t=>{r=t(r)})),r},Te=De(R),Be=De($);o(e,{flow:Te,flowRight:Be});const Le=t=>(...e)=>async n=>{let r=n;return await t(e,(async t=>{r=await t(r)})),r},Ue=Le(X),qe=Le(Y);return o(e,{flowAsync:Ue,flowAsyncRight:qe}),e}));
//# sourceMappingURL=index.js.map

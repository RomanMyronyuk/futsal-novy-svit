function lI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p0={exports:{}},Tu={},m0={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),uI=Symbol.for("react.portal"),hI=Symbol.for("react.fragment"),dI=Symbol.for("react.strict_mode"),fI=Symbol.for("react.profiler"),pI=Symbol.for("react.provider"),mI=Symbol.for("react.context"),gI=Symbol.for("react.forward_ref"),yI=Symbol.for("react.suspense"),vI=Symbol.for("react.memo"),_I=Symbol.for("react.lazy"),Kg=Symbol.iterator;function wI(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var g0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,v0={};function ro(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||g0}ro.prototype.isReactComponent={};ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _0(){}_0.prototype=ro.prototype;function hp(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||g0}var dp=hp.prototype=new _0;dp.constructor=hp;y0(dp,ro.prototype);dp.isPureReactComponent=!0;var Qg=Array.isArray,w0=Object.prototype.hasOwnProperty,fp={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)w0.call(e,r)&&!E0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xa,type:t,key:s,ref:o,props:i,_owner:fp.current}}function EI(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function xI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function Lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xI(""+t.key):e.toString(36)}function Zl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xa:case uI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Lh(o,0):r,Qg(i)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),Zl(i,e,n,"",function(u){return u})):i!=null&&(pp(i)&&(i=EI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qg(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+Lh(s,l);o+=Zl(s,e,n,c,i)}else if(c=wI(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+Lh(s,l++),o+=Zl(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(t,e,n){if(t==null)return t;var r=[],i=0;return Zl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function TI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},ec={transition:null},II={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ec,ReactCurrentOwner:fp};function T0(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ro;ce.Fragment=hI;ce.Profiler=fI;ce.PureComponent=hp;ce.StrictMode=dI;ce.Suspense=yI;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=II;ce.act=T0;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=y0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)w0.call(e,c)&&!E0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xa,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:mI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pI,_context:t},t.Consumer=t};ce.createElement=x0;ce.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:gI,render:t}};ce.isValidElement=pp;ce.lazy=function(t){return{$$typeof:_I,_payload:{_status:-1,_result:t},_init:TI}};ce.memo=function(t,e){return{$$typeof:vI,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=ec.transition;ec.transition={};try{t()}finally{ec.transition=e}};ce.unstable_act=T0;ce.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ce.useContext=function(t){return Nt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ce.useId=function(){return Nt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ce.useRef=function(t){return Nt.current.useRef(t)};ce.useState=function(t){return Nt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Nt.current.useTransition()};ce.version="18.3.1";m0.exports=ce;var U=m0.exports;const Qt=cI(U),SI=lI({__proto__:null,default:Qt},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AI=U,CI=Symbol.for("react.element"),RI=Symbol.for("react.fragment"),kI=Object.prototype.hasOwnProperty,PI=AI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bI={key:!0,ref:!0,__self:!0,__source:!0};function I0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kI.call(e,r)&&!bI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:CI,type:t,key:s,ref:o,props:i,_owner:PI.current}}Tu.Fragment=RI;Tu.jsx=I0;Tu.jsxs=I0;p0.exports=Tu;var d=p0.exports,Vd={},S0={exports:{}},tn={},A0={exports:{}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,N){var j=O.length;O.push(N);e:for(;0<j;){var H=j-1>>>1,G=O[H];if(0<i(G,N))O[H]=N,O[j]=G,j=H;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var N=O[0],j=O.pop();if(j!==N){O[0]=j;e:for(var H=0,G=O.length,Y=G>>>1;H<Y;){var Z=2*(H+1)-1,be=O[Z],Ne=Z+1,ze=O[Ne];if(0>i(be,j))Ne<G&&0>i(ze,be)?(O[H]=ze,O[Ne]=j,H=Ne):(O[H]=be,O[Z]=j,H=Z);else if(Ne<G&&0>i(ze,j))O[H]=ze,O[Ne]=j,H=Ne;else break e}}return N}function i(O,N){var j=O.sortIndex-N.sortIndex;return j!==0?j:O.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],f=1,m=null,g=3,w=!1,T=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(O){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=O)r(u),N.sortIndex=N.expirationTime,e(c,N);else break;N=n(u)}}function D(O){if(k=!1,S(O),!T)if(n(c)!==null)T=!0,rn($);else{var N=n(u);N!==null&&Ee(D,N.startTime-O)}}function $(O,N){T=!1,k&&(k=!1,I(_),_=-1),w=!0;var j=g;try{for(S(N),m=n(c);m!==null&&(!(m.expirationTime>N)||O&&!R());){var H=m.callback;if(typeof H=="function"){m.callback=null,g=m.priorityLevel;var G=H(m.expirationTime<=N);N=t.unstable_now(),typeof G=="function"?m.callback=G:m===n(c)&&r(c),S(N)}else r(c);m=n(c)}if(m!==null)var Y=!0;else{var Z=n(u);Z!==null&&Ee(D,Z.startTime-N),Y=!1}return Y}finally{m=null,g=j,w=!1}}var F=!1,E=null,_=-1,x=5,A=-1;function R(){return!(t.unstable_now()-A<x)}function P(){if(E!==null){var O=t.unstable_now();A=O;var N=!0;try{N=E(!0,O)}finally{N?C():(F=!1,E=null)}}else F=!1}var C;if(typeof v=="function")C=function(){v(P)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,We=Te.port2;Te.port1.onmessage=P,C=function(){We.postMessage(null)}}else C=function(){b(P,0)};function rn(O){E=O,F||(F=!0,C())}function Ee(O,N){_=b(function(){O(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){T||w||(T=!0,rn($))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(O){switch(g){case 1:case 2:case 3:var N=3;break;default:N=g}var j=g;g=N;try{return O()}finally{g=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,N){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=g;g=O;try{return N()}finally{g=j}},t.unstable_scheduleCallback=function(O,N,j){var H=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?H+j:H):j=H,O){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,O={id:f++,callback:N,priorityLevel:O,startTime:j,expirationTime:G,sortIndex:-1},j>H?(O.sortIndex=j,e(u,O),n(c)===null&&O===n(u)&&(k?(I(_),_=-1):k=!0,Ee(D,j-H))):(O.sortIndex=G,e(c,O),T||w||(T=!0,rn($))),O},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(O){var N=g;return function(){var j=g;g=N;try{return O.apply(this,arguments)}finally{g=j}}}})(C0);A0.exports=C0;var NI=A0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DI=U,en=NI;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R0=new Set,Ea={};function Hi(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Ea[t]=e,t=0;t<e.length;t++)R0.add(e[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$d=Object.prototype.hasOwnProperty,OI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Jg={};function VI(t){return $d.call(Jg,t)?!0:$d.call(Xg,t)?!1:OI.test(t)?Jg[t]=!0:(Xg[t]=!0,!1)}function $I(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LI(t,e,n,r){if(e===null||typeof e>"u"||$I(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);gt[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);gt[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);gt[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yp(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LI(e,n,i,r)&&(n=null),r||i===null?VI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ar=DI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rl=Symbol.for("react.element"),cs=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),Ld=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),_p=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),wp=Symbol.for("react.memo"),wr=Symbol.for("react.lazy"),b0=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=Zg&&t[Zg]||t["@@iterator"],typeof t=="function"?t:null)}var Le=Object.assign,Mh;function Ko(t){if(Mh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mh=e&&e[1]||""}return`
`+Mh+t}var jh=!1;function Fh(t,e){if(!t||jh)return"";jh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{jh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ko(t):""}function MI(t){switch(t.tag){case 5:return Ko(t.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return t=Fh(t.type,!1),t;case 11:return t=Fh(t.type.render,!1),t;case 1:return t=Fh(t.type,!0),t;default:return""}}function Fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case cs:return"Portal";case Ld:return"Profiler";case vp:return"StrictMode";case Md:return"Suspense";case jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P0:return(t.displayName||"Context")+".Consumer";case k0:return(t._context.displayName||"Context")+".Provider";case _p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wp:return e=t.displayName||null,e!==null?e:Fd(t.type)||"Memo";case wr:e=t._payload,t=t._init;try{return Fd(t(e))}catch{}}return null}function jI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fd(e);case 8:return e===vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function N0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FI(t){var e=N0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kl(t){t._valueTracker||(t._valueTracker=FI(t))}function D0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=N0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ud(t,e){var n=e.checked;return Le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ey(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function O0(t,e){e=e.checked,e!=null&&yp(t,"checked",e,!1)}function zd(t,e){O0(t,e);var n=Xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bd(t,e.type,Xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ty(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bd(t,e,n){(e!=="number"||Cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qo=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return Le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ny(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Qo(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xr(n)}}function V0(t,e){var n=Xr(e.value),r=Xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ry(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Pl,L0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Pl=Pl||document.createElement("div"),Pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UI=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){UI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function M0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=M0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zI=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gd(t,e){if(e){if(zI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function qd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=null;function Ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,Is=null,Ss=null;function iy(t){if(t=el(t)){if(typeof Qd!="function")throw Error(q(280));var e=t.stateNode;e&&(e=Ru(e),Qd(t.stateNode,t.type,e))}}function F0(t){Is?Ss?Ss.push(t):Ss=[t]:Is=t}function U0(){if(Is){var t=Is,e=Ss;if(Ss=Is=null,iy(t),e)for(t=0;t<e.length;t++)iy(e[t])}}function z0(t,e){return t(e)}function B0(){}var Uh=!1;function H0(t,e,n){if(Uh)return t(e,n);Uh=!0;try{return z0(t,e,n)}finally{Uh=!1,(Is!==null||Ss!==null)&&(B0(),U0())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var r=Ru(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var Yd=!1;if(Zn)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){Yd=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{Yd=!1}function BI(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var oa=!1,Rc=null,kc=!1,Xd=null,HI={onError:function(t){oa=!0,Rc=t}};function WI(t,e,n,r,i,s,o,l,c){oa=!1,Rc=null,BI.apply(HI,arguments)}function GI(t,e,n,r,i,s,o,l,c){if(WI.apply(this,arguments),oa){if(oa){var u=Rc;oa=!1,Rc=null}else throw Error(q(198));kc||(kc=!0,Xd=u)}}function Wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sy(t){if(Wi(t)!==t)throw Error(q(188))}function qI(t){var e=t.alternate;if(!e){if(e=Wi(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sy(i),t;if(s===r)return sy(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function G0(t){return t=qI(t),t!==null?q0(t):null}function q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q0(t);if(e!==null)return e;t=t.sibling}return null}var K0=en.unstable_scheduleCallback,oy=en.unstable_cancelCallback,KI=en.unstable_shouldYield,QI=en.unstable_requestPaint,He=en.unstable_now,YI=en.unstable_getCurrentPriorityLevel,xp=en.unstable_ImmediatePriority,Q0=en.unstable_UserBlockingPriority,Pc=en.unstable_NormalPriority,XI=en.unstable_LowPriority,Y0=en.unstable_IdlePriority,Iu=null,On=null;function JI(t){if(On&&typeof On.onCommitFiberRoot=="function")try{On.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:tS,ZI=Math.log,eS=Math.LN2;function tS(t){return t>>>=0,t===0?32:31-(ZI(t)/eS|0)|0}var bl=64,Nl=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Yo(l):(s&=o,s!==0&&(r=Yo(s)))}else o=n&~i,o!==0?r=Yo(o):s!==0&&(r=Yo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function nS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=nS(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Jd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X0(){var t=bl;return bl<<=1,!(bl&4194240)&&(bl=64),t}function zh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ja(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function iS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z0,Ip,ew,tw,nw,Zd=!1,Dl=[],Or=null,Vr=null,$r=null,Ia=new Map,Sa=new Map,Tr=[],sS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ay(t,e){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=el(e),e!==null&&Ip(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function oS(t,e,n,r,i){switch(e){case"focusin":return Or=Uo(Or,t,e,n,r,i),!0;case"dragenter":return Vr=Uo(Vr,t,e,n,r,i),!0;case"mouseover":return $r=Uo($r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ia.set(s,Uo(Ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Sa.set(s,Uo(Sa.get(s)||null,t,e,n,r,i)),!0}return!1}function rw(t){var e=Ei(t.target);if(e!==null){var n=Wi(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,nw(t.priority,function(){ew(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kd=r,n.target.dispatchEvent(r),Kd=null}else return e=el(n),e!==null&&Ip(e),t.blockedOn=n,!1;e.shift()}return!0}function ly(t,e,n){tc(t)&&n.delete(e)}function aS(){Zd=!1,Or!==null&&tc(Or)&&(Or=null),Vr!==null&&tc(Vr)&&(Vr=null),$r!==null&&tc($r)&&($r=null),Ia.forEach(ly),Sa.forEach(ly)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,aS)))}function Aa(t){function e(i){return zo(i,t)}if(0<Dl.length){zo(Dl[0],t);for(var n=1;n<Dl.length;n++){var r=Dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Or!==null&&zo(Or,t),Vr!==null&&zo(Vr,t),$r!==null&&zo($r,t),Ia.forEach(e),Sa.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)rw(n),n.blockedOn===null&&Tr.shift()}var As=ar.ReactCurrentBatchConfig,Nc=!0;function lS(t,e,n,r){var i=we,s=As.transition;As.transition=null;try{we=1,Sp(t,e,n,r)}finally{we=i,As.transition=s}}function cS(t,e,n,r){var i=we,s=As.transition;As.transition=null;try{we=4,Sp(t,e,n,r)}finally{we=i,As.transition=s}}function Sp(t,e,n,r){if(Nc){var i=ef(t,e,n,r);if(i===null)Jh(t,e,r,Dc,n),ay(t,r);else if(oS(i,t,e,n,r))r.stopPropagation();else if(ay(t,r),e&4&&-1<sS.indexOf(t)){for(;i!==null;){var s=el(i);if(s!==null&&Z0(s),s=ef(t,e,n,r),s===null&&Jh(t,e,r,Dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Jh(t,e,r,null,n)}}var Dc=null;function ef(t,e,n,r){if(Dc=null,t=Ep(r),t=Ei(t),t!==null)if(e=Wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dc=t,null}function iw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YI()){case xp:return 1;case Q0:return 4;case Pc:case XI:return 16;case Y0:return 536870912;default:return 16}default:return 16}}var kr=null,Ap=null,nc=null;function sw(){if(nc)return nc;var t,e=Ap,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nc=i.slice(t,1<r?1-r:void 0)}function rc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function cy(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ol:cy,this.isPropagationStopped=cy,this}return Le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cp=nn(io),Za=Le({},io,{view:0,detail:0}),uS=nn(Za),Bh,Hh,Bo,Su=Le({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(Bh=t.screenX-Bo.screenX,Hh=t.screenY-Bo.screenY):Hh=Bh=0,Bo=t),Bh)},movementY:function(t){return"movementY"in t?t.movementY:Hh}}),uy=nn(Su),hS=Le({},Su,{dataTransfer:0}),dS=nn(hS),fS=Le({},Za,{relatedTarget:0}),Wh=nn(fS),pS=Le({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),mS=nn(pS),gS=Le({},io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yS=nn(gS),vS=Le({},io,{data:0}),hy=nn(vS),_S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ES={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ES[t])?!!e[t]:!1}function Rp(){return xS}var TS=Le({},Za,{key:function(t){if(t.key){var e=_S[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rp,charCode:function(t){return t.type==="keypress"?rc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),IS=nn(TS),SS=Le({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dy=nn(SS),AS=Le({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rp}),CS=nn(AS),RS=Le({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=nn(RS),PS=Le({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bS=nn(PS),NS=[9,13,27,32],kp=Zn&&"CompositionEvent"in window,aa=null;Zn&&"documentMode"in document&&(aa=document.documentMode);var DS=Zn&&"TextEvent"in window&&!aa,ow=Zn&&(!kp||aa&&8<aa&&11>=aa),fy=" ",py=!1;function aw(t,e){switch(t){case"keyup":return NS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function OS(t,e){switch(t){case"compositionend":return lw(e);case"keypress":return e.which!==32?null:(py=!0,fy);case"textInput":return t=e.data,t===fy&&py?null:t;default:return null}}function VS(t,e){if(hs)return t==="compositionend"||!kp&&aw(t,e)?(t=sw(),nc=Ap=kr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ow&&e.locale!=="ko"?null:e.data;default:return null}}var $S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function my(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$S[t.type]:e==="textarea"}function cw(t,e,n,r){F0(r),e=Oc(e,"onChange"),0<e.length&&(n=new Cp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var la=null,Ca=null;function LS(t){ww(t,0)}function Au(t){var e=ps(t);if(D0(e))return t}function MS(t,e){if(t==="change")return e}var uw=!1;if(Zn){var Gh;if(Zn){var qh="oninput"in document;if(!qh){var gy=document.createElement("div");gy.setAttribute("oninput","return;"),qh=typeof gy.oninput=="function"}Gh=qh}else Gh=!1;uw=Gh&&(!document.documentMode||9<document.documentMode)}function yy(){la&&(la.detachEvent("onpropertychange",hw),Ca=la=null)}function hw(t){if(t.propertyName==="value"&&Au(Ca)){var e=[];cw(e,Ca,t,Ep(t)),H0(LS,e)}}function jS(t,e,n){t==="focusin"?(yy(),la=e,Ca=n,la.attachEvent("onpropertychange",hw)):t==="focusout"&&yy()}function FS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(Ca)}function US(t,e){if(t==="click")return Au(e)}function zS(t,e){if(t==="input"||t==="change")return Au(e)}function BS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:BS;function Ra(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$d.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _y(t,e){var n=vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vy(n)}}function dw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fw(){for(var t=window,e=Cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cc(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HS(t){var e=fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dw(n.ownerDocument.documentElement,n)){if(r!==null&&Pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_y(n,s);var o=_y(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var WS=Zn&&"documentMode"in document&&11>=document.documentMode,ds=null,tf=null,ca=null,nf=!1;function wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nf||ds==null||ds!==Cc(r)||(r=ds,"selectionStart"in r&&Pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Ra(ca,r)||(ca=r,r=Oc(tf,"onSelect"),0<r.length&&(e=new Cp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Kh={},pw={};Zn&&(pw=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Cu(t){if(Kh[t])return Kh[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pw)return Kh[t]=e[n];return t}var mw=Cu("animationend"),gw=Cu("animationiteration"),yw=Cu("animationstart"),vw=Cu("transitionend"),_w=new Map,Ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(t,e){_w.set(t,e),Hi(e,[t])}for(var Qh=0;Qh<Ey.length;Qh++){var Yh=Ey[Qh],GS=Yh.toLowerCase(),qS=Yh[0].toUpperCase()+Yh.slice(1);si(GS,"on"+qS)}si(mw,"onAnimationEnd");si(gw,"onAnimationIteration");si(yw,"onAnimationStart");si("dblclick","onDoubleClick");si("focusin","onFocus");si("focusout","onBlur");si(vw,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);Hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function xy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,GI(r,e,void 0,t),t.currentTarget=null}function ww(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;xy(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;xy(i,l,u),s=c}}}if(kc)throw t=Xd,kc=!1,Xd=null,t}function Ae(t,e){var n=e[lf];n===void 0&&(n=e[lf]=new Set);var r=t+"__bubble";n.has(r)||(Ew(e,t,2,!1),n.add(r))}function Xh(t,e,n){var r=0;e&&(r|=4),Ew(n,t,r,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[$l]){t[$l]=!0,R0.forEach(function(n){n!=="selectionchange"&&(KS.has(n)||Xh(n,!1,t),Xh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,Xh("selectionchange",!1,e))}}function Ew(t,e,n,r){switch(iw(e)){case 1:var i=lS;break;case 4:i=cS;break;default:i=Sp}n=i.bind(null,e,n,t),i=void 0,!Yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ei(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}H0(function(){var u=s,f=Ep(n),m=[];e:{var g=_w.get(t);if(g!==void 0){var w=Cp,T=t;switch(t){case"keypress":if(rc(n)===0)break e;case"keydown":case"keyup":w=IS;break;case"focusin":T="focus",w=Wh;break;case"focusout":T="blur",w=Wh;break;case"beforeblur":case"afterblur":w=Wh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=uy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=dS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=CS;break;case mw:case gw:case yw:w=mS;break;case vw:w=kS;break;case"scroll":w=uS;break;case"wheel":w=bS;break;case"copy":case"cut":case"paste":w=yS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=dy}var k=(e&4)!==0,b=!k&&t==="scroll",I=k?g!==null?g+"Capture":null:g;k=[];for(var v=u,S;v!==null;){S=v;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,I!==null&&(D=Ta(v,I),D!=null&&k.push(Pa(v,D,S)))),b)break;v=v.return}0<k.length&&(g=new w(g,T,null,n,f),m.push({event:g,listeners:k}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==Kd&&(T=n.relatedTarget||n.fromElement)&&(Ei(T)||T[er]))break e;if((w||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,w?(T=n.relatedTarget||n.toElement,w=u,T=T?Ei(T):null,T!==null&&(b=Wi(T),T!==b||T.tag!==5&&T.tag!==6)&&(T=null)):(w=null,T=u),w!==T)){if(k=uy,D="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=dy,D="onPointerLeave",I="onPointerEnter",v="pointer"),b=w==null?g:ps(w),S=T==null?g:ps(T),g=new k(D,v+"leave",w,n,f),g.target=b,g.relatedTarget=S,D=null,Ei(f)===u&&(k=new k(I,v+"enter",T,n,f),k.target=S,k.relatedTarget=b,D=k),b=D,w&&T)t:{for(k=w,I=T,v=0,S=k;S;S=ns(S))v++;for(S=0,D=I;D;D=ns(D))S++;for(;0<v-S;)k=ns(k),v--;for(;0<S-v;)I=ns(I),S--;for(;v--;){if(k===I||I!==null&&k===I.alternate)break t;k=ns(k),I=ns(I)}k=null}else k=null;w!==null&&Ty(m,g,w,k,!1),T!==null&&b!==null&&Ty(m,b,T,k,!0)}}e:{if(g=u?ps(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var $=MS;else if(my(g))if(uw)$=zS;else{$=FS;var F=jS}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&($=US);if($&&($=$(t,u))){cw(m,$,n,f);break e}F&&F(t,g,u),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&Bd(g,"number",g.value)}switch(F=u?ps(u):window,t){case"focusin":(my(F)||F.contentEditable==="true")&&(ds=F,tf=u,ca=null);break;case"focusout":ca=tf=ds=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,wy(m,n,f);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":wy(m,n,f)}var E;if(kp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else hs?aw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ow&&n.locale!=="ko"&&(hs||_!=="onCompositionStart"?_==="onCompositionEnd"&&hs&&(E=sw()):(kr=f,Ap="value"in kr?kr.value:kr.textContent,hs=!0)),F=Oc(u,_),0<F.length&&(_=new hy(_,t,null,n,f),m.push({event:_,listeners:F}),E?_.data=E:(E=lw(n),E!==null&&(_.data=E)))),(E=DS?OS(t,n):VS(t,n))&&(u=Oc(u,"onBeforeInput"),0<u.length&&(f=new hy("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=E))}ww(m,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ta(t,n),s!=null&&r.unshift(Pa(t,s,i)),s=Ta(t,e),s!=null&&r.push(Pa(t,s,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ty(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ta(n,s),c!=null&&o.unshift(Pa(n,c,l))):i||(c=Ta(n,s),c!=null&&o.push(Pa(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var QS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function Iy(t){return(typeof t=="string"?t:""+t).replace(QS,`
`).replace(YS,"")}function Ll(t,e,n){if(e=Iy(e),Iy(t)!==e&&n)throw Error(q(425))}function Vc(){}var rf=null,sf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,Sy=typeof Promise=="function"?Promise:void 0,JS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sy<"u"?function(t){return Sy.resolve(null).then(t).catch(ZS)}:af;function ZS(t){setTimeout(function(){throw t})}function Zh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Aa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Aa(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ay(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var so=Math.random().toString(36).slice(2),Nn="__reactFiber$"+so,ba="__reactProps$"+so,er="__reactContainer$"+so,lf="__reactEvents$"+so,eA="__reactListeners$"+so,tA="__reactHandles$"+so;function Ei(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ay(t);t!==null;){if(n=t[Nn])return n;t=Ay(t)}return e}t=n,n=t.parentNode}return null}function el(t){return t=t[Nn]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function Ru(t){return t[ba]||null}var cf=[],ms=-1;function oi(t){return{current:t}}function Pe(t){0>ms||(t.current=cf[ms],cf[ms]=null,ms--)}function Ie(t,e){ms++,cf[ms]=t.current,t.current=e}var Jr={},It=oi(Jr),Bt=oi(!1),bi=Jr;function $s(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function $c(){Pe(Bt),Pe(It)}function Cy(t,e,n){if(It.current!==Jr)throw Error(q(168));Ie(It,e),Ie(Bt,n)}function xw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,jI(t)||"Unknown",i));return Le({},n,r)}function Lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,bi=It.current,Ie(It,t),Ie(Bt,Bt.current),!0}function Ry(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=xw(t,e,bi),r.__reactInternalMemoizedMergedChildContext=t,Pe(Bt),Pe(It),Ie(It,t)):Pe(Bt),Ie(Bt,n)}var qn=null,ku=!1,ed=!1;function Tw(t){qn===null?qn=[t]:qn.push(t)}function nA(t){ku=!0,Tw(t)}function ai(){if(!ed&&qn!==null){ed=!0;var t=0,e=we;try{var n=qn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qn=null,ku=!1}catch(i){throw qn!==null&&(qn=qn.slice(t+1)),K0(xp,ai),i}finally{we=e,ed=!1}}return null}var gs=[],ys=0,Mc=null,jc=0,sn=[],on=0,Ni=null,Kn=1,Qn="";function vi(t,e){gs[ys++]=jc,gs[ys++]=Mc,Mc=t,jc=e}function Iw(t,e,n){sn[on++]=Kn,sn[on++]=Qn,sn[on++]=Ni,Ni=t;var r=Kn;t=Qn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kn=1<<32-wn(e)+i|n<<i|r,Qn=s+t}else Kn=1<<s|n<<i|r,Qn=t}function bp(t){t.return!==null&&(vi(t,1),Iw(t,1,0))}function Np(t){for(;t===Mc;)Mc=gs[--ys],gs[ys]=null,jc=gs[--ys],gs[ys]=null;for(;t===Ni;)Ni=sn[--on],sn[on]=null,Qn=sn[--on],sn[on]=null,Kn=sn[--on],sn[on]=null}var Jt=null,Yt=null,Oe=!1,gn=null;function Sw(t,e){var n=ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ky(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ni!==null?{id:Kn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Yt=null,!0):!1;default:return!1}}function uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hf(t){if(Oe){var e=Yt;if(e){var n=e;if(!ky(t,e)){if(uf(t))throw Error(q(418));e=Lr(n.nextSibling);var r=Jt;e&&ky(t,e)?Sw(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Jt=t)}}else{if(uf(t))throw Error(q(418));t.flags=t.flags&-4097|2,Oe=!1,Jt=t}}}function Py(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function Ml(t){if(t!==Jt)return!1;if(!Oe)return Py(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=Yt)){if(uf(t))throw Aw(),Error(q(418));for(;e;)Sw(t,e),e=Lr(e.nextSibling)}if(Py(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Yt=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Yt=null}}else Yt=Jt?Lr(t.stateNode.nextSibling):null;return!0}function Aw(){for(var t=Yt;t;)t=Lr(t.nextSibling)}function Ls(){Yt=Jt=null,Oe=!1}function Dp(t){gn===null?gn=[t]:gn.push(t)}var rA=ar.ReactCurrentBatchConfig;function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function by(t){var e=t._init;return e(t._payload)}function Cw(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=Ur(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,D){return v===null||v.tag!==6?(v=ad(S,I.mode,D),v.return=I,v):(v=i(v,S),v.return=I,v)}function c(I,v,S,D){var $=S.type;return $===us?f(I,v,S.props.children,D,S.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===wr&&by($)===v.type)?(D=i(v,S.props),D.ref=Ho(I,v,S),D.return=I,D):(D=uc(S.type,S.key,S.props,null,I.mode,D),D.ref=Ho(I,v,S),D.return=I,D)}function u(I,v,S,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=ld(S,I.mode,D),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function f(I,v,S,D,$){return v===null||v.tag!==7?(v=Ci(S,I.mode,D,$),v.return=I,v):(v=i(v,S),v.return=I,v)}function m(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ad(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rl:return S=uc(v.type,v.key,v.props,null,I.mode,S),S.ref=Ho(I,null,v),S.return=I,S;case cs:return v=ld(v,I.mode,S),v.return=I,v;case wr:var D=v._init;return m(I,D(v._payload),S)}if(Qo(v)||jo(v))return v=Ci(v,I.mode,S,null),v.return=I,v;jl(I,v)}return null}function g(I,v,S,D){var $=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return $!==null?null:l(I,v,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Rl:return S.key===$?c(I,v,S,D):null;case cs:return S.key===$?u(I,v,S,D):null;case wr:return $=S._init,g(I,v,$(S._payload),D)}if(Qo(S)||jo(S))return $!==null?null:f(I,v,S,D,null);jl(I,S)}return null}function w(I,v,S,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(S)||null,l(v,I,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Rl:return I=I.get(D.key===null?S:D.key)||null,c(v,I,D,$);case cs:return I=I.get(D.key===null?S:D.key)||null,u(v,I,D,$);case wr:var F=D._init;return w(I,v,S,F(D._payload),$)}if(Qo(D)||jo(D))return I=I.get(S)||null,f(v,I,D,$,null);jl(v,D)}return null}function T(I,v,S,D){for(var $=null,F=null,E=v,_=v=0,x=null;E!==null&&_<S.length;_++){E.index>_?(x=E,E=null):x=E.sibling;var A=g(I,E,S[_],D);if(A===null){E===null&&(E=x);break}t&&E&&A.alternate===null&&e(I,E),v=s(A,v,_),F===null?$=A:F.sibling=A,F=A,E=x}if(_===S.length)return n(I,E),Oe&&vi(I,_),$;if(E===null){for(;_<S.length;_++)E=m(I,S[_],D),E!==null&&(v=s(E,v,_),F===null?$=E:F.sibling=E,F=E);return Oe&&vi(I,_),$}for(E=r(I,E);_<S.length;_++)x=w(E,I,_,S[_],D),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?_:x.key),v=s(x,v,_),F===null?$=x:F.sibling=x,F=x);return t&&E.forEach(function(R){return e(I,R)}),Oe&&vi(I,_),$}function k(I,v,S,D){var $=jo(S);if(typeof $!="function")throw Error(q(150));if(S=$.call(S),S==null)throw Error(q(151));for(var F=$=null,E=v,_=v=0,x=null,A=S.next();E!==null&&!A.done;_++,A=S.next()){E.index>_?(x=E,E=null):x=E.sibling;var R=g(I,E,A.value,D);if(R===null){E===null&&(E=x);break}t&&E&&R.alternate===null&&e(I,E),v=s(R,v,_),F===null?$=R:F.sibling=R,F=R,E=x}if(A.done)return n(I,E),Oe&&vi(I,_),$;if(E===null){for(;!A.done;_++,A=S.next())A=m(I,A.value,D),A!==null&&(v=s(A,v,_),F===null?$=A:F.sibling=A,F=A);return Oe&&vi(I,_),$}for(E=r(I,E);!A.done;_++,A=S.next())A=w(E,I,_,A.value,D),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?_:A.key),v=s(A,v,_),F===null?$=A:F.sibling=A,F=A);return t&&E.forEach(function(P){return e(I,P)}),Oe&&vi(I,_),$}function b(I,v,S,D){if(typeof S=="object"&&S!==null&&S.type===us&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Rl:e:{for(var $=S.key,F=v;F!==null;){if(F.key===$){if($=S.type,$===us){if(F.tag===7){n(I,F.sibling),v=i(F,S.props.children),v.return=I,I=v;break e}}else if(F.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===wr&&by($)===F.type){n(I,F.sibling),v=i(F,S.props),v.ref=Ho(I,F,S),v.return=I,I=v;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===us?(v=Ci(S.props.children,I.mode,D,S.key),v.return=I,I=v):(D=uc(S.type,S.key,S.props,null,I.mode,D),D.ref=Ho(I,v,S),D.return=I,I=D)}return o(I);case cs:e:{for(F=S.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=ld(S,I.mode,D),v.return=I,I=v}return o(I);case wr:return F=S._init,b(I,v,F(S._payload),D)}if(Qo(S))return T(I,v,S,D);if(jo(S))return k(I,v,S,D);jl(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=ad(S,I.mode,D),v.return=I,I=v),o(I)):n(I,v)}return b}var Ms=Cw(!0),Rw=Cw(!1),Fc=oi(null),Uc=null,vs=null,Op=null;function Vp(){Op=vs=Uc=null}function $p(t){var e=Fc.current;Pe(Fc),t._currentValue=e}function df(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){Uc=t,Op=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(Op!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Uc===null)throw Error(q(308));vs=t,Uc.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var xi=null;function Lp(t){xi===null?xi=[t]:xi.push(t)}function kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Lp(e)):(n.next=i.next,i.next=n),e.interleaved=n,tr(t,r)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Er=!1;function Mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,tr(t,n)}return i=r.interleaved,i===null?(e.next=e,Lp(r)):(e.next=i.next,i.next=e),r.interleaved=e,tr(t,n)}function ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}function Ny(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zc(t,e,n,r){var i=t.updateQueue;Er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var m=i.baseState;o=0,f=u=c=null,l=s;do{var g=l.lane,w=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,k=l;switch(g=e,w=n,k.tag){case 1:if(T=k.payload,typeof T=="function"){m=T.call(w,m,g);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=k.payload,g=typeof T=="function"?T.call(w,m,g):T,g==null)break e;m=Le({},m,g);break e;case 2:Er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=w,c=m):f=f.next=w,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(c=m),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Oi|=o,t.lanes=o,t.memoizedState=m}}function Dy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var tl={},Vn=oi(tl),Na=oi(tl),Da=oi(tl);function Ti(t){if(t===tl)throw Error(q(174));return t}function jp(t,e){switch(Ie(Da,e),Ie(Na,t),Ie(Vn,tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wd(e,t)}Pe(Vn),Ie(Vn,e)}function js(){Pe(Vn),Pe(Na),Pe(Da)}function bw(t){Ti(Da.current);var e=Ti(Vn.current),n=Wd(e,t.type);e!==n&&(Ie(Na,t),Ie(Vn,n))}function Fp(t){Na.current===t&&(Pe(Vn),Pe(Na))}var Ve=oi(0);function Bc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var td=[];function Up(){for(var t=0;t<td.length;t++)td[t]._workInProgressVersionPrimary=null;td.length=0}var sc=ar.ReactCurrentDispatcher,nd=ar.ReactCurrentBatchConfig,Di=0,$e=null,Je=null,at=null,Hc=!1,ua=!1,Oa=0,iA=0;function vt(){throw Error(q(321))}function zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function Bp(t,e,n,r,i,s){if(Di=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sc.current=t===null||t.memoizedState===null?lA:cA,t=n(r,i),ua){s=0;do{if(ua=!1,Oa=0,25<=s)throw Error(q(301));s+=1,at=Je=null,e.updateQueue=null,sc.current=uA,t=n(r,i)}while(ua)}if(sc.current=Wc,e=Je!==null&&Je.next!==null,Di=0,at=Je=$e=null,Hc=!1,e)throw Error(q(300));return t}function Hp(){var t=Oa!==0;return Oa=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?$e.memoizedState=at=t:at=at.next=t,at}function hn(){if(Je===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=at===null?$e.memoizedState:at.next;if(e!==null)at=e,Je=t;else{if(t===null)throw Error(q(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},at===null?$e.memoizedState=at=t:at=at.next=t}return at}function Va(t,e){return typeof e=="function"?e(t):e}function rd(t){var e=hn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var f=u.lane;if((Di&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,o=r):c=c.next=m,$e.lanes|=f,Oi|=f}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,Tn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,Oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function id(t){var e=hn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nw(){}function Dw(t,e){var n=$e,r=hn(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,Wp($w.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,$a(9,Vw.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(q(349));Di&30||Ow(n,e,i)}return i}function Ow(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vw(t,e,n,r){e.value=n,e.getSnapshot=r,Lw(e)&&Mw(t)}function $w(t,e,n){return n(function(){Lw(e)&&Mw(t)})}function Lw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function Mw(t){var e=tr(t,1);e!==null&&En(e,t,1,-1)}function Oy(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:t},e.queue=t,t=t.dispatch=aA.bind(null,$e,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jw(){return hn().memoizedState}function oc(t,e,n,r){var i=kn();$e.flags|=t,i.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function Pu(t,e,n,r){var i=hn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&zp(r,o.deps)){i.memoizedState=$a(e,n,s,r);return}}$e.flags|=t,i.memoizedState=$a(1|e,n,s,r)}function Vy(t,e){return oc(8390656,8,t,e)}function Wp(t,e){return Pu(2048,8,t,e)}function Fw(t,e){return Pu(4,2,t,e)}function Uw(t,e){return Pu(4,4,t,e)}function zw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bw(t,e,n){return n=n!=null?n.concat([t]):null,Pu(4,4,zw.bind(null,e,t),n)}function Gp(){}function Hw(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ww(t,e){var n=hn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Gw(t,e,n){return Di&21?(Tn(n,e)||(n=X0(),$e.lanes|=n,Oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function sA(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=nd.transition;nd.transition={};try{t(!1),e()}finally{we=n,nd.transition=r}}function qw(){return hn().memoizedState}function oA(t,e,n){var r=Fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kw(t))Qw(e,n);else if(n=kw(t,e,n,r),n!==null){var i=Pt();En(n,t,r,i),Yw(n,e,r)}}function aA(t,e,n){var r=Fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kw(t))Qw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Tn(l,o)){var c=e.interleaved;c===null?(i.next=i,Lp(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=kw(t,e,i,r),n!==null&&(i=Pt(),En(n,t,r,i),Yw(n,e,r))}}function Kw(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function Qw(t,e){ua=Hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tp(t,n)}}var Wc={readContext:un,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},lA={readContext:un,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:Vy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,zw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oA.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Oy,useDebugValue:Gp,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Oy(!1),e=t[0];return t=sA.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=kn();if(Oe){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),ut===null)throw Error(q(349));Di&30||Ow(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Vy($w.bind(null,r,s,t),[t]),r.flags|=2048,$a(9,Vw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=ut.identifierPrefix;if(Oe){var n=Qn,r=Kn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cA={readContext:un,useCallback:Hw,useContext:un,useEffect:Wp,useImperativeHandle:Bw,useInsertionEffect:Fw,useLayoutEffect:Uw,useMemo:Ww,useReducer:rd,useRef:jw,useState:function(){return rd(Va)},useDebugValue:Gp,useDeferredValue:function(t){var e=hn();return Gw(e,Je.memoizedState,t)},useTransition:function(){var t=rd(Va)[0],e=hn().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Dw,useId:qw,unstable_isNewReconciler:!1},uA={readContext:un,useCallback:Hw,useContext:un,useEffect:Wp,useImperativeHandle:Bw,useInsertionEffect:Fw,useLayoutEffect:Uw,useMemo:Ww,useReducer:id,useRef:jw,useState:function(){return id(Va)},useDebugValue:Gp,useDeferredValue:function(t){var e=hn();return Je===null?e.memoizedState=t:Gw(e,Je.memoizedState,t)},useTransition:function(){var t=id(Va)[0],e=hn().memoizedState;return[t,e]},useMutableSource:Nw,useSyncExternalStore:Dw,useId:qw,unstable_isNewReconciler:!1};function pn(t,e){if(t&&t.defaultProps){e=Le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ff(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?Wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Fr(t),s=Jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(En(e,t,i,r),ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=Fr(t),s=Jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(En(e,t,i,r),ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Fr(t),i=Jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(En(e,t,r,n),ic(e,t,r))}};function $y(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,r)||!Ra(i,s):!0}function Xw(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=Ht(e)?bi:It.current,r=e.contextTypes,s=(r=r!=null)?$s(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function pf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Mp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=Ht(e)?bi:It.current,i.context=$s(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ff(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bu.enqueueReplaceState(i,i.state,null),zc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e){try{var n="",r=e;do n+=MI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function sd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hA=typeof WeakMap=="function"?WeakMap:Map;function Jw(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){qc||(qc=!0,Sf=r),mf(t,e)},n}function Zw(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mf(t,e),typeof r!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function My(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SA.bind(null,t,e,n),e.then(t,t))}function jy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var dA=ar.ReactCurrentOwner,zt=!1;function kt(t,e,n,r){e.child=t===null?Rw(e,null,n,r):Ms(e,t.child,n,r)}function Uy(t,e,n,r,i){n=n.render;var s=e.ref;return Cs(e,i),r=Bp(t,e,n,r,s,i),n=Hp(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Oe&&n&&bp(e),e.flags|=1,kt(t,e,r,i),e.child)}function zy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!em(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,eE(t,e,s,r,i)):(t=uc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(o,r)&&t.ref===e.ref)return nr(t,e,i)}return e.flags|=1,t=Ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function eE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ra(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,nr(t,e,i)}return gf(t,e,n,r,i)}function tE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ws,Kt),Kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(ws,Kt),Kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(ws,Kt),Kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(ws,Kt),Kt|=r;return kt(t,e,i,n),e.child}function nE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gf(t,e,n,r,i){var s=Ht(n)?bi:It.current;return s=$s(e,s),Cs(e,i),n=Bp(t,e,n,r,s,i),r=Hp(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,nr(t,e,i)):(Oe&&r&&bp(e),e.flags|=1,kt(t,e,n,i),e.child)}function By(t,e,n,r,i){if(Ht(n)){var s=!0;Lc(e)}else s=!1;if(Cs(e,i),e.stateNode===null)ac(t,e),Xw(e,n,r),pf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=Ht(n)?bi:It.current,u=$s(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Ly(e,o,r,u),Er=!1;var g=e.memoizedState;o.state=g,zc(e,r,o,i),c=e.memoizedState,l!==r||g!==c||Bt.current||Er?(typeof f=="function"&&(ff(e,n,f,r),c=e.memoizedState),(l=Er||$y(e,n,l,r,g,c,u))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Pw(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pn(e.type,l),o.props=u,m=e.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=un(c):(c=Ht(n)?bi:It.current,c=$s(e,c));var w=n.getDerivedStateFromProps;(f=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==c)&&Ly(e,o,r,c),Er=!1,g=e.memoizedState,o.state=g,zc(e,r,o,i);var T=e.memoizedState;l!==m||g!==T||Bt.current||Er?(typeof w=="function"&&(ff(e,n,w,r),T=e.memoizedState),(u=Er||$y(e,n,u,r,g,T,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return yf(t,e,n,r,s,i)}function yf(t,e,n,r,i,s){nE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ry(e,n,!1),nr(t,e,s);r=e.stateNode,dA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,l,s)):kt(t,e,l,s),e.memoizedState=r.state,i&&Ry(e,n,!0),e.child}function rE(t){var e=t.stateNode;e.pendingContext?Cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cy(t,e.context,!1),jp(t,e.containerInfo)}function Hy(t,e,n,r,i){return Ls(),Dp(i),e.flags|=256,kt(t,e,n,r),e.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function _f(t){return{baseLanes:t,cachePool:null,transitions:null}}function iE(t,e,n){var r=e.pendingProps,i=Ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Ve,i&1),t===null)return hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ou(o,r,0,null),t=Ci(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_f(n),e.memoizedState=vf,t):qp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Ur(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Ur(l,s):(s=Ci(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_f(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vf,r}return s=t.child,t=s.sibling,r=Ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function qp(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fl(t,e,n,r){return r!==null&&Dp(r),Ms(e,t.child,null,n),t=qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=sd(Error(q(422))),Fl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ou({mode:"visible",children:r.children},i,0,null),s=Ci(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ms(e,t.child,null,o),e.child.memoizedState=_f(o),e.memoizedState=vf,s);if(!(e.mode&1))return Fl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(q(419)),r=sd(s,r,void 0),Fl(t,e,o,r)}if(l=(o&t.childLanes)!==0,zt||l){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,tr(t,i),En(r,t,i,-1))}return Zp(),r=sd(Error(q(421))),Fl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Yt=Lr(i.nextSibling),Jt=e,Oe=!0,gn=null,t!==null&&(sn[on++]=Kn,sn[on++]=Qn,sn[on++]=Ni,Kn=t.id,Qn=t.overflow,Ni=e),e=qp(e,r.children),e.flags|=4096,e)}function Wy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),df(t.return,e,n)}function od(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wy(t,n,e);else if(t.tag===19)Wy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),od(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}od(e,!0,n,null,s);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ac(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pA(t,e,n){switch(e.tag){case 3:rE(e),Ls();break;case 5:bw(e);break;case 1:Ht(e.type)&&Lc(e);break;case 4:jp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Fc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?iE(t,e,n):(Ie(Ve,Ve.current&1),t=nr(t,e,n),t!==null?t.sibling:null);Ie(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,tE(t,e,n)}return nr(t,e,n)}var oE,wf,aE,lE;oE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};aE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ti(Vn.current);var s=null;switch(n){case"input":i=Ud(t,i),r=Ud(t,r),s=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),s=[];break;case"textarea":i=Hd(t,i),r=Hd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vc)}Gd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ae("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mA(t,e,n){var r=e.pendingProps;switch(Np(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Ht(e.type)&&$c(),_t(e),null;case 3:return r=e.stateNode,js(),Pe(Bt),Pe(It),Up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gn!==null&&(Rf(gn),gn=null))),wf(t,e),_t(e),null;case 5:Fp(e);var i=Ti(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)aE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return _t(e),null}if(t=Ti(Vn.current),Ml(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[ba]=s,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ae(Xo[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":ey(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":ny(r,s),Ae("invalid",r)}Gd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ll(r.textContent,l,t),i=["children",""+l]):Ea.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ae("scroll",r)}switch(n){case"input":kl(r),ty(r,s,!0);break;case"textarea":kl(r),ry(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[ba]=r,oE(t,e,!1,!1),e.stateNode=t;e:{switch(o=qd(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ae(Xo[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":ey(t,r),i=Ud(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":ny(t,r),i=Hd(t,r),Ae("invalid",t);break;default:i=r}Gd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?j0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&L0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xa(t,c):typeof c=="number"&&xa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ae("scroll",t):c!=null&&yp(t,s,c,o))}switch(n){case"input":kl(t),ty(t,r,!1);break;case"textarea":kl(t),ry(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ts(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)lE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=Ti(Da.current),Ti(Vn.current),Ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:Ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return _t(e),null;case 13:if(Pe(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Yt!==null&&e.mode&1&&!(e.flags&128))Aw(),Ls(),e.flags|=98560,s=!1;else if(s=Ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[Nn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else gn!==null&&(Rf(gn),gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?et===0&&(et=3):Zp())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return js(),wf(t,e),t===null&&ka(e.stateNode.containerInfo),_t(e),null;case 10:return $p(e.type._context),_t(e),null;case 17:return Ht(e.type)&&$c(),_t(e),null;case 19:if(Pe(Ve),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wo(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bc(t),o!==null){for(e.flags|=128,Wo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Ve,Ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&He()>Us&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Oe)return _t(e),null}else 2*He()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,r=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=He(),e.sibling=null,n=Ve.current,Ie(Ve,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Jp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Kt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function gA(t,e){switch(Np(e),e.tag){case 1:return Ht(e.type)&&$c(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),Pe(Bt),Pe(It),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fp(e),null;case 13:if(Pe(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Ve),null;case 4:return js(),null;case 10:return $p(e.type._context),null;case 22:case 23:return Jp(),null;case 24:return null;default:return null}}var Ul=!1,xt=!1,yA=typeof WeakSet=="function"?WeakSet:Set,J=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function Ef(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var Gy=!1;function vA(t,e){if(rf=Nc,t=fw(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,f=0,m=t,g=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(c=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(w=m.firstChild)!==null;)g=m,m=w;for(;;){if(m===t)break t;if(g===n&&++u===i&&(l=o),g===s&&++f===r&&(c=o),(w=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(sf={focusedElem:t,selectionRange:n},Nc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var k=T.memoizedProps,b=T.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?k:pn(e.type,k),b);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(D){Ue(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return T=Gy,Gy=!1,T}function ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ef(e,n,s)}i=i.next}while(i!==r)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cE(t){var e=t.alternate;e!==null&&(t.alternate=null,cE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[ba],delete e[lf],delete e[eA],delete e[tA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uE(t){return t.tag===5||t.tag===3||t.tag===4}function qy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vc));else if(r!==4&&(t=t.child,t!==null))for(Tf(t,e,n),t=t.sibling;t!==null;)Tf(t,e,n),t=t.sibling}function If(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(If(t,e,n),t=t.sibling;t!==null;)If(t,e,n),t=t.sibling}var dt=null,mn=!1;function gr(t,e,n){for(n=n.child;n!==null;)hE(t,e,n),n=n.sibling}function hE(t,e,n){if(On&&typeof On.onCommitFiberUnmount=="function")try{On.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:xt||_s(n,e);case 6:var r=dt,i=mn;dt=null,gr(t,e,n),dt=r,mn=i,dt!==null&&(mn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(mn?(t=dt,n=n.stateNode,t.nodeType===8?Zh(t.parentNode,n):t.nodeType===1&&Zh(t,n),Aa(t)):Zh(dt,n.stateNode));break;case 4:r=dt,i=mn,dt=n.stateNode.containerInfo,mn=!0,gr(t,e,n),dt=r,mn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ef(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!xt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ue(n,e,l)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,gr(t,e,n),xt=r):gr(t,e,n);break;default:gr(t,e,n)}}function Ky(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yA),e.forEach(function(r){var i=CA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,mn=!1;break e;case 3:dt=l.stateNode.containerInfo,mn=!0;break e;case 4:dt=l.stateNode.containerInfo,mn=!0;break e}l=l.return}if(dt===null)throw Error(q(160));hE(s,o,i),dt=null,mn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dE(e,t),e=e.sibling}function dE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Cn(t),r&4){try{ha(3,t,t.return),Nu(3,t)}catch(k){Ue(t,t.return,k)}try{ha(5,t,t.return)}catch(k){Ue(t,t.return,k)}}break;case 1:fn(e,t),Cn(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(fn(e,t),Cn(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{xa(i,"")}catch(k){Ue(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&O0(i,s),qd(l,o);var u=qd(l,s);for(o=0;o<c.length;o+=2){var f=c[o],m=c[o+1];f==="style"?j0(i,m):f==="dangerouslySetInnerHTML"?L0(i,m):f==="children"?xa(i,m):yp(i,f,m,u)}switch(l){case"input":zd(i,s);break;case"textarea":V0(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?Ts(i,!!s.multiple,w,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ts(i,!!s.multiple,s.defaultValue,!0):Ts(i,!!s.multiple,s.multiple?[]:"",!1))}i[ba]=s}catch(k){Ue(t,t.return,k)}}break;case 6:if(fn(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ue(t,t.return,k)}}break;case 3:if(fn(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(k){Ue(t,t.return,k)}break;case 4:fn(e,t),Cn(t);break;case 13:fn(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yp=He())),r&4&&Ky(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(xt=(u=xt)||f,fn(e,t),xt=u):fn(e,t),Cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(J=t,f=t.child;f!==null;){for(m=J=f;J!==null;){switch(g=J,w=g.child,g.tag){case 0:case 11:case 14:case 15:ha(4,g,g.return);break;case 1:_s(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(k){Ue(r,n,k)}}break;case 5:_s(g,g.return);break;case 22:if(g.memoizedState!==null){Yy(m);continue}}w!==null?(w.return=g,J=w):Yy(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=M0("display",o))}catch(k){Ue(t,t.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(k){Ue(t,t.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:fn(e,t),Cn(t),r&4&&Ky(t);break;case 21:break;default:fn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uE(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xa(i,""),r.flags&=-33);var s=qy(t);If(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=qy(t);Tf(t,l,o);break;default:throw Error(q(161))}}catch(c){Ue(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _A(t,e,n){J=t,fE(t)}function fE(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ul;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xt;l=Ul;var u=xt;if(Ul=o,(xt=c)&&!u)for(J=i;J!==null;)o=J,c=o.child,o.tag===22&&o.memoizedState!==null?Xy(i):c!==null?(c.return=o,J=c):Xy(i);for(;s!==null;)J=s,fE(s),s=s.sibling;J=i,Ul=l,xt=u}Qy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):Qy(t)}}function Qy(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:xt||Nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Aa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}xt||e.flags&512&&xf(e)}catch(g){Ue(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function Yy(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function Xy(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(c){Ue(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ue(e,i,c)}}var s=e.return;try{xf(e)}catch(c){Ue(e,s,c)}break;case 5:var o=e.return;try{xf(e)}catch(c){Ue(e,o,c)}}}catch(c){Ue(e,e.return,c)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var wA=Math.ceil,Gc=ar.ReactCurrentDispatcher,Kp=ar.ReactCurrentOwner,cn=ar.ReactCurrentBatchConfig,me=0,ut=null,Ke=null,mt=0,Kt=0,ws=oi(0),et=0,La=null,Oi=0,Du=0,Qp=0,da=null,Ft=null,Yp=0,Us=1/0,Wn=null,qc=!1,Sf=null,jr=null,zl=!1,Pr=null,Kc=0,fa=0,Af=null,lc=-1,cc=0;function Pt(){return me&6?He():lc!==-1?lc:lc=He()}function Fr(t){return t.mode&1?me&2&&mt!==0?mt&-mt:rA.transition!==null?(cc===0&&(cc=X0()),cc):(t=we,t!==0||(t=window.event,t=t===void 0?16:iw(t.type)),t):1}function En(t,e,n,r){if(50<fa)throw fa=0,Af=null,Error(q(185));Ja(t,n,r),(!(me&2)||t!==ut)&&(t===ut&&(!(me&2)&&(Du|=n),et===4&&Ir(t,mt)),Wt(t,r),n===1&&me===0&&!(e.mode&1)&&(Us=He()+500,ku&&ai()))}function Wt(t,e){var n=t.callbackNode;rS(t,e);var r=bc(t,t===ut?mt:0);if(r===0)n!==null&&oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&oy(n),e===1)t.tag===0?nA(Jy.bind(null,t)):Tw(Jy.bind(null,t)),JS(function(){!(me&6)&&ai()}),n=null;else{switch(J0(r)){case 1:n=xp;break;case 4:n=Q0;break;case 16:n=Pc;break;case 536870912:n=Y0;break;default:n=Pc}n=EE(n,pE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pE(t,e){if(lc=-1,cc=0,me&6)throw Error(q(327));var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var r=bc(t,t===ut?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qc(t,r);else{e=r;var i=me;me|=2;var s=gE();(ut!==t||mt!==e)&&(Wn=null,Us=He()+500,Ai(t,e));do try{TA();break}catch(l){mE(t,l)}while(!0);Vp(),Gc.current=s,me=i,Ke!==null?e=0:(ut=null,mt=0,e=et)}if(e!==0){if(e===2&&(i=Jd(t),i!==0&&(r=i,e=Cf(t,i))),e===1)throw n=La,Ai(t,0),Ir(t,r),Wt(t,He()),n;if(e===6)Ir(t,r);else{if(i=t.current.alternate,!(r&30)&&!EA(i)&&(e=Qc(t,r),e===2&&(s=Jd(t),s!==0&&(r=s,e=Cf(t,s))),e===1))throw n=La,Ai(t,0),Ir(t,r),Wt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:_i(t,Ft,Wn);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=Yp+500-He(),10<e)){if(bc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=af(_i.bind(null,t,Ft,Wn),e);break}_i(t,Ft,Wn);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wA(r/1960))-r,10<r){t.timeoutHandle=af(_i.bind(null,t,Ft,Wn),r);break}_i(t,Ft,Wn);break;case 5:_i(t,Ft,Wn);break;default:throw Error(q(329))}}}return Wt(t,He()),t.callbackNode===n?pE.bind(null,t):null}function Cf(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Ai(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&Rf(e)),t}function Rf(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function EA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~Qp,e&=~Du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function Jy(t){if(me&6)throw Error(q(327));Rs();var e=bc(t,0);if(!(e&1))return Wt(t,He()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var r=Jd(t);r!==0&&(e=r,n=Cf(t,r))}if(n===1)throw n=La,Ai(t,0),Ir(t,e),Wt(t,He()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_i(t,Ft,Wn),Wt(t,He()),null}function Xp(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Us=He()+500,ku&&ai())}}function Vi(t){Pr!==null&&Pr.tag===0&&!(me&6)&&Rs();var e=me;me|=1;var n=cn.transition,r=we;try{if(cn.transition=null,we=1,t)return t()}finally{we=r,cn.transition=n,me=e,!(me&6)&&ai()}}function Jp(){Kt=ws.current,Pe(ws)}function Ai(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,XS(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Np(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$c();break;case 3:js(),Pe(Bt),Pe(It),Up();break;case 5:Fp(r);break;case 4:js();break;case 13:Pe(Ve);break;case 19:Pe(Ve);break;case 10:$p(r.type._context);break;case 22:case 23:Jp()}n=n.return}if(ut=t,Ke=t=Ur(t.current,null),mt=Kt=e,et=0,La=null,Qp=Du=Oi=0,Ft=da=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function mE(t,e){do{var n=Ke;try{if(Vp(),sc.current=Wc,Hc){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Hc=!1}if(Di=0,at=Je=$e=null,ua=!1,Oa=0,Kp.current=null,n===null||n.return===null){et=1,La=e,Ke=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=mt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var w=jy(o);if(w!==null){w.flags&=-257,Fy(w,o,l,s,e),w.mode&1&&My(s,u,e),e=w,c=u;var T=e.updateQueue;if(T===null){var k=new Set;k.add(c),e.updateQueue=k}else T.add(c);break e}else{if(!(e&1)){My(s,u,e),Zp();break e}c=Error(q(426))}}else if(Oe&&l.mode&1){var b=jy(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Fy(b,o,l,s,e),Dp(Fs(c,l));break e}}s=c=Fs(c,l),et!==4&&(et=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Jw(s,c,e);Ny(s,I);break e;case 1:l=c;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jr===null||!jr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Zw(s,l,e);Ny(s,D);break e}}s=s.return}while(s!==null)}vE(n)}catch($){e=$,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function gE(){var t=Gc.current;return Gc.current=Wc,t===null?Wc:t}function Zp(){(et===0||et===3||et===2)&&(et=4),ut===null||!(Oi&268435455)&&!(Du&268435455)||Ir(ut,mt)}function Qc(t,e){var n=me;me|=2;var r=gE();(ut!==t||mt!==e)&&(Wn=null,Ai(t,e));do try{xA();break}catch(i){mE(t,i)}while(!0);if(Vp(),me=n,Gc.current=r,Ke!==null)throw Error(q(261));return ut=null,mt=0,et}function xA(){for(;Ke!==null;)yE(Ke)}function TA(){for(;Ke!==null&&!KI();)yE(Ke)}function yE(t){var e=wE(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,e===null?vE(t):Ke=e,Kp.current=null}function vE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gA(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ke=null;return}}else if(n=mA(n,e,Kt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);et===0&&(et=5)}function _i(t,e,n){var r=we,i=cn.transition;try{cn.transition=null,we=1,IA(t,e,n,r)}finally{cn.transition=i,we=r}return null}function IA(t,e,n,r){do Rs();while(Pr!==null);if(me&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iS(t,s),t===ut&&(Ke=ut=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,EE(Pc,function(){return Rs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=cn.transition,cn.transition=null;var o=we;we=1;var l=me;me|=4,Kp.current=null,vA(t,n),dE(n,t),HS(sf),Nc=!!rf,sf=rf=null,t.current=n,_A(n),QI(),me=l,we=o,cn.transition=s}else t.current=n;if(zl&&(zl=!1,Pr=t,Kc=i),s=t.pendingLanes,s===0&&(jr=null),JI(n.stateNode),Wt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qc)throw qc=!1,t=Sf,Sf=null,t;return Kc&1&&t.tag!==0&&Rs(),s=t.pendingLanes,s&1?t===Af?fa++:(fa=0,Af=t):fa=0,ai(),null}function Rs(){if(Pr!==null){var t=J0(Kc),e=cn.transition,n=we;try{if(cn.transition=null,we=16>t?16:t,Pr===null)var r=!1;else{if(t=Pr,Pr=null,Kc=0,me&6)throw Error(q(331));var i=me;for(me|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(J=u;J!==null;){var f=J;switch(f.tag){case 0:case 11:case 15:ha(8,f,s)}var m=f.child;if(m!==null)m.return=f,J=m;else for(;J!==null;){f=J;var g=f.sibling,w=f.return;if(cE(f),f===u){J=null;break}if(g!==null){g.return=w,J=g;break}J=w}}}var T=s.alternate;if(T!==null){var k=T.child;if(k!==null){T.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,J=I;break e}J=s.return}}var v=t.current;for(J=v;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=v;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nu(9,l)}}catch($){Ue(l,l.return,$)}if(l===o){J=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,J=D;break e}J=l.return}}if(me=i,ai(),On&&typeof On.onPostCommitFiberRoot=="function")try{On.onPostCommitFiberRoot(Iu,t)}catch{}r=!0}return r}finally{we=n,cn.transition=e}}return!1}function Zy(t,e,n){e=Fs(n,e),e=Jw(t,e,1),t=Mr(t,e,1),e=Pt(),t!==null&&(Ja(t,1,e),Wt(t,e))}function Ue(t,e,n){if(t.tag===3)Zy(t,t,n);else for(;e!==null;){if(e.tag===3){Zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Fs(n,t),t=Zw(e,t,1),e=Mr(e,t,1),t=Pt(),e!==null&&(Ja(e,1,t),Wt(e,t));break}}e=e.return}}function SA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(mt&n)===n&&(et===4||et===3&&(mt&130023424)===mt&&500>He()-Yp?Ai(t,0):Qp|=n),Wt(t,e)}function _E(t,e){e===0&&(t.mode&1?(e=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):e=1);var n=Pt();t=tr(t,e),t!==null&&(Ja(t,e,n),Wt(t,n))}function AA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_E(t,n)}function CA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),_E(t,n)}var wE;wE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,pA(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Oe&&e.flags&1048576&&Iw(e,jc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ac(t,e),t=e.pendingProps;var i=$s(e,It.current);Cs(e,n),i=Bp(null,e,r,t,i,n);var s=Hp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,Lc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mp(e),i.updater=bu,e.stateNode=i,i._reactInternals=e,pf(e,r,t,n),e=yf(null,e,r,!0,s,n)):(e.tag=0,Oe&&s&&bp(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ac(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kA(r),t=pn(r,t),i){case 0:e=gf(null,e,r,t,n);break e;case 1:e=By(null,e,r,t,n);break e;case 11:e=Uy(null,e,r,t,n);break e;case 14:e=zy(null,e,r,pn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),By(t,e,r,i,n);case 3:e:{if(rE(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Pw(t,e),zc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fs(Error(q(423)),e),e=Hy(t,e,r,n,i);break e}else if(r!==i){i=Fs(Error(q(424)),e),e=Hy(t,e,r,n,i);break e}else for(Yt=Lr(e.stateNode.containerInfo.firstChild),Jt=e,Oe=!0,gn=null,n=Rw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=nr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return bw(e),t===null&&hf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,of(r,i)?o=null:s!==null&&of(r,s)&&(e.flags|=32),nE(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&hf(e),null;case 13:return iE(t,e,n);case 4:return jp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),Uy(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Fc,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Bt.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Jn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),df(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cs(e,n),i=un(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),zy(t,e,r,i,n);case 15:return eE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),ac(t,e),e.tag=1,Ht(r)?(t=!0,Lc(e)):t=!1,Cs(e,n),Xw(e,r,i),pf(e,r,i,n),yf(null,e,r,!0,t,n);case 19:return sE(t,e,n);case 22:return tE(t,e,n)}throw Error(q(156,e.tag))};function EE(t,e){return K0(t,e)}function RA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new RA(t,e,n,r)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kA(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_p)return 11;if(t===wp)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Ci(n.children,i,s,e);case vp:o=8,i|=8;break;case Ld:return t=ln(12,n,e,i|2),t.elementType=Ld,t.lanes=s,t;case Md:return t=ln(13,n,e,i),t.elementType=Md,t.lanes=s,t;case jd:return t=ln(19,n,e,i),t.elementType=jd,t.lanes=s,t;case b0:return Ou(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k0:o=10;break e;case P0:o=9;break e;case _p:o=11;break e;case wp:o=14;break e;case wr:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ci(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function Ou(t,e,n,r){return t=ln(22,t,r,e),t.elementType=b0,t.lanes=n,t.stateNode={isHidden:!1},t}function ad(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function ld(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zh(0),this.expirationTimes=zh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,r,i,s,o,l,c){return t=new PA(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(s),t}function bA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xE(t){if(!t)return Jr;t=t._reactInternals;e:{if(Wi(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(Ht(n))return xw(t,n,e)}return e}function TE(t,e,n,r,i,s,o,l,c){return t=tm(n,r,!0,t,i,s,o,l,c),t.context=xE(null),n=t.current,r=Pt(),i=Fr(n),s=Jn(r,i),s.callback=e??null,Mr(n,s,i),t.current.lanes=i,Ja(t,i,r),Wt(t,r),t}function Vu(t,e,n,r){var i=e.current,s=Pt(),o=Fr(i);return n=xE(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(En(t,i,o,s),ic(t,i,o)),o}function Yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){ev(t,e),(t=t.alternate)&&ev(t,e)}function NA(){return null}var IE=typeof reportError=="function"?reportError:function(t){console.error(t)};function rm(t){this._internalRoot=t}$u.prototype.render=rm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Vu(t,e,null,null)};$u.prototype.unmount=rm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vi(function(){Vu(null,t,null,null)}),e[er]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=tw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&rw(t)}};function im(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tv(){}function DA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yc(o);s.call(u)}}var o=TE(e,r,t,0,null,!1,!1,"",tv);return t._reactRootContainer=o,t[er]=o.current,ka(t.nodeType===8?t.parentNode:t),Vi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yc(c);l.call(u)}}var c=tm(t,0,!1,null,null,!1,!1,"",tv);return t._reactRootContainer=c,t[er]=c.current,ka(t.nodeType===8?t.parentNode:t),Vi(function(){Vu(e,c,n,r)}),c}function Mu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=Yc(o);l.call(c)}}Vu(e,o,t,i)}else o=DA(n,e,t,i,r);return Yc(o)}Z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(Tp(e,n|1),Wt(e,He()),!(me&6)&&(Us=He()+500,ai()))}break;case 13:Vi(function(){var r=tr(t,1);if(r!==null){var i=Pt();En(r,t,1,i)}}),nm(t,1)}};Ip=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=Pt();En(e,t,134217728,n)}nm(t,134217728)}};ew=function(t){if(t.tag===13){var e=Fr(t),n=tr(t,e);if(n!==null){var r=Pt();En(n,t,e,r)}nm(t,e)}};tw=function(){return we};nw=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Qd=function(t,e,n){switch(e){case"input":if(zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ru(r);if(!i)throw Error(q(90));D0(r),zd(r,i)}}}break;case"textarea":V0(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};z0=Xp;B0=Vi;var OA={usingClientEntryPoint:!1,Events:[el,ps,Ru,F0,U0,Xp]},Go={findFiberByHostInstance:Ei,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VA={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G0(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||NA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{Iu=Bl.inject(VA),On=Bl}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OA;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!im(e))throw Error(q(200));return bA(t,e,null,n)};tn.createRoot=function(t,e){if(!im(t))throw Error(q(299));var n=!1,r="",i=IE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,r,i),t[er]=e.current,ka(t.nodeType===8?t.parentNode:t),new rm(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=G0(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Vi(t)};tn.hydrate=function(t,e,n){if(!Lu(e))throw Error(q(200));return Mu(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!im(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=IE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TE(e,null,t,1,n??null,i,!1,s,o),t[er]=e.current,ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $u(e)};tn.render=function(t,e,n){if(!Lu(e))throw Error(q(200));return Mu(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!Lu(t))throw Error(q(40));return t._reactRootContainer?(Vi(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};tn.unstable_batchedUpdates=Xp;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lu(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return Mu(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function SE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SE)}catch(t){console.error(t)}}SE(),S0.exports=tn;var $A=S0.exports,nv=$A;Vd.createRoot=nv.createRoot,Vd.hydrateRoot=nv.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ma.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const rv="popstate";function LA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return kf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xc(i)}return jA(e,n,null,t)}function Ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MA(){return Math.random().toString(36).substr(2,8)}function iv(t,e){return{usr:t.state,key:t.key,idx:e}}function kf(t,e,n,r){return n===void 0&&(n=null),Ma({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?oo(e):e,{state:n,key:e&&e.key||r||MA()})}function Xc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function oo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=br.Pop,c=null,u=f();u==null&&(u=0,o.replaceState(Ma({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function m(){l=br.Pop;let b=f(),I=b==null?null:b-u;u=b,c&&c({action:l,location:k.location,delta:I})}function g(b,I){l=br.Push;let v=kf(k.location,b,I);u=f()+1;let S=iv(v,u),D=k.createHref(v);try{o.pushState(S,"",D)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(D)}s&&c&&c({action:l,location:k.location,delta:1})}function w(b,I){l=br.Replace;let v=kf(k.location,b,I);u=f();let S=iv(v,u),D=k.createHref(v);o.replaceState(S,"",D),s&&c&&c({action:l,location:k.location,delta:0})}function T(b){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:Xc(b);return v=v.replace(/ $/,"%20"),Ye(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let k={get action(){return l},get location(){return t(i,o)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(rv,m),c=b,()=>{i.removeEventListener(rv,m),c=null}},createHref(b){return e(i,b)},createURL:T,encodeLocation(b){let I=T(b);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:w,go(b){return o.go(b)}};return k}var sv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sv||(sv={}));function FA(t,e,n){return n===void 0&&(n="/"),UA(t,e,n)}function UA(t,e,n,r){let i=typeof e=="string"?oo(e):e,s=om(i.pathname||"/",n);if(s==null)return null;let o=AE(t);zA(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=eC(s);l=XA(o[c],u)}return l}function AE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ye(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=zr([r,c.relativePath]),f=n.concat(c);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),AE(s.children,e,f,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:QA(u,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of CE(s.path))i(s,o,c)}),e}function CE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CE(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function zA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const BA=/^:[\w-]+$/,HA=3,WA=2,GA=1,qA=10,KA=-2,ov=t=>t==="*";function QA(t,e){let n=t.split("/"),r=n.length;return n.some(ov)&&(r+=KA),e&&(r+=WA),n.filter(i=>!ov(i)).reduce((i,s)=>i+(BA.test(s)?HA:s===""?GA:qA),r)}function YA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function XA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=JA({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),g=c.route;if(!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:zr([s,m.pathname]),pathnameBase:sC(zr([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=zr([s,m.pathnameBase]))}return o}function JA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:w}=f;if(g==="*"){let k=l[m]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const T=l[m];return w&&!T?u[g]=void 0:u[g]=(T||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ZA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function om(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const tC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nC=t=>tC.test(t);function rC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?oo(t):t,s;if(n)if(nC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),sm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=av(n.substring(1),"/"):s=av(n,e)}else s=e;return{pathname:s,search:oC(r),hash:aC(i)}}function av(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function cd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function RE(t,e){let n=iC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=oo(t):(i=Ma({},t),Ye(!i.pathname||!i.pathname.includes("?"),cd("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),cd("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),cd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let m=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}l=m>=0?e[m]:"/"}let c=rC(i,l),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const zr=t=>t.join("/").replace(/\/\/+/g,"/"),sC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,aC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const PE=["post","put","patch","delete"];new Set(PE);const cC=["get",...PE];new Set(cC);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ja.apply(this,arguments)}const am=U.createContext(null),uC=U.createContext(null),Gi=U.createContext(null),ju=U.createContext(null),li=U.createContext({outlet:null,matches:[],isDataRoute:!1}),bE=U.createContext(null);function hC(t,e){let{relative:n}=e===void 0?{}:e;nl()||Ye(!1);let{basename:r,navigator:i}=U.useContext(Gi),{hash:s,pathname:o,search:l}=OE(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:zr([r,o])),i.createHref({pathname:c,search:l,hash:s})}function nl(){return U.useContext(ju)!=null}function rl(){return nl()||Ye(!1),U.useContext(ju).location}function NE(t){U.useContext(Gi).static||U.useLayoutEffect(t)}function Fu(){let{isDataRoute:t}=U.useContext(li);return t?IC():dC()}function dC(){nl()||Ye(!1);let t=U.useContext(am),{basename:e,future:n,navigator:r}=U.useContext(Gi),{matches:i}=U.useContext(li),{pathname:s}=rl(),o=JSON.stringify(RE(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return NE(()=>{l.current=!0}),U.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let m=kE(u,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:zr([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,o,s,t])}function DE(){let{matches:t}=U.useContext(li),e=t[t.length-1];return e?e.params:{}}function OE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Gi),{matches:i}=U.useContext(li),{pathname:s}=rl(),o=JSON.stringify(RE(i,r.v7_relativeSplatPath));return U.useMemo(()=>kE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function fC(t,e){return pC(t,e)}function pC(t,e,n,r){nl()||Ye(!1);let{navigator:i}=U.useContext(Gi),{matches:s}=U.useContext(li),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=rl(),f;if(e){var m;let b=typeof e=="string"?oo(e):e;c==="/"||(m=b.pathname)!=null&&m.startsWith(c)||Ye(!1),f=b}else f=u;let g=f.pathname||"/",w=g;if(c!=="/"){let b=c.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(b.length).join("/")}let T=FA(t,{pathname:w}),k=_C(T&&T.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:zr([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:zr([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&k?U.createElement(ju.Provider,{value:{location:ja({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:br.Pop}},k):k}function mC(){let t=TC(),e=lC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const gC=U.createElement(mC,null);class yC extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(li.Provider,{value:this.props.routeContext},U.createElement(bE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vC(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(am);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(li.Provider,{value:e},r)}function _C(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Ye(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let m=o[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:w}=n,T=m.route.loader&&g[m.route.id]===void 0&&(!w||w[m.route.id]===void 0);if(m.route.lazy||T){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((f,m,g)=>{let w,T=!1,k=null,b=null;n&&(w=l&&m.route.id?l[m.route.id]:void 0,k=m.route.errorElement||gC,c&&(u<0&&g===0?(SC("route-fallback"),T=!0,b=null):u===g&&(T=!0,b=m.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,g+1)),v=()=>{let S;return w?S=k:T?S=b:m.route.Component?S=U.createElement(m.route.Component,null):m.route.element?S=m.route.element:S=f,U.createElement(vC,{match:m,routeContext:{outlet:f,matches:I,isDataRoute:n!=null},children:S})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?U.createElement(yC,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var VE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(VE||{}),$E=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($E||{});function wC(t){let e=U.useContext(am);return e||Ye(!1),e}function EC(t){let e=U.useContext(uC);return e||Ye(!1),e}function xC(t){let e=U.useContext(li);return e||Ye(!1),e}function LE(t){let e=xC(),n=e.matches[e.matches.length-1];return n.route.id||Ye(!1),n.route.id}function TC(){var t;let e=U.useContext(bE),n=EC(),r=LE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function IC(){let{router:t}=wC(VE.UseNavigateStable),e=LE($E.UseNavigateStable),n=U.useRef(!1);return NE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ja({fromRouteId:e},s)))},[t,e])}const lv={};function SC(t,e,n){lv[t]||(lv[t]=!0)}function AC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function vr(t){Ye(!1)}function CC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1,future:l}=t;nl()&&Ye(!1);let c=e.replace(/^\/*/,"/"),u=U.useMemo(()=>({basename:c,navigator:s,static:o,future:ja({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=oo(r));let{pathname:f="/",search:m="",hash:g="",state:w=null,key:T="default"}=r,k=U.useMemo(()=>{let b=om(f,c);return b==null?null:{location:{pathname:b,search:m,hash:g,state:w,key:T},navigationType:i}},[c,f,m,g,w,T,i]);return k==null?null:U.createElement(Gi.Provider,{value:u},U.createElement(ju.Provider,{children:n,value:k}))}function RC(t){let{children:e,location:n}=t;return fC(Pf(e),n)}new Promise(()=>{});function Pf(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Pf(r.props.children,s));return}r.type!==vr&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bf(){return bf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bf.apply(this,arguments)}function kC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bC(t,e){return t.button===0&&(!e||e==="_self")&&!PC(t)}const NC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],DC="6";try{window.__reactRouterVersion=DC}catch{}const OC="startTransition",cv=SI[OC];function VC(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=LA({window:i,v5Compat:!0}));let o=s.current,[l,c]=U.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},f=U.useCallback(m=>{u&&cv?cv(()=>c(m)):c(m)},[c,u]);return U.useLayoutEffect(()=>o.listen(f),[o,f]),U.useEffect(()=>AC(r),[r]),U.createElement(CC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const $C=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ME=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:f,viewTransition:m}=e,g=kC(e,NC),{basename:w}=U.useContext(Gi),T,k=!1;if(typeof u=="string"&&LC.test(u)&&(T=u,$C))try{let S=new URL(window.location.href),D=u.startsWith("//")?new URL(S.protocol+u):new URL(u),$=om(D.pathname,w);D.origin===S.origin&&$!=null?u=$+D.search+D.hash:k=!0}catch{}let b=hC(u,{relative:i}),I=MC(u,{replace:o,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:m});function v(S){r&&r(S),S.defaultPrevented||I(S)}return U.createElement("a",bf({},g,{href:T||b,onClick:k||s?r:v,ref:n,target:c}))});var uv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uv||(uv={}));var hv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hv||(hv={}));function MC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=Fu(),u=rl(),f=OE(t,{relative:o});return U.useCallback(m=>{if(bC(m,n)){m.preventDefault();let g=r!==void 0?r:Xc(u)===Xc(f);c(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,f,r,i,n,t,s,o,l])}var ct=function(){return ct=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ct.apply(this,arguments)};function zs(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ce="-ms-",pa="-moz-",ge="-webkit-",jE="comm",Uu="rule",lm="decl",jC="@import",FE="@keyframes",FC="@layer",UE=Math.abs,cm=String.fromCharCode,Nf=Object.assign;function UC(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function zE(t){return t.trim()}function Gn(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function hc(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function Bs(t,e,n){return t.slice(e,n)}function bn(t){return t.length}function BE(t){return t.length}function Jo(t,e){return e.push(t),t}function zC(t,e){return t.map(e).join("")}function dv(t,e){return t.filter(function(n){return!Gn(n,e)})}var zu=1,Hs=1,HE=0,dn=0,qe=0,ao="";function Bu(t,e,n,r,i,s,o,l){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:zu,column:Hs,length:o,return:"",siblings:l}}function _r(t,e){return Nf(Bu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function rs(t){for(;t.root;)t=_r(t.root,{children:[t]});Jo(t,t.siblings)}function BC(){return qe}function HC(){return qe=dn>0?lt(ao,--dn):0,Hs--,qe===10&&(Hs=1,zu--),qe}function xn(){return qe=dn<HE?lt(ao,dn++):0,Hs++,qe===10&&(Hs=1,zu++),qe}function Ri(){return lt(ao,dn)}function dc(){return dn}function Hu(t,e){return Bs(ao,t,e)}function Df(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function WC(t){return zu=Hs=1,HE=bn(ao=t),dn=0,[]}function GC(t){return ao="",t}function ud(t){return zE(Hu(dn-1,Of(t===91?t+2:t===40?t+1:t)))}function qC(t){for(;(qe=Ri())&&qe<33;)xn();return Df(t)>2||Df(qe)>3?"":" "}function KC(t,e){for(;--e&&xn()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Hu(t,dc()+(e<6&&Ri()==32&&xn()==32))}function Of(t){for(;xn();)switch(qe){case t:return dn;case 34:case 39:t!==34&&t!==39&&Of(qe);break;case 40:t===41&&Of(t);break;case 92:xn();break}return dn}function QC(t,e){for(;xn()&&t+qe!==57;)if(t+qe===84&&Ri()===47)break;return"/*"+Hu(e,dn-1)+"*"+cm(t===47?t:xn())}function YC(t){for(;!Df(Ri());)xn();return Hu(t,dn)}function XC(t){return GC(fc("",null,null,null,[""],t=WC(t),0,[0],t))}function fc(t,e,n,r,i,s,o,l,c){for(var u=0,f=0,m=o,g=0,w=0,T=0,k=1,b=1,I=1,v=0,S="",D=i,$=s,F=r,E=S;b;)switch(T=v,v=xn()){case 40:if(T!=108&&lt(E,m-1)==58){hc(E+=le(ud(v),"&","&\f"),"&\f",UE(u?l[u-1]:0))!=-1&&(I=-1);break}case 34:case 39:case 91:E+=ud(v);break;case 9:case 10:case 13:case 32:E+=qC(T);break;case 92:E+=KC(dc()-1,7);continue;case 47:switch(Ri()){case 42:case 47:Jo(JC(QC(xn(),dc()),e,n,c),c);break;default:E+="/"}break;case 123*k:l[u++]=bn(E)*I;case 125*k:case 59:case 0:switch(v){case 0:case 125:b=0;case 59+f:I==-1&&(E=le(E,/\f/g,"")),w>0&&bn(E)-m&&Jo(w>32?pv(E+";",r,n,m-1,c):pv(le(E," ","")+";",r,n,m-2,c),c);break;case 59:E+=";";default:if(Jo(F=fv(E,e,n,u,f,i,l,S,D=[],$=[],m,s),s),v===123)if(f===0)fc(E,e,F,F,D,s,m,l,$);else switch(g===99&&lt(E,3)===110?100:g){case 100:case 108:case 109:case 115:fc(t,F,F,r&&Jo(fv(t,F,F,0,0,i,l,S,i,D=[],m,$),$),i,$,m,l,r?D:$);break;default:fc(E,F,F,F,[""],$,0,l,$)}}u=f=w=0,k=I=1,S=E="",m=o;break;case 58:m=1+bn(E),w=T;default:if(k<1){if(v==123)--k;else if(v==125&&k++==0&&HC()==125)continue}switch(E+=cm(v),v*k){case 38:I=f>0?1:(E+="\f",-1);break;case 44:l[u++]=(bn(E)-1)*I,I=1;break;case 64:Ri()===45&&(E+=ud(xn())),g=Ri(),f=m=bn(S=E+=YC(dc())),v++;break;case 45:T===45&&bn(E)==2&&(k=0)}}return s}function fv(t,e,n,r,i,s,o,l,c,u,f,m){for(var g=i-1,w=i===0?s:[""],T=BE(w),k=0,b=0,I=0;k<r;++k)for(var v=0,S=Bs(t,g+1,g=UE(b=o[k])),D=t;v<T;++v)(D=zE(b>0?w[v]+" "+S:le(S,/&\f/g,w[v])))&&(c[I++]=D);return Bu(t,e,n,i===0?Uu:l,c,u,f,m)}function JC(t,e,n,r){return Bu(t,e,n,jE,cm(BC()),Bs(t,2,-2),0,r)}function pv(t,e,n,r,i){return Bu(t,e,n,lm,Bs(t,0,r),Bs(t,r+1,-1),r,i)}function WE(t,e,n){switch(UC(t,e)){case 5103:return ge+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ge+t+t;case 4789:return pa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+t+pa+t+Ce+t+t;case 5936:switch(lt(t,e+11)){case 114:return ge+t+Ce+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ge+t+Ce+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ge+t+Ce+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ge+t+Ce+t+t;case 6165:return ge+t+Ce+"flex-"+t+t;case 5187:return ge+t+le(t,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Ce+"flex-$1$2")+t;case 5443:return ge+t+Ce+"flex-item-"+le(t,/flex-|-self/g,"")+(Gn(t,/flex-|baseline/)?"":Ce+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return ge+t+Ce+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return ge+t+Ce+le(t,"shrink","negative")+t;case 5292:return ge+t+Ce+le(t,"basis","preferred-size")+t;case 6060:return ge+"box-"+le(t,"-grow","")+ge+t+Ce+le(t,"grow","positive")+t;case 4554:return ge+le(t,/([^-])(transform)/g,"$1"+ge+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ge+t+t;case 4200:if(!Gn(t,/flex-|baseline/))return Ce+"grid-column-align"+Bs(t,e)+t;break;case 2592:case 3360:return Ce+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Gn(r.props,/grid-\w+-end/)})?~hc(t+(n=n[e].value),"span",0)?t:Ce+le(t,"-start","")+t+Ce+"grid-row-span:"+(~hc(n,"span",0)?Gn(n,/\d+/):+Gn(n,/\d+/)-+Gn(t,/\d+/))+";":Ce+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Gn(r.props,/grid-\w+-start/)})?t:Ce+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,ge+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bn(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+pa+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~hc(t,"stretch",0)?WE(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,c,u){return Ce+i+":"+s+u+(o?Ce+i+"-span:"+(l?c:+c-+s)+u:"")+t});case 4949:if(lt(t,e+6)===121)return le(t,":",":"+ge)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(lt(t,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Ce+"$2box$3")+t;case 100:return le(t,":",":"+Ce)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Jc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function ZC(t,e,n,r){switch(t.type){case FC:if(t.children.length)break;case jC:case lm:return t.return=t.return||t.value;case jE:return"";case FE:return t.return=t.value+"{"+Jc(t.children,r)+"}";case Uu:if(!bn(t.value=t.props.join(",")))return""}return bn(n=Jc(t.children,r))?t.return=t.value+"{"+n+"}":""}function eR(t){var e=BE(t);return function(n,r,i,s){for(var o="",l=0;l<e;l++)o+=t[l](n,r,i,s)||"";return o}}function tR(t){return function(e){e.root||(e=e.return)&&t(e)}}function nR(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case lm:t.return=WE(t.value,t.length,n);return;case FE:return Jc([_r(t,{value:le(t.value,"@","@"+ge)})],r);case Uu:if(t.length)return zC(n=t.props,function(i){switch(Gn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rs(_r(t,{props:[le(i,/:(read-\w+)/,":"+pa+"$1")]})),rs(_r(t,{props:[i]})),Nf(t,{props:dv(n,r)});break;case"::placeholder":rs(_r(t,{props:[le(i,/:(plac\w+)/,":"+ge+"input-$1")]})),rs(_r(t,{props:[le(i,/:(plac\w+)/,":"+pa+"$1")]})),rs(_r(t,{props:[le(i,/:(plac\w+)/,Ce+"input-$1")]})),rs(_r(t,{props:[i]})),Nf(t,{props:dv(n,r)});break}return""})}}var rR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qt={},Ws=typeof process<"u"&&qt!==void 0&&(qt.REACT_APP_SC_ATTR||qt.SC_ATTR)||"data-styled",GE="active",qE="data-styled-version",Wu="6.1.19",um=`/*!sc*/
`,Zc=typeof window<"u"&&typeof document<"u",iR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qt!==void 0&&qt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qt.REACT_APP_SC_DISABLE_SPEEDY!==""?qt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qt!==void 0&&qt.SC_DISABLE_SPEEDY!==void 0&&qt.SC_DISABLE_SPEEDY!==""&&qt.SC_DISABLE_SPEEDY!=="false"&&qt.SC_DISABLE_SPEEDY),sR={},Gu=Object.freeze([]),Gs=Object.freeze({});function KE(t,e,n){return n===void 0&&(n=Gs),t.theme!==n.theme&&t.theme||e||n.theme}var QE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),oR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aR=/(^-|-$)/g;function mv(t){return t.replace(oR,"-").replace(aR,"")}var lR=/(a)(d)/gi,Hl=52,gv=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vf(t){var e,n="";for(e=Math.abs(t);e>Hl;e=e/Hl|0)n=gv(e%Hl)+n;return(gv(e%Hl)+n).replace(lR,"$1-$2")}var hd,YE=5381,Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},XE=function(t){return Es(YE,t)};function hm(t){return Vf(XE(t)>>>0)}function cR(t){return t.displayName||t.name||"Component"}function dd(t){return typeof t=="string"&&!0}var JE=typeof Symbol=="function"&&Symbol.for,ZE=JE?Symbol.for("react.memo"):60115,uR=JE?Symbol.for("react.forward_ref"):60112,hR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fR=((hd={})[uR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hd[ZE]=e1,hd);function yv(t){return("type"in(e=t)&&e.type.$$typeof)===ZE?e1:"$$typeof"in t?fR[t.$$typeof]:hR;var e}var pR=Object.defineProperty,mR=Object.getOwnPropertyNames,vv=Object.getOwnPropertySymbols,gR=Object.getOwnPropertyDescriptor,yR=Object.getPrototypeOf,_v=Object.prototype;function t1(t,e,n){if(typeof e!="string"){if(_v){var r=yR(e);r&&r!==_v&&t1(t,r,n)}var i=mR(e);vv&&(i=i.concat(vv(e)));for(var s=yv(t),o=yv(e),l=0;l<i.length;++l){var c=i[l];if(!(c in dR||n&&n[c]||o&&c in o||s&&c in s)){var u=gR(e,c);try{pR(t,c,u)}catch{}}}}return t}function $i(t){return typeof t=="function"}function dm(t){return typeof t=="object"&&"styledComponentId"in t}function Ii(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function eu(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Fa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $f(t,e,n){if(n===void 0&&(n=!1),!n&&!Fa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=$f(t[r],e[r]);else if(Fa(e))for(var r in e)t[r]=$f(t[r],e[r]);return t}function fm(t,e){Object.defineProperty(t,"toString",{value:e})}function Li(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var vR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Li(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),c=(o=0,n.length);o<c;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(um);return n},t}(),pc=new Map,tu=new Map,mc=1,Wl=function(t){if(pc.has(t))return pc.get(t);for(;tu.has(mc);)mc++;var e=mc++;return pc.set(t,e),tu.set(e,t),e},_R=function(t,e){mc=e+1,pc.set(t,e),tu.set(e,t)},wR="style[".concat(Ws,"][").concat(qE,'="').concat(Wu,'"]'),ER=new RegExp("^".concat(Ws,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},TR=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(um),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var c=l.match(ER);if(c){var u=0|parseInt(c[1],10),f=c[2];u!==0&&(_R(f,u),xR(t,f,c[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},wv=function(t){for(var e=document.querySelectorAll(wR),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ws)!==GE&&(TR(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function IR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var n1=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Ws,"]")));return c[c.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ws,GE),r.setAttribute(qE,Wu);var o=IR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},SR=function(){function t(e){this.element=n1(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Li(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),AR=function(){function t(e){this.element=n1(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),CR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Ev=Zc,RR={isServer:!Zc,useCSSOMInjection:!iR},nu=function(){function t(e,n,r){e===void 0&&(e=Gs),n===void 0&&(n={});var i=this;this.options=ct(ct({},RR),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Zc&&Ev&&(Ev=!1,wv(this)),fm(this,function(){return function(s){for(var o=s.getTag(),l=o.length,c="",u=function(m){var g=function(I){return tu.get(I)}(m);if(g===void 0)return"continue";var w=s.names.get(g),T=o.getGroup(m);if(w===void 0||!w.size||T.length===0)return"continue";var k="".concat(Ws,".g").concat(m,'[id="').concat(g,'"]'),b="";w!==void 0&&w.forEach(function(I){I.length>0&&(b+="".concat(I,","))}),c+="".concat(T).concat(k,'{content:"').concat(b,'"}').concat(um)},f=0;f<l;f++)u(f);return c}(i)})}return t.registerId=function(e){return Wl(e)},t.prototype.rehydrate=function(){!this.server&&Zc&&wv(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(ct(ct({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new CR(i):r?new SR(i):new AR(i)}(this.options),new vR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Wl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Wl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Wl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),kR=/&/g,PR=/^\s*\/\/.*$/gm;function r1(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=r1(n.children,e)),n})}function bR(t){var e,n,r,i=Gs,s=i.options,o=s===void 0?Gs:s,l=i.plugins,c=l===void 0?Gu:l,u=function(g,w,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):g},f=c.slice();f.push(function(g){g.type===Uu&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(kR,n).replace(r,u))}),o.prefix&&f.push(nR),f.push(ZC);var m=function(g,w,T,k){w===void 0&&(w=""),T===void 0&&(T=""),k===void 0&&(k="&"),e=k,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var b=g.replace(PR,""),I=XC(T||w?"".concat(T," ").concat(w," { ").concat(b," }"):b);o.namespace&&(I=r1(I,o.namespace));var v=[];return Jc(I,eR(f.concat(tR(function(S){return v.push(S)})))),v};return m.hash=c.length?c.reduce(function(g,w){return w.name||Li(15),Es(g,w.name)},YE).toString():"",m}var NR=new nu,Lf=bR(),i1=Qt.createContext({shouldForwardProp:void 0,styleSheet:NR,stylis:Lf});i1.Consumer;Qt.createContext(void 0);function Mf(){return U.useContext(i1)}var s1=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Lf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,fm(this,function(){throw Li(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Lf),this.name+e.hash},t}(),DR=function(t){return t>="A"&&t<="Z"};function xv(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;DR(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var o1=function(t){return t==null||t===!1||t===""},a1=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!o1(s)&&(Array.isArray(s)&&s.isCss||$i(s)?r.push("".concat(xv(i),":"),s,";"):Fa(s)?r.push.apply(r,zs(zs(["".concat(i," {")],a1(s),!1),["}"],!1)):r.push("".concat(xv(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in rR||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Br(t,e,n,r){if(o1(t))return[];if(dm(t))return[".".concat(t.styledComponentId)];if($i(t)){if(!$i(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Br(i,e,n,r)}var s;return t instanceof s1?n?(t.inject(n,r),[t.getName(r)]):[t]:Fa(t)?a1(t):Array.isArray(t)?Array.prototype.concat.apply(Gu,t.map(function(o){return Br(o,e,n,r)})):[t.toString()]}function l1(t){for(var e=0;e<t.length;e+=1){var n=t[e];if($i(n)&&!dm(n))return!1}return!0}var OR=XE(Wu),VR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&l1(e),this.componentId=n,this.baseHash=Es(OR,n),this.baseStyle=r,nu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ii(i,this.staticRulesId);else{var s=eu(Br(this.rules,e,n,r)),o=Vf(Es(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Ii(i,o),this.staticRulesId=o}else{for(var c=Es(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")u+=m;else if(m){var g=eu(Br(m,e,n,r));c=Es(c,g+f),u+=g}}if(u){var w=Vf(c>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=Ii(i,w)}}return i},t}(),Ua=Qt.createContext(void 0);Ua.Consumer;function $R(t){var e=Qt.useContext(Ua),n=U.useMemo(function(){return function(r,i){if(!r)throw Li(14);if($i(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Li(8);return i?ct(ct({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?Qt.createElement(Ua.Provider,{value:n},t.children):null}var fd={};function LR(t,e,n){var r=dm(t),i=t,s=!dd(t),o=e.attrs,l=o===void 0?Gu:o,c=e.componentId,u=c===void 0?function(D,$){var F=typeof D!="string"?"sc":mv(D);fd[F]=(fd[F]||0)+1;var E="".concat(F,"-").concat(hm(Wu+F+fd[F]));return $?"".concat($,"-").concat(E):E}(e.displayName,e.parentComponentId):c,f=e.displayName,m=f===void 0?function(D){return dd(D)?"styled.".concat(D):"Styled(".concat(cR(D),")")}(t):f,g=e.displayName&&e.componentId?"".concat(mv(e.displayName),"-").concat(e.componentId):e.componentId||u,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var k=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;T=function(D,$){return k(D,$)&&b(D,$)}}else T=k}var I=new VR(n,g,r?i.componentStyle:void 0);function v(D,$){return function(F,E,_){var x=F.attrs,A=F.componentStyle,R=F.defaultProps,P=F.foldedComponentIds,C=F.styledComponentId,Te=F.target,We=Qt.useContext(Ua),rn=Mf(),Ee=F.shouldForwardProp||rn.shouldForwardProp,O=KE(E,We,R)||Gs,N=function(be,Ne,ze){for(var Vt,At=ct(ct({},Ne),{className:void 0,theme:ze}),cr=0;cr<be.length;cr+=1){var Hn=$i(Vt=be[cr])?Vt(At):Vt;for(var $t in Hn)At[$t]=$t==="className"?Ii(At[$t],Hn[$t]):$t==="style"?ct(ct({},At[$t]),Hn[$t]):Hn[$t]}return Ne.className&&(At.className=Ii(At.className,Ne.className)),At}(x,E,O),j=N.as||Te,H={};for(var G in N)N[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&N.theme===O||(G==="forwardedAs"?H.as=N.forwardedAs:Ee&&!Ee(G,j)||(H[G]=N[G]));var Y=function(be,Ne){var ze=Mf(),Vt=be.generateAndInjectStyles(Ne,ze.styleSheet,ze.stylis);return Vt}(A,N),Z=Ii(P,C);return Y&&(Z+=" "+Y),N.className&&(Z+=" "+N.className),H[dd(j)&&!QE.has(j)?"class":"className"]=Z,_&&(H.ref=_),U.createElement(j,H)}(S,D,$)}v.displayName=m;var S=Qt.forwardRef(v);return S.attrs=w,S.componentStyle=I,S.displayName=m,S.shouldForwardProp=T,S.foldedComponentIds=r?Ii(i.foldedComponentIds,i.styledComponentId):"",S.styledComponentId=g,S.target=r?i.target:t,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(D){this._foldedDefaultProps=r?function($){for(var F=[],E=1;E<arguments.length;E++)F[E-1]=arguments[E];for(var _=0,x=F;_<x.length;_++)$f($,x[_],!0);return $}({},i.defaultProps,D):D}}),fm(S,function(){return".".concat(S.styledComponentId)}),s&&t1(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Tv(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Iv=function(t){return Object.assign(t,{isCss:!0})};function vn(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if($i(t)||Fa(t))return Iv(Br(Tv(Gu,zs([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Br(r):Iv(Br(Tv(r,e)))}function jf(t,e,n){if(n===void 0&&(n=Gs),!e)throw Li(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,vn.apply(void 0,zs([i],s,!1)))};return r.attrs=function(i){return jf(t,e,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return jf(t,e,ct(ct({},n),i))},r}var c1=function(t){return jf(LR,t)},M=c1;QE.forEach(function(t){M[t]=c1(t)});var MR=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=l1(e),nu.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(eu(Br(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&nu.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function jR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=vn.apply(void 0,zs([t],e,!1)),i="sc-global-".concat(hm(JSON.stringify(r))),s=new MR(r,i),o=function(c){var u=Mf(),f=Qt.useContext(Ua),m=Qt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(m,c,u.styleSheet,f,u.stylis),Qt.useLayoutEffect(function(){if(!u.styleSheet.server)return l(m,c,u.styleSheet,f,u.stylis),function(){return s.removeStyles(m,u.styleSheet)}},[m,c,u.styleSheet,f,u.stylis]),null};function l(c,u,f,m,g){if(s.isStatic)s.renderStyles(c,sR,f,g);else{var w=ct(ct({},u),{theme:KE(u,m,o.defaultProps)});s.renderStyles(c,w,f,g)}}return Qt.memo(o)}function Ot(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=eu(vn.apply(void 0,zs([t],e,!1))),i=hm(r);return new s1(i,r)}const FR=()=>{};var Sv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},h1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(g=64)),r.push(n[f],n[m],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||m==null)throw new zR;const g=s<<2|l>>4;if(r.push(g),u!==64){const w=l<<4&240|u>>2;if(r.push(w),m!==64){const T=u<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BR=function(t){const e=u1(t);return h1.encodeByteArray(e,!0)},ru=function(t){return BR(t).replace(/\./g,"")},d1=function(t){try{return h1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=()=>HR().__FIREBASE_DEFAULTS__,GR=()=>{if(typeof process>"u"||typeof Sv>"u")return;const t=Sv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&d1(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return FR()||WR()||GR()||qR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},f1=t=>{var e,n;return(n=(e=qu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},KR=t=>{const e=f1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},p1=()=>{var t;return(t=qu())==null?void 0:t.config},m1=t=>{var e;return(e=qu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function g1(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ru(JSON.stringify(n)),ru(JSON.stringify(o)),""].join(".")}const ma={};function XR(){const t={prod:[],emulator:[]};for(const e of Object.keys(ma))ma[e]?t.emulator.push(e):t.prod.push(e);return t}function JR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Av=!1;function y1(t,e){if(typeof window>"u"||typeof document>"u"||!lo(window.location.host)||ma[t]===e||ma[t]||Av)return;ma[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=XR().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Av=!0,o()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=JR(r),w=n("text"),T=document.getElementById(w)||document.createElement("span"),k=n("learnmore"),b=document.getElementById(k)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(b,k);const D=u();c(v,I),S.append(v,T,b,D),document.body.appendChild(S)}s?(T.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function ek(){var e;const t=(e=qu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ik(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sk(){return!ek()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ok(){try{return typeof indexedDB=="object"}catch{return!1}}function ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="FirebaseError";class lr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lk,Object.setPrototypeOf(this,lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,il.prototype.create)}}class il{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ck(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new lr(i,l,r)}}function ck(t,e){return t.replace(uk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uk=/\{\$([^}]+)}/g;function hk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cv(s)&&Cv(o)){if(!Mi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dk(t,e){const n=new fk(t,e);return n.subscribe.bind(n)}class fk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pk(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pd),i.error===void 0&&(i.error=pd),i.complete===void 0&&(i.complete=pd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return t&&t._delegate?t._delegate:t}class ji{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yk(e))try{this.getOrInitializeService({instanceIdentifier:wi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wi){return this.instances.has(e)}getOptions(e=wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wi){return this.component?this.component.multipleInstances?e:wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gk(t){return t===wi?void 0:t}function yk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const _k={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},wk=ue.INFO,Ek={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},xk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ek[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=wk,this._logHandler=xk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_k[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Tk=(t,e)=>e.some(n=>t instanceof n);let Rv,kv;function Ik(){return Rv||(Rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sk(){return kv||(kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v1=new WeakMap,Ff=new WeakMap,_1=new WeakMap,md=new WeakMap,mm=new WeakMap;function Ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&v1.set(n,t)}).catch(()=>{}),mm.set(e,t),e}function Ck(t){if(Ff.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ff.set(t,e)}let Uf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ff.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Rk(t){Uf=t(Uf)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gd(this),e,...n);return _1.set(r,e.sort?e.sort():[e]),Hr(r)}:Sk().includes(t)?function(...e){return t.apply(gd(this),e),Hr(v1.get(this))}:function(...e){return Hr(t.apply(gd(this),e))}}function Pk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&Ck(t),Tk(t,Ik())?new Proxy(t,Uf):t)}function Hr(t){if(t instanceof IDBRequest)return Ak(t);if(md.has(t))return md.get(t);const e=Pk(t);return e!==t&&(md.set(t,e),mm.set(e,t)),e}const gd=t=>mm.get(t);function bk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Hr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Hr(o.result),c.oldVersion,c.newVersion,Hr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Nk=["get","getKey","getAll","getAllKeys","count"],Dk=["put","add","delete","clear"],yd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yd.get(e))return yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Dk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Nk.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return yd.set(e,s),s}Rk(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zf="@firebase/app",bv="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new pm("@firebase/app"),$k="@firebase/app-compat",Lk="@firebase/analytics-compat",Mk="@firebase/analytics",jk="@firebase/app-check-compat",Fk="@firebase/app-check",Uk="@firebase/auth",zk="@firebase/auth-compat",Bk="@firebase/database",Hk="@firebase/data-connect",Wk="@firebase/database-compat",Gk="@firebase/functions",qk="@firebase/functions-compat",Kk="@firebase/installations",Qk="@firebase/installations-compat",Yk="@firebase/messaging",Xk="@firebase/messaging-compat",Jk="@firebase/performance",Zk="@firebase/performance-compat",eP="@firebase/remote-config",tP="@firebase/remote-config-compat",nP="@firebase/storage",rP="@firebase/storage-compat",iP="@firebase/firestore",sP="@firebase/ai",oP="@firebase/firestore-compat",aP="firebase",lP="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="[DEFAULT]",cP={[zf]:"fire-core",[$k]:"fire-core-compat",[Mk]:"fire-analytics",[Lk]:"fire-analytics-compat",[Fk]:"fire-app-check",[jk]:"fire-app-check-compat",[Uk]:"fire-auth",[zk]:"fire-auth-compat",[Bk]:"fire-rtdb",[Hk]:"fire-data-connect",[Wk]:"fire-rtdb-compat",[Gk]:"fire-fn",[qk]:"fire-fn-compat",[Kk]:"fire-iid",[Qk]:"fire-iid-compat",[Yk]:"fire-fcm",[Xk]:"fire-fcm-compat",[Jk]:"fire-perf",[Zk]:"fire-perf-compat",[eP]:"fire-rc",[tP]:"fire-rc-compat",[nP]:"fire-gcs",[rP]:"fire-gcs-compat",[iP]:"fire-fst",[oP]:"fire-fst-compat",[sP]:"fire-vertex","fire-js":"fire-js",[aP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Map,uP=new Map,Hf=new Map;function Nv(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qs(t){const e=t.name;if(Hf.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Hf.set(e,t);for(const n of iu.values())Nv(n,t);for(const n of uP.values())Nv(n,t);return!0}function gm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new il("app","Firebase",hP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=lP;function w1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Bf,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=p1()),!n)throw Wr.create("no-options");const s=iu.get(i);if(s){if(Mi(n,s.options)&&Mi(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new vk(i);for(const c of Hf.values())o.addComponent(c);const l=new dP(n,r,o);return iu.set(i,l),l}function E1(t=Bf){const e=iu.get(t);if(!e&&t===Bf&&p1())return w1();if(!e)throw Wr.create("no-app",{appName:t});return e}function Gr(t,e,n){let r=cP[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(o.join(" "));return}qs(new ji(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="firebase-heartbeat-database",pP=1,za="firebase-heartbeat-store";let vd=null;function x1(){return vd||(vd=bk(fP,pP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(za)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),vd}async function mP(t){try{const n=(await x1()).transaction(za),r=await n.objectStore(za).get(T1(t));return await n.done,r}catch(e){if(e instanceof lr)rr.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Dv(t,e){try{const r=(await x1()).transaction(za,"readwrite");await r.objectStore(za).put(e,T1(t)),await r.done}catch(n){if(n instanceof lr)rr.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function T1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=1024,yP=30;class vP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ov();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>yP){const o=EP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ov(),{heartbeatsToSend:r,unsentEntries:i}=_P(this._heartbeatsCache.heartbeats),s=ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function Ov(){return new Date().toISOString().substring(0,10)}function _P(t,e=gP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ok()?ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vv(t){return ru(JSON.stringify({version:2,heartbeats:t})).length}function EP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(t){qs(new ji("platform-logger",e=>new Ok(e),"PRIVATE")),qs(new ji("heartbeat",e=>new vP(e),"PRIVATE")),Gr(zf,bv,t),Gr(zf,bv,"esm2020"),Gr("fire-js","")}xP("");var $v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,I1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function x(){}x.prototype=_.prototype,E.F=_.prototype,E.prototype=new x,E.prototype.constructor=E,E.D=function(A,R,P){for(var C=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)C[Te-2]=arguments[Te];return _.prototype[R].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,x){x||(x=0);const A=Array(16);if(typeof _=="string")for(var R=0;R<16;++R)A[R]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(R=0;R<16;++R)A[R]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=E.g[0],x=E.g[1],R=E.g[2];let P=E.g[3],C;C=_+(P^x&(R^P))+A[0]+3614090360&4294967295,_=x+(C<<7&4294967295|C>>>25),C=P+(R^_&(x^R))+A[1]+3905402710&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(x^P&(_^x))+A[2]+606105819&4294967295,R=P+(C<<17&4294967295|C>>>15),C=x+(_^R&(P^_))+A[3]+3250441966&4294967295,x=R+(C<<22&4294967295|C>>>10),C=_+(P^x&(R^P))+A[4]+4118548399&4294967295,_=x+(C<<7&4294967295|C>>>25),C=P+(R^_&(x^R))+A[5]+1200080426&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(x^P&(_^x))+A[6]+2821735955&4294967295,R=P+(C<<17&4294967295|C>>>15),C=x+(_^R&(P^_))+A[7]+4249261313&4294967295,x=R+(C<<22&4294967295|C>>>10),C=_+(P^x&(R^P))+A[8]+1770035416&4294967295,_=x+(C<<7&4294967295|C>>>25),C=P+(R^_&(x^R))+A[9]+2336552879&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(x^P&(_^x))+A[10]+4294925233&4294967295,R=P+(C<<17&4294967295|C>>>15),C=x+(_^R&(P^_))+A[11]+2304563134&4294967295,x=R+(C<<22&4294967295|C>>>10),C=_+(P^x&(R^P))+A[12]+1804603682&4294967295,_=x+(C<<7&4294967295|C>>>25),C=P+(R^_&(x^R))+A[13]+4254626195&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(x^P&(_^x))+A[14]+2792965006&4294967295,R=P+(C<<17&4294967295|C>>>15),C=x+(_^R&(P^_))+A[15]+1236535329&4294967295,x=R+(C<<22&4294967295|C>>>10),C=_+(R^P&(x^R))+A[1]+4129170786&4294967295,_=x+(C<<5&4294967295|C>>>27),C=P+(x^R&(_^x))+A[6]+3225465664&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^x&(P^_))+A[11]+643717713&4294967295,R=P+(C<<14&4294967295|C>>>18),C=x+(P^_&(R^P))+A[0]+3921069994&4294967295,x=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(x^R))+A[5]+3593408605&4294967295,_=x+(C<<5&4294967295|C>>>27),C=P+(x^R&(_^x))+A[10]+38016083&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^x&(P^_))+A[15]+3634488961&4294967295,R=P+(C<<14&4294967295|C>>>18),C=x+(P^_&(R^P))+A[4]+3889429448&4294967295,x=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(x^R))+A[9]+568446438&4294967295,_=x+(C<<5&4294967295|C>>>27),C=P+(x^R&(_^x))+A[14]+3275163606&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^x&(P^_))+A[3]+4107603335&4294967295,R=P+(C<<14&4294967295|C>>>18),C=x+(P^_&(R^P))+A[8]+1163531501&4294967295,x=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(x^R))+A[13]+2850285829&4294967295,_=x+(C<<5&4294967295|C>>>27),C=P+(x^R&(_^x))+A[2]+4243563512&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^x&(P^_))+A[7]+1735328473&4294967295,R=P+(C<<14&4294967295|C>>>18),C=x+(P^_&(R^P))+A[12]+2368359562&4294967295,x=R+(C<<20&4294967295|C>>>12),C=_+(x^R^P)+A[5]+4294588738&4294967295,_=x+(C<<4&4294967295|C>>>28),C=P+(_^x^R)+A[8]+2272392833&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^x)+A[11]+1839030562&4294967295,R=P+(C<<16&4294967295|C>>>16),C=x+(R^P^_)+A[14]+4259657740&4294967295,x=R+(C<<23&4294967295|C>>>9),C=_+(x^R^P)+A[1]+2763975236&4294967295,_=x+(C<<4&4294967295|C>>>28),C=P+(_^x^R)+A[4]+1272893353&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^x)+A[7]+4139469664&4294967295,R=P+(C<<16&4294967295|C>>>16),C=x+(R^P^_)+A[10]+3200236656&4294967295,x=R+(C<<23&4294967295|C>>>9),C=_+(x^R^P)+A[13]+681279174&4294967295,_=x+(C<<4&4294967295|C>>>28),C=P+(_^x^R)+A[0]+3936430074&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^x)+A[3]+3572445317&4294967295,R=P+(C<<16&4294967295|C>>>16),C=x+(R^P^_)+A[6]+76029189&4294967295,x=R+(C<<23&4294967295|C>>>9),C=_+(x^R^P)+A[9]+3654602809&4294967295,_=x+(C<<4&4294967295|C>>>28),C=P+(_^x^R)+A[12]+3873151461&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^x)+A[15]+530742520&4294967295,R=P+(C<<16&4294967295|C>>>16),C=x+(R^P^_)+A[2]+3299628645&4294967295,x=R+(C<<23&4294967295|C>>>9),C=_+(R^(x|~P))+A[0]+4096336452&4294967295,_=x+(C<<6&4294967295|C>>>26),C=P+(x^(_|~R))+A[7]+1126891415&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~x))+A[14]+2878612391&4294967295,R=P+(C<<15&4294967295|C>>>17),C=x+(P^(R|~_))+A[5]+4237533241&4294967295,x=R+(C<<21&4294967295|C>>>11),C=_+(R^(x|~P))+A[12]+1700485571&4294967295,_=x+(C<<6&4294967295|C>>>26),C=P+(x^(_|~R))+A[3]+2399980690&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~x))+A[10]+4293915773&4294967295,R=P+(C<<15&4294967295|C>>>17),C=x+(P^(R|~_))+A[1]+2240044497&4294967295,x=R+(C<<21&4294967295|C>>>11),C=_+(R^(x|~P))+A[8]+1873313359&4294967295,_=x+(C<<6&4294967295|C>>>26),C=P+(x^(_|~R))+A[15]+4264355552&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~x))+A[6]+2734768916&4294967295,R=P+(C<<15&4294967295|C>>>17),C=x+(P^(R|~_))+A[13]+1309151649&4294967295,x=R+(C<<21&4294967295|C>>>11),C=_+(R^(x|~P))+A[4]+4149444226&4294967295,_=x+(C<<6&4294967295|C>>>26),C=P+(x^(_|~R))+A[11]+3174756917&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~x))+A[2]+718787259&4294967295,R=P+(C<<15&4294967295|C>>>17),C=x+(P^(R|~_))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const x=_-this.blockSize,A=this.C;let R=this.h,P=0;for(;P<_;){if(R==0)for(;P<=x;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(A[R++]=E.charCodeAt(P++),R==this.blockSize){i(this,A),R=0;break}}else for(;P<_;)if(A[R++]=E[P++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var x=E.length-8;x<E.length;++x)E[x]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,x=0;x<4;++x)for(let A=0;A<32;A+=8)E[_++]=this.g[x]>>>A&255;return E};function s(E,_){var x=l;return Object.prototype.hasOwnProperty.call(x,E)?x[E]:x[E]=_(E)}function o(E,_){this.h=_;const x=[];let A=!0;for(let R=E.length-1;R>=0;R--){const P=E[R]|0;A&&P==_||(x[R]=P,A=!1)}this.g=x}var l={};function c(E){return-128<=E&&E<128?s(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return b(u(-E));const _=[];let x=1;for(let A=0;E>=x;A++)_[A]=E/x|0,x*=4294967296;return new o(_,0)}function f(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return b(f(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=u(Math.pow(_,8));let A=m;for(let P=0;P<E.length;P+=8){var R=Math.min(8,E.length-P);const C=parseInt(E.substring(P,P+R),_);R<8?(R=u(Math.pow(_,R)),A=A.j(R).add(u(C))):(A=A.j(x),A=A.add(u(C)))}return A}var m=c(0),g=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-b(this).m();let E=0,_=1;for(let x=0;x<this.g.length;x++){const A=this.i(x);E+=(A>=0?A:4294967296+A)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(k(this))return"-"+b(this).toString(E);const _=u(Math.pow(E,6));var x=this;let A="";for(;;){const R=D(x,_).g;x=I(x,R.j(_));let P=((x.g.length>0?x.g[0]:x.h)>>>0).toString(E);if(x=R,T(x))return P+A;for(;P.length<6;)P="0"+P;A=P+A}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=I(this,E),k(E)?-1:T(E)?0:1};function b(E){const _=E.g.length,x=[];for(let A=0;A<_;A++)x[A]=~E.g[A];return new o(x,~E.h).add(g)}t.abs=function(){return k(this)?b(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),x=[];let A=0;for(let R=0;R<=_;R++){let P=A+(this.i(R)&65535)+(E.i(R)&65535),C=(P>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);A=C>>>16,P&=65535,C&=65535,x[R]=C<<16|P}return new o(x,x[x.length-1]&-2147483648?-1:0)};function I(E,_){return E.add(b(_))}t.j=function(E){if(T(this)||T(E))return m;if(k(this))return k(E)?b(this).j(b(E)):b(b(this).j(E));if(k(E))return b(this.j(b(E)));if(this.l(w)<0&&E.l(w)<0)return u(this.m()*E.m());const _=this.g.length+E.g.length,x=[];for(var A=0;A<2*_;A++)x[A]=0;for(A=0;A<this.g.length;A++)for(let R=0;R<E.g.length;R++){const P=this.i(A)>>>16,C=this.i(A)&65535,Te=E.i(R)>>>16,We=E.i(R)&65535;x[2*A+2*R]+=C*We,v(x,2*A+2*R),x[2*A+2*R+1]+=P*We,v(x,2*A+2*R+1),x[2*A+2*R+1]+=C*Te,v(x,2*A+2*R+1),x[2*A+2*R+2]+=P*Te,v(x,2*A+2*R+2)}for(E=0;E<_;E++)x[E]=x[2*E+1]<<16|x[2*E];for(E=_;E<2*_;E++)x[E]=0;return new o(x,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function S(E,_){this.g=E,this.h=_}function D(E,_){if(T(_))throw Error("division by zero");if(T(E))return new S(m,m);if(k(E))return _=D(b(E),_),new S(b(_.g),b(_.h));if(k(_))return _=D(E,b(_)),new S(b(_.g),_.h);if(E.g.length>30){if(k(E)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var x=g,A=_;A.l(E)<=0;)x=$(x),A=$(A);var R=F(x,1),P=F(A,1);for(A=F(A,2),x=F(x,2);!T(A);){var C=P.add(A);C.l(E)<=0&&(R=R.add(x),P=C),A=F(A,1),x=F(x,1)}return _=I(E,R.j(_)),new S(R,_)}for(R=m;E.l(_)>=0;){for(x=Math.max(1,Math.floor(E.m()/_.m())),A=Math.ceil(Math.log(x)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),P=u(x),C=P.j(_);k(C)||C.l(E)>0;)x-=A,P=u(x),C=P.j(_);T(P)&&(P=g),R=R.add(P),E=I(E,C)}return new S(R,E)}t.B=function(E){return D(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),x=[];for(let A=0;A<_;A++)x[A]=this.i(A)&E.i(A);return new o(x,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),x=[];for(let A=0;A<_;A++)x[A]=this.i(A)|E.i(A);return new o(x,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),x=[];for(let A=0;A<_;A++)x[A]=this.i(A)^E.i(A);return new o(x,this.h^E.h)};function $(E){const _=E.g.length+1,x=[];for(let A=0;A<_;A++)x[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(x,E.h)}function F(E,_){const x=_>>5;_%=32;const A=E.g.length-x,R=[];for(let P=0;P<A;P++)R[P]=_>0?E.i(P+x)>>>_|E.i(P+x+1)<<32-_:E.i(P+x);return new o(R,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,I1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,qr=o}).apply(typeof $v<"u"?$v:typeof self<"u"?self:typeof window<"u"?window:{});var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S1,ta,A1,gc,Wf,C1,R1,k1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gl=="object"&&Gl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var V=a[y];if(!(V in p))break e;p=p[V]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function f(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,V,L){for(var K=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)K[ae-2]=arguments[ae];return h.prototype[V].apply(y,K)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function T(a,h){for(let y=1;y<arguments.length;y++){const V=arguments[y];var p=typeof V;if(p=p!="object"?p:V?Array.isArray(V)?"array":p:"null",p=="array"||p=="object"&&typeof V.length=="number"){p=a.length||0;const L=V.length||0;a.length=p+L;for(let K=0;K<L;K++)a[p+K]=V[K]}else a.push(V)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function I(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const y=S.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var S=new k(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let $,F=!1,E=new v,_=()=>{const a=Promise.resolve(void 0);$=()=>{a.then(x)}};function x(){for(var a;a=I();){try{a.h.call(a.g)}catch(p){b(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function C(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Te,R),Te.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),rn=0;function Ee(a,h,p,y,V){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=V,this.key=++rn,this.da=this.fa=!1}function O(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function N(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function j(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function H(a){const h={};for(const p in a)h[p]=a[p];return h}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(a,h){let p,y;for(let V=1;V<arguments.length;V++){y=arguments[V];for(p in y)a[p]=y[p];for(let L=0;L<G.length;L++)p=G[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function Z(a){this.src=a,this.g={},this.h=0}Z.prototype.add=function(a,h,p,y,V){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const K=Ne(a,h,y,V);return K>-1?(h=a[K],p||(h.fa=!1)):(h=new Ee(h,this.src,L,!!y,V),h.fa=p,a.push(h)),h};function be(a,h){const p=h.type;if(p in a.g){var y=a.g[p],V=Array.prototype.indexOf.call(y,h,void 0),L;(L=V>=0)&&Array.prototype.splice.call(y,V,1),L&&(O(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ne(a,h,p,y){for(let V=0;V<a.length;++V){const L=a[V];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==y)return V}return-1}var ze="closure_lm_"+(Math.random()*1e6|0),Vt={};function At(a,h,p,y,V){if(Array.isArray(h)){for(let L=0;L<h.length;L++)At(a,h[L],p,y,V);return null}return p=xo(p),a&&a[We]?a.J(h,p,l(y)?!!y.capture:!1,V):cr(a,h,p,!1,y,V)}function cr(a,h,p,y,V,L){if(!h)throw Error("Invalid event type");const K=l(V)?!!V.capture:!!V;let ae=Eo(a);if(ae||(a[ze]=ae=new Z(a)),p=ae.add(h,p,y,K,L),p.proxy)return p;if(y=Hn(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)P||(V=K),V===void 0&&(V=!1),a.addEventListener(h.toString(),y,V);else if(a.attachEvent)a.attachEvent(wo(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Hn(){function a(p){return h.call(a.src,a.listener,p)}const h=pl;return a}function $t(a,h,p,y,V){if(Array.isArray(h))for(var L=0;L<h.length;L++)$t(a,h[L],p,y,V);else y=l(y)?!!y.capture:!!y,p=xo(p),a&&a[We]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=Ne(h,p,y,V),p>-1&&(O(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=Eo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ne(h,p,y,V)),(p=a>-1?h[a]:null)&&Xi(p))}function Xi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[We])be(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(wo(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Eo(h))?(be(p,a),p.h==0&&(p.src=null,h[ze]=null)):O(a)}}}function wo(a){return a in Vt?Vt[a]:Vt[a]="on"+a}function pl(a,h){if(a.da)a=!0;else{h=new Te(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&Xi(a),a=p.call(y,h)}return a}function Eo(a){return a=a[ze],a instanceof Z?a:null}var di="__closure_events_fn_"+(Math.random()*1e9>>>0);function xo(a){return typeof a=="function"?a:(a[di]||(a[di]=function(h){return a.handleEvent(h)}),a[di])}function it(){A.call(this),this.i=new Z(this),this.M=this,this.G=null}m(it,A),it.prototype[We]=!0,it.prototype.removeEventListener=function(a,h,p,y){$t(this,a,h,p,y)};function ht(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var V=h;h=new R(y,a),Y(h,V)}V=!0;let L,K;if(p)for(K=p.length-1;K>=0;K--)L=h.g=p[K],V=Ji(L,y,!0,h)&&V;if(L=h.g=a,V=Ji(L,y,!0,h)&&V,V=Ji(L,y,!1,h)&&V,p)for(K=0;K<p.length;K++)L=h.g=p[K],V=Ji(L,y,!1,h)&&V}it.prototype.N=function(){if(it.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)O(p[y]);delete a.g[h],a.h--}}this.G=null},it.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},it.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Ji(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let V=!0;for(let L=0;L<h.length;++L){const K=h[L];if(K&&!K.da&&K.capture==p){const ae=K.listener,Xe=K.ha||K.src;K.fa&&be(a.i,K),V=ae.call(Xe,y)!==!1&&V}}return V&&!y.defaultPrevented}function wh(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ml(a){a.g=wh(()=>{a.g=null,a.i&&(a.i=!1,ml(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class z extends A{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ml(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Q(a){A.call(this),this.h=a,this.g={}}m(Q,A);var ne=[];function De(a){N(a.g,function(h,p){this.g.hasOwnProperty(p)&&Xi(h)},a),a.g={}}Q.prototype.N=function(){Q.Z.N.call(this),De(this)},Q.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var To=o.JSON.stringify,MT=o.JSON.parse,jT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function rg(){}function ig(){}var Io={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Eh(){R.call(this,"d")}m(Eh,R);function xh(){R.call(this,"c")}m(xh,R);var fi={},sg=null;function gl(){return sg=sg||new it}fi.Ia="serverreachability";function og(a){R.call(this,fi.Ia,a)}m(og,R);function So(a){const h=gl();ht(h,new og(h))}fi.STAT_EVENT="statevent";function ag(a,h){R.call(this,fi.STAT_EVENT,a),this.stat=h}m(ag,R);function Ct(a){const h=gl();ht(h,new ag(h,a))}fi.Ja="timingevent";function lg(a,h){R.call(this,fi.Ja,a),this.size=h}m(lg,R);function Ao(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Co(){this.g=!0}Co.prototype.ua=function(){this.g=!1};function FT(a,h,p,y,V,L){a.info(function(){if(a.g)if(L){var K="",ae=L.split("&");for(let xe=0;xe<ae.length;xe++){var Xe=ae[xe].split("=");if(Xe.length>1){const st=Xe[0];Xe=Xe[1];const An=st.split("_");K=An.length>=2&&An[1]=="type"?K+(st+"="+Xe+"&"):K+(st+"=redacted&")}}}else K=null;else K=L;return"XMLHTTP REQ ("+y+") [attempt "+V+"]: "+h+`
`+p+`
`+K})}function UT(a,h,p,y,V,L,K){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+V+"]: "+h+`
`+p+`
`+L+" "+K})}function Zi(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+BT(a,p)+(y?" "+y:"")})}function zT(a,h){a.info(function(){return"TIMEOUT: "+h})}Co.prototype.info=function(){};function BT(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var V=y[0];if(V!="noop"&&V!="stop"&&V!="close")for(let K=1;K<y.length;K++)y[K]=""}}}}return To(L)}catch{return h}}var yl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},cg={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ug;function Th(){}m(Th,rg),Th.prototype.g=function(){return new XMLHttpRequest},ug=new Th;function Ro(a){return encodeURIComponent(String(a))}function HT(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function ur(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new Q(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hg}function hg(){this.i=null,this.g="",this.h=!1}var dg={},Ih={};function Sh(a,h,p){a.M=1,a.A=_l(Sn(h)),a.u=p,a.R=!0,fg(a,null)}function fg(a,h){a.F=Date.now(),vl(a),a.B=Sn(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Ag(p.i,"t",y),a.C=0,p=a.j.L,a.h=new hg,a.g=Hg(a.j,p?h:null,!a.u),a.P>0&&(a.O=new z(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var V="readystatechange";Array.isArray(V)||(V&&(ne[0]=V.toString()),V=ne);for(let L=0;L<V.length;L++){const K=At(p,V[L],y||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.J?H(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),So(),FT(a.i,a.v,a.B,a.l,a.S,a.u)}ur.prototype.ba=function(a){a=a.target;const h=this.O;h&&fr(a)==3?h.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const ae=fr(this.g),Xe=this.g.ya(),xe=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||Dg(this.g)))){this.K||ae!=4||Xe==7||(Xe==8||xe<=0?So(3):So(2)),Ah(this);var h=this.g.ca();this.X=h;var p=WT(this);if(this.o=h==200,UT(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,V=this.g;if((y=V.g?V.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(y)){var L=y;break t}}L=null}if(a=L)Zi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ch(this,a);else{this.o=!1,this.m=3,Ct(12),pi(this),ko(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<p.length;)if(st=GT(this,p),st==Ih){ae==4&&(this.m=4,Ct(14),a=!1),Zi(this.i,this.l,null,"[Incomplete Response]");break}else if(st==dg){this.m=4,Ct(15),Zi(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Zi(this.i,this.l,st,null),Ch(this,st);if(pg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||p.length!=0||this.h.h||(this.m=1,Ct(16),a=!1),this.o=this.o&&a,!a)Zi(this.i,this.l,p,"[Invalid Chunked Response]"),pi(this),ko(this);else if(p.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Vh(K),K.P=!0,Ct(11))}}else Zi(this.i,this.l,p,null),Ch(this,p);ae==4&&pi(this),this.o&&!this.K&&(ae==4?Fg(this.j,this):(this.o=!1,vl(this)))}else oI(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ct(12)):(this.m=0,Ct(13)),pi(this),ko(this)}}}catch{}finally{}};function WT(a){if(!pg(a))return a.g.la();const h=Dg(a.g);if(h==="")return"";let p="";const y=h.length,V=fr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return pi(a),ko(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(V&&L==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function pg(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function GT(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Ih:(p=Number(h.substring(p,y)),isNaN(p)?dg:(y+=1,y+p>h.length?Ih:(h=h.slice(y,y+p),a.C=y+p,h)))}ur.prototype.cancel=function(){this.K=!0,pi(this)};function vl(a){a.T=Date.now()+a.H,mg(a,a.H)}function mg(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ao(u(a.aa,a),h)}function Ah(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ur.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(zT(this.i,this.B),this.M!=2&&(So(),Ct(17)),pi(this),this.m=2,ko(this)):mg(this,this.T-a)};function ko(a){a.j.I==0||a.K||Fg(a.j,a)}function pi(a){Ah(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,De(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Ch(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Rh(p.h,a))){if(!a.L&&Rh(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var V=y;if(V[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Il(p),xl(p);else break e;Oh(p),Ct(18)}}else p.xa=V[1],0<p.xa-p.K&&V[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ao(u(p.Va,p),6e3));vg(p.h)<=1&&p.ta&&(p.ta=void 0)}else gi(p,11)}else if((a.L||p.g==a)&&Il(p),!C(h))for(V=p.Ba.g.parse(h),h=0;h<V.length;h++){let xe=V[h];const st=xe[0];if(!(st<=p.K))if(p.K=st,xe=xe[1],p.I==2)if(xe[0]=="c"){p.M=xe[1],p.ba=xe[2];const An=xe[3];An!=null&&(p.ka=An,p.j.info("VER="+p.ka));const yi=xe[4];yi!=null&&(p.za=yi,p.j.info("SVER="+p.za));const pr=xe[5];pr!=null&&typeof pr=="number"&&pr>0&&(y=1.5*pr,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const mr=a.g;if(mr){const Al=mr.g?mr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Al){var L=y.h;L.g||Al.indexOf("spdy")==-1&&Al.indexOf("quic")==-1&&Al.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(kh(L,L.h),L.h=null))}if(y.G){const $h=mr.g?mr.g.getResponseHeader("X-HTTP-Session-Id"):null;$h&&(y.wa=$h,Se(y.J,y.G,$h))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var K=a;if(y.na=Bg(y,y.L?y.ba:null,y.W),K.L){_g(y.h,K);var ae=K,Xe=y.O;Xe&&(ae.H=Xe),ae.D&&(Ah(ae),vl(ae)),y.g=K}else Mg(y);p.i.length>0&&Tl(p)}else xe[0]!="stop"&&xe[0]!="close"||gi(p,7);else p.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?gi(p,7):Dh(p):xe[0]!="noop"&&p.l&&p.l.qa(xe),p.A=0)}}So(4)}catch{}}var qT=class{constructor(a,h){this.g=a,this.map=h}};function gg(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function vg(a){return a.h?1:a.g?a.g.size:0}function Rh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kh(a,h){a.g?a.g.add(h):a.h=h}function _g(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gg.prototype.cancel=function(){if(this.i=wg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function wg(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return w(a.i)}var Eg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function KT(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let V,L=null;y>=0?(V=a[p].substring(0,y),L=a[p].substring(y+1)):V=a[p],h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function hr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof hr?(this.l=a.l,Po(this,a.j),this.o=a.o,this.g=a.g,bo(this,a.u),this.h=a.h,Ph(this,Cg(a.i)),this.m=a.m):a&&(h=String(a).match(Eg))?(this.l=!1,Po(this,h[1]||"",!0),this.o=No(h[2]||""),this.g=No(h[3]||"",!0),bo(this,h[4]),this.h=No(h[5]||"",!0),Ph(this,h[6]||"",!0),this.m=No(h[7]||"")):(this.l=!1,this.i=new Oo(null,this.l))}hr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Do(h,xg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Do(h,xg,!0),"@"),a.push(Ro(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Do(p,p.charAt(0)=="/"?XT:YT,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Do(p,ZT)),a.join("")},hr.prototype.resolve=function(a){const h=Sn(this);let p=!!a.j;p?Po(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)bo(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var V=h.h.lastIndexOf("/");V!=-1&&(y=h.h.slice(0,V+1)+y)}if(V=y,V==".."||V==".")y="";else if(V.indexOf("./")!=-1||V.indexOf("/.")!=-1){y=V.lastIndexOf("/",0)==0,V=V.split("/");const L=[];for(let K=0;K<V.length;){const ae=V[K++];ae=="."?y&&K==V.length&&L.push(""):ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&K==V.length&&L.push("")):(L.push(ae),y=!0)}y=L.join("/")}else y=V}return p?h.h=y:p=a.i.toString()!=="",p?Ph(h,Cg(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Sn(a){return new hr(a)}function Po(a,h,p){a.j=p?No(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ph(a,h,p){h instanceof Oo?(a.i=h,eI(a.i,a.l)):(p||(h=Do(h,JT)),a.i=new Oo(h,a.l))}function Se(a,h,p){a.i.set(h,p)}function _l(a){return Se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function No(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Do(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,QT),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function QT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xg=/[#\/\?@]/g,YT=/[#\?:]/g,XT=/[#\?]/g,JT=/[#\?@]/g,ZT=/#/g;function Oo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function mi(a){a.g||(a.g=new Map,a.h=0,a.i&&KT(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Oo.prototype,t.add=function(a,h){mi(this),this.i=null,a=es(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Tg(a,h){mi(a),h=es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ig(a,h){return mi(a),h=es(a,h),a.g.has(h)}t.forEach=function(a,h){mi(this),this.g.forEach(function(p,y){p.forEach(function(V){a.call(h,V,y,this)},this)},this)};function Sg(a,h){mi(a);let p=[];if(typeof h=="string")Ig(a,h)&&(p=p.concat(a.g.get(es(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return mi(this),this.i=null,a=es(this,a),Ig(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Sg(this,a),a.length>0?String(a[0]):h):h};function Ag(a,h,p){Tg(a,h),p.length>0&&(a.i=null,a.g.set(es(a,h),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const V=Ro(p);p=Sg(this,p);for(let L=0;L<p.length;L++){let K=V;p[L]!==""&&(K+="="+Ro(p[L])),a.push(K)}}return this.i=a.join("&")};function Cg(a){const h=new Oo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function eI(a,h){h&&!a.j&&(mi(a),a.i=null,a.g.forEach(function(p,y){const V=y.toLowerCase();y!=V&&(Tg(this,y),Ag(this,V,p))},a)),a.j=h}function tI(a,h){const p=new Co;if(o.Image){const y=new Image;y.onload=f(dr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=f(dr,p,"TestLoadImage: error",!1,h,y),y.onabort=f(dr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(dr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function nI(a,h){const p=new Co,y=new AbortController,V=setTimeout(()=>{y.abort(),dr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(V),L.ok?dr(p,"TestPingServer: ok",!0,h):dr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),dr(p,"TestPingServer: error",!1,h)})}function dr(a,h,p,y,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),y(p)}catch{}}function rI(){this.g=new jT}function bh(a){this.i=a.Sb||null,this.h=a.ab||!1}m(bh,rg),bh.prototype.g=function(){return new wl(this.i,this.h)};function wl(a,h){it.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(wl,it),t=wl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,$o(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Vo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,$o(this)),this.g&&(this.readyState=3,$o(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Rg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Rg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Vo(this):$o(this),this.readyState==3&&Rg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Vo(this))},t.Na=function(a){this.g&&(this.response=a,Vo(this))},t.ga=function(){this.g&&Vo(this)};function Vo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,$o(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function $o(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kg(a){let h="";return N(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Nh(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=kg(p),typeof a=="string"?p!=null&&Ro(p):Se(a,h,p))}function je(a){it.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(je,it);var iI=/^https?$/i,sI=["POST","PUT"];t=je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ug.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Pg(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var V in y)p.set(V,y[V]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),V=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(sI,h,void 0)>=0)||y||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,K]of p)this.g.setRequestHeader(L,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Pg(this,L)}};function Pg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,bg(a),El(a)}function bg(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ht(this,"complete"),ht(this,"abort"),El(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),El(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ng(this):this.Xa())},t.Xa=function(){Ng(this)};function Ng(a){if(a.h&&typeof s<"u"){if(a.v&&fr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ht(a,"readystatechange"),fr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=L===0){let K=String(a.D).match(Eg)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),y=!iI.test(K?K.toLowerCase():"")}p=y}if(p)ht(a,"complete"),ht(a,"success");else{a.o=6;try{var V=fr(a)>2?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.ca()+"]",bg(a)}}finally{El(a)}}}}function El(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||ht(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function fr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return fr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),MT(h)}};function Dg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oI(a){const h={};a=(a.g&&fr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(C(a[y]))continue;var p=HT(a[y]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[V]||[];h[V]=L,L.push(p)}j(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Lo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Og(a){this.za=0,this.i=[],this.j=new Co,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Lo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Lo("baseRetryDelayMs",5e3,a),this.Za=Lo("retryDelaySeedMs",1e4,a),this.Ta=Lo("forwardChannelMaxRetries",2,a),this.va=Lo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new gg(a&&a.concurrentRequestLimit),this.Ba=new rI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Og.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,y){Ct(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Bg(this,null,this.W),Tl(this)};function Dh(a){if(Vg(a),a.I==3){var h=a.V++,p=Sn(a.J);if(Se(p,"SID",a.M),Se(p,"RID",h),Se(p,"TYPE","terminate"),Mo(a,p),h=new ur(a,a.j,h),h.M=2,h.A=_l(Sn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Hg(h.j,null),h.g.ea(h.A)),h.F=Date.now(),vl(h)}zg(a)}function xl(a){a.g&&(Vh(a),a.g.cancel(),a.g=null)}function Vg(a){xl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Il(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Tl(a){if(!yg(a.h)&&!a.m){a.m=!0;var h=a.Ea;$||_(),F||($(),F=!0),E.add(h,a),a.D=0}}function aI(a,h){return vg(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ao(u(a.Ea,a,h),Ug(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const V=new ur(this,this.j,a);let L=this.o;if(this.U&&(L?(L=H(L),Y(L,this.U)):L=this.U),this.u!==null||this.R||(V.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Lg(this,V,h),p=Sn(this.J),Se(p,"RID",a),Se(p,"CVER",22),this.G&&Se(p,"X-HTTP-Session-Id",this.G),Mo(this,p),L&&(this.R?h="headers="+Ro(kg(L))+"&"+h:this.u&&Nh(p,this.u,L)),kh(this.h,V),this.Ra&&Se(p,"TYPE","init"),this.S?(Se(p,"$req",h),Se(p,"SID","null"),V.U=!0,Sh(V,p,null)):Sh(V,p,h),this.I=2}}else this.I==3&&(a?$g(this,a):this.i.length==0||yg(this.h)||$g(this))};function $g(a,h){var p;h?p=h.l:p=a.V++;const y=Sn(a.J);Se(y,"SID",a.M),Se(y,"RID",p),Se(y,"AID",a.K),Mo(a,y),a.u&&a.o&&Nh(y,a.u,a.o),p=new ur(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Lg(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),kh(a.h,p),Sh(p,y,h)}function Mo(a,h){a.H&&N(a.H,function(p,y){Se(h,y,p)}),a.l&&N({},function(p,y){Se(h,y,p)})}function Lg(a,h,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var V=a.i;let ae=-1;for(;;){const Xe=["count="+p];ae==-1?p>0?(ae=V[0].g,Xe.push("ofs="+ae)):ae=0:Xe.push("ofs="+ae);let xe=!0;for(let st=0;st<p;st++){var L=V[st].g;const An=V[st].map;if(L-=ae,L<0)ae=Math.max(0,V[st].g-100),xe=!1;else try{L="req"+L+"_"||"";try{var K=An instanceof Map?An:Object.entries(An);for(const[yi,pr]of K){let mr=pr;l(pr)&&(mr=To(pr)),Xe.push(L+yi+"="+encodeURIComponent(mr))}}catch(yi){throw Xe.push(L+"type="+encodeURIComponent("_badmap")),yi}}catch{y&&y(An)}}if(xe){K=Xe.join("&");break e}}K=void 0}return a=a.i.splice(0,p),h.G=a,K}function Mg(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;$||_(),F||($(),F=!0),E.add(h,a),a.A=0}}function Oh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ao(u(a.Da,a),Ug(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,jg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ao(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ct(10),xl(this),jg(this))};function Vh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function jg(a){a.g=new ur(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Sn(a.na);Se(h,"RID","rpc"),Se(h,"SID",a.M),Se(h,"AID",a.K),Se(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Se(h,"TO",a.ia),Se(h,"TYPE","xmlhttp"),Mo(a,h),a.u&&a.o&&Nh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=_l(Sn(h)),p.u=null,p.R=!0,fg(p,a)}t.Va=function(){this.C!=null&&(this.C=null,xl(this),Oh(this),Ct(19))};function Il(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Fg(a,h){var p=null;if(a.g==h){Il(a),Vh(a),a.g=null;var y=2}else if(Rh(a.h,h))p=h.G,_g(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var V=a.D;y=gl(),ht(y,new lg(y,p)),Tl(a)}else Mg(a);else if(V=h.m,V==3||V==0&&h.X>0||!(y==1&&aI(a,h)||y==2&&Oh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),V){case 1:gi(a,5);break;case 4:gi(a,10);break;case 3:gi(a,6);break;default:gi(a,2)}}}function Ug(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function gi(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),y=a.Ua;const V=!y;y=new hr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Po(y,"https"),_l(y),V?tI(y.toString(),p):nI(y.toString(),p)}else Ct(2);a.I=0,a.l&&a.l.pa(h),zg(a),Vg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function zg(a){if(a.I=0,a.ja=[],a.l){const h=wg(a.h);(h.length!=0||a.i.length!=0)&&(T(a.ja,h),T(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Bg(a,h,p){var y=p instanceof hr?Sn(p):new hr(p);if(y.g!="")h&&(y.g=h+"."+y.g),bo(y,y.u);else{var V=o.location;y=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;const L=new hr(null);y&&Po(L,y),h&&(L.g=h),V&&bo(L,V),p&&(L.h=p),y=L}return p=a.G,h=a.wa,p&&h&&Se(y,p,h),Se(y,"VER",a.ka),Mo(a,y),y}function Hg(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new je(new bh({ab:p})):new je(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wg(){}t=Wg.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Sl(){}Sl.prototype.g=function(a,h){return new Gt(a,h)};function Gt(a,h){it.call(this),this.g=new Og(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!C(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!C(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ts(this)}m(Gt,it),Gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){Dh(this.g)},Gt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=To(a),a=p);h.i.push(new qT(h.Ya++,a)),h.I==3&&Tl(h)},Gt.prototype.N=function(){this.g.l=null,delete this.j,Dh(this.g),delete this.g,Gt.Z.N.call(this)};function Gg(a){Eh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(Gg,Eh);function qg(){xh.call(this),this.status=1}m(qg,xh);function ts(a){this.g=a}m(ts,Wg),ts.prototype.ra=function(){ht(this.g,"a")},ts.prototype.qa=function(a){ht(this.g,new Gg(a))},ts.prototype.pa=function(a){ht(this.g,new qg)},ts.prototype.oa=function(){ht(this.g,"b")},Sl.prototype.createWebChannel=Sl.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,k1=function(){return new Sl},R1=function(){return gl()},C1=fi,Wf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yl.NO_ERROR=0,yl.TIMEOUT=8,yl.HTTP_ERROR=6,gc=yl,cg.COMPLETE="complete",A1=cg,ig.EventType=Io,Io.OPEN="a",Io.CLOSE="b",Io.ERROR="c",Io.MESSAGE="d",it.prototype.listen=it.prototype.J,ta=ig,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,S1=je}).apply(typeof Gl<"u"?Gl:typeof self<"u"?self:typeof window<"u"?window:{});const Lv="@firebase/firestore",Mv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new pm("@firebase/firestore");function ss(){return Fi.logLevel}function X(t,...e){if(Fi.logLevel<=ue.DEBUG){const n=e.map(ym);Fi.debug(`Firestore (${uo}): ${t}`,...n)}}function ir(t,...e){if(Fi.logLevel<=ue.ERROR){const n=e.map(ym);Fi.error(`Firestore (${uo}): ${t}`,...n)}}function Ks(t,...e){if(Fi.logLevel<=ue.WARN){const n=e.map(ym);Fi.warn(`Firestore (${uo}): ${t}`,...n)}}function ym(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,P1(t,r,n)}function P1(t,e,n){let r=`FIRESTORE (${uo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ir(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||P1(e,i,r)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends lr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class IP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SP{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ki;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ki,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ki)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new b1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class AP{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class CP{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new AP(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RP{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=s=>{s.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new jv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=kP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Gf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return _d(i)===_d(s)?he(i,s):_d(i)?1:-1}return he(t.length,e.length)}const PP=55296,bP=57343;function _d(t){const e=t.charCodeAt(0);return e>=PP&&e<=bP}function Qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="__name__";class Pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Pn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=Pn.isNumericId(e),i=Pn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):Gf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return qr.fromString(e.substring(4,e.length-2))}}class Re extends Pn{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const NP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Pn{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return NP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fv}static keyField(){return new pt([Fv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ee(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new ee(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new ee(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Re.fromString(e))}static fromName(e){return new te(Re.fromString(e).popFirst(5))}static empty(){return new te(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e,n){if(!n)throw new ee(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DP(t,e,n,r){if(e===!0&&r===!0)throw new ee(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uv(t){if(!te.isDocumentKey(t))throw new ee(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zv(t){if(te.isDocumentKey(t))throw new ee(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function D1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _m(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function Kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_m(t);throw new ee(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ol(t,e){if(!D1(t))throw new ee(W.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new ee(W.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=-62135596800,Hv=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Hv);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bv)throw new ee(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hv}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ol(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Qe("string",ke._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new ke(0,0))}static max(){return new se(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=-1;function OP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new Zr(i,te.empty(),e)}function VP(t){return new Zr(t.readTime,t.key,Ba)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(se.min(),te.empty(),Ba)}static max(){return new Zr(se.max(),te.empty(),Ba)}}function $P(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==LP)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ku.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=-1;function Qu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function FP(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="";function UP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wv(e)),e=zP(t.get(n),e);return Wv(e)}function zP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case O1:n+="";break;default:n+=s}}return n}function Wv(t){return t+O1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}}class ql{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ft.RED,this.left=i??ft.EMPTY,this.right=s??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qv(this.data.getIterator())}getIteratorFrom(e){return new qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new nt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $1("Invalid base64 string: "+s):s}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const BP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=BP.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="server_timestamp",M1="__type__",j1="__previous_value__",F1="__local_write_time__";function Em(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[M1])==null?void 0:r.stringValue)===L1}function Yu(t){const e=t.mapValue.fields[j1];return Em(e)?Yu(e):e}function Ha(t){const e=ei(t.mapValue.fields[F1].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,i,s,o,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const ou="(default)";class Wa{constructor(e,n){this.projectId=e,this.database=n||ou}static empty(){return new Wa("","")}get isDefaultDatabase(){return this.database===ou}isEqual(e){return e instanceof Wa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="__type__",WP="__max__",Kl={mapValue:{}},z1="__vector__",au="value";function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Em(t)?4:qP(t)?9007199254740991:GP(t)?10:11:ie(28295,{value:t})}function zn(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ha(t).isEqual(Ha(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),l=ei(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ti(i.bytesValue).isEqual(ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),l=Be(s.doubleValue);return o===l?su(o)===su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Gv(o)!==Gv(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!zn(o[c],l[c])))return!1;return!0}(t,e);default:return ie(52216,{left:t})}}function Ga(t,e){return(t.values||[]).find(n=>zn(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=ni(t),r=ni(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Be(s.integerValue||s.doubleValue),c=Be(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Kv(t.timestampValue,e.timestampValue);case 4:return Kv(Ha(t),Ha(e));case 5:return Gf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ti(s),c=ti(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=he(l[u],c[u]);if(f!==0)return f}return he(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(Be(s.latitude),Be(o.latitude));return l!==0?l:he(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Qv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,w,T,k;const l=s.fields||{},c=o.fields||{},u=(g=l[au])==null?void 0:g.arrayValue,f=(w=c[au])==null?void 0:w.arrayValue,m=he(((T=u==null?void 0:u.values)==null?void 0:T.length)||0,((k=f==null?void 0:f.values)==null?void 0:k.length)||0);return m!==0?m:Qv(u,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Kl.mapValue&&o===Kl.mapValue)return 0;if(s===Kl.mapValue)return 1;if(o===Kl.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const g=Gf(c[m],f[m]);if(g!==0)return g;const w=Ys(l[c[m]],u[f[m]]);if(w!==0)return w}return he(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ie(23264,{he:n})}}function Kv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=ei(t),r=ei(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function Qv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ys(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function Xs(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=qf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${qf(n.fields[o])}`;return i+"}"}(t.mapValue):ie(61005,{value:t})}function yc(t){switch(ni(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yu(t);return e?16+yc(e):16;case 5:return 2*t.stringValue.length;case 6:return ti(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+yc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ci(r.fields,(s,o)=>{i+=s.length+yc(o)}),i}(t.mapValue);default:throw ie(13486,{value:t})}}function Kf(t){return!!t&&"integerValue"in t}function xm(t){return!!t&&"arrayValue"in t}function Yv(t){return!!t&&"nullValue"in t}function Xv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vc(t){return!!t&&"mapValue"in t}function GP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[U1])==null?void 0:r.stringValue)===z1}function ga(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ga(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ga(t.arrayValue.values[n]);return e}return{...t}}function qP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ga(n)}setAll(e){let n=pt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ga(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());vc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(ga(this.value))}}function B1(t){const e=[];return ci(t.fields,(n,r)=>{const i=new pt([n]);if(vc(r)){const s=B1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,se.min(),se.min(),se.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,se.min(),se.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,se.min(),se.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.position=e,this.inclusive=n}}function Jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=Ys(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n="asc"){this.field=e,this.dir=n}}function KP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{}class Ze extends H1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new YP(e,n,r):n==="array-contains"?new ZP(e,r):n==="in"?new eb(e,r):n==="not-in"?new tb(e,r):n==="array-contains-any"?new nb(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XP(e,r):new JP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ys(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends H1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Bn(e,n)}matches(e){return W1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function W1(t){return t.op==="and"}function G1(t){return QP(t)&&W1(t)}function QP(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function Qf(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(G1(t))return t.filters.map(e=>Qf(e)).join(",");{const e=t.filters.map(n=>Qf(n)).join(",");return`${t.op}(${e})`}}function q1(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&zn(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&q1(o,i.filters[l]),!0):!1}(t,e):void ie(19439)}function K1(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(K1).join(" ,")+"}"}(t):"Filter"}class YP extends Ze{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class XP extends Ze{constructor(e,n){super(e,"in",n),this.keys=Q1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JP extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Q1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Q1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class ZP extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xm(n)&&Ga(n.arrayValue,this.value)}}class eb extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ga(this.value.arrayValue,n)}}class tb extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ga(this.value.arrayValue,n)}}class nb extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ga(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function e_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rb(t,e,n,r,i,s,o)}function Tm(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xs(r)).join(",")),e.Te=n}return e.Te}function Im(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!KP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zv(t.startAt,e.startAt)&&Zv(t.endAt,e.endAt)}function Yf(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ib(t,e,n,r,i,s,o,l){return new Xu(t,e,n,r,i,s,o,l)}function Sm(t){return new Xu(t)}function t_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sb(t){return t.collectionGroup!==null}function ya(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new cu(s,r))}),n.has(pt.keyField().canonicalString())||e.Ie.push(new cu(pt.keyField(),r))}return e.Ie}function $n(t){const e=oe(t);return e.Ee||(e.Ee=ob(e,ya(t))),e.Ee}function ob(t,e){if(t.limitType==="F")return e_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new cu(i.field,s)});const n=t.endAt?new lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lu(t.startAt.position,t.startAt.inclusive):null;return e_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xf(t,e,n){return new Xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return Im($n(t),$n(e))&&t.limitType===e.limitType}function Y1(t){return`${Tm($n(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>K1(i)).join(", ")}]`),Qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xs(i)).join(",")),`Target(${r})`}($n(t))}; limitType=${t.limitType})`}function Zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ya(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=Jv(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,ya(r),i)||r.endAt&&!function(o,l,c){const u=Jv(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,ya(r),i))}(t,e)}function ab(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function X1(t){return(e,n)=>{let r=!1;for(const i of ya(t)){const s=lb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?Ys(c,u):ie(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return V1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Me(te.comparator);function sr(){return cb}const J1=new Me(te.comparator);function na(...t){let e=J1;for(const n of t)e=e.insert(n.key,n);return e}function Z1(t){let e=J1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return va()}function ex(){return va()}function va(){return new qi(t=>t.toString(),(t,e)=>t.isEqual(e))}const ub=new Me(te.comparator),hb=new nt(te.comparator);function de(...t){let e=hb;for(const n of t)e=e.add(n);return e}const db=new nt(he);function fb(){return db}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function tx(t){return{integerValue:""+t}}function pb(t,e){return FP(e)?tx(e):Am(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function mb(t,e,n){return t instanceof uu?function(i,s){const o={fields:{[M1]:{stringValue:L1},[F1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Em(s)&&(s=Yu(s)),s&&(o.fields[j1]=s),{mapValue:o}}(n,e):t instanceof qa?rx(t,e):t instanceof Ka?ix(t,e):function(i,s){const o=nx(i,s),l=n_(o)+n_(i.Ae);return Kf(o)&&Kf(i.Ae)?tx(l):Am(i.serializer,l)}(t,e)}function gb(t,e,n){return t instanceof qa?rx(t,e):t instanceof Ka?ix(t,e):n}function nx(t,e){return t instanceof hu?function(r){return Kf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class uu extends eh{}class qa extends eh{constructor(e){super(),this.elements=e}}function rx(t,e){const n=sx(e);for(const r of t.elements)n.some(i=>zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ka extends eh{constructor(e){super(),this.elements=e}}function ix(t,e){let n=sx(e);for(const r of t.elements)n=n.filter(i=>!zn(i,r));return{arrayValue:{values:n}}}class hu extends eh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function n_(t){return Be(t.integerValue||t.doubleValue)}function sx(t){return xm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qa&&i instanceof qa||r instanceof Ka&&i instanceof Ka?Qs(r.elements,i.elements,zn):r instanceof hu&&i instanceof hu?zn(r.Ae,i.Ae):r instanceof uu&&i instanceof uu}(t.transform,e.transform)}class vb{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _c(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function ox(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nh(t.key,Zt.none()):new al(t.key,t.data,Zt.none());{const n=t.data,r=Ut.empty();let i=new nt(pt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ui(t.key,r,new Xt(i.toArray()),Zt.none())}}function _b(t,e,n){t instanceof al?function(i,s,o){const l=i.value.clone(),c=i_(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ui?function(i,s,o){if(!_c(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=i_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(ax(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,r){return t instanceof al?function(s,o,l,c){if(!_c(s.precondition,o))return l;const u=s.value.clone(),f=s_(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ui?function(s,o,l,c){if(!_c(s.precondition,o))return l;const u=s_(s.fieldTransforms,c,o),f=o.data;return f.setAll(ax(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return _c(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function wb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nx(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function r_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qs(r,i,(s,o)=>yb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class al extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ui extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ax(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function i_(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,gb(o,l,n[i]))}return r}function s_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mb(s,o,e))}return r}class nh extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eb extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_b(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_a(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ex();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=ox(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>r_(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>r_(n,r))}}class Cm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return ub}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,pe;function Sb(t){switch(t){case W.OK:return ie(64938);case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function lx(t){if(t===void 0)return ir("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ge.OK:return W.OK;case Ge.CANCELLED:return W.CANCELLED;case Ge.UNKNOWN:return W.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return W.INTERNAL;case Ge.UNAVAILABLE:return W.UNAVAILABLE;case Ge.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ge.NOT_FOUND:return W.NOT_FOUND;case Ge.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ge.ABORTED:return W.ABORTED;case Ge.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ge.DATA_LOSS:return W.DATA_LOSS;default:return ie(39323,{code:t})}}(pe=Ge||(Ge={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=new qr([4294967295,4294967295],0);function o_(t){const e=Ab().encode(t),n=new I1;return n.update(e),new Uint8Array(n.digest())}function a_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new qr([n,r],0),new qr([i,s],0)]}class Rm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ra(`Invalid padding: ${n}`);if(r<0)throw new ra(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ra(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ra(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=qr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(qr.fromNumber(r)));return i.compare(Cb)===1&&(i=new qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=o_(e),[r,i]=a_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Rm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=o_(e),[r,i]=a_(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rh(se.min(),i,new Me(he),sr(),de())}}class ll{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ll(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class cx{constructor(e,n){this.targetId=e,this.Ce=n}}class ux{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class l_{constructor(){this.ve=0,this.Fe=c_(),this.Me=yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ie(38017,{changeType:s})}}),new ll(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=c_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Rb{constructor(e){this.Ge=e,this.ze=new Map,this.je=sr(),this.Je=Ql(),this.He=Ql(),this.Ye=new Me(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Yf(s))if(r===0){const o=new te(s.path);this.et(n,o,Tt.newNoDocument(o,se.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ti(r).toUint8Array()}catch(c){if(c instanceof $1)return Ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Rm(o,i,s)}catch(c){return Ks(c instanceof ra?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Yf(l.target)){const c=new te(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Tt.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=de();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new rh(e,n,this.Ye,this.je,r);return this.je=sr(),this.Je=Ql(),this.He=Ql(),this.Ye=new Me(he),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new l_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new nt(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new nt(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new l_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ql(){return new Me(te.comparator)}function c_(){return new Me(te.comparator)}const kb={asc:"ASCENDING",desc:"DESCENDING"},Pb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bb={and:"AND",or:"OR"};class Nb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jf(t,e){return t.useProto3Json||Qu(e)?e:{value:e}}function du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Db(t,e){return du(t,e.toTimestamp())}function Ln(t){return _e(!!t,49232),se.fromTimestamp(function(n){const r=ei(n);return new ke(r.seconds,r.nanos)}(t))}function km(t,e){return Zf(t,e).canonicalString()}function Zf(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dx(t){const e=Re.fromString(t);return _e(yx(e),10190,{key:e.toString()}),e}function ep(t,e){return km(t.databaseId,e.path)}function wd(t,e){const n=dx(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(px(n))}function fx(t,e){return km(t.databaseId,e)}function Ob(t){const e=dx(t);return e.length===4?Re.emptyPath():px(e)}function tp(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function px(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function u_(t,e,n){return{name:ep(t,e),fields:n.value.mapValue.fields}}function Vb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(_e(f===void 0||typeof f=="string",58123),yt.fromBase64String(f||"")):(_e(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),yt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?W.UNKNOWN:lx(u.code);return new ee(f,u.message||"")}(o);n=new ux(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wd(t,r.document.name),s=Ln(r.document.updateTime),o=r.document.createTime?Ln(r.document.createTime):se.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(i,s,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new wc(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wd(t,r.document),s=r.readTime?Ln(r.readTime):se.min(),o=Tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new wc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wd(t,r.document),s=r.removedTargetIds||[];n=new wc([],s,i,null)}else{if(!("filter"in e))return ie(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ib(i,s),l=r.targetId;n=new cx(l,o)}}return n}function $b(t,e){let n;if(e instanceof al)n={update:u_(t,e.key,e.value)};else if(e instanceof nh)n={delete:ep(t,e.key)};else if(e instanceof ui)n={update:u_(t,e.key,e.data),updateMask:Wb(e.fieldMask)};else{if(!(e instanceof Eb))return ie(16599,{Vt:e.type});n={verify:ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof uu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ie(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Db(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ie(27497)}(t,e.precondition)),n}function Lb(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Ln(i.updateTime):Ln(s);return o.isEqual(se.min())&&(o=Ln(s)),new vb(o,i.transformResults||[])}(n,e))):[]}function Mb(t,e){return{documents:[fx(t,e.path)]}}function jb(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fx(t,i);const s=function(u){if(u.length!==0)return gx(Bn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:as(g.field),direction:zb(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Jf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function Fb(t){let e=Ob(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=mx(m);return g instanceof Bn&&G1(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(T){return new cu(ls(T.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Qu(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(m){const g=!!m.before,w=m.values||[];return new lu(w,g)}(n.startAt));let u=null;return n.endAt&&(u=function(m){const g=!m.before,w=m.values||[];return new lu(w,g)}(n.endAt)),ib(e,i,o,s,l,"F",c,u)}function Ub(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ls(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ls(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ls(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ls(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(ls(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>mx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie(1026)}}(n.compositeFilter.op))}(t):ie(30097,{filter:t})}function zb(t){return kb[t]}function Bb(t){return Pb[t]}function Hb(t){return bb[t]}function as(t){return{fieldPath:t.canonicalString()}}function ls(t){return pt.fromServerFormat(t.fieldPath)}function gx(t){return t instanceof Ze?function(n){if(n.op==="=="){if(Xv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NAN"}};if(Yv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NAN"}};if(Yv(n.value))return{unaryFilter:{field:as(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(n.field),op:Bb(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>gx(i));return r.length===1?r[0]:{compositeFilter:{op:Hb(n.op),filters:r}}}(t):ie(54877,{filter:t})}function Wb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n,r,i,s=se.min(),o=se.min(),l=yt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.yt=e}}function qb(t){const e=Fb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.Cn=new Qb}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Zr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Qb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new nt(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new nt(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vx=41943040;class Lt{static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(vx,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Js(0)}static cr(){return new Js(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="LruGarbageCollector",Yb=1048576;function f_([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class Xb{constructor(e){this.Ir=e,this.buffer=new nt(f_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();f_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Jb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(d_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fo(n)?X(d_,"Ignoring IndexedDB error during garbage collection: ",n):await ho(n)}await this.Vr(3e5)})}}class Zb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Ku.ce);const r=new Xb(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(h_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),h_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(u=Date.now(),ss()<=ue.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${m} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function eN(t,e){return new Zb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.changes=new qi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_a(r.mutation,i,Xt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Si();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=na();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=sr();const o=va(),l=function(){return va()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof ui)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),_a(f.mutation,u,f.mutation.getFieldMask(),ke.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>l.set(u,new nN(f,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=va();let i=new Me((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Xt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const m=(i.get(l.batchId)||de()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,m=ex();f.forEach(g=>{if(!s.has(g)){const w=ox(n.get(g),r.get(g));w!==null&&m.set(g,w),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(Si());let l=Ba,c=s;return o.next(u=>B.forEach(u,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,de())).next(f=>({batchId:l,changes:Z1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=na();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,c=>{const u=function(m,g){return new Xu(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let l=na();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&_a(f.mutation,u,Xt.empty(),ke.now()),Zu(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ln(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:qb(i.bundledQuery),readTime:Ln(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.overlays=new Me(te.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=Si(),s=n.length+1,o=new te(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Si(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Si(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return B.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tb(n,r));let s=this.qr.get(n);s===void 0&&(s=de(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.Qr=new nt(ot.$r),this.Ur=new nt(ot.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ot(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new te(new Re([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new te(new Re([])),r=new ot(n,e),i=new ot(n,e+1);let s=de();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return te.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new nt(ot.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ot(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?wm:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(he);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const o=new ot(new te(s),0);let l=new nt(he);return this.Zr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Yr)),!0)},o),B.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ot(n,0),i=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.ri=e,this.docs=function(){return new Me(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=sr();const o=n.path,l=new te(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||$P(VP(f),r)<=0||(i.has(f.key)||Zu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ie(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cN(this)}getSize(e){return B.resolve(this.size)}}class cN extends tN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.persistence=e,this.si=new qi(n=>Tm(n),Im),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new Pm,this.targetCount=0,this.ai=Js.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ku(0),this.li=!1,this.li=!0,this.hi=new oN,this.referenceDelegate=e(this),this.Pi=new uN(this),this.indexManager=new Kb,this.remoteDocumentCache=function(i){return new lN(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Gb(n),this.Ii=new iN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new aN(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new hN(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class hN extends MP{constructor(e){super(),this.currentSequenceNumber=e}}class bm{constructor(e){this.persistence=e,this.Ri=new Pm,this.Vi=null}static mi(e){return new bm(e)}get fi(){if(this.Vi)return this.Vi;throw ie(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const i=te.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class fu{constructor(e,n){this.persistence=e,this.pi=new qi(r=>UP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=eN(this,n)}static mi(e,n){return new fu(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=yc(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Nm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return sk()?8:jP(St())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dN;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ss()<=ue.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):(ss()<=ue.DEBUG&&X("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ss()<=ue.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):B.resolve())}ys(e,n){if(t_(n))return B.resolve(null);let r=$n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xf(n,null,"F"),r=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ds(n,l);return this.Cs(n,u,o,c.readTime)?this.ys(e,Xf(n,null,"F")):this.vs(e,u,n,c)}))})))}ws(e,n,r,i){return t_(n)||i.isEqual(se.min())?B.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?B.resolve(null):(ss()<=ue.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.vs(e,o,n,OP(i,Ba)).next(l=>l))})}Ds(e,n){let r=new nt(X1(e));return n.forEach((i,s)=>{Zu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ss()<=ue.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",os(n)),this.ps.getDocumentsMatchingQuery(e,n,Zr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="LocalStore",pN=3e8;class mN{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Me(he),this.xs=new qi(s=>Tm(s),Im),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function gN(t,e,n,r){return new mN(t,e,n,r)}async function wx(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=de();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:l}))})})}function yN(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const m=u.batch,g=m.keys();let w=B.resolve();return g.forEach(T=>{w=w.next(()=>f.getEntry(c,T)).next(k=>{const b=u.docVersions.get(T);_e(b!==null,48541),k.version.compareTo(b)<0&&(m.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ex(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function vN(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let w=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?w=w.withResumeToken(yt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(m,w),function(k,b,I){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=pN?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,w,f)&&l.push(n.Pi.updateTargetData(s,w))});let c=sr(),u=de();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(_N(s,o,e.documentUpdates).next(f=>{c=f.ks,u=f.qs})),!r.isEqual(se.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.Ms=i,s))}function _N(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=sr();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):X(Dm,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{ks:o,qs:i}})}function wN(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EN(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function np(t,e,n){const r=oe(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fo(o))throw o;X(Dm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function p_(t,e,n){const r=oe(t);let i=se.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const m=oe(c),g=m.xs.get(f);return g!==void 0?B.resolve(m.Ms.get(g)):m.Pi.getTargetData(u,f)}(r,o,$n(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:de())).next(l=>(xN(r,ab(e),l),{documents:l,Qs:s})))}function xN(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class m_{constructor(){this.activeTargetIds=fb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TN{constructor(){this.Mo=new m_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new m_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="ConnectivityMonitor";class y_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(g_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(g_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl=null;function rp(){return Yl===null?Yl=function(){return 268435456+Math.round(2147483648*Math.random())}():Yl++,"0x"+Yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="RestConnection",SN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===ou?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=rp(),l=this.zo(e,n.toUriEncodedString());X(Ed,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:u}=new URL(l),f=lo(u);return this.Jo(e,l,c,r,f).then(m=>(X(Ed,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ks(Ed,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+uo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=SN[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class RN extends AN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=rp();return new Promise((l,c)=>{const u=new S1;u.setWithCredentials(!0),u.listenOnce(A1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case gc.NO_ERROR:const m=u.getResponseJson();X(wt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case gc.TIMEOUT:X(wt,`RPC '${e}' ${o} timed out`),c(new ee(W.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const g=u.getStatus();if(X(wt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const T=w==null?void 0:w.error;if(T&&T.status&&T.message){const k=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(v)>=0?v:W.UNKNOWN}(T.status);c(new ee(k,T.message))}else c(new ee(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ee(W.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(wt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);X(wt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",f,r,15)})}T_(e,n,r){const i=rp(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=k1(),l=R1(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");X(wt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);this.I_(m);let g=!1,w=!1;const T=new CN({Yo:b=>{w?X(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(X(wt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),X(wt,`RPC '${e}' stream ${i} sending:`,b),m.send(b))},Zo:()=>m.close()}),k=(b,I,v)=>{b.listen(I,S=>{try{v(S)}catch(D){setTimeout(()=>{throw D},0)}})};return k(m,ta.EventType.OPEN,()=>{w||(X(wt,`RPC '${e}' stream ${i} transport opened.`),T.o_())}),k(m,ta.EventType.CLOSE,()=>{w||(w=!0,X(wt,`RPC '${e}' stream ${i} transport closed`),T.a_(),this.E_(m))}),k(m,ta.EventType.ERROR,b=>{w||(w=!0,Ks(wt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),T.a_(new ee(W.UNAVAILABLE,"The operation could not be completed")))}),k(m,ta.EventType.MESSAGE,b=>{var I;if(!w){const v=b.data[0];_e(!!v,16349);const S=v,D=(S==null?void 0:S.error)||((I=S[0])==null?void 0:I.error);if(D){X(wt,`RPC '${e}' stream ${i} received error:`,D);const $=D.status;let F=function(x){const A=Ge[x];if(A!==void 0)return lx(A)}($),E=D.message;F===void 0&&(F=W.INTERNAL,E="Unknown error status: "+$+" with message "+D.message),w=!0,T.a_(new ee(F,E)),m.close()}else X(wt,`RPC '${e}' stream ${i} received:`,v),T.u_(v)}}),k(l,C1.STAT_EVENT,b=>{b.stat===Wf.PROXY?X(wt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Wf.NOPROXY&&X(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.__()},0),T}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function xd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){return new Nb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="PersistentStream";class Tx{constructor(e,n,r,i,s,o,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xx(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new ee(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(v_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(v_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kN extends Tx{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Vb(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Ln(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=tp(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Yf(c)?{documents:Mb(s,c)}:{query:jb(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hx(s,o.resumeToken);const u=Jf(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=du(s,o.snapshotVersion.toTimestamp());const u=Jf(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=Ub(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=tp(this.serializer),n.removeTarget=e,this.q_(n)}}class PN extends Tx{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Lb(e.writeResults,e.commitTime),r=Ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=tp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$b(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{}class NN extends bN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(W.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Zf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ee(W.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Zf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(W.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class DN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ir(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="RemoteStore";class ON{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ki(this)&&(X(Ui,"Restarting streams for network reachability change."),await async function(c){const u=oe(c);u.Ea.add(4),await cl(u),u.Ra.set("Unknown"),u.Ea.delete(4),await sh(u)}(this))})}),this.Ra=new DN(r,i)}}async function sh(t){if(Ki(t))for(const e of t.da)await e(!0)}async function cl(t){for(const e of t.da)await e(!1)}function Ix(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Lm(n)?$m(n):po(n).O_()&&Vm(n,e))}function Om(t,e){const n=oe(t),r=po(n);n.Ia.delete(e),r.O_()&&Sx(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ki(n)&&n.Ra.set("Unknown"))}function Vm(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}po(t).Y_(e)}function Sx(t,e){t.Va.Ue(e),po(t).Z_(e)}function $m(t){t.Va=new Rb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),po(t).start(),t.Ra.ua()}function Lm(t){return Ki(t)&&!po(t).x_()&&t.Ia.size>0}function Ki(t){return oe(t).Ea.size===0}function Ax(t){t.Va=void 0}async function VN(t){t.Ra.set("Online")}async function $N(t){t.Ia.forEach((e,n)=>{Vm(t,e)})}async function LN(t,e){Ax(t),Lm(t)?(t.Ra.ha(e),$m(t)):t.Ra.set("Unknown")}async function MN(t,e,n){if(t.Ra.set("Online"),e instanceof ux&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){X(Ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pu(t,r)}else if(e instanceof wc?t.Va.Ze(e):e instanceof cx?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await Ex(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.Ia.get(u);f&&s.Ia.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=s.Ia.get(c);if(!f)return;s.Ia.set(c,f.withResumeToken(yt.EMPTY_BYTE_STRING,f.snapshotVersion)),Sx(s,c);const m=new Nr(f.target,c,u,f.sequenceNumber);Vm(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Ui,"Failed to raise snapshot:",r),await pu(t,r)}}async function pu(t,e,n){if(!fo(e))throw e;t.Ea.add(1),await cl(t),t.Ra.set("Offline"),n||(n=()=>Ex(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Ui,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await sh(t)})}function Cx(t,e){return e().catch(n=>pu(t,n,e))}async function oh(t){const e=oe(t),n=ri(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:wm;for(;jN(e);)try{const i=await wN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,FN(e,i)}catch(i){await pu(e,i)}Rx(e)&&kx(e)}function jN(t){return Ki(t)&&t.Ta.length<10}function FN(t,e){t.Ta.push(e);const n=ri(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Rx(t){return Ki(t)&&!ri(t).x_()&&t.Ta.length>0}function kx(t){ri(t).start()}async function UN(t){ri(t).ra()}async function zN(t){const e=ri(t);for(const n of t.Ta)e.ea(n.mutations)}async function BN(t,e,n){const r=t.Ta.shift(),i=Cm.from(r,e,n);await Cx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oh(t)}async function HN(t,e){e&&ri(t).X_&&await async function(r,i){if(function(o){return Sb(o)&&o!==W.ABORTED}(i.code)){const s=r.Ta.shift();ri(r).B_(),await Cx(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oh(r)}}(t,e),Rx(t)&&kx(t)}async function __(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),X(Ui,"RemoteStore received new credentials");const r=Ki(n);n.Ea.add(3),await cl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await sh(n)}async function WN(t,e){const n=oe(t);e?(n.Ea.delete(2),await sh(n)):e||(n.Ea.add(2),await cl(n),n.Ra.set("Unknown"))}function po(t){return t.ma||(t.ma=function(n,r,i){const s=oe(n);return s.sa(),new kN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:VN.bind(null,t),t_:$N.bind(null,t),r_:LN.bind(null,t),H_:MN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Lm(t)?$m(t):t.Ra.set("Unknown")):(await t.ma.stop(),Ax(t))})),t.ma}function ri(t){return t.fa||(t.fa=function(n,r,i){const s=oe(n);return s.sa(),new PN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:UN.bind(null,t),r_:HN.bind(null,t),ta:zN.bind(null,t),na:BN.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await oh(t)):(await t.fa.stop(),t.Ta.length>0&&(X(Ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Mm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jm(t,e){if(ir("AsyncQueue",`${e}: ${t}`),fo(t))return new ee(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{static emptySet(e){return new ks(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=na(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.ga=new Me(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ie(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Zs(e,n,ks.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class qN{constructor(){this.queries=E_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=E_(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new ee(W.ABORTED,"Firestore shutting down"))}}function E_(){return new qi(t=>Y1(t),Ju)}async function KN(t,e){const n=oe(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new GN,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=jm(o,`Initialization of query '${os(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Fm(n)}async function QN(t,e){const n=oe(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function YN(t,e){const n=oe(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Fm(n)}function XN(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Fm(t){t.Ca.forEach(e=>{e.next()})}var ip,x_;(x_=ip||(ip={})).Ma="default",x_.Cache="cache";class JN{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ip.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.key=e}}class bx{constructor(e){this.key=e}}class ZN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=de(),this.mutatedKeys=de(),this.eu=X1(e),this.tu=new ks(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new w_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),w=Zu(this.query,m)?m:null,T=!!g&&this.mutatedKeys.has(g.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;g&&w?g.data.isEqual(w.data)?T!==k&&(r.track({type:3,doc:w}),b=!0):this.su(g,w)||(r.track({type:2,doc:w}),b=!0,(c&&this.eu(w,c)>0||u&&this.eu(w,u)<0)&&(l=!0)):!g&&w?(r.track({type:0,doc:w}),b=!0):g&&!w&&(r.track({type:1,doc:g}),b=!0,(c||u)&&(l=!0)),b&&(w?(o=o.add(w),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(w,T){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Rt:b})}};return k(w)-k(T)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,u=c!==this.Za;return this.Za=c,o.length!==0||u?{snapshot:new Zs(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new w_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new bx(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Px(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Zs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Um="SyncEngine";class e2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class t2{constructor(e){this.key=e,this.hu=!1}}class n2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new qi(l=>Y1(l),Ju),this.Iu=new Map,this.Eu=new Set,this.du=new Me(te.comparator),this.Au=new Map,this.Ru=new Pm,this.Vu={},this.mu=new Map,this.fu=Js.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function r2(t,e,n=!0){const r=Lx(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Nx(r,e,n,!0),i}async function i2(t,e){const n=Lx(t);await Nx(n,e,!0,!1)}async function Nx(t,e,n,r){const i=await EN(t.localStore,$n(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await s2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Ix(t.remoteStore,i),l}async function s2(t,e,n,r,i){t.pu=(m,g,w)=>async function(k,b,I,v){let S=b.view.ru(I);S.Cs&&(S=await p_(k.localStore,b.query,!1).then(({documents:E})=>b.view.ru(E,S)));const D=v&&v.targetChanges.get(b.targetId),$=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(S,k.isPrimaryClient,D,$);return I_(k,b.targetId,F.au),F.snapshot}(t,m,g,w);const s=await p_(t.localStore,e,!0),o=new ZN(e,s.Qs),l=o.ru(s.documents),c=ll.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);I_(t,n,u.au);const f=new e2(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function o2(t,e,n){const r=oe(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Ju(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await np(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Om(r.remoteStore,i.targetId),sp(r,i.targetId)}).catch(ho)):(sp(r,i.targetId),await np(r.localStore,i.targetId,!0))}async function a2(t,e){const n=oe(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Om(n.remoteStore,r.targetId))}async function l2(t,e,n){const r=m2(t);try{const i=await function(o,l){const c=oe(o),u=ke.now(),f=l.reduce((w,T)=>w.add(T.key),de());let m,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let T=sr(),k=de();return c.Ns.getEntries(w,f).next(b=>{T=b,T.forEach((I,v)=>{v.isValidDocument()||(k=k.add(I))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,T)).next(b=>{m=b;const I=[];for(const v of l){const S=wb(v,m.get(v.key).overlayedDocument);S!=null&&I.push(new ui(v.key,S,B1(S.value.mapValue),Zt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,I,l)}).next(b=>{g=b;const I=b.applyToLocalDocumentSet(m,k);return c.documentOverlayCache.saveOverlays(w,b.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Z1(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.Vu[o.currentUser.toKey()];u||(u=new Me(he)),u=u.insert(l,c),o.Vu[o.currentUser.toKey()]=u}(r,i.batchId,n),await ul(r,i.changes),await oh(r.remoteStore)}catch(i){const s=jm(i,"Failed to persist write");n.reject(s)}}async function Dx(t,e){const n=oe(t);try{const r=await vN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?_e(o.hu,14607):i.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await ul(n,r,e)}catch(r){await ho(r)}}function T_(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=oe(o);c.onlineState=l;let u=!1;c.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(u=!0)}),u&&Fm(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function c2(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Me(te.comparator);o=o.insert(s,Tt.newNoDocument(s,se.min()));const l=de().add(s),c=new rh(se.min(),new Map,new Me(he),o,l);await Dx(r,c),r.du=r.du.remove(s),r.Au.delete(e),zm(r)}else await np(r.localStore,e,!1).then(()=>sp(r,e,n)).catch(ho)}async function u2(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await yN(n.localStore,e);Vx(n,r,null),Ox(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ul(n,i)}catch(i){await ho(i)}}async function h2(t,e,n){const r=oe(t);try{const i=await function(o,l){const c=oe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(m=>(_e(m!==null,37113),f=m.keys(),c.mutationQueue.removeMutationBatch(u,m))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Vx(r,e,n),Ox(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ul(r,i)}catch(i){await ho(i)}}function Ox(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Vx(t,e,n){const r=oe(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function sp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||$x(t,r)})}function $x(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Om(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),zm(t))}function I_(t,e,n){for(const r of n)r instanceof Px?(t.Ru.addReference(r.key,e),d2(t,r)):r instanceof bx?(X(Um,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||$x(t,r.key)):ie(19791,{wu:r})}function d2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Um,"New document in limbo: "+n),t.Eu.add(r),zm(t))}function zm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(Re.fromString(e)),r=t.fu.next();t.Au.set(r,new t2(n)),t.du=t.du.insert(n,r),Ix(t.remoteStore,new Nr($n(Sm(n.path)),r,"TargetPurposeLimboResolution",Ku.ce))}}async function ul(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const m=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(u){i.push(u);const m=Nm.As(c.targetId,u);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const f=oe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(u,g=>B.forEach(g.Es,w=>f.persistence.referenceDelegate.addReference(m,g.targetId,w)).next(()=>B.forEach(g.ds,w=>f.persistence.referenceDelegate.removeReference(m,g.targetId,w)))))}catch(m){if(!fo(m))throw m;X(Dm,"Failed to update sequence numbers: "+m)}for(const m of u){const g=m.targetId;if(!m.fromCache){const w=f.Ms.get(g),T=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(T);f.Ms=f.Ms.insert(g,k)}}}(r.localStore,s))}async function f2(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){X(Um,"User change. New user:",e.toKey());const r=await wx(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new ee(W.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ul(n,r.Ls)}}function p2(t,e){const n=oe(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function Lx(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=c2.bind(null,e),e.Pu.H_=YN.bind(null,e.eventManager),e.Pu.yu=XN.bind(null,e.eventManager),e}function m2(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=h2.bind(null,e),e}class mu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return gN(this.persistence,new fN,e.initialUser,this.serializer)}Cu(e){return new _x(bm.mi,this.serializer)}Du(e){return new TN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mu.provider={build:()=>new mu};class g2 extends mu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof fu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jb(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new _x(r=>fu.mi(r,n),this.serializer)}}class op{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>T_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=f2.bind(null,this.syncEngine),await WN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qN}()}createDatastore(e){const n=ih(e.databaseInfo.databaseId),r=function(s){return new RN(s)}(e.databaseInfo);return function(s,o,l,c){return new NN(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new ON(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>T_(this.syncEngine,n,0),function(){return y_.v()?new y_:new IN}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,f){const m=new n2(i,s,o,l,c,u);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);X(Ui,"RemoteStore shutting down."),s.Ea.add(5),await cl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}op.provider={build:()=>new op};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="FirestoreClient";class v2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=vm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{X(ii,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(ii,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Td(t,e){t.asyncQueue.verifyOperationInProgress(),X(ii,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _2(t);X(ii,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>__(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>__(e.remoteStore,i)),t._onlineComponents=e}async function _2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(ii,"Using user provided OfflineComponentProvider");try{await Td(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await Td(t,new mu)}}else X(ii,"Using default OfflineComponentProvider"),await Td(t,new g2(void 0));return t._offlineComponents}async function Mx(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(ii,"Using user provided OnlineComponentProvider"),await S_(t,t._uninitializedComponentsProvider._online)):(X(ii,"Using default OnlineComponentProvider"),await S_(t,new op))),t._onlineComponents}function w2(t){return Mx(t).then(e=>e.syncEngine)}async function A_(t){const e=await Mx(t),n=e.eventManager;return n.onListen=r2.bind(null,e.syncEngine),n.onUnlisten=o2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=i2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=a2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx="firestore.googleapis.com",R_=!0;class k_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fx,this.ssl=R_}else this.host=e.host,this.ssl=e.ssl??R_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yb)throw new ee(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jx(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(W.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ah{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new k_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new k_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TP;switch(r.type){case"firstParty":return new CP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=C_.get(n);r&&(X("ComponentProvider","Removing Datastore"),C_.delete(n),r.terminate())}(this),Promise.resolve()}}function E2(t,e,n,r={}){var u;t=Kr(t,ah);const i=lo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(g1(`https://${l}`),y1("Firestore",!0)),s.host!==Fx&&s.host!==l&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!Mi(c,o)&&(t._setSettings(c),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Et.MOCK_USER;else{f=YR(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ee(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Et(g)}t._authCredentials=new IP(new b1(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lh(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ol(n,tt._jsonSchema))return new tt(e,r||null,new te(Re.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:Qe("string",tt._jsonSchemaVersion),referencePath:Qe("string")};class Qr extends lh{constructor(e,n,r){super(e,n,Sm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new te(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function Id(t,e,...n){if(t=rt(t),N1("collection","path",e),t instanceof ah){const r=Re.fromString(e,...n);return zv(r),new Qr(t,null,r)}{if(!(t instanceof tt||t instanceof Qr))throw new ee(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return zv(r),new Qr(t.firestore,null,r)}}function Rt(t,e,...n){if(t=rt(t),arguments.length===1&&(e=vm.newId()),N1("doc","path",e),t instanceof ah){const r=Re.fromString(e,...n);return Uv(r),new tt(t,null,new te(r))}{if(!(t instanceof tt||t instanceof Qr))throw new ee(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Uv(r),new tt(t.firestore,t instanceof Qr?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_="AsyncQueue";class b_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xx(this,"async_queue_retry"),this._c=()=>{const r=xd();r&&X(P_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=xd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=xd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ki;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fo(e))throw e;X(P_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ir("INTERNAL UNHANDLED ERROR: ",N_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Mm.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ie(47125,{Pc:N_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function N_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class eo extends ah{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new b_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new b_(e),this._firestoreClient=void 0,await e}}}function x2(t,e){const n=typeof t=="object"?t:E1(),r=typeof t=="string"?t:ou,i=gm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=KR("firestore");s&&E2(i,...s)}return i}function Bm(t){if(t._terminated)throw new ee(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||T2(t),t._firestoreClient}function T2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,c,u,f){return new HP(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jx(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new v2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._byteString=e}static fromBase64String(e){try{return new an(yt.fromBase64String(e))}catch(n){throw new ee(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new an(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:an._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ol(e,an._jsonSchema))return an.fromBase64String(e.bytes)}}an._jsonSchemaVersion="firestore/bytes/1.0",an._jsonSchema={type:Qe("string",an._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(ol(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:Qe("string",Mn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ol(e,jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new jn(e.vectorValues);throw new ee(W.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jn._jsonSchemaVersion="firestore/vectorValue/1.0",jn._jsonSchema={type:Qe("string",jn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=/^__.*__$/;class S2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ui(e,this.data,this.fieldMask,n,this.fieldTransforms):new al(e,this.data,n,this.fieldTransforms)}}class Ux{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ui(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zx(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ac:t})}}class Wm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wm({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return gu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(zx(this.Ac)&&I2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class A2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ih(e)}Cc(e,n,r,i=!1){return new Wm({Ac:e,methodName:n,Dc:r,path:pt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bx(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new A2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hx(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Gm("Data must be an object, but it was:",o,r);const l=Wx(r,o);let c,u;if(s.merge)c=new Xt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=ap(e,m,n);if(!o.contains(g))throw new ee(W.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);qx(f,g)||f.push(g)}c=new Xt(f),u=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,u=o.fieldTransforms;return new S2(new Ut(l),c,u)}class uh extends Hm{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uh}}function C2(t,e,n,r){const i=t.Cc(1,e,n);Gm("Data must be an object, but it was:",i,r);const s=[],o=Ut.empty();ci(r,(c,u)=>{const f=qm(e,c,n);u=rt(u);const m=i.yc(f);if(u instanceof uh)s.push(f);else{const g=hh(u,m);g!=null&&(s.push(f),o.set(f,g))}});const l=new Xt(s);return new Ux(o,l,i.fieldTransforms)}function R2(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[ap(e,r,n)],c=[i];if(s.length%2!=0)throw new ee(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(ap(e,s[g])),c.push(s[g+1]);const u=[],f=Ut.empty();for(let g=l.length-1;g>=0;--g)if(!qx(u,l[g])){const w=l[g];let T=c[g];T=rt(T);const k=o.yc(w);if(T instanceof uh)u.push(w);else{const b=hh(T,k);b!=null&&(u.push(w),f.set(w,b))}}const m=new Xt(u);return new Ux(f,m,o.fieldTransforms)}function hh(t,e){if(Gx(t=rt(t)))return Gm("Unsupported field value:",e,t),Wx(t,e);if(t instanceof Hm)return function(r,i){if(!zx(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=hh(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:du(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:du(i.serializer,s)}}if(r instanceof Mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof an)return{bytesValue:hx(i.serializer,r._byteString)};if(r instanceof tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:km(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jn)return function(o,l){return{mapValue:{fields:{[U1]:{stringValue:z1},[au]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Sc("VectorValues must only contain numeric values.");return Am(l.serializer,u)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${_m(r)}`)}(t,e)}function Wx(t,e){const n={};return V1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,i)=>{const s=hh(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Gx(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Mn||t instanceof an||t instanceof tt||t instanceof Hm||t instanceof jn)}function Gm(t,e,n){if(!Gx(n)||!D1(n)){const r=_m(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function ap(t,e,n){if((e=rt(e))instanceof ch)return e._internalPath;if(typeof e=="string")return qm(t,e);throw gu("Field path arguments must be of type string or ",t,!1,void 0,n)}const k2=new RegExp("[~\\*/\\[\\]]");function qm(t,e,n){if(e.search(k2)>=0)throw gu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ch(...e.split("."))._internalPath}catch{throw gu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ee(W.INVALID_ARGUMENT,l+t+c)}function qx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new P2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qx("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class P2 extends Kx{data(){return super.data()}}function Qx(t,e){return typeof e=="string"?qm(t,e):e instanceof ch?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ee(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class N2{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[au].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Be(o.doubleValue));return new jn(n)}convertGeoPoint(e){return new Mn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ha(e));default:return null}}convertTimestamp(e){const n=ei(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);_e(yx(r),9688,{name:e});const i=new Wa(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(n)||ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ia{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pi extends Kx{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ec(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qx("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(W.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Pi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Pi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pi._jsonSchema={type:Qe("string",Pi._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Ec extends Pi{data(e={}){return super.data(e)}}class Ps{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ia(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ec(this._firestore,this._userDataWriter,r.key,r,new ia(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new Ec(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ia(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Ec(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ia(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:D2(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(W.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ps._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function D2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}Ps._jsonSchemaVersion="firestore/querySnapshot/1.0",Ps._jsonSchema={type:Qe("string",Ps._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Xx extends N2{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function Rn(t,e,n){t=Kr(t,tt);const r=Kr(t.firestore,eo),i=Yx(t.converter,e,n);return Km(r,[Hx(Bx(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Zt.none())])}function Sd(t){return Km(Kr(t.firestore,eo),[new nh(t._key,Zt.none())])}function Ad(t,...e){var c,u,f;t=rt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||D_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(D_(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(u=m.error)==null?void 0:u.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof tt)o=Kr(t.firestore,eo),l=Sm(t._key.path),s={next:m=>{e[r]&&e[r](O2(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Kr(t,lh);o=Kr(m.firestore,eo),l=m._query;const g=new Xx(o);s={next:w=>{e[r]&&e[r](new Ps(o,g,m,w))},error:e[r+1],complete:e[r+2]},b2(t._query)}return function(g,w,T,k){const b=new y2(k),I=new JN(w,b,T);return g.asyncQueue.enqueueAndForget(async()=>KN(await A_(g),I)),()=>{b.Nu(),g.asyncQueue.enqueueAndForget(async()=>QN(await A_(g),I))}}(Bm(o),l,i,s)}function Km(t,e){return function(r,i){const s=new ki;return r.asyncQueue.enqueueAndForget(async()=>l2(await w2(r),i,s)),s.promise}(Bm(t),e)}function O2(t,e,n){const r=n.docs.get(e._key),i=new Xx(t);return new Pi(t,i,e._key,r,new ia(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Bx(e)}set(e,n,r){this._verifyNotCommitted();const i=Cd(e,this._firestore),s=Yx(i.converter,n,r),o=Hx(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Zt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Cd(e,this._firestore);let o;return o=typeof(n=rt(n))=="string"||n instanceof ch?R2(this._dataReader,"WriteBatch.update",s._key,n,r,i):C2(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Zt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Cd(e,this._firestore);return this._mutations=this._mutations.concat(new nh(n._key,Zt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(W.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Cd(t,e){if((t=rt(t)).firestore!==e)throw new ee(W.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){return Bm(t=Kr(t,eo)),new V2(t,e=>Km(t,e))}(function(e,n=!0){(function(i){uo=i})(co),qs(new ji("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new eo(new SP(r.getProvider("auth-internal")),new RP(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(u.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Gr(Lv,Mv,e),Gr(Lv,Mv,"esm2020")})();var $2="firebase",L2="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gr($2,L2,"app");function Jx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const M2=Jx,Zx=new il("auth","Firebase",Jx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new pm("@firebase/auth");function j2(t,...e){yu.logLevel<=ue.WARN&&yu.warn(`Auth (${co}): ${t}`,...e)}function xc(t,...e){yu.logLevel<=ue.ERROR&&yu.error(`Auth (${co}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Qm(t,...e)}function Fn(t,...e){return Qm(t,...e)}function eT(t,e,n){const r={...M2(),[e]:n};return new il("auth","Firebase",r).create(e,{appName:t.name})}function Yr(t){return eT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zx.create(t,...e)}function re(t,e,...n){if(!t)throw Qm(e,...n)}function Yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xc(e),new Error(e)}function or(t,e){t||Yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function F2(){return V_()==="http:"||V_()==="https:"}function V_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F2()||nk()||"connection"in navigator)?navigator.onLine:!0}function z2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=ZR()||rk()}get(){return U2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],W2=new hl(3e4,6e4);function Qi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function hi(t,e,n,r,i={}){return nT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=sl({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return tk()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&lo(t.emulatorConfig.host)&&(u.credentials="include"),tT.fetch()(await rT(t,t.config.apiHost,n,l),u)})}async function nT(t,e,n){t._canInitEmulator=!1;const r={...B2,...e};try{const i=new q2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xl(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eT(t,f,u);In(t,f)}}catch(i){if(i instanceof lr)throw i;In(t,"network-request-failed",{message:String(i)})}}async function dh(t,e,n,r,i={}){const s=await hi(t,e,n,r,i);return"mfaPendingCredential"in s&&In(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function rT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ym(t.config,i):`${t.config.apiScheme}://${i}`;return H2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function G2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class q2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),W2.get())})}}function Xl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Fn(t,e,r);return i.customData._tokenResponse=n,i}function $_(t){return t!==void 0&&t.enterprise!==void 0}class K2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return G2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Q2(t,e){return hi(t,"GET","/v2/recaptchaConfig",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function vu(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X2(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Xm(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(Rd(i.auth_time)),issuedAtTime:wa(Rd(i.iat)),expirationTime:wa(Rd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rd(t){return Number(t)*1e3}function Xm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=d1(n);return i?JSON.parse(i):(xc("Failed to decode base64 JWT payload"),null)}catch(i){return xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function L_(t){const e=Xm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof lr&&J2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Qa(t,vu(e,{idToken:n}));re(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?iT(i.providerUserInfo):[],o=t4(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new cp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function e4(t){const e=rt(t);await _u(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function t4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function iT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n4(t,e){const n=await nT(t,{},async()=>{const r=sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await rT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&lo(t.emulatorConfig.host)&&(c.credentials="include"),tT.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r4(t,e){return hi(t,"POST","/v2/accounts:revokeToken",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=L_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bs;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(re(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Z2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return X2(this,e)}reload(){return e4(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _u(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(Yr(this.auth));const e=await this.getIdToken();return await Qa(this,Y2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:w,providerData:T,stsTokenManager:k}=n;re(m&&k,e,"internal-error");const b=bs.fromJSON(this.name,k);re(typeof m=="string",e,"internal-error"),yr(r,e.name),yr(i,e.name),re(typeof g=="boolean",e,"internal-error"),re(typeof w=="boolean",e,"internal-error"),yr(s,e.name),yr(o,e.name),yr(l,e.name),yr(c,e.name),yr(u,e.name),yr(f,e.name);const I=new _n({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:u,lastLoginAt:f});return T&&Array.isArray(T)&&(I.providerData=T.map(v=>({...v}))),c&&(I._redirectEventId=c),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new bs;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _u(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?iT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new bs;l.updateFromIdToken(r);const c=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=new Map;function Xn(t){or(t instanceof Function,"Expected a class definition");let e=M_.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sT.type="NONE";const j_=sT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vu(this.auth,{idToken:e}).catch(()=>{});return n?_n._fromGetAccountInfoResponse(this.auth,n,e):null}return _n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ns(Xn(j_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Xn(j_);const o=Tc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let m;if(typeof f=="string"){const g=await vu(e,{idToken:f}).catch(()=>{});if(!g)break;m=await _n._fromGetAccountInfoResponse(e,g,f)}else m=_n._fromJSON(e,f);u!==s&&(l=m),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ns(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ns(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hT(e))return"Blackberry";if(dT(e))return"Webos";if(aT(e))return"Safari";if((e.includes("chrome/")||lT(e))&&!e.includes("edge/"))return"Chrome";if(uT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oT(t=St()){return/firefox\//i.test(t)}function aT(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lT(t=St()){return/crios\//i.test(t)}function cT(t=St()){return/iemobile/i.test(t)}function uT(t=St()){return/android/i.test(t)}function hT(t=St()){return/blackberry/i.test(t)}function dT(t=St()){return/webos/i.test(t)}function Jm(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function i4(t=St()){var e;return Jm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function s4(){return ik()&&document.documentMode===10}function fT(t=St()){return Jm(t)||uT(t)||dT(t)||hT(t)||/windows phone/i.test(t)||cT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e=[]){let n;switch(t){case"Browser":n=F_(St());break;case"Worker":n=`${F_(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${co}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(t,e={}){return hi(t,"GET","/v2/passwordPolicy",Qi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=6;class c4{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??l4,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U_(this),this.idTokenSubscription=new U_(this),this.beforeStateQueue=new o4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ns.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vu(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _u(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=z2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(Yr(this));const n=e?rt(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(Yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(Yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await a4(this),n=new c4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new il("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await r4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xn(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Ns.create(this,[Xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&j2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function mo(t){return rt(t)}class U_{constructor(e){this.auth=e,this.observer=null,this.addObserver=dk(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function h4(t){fh=t}function mT(t){return fh.loadJS(t)}function d4(){return fh.recaptchaEnterpriseScript}function f4(){return fh.gapiScript}function p4(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class m4{constructor(){this.enterprise=new g4}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class g4{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const y4="recaptcha-enterprise",gT="NO_RECAPTCHA";class v4{constructor(e){this.type=y4,this.auth=mo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Q2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new K2(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;$_(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(gT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new m4().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&$_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=d4();c.length!==0&&(c+=l),mT(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function z_(t,e,n,r=!1,i=!1){const s=new v4(t);let o;if(i)o=gT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function B_(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await z_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await z_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t,e){const n=gm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mi(s,e??{}))return i;In(i,"already-initialized")}return n.initialize({options:e})}function w4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function E4(t,e,n){const r=mo(t);re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=yT(e),{host:o,port:l}=x4(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){re(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),re(Mi(u,r.config.emulator)&&Mi(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,lo(o)?(g1(`${s}//${o}${c}`),y1("Auth",!0)):T4()}function yT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x4(t){const e=yT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:H_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:H_(o)}}}function H_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function T4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,n){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function I4(t,e){return hi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S4(t,e){return dh(t,"POST","/v1/accounts:signInWithPassword",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A4(t,e){return dh(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}async function C4(t,e){return dh(t,"POST","/v1/accounts:signInWithEmailLink",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Zm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return B_(e,n,"signInWithPassword",S4);case"emailLink":return A4(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return B_(e,r,"signUpPassword",I4);case"emailLink":return C4(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ds(t,e){return dh(t,"POST","/v1/accounts:signInWithIdp",Qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4="http://localhost";class zi extends Zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:R4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=sl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function P4(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class eg{constructor(e){const n=Zo(ea(e)),r=n.apiKey??null,i=n.oobCode??null,s=k4(n.mode??null);re(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=P4(e);try{return new eg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.providerId=go.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=eg.parseLink(n);return re(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}go.PROVIDER_ID="password";go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends vT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends dl{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends dl{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends dl{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=W_(r);return new to({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=W_(r);return new to({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function W_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu extends lr{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wu(e,n,r,i)}}function _T(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wu._fromErrorAndOperation(t,s,e,r):s})}async function b4(t,e,n=!1){const r=await Qa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return to._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N4(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(Yr(r));const i="reauthenticate";try{const s=await Qa(t,_T(r,i,e,t),n);re(s.idToken,r,"internal-error");const o=Xm(s.idToken);re(o,r,"internal-error");const{sub:l}=o;return re(t.uid===l,r,"user-mismatch"),to._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&In(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(t,e,n=!1){if(yn(t.app))return Promise.reject(Yr(t));const r="signIn",i=await _T(t,r,e),s=await to._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function D4(t,e){return wT(mo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O4(t){const e=mo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function V4(t,e,n){return yn(t.app)?Promise.reject(Yr(t)):D4(rt(t),go.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&O4(t),r})}function $4(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function L4(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function M4(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function j4(t){return rt(t).signOut()}const Eu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Eu,"1"),this.storage.removeItem(Eu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=1e3,U4=10;class xT extends ET{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s4()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,U4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},F4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xT.type="LOCAL";const z4=xT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT extends ET{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TT.type="SESSION";const IT=TT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await B4(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=tg("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return window}function W4(t){Un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function G4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function K4(){return ST()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="firebaseLocalStorageDb",Q4=1,xu="firebaseLocalStorage",CT="fbase_key";class fl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function Y4(){const t=indexedDB.deleteDatabase(AT);return new fl(t).toPromise()}function up(){const t=indexedDB.open(AT,Q4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:CT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await Y4(),e(await up()))})})}async function G_(t,e,n){const r=mh(t,!0).put({[CT]:e,value:n});return new fl(r).toPromise()}async function X4(t,e){const n=mh(t,!1).get(e),r=await new fl(n).toPromise();return r===void 0?null:r.value}function q_(t,e){const n=mh(t,!0).delete(e);return new fl(n).toPromise()}const J4=800,Z4=3;class RT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ST()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(K4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await G4(),!this.activeServiceWorker)return;this.sender=new H4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await G_(e,Eu,"1"),await q_(e,Eu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>G_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>X4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=mh(i,!1).getAll();return new fl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}RT.type="LOCAL";const eD=RT;new hl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t,e){return e?Xn(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends Zm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nD(t){return wT(t.auth,new ng(t),t.bypassAuthState)}function rD(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),N4(n,new ng(t),t.bypassAuthState)}async function iD(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),b4(n,new ng(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nD;case"linkViaPopup":case"linkViaRedirect":return iD;case"reauthViaPopup":case"reauthViaRedirect":return rD;default:In(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new hl(2e3,1e4);class xs extends kT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=tg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sD.get())};e()}}xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="pendingRedirect",Ic=new Map;class aD extends kT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ic.get(this.auth._key());if(!e){try{const r=await lD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ic.set(this.auth._key(),e)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lD(t,e){const n=hD(e),r=uD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cD(t,e){Ic.set(t._key(),e)}function uD(t){return Xn(t._redirectPersistence)}function hD(t){return Tc(oD,t.config.apiKey,t.name)}async function dD(t,e,n=!1){if(yn(t.app))return Promise.reject(Yr(t));const r=mo(t),i=tD(r,e),o=await new aD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=10*60*1e3;class pD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PT(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fD&&this.cachedEventUids.clear(),this.cachedEventUids.has(K_(e))}saveEventToCache(e){this.cachedEventUids.add(K_(e)),this.lastProcessedEventTime=Date.now()}}function K_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vD=/^https?/;async function _D(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gD(t);for(const n of e)try{if(wD(n))return}catch{}In(t,"unauthorized-domain")}function wD(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vD.test(n))return!1;if(yD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=new hl(3e4,6e4);function Q_(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xD(t){return new Promise((e,n)=>{var i,s,o;function r(){Q_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Q_(),n(Fn(t,"network-request-failed"))},timeout:ED.get()})}if((s=(i=Un().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Un().gapi)!=null&&o.load)r();else{const l=p4("iframefcb");return Un()[l]=()=>{gapi.load?r():n(Fn(t,"network-request-failed"))},mT(`${f4()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Sc=null,e})}let Sc=null;function TD(t){return Sc=Sc||xD(t),Sc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID=new hl(5e3,15e3),SD="__/auth/iframe",AD="emulator/auth/iframe",CD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kD(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ym(e,AD):`https://${t.config.authDomain}/${SD}`,r={apiKey:e.apiKey,appName:t.name,v:co},i=RD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${sl(r).slice(1)}`}async function PD(t){const e=await TD(t),n=Un().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:kD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),l=Un().setTimeout(()=>{s(o)},ID.get());function c(){Un().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ND=500,DD=600,OD="_blank",VD="http://localhost";class Y_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $D(t,e,n,r=ND,i=DD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...bD,width:r.toString(),height:i.toString(),top:s,left:o},u=St().toLowerCase();n&&(l=lT(u)?OD:n),oT(u)&&(e=e||VD,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[w,T])=>`${g}${w}=${T},`,"");if(i4(u)&&l!=="_self")return LD(e||"",l),new Y_(null);const m=window.open(e||"",l,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new Y_(m)}function LD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="__/auth/handler",jD="emulator/auth/handler",FD=encodeURIComponent("fac");async function X_(t,e,n,r,i,s){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:co,eventId:i};if(e instanceof vT){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof dl){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${FD}=${encodeURIComponent(c)}`:"";return`${UD(t)}?${sl(l).slice(1)}${u}`}function UD({config:t}){return t.emulator?Ym(t,jD):`https://${t.authDomain}/${MD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="webStorageSupport";class zD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IT,this._completeRedirectFn=dD,this._overrideRedirectResult=cD}async _openPopup(e,n,r,i){var o;or((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await X_(e,n,r,lp(),i);return $D(e,s,tg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await X_(e,n,r,lp(),i);return W4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PD(e),r=new pD(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kd,{type:kd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[kd];s!==void 0&&n(!!s),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_D(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fT()||aT()||Jm()}}const BD=zD;var J_="@firebase/auth",Z_="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GD(t){qs(new ji("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pT(t)},u=new u4(r,i,s,c);return w4(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qs(new ji("auth-internal",e=>{const n=mo(e.getProvider("auth").getImmediate());return(r=>new HD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(J_,Z_,WD(t)),Gr(J_,Z_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=5*60,KD=m1("authIdTokenMaxAge")||qD;let e0=null;const QD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KD)return;const i=n==null?void 0:n.token;e0!==i&&(e0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YD(t=E1()){const e=gm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_4(t,{popupRedirectResolver:BD,persistence:[eD,z4,IT]}),r=m1("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QD(s.toString());L4(n,o,()=>o(n.currentUser)),$4(n,l=>o(l))}}const i=f1("auth");return i&&E4(n,`http://${i}`),n}function XD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}h4({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GD("Browser");const JD={apiKey:"AIzaSyCH74IpDNkNnYTt2oqTXvQ5HmzAgWb_c74",authDomain:"futsal-novy-svit.firebaseapp.com",projectId:"futsal-novy-svit",storageBucket:"futsal-novy-svit.firebasestorage.app",messagingSenderId:"545992571458",appId:"1:545992571458:web:a00e106844897e1e544bdb",measurementId:"G-Y1V25MSCBB"},bT=w1(JD),Fe=x2(bT),Pd=YD(bT),NT=U.createContext(void 0),t0="futsal-league-data",bd=[{id:"1",name:"Сині",color:"#2196F3"},{id:"2",name:"Зелені",color:"#4CAF50"},{id:"3",name:"Червоні",color:"#F44336"}],n0=()=>{try{return Fe!=null}catch{return!1}},ZD=({children:t})=>{const[e,n]=U.useState(bd),[r,i]=U.useState([]),[s,o]=U.useState([]),[l,c]=U.useState(!0),[u,f]=U.useState(!1),m=()=>{const O=localStorage.getItem(t0);if(O)try{const N=JSON.parse(O);n(N.teams||bd),i(N.players||[]),o(N.gameDays||[])}catch(N){console.error("Error loading from localStorage:",N)}},g=O=>{localStorage.setItem(t0,JSON.stringify(O))};U.useEffect(()=>{(async()=>{if(c(!0),!n0()){console.log("Firebase not configured, using localStorage"),m(),c(!1);return}try{const N=Ad(Id(Fe,"teams"),G=>{if(G.empty)w();else{const Y=G.docs.map(Z=>({id:Z.id,...Z.data()}));n(Y)}f(!0)},G=>{console.error("Firebase teams error:",G),m(),f(!1)}),j=Ad(Id(Fe,"players"),G=>{const Y=G.docs.map(Z=>({id:Z.id,...Z.data()}));i(Y)},G=>{console.error("Firebase players error:",G)}),H=Ad(Id(Fe,"gameDays"),G=>{const Y=G.docs.map(Z=>({id:Z.id,...Z.data()}));o(Y)},G=>{console.error("Firebase gameDays error:",G)});return c(!1),()=>{N(),j(),H()}}catch(N){console.error("Firebase initialization error:",N),m(),f(!1),c(!1)}})()},[]),U.useEffect(()=>{u||g({teams:e,players:r,gameDays:s})},[e,r,s,u]);const w=async()=>{if(n0())try{const O=O_(Fe);bd.forEach(N=>{const j=Rt(Fe,"teams",N.id);O.set(j,{name:N.name,color:N.color})}),await O.commit()}catch(O){console.error("Error initializing default teams:",O)}},T=async O=>{const N=Date.now().toString(),j={...O,id:N};if(u)try{await Rn(Rt(Fe,"teams",N),{name:O.name,color:O.color})}catch(H){console.error("Error adding team:",H),n([...e,j])}else n([...e,j])},k=async(O,N)=>{if(u)try{const j=Rt(Fe,"teams",O);await Rn(j,N,{merge:!0})}catch(j){console.error("Error updating team:",j),n(e.map(H=>H.id===O?{...H,...N}:H))}else n(e.map(j=>j.id===O?{...j,...N}:j))},b=async O=>{if(u)try{await Sd(Rt(Fe,"teams",O))}catch(N){console.error("Error deleting team:",N),n(e.filter(j=>j.id!==O))}else n(e.filter(N=>N.id!==O))},I=async O=>{const N=Date.now().toString(),j={...O,id:N};if(u)try{await Rn(Rt(Fe,"players",N),{name:O.name})}catch(H){console.error("Error adding player:",H),i([...r,j])}else i([...r,j])},v=async(O,N)=>{if(u)try{const j=Rt(Fe,"players",O);await Rn(j,N,{merge:!0})}catch(j){console.error("Error updating player:",j),i(r.map(H=>H.id===O?{...H,...N}:H))}else i(r.map(j=>j.id===O?{...j,...N}:j))},S=async O=>{if(u)try{await Sd(Rt(Fe,"players",O))}catch(N){console.error("Error deleting player:",N),i(r.filter(j=>j.id!==O))}else i(r.filter(N=>N.id!==O))},D=async O=>{const N=Date.now().toString(),j={...O,id:N};if(u)try{await Rn(Rt(Fe,"gameDays",N),{name:O.name,date:O.date,playerTeamAssignments:O.playerTeamAssignments,matches:O.matches,isActive:O.isActive})}catch(H){console.error("Error adding game day:",H),o([...s,j])}else o([...s,j]);return j},$=async(O,N)=>{if(u)try{const j=Rt(Fe,"gameDays",O);await Rn(j,N,{merge:!0})}catch(j){console.error("Error updating game day:",j),o(s.map(H=>H.id===O?{...H,...N}:H))}else o(s.map(j=>j.id===O?{...j,...N}:j))},F=async O=>{if(u)try{await Sd(Rt(Fe,"gameDays",O))}catch(N){console.error("Error deleting game day:",N),o(s.filter(j=>j.id!==O))}else o(s.filter(N=>N.id!==O))},E=O=>s.find(N=>N.id===O),_=async O=>{if(u)try{const N=O_(Fe);s.forEach(j=>{const H=Rt(Fe,"gameDays",j.id);N.update(H,{isActive:j.id===O})}),await N.commit()}catch(N){console.error("Error setting active game day:",N),o(s.map(j=>({...j,isActive:j.id===O})))}else o(s.map(N=>({...N,isActive:N.id===O})))},x=()=>s.find(O=>O.isActive),A=async(O,N)=>{const j={...N,id:Date.now().toString(),gameDayId:O},H=s.find(Y=>Y.id===O);if(!H)return;const G=[...H.matches,j];if(u)try{const Y=Rt(Fe,"gameDays",O);await Rn(Y,{matches:G},{merge:!0})}catch(Y){console.error("Error adding match:",Y),o(s.map(Z=>Z.id===O?{...Z,matches:G}:Z))}else o(s.map(Y=>Y.id===O?{...Y,matches:G}:Y))},R=async(O,N,j)=>{const H=s.find(Y=>Y.id===O);if(!H)return;const G=H.matches.map(Y=>Y.id===N?{...Y,...j}:Y);if(u)try{const Y=Rt(Fe,"gameDays",O);await Rn(Y,{matches:G},{merge:!0})}catch(Y){console.error("Error updating match:",Y),o(s.map(Z=>Z.id===O?{...Z,matches:G}:Z))}else o(s.map(Y=>Y.id===O?{...Y,matches:G}:Y))},P=async(O,N)=>{const j=s.find(G=>G.id===O);if(!j)return;const H=j.matches.filter(G=>G.id!==N);if(u)try{const G=Rt(Fe,"gameDays",O);await Rn(G,{matches:H},{merge:!0})}catch(G){console.error("Error deleting match:",G),o(s.map(Y=>Y.id===O?{...Y,matches:H}:Y))}else o(s.map(G=>G.id===O?{...G,matches:H}:G))},C=async(O,N,j,H)=>{const G=s.find(Z=>Z.id===O);if(!G)return;const Y=G.playerTeamAssignments.map(Z=>{if(Z.playerId!==N)return Z;const be=Z.transfers||[];return{...Z,teamId:H,transfers:[...be,{fromTeamId:j,toTeamId:H,timestamp:Date.now()}]}});if(u)try{const Z=Rt(Fe,"gameDays",O);await Rn(Z,{playerTeamAssignments:Y},{merge:!0})}catch(Z){console.error("Error transferring player:",Z),o(s.map(be=>be.id===O?{...be,playerTeamAssignments:Y}:be))}else o(s.map(Z=>Z.id===O?{...Z,playerTeamAssignments:Y}:Z))},Te=(O,N,j)=>{const H=O.playerTeamAssignments.find(Y=>Y.playerId===N);if(!H)return null;if(!H.transfers||H.transfers.length===0)return H.teamId;let G=H.transfers[0].fromTeamId;for(const Y of H.transfers)if(Y.timestamp<=j)G=Y.toTeamId;else break;return G},Ee={isLoading:l,isFirebaseConnected:u,teams:e,addTeam:T,updateTeam:k,deleteTeam:b,players:r,addPlayer:I,updatePlayer:v,deletePlayer:S,gameDays:s,addGameDay:D,updateGameDay:$,deleteGameDay:F,getGameDay:E,setActiveGameDay:_,getActiveGameDay:x,addMatch:A,updateMatch:R,deleteMatch:P,transferPlayer:C,getTeamDayStats:O=>{const N=s.find(H=>H.id===O);if(!N)return[];const j=new Map;return e.forEach(H=>{j.set(H.id,{teamId:H.id,teamName:H.name,teamColor:H.color,matchesPlayed:0,wins:0,draws:0,losses:0,goalsFor:0,goalsAgainst:0,goalDifference:0,points:0})}),N.matches.forEach(H=>{const G=j.get(H.team1Id),Y=j.get(H.team2Id);!G||!Y||(G.matchesPlayed++,Y.matchesPlayed++,G.goalsFor+=H.score1,G.goalsAgainst+=H.score2,Y.goalsFor+=H.score2,Y.goalsAgainst+=H.score1,H.score1>H.score2?(G.wins++,G.points+=3,Y.losses++):H.score1<H.score2?(Y.wins++,Y.points+=3,G.losses++):(G.draws++,Y.draws++,G.points+=1,Y.points+=1),G.goalDifference=G.goalsFor-G.goalsAgainst,Y.goalDifference=Y.goalsFor-Y.goalsAgainst)}),Array.from(j.values()).sort((H,G)=>G.points!==H.points?G.points-H.points:G.goalDifference!==H.goalDifference?G.goalDifference-H.goalDifference:G.goalsFor-H.goalsFor)},getPlayerStats:()=>{const O=new Map;return r.forEach(N=>{O.set(N.id,{playerId:N.id,playerName:N.name,totalGoals:0,totalMatches:0,gameDaysPlayed:0,goalsByTeam:{},wins:0,draws:0,losses:0,teamGoalsFor:0,teamGoalsAgainst:0,goalsPerMatch:0,goalsPerGameDay:0,winRate:0,points:0,pointsPerMatch:0,goalDifference:0,cleanSheets:0})}),s.forEach(N=>{const j=new Set;N.matches.forEach(H=>{N.playerTeamAssignments.forEach(G=>{const Y=Te(N,G.playerId,H.timestamp),Z=O.get(G.playerId);if(Z&&(Y===H.team1Id||Y===H.team2Id)){j.add(G.playerId),Z.totalMatches++;const be=Y===H.team1Id,Ne=be?H.score1:H.score2,ze=be?H.score2:H.score1;Z.teamGoalsFor+=Ne,Z.teamGoalsAgainst+=ze,ze===0&&Z.cleanSheets++,Ne>ze?(Z.wins++,Z.points+=3):Ne<ze?Z.losses++:(Z.draws++,Z.points+=1)}}),H.goals.forEach(G=>{const Y=O.get(G.playerId);Y&&(Y.totalGoals++,Y.goalsByTeam[G.teamId]||(Y.goalsByTeam[G.teamId]=0),Y.goalsByTeam[G.teamId]++)})}),j.forEach(H=>{const G=O.get(H);G&&G.gameDaysPlayed++})}),O.forEach(N=>{N.goalsPerMatch=N.totalMatches>0?Math.round(N.totalGoals/N.totalMatches*100)/100:0,N.goalsPerGameDay=N.gameDaysPlayed>0?Math.round(N.totalGoals/N.gameDaysPlayed*100)/100:0,N.winRate=N.totalMatches>0?Math.round(N.wins/N.totalMatches*100):0,N.pointsPerMatch=N.totalMatches>0?Math.round(N.points/N.totalMatches*100)/100:0,N.goalDifference=N.teamGoalsFor-N.teamGoalsAgainst}),Array.from(O.values()).sort((N,j)=>j.totalGoals!==N.totalGoals?j.totalGoals-N.totalGoals:j.winRate!==N.winRate?j.winRate-N.winRate:j.totalMatches-N.totalMatches)}};return d.jsx(NT.Provider,{value:Ee,children:t})},Yi=()=>{const t=U.useContext(NT);if(!t)throw new Error("useApp must be used within AppProvider");return t},DT=U.createContext(void 0),eO=({children:t})=>{const[e,n]=U.useState(null),[r,i]=U.useState(null),[s,o]=U.useState(!0);U.useEffect(()=>{const m=M4(Pd,g=>{n(g?{uid:g.uid,email:g.email}:null),o(!1)});return()=>m()},[]);const f={user:e,isAuthenticated:!!e,isLoading:s,signIn:async(m,g)=>{i(null);try{return await V4(Pd,m,g),!0}catch(w){const T=w instanceof Error?w.message:"Помилка входу";return T.includes("invalid-credential")||T.includes("wrong-password")?i("Невірний email або пароль"):T.includes("user-not-found")?i("Користувача не знайдено"):T.includes("too-many-requests")?i("Забагато спроб. Спробуйте пізніше"):i("Невірний email або пароль"),!1}},signOut:async()=>{i(null);try{await j4(Pd)}catch(m){console.error("Sign out error:",m)}},error:r,clearError:()=>i(null)};return d.jsx(DT.Provider,{value:f,children:t})},yo=()=>{const t=U.useContext(DT);if(!t)throw new Error("useAuth must be used within AuthProvider");return t},tO=Ot`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ot`
  from { opacity: 0; }
  to { opacity: 1; }
`;Ot`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;Ot`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;const nO=jR`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({theme:t})=>t.colors.background};
    color: ${({theme:t})=>t.colors.text.primary};
    min-height: 100vh;
    line-height: 1.5;
    
    /* Subtle field pattern background */
    background-image: 
      radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(34, 197, 94, 0.04) 0%, transparent 40%),
      radial-gradient(ellipse at 20% 90%, rgba(16, 185, 129, 0.05) 0%, transparent 40%);
    background-attachment: fixed;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({theme:t})=>t.colors.surface};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme:t})=>t.colors.border};
    border-radius: 4px;
    
    &:hover {
      background: ${({theme:t})=>t.colors.text.disabled};
    }
  }

  /* Selection color */
  ::selection {
    background: rgba(34, 197, 94, 0.3);
    color: inherit;
  }
`,rO={colors:{primary:"#22c55e",primaryHover:"#16a34a",primaryLight:"rgba(34, 197, 94, 0.15)",secondary:"#f59e0b",secondaryHover:"#d97706",success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6",background:"#0f1419",backgroundSecondary:"#151c24",surface:"#1c2632",surfaceHover:"#243040",surfaceElevated:"#263344",text:{primary:"#f8fafc",secondary:"#94a3b8",disabled:"#64748b",accent:"#22c55e"},border:"#2d3d4f",borderLight:"#374151",gradients:{primary:"linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",card:"linear-gradient(135deg, #1c2632 0%, #263344 100%)",hero:"linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 163, 74, 0.05) 100%)",glow:"radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 70%)"}},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px",xxl:"48px",xxxl:"64px"},borderRadius:{sm:"6px",md:"12px",lg:"16px",xl:"24px",full:"9999px"},shadows:{sm:"0 2px 8px rgba(0, 0, 0, 0.25)",md:"0 4px 16px rgba(0, 0, 0, 0.3)",lg:"0 8px 32px rgba(0, 0, 0, 0.4)",glow:"0 0 20px rgba(34, 197, 94, 0.3)",glowStrong:"0 0 40px rgba(34, 197, 94, 0.4)"},transitions:{fast:"0.15s ease",normal:"0.25s ease",slow:"0.4s ease",bounce:"0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"},typography:{heading:"'Outfit', sans-serif",body:"'DM Sans', sans-serif"}},iO=M.nav`
  background: rgba(28, 38, 50, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ${({theme:t})=>t.transitions.normal};
`,sO=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({theme:t})=>t.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,OT=M(ME)`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:t})=>t.typography.heading};
  text-decoration: none;
  padding: ${({theme:t})=>t.spacing.md} 0;
  white-space: nowrap;
  letter-spacing: -0.02em;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  /* Gradient text effect */
  background: linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,oO=M.span`
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(34, 197, 94, 0.5));
  transition: transform ${({theme:t})=>t.transitions.fast};
  
  ${OT}:hover & {
    transform: rotate(20deg);
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,aO=M.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.xs};
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(28, 38, 50, 0.98);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({theme:t})=>t.colors.border};
    padding: ${({$isOpen:t})=>t?"8px 0":"0"};
    max-height: ${({$isOpen:t})=>t?"500px":"0"};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 0;
  }
`,lO=M(ME)`
  position: relative;
  padding: ${({theme:t})=>t.spacing.md} ${({theme:t})=>t.spacing.md};
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: 0.01em;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  transition: all ${({theme:t})=>t.transitions.fast};
  
  color: ${({theme:t,$active:e})=>e?t.colors.primary:t.colors.text.secondary};
  background: ${({theme:t,$active:e})=>e?t.colors.primaryLight:"transparent"};

  &:hover {
    color: ${({theme:t})=>t.colors.primary};
    background: ${({theme:t})=>t.colors.primaryLight};
  }
  
  /* Active indicator dot */
  ${({$active:t,theme:e})=>t&&`
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: ${e.colors.primary};
      border-radius: 50%;
    }
  `}

  @media (max-width: 768px) {
    border-radius: 0;
    padding: 14px ${({theme:t})=>t.spacing.lg};
    width: 100%;
    
    &::before {
      display: none;
    }
    
    /* Mobile active indicator - left bar */
    border-left: 3px solid ${({theme:t,$active:e})=>e?t.colors.primary:"transparent"};
    background: ${({theme:t,$active:e})=>e?t.colors.primaryLight:"transparent"};
  }
`,cO=M.button`
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  transition: background ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
  }
  
  /* Hamburger icon lines */
  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({theme:t})=>t.colors.text.primary};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: all ${({theme:t})=>t.transitions.fast};
    border-radius: 1px;
    
    &:nth-child(1) {
      top: ${({$isOpen:t})=>t?"19px":"12px"};
      transform: translateX(-50%) ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0)"};
    }
    
    &:nth-child(2) {
      top: 19px;
      opacity: ${({$isOpen:t})=>t?0:1};
      transform: translateX(-50%);
    }
    
    &:nth-child(3) {
      top: ${({$isOpen:t})=>t?"19px":"26px"};
      transform: translateX(-50%) ${({$isOpen:t})=>t?"rotate(-45deg)":"rotate(0)"};
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`,uO=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin-left: ${({theme:t})=>t.spacing.md};
  padding-left: ${({theme:t})=>t.spacing.md};
  border-left: 1px solid ${({theme:t})=>t.colors.border};

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    border-left: none;
    padding: ${({theme:t})=>t.spacing.md} ${({theme:t})=>t.spacing.lg};
    border-top: 1px solid ${({theme:t})=>t.colors.border};
    width: 100%;
    justify-content: center;
    flex-direction: column;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,hO=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
`,dO=M.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({theme:t})=>t.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
`,fO=M.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text.primary};

  @media (max-width: 480px) {
    display: none;
  }
`,r0=M.button`
  padding: 8px 16px;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  font-family: ${({theme:t})=>t.typography.heading};
  
  ${({$variant:t,theme:e})=>t==="login"?`
    background: ${e.colors.gradients.primary};
    color: white;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
    }
  `:`
    background: ${e.colors.surfaceElevated};
    color: ${e.colors.text.secondary};
    border: 1px solid ${e.colors.border};
    
    &:hover {
      background: ${e.colors.surfaceHover};
      color: ${e.colors.text.primary};
    }
  `}
`,pO=M.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 12px;
  color: ${({theme:t})=>t.colors.text.secondary};
  
  &::before {
    content: '👁';
  }
`,mO=Ot`
  from { opacity: 0; }
  to { opacity: 1; }
`,gO=Ot`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,yO=M.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${mO} 0.2s ease;
  padding: ${({theme:t})=>t.spacing.md};
`,vO=M.div`
  background: ${({theme:t})=>t.colors.surface};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  padding: ${({theme:t})=>t.spacing.xl};
  width: 100%;
  max-width: 360px;
  animation: ${gO} 0.3s ease;
`,_O=M.h2`
  font-size: 20px;
  font-weight: 700;
  font-family: ${({theme:t})=>t.typography.heading};
  color: ${({theme:t})=>t.colors.text.primary};
  margin-bottom: ${({theme:t})=>t.spacing.lg};
  text-align: center;
  
  span {
    display: block;
    font-size: 32px;
    margin-bottom: ${({theme:t})=>t.spacing.sm};
  }
`,wO=M.form`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.md};
`,i0=M.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.xs};
`,s0=M.label`
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text.secondary};
`,o0=M.input`
  padding: 12px 14px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  color: ${({theme:t})=>t.colors.text.primary};
  font-size: 14px;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
  
  &::placeholder {
    color: ${({theme:t})=>t.colors.text.disabled};
  }
`,EO=M.div`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 10px 14px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 13px;
  text-align: center;
`,xO=M.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.sm};
  margin-top: ${({theme:t})=>t.spacing.sm};
`,TO=M.button`
  flex: 1;
  padding: 12px 16px;
  background: ${({theme:t})=>t.colors.gradients.primary};
  color: white;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  font-family: ${({theme:t})=>t.typography.heading};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,IO=M.button`
  padding: 12px 16px;
  background: ${({theme:t})=>t.colors.surfaceElevated};
  color: ${({theme:t})=>t.colors.text.secondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
    color: ${({theme:t})=>t.colors.text.primary};
  }
`,SO=()=>{var _;const t=rl(),[e,n]=U.useState(!1),[r,i]=U.useState(!1),[s,o]=U.useState(""),[l,c]=U.useState(""),[u,f]=U.useState(!1),{user:m,isAuthenticated:g,signIn:w,signOut:T,error:k,clearError:b}=yo(),I=()=>n(!1),v=[{path:"/",label:"Ігрові дні"},{path:"/players",label:"Гравці"},{path:"/teams",label:"Команди"},{path:"/stats",label:"Статистика"}],S=()=>{I(),i(!0),o(""),c(""),b()},D=()=>{i(!1),o(""),c(""),b()},$=async x=>{x.preventDefault(),f(!0);const A=await w(s,l);f(!1),A&&D()},F=async()=>{I(),await T()},E=((_=m==null?void 0:m.email)==null?void 0:_.split("@")[0])||"User";return d.jsxs(d.Fragment,{children:[d.jsx(iO,{children:d.jsxs(sO,{children:[d.jsxs(OT,{to:"/",onClick:I,children:[d.jsx(oO,{children:"⚽"}),"Futsal League"]}),d.jsxs(cO,{onClick:()=>n(!e),$isOpen:e,"aria-label":"Toggle menu",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]}),d.jsxs(aO,{$isOpen:e,children:[v.map(x=>d.jsx(lO,{to:x.path,$active:t.pathname===x.path,onClick:I,children:x.label},x.path)),d.jsx(uO,{children:g&&m?d.jsxs(d.Fragment,{children:[d.jsxs(hO,{children:[d.jsx(dO,{children:E[0].toUpperCase()}),d.jsx(fO,{children:E})]}),d.jsx(r0,{$variant:"logout",onClick:F,children:"Вийти"})]}):d.jsxs(d.Fragment,{children:[d.jsx(pO,{children:"Гість"}),d.jsx(r0,{$variant:"login",onClick:S,children:"🔐 Увійти"})]})})]})]})}),r&&d.jsx(yO,{onClick:D,children:d.jsxs(vO,{onClick:x=>x.stopPropagation(),children:[d.jsxs(_O,{children:[d.jsx("span",{children:"⚽"}),"Вхід в систему"]}),d.jsxs(wO,{onSubmit:$,children:[k&&d.jsx(EO,{children:k}),d.jsxs(i0,{children:[d.jsx(s0,{children:"Email"}),d.jsx(o0,{type:"email",value:s,onChange:x=>o(x.target.value),placeholder:"Введіть email",autoFocus:!0,autoComplete:"email"})]}),d.jsxs(i0,{children:[d.jsx(s0,{children:"Пароль"}),d.jsx(o0,{type:"password",value:l,onChange:x=>c(x.target.value),placeholder:"Введіть пароль",autoComplete:"current-password"})]}),d.jsxs(xO,{children:[d.jsx(IO,{type:"button",onClick:D,children:"Скасувати"}),d.jsx(TO,{type:"submit",disabled:!s||!l||u,children:u?"Вхід...":"Увійти"})]})]})]})})]})},Bi=M.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({theme:t})=>t.spacing.lg};
  animation: ${tO} 0.5s ease;

  @media (max-width: 480px) {
    padding: ${({theme:t})=>t.spacing.md};
  }
`,bt=M.div`
  background: ${({theme:t,$variant:e})=>e==="elevated"?t.colors.surfaceElevated:t.colors.surface};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  padding: ${({theme:t})=>t.spacing.lg};
  margin-bottom: ${({theme:t})=>t.spacing.md};
  border: 1px solid ${({theme:t})=>t.colors.border};
  transition: all ${({theme:t})=>t.transitions.normal};
  position: relative;
  overflow: hidden;
  
  /* Subtle inner glow */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(34, 197, 94, 0.3),
      transparent
    );
    opacity: ${({$variant:t})=>t==="glow"?1:0};
    transition: opacity ${({theme:t})=>t.transitions.normal};
  }

  &:hover::before {
    opacity: 1;
  }

  ${({$variant:t,theme:e})=>t==="glow"&&vn`
    box-shadow: ${e.shadows.glow};
  `}

  @media (max-width: 480px) {
    padding: ${({theme:t})=>t.spacing.md};
    border-radius: ${({theme:t})=>t.borderRadius.md};
  }
`,AO={primary:vn`
    background: ${({theme:t})=>t.colors.gradients.primary};
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(34, 197, 94, 0.4);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(34, 197, 94, 0.5);
      transform: translateY(-2px);
    }
    
    &:active:not(:disabled) {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
    }
  `,secondary:vn`
    background: ${({theme:t})=>t.colors.surfaceElevated};
    color: ${({theme:t})=>t.colors.text.primary};
    border: 1px solid ${({theme:t})=>t.colors.border};
    
    &:hover:not(:disabled) {
      background: ${({theme:t})=>t.colors.surfaceHover};
      border-color: ${({theme:t})=>t.colors.borderLight};
      transform: translateY(-1px);
    }
  `,danger:vn`
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 14px rgba(239, 68, 68, 0.3);
    
    &:hover:not(:disabled) {
      box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
      transform: translateY(-2px);
    }
  `,ghost:vn`
    background: transparent;
    color: ${({theme:t})=>t.colors.text.secondary};
    border: none;
    
    &:hover:not(:disabled) {
      color: ${({theme:t})=>t.colors.text.primary};
      background: ${({theme:t})=>t.colors.surfaceHover};
    }
  `},fe=M.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({$size:t})=>{switch(t){case"sm":return"8px 14px";case"lg":return"14px 24px";default:return"12px 20px"}}};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: ${({$size:t})=>{switch(t){case"sm":return"13px";case"lg":return"16px";default:return"14px"}}};
  font-weight: 600;
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  white-space: nowrap;
  width: ${({$fullWidth:t})=>t?"100%":"auto"};
  
  ${({$variant:t="primary"})=>AO[t]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }

  @media (max-width: 480px) {
    padding: 12px 18px;
    font-size: 14px;
  }
`,no=M.input`
  padding: 14px 18px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 15px;
  color: ${({theme:t})=>t.colors.text.primary};
  width: 100%;
  transition: all ${({theme:t})=>t.transitions.fast};
  -webkit-appearance: none;

  &::placeholder {
    color: ${({theme:t})=>t.colors.text.disabled};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({theme:t})=>t.colors.borderLight};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
  }
`,xr=M.select`
  padding: 14px 18px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 15px;
  color: ${({theme:t})=>t.colors.text.primary};
  width: 100%;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  padding-right: 44px;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
  
  &:hover:not(:focus) {
    border-color: ${({theme:t})=>t.colors.borderLight};
  }
  
  option {
    background: ${({theme:t})=>t.colors.surface};
    color: ${({theme:t})=>t.colors.text.primary};
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    padding-right: 44px;
  }
`,Mt=M.label`
  display: block;
  margin-bottom: ${({theme:t})=>t.spacing.sm};
  font-size: 13px;
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: ${({theme:t})=>t.typography.heading};
`,jt=M.div`
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,vo=M.h1`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: ${({theme:t})=>t.spacing.lg};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: -0.03em;
  
  /* Green gradient underline */
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${({theme:t})=>t.colors.gradients.primary};
    border-radius: 2px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: ${({theme:t})=>t.spacing.md};
  }
`,Dr=M.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${({theme:t})=>t.spacing.md};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,gh=M.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 0 -${({theme:t})=>t.spacing.lg};
  padding: 0 ${({theme:t})=>t.spacing.lg};
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;

  @media (max-width: 480px) {
    margin: 0 -${({theme:t})=>t.spacing.md};
    padding: 0 ${({theme:t})=>t.spacing.md};
  }
`,yh=M.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  min-width: 500px;

  @media (max-width: 480px) {
    font-size: 13px;
    min-width: 400px;
  }
`,ye=M.th`
  text-align: left;
  padding: ${({theme:t})=>t.spacing.md};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  font-weight: 600;
  font-size: 12px;
  color: ${({theme:t})=>t.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  
  &:first-child {
    border-radius: ${({theme:t})=>t.borderRadius.md} 0 0 0;
  }
  
  &:last-child {
    border-radius: 0 ${({theme:t})=>t.borderRadius.md} 0 0;
  }

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,ve=M.td`
  padding: ${({theme:t})=>t.spacing.md};
  border-bottom: 1px solid ${({theme:t})=>t.colors.border};
  color: ${({theme:t})=>t.colors.text.primary};
  vertical-align: middle;

  @media (max-width: 480px) {
    padding: 12px 10px;
  }
`,vh=M.tr`
  transition: background ${({theme:t})=>t.transitions.fast};

  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
  }
  
  &:last-child td {
    border-bottom: none;
  }
`;M.div`
  display: flex;
  gap: ${({$gap:t,theme:e})=>t||e.spacing.md};
  justify-content: ${({$justify:t})=>t||"flex-start"};
  align-items: ${({$align:t})=>t||"stretch"};
  flex-wrap: ${({$wrap:t})=>t||"nowrap"};
  flex-direction: ${({$direction:t})=>t||"row"};
`;const Ac=M.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,VT=M.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  font-family: ${({theme:t})=>t.typography.heading};
  
  ${({$color:t,$variant:e,theme:n})=>e==="outline"?vn`
    background: transparent;
    border: 1px solid ${t||n.colors.border};
    color: ${t||n.colors.text.secondary};
  `:vn`
    background: ${t||n.colors.surfaceElevated};
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  `}
`,Os=M.div`
  text-align: center;
  padding: ${({theme:t})=>t.spacing.xxl};
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 15px;
  
  /* Subtle icon placeholder */
  &::before {
    content: '⚽';
    display: block;
    font-size: 48px;
    margin-bottom: ${({theme:t})=>t.spacing.md};
    opacity: 0.3;
  }

  p {
    margin: ${({theme:t})=>t.spacing.xs} 0;
  }

  @media (max-width: 480px) {
    padding: ${({theme:t})=>t.spacing.xl};
    font-size: 14px;
  }
`,Dn=M.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
    
    & > button {
      flex: 1;
      min-width: 0;
    }
  }
`,_o=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;M.div`
  background: ${({theme:t})=>t.colors.surface};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  padding: ${({theme:t})=>t.spacing.md};
  text-align: center;
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: ${({theme:t})=>t.colors.primary};
    font-family: ${({theme:t})=>t.typography.heading};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 12px;
    color: ${({theme:t})=>t.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({theme:t})=>t.spacing.xs};
  }
`;M.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  background: ${({theme:t})=>t.colors.surfaceElevated};
  border: 1px solid ${({theme:t})=>t.colors.border};
  color: ${({theme:t})=>t.colors.text.secondary};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
    color: ${({theme:t})=>t.colors.text.primary};
    border-color: ${({theme:t})=>t.colors.borderLight};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;M.hr`
  border: none;
  height: 1px;
  background: ${({theme:t})=>t.colors.border};
  margin: ${({theme:t})=>t.spacing.lg} 0;
`;const $T=Ot`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,CO=M(bt)`
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.normal};
  animation: ${$T} 0.4s ease forwards;
  animation-delay: ${({$index:t})=>t*.05}s;
  opacity: 0;
  
  /* Hover glow effect */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: opacity ${({theme:t})=>t.transitions.normal};
    background: ${({theme:t})=>t.colors.gradients.hero};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:t})=>t.shadows.lg};
    border-color: ${({theme:t})=>t.colors.primary};
    
    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`,RO=M.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.sm};
  position: relative;
  z-index: 1;
`,kO=M.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`,PO=M.div`
  display: inline-flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.xs};
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 14px;
  margin-bottom: ${({theme:t})=>t.spacing.md};
  position: relative;
  z-index: 1;
  
  /* Calendar icon */
  &::before {
    content: '📅';
    font-size: 14px;
  }
`,bO=M.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  font-size: 14px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    font-size: 13px;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,a0=M.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:t})=>t.colors.text.secondary};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  padding: 6px 12px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  
  .stat-icon {
    font-size: 14px;
  }
  
  .stat-value {
    font-weight: 600;
    color: ${({theme:t})=>t.colors.text.primary};
  }
`,NO=M.div`
  margin-top: ${({theme:t})=>t.spacing.lg};
  padding-top: ${({theme:t})=>t.spacing.md};
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  position: relative;
  z-index: 1;
`,DO=M.div`
  text-align: center;
  padding: ${({theme:t})=>t.spacing.xxxl} ${({theme:t})=>t.spacing.lg};
  
  h2 {
    font-size: 24px;
    margin-bottom: ${({theme:t})=>t.spacing.md};
    color: ${({theme:t})=>t.colors.text.primary};
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    margin-bottom: ${({theme:t})=>t.spacing.xl};
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`,OO=M.div`
  font-size: 64px;
  margin-bottom: ${({theme:t})=>t.spacing.lg};
  filter: drop-shadow(0 0 30px rgba(34, 197, 94, 0.4));
`,VO=M(bt)`
  margin-bottom: ${({theme:t})=>t.spacing.xl};
`,$O=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:t})=>t.spacing.md};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing.sm};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  animation: ${$T} 0.3s ease forwards;
  animation-delay: ${({$index:t})=>t*.05}s;
  opacity: 0;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background: ${({theme:t})=>t.colors.surfaceHover};
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:t})=>t.spacing.sm};
  }
`,LO=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
  flex: 1;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`,l0=M.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  background: ${({$color:t})=>t};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  white-space: nowrap;

  @media (max-width: 480px) {
    padding: 4px 10px;
    font-size: 12px;
  }
`,MO=M.div`
  font-size: 20px;
  font-weight: 800;
  font-family: ${({theme:t})=>t.typography.heading};
  color: ${({theme:t})=>t.colors.text.primary};
  min-width: 60px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`,jO=M.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  margin: 0 2px;
`,FO=M.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;

  @media (max-width: 600px) {
    align-items: center;
    width: 100%;
    padding-top: ${({theme:t})=>t.spacing.sm};
    border-top: 1px solid ${({theme:t})=>t.colors.border};
  }
`,UO=M.span`
  font-size: 12px;
  color: ${({theme:t})=>t.colors.text.secondary};
`,zO=M.span`
  font-size: 11px;
  color: ${({theme:t})=>t.colors.text.disabled};
`,BO=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme:t})=>t.spacing.md};
`,HO=()=>{const{gameDays:t,teams:e,deleteGameDay:n}=Yi(),{isAuthenticated:r}=yo(),i=Fu(),s=[...t].sort((w,T)=>new Date(T.date).getTime()-new Date(w.date).getTime()),l=t.flatMap(w=>w.matches.map(T=>({...T,gameDayName:w.name,gameDayDate:w.date}))).sort((w,T)=>T.timestamp-w.timestamp).slice(0,5),c=w=>{var T;return((T=e.find(k=>k.id===w))==null?void 0:T.name)||"?"},u=w=>{var T;return((T=e.find(k=>k.id===w))==null?void 0:T.color)||"#64748b"},f=w=>new Date(w).toLocaleDateString("uk-UA",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),m=w=>{i(`/game-day/${w}`)},g=async(w,T)=>{w.stopPropagation(),window.confirm("Ви впевнені, що хочете видалити цей ігровий день?")&&await n(T)};return d.jsxs(Bi,{children:[d.jsxs(_o,{children:[d.jsx(vo,{style:{margin:0},children:"Ігрові дні"}),r&&d.jsx(fe,{onClick:()=>i("/game-day/new"),children:"+ Створити"})]}),l.length>0&&d.jsxs(VO,{children:[d.jsx(BO,{children:d.jsx(Dr,{style:{margin:0},children:"🔥 Останні матчі"})}),l.map((w,T)=>d.jsxs($O,{$index:T,onClick:()=>i(`/game-day/${w.gameDayId}`),children:[d.jsxs(LO,{children:[d.jsx(l0,{$color:u(w.team1Id),children:c(w.team1Id)}),d.jsxs(MO,{children:[w.score1,d.jsx(jO,{children:":"}),w.score2]}),d.jsx(l0,{$color:u(w.team2Id),children:c(w.team2Id)})]}),d.jsxs(FO,{children:[d.jsx(UO,{children:f(w.timestamp)}),d.jsx(zO,{children:w.gameDayName})]})]},w.id))]}),s.length===0?d.jsx(bt,{$variant:"glow",children:d.jsxs(DO,{children:[d.jsx(OO,{children:"⚽"}),d.jsx("h2",{children:"Ласкаво просимо!"}),d.jsx("p",{children:r?"Ще немає ігрових днів. Створіть перший ігровий день, щоб почати відстежувати матчі та статистику.":"Ще немає ігрових днів. Увійдіть, щоб створювати та редагувати дані."}),r&&d.jsx(fe,{onClick:()=>i("/game-day/new"),$size:"lg",children:"+ Створити перший ігровий день"})]})}):d.jsxs(d.Fragment,{children:[d.jsx(Dr,{style:{marginTop:"8px"},children:"📅 Всі ігрові дні"}),s.map((w,T)=>d.jsxs(CO,{onClick:()=>m(w.id),$index:T,children:[d.jsx(RO,{children:d.jsx(kO,{children:w.name})}),d.jsx(PO,{children:new Date(w.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),d.jsxs(bO,{children:[d.jsxs(a0,{children:[d.jsx("span",{className:"stat-icon",children:"🏆"}),d.jsx("span",{children:"Матчів:"}),d.jsx("span",{className:"stat-value",children:w.matches.length})]}),d.jsxs(a0,{children:[d.jsx("span",{className:"stat-icon",children:"👥"}),d.jsx("span",{children:"Гравців:"}),d.jsx("span",{className:"stat-value",children:w.playerTeamAssignments.length})]})]}),r&&d.jsx(NO,{children:d.jsxs(Dn,{children:[d.jsx(fe,{$variant:"secondary",onClick:k=>{k.stopPropagation(),i(`/game-day/${w.id}/edit`)},children:"✎ Редагувати"}),d.jsx(fe,{$variant:"danger",onClick:k=>g(k,w.id),children:"✕ Видалити"})]})})]},w.id))]})]})},WO=Ot`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`,GO=M.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px;
  background: ${({theme:t})=>t.colors.surface};
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: 10px;
  animation: ${WO} 0.2s ease;
  transition: all ${({theme:t})=>t.transitions.fast};

  &:hover {
    border-color: ${({theme:t})=>t.colors.borderLight};
    background: ${({theme:t})=>t.colors.surfaceHover};
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`,qO=M.div`
  margin-top: ${({theme:t})=>t.spacing.xl};
`,KO=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sm};
  padding: 10px 16px;
  background: ${({$color:t})=>t};
  color: white;
  font-weight: 700;
  font-size: 14px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing.md};
  box-shadow: 0 2px 8px ${({$color:t})=>`${t}50`};
  font-family: ${({theme:t})=>t.typography.heading};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`,QO=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,c0=M.p`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 14px;
  padding: ${({theme:t})=>t.spacing.md};
  text-align: center;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1px dashed ${({theme:t})=>t.colors.border};
`,YO=M.p`
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 13px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`,XO=M.div`
  height: 4px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({$percentage:t})=>t}%;
    background: ${({theme:t})=>t.colors.gradients.primary};
    border-radius: 2px;
    transition: width 0.3s ease;
  }
`,JO=M(bt)`
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
`,u0=()=>{const{id:t}=DE(),{players:e,teams:n,addGameDay:r,updateGameDay:i,getGameDay:s}=Yi(),{isAuthenticated:o}=yo(),l=Fu(),c=!!t,u=t?s(t):void 0;U.useEffect(()=>{o||l("/")},[o,l]);const[f,m]=U.useState(""),[g,w]=U.useState(new Date().toISOString().split("T")[0]),[T,k]=U.useState([]);U.useEffect(()=>{c&&u&&(m(u.name),w(u.date),k(u.playerTeamAssignments.map(x=>({playerId:x.playerId,teamId:x.teamId}))))},[c,u]);const b=new Set(T.map(x=>x.playerId)),I=()=>{if(n.length===0)return;const x=e.find(A=>!b.has(A.id));if(!x){alert("Всі гравці вже додані");return}k([...T,{playerId:x.id,teamId:n[0].id}])},v=x=>{k(T.filter((A,R)=>R!==x))},S=(x,A)=>{if(T.some((C,Te)=>Te!==x&&C.playerId===A)){alert("Цей гравець вже доданий до іншої команди");return}const P=[...T];P[x].playerId=A,k(P)},D=(x,A)=>{const R=[...T];R[x].teamId=A,k(R)},$=async x=>{if(x.preventDefault(),!f.trim()){alert("Будь ласка, введіть назву ігрового дня");return}if(c&&t)await i(t,{name:f.trim(),date:g,playerTeamAssignments:T.map(A=>({playerId:A.playerId,teamId:A.teamId}))}),l(`/game-day/${t}`);else{const A=await r({name:f.trim(),date:g,playerTeamAssignments:T.map(R=>({playerId:R.playerId,teamId:R.teamId})),matches:[],isActive:!1});l(`/game-day/${A.id}`)}},F=n.map(x=>({team:x,players:T.map((A,R)=>({...A,index:R})).filter(A=>A.teamId===x.id)})),E=e.length-b.size,_=e.length>0?T.length/e.length*100:0;return d.jsxs(Bi,{children:[d.jsx(_o,{children:d.jsx(vo,{style:{margin:0},children:c?"✏️ Редагувати ігровий день":"🆕 Створити ігровий день"})}),d.jsx(JO,{children:d.jsxs("form",{onSubmit:$,children:[d.jsxs(jt,{children:[d.jsx(Mt,{children:"Назва"}),d.jsx(no,{type:"text",value:f,onChange:x=>m(x.target.value),placeholder:"Наприклад: Гра 15 грудня",autoFocus:!0})]}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"Дата"}),d.jsx(no,{type:"date",value:g,onChange:x=>w(x.target.value)})]}),d.jsx(jt,{children:d.jsxs(Ac,{children:[d.jsxs("div",{style:{flex:1},children:[d.jsx(Mt,{style:{margin:0},children:"👥 Гравці та команди"}),d.jsxs(YO,{children:["Додано: ",T.length," з ",e.length," гравців"]}),d.jsx(XO,{$percentage:_})]}),d.jsx(fe,{type:"button",onClick:I,disabled:E===0,children:"+ Додати гравця"})]})}),e.length===0&&d.jsx(c0,{children:'⚠️ Спочатку додайте гравців у розділі "Гравці"'}),F.map(({team:x,players:A})=>d.jsxs(qO,{children:[d.jsxs(KO,{$color:x.color,children:[x.name,d.jsx(QO,{children:A.length})]}),A.length===0?d.jsx(c0,{children:"Немає гравців у цій команді"}):A.map(R=>d.jsxs(GO,{children:[d.jsx(xr,{value:R.playerId,onChange:P=>S(R.index,P.target.value),style:{flex:2},children:e.map(P=>{const C=b.has(P.id)&&P.id!==R.playerId;return d.jsxs("option",{value:P.id,disabled:C,children:[P.name,C?" (вже додано)":""]},P.id)})}),d.jsx(xr,{value:R.teamId,onChange:P=>D(R.index,P.target.value),style:{flex:1},children:n.map(P=>d.jsx("option",{value:P.id,children:P.name},P.id))}),d.jsx(fe,{type:"button",$variant:"danger",$size:"sm",onClick:()=>v(R.index),children:"✕"})]},R.index))]},x.id)),d.jsxs(Dn,{style:{marginTop:"32px",paddingTop:"24px",borderTop:"1px solid var(--border, #2d3d4f)"},children:[d.jsx(fe,{type:"submit",children:c?"✓ Зберегти зміни":"+ Створити ігровий день"}),d.jsx(fe,{type:"button",$variant:"ghost",onClick:()=>l(c?`/game-day/${t}`:"/"),children:"Скасувати"})]})]})})]})},_h=Ot`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,ZO=Ot`
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
`,Nd=M.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({$color:t})=>t};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({$color:t})=>`${t}50`};
  font-family: ${({theme:t})=>t.typography.heading};

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`,eV=M.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  min-width: 80px;
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  letter-spacing: -0.02em;
  animation: ${ZO} 0.5s ease;

  @media (max-width: 480px) {
    font-size: 24px;
    min-width: 60px;
  }
`,tV=M.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  margin: 0 4px;
`,nV=M(bt)`
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.border};
  animation: ${_h} 0.3s ease forwards;
  animation-delay: ${({$index:t})=>(t||0)*.05}s;
  opacity: 0;
`,rV=M.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.text.secondary};
  margin-bottom: ${({theme:t})=>t.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: ${({theme:t})=>t.colors.primary};
    border-radius: 50%;
  }
`,iV=M.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.lg};

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${({theme:t})=>t.spacing.md};
  }
`,sV=M.div`
  display: flex;
  gap: ${({theme:t})=>t.spacing.md};
  align-items: center;
  flex: 1;
  justify-content: center;

  @media (max-width: 480px) {
    gap: ${({theme:t})=>t.spacing.sm};
    flex-wrap: wrap;
    justify-content: center;
  }
`,oV=M.div`
  margin-top: ${({theme:t})=>t.spacing.md};
  padding-top: ${({theme:t})=>t.spacing.md};
  border-top: 1px solid ${({theme:t})=>t.colors.border};
  font-size: 14px;
  color: ${({theme:t})=>t.colors.text.secondary};
  
  strong {
    color: ${({theme:t})=>t.colors.text.primary};
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`,aV=M.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚽';
    font-size: 12px;
  }
`,lV=M(bt)`
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border: 1px solid ${({theme:t})=>t.colors.primary};
  animation: ${_h} 0.3s ease;
`,cV=M.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px;
  background: ${({theme:t})=>t.colors.surface};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  border: 1px solid ${({theme:t})=>t.colors.border};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
`,uV=M.input`
  width: 60px;
  padding: 10px;
  border: 1px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.text.primary};
  -webkit-appearance: none;
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`,h0=M.input`
  width: 100%;
  padding: 16px;
  border: 2px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  color: ${({theme:t})=>t.colors.text.primary};
  font-family: ${({theme:t})=>t.typography.heading};
  -webkit-appearance: none;
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }
`,d0=M.div`
  color: ${({theme:t})=>t.colors.error};
  font-size: 12px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '⚠️';
    font-size: 12px;
  }
`,hV=M.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`,dV=M.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${({theme:t})=>t.spacing.md};
  animation: ${_h} 0.2s ease;
`,fV=M(bt)`
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${_h} 0.3s ease;
`,pV=M.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`,mV=M.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({theme:t})=>t.colors.text.secondary};
  font-size: 14px;
  
  &::before {
    content: '📅';
  }
`,gV=M(vh)`
  ${({$rank:t,theme:e})=>t===1&&`
    background: ${e.colors.primaryLight};
    
    td:first-child {
      position: relative;
      
      &::before {
        content: '👑';
        position: absolute;
        left: -8px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }
  `}
`,yV=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background: ${({theme:t})=>t.colors.gradients.primary};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(34, 197, 94, 0.3);
`,vV=()=>{const{id:t}=DE(),e=Fu(),{isAuthenticated:n}=yo(),{getGameDay:r,teams:i,players:s,addMatch:o,updateMatch:l,deleteMatch:c,getTeamDayStats:u,transferPlayer:f}=Yi(),[m,g]=U.useState(!1),[w,T]=U.useState(!1),[k,b]=U.useState(null),[I,v]=U.useState(""),[S,D]=U.useState(""),[$,F]=U.useState("0"),[E,_]=U.useState("0"),[x,A]=U.useState([]),[R,P]=U.useState(""),[C,Te]=U.useState(""),[We,rn]=U.useState(""),Ee=r(t||"");if(U.useEffect(()=>{i.length>=2&&!I&&!S&&(v(i[0].id),D(i[1].id))},[i,I,S]),U.useEffect(()=>{if(I&&I===S){const z=i.find(Q=>Q.id!==I);z&&D(z.id)}},[I,S,i]),U.useEffect(()=>{if(R&&Ee){const z=Ee.playerTeamAssignments.find(Q=>Q.playerId===R);z&&(Te(z.teamId),We===z.teamId&&rn(""))}},[R,Ee,We]),!Ee)return d.jsx(Bi,{children:d.jsxs(bt,{$variant:"glow",children:[d.jsx(Os,{children:d.jsx("p",{children:"Ігровий день не знайдено"})}),d.jsx("div",{style:{textAlign:"center",marginTop:"16px"},children:d.jsx(fe,{onClick:()=>e("/"),children:"← Назад до списку"})})]})});const O=u(Ee.id),N=z=>{var Q;return((Q=i.find(ne=>ne.id===z))==null?void 0:Q.name)||"?"},j=z=>{var Q;return((Q=i.find(ne=>ne.id===z))==null?void 0:Q.color)||"#64748b"},H=z=>{var Q;return((Q=s.find(ne=>ne.id===z))==null?void 0:Q.name)||"?"},G=z=>Ee.playerTeamAssignments.filter(Q=>Q.teamId===z).map(Q=>s.find(ne=>ne.id===Q.playerId)).filter(Boolean),Y=()=>i.filter(z=>z.id!==I),Z=()=>i.filter(z=>z.id!==C),be=z=>{const Q=parseInt(z,10);return isNaN(Q)?0:Math.max(0,Q)},Ne=z=>{const Q=parseInt(z,10);return isNaN(Q)?0:Math.max(0,Q)},ze=z=>x.filter(Q=>Q.teamId===z).reduce((Q,ne)=>Q+Ne(ne.goals),0),Vt=be($),At=be(E),cr=ze(I),Hn=ze(S),$t=cr>Vt,Xi=Hn>At,wo=$t||Xi,pl=z=>{const Q=G(z);Q.length>0&&A([...x,{playerId:Q[0].id,teamId:z,goals:"1"}])},Eo=z=>{A(x.filter((Q,ne)=>ne!==z))},di=(z,Q,ne)=>{const De=[...x];Q==="playerId"?De[z].playerId=ne:(ne===""||/^\d+$/.test(ne))&&(De[z].goals=ne),A(De)},xo=()=>{F("0"),_("0"),A([]),g(!1),b(null),i.length>=2&&(v(i[0].id),D(i[1].id))},it=async()=>{if(I===S){alert("Виберіть різні команди");return}if(wo){alert("Кількість голів гравців перевищує загальний рахунок команди");return}const z=[];x.forEach(Q=>{const ne=Ne(Q.goals);for(let De=0;De<ne;De++)z.push({playerId:Q.playerId,teamId:Q.teamId})}),k?await l(Ee.id,k,{team1Id:I,team2Id:S,score1:Vt,score2:At,goals:z.map(Q=>({...Q,id:Date.now().toString()+Math.random()}))}):await o(Ee.id,{team1Id:I,team2Id:S,score1:Vt,score2:At,goals:z.map(Q=>({...Q,id:Date.now().toString()+Math.random()})),timestamp:Date.now()}),xo()},ht=z=>{b(z.id),v(z.team1Id),D(z.team2Id),F(z.score1.toString()),_(z.score2.toString());const Q=new Map;z.goals.forEach(ne=>{const De=`${ne.playerId}-${ne.teamId}`;Q.has(De)?Q.get(De).count++:Q.set(De,{playerId:ne.playerId,teamId:ne.teamId,count:1})}),A(Array.from(Q.values()).map(ne=>({playerId:ne.playerId,teamId:ne.teamId,goals:ne.count.toString()}))),g(!0)},Ji=()=>{xo()},wh=async()=>{if(!R||!C||!We){alert("Заповніть всі поля");return}if(C===We){alert("Виберіть різні команди");return}await f(Ee.id,R,C,We),T(!1),P(""),Te(""),rn("")},ml=z=>{const Q={};return z.forEach(ne=>{const De=`${ne.playerId}-${ne.teamId}`;Q[De]||(Q[De]={playerId:ne.playerId,teamId:ne.teamId,count:0}),Q[De].count++}),Object.values(Q)};return d.jsxs(Bi,{children:[d.jsxs(_o,{children:[d.jsxs("div",{children:[d.jsx(vo,{style:{marginBottom:"8px"},children:Ee.name}),d.jsx(mV,{children:new Date(Ee.date).toLocaleDateString("uk-UA",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),d.jsxs(hV,{children:[n&&d.jsx(fe,{$variant:"secondary",onClick:()=>T(!0),children:"🔄 Трансфер"}),d.jsx(fe,{$variant:"ghost",onClick:()=>e("/"),children:"← Назад"})]})]}),d.jsxs(bt,{children:[d.jsx(Dr,{children:"🏆 Турнірна таблиця"}),O.length===0?d.jsxs(Os,{children:[d.jsx("p",{children:"Немає даних"}),d.jsx("p",{children:"Додайте матчі, щоб побачити таблицю"})]}):d.jsx(gh,{children:d.jsxs(yh,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ye,{style:{width:"50px"},children:"#"}),d.jsx(ye,{children:"Команда"}),d.jsx(ye,{style:{textAlign:"center"},children:"І"}),d.jsx(ye,{style:{textAlign:"center"},children:"В"}),d.jsx(ye,{style:{textAlign:"center"},children:"Н"}),d.jsx(ye,{style:{textAlign:"center"},children:"П"}),d.jsx(ye,{style:{textAlign:"center"},children:"ЗГ"}),d.jsx(ye,{style:{textAlign:"center"},children:"ПГ"}),d.jsx(ye,{style:{textAlign:"center"},children:"РГ"}),d.jsx(ye,{style:{textAlign:"center"},children:"О"})]})}),d.jsx("tbody",{children:O.map((z,Q)=>d.jsxs(gV,{$rank:Q+1,children:[d.jsx(ve,{style:{fontWeight:600},children:Q+1}),d.jsx(ve,{children:d.jsx(Nd,{$color:z.teamColor,children:z.teamName})}),d.jsx(ve,{style:{textAlign:"center"},children:z.matchesPlayed}),d.jsx(ve,{style:{textAlign:"center",color:"#22c55e",fontWeight:600},children:z.wins}),d.jsx(ve,{style:{textAlign:"center"},children:z.draws}),d.jsx(ve,{style:{textAlign:"center",color:"#ef4444"},children:z.losses}),d.jsx(ve,{style:{textAlign:"center"},children:z.goalsFor}),d.jsx(ve,{style:{textAlign:"center"},children:z.goalsAgainst}),d.jsx(ve,{style:{textAlign:"center",fontWeight:600},children:z.goalDifference>0?`+${z.goalDifference}`:z.goalDifference}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(yV,{children:z.points})})]},z.teamId))})]})})]}),d.jsxs(bt,{children:[d.jsxs(Ac,{style:{marginBottom:"20px"},children:[d.jsx(Dr,{style:{margin:0,flex:1},children:"⚽ Матчі"}),n&&!m&&d.jsx(fe,{onClick:()=>g(!0),children:"+ Додати матч"})]}),n&&m&&d.jsxs(lV,{children:[d.jsx(Dr,{style:{fontSize:"16px",marginBottom:"20px"},children:k?"✏️ Редагування матчу":"🆕 Новий матч"}),d.jsxs(Ac,{style:{marginBottom:"20px"},children:[d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsx(Mt,{children:"Команда 1"}),d.jsx(xr,{value:I,onChange:z=>v(z.target.value),children:i.map(z=>d.jsx("option",{value:z.id,children:z.name},z.id))})]}),d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsx(Mt,{children:"Команда 2"}),d.jsx(xr,{value:S,onChange:z=>D(z.target.value),children:Y().map(z=>d.jsx("option",{value:z.id,children:z.name},z.id))})]})]}),d.jsxs(Ac,{style:{marginBottom:"20px"},children:[d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsxs(Mt,{children:["Рахунок ",N(I)]}),d.jsx(h0,{type:"text",inputMode:"numeric",value:$,onChange:z=>{const Q=z.target.value;(Q===""||/^\d+$/.test(Q))&&F(Q)},onBlur:()=>{$===""&&F("0")}}),$t&&d.jsxs(d0,{children:["Голів (",cr,") більше ніж рахунок (",Vt,")"]})]}),d.jsxs(jt,{style:{flex:1,margin:0},children:[d.jsxs(Mt,{children:["Рахунок ",N(S)]}),d.jsx(h0,{type:"text",inputMode:"numeric",value:E,onChange:z=>{const Q=z.target.value;(Q===""||/^\d+$/.test(Q))&&_(Q)},onBlur:()=>{E===""&&_("0")}}),Xi&&d.jsxs(d0,{children:["Голів (",Hn,") більше ніж рахунок (",At,")"]})]})]}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"Голи гравців (необов'язково)"}),d.jsxs(Dn,{children:[d.jsxs(fe,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>pl(I),children:["+ ",N(I)]}),d.jsxs(fe,{type:"button",$variant:"secondary",$size:"sm",onClick:()=>pl(S),children:["+ ",N(S)]})]})]}),x.map((z,Q)=>d.jsxs(cV,{children:[d.jsx(xr,{value:z.playerId,onChange:ne=>di(Q,"playerId",ne.target.value),style:{flex:1},children:G(z.teamId).map(ne=>d.jsx("option",{value:ne.id,children:ne.name},ne.id))}),d.jsxs(pV,{children:[d.jsx(VT,{$color:j(z.teamId),children:N(z.teamId)}),d.jsx(uV,{type:"text",inputMode:"numeric",value:z.goals,onChange:ne=>di(Q,"goals",ne.target.value),onBlur:()=>{z.goals===""&&di(Q,"goals","0")}}),d.jsx(fe,{$variant:"danger",$size:"sm",onClick:()=>Eo(Q),children:"✕"})]})]},Q)),d.jsxs(Dn,{style:{marginTop:"20px"},children:[d.jsx(fe,{onClick:it,disabled:wo,children:k?"✓ Зберегти":"+ Додати"}),d.jsx(fe,{$variant:"ghost",onClick:Ji,children:"Скасувати"})]})]}),Ee.matches.length===0?d.jsxs(Os,{children:[d.jsx("p",{children:"Ще немає матчів"}),d.jsx("p",{children:"Додайте перший матч, щоб почати"})]}):Ee.matches.map((z,Q)=>d.jsxs(nV,{$index:Q,children:[d.jsxs(rV,{children:["Матч #",Q+1]}),d.jsxs(iV,{children:[d.jsxs(sV,{children:[d.jsx(Nd,{$color:j(z.team1Id),children:N(z.team1Id)}),d.jsxs(eV,{children:[z.score1,d.jsx(tV,{children:":"}),z.score2]}),d.jsx(Nd,{$color:j(z.team2Id),children:N(z.team2Id)})]}),n&&d.jsxs(Dn,{children:[d.jsx(fe,{$variant:"secondary",$size:"sm",onClick:()=>ht(z),disabled:k===z.id,children:"✎ Редагувати"}),d.jsx(fe,{$variant:"danger",$size:"sm",onClick:async()=>{window.confirm("Видалити цей матч?")&&await c(Ee.id,z.id)},children:"✕"})]})]}),z.goals.length>0&&d.jsxs(oV,{children:[d.jsx("strong",{children:"Голи: "}),ml(z.goals).map((ne,De,To)=>d.jsxs(aV,{children:[H(ne.playerId),ne.count>1&&` ×${ne.count}`,De<To.length-1&&", "]},De))]})]},z.id))]}),n&&w&&d.jsx(dV,{onClick:()=>T(!1),children:d.jsxs(fV,{onClick:z=>z.stopPropagation(),children:[d.jsx(Dr,{children:"🔄 Трансфер гравця"}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"Гравець"}),d.jsxs(xr,{value:R,onChange:z=>P(z.target.value),children:[d.jsx("option",{value:"",children:"Виберіть гравця"}),Ee.playerTeamAssignments.map(z=>{const Q=s.find(De=>De.id===z.playerId),ne=i.find(De=>De.id===z.teamId);return d.jsxs("option",{value:z.playerId,children:[Q==null?void 0:Q.name," (",ne==null?void 0:ne.name,")"]},z.playerId)})]})]}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"З команди"}),d.jsx(xr,{value:C,disabled:!0,style:{opacity:.7},children:d.jsx("option",{value:"",children:C?N(C):"Автоматично"})})]}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"До команди"}),d.jsxs(xr,{value:We,onChange:z=>rn(z.target.value),disabled:!C,children:[d.jsx("option",{value:"",children:"Виберіть команду"}),Z().map(z=>d.jsx("option",{value:z.id,children:z.name},z.id))]})]}),d.jsxs(Dn,{children:[d.jsx(fe,{onClick:wh,disabled:!We,children:"✓ Трансфер"}),d.jsx(fe,{$variant:"ghost",onClick:()=>T(!1),children:"Скасувати"})]})]})})]})},_V=Ot`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`,wV=M(bt)`
  animation: ${_V} 0.3s ease;
  border: 1px solid ${({theme:t})=>t.colors.primary};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  
  &::before {
    opacity: 1 !important;
  }
`,EV=M.div`
  width: 36px;
  height: 36px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
`,xV=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
`,TV=M.span`
  font-weight: 500;
  color: ${({theme:t})=>t.colors.text.primary};
`,IV=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({theme:t})=>t.colors.primaryLight};
  color: ${({theme:t})=>t.colors.primary};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,SV=M.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 13px;
`,AV=()=>{const{players:t,addPlayer:e,updatePlayer:n,deletePlayer:r}=Yi(),{isAuthenticated:i}=yo(),[s,o]=U.useState(!1),[l,c]=U.useState(""),[u,f]=U.useState(null),[m,g]=U.useState(""),w=async()=>{if(!l.trim()){alert("Введіть імʼя гравця");return}await e({name:l.trim()}),c(""),o(!1)},T=(v,S)=>{f(v),g(S)},k=async v=>{if(!m.trim()){alert("Введіть імʼя гравця");return}await n(v,{name:m.trim()}),f(null),g("")},b=async v=>{window.confirm("Видалити цього гравця?")&&await r(v)},I=v=>v.split(" ").map(S=>S[0]).join("").slice(0,2);return d.jsxs(Bi,{children:[d.jsxs(_o,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx(vo,{style:{margin:0},children:"Гравці"}),d.jsx(IV,{children:t.length})]}),i&&d.jsx(fe,{onClick:()=>o(!s),children:s?"Скасувати":"+ Додати гравця"})]}),s&&d.jsxs(wV,{children:[d.jsx(Dr,{children:"👤 Новий гравець"}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"Імʼя гравця"}),d.jsx(no,{type:"text",value:l,onChange:v=>c(v.target.value),placeholder:"Введіть імʼя гравця...",onKeyPress:v=>v.key==="Enter"&&w(),autoFocus:!0})]}),d.jsxs(Dn,{children:[d.jsx(fe,{onClick:w,children:"Додати"}),d.jsx(fe,{$variant:"ghost",onClick:()=>o(!1),children:"Скасувати"})]})]}),d.jsx(bt,{children:t.length===0?d.jsxs(Os,{children:[d.jsx("p",{children:"Ще немає гравців"}),d.jsx("p",{children:"Додайте гравців, щоб почати формувати команди"})]}):d.jsx(gh,{children:d.jsxs(yh,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ye,{style:{width:"50px"},children:"#"}),d.jsx(ye,{children:"Гравець"}),i&&d.jsx(ye,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),d.jsx("tbody",{children:t.map((v,S)=>d.jsxs(vh,{children:[d.jsx(ve,{children:d.jsx(SV,{children:S+1})}),d.jsx(ve,{children:u===v.id?d.jsx(no,{type:"text",value:m,onChange:D=>g(D.target.value),onKeyPress:D=>D.key==="Enter"&&k(v.id),autoFocus:!0,style:{maxWidth:"300px"}}):d.jsxs(xV,{children:[d.jsx(EV,{children:I(v.name)}),d.jsx(TV,{children:v.name})]})}),i&&d.jsx(ve,{style:{textAlign:"right"},children:d.jsx(Dn,{style:{justifyContent:"flex-end"},children:u===v.id?d.jsxs(d.Fragment,{children:[d.jsx(fe,{$size:"sm",onClick:()=>k(v.id),children:"✓ Зберегти"}),d.jsx(fe,{$variant:"ghost",$size:"sm",onClick:()=>f(null),children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsx(fe,{$variant:"secondary",$size:"sm",onClick:()=>T(v.id,v.name),children:"✎"}),d.jsx(fe,{$variant:"danger",$size:"sm",onClick:()=>b(v.id),children:"✕"})]})})})]},v.id))})]})})})]})},CV=Ot`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`,RV=M(bt)`
  animation: ${CV} 0.3s ease;
  border: 1px solid ${({theme:t})=>t.colors.primary};
  background: ${({theme:t})=>t.colors.backgroundSecondary};
`,kV=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
`,f0=M.input`
  width: 60px;
  height: 48px;
  padding: 4px;
  border: 2px solid ${({theme:t})=>t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  cursor: pointer;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  transition: all ${({theme:t})=>t.transitions.fast};
  
  &:hover {
    border-color: ${({theme:t})=>t.colors.borderLight};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:t})=>t.colors.primaryLight};
  }

  &::-webkit-color-swatch-wrapper {
    padding: 4px;
  }
  
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,PV=M.div`
  padding: 8px 16px;
  background: ${({$color:t})=>t};
  border-radius: ${({theme:t})=>t.borderRadius.md};
  color: white;
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`,bV=M.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  background: ${({$color:t})=>t};
  color: white;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 600;
  font-size: 14px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 8px ${({$color:t})=>`${t}40`};
`,NV=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  padding: 0 8px;
  background: ${({theme:t})=>t.colors.primaryLight};
  color: ${({theme:t})=>t.colors.primary};
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
`,DV=M.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 13px;
`,OV=M.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: ${({theme:t})=>t.spacing.sm};
`,VV=M.button`
  width: 32px;
  height: 32px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({$color:t})=>t};
  border: 3px solid ${({$isSelected:t})=>t?"white":"transparent"};
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  box-shadow: ${({$isSelected:t})=>t?"0 0 0 2px rgba(34, 197, 94, 0.5)":"none"};
  
  &:hover {
    transform: scale(1.1);
  }
`,$V=["#ef4444","#f97316","#f59e0b","#22c55e","#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6","#ec4899","#64748b","#1e293b"],LV=()=>{const{teams:t,addTeam:e,updateTeam:n,deleteTeam:r}=Yi(),{isAuthenticated:i}=yo(),[s,o]=U.useState(!1),[l,c]=U.useState(""),[u,f]=U.useState("#3b82f6"),[m,g]=U.useState(null),[w,T]=U.useState(""),[k,b]=U.useState(""),I=async()=>{if(!l.trim()){alert("Введіть назву команди");return}await e({name:l.trim(),color:u}),c(""),f("#3b82f6"),o(!1)},v=($,F,E)=>{g($),T(F),b(E)},S=async $=>{if(!w.trim()){alert("Введіть назву команди");return}await n($,{name:w.trim(),color:k}),g(null),T(""),b("")},D=async $=>{window.confirm("Видалити цю команду?")&&await r($)};return d.jsxs(Bi,{children:[d.jsxs(_o,{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[d.jsx(vo,{style:{margin:0},children:"Команди"}),d.jsx(NV,{children:t.length})]}),i&&d.jsx(fe,{onClick:()=>o(!s),children:s?"Скасувати":"+ Додати команду"})]}),s&&d.jsxs(RV,{children:[d.jsx(Dr,{children:"🏆 Нова команда"}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"Назва команди"}),d.jsx(no,{type:"text",value:l,onChange:$=>c($.target.value),placeholder:"Введіть назву команди...",autoFocus:!0})]}),d.jsxs(jt,{children:[d.jsx(Mt,{children:"Колір команди"}),d.jsxs(kV,{children:[d.jsx(f0,{type:"color",value:u,onChange:$=>f($.target.value)}),d.jsx(PV,{$color:u,children:l||"Нова команда"})]}),d.jsx(OV,{children:$V.map($=>d.jsx(VV,{$color:$,$isSelected:u===$,onClick:()=>f($),type:"button"},$))})]}),d.jsxs(Dn,{children:[d.jsx(fe,{onClick:I,children:"Створити команду"}),d.jsx(fe,{$variant:"ghost",onClick:()=>o(!1),children:"Скасувати"})]})]}),d.jsx(bt,{children:t.length===0?d.jsxs(Os,{children:[d.jsx("p",{children:"Ще немає команд"}),d.jsx("p",{children:"Створіть команди для проведення матчів"})]}):d.jsx(gh,{children:d.jsxs(yh,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ye,{style:{width:"50px"},children:"#"}),d.jsx(ye,{children:"Команда"}),i&&d.jsx(ye,{style:{width:"150px",textAlign:"right"},children:"Дії"})]})}),d.jsx("tbody",{children:t.map(($,F)=>d.jsxs(vh,{children:[d.jsx(ve,{children:d.jsx(DV,{children:F+1})}),d.jsx(ve,{children:m===$.id?d.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[d.jsx(no,{type:"text",value:w,onChange:E=>T(E.target.value),style:{maxWidth:"200px"}}),d.jsx(f0,{type:"color",value:k,onChange:E=>b(E.target.value),style:{width:"48px",height:"40px"}})]}):d.jsx(bV,{$color:$.color,children:$.name})}),i&&d.jsx(ve,{style:{textAlign:"right"},children:d.jsx(Dn,{style:{justifyContent:"flex-end"},children:m===$.id?d.jsxs(d.Fragment,{children:[d.jsx(fe,{$size:"sm",onClick:()=>S($.id),children:"✓ Зберегти"}),d.jsx(fe,{$variant:"ghost",$size:"sm",onClick:()=>g(null),children:"✕"})]}):d.jsxs(d.Fragment,{children:[d.jsx(fe,{$variant:"secondary",$size:"sm",onClick:()=>v($.id,$.name,$.color),children:"✎"}),d.jsx(fe,{$variant:"danger",$size:"sm",onClick:()=>D($.id),children:"✕"})]})})})]},$.id))})]})})})]})},MV=Ot`
  0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
`,jV=M.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`,is=M.span`
  font-size: ${({$size:t})=>t==="sm"?"14px":"18px"};
  font-weight: 700;
  font-family: ${({theme:t})=>t.typography.heading};
  
  color: ${({$variant:t,theme:e})=>{switch(t){case"goals":return e.colors.primary;case"matches":return e.colors.info;case"wins":return e.colors.success;case"losses":return e.colors.error;default:return e.colors.text.primary}}};

  @media (max-width: 480px) {
    font-size: ${({$size:t})=>t==="sm"?"12px":"16px"};
  }
`,FV=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-weight: 700;
  font-size: 13px;
  
  ${({$rank:t,theme:e})=>t===1?`
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #78350f;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.4);
    `:t===2?`
      background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%);
      color: #1f2937;
    `:t===3?`
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      color: white;
    `:`
      background: ${e.colors.backgroundSecondary};
      color: ${e.colors.text.secondary};
    `}
`,UV=M.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.md};
`,zV=M.div`
  width: 40px;
  height: 40px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  background: ${({theme:t})=>t.colors.gradients.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  flex-shrink: 0;
  
  ${({$rank:t})=>t===1&&vn`
    animation: ${MV} 2s ease-in-out infinite;
  `}
`,BV=M.span`
  font-weight: 600;
  color: ${({theme:t})=>t.colors.text.primary};
`,HV=M.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${({theme:t})=>t.spacing.md};
  margin-bottom: ${({theme:t})=>t.spacing.xl};
`,qo=M.div`
  background: ${({theme:t,$variant:e})=>e==="primary"?t.colors.gradients.primary:t.colors.surface};
  border: 1px solid ${({theme:t,$variant:e})=>e==="primary"?"transparent":t.colors.border};
  border-radius: ${({theme:t})=>t.borderRadius.lg};
  padding: ${({theme:t})=>t.spacing.lg};
  text-align: center;
  
  ${({$variant:t})=>t==="primary"&&`
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.3);
  `}
  
  .stat-icon {
    font-size: 24px;
    margin-bottom: ${({theme:t})=>t.spacing.xs};
  }
  
  .stat-value {
    font-size: 28px;
    font-weight: 800;
    font-family: ${({theme:t})=>t.typography.heading};
    color: ${({$variant:t,theme:e})=>t==="primary"?"white":e.colors.text.primary};
    line-height: 1;
  }
  
  .stat-label {
    font-size: 11px;
    color: ${({$variant:t,theme:e})=>t==="primary"?"rgba(255,255,255,0.9)":e.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: ${({theme:t})=>t.spacing.xs};
  }
`,WV=M.span`
  color: ${({theme:t})=>t.colors.text.disabled};
  font-size: 14px;
`,GV=M.div`
  display: flex;
  gap: 4px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  padding: 4px;
  border-radius: ${({theme:t})=>t.borderRadius.md};
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,Dd=M.button`
  padding: 10px 20px;
  border: none;
  border-radius: ${({theme:t})=>t.borderRadius.sm};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({theme:t})=>t.transitions.fast};
  font-family: ${({theme:t})=>t.typography.heading};
  
  background: ${({$active:t,theme:e})=>t?e.colors.primary:"transparent"};
  color: ${({$active:t,theme:e})=>t?"white":e.colors.text.secondary};
  
  &:hover {
    background: ${({$active:t,theme:e})=>t?e.colors.primary:e.colors.surfaceHover};
  }
`,qV=M.div`
  width: 100%;
  height: 6px;
  background: ${({theme:t})=>t.colors.backgroundSecondary};
  border-radius: 3px;
  overflow: hidden;
  margin-top: 4px;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({$value:t})=>Math.min(t,100)}%;
    background: ${({$color:t})=>t};
    border-radius: 3px;
    transition: width 0.5s ease;
  }
`,KV=M.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
`,Od=M.span`
  color: ${({$type:t,theme:e})=>{switch(t){case"win":return e.colors.success;case"loss":return e.colors.error;default:return e.colors.text.secondary}}};
`,Jl=M.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 700;
  font-family: ${({theme:t})=>t.typography.heading};
  
  background: ${({$value:t})=>t>=1?"rgba(34, 197, 94, 0.2)":t>=.5?"rgba(59, 130, 246, 0.2)":"rgba(100, 116, 139, 0.2)"};
  color: ${({$value:t})=>t>=1?"#22c55e":t>=.5?"#3b82f6":"#94a3b8"};
`,QV=()=>{const{getPlayerStats:t,teams:e}=Yi(),n=t(),[r,i]=U.useState("goals"),s=T=>{var k;return((k=e.find(b=>b.id===T))==null?void 0:k.name)||"?"},o=T=>{var k;return((k=e.find(b=>b.id===T))==null?void 0:k.color)||"#64748b"},l=n.filter(T=>T.totalMatches>0||T.totalGoals>0),c=T=>T.split(" ").map(k=>k[0]).join("").slice(0,2),u=l.reduce((T,k)=>T+k.totalGoals,0),f=l.reduce((T,k)=>T+k.totalMatches,0),m=l.length,g=l.length>0?Math.round(l.reduce((T,k)=>T+k.winRate,0)/l.length):0,w=l.reduce((T,k)=>T+k.cleanSheets,0);return d.jsxs(Bi,{children:[d.jsx(_o,{children:d.jsx(vo,{style:{margin:0},children:"Статистика гравців"})}),l.length>0&&d.jsxs(HV,{children:[d.jsxs(qo,{$variant:"primary",children:[d.jsx("div",{className:"stat-icon",children:"⚽"}),d.jsx("div",{className:"stat-value",children:u}),d.jsx("div",{className:"stat-label",children:"Голів"})]}),d.jsxs(qo,{children:[d.jsx("div",{className:"stat-icon",children:"🏆"}),d.jsx("div",{className:"stat-value",children:f}),d.jsx("div",{className:"stat-label",children:"Ігор"})]}),d.jsxs(qo,{children:[d.jsx("div",{className:"stat-icon",children:"👥"}),d.jsx("div",{className:"stat-value",children:m}),d.jsx("div",{className:"stat-label",children:"Гравців"})]}),d.jsxs(qo,{children:[d.jsx("div",{className:"stat-icon",children:"📈"}),d.jsxs("div",{className:"stat-value",children:[g,"%"]}),d.jsx("div",{className:"stat-label",children:"Сер. вінрейт"})]}),d.jsxs(qo,{children:[d.jsx("div",{className:"stat-icon",children:"🧤"}),d.jsx("div",{className:"stat-value",children:w}),d.jsx("div",{className:"stat-label",children:"Сухих матчів"})]})]}),d.jsxs(bt,{children:[d.jsxs(GV,{children:[d.jsx(Dd,{$active:r==="goals",onClick:()=>i("goals"),children:"⚽ Голи"}),d.jsx(Dd,{$active:r==="results",onClick:()=>i("results"),children:"🏆 Результати"}),d.jsx(Dd,{$active:r==="coefficients",onClick:()=>i("coefficients"),children:"📊 Коефіцієнти"})]}),l.length===0?d.jsxs(Os,{children:[d.jsx("p",{children:"Ще немає статистики"}),d.jsx("p",{children:"Додайте матчі, щоб побачити статистику гравців"})]}):d.jsx(gh,{children:d.jsxs(yh,{children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx(ye,{style:{width:"50px"},children:"#"}),d.jsx(ye,{children:"Гравець"}),r==="goals"&&d.jsxs(d.Fragment,{children:[d.jsx(ye,{style:{textAlign:"center"},children:"⚽ Голи"}),d.jsx(ye,{style:{textAlign:"center"},children:"Ігор"}),d.jsx(ye,{style:{textAlign:"center"},children:"Голів/гра"}),d.jsx(ye,{children:"По командах"})]}),r==="results"&&d.jsxs(d.Fragment,{children:[d.jsx(ye,{style:{textAlign:"center"},children:"В/Н/П"}),d.jsx(ye,{style:{textAlign:"center"},children:"Вінрейт"}),d.jsx(ye,{style:{textAlign:"center"},children:"Очки"}),d.jsx(ye,{style:{textAlign:"center"},children:"Сухі"})]}),r==="coefficients"&&d.jsxs(d.Fragment,{children:[d.jsx(ye,{style:{textAlign:"center"},children:"Г/гра"}),d.jsx(ye,{style:{textAlign:"center"},children:"Г/день"}),d.jsx(ye,{style:{textAlign:"center"},children:"Оч/гра"}),d.jsx(ye,{style:{textAlign:"center"},children:"+/- голи"})]})]})}),d.jsx("tbody",{children:l.map((T,k)=>d.jsxs(vh,{children:[d.jsx(ve,{children:d.jsx(FV,{$rank:k+1,children:k+1})}),d.jsx(ve,{children:d.jsxs(UV,{children:[d.jsx(zV,{$rank:k+1,children:c(T.playerName)}),d.jsxs("div",{children:[d.jsx(BV,{children:T.playerName}),d.jsxs("div",{style:{fontSize:"12px",color:"#64748b"},children:[T.gameDaysPlayed," днів"]})]})]})}),r==="goals"&&d.jsxs(d.Fragment,{children:[d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(is,{$variant:"goals",children:T.totalGoals})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(is,{$variant:"matches",children:T.totalMatches})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(Jl,{$value:T.goalsPerMatch,children:T.goalsPerMatch.toFixed(2)})}),d.jsx(ve,{children:d.jsx(jV,{children:Object.entries(T.goalsByTeam).length>0?Object.entries(T.goalsByTeam).map(([b,I])=>d.jsxs(VT,{$color:o(b),children:[s(b),": ",I]},b)):d.jsx(WV,{children:"—"})})})]}),r==="results"&&d.jsxs(d.Fragment,{children:[d.jsx(ve,{style:{textAlign:"center"},children:d.jsxs(KV,{children:[d.jsxs(Od,{$type:"win",children:[T.wins,"В"]}),d.jsxs(Od,{$type:"draw",children:[T.draws,"Н"]}),d.jsxs(Od,{$type:"loss",children:[T.losses,"П"]})]})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsxs("div",{children:[d.jsxs(is,{$variant:T.winRate>=50?"wins":"default",$size:"sm",children:[T.winRate,"%"]}),d.jsx(qV,{$value:T.winRate,$color:T.winRate>=50?"#22c55e":"#64748b"})]})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(is,{$variant:"goals",children:T.points})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(is,{children:T.cleanSheets})})]}),r==="coefficients"&&d.jsxs(d.Fragment,{children:[d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(Jl,{$value:T.goalsPerMatch,children:T.goalsPerMatch.toFixed(2)})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(Jl,{$value:T.goalsPerGameDay,children:T.goalsPerGameDay.toFixed(2)})}),d.jsx(ve,{style:{textAlign:"center"},children:d.jsx(Jl,{$value:T.pointsPerMatch,children:T.pointsPerMatch.toFixed(2)})}),d.jsxs(ve,{style:{textAlign:"center"},children:[d.jsxs(is,{$variant:T.goalDifference>0?"wins":T.goalDifference<0?"losses":"default",children:[T.goalDifference>0?"+":"",T.goalDifference]}),d.jsxs("div",{style:{fontSize:"11px",color:"#64748b"},children:[T.teamGoalsFor,":",T.teamGoalsAgainst]})]})]})]},T.playerId))})]})})]})]})},YV=Ot`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,LT=Ot`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(0.98); }
`,XV=M.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({theme:t})=>t.colors.background};
  color: ${({theme:t})=>t.colors.text.secondary};
`,JV=M.div`
  width: 48px;
  height: 48px;
  border: 3px solid ${({theme:t})=>t.colors.border};
  border-top-color: ${({theme:t})=>t.colors.primary};
  border-radius: 50%;
  animation: ${YV} 0.8s linear infinite;
  margin-bottom: ${({theme:t})=>t.spacing.lg};
`,ZV=M.div`
  font-size: 16px;
  font-weight: 500;
  animation: ${LT} 1.5s ease-in-out infinite;
`,e$=M.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 18px;
  border-radius: ${({theme:t})=>t.borderRadius.full};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  transition: all ${({theme:t})=>t.transitions.normal};
  cursor: default;
  
  background: ${({$connected:t})=>t?"rgba(34, 197, 94, 0.15)":"rgba(245, 158, 11, 0.15)"};
  color: ${({$connected:t})=>t?"#22c55e":"#f59e0b"};
  border: 1px solid ${({$connected:t})=>t?"rgba(34, 197, 94, 0.3)":"rgba(245, 158, 11, 0.3)"};
  backdrop-filter: blur(8px);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({$connected:t})=>t?"0 4px 20px rgba(34, 197, 94, 0.2)":"0 4px 20px rgba(245, 158, 11, 0.2)"};
  }
`,t$=M.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({$connected:t})=>t?"#22c55e":"#f59e0b"};
  box-shadow: ${({$connected:t})=>t?"0 0 8px #22c55e":"0 0 8px #f59e0b"};
  animation: ${LT} 2s ease-in-out infinite;
`,n$=M.span`
  font-size: 14px;
`,r$=()=>{const{isLoading:t,isFirebaseConnected:e}=Yi();return t?d.jsxs(XV,{children:[d.jsx(JV,{}),d.jsx(ZV,{children:"Завантаження..."})]}):d.jsxs(d.Fragment,{children:[d.jsxs(VC,{basename:"/futsal-novy-svit/",children:[d.jsx(SO,{}),d.jsxs(RC,{children:[d.jsx(vr,{path:"/",element:d.jsx(HO,{})}),d.jsx(vr,{path:"/game-day/new",element:d.jsx(u0,{})}),d.jsx(vr,{path:"/game-day/:id",element:d.jsx(vV,{})}),d.jsx(vr,{path:"/game-day/:id/edit",element:d.jsx(u0,{})}),d.jsx(vr,{path:"/players",element:d.jsx(AV,{})}),d.jsx(vr,{path:"/teams",element:d.jsx(LV,{})}),d.jsx(vr,{path:"/stats",element:d.jsx(QV,{})})]})]}),d.jsxs(e$,{$connected:e,children:[d.jsx(t$,{$connected:e}),d.jsx(n$,{children:e?"☁️":"💾"}),e?"Firebase":"Локально"]})]})};function i$(){return d.jsxs($R,{theme:rO,children:[d.jsx(nO,{}),d.jsx(eO,{children:d.jsx(ZD,{children:d.jsx(r$,{})})})]})}Vd.createRoot(document.getElementById("root")).render(d.jsx(Qt.StrictMode,{children:d.jsx(i$,{})}));

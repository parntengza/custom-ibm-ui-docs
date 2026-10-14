(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`docs-page-show`,t=`docs-page-hide`;function n(t){document.addEventListener(e,t)}var r=`ui-docs-code-tab`,i=()=>[...document.querySelectorAll(`ui-tabs.doc-code-tabs`)],a=e=>[...e.querySelectorAll(`:scope > ui-tab`)],o=e=>e.textContent?.trim()??``;function s(){try{return localStorage.getItem(r)}catch{return null}}function c(e){try{localStorage.setItem(r,e)}catch{}}function l(e,t){for(let n of i()){if(n===t)continue;let r=a(n).find(t=>o(t)===e)?.getAttribute(`panel`);r&&n.value!==r&&(n.value=r)}}n(()=>{let e=s();e&&l(e)}),document.addEventListener(`ui-tab-change`,e=>{let t=e.target;if(!t.matches?.(`ui-tabs.doc-code-tabs`))return;let n=a(t).find(t=>t.getAttribute(`panel`)===e.detail.name);if(!n)return;let r=o(n);c(r);let i=t.getBoundingClientRect().top;l(r,t),requestAnimationFrame(()=>window.scrollBy(0,t.getBoundingClientRect().top-i))});var u=[],d=[],ee=73,te;function ne(){let e=0;d.forEach((t,n)=>{t&&t.getBoundingClientRect().top<=ee&&(e=n)});let t=u[e];t!==te&&(te?.removeAttribute(`aria-current`),t?.setAttribute(`aria-current`,`location`),te=t)}function re(){u=[...document.querySelectorAll(`.doc-toc a[href^="#"]`)],d=u.map(e=>document.getElementById(decodeURIComponent(e.hash.slice(1)))),te=void 0,ne()}n(re),document.addEventListener(`scroll`,ne,{passive:!0}),globalThis.addEventListener(`load`,ne);var ie=`modulepreload`,ae=function(e){return`/kanok-ui-docs/`+e},oe={},se=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ae(t,n),t=s(t),t in oe)return;oe[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ie,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ce=20,le=40,ue=140,f=document.querySelector(`#doc-search`),de=document.querySelector(`#doc-search-open`),p=f?.querySelector(`ui-search`),fe=f?.querySelector(`.doc-search-status`),m=f?.querySelector(`.doc-search-results`),pe;async function me(){let e=document.documentElement.lang===`th`?`th`:`en`;pe??=(e===`th`?await se(()=>import(`./th-CcnHoIRq.js`),[]):await se(()=>import(`./en-4pG7fjUw.js`),[])).default}function he([e,t,,n],r){let i=0;for(let a of r)if(!t&&e.toLowerCase().includes(a))i+=4;else if(t.toLowerCase().includes(a))i+=3;else if(e.toLowerCase().includes(a))i+=2;else if(n.toLowerCase().includes(a))i+=1;else return 0;return i}function ge(e,t){let n=document.createElement(`span`);n.className=`doc-search-text`;let r=e.toLowerCase().indexOf(t);if(r<0)return n.textContent=e.slice(0,ue),n;let i=Math.max(0,r-le),a=document.createElement(`mark`);return a.textContent=e.slice(r,r+t.length),n.append(`${i>0?`…`:``}${e.slice(i,r)}`,a,e.slice(r+t.length,i+ue)),n}function _e([e,t,n,r],i){let a=document.createElement(`a`);a.href=n;let o=document.createElement(`span`);o.className=`doc-search-title`,o.textContent=t?`${e} › ${t}`:e,a.append(o,ge(r,i));let s=document.createElement(`li`);return s.append(a),s}function ve(){if(!p||!fe||!m||!f)return;let e=p.value.trim().toLowerCase().split(/\s+/).filter(Boolean);if(e.length===0||!pe){m.replaceChildren(),fe.textContent=``;return}let t=pe.map(t=>({row:t,score:he(t,e)})).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).slice(0,ce);m.replaceChildren(...t.map(t=>_e(t.row,e[0]))),fe.textContent=((t.length>0?f.dataset.count:f.dataset.empty)??``).replace(`{n}`,String(t.length)).replace(`{q}`,p.value.trim())}function ye(){f&&(f.open=!0,me().then(ve))}function be(e){let t=e.composedPath()[0];return t instanceof HTMLElement&&(t.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(t.tagName))}function xe(e){if(!m||e.key!==`ArrowDown`&&e.key!==`ArrowUp`)return;let t=[...m.querySelectorAll(`a`)];if(t.length===0)return;let n=t.indexOf(document.activeElement)+(e.key===`ArrowDown`?1:-1);e.preventDefault(),n<0?p?.focus():t[Math.min(n,t.length-1)].focus()}f&&p&&m&&(de?.addEventListener(`click`,ye),document.addEventListener(`keydown`,e=>{(e.key===`k`&&(e.metaKey||e.ctrlKey)||e.key===`/`&&!be(e))&&!f.open&&(e.preventDefault(),ye())}),p.addEventListener(`input`,ve),f.addEventListener(`keydown`,xe),m.addEventListener(`click`,e=>{e.target.closest(`a`)&&(f.open=!1)})),n(()=>{for(let e of document.querySelectorAll(`.doc script[type="text/x-demo"]`)){let t=document.createElement(`script`);t.type=`module`,t.textContent=e.textContent,e.replaceWith(t)}});var Se=new URL(document.querySelector(`ui-header-name`)?.getAttribute(`href`)??`/`,location.href).pathname,Ce=new Map,we=location.pathname,Te=0,Ee;history.scrollRestoration=`manual`;var De=e=>e.origin===location.origin&&e.pathname.startsWith(Se);function Oe(e){let t=Ce.get(e.pathname);return t||(t=fetch(e.pathname,{headers:{Accept:`text/html`}}).then(e=>e.ok?e.text():Promise.reject(Error(String(e.status)))).then(e=>new DOMParser().parseFromString(e,`text/html`)),t.catch(()=>Ce.delete(e.pathname)),Ce.set(e.pathname,t)),t}var ke=(e,t)=>[...e.querySelectorAll(`script[type="module"][src]`)].map(e=>new URL(e.getAttribute(`src`)??``,t).href),Ae=new Set;function je(e,t){for(let n of ke(e,t))Ae.has(n)||(Ae.add(n),document.head.append(Object.assign(document.createElement(`link`),{rel:`modulepreload`,href:n})))}async function Me(e,t){for(let n of e.head.querySelectorAll(`link[rel="stylesheet"]`)){let e=new URL(n.getAttribute(`href`)??``,t).href;[...document.styleSheets].some(t=>t.href===e)||document.head.append(Object.assign(n.cloneNode(),{href:e}))}await Promise.all(ke(e,t).map(e=>se(()=>import(e),[])))}function Ne(e){for(let t of document.querySelectorAll(`ui-side-nav-menu-item`))t.current=new URL(t.getAttribute(`href`)??``,location.href).pathname===e,t.current&&t.closest(`ui-side-nav-menu`)?.setAttribute(`expanded`,``);let t=document.querySelector(`ui-side-nav`);t&&!matchMedia(`(min-width: 66rem)`).matches&&(t.expanded=!1)}function Pe(e,t){document.title=e.title;let n=document.querySelector(`ui-content`),r=e.querySelector(`ui-content`);n&&r&&n.replaceChildren(...[...r.childNodes].map(e=>document.importNode(e,!0)));let i=e.querySelector(`ui-header-panel ui-link[hreflang]`)?.getAttribute(`href`);i&&document.querySelector(`ui-header-panel ui-link[hreflang]`)?.setAttribute(`href`,i);for(let t of document.head.querySelectorAll(`link[rel="alternate"]`)){let n=e.head.querySelector(`link[rel="alternate"][hreflang="${t.getAttribute(`hreflang`)}"]`);n&&t.setAttribute(`href`,n.getAttribute(`href`)??``)}we=t}async function Fe(){let e=[...document.querySelectorAll(`ui-content *`)].map(e=>e.updateComplete).filter(e=>e!==void 0);await Promise.all(e)}function Ie(e,t,n){let r=e.hash?document.getElementById(decodeURIComponent(e.hash.slice(1))):null;if(r?r.scrollIntoView():scrollTo(0,t??0),!n)return;let i=document.querySelector(`.doc > h1`);i&&(i.tabIndex=-1,i.focus({preventScroll:!0}))}async function Le(n,r,i){let a=++Te;Ne(n.pathname);try{let o=await Oe(n);if(a!==Te)return;let s=Me(o,n);if(r&&(clearTimeout(Ee),history.replaceState({...history.state,scrollY:window.scrollY},``),history.pushState({},``,n.href)),document.dispatchEvent(new Event(t)),Pe(o,n.pathname),Ie(n,i,r),await s,a!==Te)return;document.dispatchEvent(new Event(e)),await Fe(),Ie(n,i,!1)}catch{location.assign(n.href)}}function Re(e){let t=new URL(e,location.href);if(!(!De(t)||t.pathname===we&&t.hash))return t}var ze=e=>e.button===0&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey;document.addEventListener(`ui-navigate`,e=>{if(e.defaultPrevented)return;let t=Re(e.detail.href);t&&(e.preventDefault(),Le(t,!0))}),document.addEventListener(`click`,e=>{if(e.defaultPrevented||!ze(e))return;let t=e.composedPath().find(e=>e instanceof HTMLAnchorElement);if(!t||t.target&&t.target!==`_self`||t.hasAttribute(`download`))return;let n=Re(t.href);n&&(e.preventDefault(),Le(n,!0))});var Be=e=>{let t=e.composedPath().find(e=>e instanceof HTMLAnchorElement),n=t&&Re(t.href);n&&n.pathname!==we&&Oe(n).then(e=>je(e,n),()=>void 0)};document.addEventListener(`pointerover`,Be,{passive:!0}),document.addEventListener(`focusin`,Be),document.addEventListener(`scroll`,()=>{clearTimeout(Ee),Ee=setTimeout(()=>history.replaceState({...history.state,scrollY:window.scrollY},``),150)},{passive:!0}),globalThis.addEventListener(`popstate`,e=>{let t=new URL(location.href),n=e.state?.scrollY;t.pathname===we?Ie(t,n,!1):Le(t,!1,n)});function Ve(){document.dispatchEvent(new Event(e))}document.readyState===`complete`?Ve():document.addEventListener(`DOMContentLoaded`,Ve,{once:!0});var He=globalThis,Ue=He.ShadowRoot&&(He.ShadyCSS===void 0||He.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,We=Symbol(),Ge=new WeakMap,Ke=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==We)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ue&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ge.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ge.set(t,e))}return e}toString(){return this.cssText}},qe=e=>new Ke(typeof e==`string`?e:e+``,void 0,We),h=(e,...t)=>new Ke(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,We),Je=(e,t)=>{if(Ue)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=He.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},Ye=Ue?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return qe(t)})(e):e,{is:Xe,defineProperty:Ze,getOwnPropertyDescriptor:Qe,getOwnPropertyNames:$e,getOwnPropertySymbols:et,getPrototypeOf:tt}=Object,nt=globalThis,rt=nt.trustedTypes,it=rt?rt.emptyScript:``,at=nt.reactiveElementPolyfillSupport,ot=(e,t)=>e,st={toAttribute(e,t){switch(t){case Boolean:e=e?it:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ct=(e,t)=>!Xe(e,t),lt={attribute:!0,type:String,converter:st,reflect:!1,useDefault:!1,hasChanged:ct};Symbol.metadata??=Symbol(`metadata`),nt.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=lt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Qe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??lt}static _$Ei(){if(this.hasOwnProperty(ot(`elementProperties`)))return;let e=tt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ot(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot(`properties`))){let e=this.properties,t=[...$e(e),...et(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(Ye(e))}else e!==void 0&&t.push(Ye(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Je(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?st:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?st:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ct)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[ot(`elementProperties`)]=new Map,g[ot(`finalized`)]=new Map,at?.({ReactiveElement:g}),(nt.reactiveElementVersions??=[]).push(`2.1.2`);var ut=globalThis,dt=e=>e,ft=ut.trustedTypes,pt=ft?ft.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,mt=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,ht=`?`+_,gt=`<${ht}>`,v=document,_t=()=>v.createComment(``),vt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,yt=Array.isArray,bt=e=>yt(e)||typeof e?.[Symbol.iterator]==`function`,xt=`[ 	
\f\r]`,St=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ct=/-->/g,wt=/>/g,y=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Tt=/'/g,Et=/"/g,Dt=/^(?:script|style|textarea|title)$/i,Ot=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),b=Ot(1),kt=Ot(2),At=Ot(3),x=Symbol.for(`lit-noChange`),S=Symbol.for(`lit-nothing`),jt=new WeakMap,C=v.createTreeWalker(v,129);function Mt(e,t){if(!yt(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return pt===void 0?t:pt.createHTML(t)}var Nt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=St;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===St?c[1]===`!--`?o=Ct:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=y):(Dt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=y):o=wt:o===y?c[0]===`>`?(o=i??St,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?y:c[3]===`"`?Et:Tt):o===Et||o===Tt?o=y:o===Ct||o===wt?o=St:(o=y,i=void 0);let d=o===y&&e[t+1].startsWith(`/>`)?` `:``;a+=o===St?n+gt:l>=0?(r.push(s),n.slice(0,l)+mt+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Mt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Pt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Nt(t,n);if(this.el=e.createElement(l,r),C.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=C.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(mt)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Rt:r[1]===`?`?zt:r[1]===`@`?Bt:Lt}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Dt.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=ft?ft.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],_t()),C.nextNode(),c.push({type:2,index:++a});i.append(e[t],_t())}}}else if(i.nodeType===8){if(i.data===ht)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function w(e,t,n=e,r){if(t===x)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=vt(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=w(e,i._$AS(e,t.values),i,r)),t}var Ft=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);C.currentNode=r;let i=C.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new It(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Vt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=C.nextNode(),a++)}return C.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},It=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),vt(e)?e===S||e==null||e===``?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==x&&this._(e):e._$litType$===void 0?e.nodeType===void 0?bt(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&vt(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Pt.createElement(Mt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ft(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=jt.get(e.strings);return t===void 0&&jt.set(e.strings,t=new Pt(e)),t}k(t){yt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(_t()),this.O(_t()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=dt(e).nextSibling;dt(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Lt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=w(this,e,t,0),a=!vt(e)||e!==this._$AH&&e!==x,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=w(this,r[n+o],t,o),s===x&&(s=this._$AH[o]),a||=!vt(s)||s!==this._$AH[o],s===S?e=S:e!==S&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Rt=class extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},zt=class extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Bt=class extends Lt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??S)===x)return;let n=this._$AH,r=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Vt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}},Ht={M:mt,P:_,A:ht,C:1,L:Nt,R:Ft,D:bt,V:w,I:It,H:Lt,N:zt,U:Bt,B:Rt,F:Vt},Ut=ut.litHtmlPolyfillSupport;Ut?.(Pt,It),(ut.litHtmlVersions??=[]).push(`3.3.3`);var Wt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new It(t.insertBefore(_t(),e),e,void 0,n??{})}return i._$AI(e),i},Gt=globalThis,T=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};T._$litElement$=!0,T.finalized=!0,Gt.litElementHydrateSupport?.({LitElement:T});var Kt=Gt.litElementPolyfillSupport;Kt?.({LitElement:T}),(Gt.litElementVersions??=[]).push(`4.2.2`);var E=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},qt={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:ct},Jt=(e=qt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function D(e){return(t,n)=>typeof n==`object`?Jt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function O(e){return D({...e,state:!0,attribute:!1})}var Yt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function k(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Yt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Yt(n,r,{get(){return a(this)}})}}function Xt(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return Yt(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter(e=>e.matches(i))}})}}var Zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qt=e=>(...t)=>({_$litDirective$:e,values:t}),$t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},en=Qt(class extends $t{constructor(e){if(super(e),e.type!==Zt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return x}}),A=e=>e??S,tn=`important`,nn=` !`+tn,rn=Qt(class extends $t{constructor(e){if(super(e),e.type!==Zt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(nn);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?tn:``):n[e]=r}}return x}});function an(e){return e.showError?{kind:`error`,text:e.errorText}:e.showWarn&&(e.warnText||e.hasWarn)?{kind:`warn`,text:e.warnText}:e.helperText||e.hasHelper?{kind:`helper`,text:e.helperText}:null}function on(e,t){if(t===void 0)return{over:!1,near:!1};let n=e>t;return{over:n,near:!n&&t-e<=Math.ceil(t*.1)}}var sn=new Map;function cn(e,t=`en`){if(typeof Intl>`u`||!(`Segmenter`in Intl))return e.match(/\p{L}+/gu)?.length??0;let n=sn.get(t);n||(n=new Intl.Segmenter(t,{granularity:`word`}),sn.set(t,n));let r=0;for(let{segment:t,isWordLike:i}of n.segment(e))i&&/\p{L}/u.test(t)&&r++;return r}function ln(e,t=`character`,n=`en`){return t===`word`?cn(e,n):e.length}function un(e){switch(typeof e){case`undefined`:return``;case`string`:return e;case`object`:return e===null?``:Array.isArray(e)?e.map(un).join(`,`):e instanceof Date?e.toString():JSON.stringify(e);case`number`:case`boolean`:case`bigint`:case`symbol`:case`function`:return e.toString()}}var dn=0,j=e=>`${e}-${dn++}`,fn=e=>typeof e.closest==`function`&&e.closest(`ui-form-group[disabled]`)!==null;function pn(e,t,n){return e?t||n||` `:n}var mn=(e,t)=>e.validity.valueMissing?t:e.validationMessage,hn=(e,t,n)=>t&&!e?t:n;function gn(e,t){return t?(e.setFormValue(null),e.setValidity({}),!0):!1}var _n=e=>e.querySelector(`option[selected]`)?.value;function vn(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e instanceof HTMLElement?e:null}var yn={fromAttribute:e=>e!==`false`,toAttribute:e=>e?``:`false`},bn=e=>e.stopPropagation(),xn=new WeakMap;function Sn(e,t,n){let r=xn.get(e)??new Map;xn.set(e,r);let i=e.getAttribute(t);(i===null||i===r.get(t))&&(n===null?(e.removeAttribute(t),r.delete(t)):(e.setAttribute(t,n),r.set(t,n)))}var Cn=(e,t)=>t.composedPath()[0]===e,wn=new Set([`checkbox`,`radio`,`range`,`button`,`submit`,`reset`,`file`,`color`,`image`]);function Tn(e,t){if(t.key!==`Enter`||t.isComposing||t.shiftKey||t.ctrlKey||t.metaKey||t.altKey)return;let n=t.composedPath()[0];n instanceof HTMLInputElement&&!wn.has(n.type)&&setTimeout(()=>{t.defaultPrevented||e.form?.requestSubmit()})}var En=new Set;function Dn(e,t,n){return t===`title`&&(n===null||(e.heading=n,e.removeAttribute(`title`),En.has(e.localName)||(En.add(e.localName),console.warn(`<${e.localName}>: the "title" attribute is deprecated (browsers show it as a tooltip); use "heading".`))),!0)}var On=h`
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
        border: 0;
    }
`,kn=h`
    ${On}

    .label {
        display: inline-block;
        margin-bottom: var(--ui-space-xs);
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
        color: var(--ui-ink-muted);
    }

    .helper,
    .warn,
    .error {
        margin: var(--ui-space-xxs) 0 0;
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
    }

    .helper {
        /* ink-muted, not ink-subtle: helper text must meet 4.5:1 */
        color: var(--ui-ink-muted);
    }

    /* Yellow text fails contrast — warning text stays ink, the icon carries the colour */
    .warn {
        color: var(--ui-ink);
    }

    .error {
        /* Carbon text-error: same as support-error in light themes, lighter in g90/g100 for contrast */
        color: var(--ui-error-text, var(--ui-error));
    }

    /* a disabled <fieldset>, or a disabled <ui-form-group> (its fieldset is in its shadow root: the group marks the fields) — Carbon fieldset[disabled] .cds--label */
    :host(:disabled) .label,
    :host(:disabled) .helper,
    :host([data-group-disabled]) .label,
    :host([data-group-disabled]) .helper {
        color: var(--ui-ink-disabled);
    }

    .with-icon {
        display: flex;
        align-items: flex-start;
        gap: var(--ui-space-xxs);
    }

    .status-icon {
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        pointer-events: none;
    }

    .status-icon.status-error {
        fill: var(--ui-error);
    }

    .status-icon .warn-fill {
        fill: var(--ui-warning);
    }

    .status-icon .warn-mark {
        fill: var(--ui-ink);
    }

    @media (forced-colors: active) {
        .status-icon.status-error,
        .status-icon .warn-fill {
            fill: CanvasText;
        }
        .status-icon .warn-mark {
            fill: Canvas;
        }
    }
`,An={error:`invalid-text`,warn:`warn-text`,helper:`helper-text`};function jn(e){let{slots:t}=e;return an({...e,hasWarn:t?.has(An.warn),hasHelper:t?.has(An.helper)})}var Mn=(e,t)=>t?`${e}-message`:void 0,Nn={error:`error-text invalid-text`,warn:`warning-text warn-text`,helper:`helper-text`};function Pn(e,t,n=!1){if(!t)return S;let r=n?Rn(t):S;return b`<p class="${t.kind} ${n?`with-icon`:``}" part=${Nn[t.kind]} id="${e}-message">
        ${r}<span><slot name=${An[t.kind]}>${t.text}</slot></span>
    </p>`}var Fn=e=>b`<slot name="label">${e}</slot>`,In=b`<svg class="status-icon status-error" part="status-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.55 3h1.1v5h-1.1V4ZM8 12.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>`,Ln=b`<svg class="status-icon status-warn" part="status-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path class="warn-fill" d="M8 1.5 15.2 14.5H.8Z" />
    <path class="warn-mark" d="M7.45 6h1.1v4.5h-1.1zM8 13a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>`;function Rn(e){return e?.kind===`error`?In:e?.kind===`warn`?Ln:S}function zn(e,t){let n=typeof e.closest==`function`&&e.closest(`ui-fluid-form`)!==null;return e.toggleAttribute(`data-fluid`,t||n),t||n}function Bn(e,t){let n=t&&t.kind!==`helper`?t.kind:null;(e.dataset.status??null)!==n&&(n?e.dataset.status=n:delete e.dataset.status)}var Vn=(e,t)=>e.dataset[t]!==void 0,Hn=h`
    :host([data-fluid]) {
        display: flow-root; /* the box holds its children's margins (the text area's 32px) */
        position: relative;
        background-color: var(--ui-surface-1);
        outline: 2px solid transparent;
        outline-offset: -2px;
    }

    :host([data-fluid]) .top {
        display: contents;
    }

    :host([data-fluid]) .label {
        position: absolute;
        z-index: 1;
        inset-block-start: 13px;
        inset-inline-start: var(--ui-space-md);
        max-inline-size: calc(100% - 2 * var(--ui-space-md));
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none;
    }

    :host([data-fluid]) .counter {
        position: absolute;
        z-index: 1;
        inset-block-start: 13px;
        inset-inline-end: var(--ui-space-md);
    }

    /* Carbon's fluid fields have no helper line */
    :host([data-fluid]) .helper {
        display: none;
    }

    :host([data-fluid]) :is(.error, .warn) {
        position: relative;
        margin: 1px 0 0; /* the divider's row (Carbon <hr>) */
        padding: var(--ui-space-xs) 40px var(--ui-space-xs) var(--ui-space-md);
    }

    :host([data-fluid]) :is(.error, .warn)::before {
        content: '';
        position: absolute;
        inset-block-start: -1px;
        inset-inline: var(--ui-space-md);
        border-block-start: 1px solid var(--ui-hairline);
    }

    :host([data-fluid]) .status-icon {
        position: absolute;
        inset-block-start: var(--ui-fluid-icon-top, calc(100% + var(--ui-space-xs)));
        inset-inline-end: var(--ui-fluid-icon-end, 0);
    }

    :host([data-fluid][data-status='error']) {
        outline-color: var(--ui-error);
    }

    /* the warning's underline closes the box; drawn by the message (the box's last row), not :host, which a page-wide CSS reset would strip */
    :host([data-fluid][data-status='warn']) .warn {
        border-block-end: 1px solid var(--ui-ink-subtle);
    }

    /* the box carries focus (and status), so the control inside draws no outline or underline of its own */
    :host([data-fluid]:focus-within) {
        outline-color: var(--ui-focus);
    }

    :host([data-fluid]) :is(input, textarea, select, .trigger) {
        outline: none;
        background-color: transparent;
    }

    :host([data-fluid][data-status]) :is(input, textarea, select, .trigger) {
        border-block-end-color: transparent;
    }

    :host([data-fluid][readonly]) {
        background-color: transparent;
    }

    @media (forced-colors: active) {
        :host([data-fluid]:focus-within) {
            outline-color: Highlight;
        }
    }
`,Un={top:`bottom`,bottom:`top`,left:`right`,right:`left`};function Wn(e){let[t,n]=e.split(`-`);return[t,n??`center`]}function Gn(e,t,n,r,i){switch(e){case`top`:return t.top-n.height-r>=8;case`bottom`:return t.top+t.height+n.height+r<=i.height-8;case`left`:return t.left-n.width-r>=8;default:return t.left+t.width+n.width+r<=i.width-8}}function Kn(e,t,n,r){return r===`start`?e:r===`end`?e+t-n:e+t/2-n/2}var qn=(e,t,n)=>Math.min(Math.max(e,8),Math.max(8,n-t-8));function Jn(e,t,n,r,i={}){let a=i.gap??8,o={top:0,left:0,width:t.width,height:t.height},[s,c]=Wn(r);!Gn(s,e,o,a,n)&&Gn(Un[s],e,o,a,n)&&(s=Un[s]);let l=s===`top`||s===`bottom`;l&&c!==`center`&&i.rtl&&(c=c===`start`?`end`:`start`);let u,d;return l?(u=s===`top`?e.top-o.height-a:e.top+e.height+a,d=Kn(e.left,e.width,o.width,c)):(u=Kn(e.top,e.height,o.height,c),d=s===`left`?e.left-o.width-a:e.left+e.width+a),{top:qn(u,o.height,n.height),left:qn(d,o.width,n.width),side:s}}function Yn(e,t,n){let r=n===`top`||n===`bottom`,i=r?e.left+e.width/2-t.left:e.top+e.height/2-t.top,a=r?t.width:t.height;return Math.min(Math.max(i,8),a-8)}function Xn(e,t,n,r=8){let i={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight},a=getComputedStyle(e).direction===`rtl`,{top:o,left:s,side:c}=Jn(e.getBoundingClientRect(),t.getBoundingClientRect(),i,n,{gap:r,rtl:a});return t.style.top=`${o+window.scrollY}px`,t.style.left=`${s+window.scrollX}px`,c}function Zn(e,t,n,r){let i=Xn(e,t,n,r);return t.dataset.side=i,t.style.setProperty(`--_caret-pos`,`${Yn(e.getBoundingClientRect(),t.getBoundingClientRect(),i)}px`),i}var Qn=h`
    .caret {
        position: absolute;
        width: var(--_caret-w, 12px);
        height: var(--_caret-h, 6px);
        background: inherit;
        pointer-events: none;
    }

    .bubble[data-side='top'] .caret {
        top: 100%;
        left: calc(var(--_caret-pos) - var(--_caret-w, 12px) / 2);
        clip-path: polygon(0 0, 100% 0, 50% 100%);
    }

    .bubble[data-side='bottom'] .caret {
        bottom: 100%;
        left: calc(var(--_caret-pos) - var(--_caret-w, 12px) / 2);
        clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }

    .bubble[data-side='left'] .caret,
    .bubble[data-side='right'] .caret {
        top: calc(var(--_caret-pos) - var(--_caret-w, 12px) / 2);
        width: var(--_caret-h, 6px);
        height: var(--_caret-w, 12px);
    }

    .bubble[data-side='left'] .caret {
        left: 100%;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
    }

    .bubble[data-side='right'] .caret {
        right: 100%;
        clip-path: polygon(100% 0, 0 50%, 100% 100%);
    }
`,$n=e=>{class t extends e{get align(){return this.placement}set align(e){this.placement=e}static get observedAttributes(){return[...Reflect.get(e,`observedAttributes`,this),`align`]}attributeChangedCallback(e,t,n){e===`align`?n!==null&&(this.align=n):super.attributeChangedCallback(e,t,n)}}return t},er=`hydrate-internals-`,tr=new WeakMap,nr=new WeakMap,rr=()=>`${innerWidth}x${innerHeight}`,ir=new WeakMap,ar=new Set,or=h`
    :host([hidden]) {
        display: none;
    }
`;function sr(e){let t=ir.get(e);return t===void 0&&(t=e.elementStyles.some(e=>{let t=e instanceof CSSStyleSheet?e:e.styleSheet;return!!t&&[...t.cssRules].some(e=>e instanceof CSSMediaRule)}),ir.set(e,t)),t}var M=class extends T{static finalizeStyles(e){return[...super.finalizeStyles(e),or]}connectedCallback(){super.connectedCallback();let e=this.constructor,t=tr.get(e)??0;tr.set(e,t+1);let n=nr.get(e);t===0&&n!==void 0&&n!==rr()&&sr(e)&&(ar.add(e),setTimeout(()=>ar.delete(e))),ar.has(e)&&this.updateComplete.then(()=>this.restyle())}restyle(){let e=this.renderRoot,t=e.firstElementChild;this.isConnected&&e.adoptedStyleSheets?.length&&t&&(getComputedStyle(t).display,e.adoptedStyleSheets=[...e.adoptedStyleSheets])}disconnectedCallback(){super.disconnectedCallback();let e=this.constructor,t=Math.max(0,(tr.get(e)??1)-1);tr.set(e,t),t===0&&nr.set(e,rr())}createRenderRoot(){let e=this.shadowRoot;return e?this.reuseServerRoot(e):super.createRenderRoot()}reuseServerRoot(e){e.replaceChildren(),Je(e,this.constructor.elementStyles);for(let e of this.getAttributeNames())e.startsWith(er)&&(this.removeAttribute(e.slice(18)),this.removeAttribute(e));return this.renderOptions.renderBefore??=e.firstChild,e}};function N(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var cr=100,lr=300;async function ur(e,t){let n=e;for(;!(t in n)&&n.shadowRoot;){await n.updateComplete;let e=dr(n.shadowRoot);if(!e)break;n=e}return n}function dr(e){for(let t of e.querySelectorAll(`*`))if(t.matches(`button, a[href], input, select, textarea, [tabindex]`)||t.shadowRoot?.delegatesFocus)return t;return null}var P=class extends $n(M){constructor(...e){super(...e),this.text=``,this.placement=`top`,this.asLabel=!1,this.small=!1,this.open=!1,this.pinned=!1,this.anchor=null,this.bubbleId=j(`ui-tooltip`),this.onPointerEnter=()=>{clearTimeout(this.timer),this.timer=globalThis.setTimeout(()=>this.open=!0,cr)},this.scheduleHide=()=>{this.pinned||(clearTimeout(this.timer),this.timer=globalThis.setTimeout(()=>this.open=!1,lr))},this.onFocusIn=e=>{e.composedPath()[0].matches(`:focus-visible`)&&(clearTimeout(this.timer),this.open=!0)},this.hide=()=>{this.pinned||(clearTimeout(this.timer),this.open=!1)},this.onActivate=e=>{(e.key===`Enter`||e.key===` `)&&this.hide()},this.onKeydown=e=>{e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.reposition=()=>this.position()}static{this.styles=[Qn,h`
        :host {
            display: inline-block;
        }

        /* Carbon tooltip: high-contrast popover, 16px padding, body-01, 12×6 caret, 288px max */
        .bubble {
            --_caret-w: 12px;
            --_caret-h: 6px;

            position: absolute; /* document coordinates in the top layer: scrolls with the page, see position.ts */
            inset: auto;
            box-sizing: border-box;
            margin: 0;
            /* its natural width up to 288px wherever it sits: an absolute box near the viewport edge would shrink to the room left */
            width: max-content;
            max-width: 288px;
            padding: var(--ui-space-md);
            border: none;
            border-radius: var(--ui-radius-xs);
            background-color: var(--ui-inverse-surface-1);
            color: var(--ui-inverse-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            overflow-wrap: break-word;
            overflow: visible;
        }

        /* Carbon icon tooltip (the label of an icon-only button): 2px block padding, body-compact-01, 8×4 caret */
        :host([as-label]) .bubble,
        :host([small]) .bubble {
            --_caret-w: 8px;
            --_caret-h: 4px;

            padding: 2px var(--ui-space-md);
            line-height: 18px;
        }

        /* no fade: Carbon's tooltip shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}connectedCallback(){super.connectedCallback(),this.listen(this.anchor??this)}disconnectedCallback(){super.disconnectedCallback(),this.listen(void 0),clearTimeout(this.timer),document.removeEventListener(`keydown`,this.onKeydown,!0),globalThis.removeEventListener(`scroll`,this.reposition,!0),globalThis.removeEventListener(`resize`,this.reposition),this.open=!1}listen(e){let t=this.listening;t!==e&&(t?.removeEventListener(`pointerenter`,this.onPointerEnter),t?.removeEventListener(`pointerleave`,this.scheduleHide),t?.removeEventListener(`focusin`,this.onFocusIn),t?.removeEventListener(`focusout`,this.hide),t?.removeEventListener(`click`,this.hide),t?.removeEventListener(`keydown`,this.onActivate),e?.addEventListener(`pointerenter`,this.onPointerEnter),e?.addEventListener(`pointerleave`,this.scheduleHide),e?.addEventListener(`focusin`,this.onFocusIn),e?.addEventListener(`focusout`,this.hide),e?.addEventListener(`click`,this.hide),e?.addEventListener(`keydown`,this.onActivate),this.listening=e)}get trigger(){return this.anchor??this.assigned[0]}updated(e){e.has(`anchor`)&&this.isConnected&&this.listen(this.anchor??this),(e.has(`text`)||e.has(`asLabel`)||e.has(`anchor`))&&this.wireAccessibility(),e.has(`open`)&&this.toggleBubble()}async wireAccessibility(){let e=this.trigger;if(!e)return;let t=this.asLabel?`label`:`description`,n=await ur(e,t);if(t in n){n[t]=this.text;return}if(this.asLabel){n.setAttribute(`aria-label`,this.text);return}if(this.anchor){n.setAttribute(`aria-description`,this.text);return}if(this.srText??=Object.assign(document.createElement(`span`),{id:this.bubbleId,hidden:!0}),this.srText.textContent=this.text,this.srText.isConnected||this.append(this.srText),n!==e){if(`ariaDescribedByElements`in Element.prototype){let e=n.ariaDescribedByElements??[];e.includes(this.srText)||(n.ariaDescribedByElements=[...e,this.srText])}else n.setAttribute(`aria-description`,this.text);return}let r=new Set((e.getAttribute(`aria-describedby`)??``).split(/\s+/).filter(Boolean));r.add(this.bubbleId),e.setAttribute(`aria-describedby`,[...r].join(` `))}toggleBubble(){let e=this.bubble;this.open&&this.text?(e.matches(`:popover-open`)||e.showPopover(),this.position(),document.addEventListener(`keydown`,this.onKeydown,!0),globalThis.addEventListener(`scroll`,this.reposition,!0),globalThis.addEventListener(`resize`,this.reposition)):(e.matches(`:popover-open`)&&e.hidePopover(),document.removeEventListener(`keydown`,this.onKeydown,!0),globalThis.removeEventListener(`scroll`,this.reposition,!0),globalThis.removeEventListener(`resize`,this.reposition))}position(){let e=this.trigger;e&&Zn(e,this.bubble,this.placement,this.asLabel||this.small?8:12)}focus(e){this.trigger?.focus(e)}render(){return b`
            <slot @slotchange=${()=>this.wireAccessibility()}></slot>
            <div
                class="bubble"
                part="bubble"
                role="tooltip"
                popover="manual"
                aria-hidden="true"
                @pointerenter=${()=>clearTimeout(this.timer)}
                @pointerleave=${this.scheduleHide}
            >
                ${this.text}
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};N([D()],P.prototype,`text`,void 0),N([D({reflect:!0})],P.prototype,`placement`,void 0),N([D({type:Boolean,attribute:`as-label`})],P.prototype,`asLabel`,void 0),N([D({type:Boolean,reflect:!0})],P.prototype,`small`,void 0),N([D({type:Boolean,reflect:!0})],P.prototype,`open`,void 0),N([D({type:Boolean})],P.prototype,`pinned`,void 0),N([D({attribute:!1})],P.prototype,`anchor`,void 0),N([k(`.bubble`)],P.prototype,`bubble`,void 0),N([Xt()],P.prototype,`assigned`,void 0),P=N([E(`ui-tooltip`)],P);var fr={$code:`en`,$name:`English`,$dir:`ltr`,common:{notifications:`Notifications`,close:`Close`,closeNotification:`Close notification`,loading:`Loading`,moreInfo:`More information`,options:`Options`,breadcrumb:`Breadcrumb`,structuredList:`Structured list section`,select:`Select`,dismiss:`Dismiss {text}`,removeTab:`Remove {text} tab`,additionalActions:`Additional actions`,moreActions:`More actions`,skipToContent:`Skip to main content`,openMenu:`Open menu`,closeMenu:`Close menu`,mainNavigation:`Main navigation`,sideNavigation:`Side navigation`,globalActions:`Global actions`,opensInNewTab:`(opens in a new tab)`,stepComplete:`Complete`,stepCurrent:`Current`,stepIncomplete:`Incomplete`,stepInvalid:`Invalid`,loadingFinished:`Finished`,loadingError:`Error`,viewMore:`View more`,viewLess:`View less`,unknown:`Unknown`,back:`Back`,collapse:`Collapse`,expand:`Expand`,pageHeaderActions:`Page header actions`,moreBreadcrumbs:`More breadcrumbs`,moreTags:`{count} more tags`,viewAllTags:`View all tags`,allTags:`All tags`,searchAllTags:`Search all tags`,edit:`Edit`,save:`Save`,cancel:`Cancel`,editOff:`Edit off`,readOnlyField:`This field is read-only and cannot be edited`,theme:`Theme`,themeLight:`Light`,themeDark:`Dark`,themeSystem:`System`},field:{tooLong:`Use {max} characters or fewer.`,nearLimit:`Approaching the character limit`,tooManyWords:`Use {max} words or fewer.`,nearWordLimit:`Approaching the word limit`,showPassword:`Show password`,hidePassword:`Hide password`,decrement:`Decrement number`,increment:`Increment number`,requiredOne:`Please select an option.`,requiredAtLeastOne:`Select at least one option.`,required:`Fill out this field.`,search:`Search`,clearSearch:`Clear search input`,on:`On`,off:`Off`,sliderInput:`Slider number input`,sliderLower:`Lower bound`,sliderUpper:`Upper bound`,sliderCorrected:`The inputted value "{value}" was corrected to the nearest allowed digit.`,timeSelect:`Open list of options`,enterNumber:`Enter a number`,enterTime:`Enter a valid time`,rangeUnderflow:`Enter {min} or more.`,rangeOverflow:`Enter {max} or less.`},copy:{copy:`Copy to clipboard`,copied:`Copied!`,showMore:`Show more`,showLess:`Show less`},fileUploader:{addFile:`Add file`,dropHint:`Drag and drop files here or click to upload`,invalidType:`File type not supported`,tooLarge:`File is too large`,invalidBody:`Remove the file and choose another.`,removeFile:`Remove file`,uploading:`Uploading`,uploaded:`Uploaded`,required:`Add at least one file.`,filesChosen:e=>`${e} files`,tooMany:`Too many files`,tooManyBody:e=>`You can add up to ${e} files.`,totalTooLarge:`Total file size is too large`,totalTooLargeBody:e=>`All files together can be up to ${e}.`,uploadFailed:`Upload failed`,retry:`Retry upload`,cancelUpload:`Cancel upload`},pagination:{itemsPerPage:`Items per page:`,itemRange:`{min}–{max} of {total} items`,items:`{min}–{max} items`,pageRange:`of {total} pages`,page:`page {page}`,pageNumber:`Page number`,previousPage:`Previous page`,nextPage:`Next page`,navLabel:`Pagination`,navPrevious:`Previous`,navNext:`Next`,navPage:`Page`,navActivePage:`Active, Page`,navSelect:`Select page number`,navStatus:`Page {page} of {total}`},dataTable:{sortAscending:`Click to sort rows by {header} header in ascending order`,sortDescending:`Click to sort rows by {header} header in descending order`,unsort:`Click to unsort rows by {header} header`,selectAll:`Select all rows`,unselectAll:`Unselect all rows`,selectRow:`Select row`,unselectRow:`Unselect row`,selectedCount:e=>`${e} ${e===1?`item`:`items`} selected`,cancel:`Cancel`,toolbar:`Data table toolbar`,searchLabel:`Filter table`,searchPlaceholder:`Filter table`,expandRow:`Expand current row`,collapseRow:`Collapse current row`,expandAll:`Expand all rows`,collapseAll:`Collapse all rows`,sorted:(e,t)=>`Sorted by ${e}, ${t}`,unsorted:`Sorting removed`,rowsShown:(e,t)=>`${e} of ${t} rows`,editHint:`Press Enter to edit`,resizeColumn:e=>`Resize ${e} column`,columnWidth:e=>`${e} pixels`,loading:`Loading data`,noRows:`No data`,noResults:`No results found. Try a different search.`,selectAllCount:e=>`Select all (${e})`,columns:`Columns`,resetColumns:`Reset`,exportCsv:`Export CSV`},list:{required:`Please select an option.`,clear:`Clear`,openList:`Open list`,closeList:`Close list`,noResults:`No matching items`,searching:`Searching…`,loadingOptions:`Loading…`,selectAll:`Select all`,clearAll:`Clear all selected items`,selectedCount:e=>`Total items selected: ${e}`},datePicker:{weekdays:[`S`,`M`,`T`,`W`,`Th`,`F`,`S`],chooseDate:`Choose date`,previousMonth:`Previous month`,nextMonth:`Next month`,year:`Year`,increaseYear:`Next year`,decreaseYear:`Previous year`,pattern:e=>e,hint:e=>`Format: ${e}`,badFormat:e=>`Enter a valid date as ${e}.`,incomplete:`Enter a day, month and year.`,impossible:`Enter a real date; check the day and month.`,badEra:e=>`Enter the year in Buddhist Era, e.g. ${e}.`,required:`Please enter a date.`,dateDisabled:`This date is not available.`,clear:`Clear date`,today:`Today`,endBeforeStart:`End date must be on or after the start date.`,beforeMin:e=>`Date must be on or after ${e}.`,afterMax:e=>`Date must be on or before ${e}.`}},pr={$code:`th`,$name:`ไทย`,$dir:`ltr`,common:{notifications:`การแจ้งเตือน`,close:`ปิด`,closeNotification:`ปิดการแจ้งเตือน`,loading:`กำลังโหลด`,moreInfo:`ข้อมูลเพิ่มเติม`,options:`ตัวเลือก`,breadcrumb:`เส้นทางหน้า`,structuredList:`รายการแบบตาราง`,select:`เลือก`,dismiss:`ลบ {text}`,removeTab:`ปิดแท็บ {text}`,additionalActions:`การกระทำเพิ่มเติม`,moreActions:`การกระทำอื่น`,skipToContent:`ข้ามไปยังเนื้อหาหลัก`,openMenu:`เปิดเมนู`,closeMenu:`ปิดเมนู`,mainNavigation:`เมนูหลัก`,sideNavigation:`เมนูด้านข้าง`,globalActions:`การกระทำส่วนกลาง`,opensInNewTab:`(เปิดในแท็บใหม่)`,stepComplete:`เสร็จแล้ว`,stepCurrent:`ขั้นปัจจุบัน`,stepIncomplete:`ยังไม่ถึง`,stepInvalid:`ไม่ถูกต้อง`,loadingFinished:`เสร็จแล้ว`,loadingError:`เกิดข้อผิดพลาด`,viewMore:`ดูเพิ่มเติม`,viewLess:`ดูน้อยลง`,unknown:`ไม่ทราบ`,back:`ย้อนกลับ`,collapse:`ย่อ`,expand:`ขยาย`,pageHeaderActions:`การดำเนินการของหน้า`,moreBreadcrumbs:`เส้นทางเพิ่มเติม`,moreTags:`แท็กอื่นอีก {count} รายการ`,viewAllTags:`ดูแท็กทั้งหมด`,allTags:`แท็กทั้งหมด`,searchAllTags:`ค้นหาแท็กทั้งหมด`,edit:`แก้ไข`,save:`บันทึก`,cancel:`ยกเลิก`,editOff:`แก้ไขไม่ได้`,readOnlyField:`ช่องนี้อ่านได้อย่างเดียว แก้ไขไม่ได้`,theme:`ธีม`,themeLight:`สว่าง`,themeDark:`มืด`,themeSystem:`ตามระบบ`},field:{tooLong:`กรอกได้ไม่เกิน {max} ตัวอักษร`,nearLimit:`ใกล้ครบจำนวนตัวอักษรที่กำหนด`,tooManyWords:`กรอกได้ไม่เกิน {max} คำ`,nearWordLimit:`ใกล้ครบจำนวนคำที่กำหนด`,showPassword:`แสดงรหัสผ่าน`,hidePassword:`ซ่อนรหัสผ่าน`,decrement:`ลดค่า`,increment:`เพิ่มค่า`,requiredOne:`กรุณาเลือกรายการ`,requiredAtLeastOne:`กรุณาเลือกอย่างน้อยหนึ่งรายการ`,required:`กรุณากรอกข้อมูล`,search:`ค้นหา`,clearSearch:`ล้างคำค้นหา`,on:`เปิด`,off:`ปิด`,sliderInput:`ช่องกรอกค่าของแถบเลื่อน`,sliderLower:`ขอบล่าง`,sliderUpper:`ขอบบน`,sliderCorrected:`ค่า "{value}" ที่กรอกถูกปรับเป็นค่าที่ใกล้ที่สุดที่อนุญาต`,timeSelect:`เปิดรายการตัวเลือก`,enterNumber:`กรุณากรอกตัวเลข`,enterTime:`กรุณากรอกเวลาให้ถูกต้อง`,rangeUnderflow:`กรุณากรอกค่าตั้งแต่ {min} ขึ้นไป`,rangeOverflow:`กรุณากรอกค่าไม่เกิน {max}`},copy:{copy:`คัดลอก`,copied:`คัดลอกแล้ว`,showMore:`แสดงเพิ่มเติม`,showLess:`แสดงน้อยลง`},fileUploader:{addFile:`เพิ่มไฟล์`,dropHint:`ลากไฟล์มาวางที่นี่ หรือคลิกเพื่ออัปโหลด`,invalidType:`ไม่รองรับไฟล์ประเภทนี้`,tooLarge:`ไฟล์มีขนาดใหญ่เกินไป`,invalidBody:`ลบไฟล์นี้ออกแล้วเลือกไฟล์อื่น`,removeFile:`ลบไฟล์`,uploading:`กำลังอัปโหลด`,uploaded:`อัปโหลดแล้ว`,required:`กรุณาเพิ่มไฟล์อย่างน้อยหนึ่งไฟล์`,filesChosen:e=>`${e} ไฟล์`,tooMany:`จำนวนไฟล์เกินกำหนด`,tooManyBody:e=>`เพิ่มไฟล์ได้สูงสุด ${e} ไฟล์`,totalTooLarge:`ขนาดไฟล์รวมใหญ่เกินไป`,totalTooLargeBody:e=>`ขนาดรวมของทุกไฟล์ต้องไม่เกิน ${e}`,uploadFailed:`อัปโหลดไม่สำเร็จ`,retry:`ลองอัปโหลดอีกครั้ง`,cancelUpload:`ยกเลิกการอัปโหลด`},pagination:{itemsPerPage:`รายการต่อหน้า:`,itemRange:`{min}–{max} จาก {total} รายการ`,items:`{min}–{max} รายการ`,pageRange:`จาก {total} หน้า`,page:`หน้า {page}`,pageNumber:`หมายเลขหน้า`,previousPage:`หน้าก่อนหน้า`,nextPage:`หน้าถัดไป`,navLabel:`การแบ่งหน้า`,navPrevious:`ก่อนหน้า`,navNext:`ถัดไป`,navPage:`หน้า`,navActivePage:`หน้าปัจจุบัน, หน้า`,navSelect:`เลือกหมายเลขหน้า`,navStatus:`หน้า {page} จาก {total}`},dataTable:{sortAscending:`คลิกเพื่อเรียงแถวตามคอลัมน์ {header} จากน้อยไปมาก`,sortDescending:`คลิกเพื่อเรียงแถวตามคอลัมน์ {header} จากมากไปน้อย`,unsort:`คลิกเพื่อยกเลิกการเรียงตามคอลัมน์ {header}`,selectAll:`เลือกทุกแถว`,unselectAll:`ยกเลิกการเลือกทุกแถว`,selectRow:`เลือกแถว`,unselectRow:`ยกเลิกการเลือกแถว`,selectedCount:e=>`เลือกแล้ว ${e} รายการ`,cancel:`ยกเลิก`,toolbar:`แถบเครื่องมือตาราง`,searchLabel:`กรองตาราง`,searchPlaceholder:`กรองตาราง`,expandRow:`ขยายแถวนี้`,collapseRow:`ยุบแถวนี้`,expandAll:`ขยายทุกแถว`,collapseAll:`ยุบทุกแถว`,sorted:(e,t)=>`เรียงตามคอลัมน์ ${e} ${t===`ascending`?`จากน้อยไปมาก`:`จากมากไปน้อย`}`,unsorted:`ยกเลิกการเรียงแล้ว`,rowsShown:(e,t)=>`แสดง ${e} จาก ${t} แถว`,editHint:`กด Enter เพื่อแก้ไข`,resizeColumn:e=>`ปรับความกว้างคอลัมน์ ${e}`,columnWidth:e=>`${e} พิกเซล`,loading:`กำลังโหลดข้อมูล`,noRows:`ไม่มีข้อมูล`,noResults:`ไม่พบข้อมูลที่ค้นหา ลองใช้คำค้นอื่น`,selectAllCount:e=>`เลือกทั้งหมด (${e})`,columns:`คอลัมน์`,resetColumns:`คืนค่าเริ่มต้น`,exportCsv:`ส่งออก CSV`},list:{required:`กรุณาเลือกรายการ`,clear:`ล้างค่า`,openList:`เปิดรายการ`,closeList:`ปิดรายการ`,noResults:`ไม่พบรายการที่ตรงกัน`,searching:`กำลังค้นหา…`,loadingOptions:`กำลังโหลด…`,selectAll:`เลือกทั้งหมด`,clearAll:`ล้างรายการที่เลือกทั้งหมด`,selectedCount:e=>`เลือกแล้ว ${e} รายการ`},datePicker:{chooseDate:`เลือกวันที่`,previousMonth:`เดือนก่อนหน้า`,nextMonth:`เดือนถัดไป`,year:`ปี`,increaseYear:`ปีถัดไป`,decreaseYear:`ปีก่อนหน้า`,pattern:e=>e.replace(`dd`,`วว`).replace(`mm`,`ดด`).replace(`yyyy`,`ปปปป`),hint:e=>`รูปแบบ: ${e}`,badFormat:e=>`กรุณากรอกวันที่ให้ถูกต้องตามรูปแบบ ${e}`,incomplete:`กรุณากรอกวันที่ให้ครบ วัน เดือน และปี`,impossible:`วันที่นี้ไม่มีอยู่จริง กรุณาตรวจสอบวันและเดือน`,badEra:e=>`กรุณากรอกปีเป็น พ.ศ. เช่น ${e}`,required:`กรุณากรอกวันที่`,dateDisabled:`วันที่นี้ไม่สามารถเลือกได้`,clear:`ล้างวันที่`,today:`วันนี้`,endBeforeStart:`วันสิ้นสุดต้องไม่ก่อนวันเริ่มต้น`,beforeMin:e=>`วันที่ต้องไม่ก่อน ${e}`,afterMax:e=>`วันที่ต้องไม่หลัง ${e}`}},mr=new Map,hr=new Set;function gr(...e){for(let t of e)mr.set(t.$code.toLowerCase(),t);for(let e of hr)e()}function _r(e){return hr.add(e),()=>hr.delete(e)}function vr(e){let t=e.toLowerCase();return mr.get(t)??mr.get(t.split(`-`)[0])??mr.get(`en`)}gr(fr,pr);var yr=new Set;_r(()=>{for(let e of yr)e.requestUpdate()});var br=null;function xr(){br||typeof MutationObserver>`u`||(br=new MutationObserver(()=>{for(let e of yr)e.requestUpdate()}),br.observe(document.documentElement,{attributes:!0,attributeFilter:[`lang`,`dir`]}))}var F=class{constructor(e){this.host=e,e.addController(this),this.observer=typeof MutationObserver>`u`?null:new MutationObserver(()=>this.host.requestUpdate())}hostConnected(){yr.add(this.host),xr(),this.observer?.observe(this.host,{attributes:!0,attributeFilter:[`lang`,`dir`]})}hostDisconnected(){yr.delete(this.host),this.observer?.disconnect()}inherited(e){return typeof this.host.closest==`function`?this.host.closest(`[${e}]`)?.getAttribute(e)||globalThis.document?.documentElement.getAttribute(e)||``:this.host.getAttribute(e)??``}lang(){return this.inherited(`lang`)||globalThis.navigator?.language||`en`}dir(){let e=this.inherited(`dir`);return e===`rtl`||e===`ltr`?e:this.t.$dir}get t(){return vr(this.lang())}},Sr=b`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M14 5v9H5V5h9m0-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" /><path d="M2 9H1V2a1 1 0 0 1 1-1h7v1H2Z" /></svg>`;async function Cr(e){try{return await navigator.clipboard.writeText(e),!0}catch{let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.append(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{n=!1}return t.remove(),n}}var I=class extends $n(M){constructor(...e){super(...e),this.text=``,this.localize=new F(this),this.label=``,this.feedback=``,this.feedbackTimeout=2e3,this.placement=`bottom`,this.size=`md`,this.disabled=!1,this.copied=!1}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[On,h`
        :host {
            display: inline-block;
        }

        .copy {
            display: flex;
            align-items: center;
            justify-content: center;
            inline-size: var(--_s, 40px);
            block-size: var(--_s, 40px);
            padding: 0;
            border: none;
            background-color: var(--ui-surface-1);
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            /* Carbon .cds--btn: the fill and the ring change in fast-01 with the entrance easing */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                outline var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        :host([size='sm']) .copy {
            --_s: 32px;
        }

        .copy:hover {
            background-color: var(--ui-ghost-hover);
        }

        .copy:active {
            background-color: var(--ui-ghost-active);
        }

        .copy:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        .copy:disabled {
            background-color: var(--ui-surface-1);
            color: var(--ui-icon-disabled);
            cursor: not-allowed;
        }

        svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
            transition: fill var(--ui-duration-fast) var(--ui-easing);
        }

        @media (forced-colors: active) {
            .copy {
                border: 1px solid CanvasText;
                color: CanvasText;
            }

            .copy:disabled {
                color: GrayText;
            }
        }

    `]}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer)}async onClick(){let e=new CustomEvent(`ui-copy`,{detail:{text:this.text},bubbles:!0,composed:!0,cancelable:!0});(!this.dispatchEvent(e)||await Cr(this.text))&&this.showFeedback()}showFeedback(){clearTimeout(this.timer),this.copied=!0,this.tooltip.pinned=!0,this.tooltip.open=!0,this.timer=globalThis.setTimeout(()=>{this.copied=!1,this.tooltip.pinned=!1,this.tooltip.open=!1},this.feedbackTimeout)}render(){return b`
            <ui-tooltip as-label text=${this.copied?this.feedback||this.localize.t.copy.copied:this.label||this.localize.t.copy.copy} placement=${this.placement}>
                <button class="copy" part="button" type="button" tabindex="0" ?disabled=${this.disabled} @click=${this.onClick}>${Sr}</button>
            </ui-tooltip>
            <span class="sr-only" role="status">${this.copied?this.feedback||this.localize.t.copy.copied:``}</span>
        `}};N([D()],I.prototype,`text`,void 0),N([D()],I.prototype,`label`,void 0),N([D()],I.prototype,`feedback`,void 0),N([D({type:Number,attribute:`feedback-timeout`})],I.prototype,`feedbackTimeout`,void 0),N([D()],I.prototype,`placement`,void 0),N([D({reflect:!0})],I.prototype,`size`,void 0),N([D({type:Boolean,reflect:!0})],I.prototype,`disabled`,void 0),N([D({type:Boolean,reflect:!0,attribute:`data-copied`})],I.prototype,`copied`,void 0),N([k(`ui-tooltip`)],I.prototype,`tooltip`,void 0),I=N([E(`ui-copy-button`)],I);var wr={maxCollapsedRows:15,maxExpandedRows:0,minCollapsedRows:3,minExpandedRows:16};function Tr(e,t){return t.maxCollapsedRows>0&&(t.maxExpandedRows<=0||t.maxExpandedRows>t.maxCollapsedRows)&&e>t.maxCollapsedRows*16}function Er(e,t){return t.minExpandedRows>0&&e<=t.minExpandedRows*16}function Dr(e,t){let n=e?t.maxExpandedRows:t.maxCollapsedRows,r=e?t.minExpandedRows:t.minCollapsedRows;return{max:n>0?n*16:void 0,min:r>0?r*16:void 0}}function Or(e,t){return e||t.replace(/^\n/,``)}var kr=b`<svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>`,L=class extends $n(M){constructor(...e){super(...e),this.type=`single`,this.localize=new F(this),this.text=``,this.label=``,this.copyLabel=``,this.feedback=``,this.feedbackTimeout=2e3,this.placement=`bottom`,this.hideCopyButton=!1,this.wrapText=!1,this.disabled=!1,this.expanded=!1,this.showMoreText=``,this.showLessText=``,this.maxCollapsedRows=15,this.maxExpandedRows=0,this.minCollapsedRows=3,this.minExpandedRows=16,this.canExpand=!1,this.copied=!1}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[On,h`
        :host {
            display: block;
            position: relative;
            inline-size: 100%;
            max-inline-size: 768px;
            font-family: var(--ui-font-family);
        }

        :host([type='inline']) {
            display: inline;
            inline-size: auto;
            max-inline-size: none;
        }

        code,
        pre {
            margin: 0;
            font: var(--ui-font-code);
            letter-spacing: var(--ui-tracking-code);
            color: var(--ui-ink);
        }

        pre {
            white-space: pre;
        }

        /* ---- single ---- */
        .single {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 40px;
            padding-inline-end: 40px;
            background-color: var(--ui-surface-1);
        }

        .single.no-copy {
            padding: 0;
        }

        .single .container {
            position: relative;
            display: flex;
            align-items: center;
            block-size: 100%;
            inline-size: 100%;
            overflow-x: auto;
            padding-inline-start: var(--ui-space-md);
            outline: none;
        }

        .single .container:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        .single pre {
            padding-inline-end: var(--ui-space-xs);
        }

        /* ---- multi ---- */
        .multi {
            position: relative;
            display: flex;
            box-sizing: border-box;
            padding: var(--ui-space-md);
            background-color: var(--ui-surface-1);
        }

        .multi .container {
            position: relative;
            order: 1;
            inline-size: 100%;
            overflow-y: auto;
            transition: max-height var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon moderate-01 */
        }

        .multi pre {
            padding-inline-end: 40px;
            outline: none;
        }

        .multi pre:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: 0;
        }

        .multi.no-copy pre {
            padding-inline-end: 0;
        }

        .multi.expanded .container {
            padding-block-end: var(--ui-space-md);
        }

        .multi.wrap pre {
            white-space: pre-wrap;
            overflow-wrap: break-word;
        }

        .multi code {
            display: block;
            overflow: hidden;
        }

        .copy-button {
            position: absolute;
            inset-block-start: 0;
            inset-inline-end: 0;
            z-index: 10;
        }

        .multi .copy-button {
            inset-block-start: var(--ui-space-xs);
            inset-inline-end: var(--ui-space-xs);
        }

        .expand {
            position: absolute;
            z-index: 10;
            inset-block-end: 0;
            inset-inline-end: 0;
            display: inline-flex;
            align-items: center;
            block-size: 32px;
            padding: var(--ui-space-xs) var(--ui-space-md);
            border: 0;
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            cursor: pointer;
            outline: none;
            /* Carbon .cds--btn: the fill and the ring change in fast-01 with the entrance easing */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                outline var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        .expand:hover {
            background-color: var(--ui-ghost-hover);
        }

        .expand:active {
            background-color: var(--ui-ghost-active);
        }

        .expand:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        .expand .text {
            position: relative;
            inset-block-start: -1px;
        }

        .chevron {
            width: 16px;
            height: 16px;
            margin-inline-start: var(--ui-space-xs);
            fill: var(--ui-icon-primary);
            transition: all var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon moderate-01; collapsing */
        }

        /* opening, Carbon turns it with $transition-expansion (300ms, no token) and the browser's ease */
        .expanded .chevron {
            transform: rotate(180deg);
            transition: transform 300ms;
        }

        @media (prefers-reduced-motion: reduce) {
            .expanded .chevron {
                transition: none;
            }
        }

        /* ---- inline ---- */
        .inline {
            position: relative;
            display: inline;
            box-sizing: border-box;
            block-size: 20px;
            min-block-size: 20px;
            padding: 0;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
            font: var(--ui-font-code);
            letter-spacing: var(--ui-tracking-code);
            cursor: pointer;
            outline: none;
        }

        .inline code {
            padding: 0 var(--ui-space-xs);
            white-space: pre;
        }

        .inline:hover {
            background-color: var(--ui-ghost-hover);
        }

        .inline:active {
            background-color: var(--ui-ghost-active);
        }

        .inline:focus-visible {
            border-color: var(--ui-focus);
        }

        .inline.no-copy {
            display: inline-block;
            cursor: auto;
        }

        .inline.no-copy:hover {
            background-color: var(--ui-surface-1);
        }

        /* ---- disabled ---- */
        .disabled,
        .disabled .expand,
        .disabled .inline {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        .disabled code,
        .disabled pre {
            color: var(--ui-ink-disabled);
        }

        .disabled .expand:hover,
        .disabled .inline:hover {
            background-color: var(--ui-surface-1);
        }

        .disabled .chevron {
            fill: var(--ui-icon-disabled);
        }

        @media (forced-colors: active) {
            .single,
            .multi,
            .inline {
                outline: 1px solid CanvasText;
            }
        }
    `]}connectedCallback(){super.connectedCallback(),this.observer??=new ResizeObserver(()=>this.measure()),this.hasUpdated&&this.codeEl&&this.observer.observe(this.codeEl)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),clearTimeout(this.timer)}firstUpdated(){this.codeEl&&this.observer?.observe(this.codeEl)}updated(e){e.has(`type`)&&this.codeEl&&(this.observer?.disconnect(),this.observer?.observe(this.codeEl)),e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}get copyText(){return Or(this.text,this.textContent??``)}measure(){if(this.type!==`multi`||!this.codeEl){this.canExpand=!1;return}let e=this.codeEl.getBoundingClientRect().height;this.canExpand=Tr(e,this.rows),this.expanded&&Er(e,this.rows)&&(this.expanded=!1)}get rows(){return{maxCollapsedRows:this.maxCollapsedRows,maxExpandedRows:this.maxExpandedRows,minCollapsedRows:this.minCollapsedRows,minExpandedRows:this.minExpandedRows}}onSlotChange(){let e=this.firstChild;e?.nodeType===Node.TEXT_NODE&&e.textContent?.startsWith(`
`)&&(e.textContent=e.textContent.slice(1)),this.measure(),this.requestUpdate()}containerStyle(){if(this.type!==`multi`)return{};let{max:e,min:t}=Dr(this.expanded,this.rows);return{maxHeight:e===void 0?null:`${e}px`,minHeight:t===void 0?null:`${t}px`}}async copyInline(){if(this.disabled)return;let e=new CustomEvent(`ui-copy`,{detail:{text:this.copyText},bubbles:!0,composed:!0,cancelable:!0});if(this.dispatchEvent(e)&&!await Cr(this.copyText))return;let t=this.inlineTooltip;t&&(clearTimeout(this.timer),this.copied=!0,t.pinned=!0,t.open=!0,this.timer=globalThis.setTimeout(()=>{this.copied=!1,t.pinned=!1,t.open=!1},this.feedbackTimeout))}renderInline(){let e=b`<code part="code"><slot @slotchange=${this.onSlotChange}></slot></code>`;return this.hideCopyButton?b`<span class="inline no-copy ${en({disabled:this.disabled})}">${e}</span>`:b`<ui-tooltip small text=${this.copied?this.feedback||this.localize.t.copy.copied:this.label||this.localize.t.copy.copy} placement=${this.placement}>
            <button class="inline ${en({disabled:this.disabled})}" type="button" aria-disabled=${A(this.disabled?`true`:void 0)} @click=${this.copyInline}>${e}</button>
        </ui-tooltip><span class="sr-only" role="status">${this.copied?this.feedback||this.localize.t.copy.copied:``}</span>`}renderCopyButton(e){return this.hideCopyButton?S:b`<ui-copy-button
            class="copy-button"
            part="copy-button"
            size=${e}
            .text=${this.copyText}
            label=${this.copyLabel||this.localize.t.copy.copy}
            feedback=${this.feedback||this.localize.t.copy.copied}
            feedback-timeout=${this.feedbackTimeout}
            placement=${this.placement}
            ?disabled=${this.disabled}
        ></ui-copy-button>`}renderSingle(){let e=!this.disabled;return b`<div class="single ${en({"no-copy":this.hideCopyButton,disabled:this.disabled})}">
            <div class="container" part="container" role="textbox" tabindex=${A(e?0:void 0)} aria-label=${this.label||this.localize.t.copy.copy} aria-readonly="true">
                <pre><code part="code"><slot @slotchange=${this.onSlotChange}></slot></code></pre>
            </div>
            ${this.renderCopyButton(`md`)}
        </div>`}renderExpandButton(){if(!this.canExpand)return S;let e=this.expanded?this.showLessText||this.localize.t.copy.showLess:this.showMoreText||this.localize.t.copy.showMore;return b`<button class="expand" part="expand-button" type="button" aria-expanded=${this.expanded?`true`:`false`} ?disabled=${this.disabled} @click=${()=>this.expanded=!this.expanded}>
            <span class="text">${e}</span>${kr}
        </button>`}renderMulti(){let e=!this.disabled;return b`<div class="multi ${en({"no-copy":this.hideCopyButton,expanded:this.expanded,wrap:this.wrapText,disabled:this.disabled})}">
            <div class="container" part="container" style=${rn(this.containerStyle())}>
                <pre role="textbox" tabindex=${A(e?0:void 0)} aria-label=${this.label||this.localize.t.copy.copy} aria-readonly="true" aria-multiline="true"><code part="code"><slot @slotchange=${this.onSlotChange}></slot></code></pre>
            </div>
            ${this.renderCopyButton(`sm`)}
            ${this.renderExpandButton()}
        </div>`}render(){return this.type===`inline`?this.renderInline():this.type===`multi`?this.renderMulti():this.renderSingle()}};N([D({reflect:!0})],L.prototype,`type`,void 0),N([D()],L.prototype,`text`,void 0),N([D()],L.prototype,`label`,void 0),N([D({attribute:`copy-label`})],L.prototype,`copyLabel`,void 0),N([D()],L.prototype,`feedback`,void 0),N([D({type:Number,attribute:`feedback-timeout`})],L.prototype,`feedbackTimeout`,void 0),N([D()],L.prototype,`placement`,void 0),N([D({type:Boolean,attribute:`hide-copy-button`})],L.prototype,`hideCopyButton`,void 0),N([D({type:Boolean,attribute:`wrap-text`})],L.prototype,`wrapText`,void 0),N([D({type:Boolean,reflect:!0})],L.prototype,`disabled`,void 0),N([D({type:Boolean,reflect:!0})],L.prototype,`expanded`,void 0),N([D({attribute:`show-more-text`})],L.prototype,`showMoreText`,void 0),N([D({attribute:`show-less-text`})],L.prototype,`showLessText`,void 0),N([D({type:Number,attribute:`max-collapsed-rows`})],L.prototype,`maxCollapsedRows`,void 0),N([D({type:Number,attribute:`max-expanded-rows`})],L.prototype,`maxExpandedRows`,void 0),N([D({type:Number,attribute:`min-collapsed-rows`})],L.prototype,`minCollapsedRows`,void 0),N([D({type:Number,attribute:`min-expanded-rows`})],L.prototype,`minExpandedRows`,void 0),N([O()],L.prototype,`canExpand`,void 0),N([O()],L.prototype,`copied`,void 0),N([k(`code`)],L.prototype,`codeEl`,void 0),N([k(`ui-tooltip`)],L.prototype,`inlineTooltip`,void 0),L=N([E(`ui-code-snippet`)],L);var Ar=class{constructor(e){this.host=e,e.addController(this)}hostConnected(){this.observer??=new MutationObserver(()=>this.host.requestUpdate()),this.observer.observe(this.host,{childList:!0,attributes:!0,attributeFilter:[`slot`]})}hostDisconnected(){this.observer?.disconnect()}has(e){return typeof this.host.querySelector==`function`&&this.host.querySelector(`:scope > [slot="${e}"]`)!==null}};function jr(e){return e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey}function R(e){let t=e.currentTarget,n=t.getAttribute(`href`);if(e.defaultPrevented||jr(e)||n===null||t.hasAttribute(`download`)||t.target&&t.target!==`_self`||t.origin!==location.origin)return;let r=new CustomEvent(`ui-navigate`,{detail:{href:n},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(r)||e.preventDefault()}function Mr(e,t){if(!t.startsWith(`#`)||t.length<2)return!1;let n=decodeURIComponent(t.slice(1));if(document.getElementById(n))return!1;for(let t=e.getRootNode();t instanceof ShadowRoot;t=t.host.getRootNode()){let e=t.getElementById(n);if(e instanceof HTMLElement)return e.hasAttribute(`tabindex`)||(e.tabIndex=-1),e.focus(),!0}return!1}var z=class extends M{constructor(...e){super(...e),this.href=``,this.target=``,this.rel=``,this.download=``,this.size=`md`,this.inline=!1,this.visited=!1,this.disabled=!1,this.slots=new Ar(this)}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: inline;
            font-family: var(--ui-font-family);
        }

        a,
        .disabled {
            display: inline-flex;
            align-items: center;
            color: var(--ui-link);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            text-decoration: none;
            outline: 2px solid transparent;
            outline-offset: 1px;
            transition: color var(--ui-duration-fast) var(--ui-easing);
        }

        :host([size='sm']) a,
        :host([size='sm']) .disabled {
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        :host([size='lg']) a,
        :host([size='lg']) .disabled {
            font: var(--ui-font-body);
            line-height: 22px; /* body-compact-02 */
        }

        a:hover {
            color: var(--ui-link-hover);
            text-decoration: underline;
        }

        a:focus-visible {
            outline-color: var(--ui-focus);
            text-decoration: underline;
        }

        a:active,
        a:active:visited {
            color: var(--ui-link);
            text-decoration: underline;
        }

        :host([visited]) a:visited {
            color: var(--ui-link-visited);
        }

        :host([visited]) a:visited:hover {
            color: var(--ui-link-hover);
        }

        :host([inline]) a,
        :host([inline]) .disabled {
            display: inline;
            text-decoration: underline;
        }

        .disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        .icon {
            display: inline-flex;
            align-items: center;
            margin-inline-start: var(--ui-space-xs);
        }

        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        :host([size='lg']) ::slotted([slot='icon']) {
            width: 20px;
            height: 20px;
        }

        :host([inline]) .icon {
            display: none;
        }

        @media (forced-colors: active) {
            a {
                color: LinkText;
            }

            a:focus-visible {
                outline: 2px solid Highlight;
            }

            .disabled {
                color: GrayText;
            }
        }

    `}render(){let e=this.slots.has(`icon`)?b`<span class="icon" part="icon"><slot name="icon"></slot></span>`:S;if(this.disabled)return b`<span class="disabled" part="base" role="link" aria-disabled="true"><slot></slot>${e}</span>`;let t=this.target===`_blank`;return b`<a
            part="base"
            href=${this.href||S}
            target=${this.target||S}
            rel=${this.rel||(t?`noopener noreferrer`:S)}
            download=${this.download||S}
            tabindex=${this.href?`0`:S}
            @click=${R}
        >
            <slot></slot>${e}
        </a>`}};N([D()],z.prototype,`href`,void 0),N([D()],z.prototype,`target`,void 0),N([D()],z.prototype,`rel`,void 0),N([D()],z.prototype,`download`,void 0),N([D({reflect:!0})],z.prototype,`size`,void 0),N([D({type:Boolean,reflect:!0})],z.prototype,`inline`,void 0),N([D({type:Boolean,reflect:!0})],z.prototype,`visited`,void 0),N([D({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),z=N([E(`ui-link`)],z);var Nr=`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,Pr=(e,t)=>!e&&!t;function Fr(e,t,n){return t<e.left||t>e.left+e.width||n<e.top||n>e.top+e.height}var Ir=e=>e.findIndex(e=>!/^(primary|danger)/.test(e??`primary`)),Lr=e=>e.getAttribute(`kind`)??e.getAttribute(`variant`),B=class extends M{constructor(...e){super(...e),this.open=!1,this.localize=new F(this),this.heading=``,this.label=``,this.size=`md`,this.persistent=!1,this.closeLabel=``,this.alert=!1,this.bodyScrollable=!1,this.headingId=j(`ui-modal-heading`),this.labelId=j(`ui-modal-label`),this.bodyId=j(`ui-modal-body`),this.hasFooter=!1,this.pointerDownOnBackdrop=!1,this.savedOverflow=null,this.hasHeaderActions=!1,this.slots=new Ar(this),this.onHeaderActionsSlotChange=e=>{this.hasHeaderActions=e.target.assignedElements().length>0}}static{this.styles=h`
        dialog {
            box-sizing: border-box;
            width: min(100% - 2 * var(--ui-space-md), 672px);
            max-height: min(100% - 2 * var(--ui-space-xxl), 768px);
            padding: 0;
            border: none;
            border-radius: var(--ui-radius-none);
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
            font-family: var(--ui-font-family);
            /* on the dialog, not only while [open]: a closing one stays on screen while it fades out */
            flex-direction: column;
        }

        dialog[open] {
            display: flex;
        }

        :host([size='sm']) dialog {
            width: min(100% - 2 * var(--ui-space-md), 480px);
        }

        :host([size='lg']) dialog {
            width: min(100% - 2 * var(--ui-space-md), 1056px);
        }

        dialog::backdrop {
            background-color: rgb(22 22 22 / 0.5);
        }

        /*
         * Carbon modal: 240ms, the box drops 24px into place while it and the overlay fade in (entrance expressive),
         * and goes back out after closing (exit expressive) where the browser can keep a closing dialog in the top
         * layer (overlay). Reduced motion: none.
         */
        @media (prefers-reduced-motion: no-preference) {
            dialog {
                opacity: 0;
                transform: translateY(-24px);
                transition:
                    opacity var(--ui-duration-moderate-02) cubic-bezier(0.4, 0.14, 1, 1),
                    transform var(--ui-duration-moderate-02) cubic-bezier(0.4, 0.14, 1, 1);
            }

            dialog::backdrop {
                opacity: 0;
                transition: opacity var(--ui-duration-moderate-02) cubic-bezier(0.4, 0.14, 1, 1);
            }

            dialog[open],
            dialog[open]::backdrop {
                opacity: 1;
                transition-timing-function: cubic-bezier(0, 0, 0.3, 1);
            }

            dialog[open] {
                transform: none;
            }

            @starting-style {
                dialog[open],
                dialog[open]::backdrop {
                    opacity: 0;
                }

                dialog[open] {
                    transform: translateY(-24px);
                }
            }

            @supports (overlay: auto) {
                /* where a modal one sits, also while it closes (no longer :modal) */
                dialog {
                    position: fixed;
                    inset: 0;
                    transition-property: opacity, transform, overlay, display;
                    transition-behavior: allow-discrete;
                }

                dialog::backdrop {
                    transition-property: opacity, overlay, display;
                    transition-behavior: allow-discrete;
                }
            }
        }

        header {
            position: relative;
            padding: var(--ui-space-md) 48px var(--ui-space-xs) var(--ui-space-md); /* Carbon: 16px 48px 0 16px + 8px margin */
        }

        .eyebrow {
            margin: 0 0 var(--ui-space-xxs);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
            color: var(--ui-ink-muted);
        }

        h2 {
            margin: 0;
            padding-inline-end: calc(20% - 48px); /* Carbon modal-header__heading */
            font: var(--ui-font-subhead);
        }

        header.has-actions {
            padding-inline-end: 96px;
        }

        .header-actions {
            position: absolute;
            top: 0;
            inset-inline-end: 48px;
            display: flex;
            align-items: center;
            height: 48px;
        }

        .close {
            position: absolute;
            top: 0;
            inset-inline-end: 0;
            display: grid;
            place-items: center;
            width: 48px;
            height: 48px;
            padding: 0;
            border: none;
            background: transparent;
            color: var(--ui-ink);
            cursor: pointer;
            transition: background-color var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--modal-close */
        }

        .close:hover {
            background-color: var(--ui-ghost-hover);
        }

        .close:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        .close svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }

        .body {
            flex: 1;
            overflow-y: auto;
            padding: var(--ui-space-xs) var(--ui-space-md) var(--ui-space-xxl);
            font: var(--ui-font-body);
            letter-spacing: var(--ui-tracking-body);
            outline: none;
        }

        .body:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* Carbon modal footer: 64px tall, buttons take half each (one button = right half), text at the top */
        footer {
            display: flex;
            justify-content: flex-end;
            min-height: 64px;
        }

        footer[hidden] {
            display: none;
        }

        ::slotted([slot='footer']) {
            flex: 0 1 50%;
            --ui-field-height-lg: 64px;
            --ui-button-align: flex-start;
            --ui-button-padding-top: 14px;
        }

        @media (forced-colors: active) {
            dialog {
                border: 1px solid CanvasText;
            }
        }
    `}observeSize(){this.resizeObserver??=new ResizeObserver(()=>{this.bodyScrollable=this.body.scrollHeight>this.body.clientHeight+1}),this.resizeObserver.observe(this.body),this.resizeObserver.observe(this.content)}show(){this.open=!0}close(){this.open=!1}requestClose(e){let t=new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.open=!1)}updated(e){e.has(`open`)&&(this.open&&!this.dialog.open?(this.dialog.showModal(),this.focusWhenReady(),this.savedOverflow=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`):!this.open&&this.dialog.open&&(this.dialog.close(),this.finishClose()))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.observeSize()}firstUpdated(){this.observeSize()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.finishClose()}async focusWhenReady(){let e=[...this.querySelectorAll(`*`)].map(e=>e.updateComplete).filter(e=>e!==void 0);e.length&&await Promise.all(e),this.open&&this.focusInitial()}focusInitial(){let e=this.querySelector(`[autofocus]`);if(e){e.focus();return}if(this.alert){this.focusLeastDestructive();return}let t=e=>{for(let t=e;t&&t!==this;t=t.parentElement)if(t.hasAttribute(`slot`))return!1;return!0},n=e=>e.matches(`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`)||!!e.shadowRoot?.delegatesFocus&&!e.hasAttribute(`disabled`),r=e=>(e.focus(),e.matches(`:focus-within`));if([...this.querySelectorAll(`*`)].find(e=>t(e)&&n(e)&&r(e)))return;let i=this.querySelector(`[slot="footer"]`);i&&r(i)||this.shadowRoot?.querySelector(`.close`)?.focus()}focusLeastDestructive(){if(this.querySelector(`[autofocus]`))return;let e=[...this.querySelectorAll(`[slot="footer"]`)];e[Ir(e.map(Lr))]?.focus()}finishClose(){this.savedOverflow!==null&&(document.documentElement.style.overflow=this.savedOverflow,this.savedOverflow=null,this.dispatchEvent(new Event(`ui-close`,{bubbles:!0,composed:!0})))}onCancel(e){e.preventDefault(),this.requestClose(`escape`)}onClose(){this.open=!1,this.finishClose()}onPointerDown(e){this.pointerDownOnBackdrop=e.target===this.dialog&&this.isOutside(e)}get closesOnOutsideClick(){return Pr(this.persistent,!!this.querySelector(`:scope > [slot="footer"]`))}onClick(e){this.closesOnOutsideClick&&this.pointerDownOnBackdrop&&e.target===this.dialog&&this.isOutside(e)&&this.requestClose(`backdrop`)}isOutside(e){return Fr(this.dialog.getBoundingClientRect(),e.clientX,e.clientY)}onFooterSlotChange(e){this.hasFooter=e.target.assignedElements().length>0,this.requestUpdate()}focus(e){if(!this.open){super.focus(e);return}let t=[...this.querySelectorAll(`[slot="footer"]`)];(t[Ir(t.map(Lr))]??t[0]??this.shadowRoot?.querySelector(`.close`)??this.dialog).focus(e)}get nameId(){return this.heading?this.headingId:this.slots.has(`label`)?this.labelId:void 0}render(){return b`
            <dialog
                part="dialog"
                role=${this.alert?`alertdialog`:S}
                aria-labelledby=${this.nameId??S}
                aria-label=${!this.nameId&&this.label?this.label:S}
                aria-describedby=${this.alert?this.bodyId:S}
                @cancel=${this.onCancel}
                @close=${this.onClose}
                @pointerdown=${this.onPointerDown}
                @click=${this.onClick}
            >
                <header part="header" class=${this.hasHeaderActions?`has-actions`:``}>
                    <div class="header-actions" part="header-actions">
                        <slot name="header-actions" @slotchange=${this.onHeaderActionsSlotChange}></slot>
                    </div>
                    ${this.slots.has(`label`)?b`<p class="eyebrow" part="label" id=${this.labelId}><slot name="label"></slot></p>`:S}
                    ${this.heading?b`<h2 id=${this.headingId} part="heading">${this.heading}</h2>`:S}
                    <button class="close" part="close-button" type="button" tabindex="0" aria-label=${this.closeLabel||this.localize.t.common.close} @click=${()=>this.requestClose(`close-button`)}>
                        <svg viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M24 9.4 22.6 8 16 14.6 9.4 8 8 9.4l6.6 6.6L8 22.6 9.4 24l6.6-6.6 6.6 6.6 1.4-1.4-6.6-6.6z" />
                        </svg>
                    </button>
                </header>
                <div
                    class="body"
                    part="body"
                    id=${this.bodyId}
                    tabindex=${this.bodyScrollable?0:S}
                    role=${this.bodyScrollable?`region`:S}
                    aria-labelledby=${this.bodyScrollable&&this.heading?this.headingId:S}
                >
                    <div class="content"><slot></slot></div>
                </div>
                <footer part="footer" ?hidden=${!this.hasFooter}>
                    <slot name="footer" @slotchange=${this.onFooterSlotChange}></slot>
                </footer>
            </dialog>
        `}};N([D({type:Boolean,reflect:!0})],B.prototype,`open`,void 0),N([D()],B.prototype,`heading`,void 0),N([D()],B.prototype,`label`,void 0),N([D({reflect:!0})],B.prototype,`size`,void 0),N([D({type:Boolean})],B.prototype,`persistent`,void 0),N([D({attribute:`close-label`})],B.prototype,`closeLabel`,void 0),N([D({type:Boolean,reflect:!0})],B.prototype,`alert`,void 0),N([O()],B.prototype,`bodyScrollable`,void 0),N([k(`dialog`)],B.prototype,`dialog`,void 0),N([k(`.body`)],B.prototype,`body`,void 0),N([k(`.content`)],B.prototype,`content`,void 0),N([O()],B.prototype,`hasHeaderActions`,void 0),B=N([E(`ui-modal`)],B);var Rr=b`<svg class="magnifier" part="magnifier" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M15 14.3 10.7 10a5.5 5.5 0 1 0-.7.7l4.3 4.3.7-.7ZM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
</svg>`,zr=b`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,V=class extends M{constructor(...e){super(...e),this.label=``,this.localize=new F(this),this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.disabled=!1,this.autocomplete=`off`,this.inputmode=``,this.enterkeyhint=``,this.clearLabel=``,this.required=!1,this.pattern=``,this.readonly=!1,this.fluid=!1,this.expandable=!1,this.expanded=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.ids=j(`ui-search`),this.defaultValue=``,this.onEnterKey=e=>Tn(this,e),this.onFocusOut=()=>{this.expandable&&this.expanded&&setTimeout(()=>{this.expanded&&this.value===``&&!this.matches(`:focus-within`)&&this.setExpanded(!1)})}}static{this.formAssociated=!0}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[On,h`
            :host {
                --_h: var(--ui-field-height-lg, 48px);

                display: block;
                font-family: var(--ui-font-family);
            }

            :host([size='sm']) {
                --_h: var(--ui-field-height-sm, 32px);
            }

            :host([size='md']) {
                --_h: var(--ui-field-height-md, 40px);
            }

            .search {
                position: relative;
                display: flex;
                align-items: center;
                width: 100%;
            }

            input {
                box-sizing: border-box;
                width: 100%;
                height: var(--_h);
                margin: 0;
                padding: 0 var(--_h);
                border: none;
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                text-overflow: ellipsis;
                appearance: none;
                outline: 2px solid transparent;
                outline-offset: -2px;
                /* Carbon search-input: fast-02 (110ms), not the text input's fast-01 */
                transition:
                    background-color var(--ui-duration-moderate) var(--ui-easing),
                    outline-color var(--ui-duration-moderate) var(--ui-easing);
            }

            input::-webkit-search-decoration,
            input::-webkit-search-cancel-button,
            input::-webkit-search-results-button,
            input::-webkit-search-results-decoration {
                display: none;
                appearance: none;
            }

            input::placeholder {
                color: var(--ui-ink-placeholder);
                opacity: 1;
            }

            input:focus {
                outline-color: var(--ui-focus);
            }

            input:disabled {
                border-bottom-color: transparent;
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
            }

            input:disabled::placeholder {
                color: var(--ui-ink-disabled);
            }

            .magnifier {
                position: absolute;
                z-index: 1;
                inset-inline-start: calc((var(--_h) - 16px) / 2);
                width: 16px;
                height: 16px;
                fill: var(--ui-ink-muted);
                pointer-events: none;
            }

            input:disabled ~ .magnifier {
                fill: var(--ui-ink-disabled);
            }

            .clear {
                position: absolute;
                inset-block: 0;
                inset-inline-end: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: var(--_h);
                padding: 0;
                border: 1px solid transparent;
                background: transparent;
                color: var(--ui-ink);
                cursor: pointer; /* no transition: Carbon's search-close appears and tints at once */
            }

            .clear svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }

            .clear:hover {
                background-color: var(--ui-ghost-hover);
            }

            .clear:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            .clear:active {
                background-color: var(--ui-ghost-active);
            }

            /*
             * Carbon: the field focused (it keeps focus while × is pressed), a hovered or pressed × keeps the field's 2px
             * focus line — its fill is drawn inside it, 2px in from the top, bottom and end, under the icon
             */
            .clear svg {
                position: relative;
                z-index: 1;
            }

            input:focus ~ .clear:hover,
            input:focus ~ .clear:active {
                background-color: transparent;
            }

            input:focus ~ .clear:hover::after,
            input:focus ~ .clear:active::after {
                content: '';
                position: absolute;
                inset-block: 2px;
                inset-inline: 0 2px;
                background-color: var(--ui-ghost-hover);
                pointer-events: none;
            }

            input:focus ~ .clear:active::after {
                background-color: var(--ui-ghost-active);
            }

            /* Carbon search-close--hidden: present for layout, invisible and unreachable while empty */
            .clear.hidden {
                opacity: 0;
                visibility: hidden;
            }

            input:disabled ~ .clear {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                background: transparent;
            }

            /* ---- expandable (Carbon cds--search--expandable) ---- */
            :host([expandable]) {
                transition: inline-size var(--ui-duration-fast) var(--ui-easing);
            }

            :host([expandable]:not([expanded])) {
                inline-size: var(--_h);
            }

            :host([expandable]:not([expanded])) input {
                padding: 0;
                border: 0;
                background: none;
                transition: none; /* Carbon: transform (fast-01), which this input never changes */
            }

            /* Carbon search--expandable.search--expanded: only the padding moves in, at fast-01 */
            :host([expandable][expanded]) input {
                transition: padding var(--ui-duration-fast) var(--ui-easing);
            }

            :host([expandable]) input::placeholder {
                opacity: 0;
                transition: opacity var(--ui-duration-fast) var(--ui-easing);
            }

            :host([expandable][expanded]) input::placeholder {
                opacity: 1;
            }

            .magnifier-tip {
                position: absolute;
                z-index: 1;
                inset-block-start: 0;
                inset-inline-start: 0;
            }

            :host([expanded]) .magnifier-tip,
            :host([disabled]) .magnifier-tip {
                pointer-events: none;
            }

            .magnifier-button {
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                inline-size: var(--_h);
                block-size: var(--_h);
                margin: 0;
                padding: 0;
                border: none;
                border-radius: 0;
                background: transparent;
                color: inherit;
                cursor: pointer;
                outline: 2px solid transparent;
                outline-offset: -2px;
            }

            .magnifier-button:hover {
                background-color: var(--ui-canvas-hover);
            }

            .magnifier-button:focus {
                outline-color: var(--ui-focus);
            }

            .magnifier-button .magnifier {
                position: static;
                fill: var(--ui-icon-primary);
            }

            :host([expanded]) .magnifier-button .magnifier {
                fill: var(--ui-icon-secondary);
            }

            :host([disabled]) .magnifier-button {
                cursor: not-allowed;
            }

            :host([disabled]) .magnifier-button:hover {
                background-color: transparent;
            }

            :host([disabled]) .magnifier-button .magnifier {
                fill: var(--ui-icon-disabled);
            }

            @media (prefers-reduced-motion: reduce) {
                :host([expandable]),
                :host([expandable]) input::placeholder {
                    transition: none;
                }
            }

            @media (forced-colors: active) {
                input {
                    border: 1px solid FieldText;
                }
                input:focus {
                    outline-color: Highlight;
                }
            }
        `,Hn,h`
            :host([data-fluid]) {
                --_h: 64px;
            }

            :host([data-fluid]) .label {
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
                color: var(--ui-ink-muted);
            }

            /* Carbon fluid search: visible label, magnifier at the end, clear button before it */
            :host([data-fluid]) input {
                padding: 32px 88px 13px var(--ui-space-md);
            }

            :host([data-fluid]) .magnifier {
                inset-block-start: 35px;
                inset-inline: auto var(--ui-space-md);
            }

            :host([data-fluid]) .clear {
                inset-block: 24px auto;
                block-size: 40px;
                inline-size: 40px;
                inset-inline-end: 48px;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&this.syncFormState()}willUpdate(){zn(this,this.fluid)}connectedCallback(){super.connectedCallback(),zn(this,this.fluid),this.addEventListener(`keydown`,this.onEnterKey),this.addEventListener(`focusout`,this.onFocusOut),this.hasUpdated||(this.defaultValue=this.value)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey),this.removeEventListener(`focusout`,this.onFocusOut)}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}updated(){this.syncFormState(),this.toggleAttribute(`data-has-value`,this.value!==``)}syncFormState(){gn(this.internals,this.isDisabled)||(this.internals.setFormValue(this.value),this.customValidityMessage?this.internals.setValidity({customError:!0},this.customValidityMessage,this.input):this.input.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.input.validity,this.input.validationMessage,this.input))}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||fn(this)}onInput(e){this.value=e.target.value}onChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onKeydown(e){e.key===`Escape`&&(this.value!==``&&!this.readonly?(e.stopPropagation(),this.clear()):this.expandable&&this.expanded&&(e.stopPropagation(),this.setExpanded(!1),this.updateComplete.then(()=>this.magnifierButton?.focus())))}setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:e},bubbles:!0,composed:!0})))}expand(){!this.expandable||this.expanded||this.isDisabled||(this.setExpanded(!0),this.updateComplete.then(()=>this.input.focus()))}onMagnifierKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),this.expand())}renderMagnifier(){return this.expandable?b`<ui-tooltip class="magnifier-tip" as-label text=${this.label||this.localize.t.field.search} placement="top">
            <button
                class="magnifier-button"
                part="magnifier-button"
                type="button"
                tabindex=${this.expanded?`-1`:`0`}
                aria-expanded=${this.expanded?`true`:`false`}
                aria-controls=${this.ids}
                ?disabled=${this.isDisabled}
                @click=${this.expand}
                @keydown=${this.onMagnifierKeydown}
            >
                ${Rr}
            </button>
        </ui-tooltip>`:Rr}clear(){this.isDisabled||this.readonly||this.value===``||(this.value=``,this.input.focus(),this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.dispatchEvent(new CustomEvent(`ui-clear`,{bubbles:!0,composed:!0})))}get empty(){return this.value===``||this.readonly}render(){let e=this.empty;return b`
            <div class="search" part="base" role="search" aria-labelledby="${this.ids}-label">
                <label class=${Vn(this,`fluid`)?`label`:`sr-only`} part="label" id="${this.ids}-label" for=${this.ids}>${this.label||this.localize.t.field.search}</label>
                <input
                    part="input"
                    id=${this.ids}
                    type="search"
                    .value=${this.value}
                    name=${this.name||S}
                    placeholder=${this.placeholder||this.localize.t.field.search||S}
                    autocomplete=${this.autocomplete}
                    inputmode=${this.inputmode||S}
                    enterkeyhint=${this.enterkeyhint||S}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    tabindex=${this.expandable&&!this.expanded?`-1`:S}
                    pattern=${this.pattern||S}
                    minlength=${this.minlength??S}
                    maxlength=${this.maxlength??S}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @keydown=${this.onKeydown}
                />
                ${this.renderMagnifier()}
                <!-- mousedown is cancelled so the input keeps focus: no stray native change before the clear -->
                <button
                    class="clear ${e?`hidden`:``}"
                    part="clear-button"
                    type="button"
                    aria-label=${this.clearLabel||this.localize.t.field.clearSearch}
                    title=${this.clearLabel||this.localize.t.field.clearSearch}
                    ?disabled=${this.isDisabled}
                    tabindex=${e?-1:S}
                    @mousedown=${e=>e.preventDefault()}
                    @click=${this.clear}
                >
                    ${zr}
                </button>
            </div>
        `}};N([D()],V.prototype,`label`,void 0),N([D()],V.prototype,`placeholder`,void 0),N([D()],V.prototype,`value`,void 0),N([D({reflect:!0})],V.prototype,`name`,void 0),N([D({reflect:!0})],V.prototype,`size`,void 0),N([D({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),N([D()],V.prototype,`autocomplete`,void 0),N([D()],V.prototype,`inputmode`,void 0),N([D()],V.prototype,`enterkeyhint`,void 0),N([D({attribute:`clear-label`})],V.prototype,`clearLabel`,void 0),N([D({type:Boolean,reflect:!0})],V.prototype,`required`,void 0),N([D()],V.prototype,`pattern`,void 0),N([D({type:Number})],V.prototype,`minlength`,void 0),N([D({type:Number})],V.prototype,`maxlength`,void 0),N([D({type:Boolean,reflect:!0})],V.prototype,`readonly`,void 0),N([D({type:Boolean,reflect:!0})],V.prototype,`fluid`,void 0),N([D({type:Boolean,reflect:!0})],V.prototype,`expandable`,void 0),N([D({type:Boolean,reflect:!0})],V.prototype,`expanded`,void 0),N([O()],V.prototype,`fieldsetDisabled`,void 0),N([k(`input`)],V.prototype,`input`,void 0),N([k(`.magnifier-button`)],V.prototype,`magnifierButton`,void 0),V=N([E(`ui-search`)],V);var Br=`(min-width: 1056px)`,Vr=b`<svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>`,Hr=b`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 14.8h16v1.2H2zm0-5.4h16v1.2H2zM2 4h16v1.2H2z" /></svg>`,Ur=b`<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M15 5.8 14.2 5 10 9.2 5.8 5 5 5.8 9.2 10 5 14.2l.8.8 4.2-4.2 4.2 4.2.8-.8L10.8 10z" /></svg>`,Wr=class extends M{constructor(...e){super(...e),this.href=`#main-content`,this.localize=new F(this)}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        a {
            position: absolute;
            inset-block-start: 0;
            inset-inline-start: 0;
            overflow: hidden;
            margin: -1px;
            padding: 0;
            border: 0;
            inline-size: 1px;
            block-size: 1px;
            clip-path: inset(50%);
            white-space: nowrap;
            font: var(--ui-font-body-sm);
            text-decoration: none;
        }

        a:focus {
            z-index: 9999;
            display: flex;
            box-sizing: border-box;
            align-items: center;
            padding: 0 1rem;
            margin: 0;
            border: 4px solid var(--ui-focus);
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            inline-size: auto;
            block-size: 48px;
            clip-path: none;
            outline: none;
        }
    `}onClick(e){Mr(e.currentTarget,this.href)&&e.preventDefault()}render(){return b`<a href=${this.href} @click=${this.onClick}><slot>${this.localize.t.common.skipToContent}</slot></a>`}};N([D()],Wr.prototype,`href`,void 0),Wr=N([E(`ui-skip-to-content`)],Wr);var Gr=class extends M{constructor(...e){super(...e),this.label=``}static{this.styles=h`
        :host {
            display: block;
            font-family: var(--ui-font-family);
        }

        header {
            position: fixed;
            inset-block-start: 0;
            inset-inline: 0;
            z-index: 8000;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 48px;
            border-block-end: 1px solid var(--ui-border-subtle-1);
            background-color: var(--ui-canvas);
        }

        @media (forced-colors: active) {
            header {
                border-block-end-color: CanvasText;
            }
        }
    `}render(){return b`<header part="base" aria-label=${A(this.label||void 0)}><slot></slot></header>`}};N([D()],Gr.prototype,`label`,void 0),Gr=N([E(`ui-header`)],Gr);var H=class extends M{constructor(...e){super(...e),this.href=`/`,this.prefix=``,this.target=``,this.rel=``}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: block;
            block-size: 100%;
        }

        a {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 100%;
            padding: 0 32px 0 16px;
            border: 2px solid transparent;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0.1px;
            text-decoration: none;
            outline: none;
            user-select: none;
            transition: border-color var(--ui-duration-moderate);
        }

        a:focus-visible {
            border-color: var(--ui-focus);
        }

        .prefix {
            font-weight: 400;
        }

        :host(:dir(ltr)) ::slotted(*),
        ::slotted(*) {
            display: contents;
        }
    `}render(){let e=this.prefix?b`<span class="prefix">${this.prefix}</span>&nbsp;`:S;return b`<a part="base" href=${this.href} target=${this.target||S} rel=${this.rel||S} @click=${R}>${e}<span><slot></slot></span></a>`}};N([D()],H.prototype,`href`,void 0),N([D()],H.prototype,`prefix`,void 0),N([D()],H.prototype,`target`,void 0),N([D()],H.prototype,`rel`,void 0),H=N([E(`ui-header-name`)],H);var U=class extends M{constructor(...e){super(...e),this.active=!1,this.collapsible=!1,this.openLabel=``,this.closeLabel=``,this.localize=new F(this)}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: flex;
            block-size: 100%;
        }

        @media (min-width: 1056px) {
            :host(:not([collapsible])) {
                display: none;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            inline-size: 48px;
            block-size: 48px;
            padding: 0;
            border: 1px solid transparent;
            background: transparent;
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate);
        }

        button:hover {
            background-color: var(--ui-canvas-hover);
        }

        button:active {
            background-color: var(--ui-canvas-active);
        }

        button:focus-visible {
            border-color: var(--ui-focus);
        }

        :host([active]) button {
            background-color: var(--ui-surface-1);
            border-block-end-color: transparent;
            border-inline-color: var(--ui-border-subtle-1);
        }

        svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }
    `}toggle(){this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{active:!this.active},bubbles:!0,composed:!0,cancelable:!0}))}render(){let e=this.active?this.closeLabel||this.localize.t.common.closeMenu:this.openLabel||this.localize.t.common.openMenu;return b`<button part="base" type="button" aria-label=${e} title=${e} aria-expanded=${this.active?`true`:`false`} @click=${this.toggle}>${this.active?Ur:Hr}</button>`}};N([D({type:Boolean,reflect:!0})],U.prototype,`active`,void 0),N([D({type:Boolean,reflect:!0})],U.prototype,`collapsible`,void 0),N([D({attribute:`open-label`})],U.prototype,`openLabel`,void 0),N([D({attribute:`close-label`})],U.prototype,`closeLabel`,void 0),U=N([E(`ui-header-menu-button`)],U);var Kr=class extends M{constructor(...e){super(...e),this.label=``,this.localize=new F(this)}static{this.styles=h`
        :host {
            display: none;
            position: relative;
            block-size: 100%;
        }

        @media (min-width: 1056px) {
            :host {
                display: block;
            }
        }

        :host([data-in-side-nav]) {
            display: block;
        }

        /* Carbon side-nav__header-navigation: the copy in the side nav is for small screens only; at lg the header shows the original */
        @media (min-width: 1056px) {
            :host([data-in-side-nav]) {
                display: none;
            }
        }

        :host::before {
            content: '';
            position: absolute;
            inset-block-start: 50%;
            inset-inline-start: 0;
            display: block;
            inline-size: 1px;
            block-size: 24px;
            background-color: var(--ui-border-subtle-1);
            transform: translateY(-50%);
        }

        :host([data-in-side-nav])::before {
            display: none;
        }

        /*
         * Carbon header__nav and header__menu-bar: full height, so the items and their current-page bar reach the
         * header's bottom edge; 16px after the divider — on this part, not :host, so a page-wide CSS reset can't remove it.
         */
        [part='base'] {
            block-size: 100%;
            padding-inline-start: 16px;
        }

        :host([data-in-side-nav]) [part='base'] {
            padding-inline-start: 0;
        }

        .bar {
            display: flex;
            block-size: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        :host([data-in-side-nav]) .bar {
            flex-direction: column;
        }
    `}render(){let e=b`<div class="bar" part="list" role="list"><slot></slot></div>`;return Vn(this,`inSideNav`)?b`<div part="base">${e}</div>`:b`<nav part="base" aria-label=${this.label||this.localize.t.common.mainNavigation}>${e}</nav>`}};N([D()],Kr.prototype,`label`,void 0),Kr=N([E(`ui-header-nav`)],Kr);var qr=class extends M{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: block;
            block-size: 100%;
        }

        a {
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 100%;
            padding: 0 16px;
            border: 2px solid transparent;
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: 0;
            text-decoration: none;
            white-space: nowrap;
            user-select: none;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate),
                color var(--ui-duration-moderate);
        }

        a:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-ink);
        }

        a:active {
            background-color: var(--ui-canvas-active);
            color: var(--ui-ink);
        }

        a:focus-visible {
            border-color: var(--ui-focus);
        }

        :host([current]) a {
            color: var(--ui-ink);
        }

        :host([current]) a::after {
            content: '';
            position: absolute;
            inset-block-end: -2px;
            inset-inline-start: -2px;
            inline-size: calc(100% + 4px);
            block-size: 3px;
            background-color: var(--ui-primary); /* border-interactive */
        }

        /* inside a dropdown / the side nav: 48px rows on the layer, bar on the start edge */
        :host([data-in-menu]) {
            block-size: 48px;
        }

        :host([data-in-menu]) a {
            background-color: var(--ui-surface-1);
        }

        :host([data-in-menu]) a:hover {
            background-color: var(--ui-layer-hover-1);
        }

        :host([data-in-menu][current]) a {
            background-color: var(--ui-layer-selected-1);
        }

        :host([data-in-menu][current]) a::after,
        :host([data-in-side-nav][current]) a::after {
            inset-block-start: -2px;
            inset-inline-start: -2px;
            inline-size: 3px;
            block-size: calc(100% + 4px);
        }

        .text {
            overflow: hidden;
            text-overflow: ellipsis;
        }

        @media (forced-colors: active) {
            :host([current]) a::after {
                background-color: Highlight;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&(this.parentElement?.closest(`ui-header-menu`))?.requestUpdate()}render(){return b`<a part="base" href=${this.href} target=${this.target||S} rel=${this.rel||S} aria-current=${A(this.current?`page`:void 0)} @click=${R}><span class="text"><slot></slot></span></a>`}};N([D()],qr.prototype,`href`,void 0),N([D({type:Boolean,reflect:!0})],qr.prototype,`current`,void 0),N([D()],qr.prototype,`target`,void 0),N([D()],qr.prototype,`rel`,void 0),qr=N([E(`ui-header-menu-item`)],qr);var W=class extends M{constructor(...e){super(...e),this.label=``,this.open=!1,this.current=!1,this.menuId=j(`ui-header-menu`),this.onDocumentPointerDown=e=>{e.composedPath().includes(this)||(this.open=!1)},this.onKeydown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.open=!1,this.trigger.focus())}}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            position: relative;
            display: block;
            block-size: 100%;
        }

        .trigger {
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            block-size: 100%;
            padding: 0 16px;
            border: 2px solid transparent;
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            user-select: none;
        }

        .trigger:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-ink);
        }

        .trigger:focus-visible {
            border-color: var(--ui-focus);
        }

        .trigger[aria-expanded='true'] {
            z-index: 8002;
            background-color: var(--ui-surface-1);
        }

        /* Carbon header__menu-item--current on the title: the 3px border-interactive bar (the text stays secondary, as Carbon's a.header__menu-item colour wins) */
        .trigger.current::after {
            content: '';
            position: absolute;
            inset-block-end: -2px;
            inset-inline-start: -2px;
            inline-size: calc(100% + 4px);
            block-size: 3px;
            background-color: var(--ui-primary); /* border-interactive */
        }

        /* side nav copy (Carbon side-nav__header-navigation): the bar on the start edge */
        :host([data-in-side-nav]) .trigger.current::after {
            inline-size: 3px;
            block-size: calc(100% + 4px);
        }

        @media (forced-colors: active) {
            .trigger.current::after {
                background-color: Highlight;
            }
        }

        .chevron {
            width: 16px;
            height: 16px;
            margin-inline-start: 8px;
            fill: var(--ui-icon-secondary);
            transition:
                transform var(--ui-duration-moderate),
                fill var(--ui-duration-moderate);
        }

        .trigger[aria-expanded='true'] .chevron {
            transform: rotate(180deg);
        }

        .menu {
            display: none;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .trigger[aria-expanded='true'] + .menu {
            position: absolute;
            z-index: 8001;
            inset-block-end: 0;
            inset-inline-start: 0;
            display: flex;
            flex-direction: column;
            inline-size: 200px;
            background-color: var(--ui-surface-1);
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 0.5);
            transform: translateY(100%);
        }

        :host([data-in-side-nav]) .trigger[aria-expanded='true'] + .menu {
            position: static;
            inline-size: 100%;
            box-shadow: none;
            transform: none;
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}disconnectedCallback(){super.disconnectedCallback(),this.stopListening()}updated(e){for(let e of this.items)e.toggleAttribute(`data-in-menu`,!0);e.has(`open`)&&(this.open?(document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.addEventListener(`keydown`,this.onKeydown,!0)):this.stopListening(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0})))}stopListening(){document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0),document.removeEventListener(`keydown`,this.onKeydown,!0)}onFocusOut(e){let t=e.relatedTarget;t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&(this.open=!1)}onItemClick(e){this.open&&e.target.closest(`ui-header-menu-item`)&&(this.open=!1,this.trigger.focus())}render(){return b`
            <button class="trigger ${this.current||!this.open&&this.items.some(e=>e.current)?`current`:``}" part="trigger" type="button" tabindex="0" aria-expanded=${this.open?`true`:`false`} aria-controls=${this.menuId} @click=${()=>this.open=!this.open} @focusout=${this.onFocusOut}>
                ${this.label}${Vr}
            </button>
            <div class="menu" part="menu" id=${this.menuId} role="list" aria-label=${this.label} @focusout=${this.onFocusOut} @click=${this.onItemClick}><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
        `}};N([D()],W.prototype,`label`,void 0),N([D({type:Boolean,reflect:!0})],W.prototype,`open`,void 0),N([D({type:Boolean,reflect:!0})],W.prototype,`current`,void 0),N([k(`.trigger`)],W.prototype,`trigger`,void 0),N([Xt({selector:`ui-header-menu-item`})],W.prototype,`items`,void 0),W=N([E(`ui-header-menu`)],W);var Jr=class extends M{constructor(...e){super(...e),this.label=``,this.localize=new F(this)}static{this.styles=h`
        :host {
            display: flex;
            flex: 1 1 0%;
            justify-content: flex-end;
            block-size: 100%;
        }
    `}render(){return b`<div role="group" aria-label=${this.label||this.localize.t.common.globalActions} style="display: flex; height: 100%"><slot></slot></div>`}};N([D()],Jr.prototype,`label`,void 0),Jr=N([E(`ui-header-global-bar`)],Jr);var G=class extends M{constructor(...e){super(...e),this.label=``,this.active=!1,this.tooltipPlacement=`bottom`,this.panel=``,this.onClick=()=>{let e=this.panelElement;e&&(e.expanded=!e.expanded)},this.onPanelToggle=e=>{this.panel&&e.target?.id===this.panel&&(this.active=e.detail.expanded)}}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: block;
            block-size: 100%;
        }

        ui-tooltip {
            display: block;
            block-size: 100%;
        }

        button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            inline-size: 48px;
            block-size: 48px;
            padding: 0;
            border: 1px solid transparent;
            background: transparent;
            color: var(--ui-icon-secondary);
            cursor: pointer;
            outline: none;
            transition:
                background-color var(--ui-duration-moderate),
                border-color var(--ui-duration-moderate);
        }

        button:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-icon-primary);
        }

        button:active {
            background-color: var(--ui-canvas-active);
            color: var(--ui-icon-primary);
        }

        button:focus-visible {
            border-color: var(--ui-focus);
        }

        :host([active]) button {
            background-color: var(--ui-surface-1);
            border-block-end-color: transparent;
            border-inline-color: var(--ui-border-subtle-1);
            color: var(--ui-icon-primary);
        }

        ::slotted(svg) {
            width: 20px;
            height: 20px;
            fill: currentColor;
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.onClick),this.getRootNode().addEventListener(`ui-toggle`,this.onPanelToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.onClick),this.getRootNode().removeEventListener(`ui-toggle`,this.onPanelToggle)}get panelElement(){return this.panel?this.getRootNode().getElementById(this.panel):null}render(){let e=this.panel!==``;return b`<ui-tooltip as-label text=${this.label} placement=${this.tooltipPlacement}>
            <button
                part="base"
                type="button"
                tabindex="0"
                aria-expanded=${A(e?String(this.active):void 0)}
                aria-pressed=${A(!e&&this.active?`true`:void 0)}
            ><slot></slot></button>
        </ui-tooltip>`}};N([D()],G.prototype,`label`,void 0),N([D({type:Boolean,reflect:!0})],G.prototype,`active`,void 0),N([D({attribute:`tooltip-placement`})],G.prototype,`tooltipPlacement`,void 0),N([D()],G.prototype,`panel`,void 0),G=N([E(`ui-header-global-action`)],G);var Yr=class extends M{constructor(...e){super(...e),this.expanded=!1,this.label=``,this.onDocumentPointerDown=e=>{if(!this.expanded)return;let t=e.composedPath();t.includes(this)||t.some(e=>e instanceof G&&e.panel!==``&&e.panel===this.id)||(this.expanded=!1)},this.returnFocus=null,this.onKeydown=e=>{e.key===`Escape`&&this.expanded&&(this.expanded=!1,this.returnFocus?.focus(),this.returnFocus=null)},this.onFocusOut=e=>{let t=e.relatedTarget;t&&!this.contains(t)&&(this.expanded=!1)}}static{this.styles=h`
        :host {
            position: fixed;
            inset-block: 48px 0;
            inset-inline-end: 0;
            z-index: 8000;
            box-sizing: border-box;
            inline-size: 0;
            overflow: hidden;
            background-color: var(--ui-surface-1);
            color: var(--ui-ink-muted);
            font-family: var(--ui-font-family);
            transition: inline-size var(--ui-duration-moderate) cubic-bezier(0.2, 0, 1, 0.9);
        }

        :host([expanded]) {
            inline-size: 256px;
            overflow-y: auto;
        }

        /* the side borders, on the content part rather than :host so a page-wide CSS reset can't remove them */
        [part='base'] {
            box-sizing: border-box;
            min-block-size: 100%;
            border-inline: 1px solid var(--ui-border-subtle-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.onKeydown),this.addEventListener(`focusout`,this.onFocusOut),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onKeydown),this.removeEventListener(`focusout`,this.onFocusOut),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0)}willUpdate(e){e.has(`expanded`)&&this.expanded&&(this.returnFocus=vn())}updated(e){e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return b`<div part="base" role=${A(this.label?`region`:void 0)} aria-label=${A(this.label||void 0)} ?hidden=${!this.expanded}><slot></slot></div>`}};N([D({type:Boolean,reflect:!0})],Yr.prototype,`expanded`,void 0),N([D()],Yr.prototype,`label`,void 0),Yr=N([E(`ui-header-panel`)],Yr);var Xr=class extends M{constructor(...e){super(...e),this.label=``}static{this.styles=h`
        :host {
            display: flex;
            flex-direction: column;
            color: var(--ui-ink-muted);
        }

        /* 16px above the first item, on the list rather than :host so a page-wide CSS reset can't remove it */
        [role='list'] {
            padding-block-start: 16px;
        }

        ::slotted(hr) {
            display: block;
            inline-size: 224px;
            block-size: 1px;
            margin: 8px 16px;
            border: none;
            background: var(--ui-border-subtle-1);
        }
    `}render(){return b`<div role="list" aria-label=${A(this.label||void 0)}><slot></slot></div>`}};N([D()],Xr.prototype,`label`,void 0),Xr=N([E(`ui-switcher`)],Xr);var K=class extends M{constructor(...e){super(...e),this.href=`#`,this.selected=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: block;
            inline-size: 100%;
            block-size: 32px;
        }

        a {
            display: block;
            box-sizing: border-box;
            block-size: 32px;
            padding: 6px 16px;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-emphasis);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            text-decoration: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        a:hover {
            background: var(--ui-layer-hover-1);
            color: var(--ui-ink);
        }

        a:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        a:active {
            background: var(--ui-layer-active-1);
            color: var(--ui-ink);
        }

        :host([selected]) a,
        :host([selected]) a:hover {
            background: var(--ui-layer-selected-1);
            color: var(--ui-ink);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return b`<a href=${this.href} target=${this.target||S} rel=${this.rel||S} aria-current=${A(this.selected?`page`:void 0)} @click=${R}><slot></slot></a>`}};N([D()],K.prototype,`href`,void 0),N([D({type:Boolean,reflect:!0})],K.prototype,`selected`,void 0),N([D()],K.prototype,`target`,void 0),N([D()],K.prototype,`rel`,void 0),K=N([E(`ui-switcher-item`)],K);var q=class extends M{constructor(...e){super(...e),this.expanded=!1,this.rail=!1,this.fixed=!1,this.collapsible=!1,this.label=``,this.localize=new F(this),this.returnFocus=null,this.onMenuButtonToggle=e=>{!e.defaultPrevented&&e.target instanceof U&&this.setExpanded(e.detail.active)},this.onMediaChange=()=>this.requestUpdate(),this.onKeydown=e=>{e.key===`Escape`&&this.expanded&&(this.setExpanded(!1),this.returnFocus?.focus(),this.returnFocus=null)}}static{this.styles=h`
        :host {
            display: contents;
            font-family: var(--ui-font-family);
        }

        nav {
            position: fixed;
            inset-block: 48px 0;
            inset-inline-start: 0;
            z-index: 8000;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            inline-size: 0;
            max-inline-size: 256px;
            overflow: hidden;
            background-color: var(--ui-canvas);
            color: var(--ui-ink-muted);
            outline: none;
            /* Carbon .cds--side-nav: 110ms with the exit easing */
            transition:
                inline-size var(--ui-duration-moderate) var(--ui-easing-exit),
                transform var(--ui-duration-moderate) var(--ui-easing-exit);
            will-change: inline-size;
        }

        @media (min-width: 1056px) {
            nav {
                inline-size: 256px;
            }
        }

        :host([rail]) nav {
            inline-size: 48px;
        }

        :host([expanded]) nav,
        :host([data-hover-expanded]) nav {
            inline-size: 256px;
        }

        :host([fixed]) nav {
            inline-size: 256px;
        }

        /* Carbon side-nav--hidden (isPersistent={false}): closed on large screens too until expanded */
        @media (min-width: 1056px) {
            :host([collapsible]:not([expanded], [fixed], [rail])) nav {
                inline-size: 0;
            }
        }

        :host([fixed]:not([expanded])) nav {
            transform: translateX(-256px);
        }

        :host(:dir(rtl)[fixed]:not([expanded])) nav {
            transform: translateX(256px);
        }

        .overlay {
            position: fixed;
            inset-block-start: 48px;
            inset-inline-start: 0;
            inline-size: 0;
            block-size: 0;
            background-color: transparent;
            opacity: 0;
            /* Carbon .cds--side-nav__overlay: $transition-expansion (300ms) with $standard-easing (no tokens for either) */
            transition:
                opacity 300ms cubic-bezier(0.5, 0, 0.1, 1),
                background-color 300ms cubic-bezier(0.5, 0, 0.1, 1);
        }

        @media (prefers-reduced-motion: reduce) {
            .overlay {
                transition: none;
            }
        }

        @media (max-width: 1055.98px) {
            :host([expanded]:not([fixed])) .overlay {
                z-index: 6000;
                inline-size: 100vw;
                block-size: 100vh;
                background-color: var(--ui-overlay);
                opacity: 1;
            }
        }

        @media (forced-colors: active) {
            nav {
                border-inline-end: 1px solid CanvasText;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`keydown`,this.onKeydown),this.mediaQuery??=matchMedia(Br),this.mediaQuery.addEventListener(`change`,this.onMediaChange),this.root=this.getRootNode(),this.root.addEventListener(`ui-toggle`,this.onMenuButtonToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onKeydown),this.mediaQuery?.removeEventListener(`change`,this.onMediaChange),this.root?.removeEventListener(`ui-toggle`,this.onMenuButtonToggle),this.root=void 0}syncMenuButtons(){for(let e of this.root?.querySelectorAll?.(`ui-header-menu-button`)??[])e.active=this.expanded,this.collapsible&&(e.collapsible=!0)}get open(){return this.expanded||Vn(this,`hoverExpanded`)||this.fixed||!this.rail&&!this.collapsible&&!!this.mediaQuery?.matches}willUpdate(e){e.has(`expanded`)&&this.expanded&&(this.returnFocus=vn())}updated(e){(e.has(`expanded`)||e.has(`collapsible`))&&this.syncMenuButtons();let t=this.open;for(let e of this.querySelectorAll(`ui-side-nav-link, ui-side-nav-menu, ui-side-nav-menu-item, ui-header-nav, ui-header-menu, ui-header-menu-item`))e.dataset.inSideNav===void 0&&(e.toggleAttribute(`data-in-side-nav`,!0),e.requestUpdate?.()),e.dataset.collapsed!==void 0===t&&(e.toggleAttribute(`data-collapsed`,!t),e.requestUpdate?.())}setExpanded(e){this.expanded!==e&&(this.expanded=e,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:e},bubbles:!0,composed:!0})))}hoverExpand(e){this.rail&&(this.toggleAttribute(`data-hover-expanded`,e),this.requestUpdate())}onFocusOut(e){let t=e.relatedTarget;t&&(this.contains(t)||this.shadowRoot?.contains(t))||(this.hoverExpand(!1),!this.fixed&&this.expanded&&(this.collapsible||!this.mediaQuery?.matches)&&this.setExpanded(!1))}render(){return b`
            <div class="overlay" part="overlay" @click=${()=>this.setExpanded(!1)}></div>
            <nav
                part="base"
                aria-label=${this.label||this.localize.t.common.sideNavigation}
                tabindex="-1"
                ?inert=${!this.open&&!this.rail}
                @pointerenter=${()=>this.hoverExpand(!0)}
                @pointerleave=${()=>this.hoverExpand(!1)}
                @focusin=${()=>this.hoverExpand(!0)}
                @focusout=${this.onFocusOut}
            >
                <slot @slotchange=${()=>this.requestUpdate()}></slot>
            </nav>
        `}};N([D({type:Boolean,reflect:!0})],q.prototype,`expanded`,void 0),N([D({type:Boolean,reflect:!0})],q.prototype,`rail`,void 0),N([D({type:Boolean,reflect:!0})],q.prototype,`fixed`,void 0),N([D({type:Boolean,reflect:!0})],q.prototype,`collapsible`,void 0),N([D()],q.prototype,`label`,void 0),q=N([E(`ui-side-nav`)],q);var Zr=class extends M{static{this.styles=h`
        :host {
            display: block;
            flex: 1 1 0%;
            overflow: hidden auto;
        }

        /* 16px above the first item, on the list rather than :host so a page-wide CSS reset can't remove it */
        .list {
            margin: 0;
            padding: 16px 0 0;
            list-style: none;
        }
    `}render(){return b`<div class="list" role="list"><slot></slot></div>`}};Zr=N([E(`ui-side-nav-items`)],Zr);var Qr=class extends M{static{this.styles=h`
        :host {
            display: block;
        }

        hr {
            block-size: 1px;
            margin: 8px 16px;
            border: none;
            background-color: var(--ui-border-subtle-1);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return b`<hr />`}};Qr=N([E(`ui-side-nav-divider`)],Qr);var $r=h`
    :host {
        display: block;
        inline-size: 100%;
        overflow: hidden;
    }

    a {
        position: relative;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        min-block-size: 32px;
        padding: 0 16px;
        color: var(--ui-ink-muted);
        text-decoration: none;
        outline: none;
        transition:
            color var(--ui-duration-moderate),
            background-color var(--ui-duration-moderate),
            outline var(--ui-duration-moderate);
    }

    :host([large]) a {
        block-size: 48px;
    }

    a:hover {
        background-color: var(--ui-canvas-hover);
    }

    a:hover .text {
        color: var(--ui-ink);
    }

    a:focus-visible {
        outline: 2px solid var(--ui-focus);
        outline-offset: -2px;
    }

    :host([current]) a {
        background-color: var(--ui-canvas-selected);
    }

    :host([current]) a::before {
        content: '';
        position: absolute;
        inset-block: 0;
        inset-inline-start: 0;
        inline-size: 3px;
        background-color: var(--ui-primary); /* border-interactive */
    }

    :host([current]) .text {
        color: var(--ui-ink);
        font-weight: 600;
    }

    .icon {
        display: none;
        flex: 0 0 16px;
        align-items: center;
        justify-content: center;
        margin-inline-end: 24px;
    }

    :host([data-icon]) .icon {
        display: flex;
    }

    ::slotted([slot='icon']) {
        width: 16px;
        height: 16px;
        fill: var(--ui-icon-secondary);
    }

    :host([current]) ::slotted([slot='icon']) {
        fill: var(--ui-icon-primary);
    }

    .text {
        overflow: hidden;
        color: var(--ui-ink-muted);
        font: var(--ui-font-body-sm);
        line-height: 20px;
        letter-spacing: 0.1px;
        text-overflow: ellipsis;
        white-space: nowrap;
        user-select: none;
    }

    @media (forced-colors: active) {
        :host([current]) a::before {
            background-color: Highlight;
        }
    }
`,J=class extends M{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``,this.large=!1,this.slots=new Ar(this)}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=$r}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(){this.toggleAttribute(`data-icon`,this.slots.has(`icon`))}render(){let e=Vn(this,`collapsed`)&&!this.closest(`ui-side-nav`)?.hasAttribute(`rail`);return b`<a part="base" href=${this.href} target=${this.target||S} rel=${this.rel||S} aria-current=${A(this.current?`page`:void 0)} tabindex=${e?-1:0} @click=${R}>
            <span class="icon"><slot name="icon"></slot></span><span class="text"><slot></slot></span>
        </a>`}};N([D()],J.prototype,`href`,void 0),N([D({type:Boolean,reflect:!0})],J.prototype,`current`,void 0),N([D()],J.prototype,`target`,void 0),N([D()],J.prototype,`rel`,void 0),N([D({type:Boolean,reflect:!0})],J.prototype,`large`,void 0),J=N([E(`ui-side-nav-link`)],J);var ei=class extends M{constructor(...e){super(...e),this.label=``,this.expanded=!1,this.large=!1,this.slots=new Ar(this),this.menuId=j(`ui-side-nav-menu`)}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=h`
        :host {
            display: block;
            inline-size: 100%;
            overflow: hidden;
        }

        .trigger {
            position: relative;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            inline-size: 100%;
            block-size: 32px;
            padding: 0 16px;
            border: none;
            background: transparent;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-emphasis);
            line-height: 18px; /* heading-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            text-align: start;
            cursor: pointer;
            outline: none;
            user-select: none;
            transition:
                color var(--ui-duration-moderate),
                background-color var(--ui-duration-moderate);
        }

        :host([large]) .trigger {
            block-size: 48px;
        }

        .trigger:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-ink);
        }

        .trigger:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        :host([data-active]) .trigger[aria-expanded='false'] {
            background-color: var(--ui-canvas-selected);
            color: var(--ui-ink);
        }

        :host([data-active]) .trigger[aria-expanded='false']::before {
            content: '';
            position: absolute;
            inset-block: 0;
            inset-inline-start: 0;
            inline-size: 3px;
            background-color: var(--ui-primary);
        }

        :host([data-active]) .title {
            color: var(--ui-ink);
            font-weight: 600;
        }

        .icon {
            display: none;
            flex: 0 0 16px;
            align-items: center;
            justify-content: center;
            margin-inline-end: 24px;
        }

        :host([data-icon]) .icon {
            display: flex;
        }

        ::slotted([slot='icon']) {
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
        }

        :host([data-active]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        .title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .chevron-box {
            display: flex;
            flex: 1;
            justify-content: flex-end;
        }

        .chevron {
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
            transition: transform var(--ui-duration-moderate);
        }

        .trigger[aria-expanded='true'] .chevron {
            transform: rotate(180deg);
        }

        .menu {
            display: block;
            max-block-size: 0;
            margin: 0;
            padding: 0;
            list-style: none;
            visibility: hidden;
        }

        .trigger[aria-expanded='true'] + .menu {
            max-block-size: 1500px;
            visibility: inherit;
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){this.toggleAttribute(`data-icon`,this.slots.has(`icon`));let t=[...this.querySelectorAll(`:scope > ui-side-nav-menu-item`)];for(let e of t)e.toggleAttribute(`data-parent-icon`,this.slots.has(`icon`));this.toggleAttribute(`data-active`,t.some(e=>e.current)),e.has(`expanded`)&&e.get(`expanded`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}render(){return b`
            <button class="trigger" part="trigger" type="button" aria-expanded=${this.expanded?`true`:`false`} aria-controls=${this.menuId} @click=${()=>this.expanded=!this.expanded}>
                <span class="icon"><slot name="icon"></slot></span>
                <span class="title">${this.label}</span>
                <span class="chevron-box">${Vr}</span>
            </button>
            <div class="menu" part="menu" id=${this.menuId} role="list"><slot @slotchange=${()=>this.requestUpdate()}></slot></div>
        `}};N([D()],ei.prototype,`label`,void 0),N([D({type:Boolean,reflect:!0})],ei.prototype,`expanded`,void 0),N([D({type:Boolean,reflect:!0})],ei.prototype,`large`,void 0),ei=N([E(`ui-side-nav-menu`)],ei);var Y=class extends M{constructor(...e){super(...e),this.href=`#`,this.current=!1,this.target=``,this.rel=``}static{this.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[$r,h`
        a {
            block-size: 32px;
            padding-inline-start: 32px;
        }

        :host([data-parent-icon]) a {
            padding-inline-start: 72px;
        }

        .text {
            font-weight: 400;
        }
    `]}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}updated(e){e.has(`current`)&&(this.parentElement?.closest(`ui-side-nav-menu`))?.requestUpdate()}render(){return b`<a part="base" href=${this.href} target=${this.target||S} rel=${this.rel||S} aria-current=${A(this.current?`page`:void 0)} @click=${R}><span class="text"><slot></slot></span></a>`}};N([D()],Y.prototype,`href`,void 0),N([D({type:Boolean,reflect:!0})],Y.prototype,`current`,void 0),N([D()],Y.prototype,`target`,void 0),N([D()],Y.prototype,`rel`,void 0),Y=N([E(`ui-side-nav-menu-item`)],Y);var ti=class extends M{static{this.styles=h`
        /*
         * No margin or padding on :host — a page-wide CSS reset would remove them. Beside the side nav the host
         * is shifted and narrowed instead (--_nav); the 48px under the header is the part's top margin, which
         * collapses through the host, and the 32px padding is the part's.
         */
        :host {
            --_nav: 0px;

            position: relative;
            display: block;
            inset-inline-start: var(--_nav);
            inline-size: calc(100% - var(--_nav));
            background-color: var(--ui-canvas);
            color: var(--ui-ink);
            font-family: var(--ui-font-family);
        }

        .base {
            margin-block-start: 48px;
            padding: 32px;
        }

        :host([data-side-nav='fixed']) {
            --_nav: 256px;
        }

        :host([data-side-nav='rail']) {
            --_nav: 48px;
        }

        @media (min-width: 1056px) {
            :host([data-side-nav='default']) {
                --_nav: 256px;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.id||=`main-content`,this.hasAttribute(`role`)||this.setAttribute(`role`,`main`),this.syncSideNav()}disconnectedCallback(){super.disconnectedCallback(),this.navObserver?.disconnect(),this.navObserver=void 0}syncSideNav(){let e=this.getRootNode().querySelector?.(`ui-side-nav`)??this.ownerDocument.querySelector(`ui-side-nav`);e&&(this.navObserver||(this.navObserver=new MutationObserver(()=>this.syncSideNav()),this.navObserver.observe(e,{attributes:!0,attributeFilter:[`rail`,`fixed`,`collapsible`]})),this.dataset.sideNav=ni(e))}render(){return b`<div class="base"><slot @slotchange=${()=>this.syncSideNav()}></slot></div>`}};ti=N([E(`ui-content`)],ti);function ni(e){return e.fixed?`fixed`:e.rail?`rail`:e.collapsible?`collapsible`:`default`}function ri(e,{orientation:t=`horizontal`,rtl:n=!1}){return t===`vertical`?{ArrowDown:1,ArrowUp:-1}[e]:t===`both`?{ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e]:{ArrowRight:n?-1:1,ArrowLeft:n?1:-1}[e]}function ii(e,t,n,r={}){if(e===0)return;if(r.homeEnd??!0){if(n===`Home`)return 0;if(n===`End`)return e-1}let i=ri(n,r);if(i!==void 0)return t<0?i>0?0:e-1:(t+i+e)%e}var X=class extends M{constructor(...e){super(...e),this.name=``,this.label=``,this.selected=!1,this.disabled=!1,this.iconOnly=!1,this.tooltipPlacement=`top`,this.focusable=!1}static{this.styles=h`
        :host {
            position: relative;
            display: inline-flex;
            box-sizing: border-box;
            inline-size: 100%;
            overflow: hidden;
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            white-space: nowrap;
            text-align: start;
            cursor: pointer;
            outline: none;
            user-select: none;
        }

        /*
         * The item's box — padding, borders, the divider (::before) and the selection fill (::after) — is
         * drawn by this part filling the host, not by :host, so a page-wide CSS reset can't remove it.
         */
        .base {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            box-sizing: border-box;
            min-inline-size: 0;
            padding: var(--ui-space-xs) var(--ui-space-md);
            border-block: 1px solid var(--_border, var(--ui-border-inverse));
            border-radius: inherit;
            background-color: transparent;
        }

        :host([data-size='lg']) .base {
            padding-inline: 14px;
        }

        :host(:first-of-type) {
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
        }

        :host(:first-of-type) .base {
            box-shadow: inset 1px 0 0 0 var(--_border, var(--ui-border-inverse));
        }

        :host(:last-of-type) {
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
        }

        :host(:last-of-type) .base {
            box-shadow: inset -1px 0 0 0 var(--_border, var(--ui-border-inverse));
        }

        /* selection fill (Carbon ::after) */
        .base::after {
            content: '';
            position: absolute;
            inset-block-start: 0;
            inset-inline-start: 0;
            display: block;
            inline-size: 100%;
            block-size: 100%;
            border-radius: 4px;
            background-color: var(--_selected, var(--ui-layer-selected-inverse));
            transform: scaleY(0);
            transform-origin: bottom;
        }

        /* divider between items (Carbon ::before): hidden on the first item, on hovered/focused/selected items and on the item after them */
        .base::before {
            content: '';
            position: absolute;
            z-index: 2;
            inset-inline-start: 0;
            display: block;
            inline-size: 1px;
            block-size: 16px;
            background-color: var(--_divider, var(--ui-hairline));
        }

        :host(:first-of-type) .base::before,
        :host(:hover) .base::before,
        :host(:focus-visible) .base::before,
        :host([selected]) .base::before,
        :host([data-no-divider]) .base::before {
            background-color: transparent;
        }

        :host(:hover),
        :host(:active) {
            z-index: 3;
            color: var(--ui-ink);
        }

        :host(:hover) .base,
        :host(:active) .base {
            background-color: var(--_hover, var(--ui-ghost-hover));
        }

        :host([selected]) {
            z-index: 3;
            color: var(--_selected-ink, var(--ui-inverse-ink));
        }

        :host([selected]) .base {
            border: 0;
        }

        :host([selected]:hover) .base {
            background-color: transparent;
        }

        :host([selected]) .base::after {
            transform: scaleY(1);
        }

        :host(:focus-visible) .base::after {
            box-shadow:
                inset 0 0 0 2px var(--ui-focus),
                inset 0 0 0 3px var(--ui-focus-inset);
        }

        :host(:focus-visible:not([selected])) .base::before {
            inline-size: 100%;
            block-size: 100%;
            border-radius: 4px;
            box-shadow: inset 0 0 0 2px var(--ui-focus);
        }

        :host(:focus-visible:not([selected])) .base::after {
            background-color: var(--ui-focus-inset);
            transform: scaleY(1);
        }

        :host(:focus-visible:not([selected]):hover) .base::after {
            border-radius: 0;
            background-color: var(--_hover, var(--ui-ghost-hover));
            box-shadow: none;
        }

        :host([disabled]) {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        :host([disabled]) .base {
            border-color: var(--ui-border-disabled);
            background-color: transparent;
        }

        :host([disabled]) .base::after {
            display: none;
        }

        :host([disabled]) .base::before {
            background-color: var(--ui-border-disabled);
        }

        :host(:first-of-type[disabled]) .base,
        :host(:last-of-type[disabled]) .base {
            box-shadow: none;
        }

        :host([selected][disabled]) .base {
            background-color: var(--ui-button-disabled);
        }

        /* low contrast (Carbon --low-contrast): grey track, white selected pill with a hairline, bold selected text */
        :host([data-low-contrast]) {
            --_border: var(--ui-hairline-strong);
            --_divider: var(--ui-hairline-strong);
            --_hover: var(--ui-content-switcher-background-hover);
            --_selected: var(--ui-content-switcher-selected);
            --_selected-ink: var(--ui-ink);
        }

        :host([data-low-contrast][selected]) {
            font-weight: 600; /* heading-compact-01 */
        }

        :host([data-low-contrast][selected]) .base::after {
            box-shadow: inset 0 0 0 1px var(--ui-border-inverse);
        }

        :host([data-low-contrast][selected]:focus-visible) .base::after {
            box-shadow: inset 0 0 0 2px var(--ui-focus);
        }

        :host([data-low-contrast]:focus-visible:not([selected])) .base::after {
            background-color: var(--ui-content-switcher-background);
        }

        :host([data-low-contrast][selected][disabled]) {
            border-radius: 4px;
        }

        :host([data-low-contrast][selected][disabled]) .base {
            border: 1px solid var(--ui-border-disabled);
            background-color: var(--ui-content-switcher-selected);
        }

        /* icon only: a square button */
        :host([icon-only]) {
            inline-size: var(--_size, var(--ui-field-height-md));
        }

        :host([icon-only]) .base {
            padding: 0;
            justify-content: center;
        }

        :host([icon-only][data-size='sm']) {
            --_size: var(--ui-field-height-sm);
        }

        :host([icon-only][data-size='lg']) {
            --_size: var(--ui-field-height-lg);
        }

        .label {
            position: relative;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: var(--ui-space-xs);
            max-inline-size: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        ::slotted([slot='icon']) {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            fill: var(--ui-icon-secondary);
        }

        :host([icon-only]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        :host([data-size='lg']) ::slotted([slot='icon']) {
            width: 20px;
            height: 20px;
        }

        :host(:hover) ::slotted([slot='icon']),
        :host(:focus-visible) ::slotted([slot='icon']) {
            fill: var(--ui-icon-primary);
        }

        :host([selected]) ::slotted([slot='icon']) {
            fill: var(--_selected-icon, var(--ui-icon-inverse));
        }

        :host([data-low-contrast]) {
            --_selected-icon: var(--ui-icon-primary);
        }

        :host([disabled]) ::slotted([slot='icon']) {
            fill: var(--ui-icon-disabled);
        }

        /* the tooltip anchors to the host and shows its bubble in the top layer; it takes no room here */
        ui-tooltip {
            position: absolute;
            cursor: auto;
            white-space: normal;
            user-select: auto;
        }

        @media (forced-colors: active) {
            :host([selected]) .base::after {
                background-color: Highlight;
            }

            :host(:focus-visible) {
                outline: 2px solid CanvasText;
                outline-offset: -2px;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`)}updated(){this.tabIndex=this.focusable&&!this.disabled?0:-1,this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`),Sn(this,`aria-label`,this.iconOnly&&this.label?this.label:null)}render(){let e=b`<span class="base"><span class="label" part="label"><slot name="icon"></slot><slot></slot></span></span>`;return!this.iconOnly||!this.label?e:b`${e}<ui-tooltip
                as-label
                part="tooltip"
                text=${this.label}
                placement=${this.tooltipPlacement}
                .anchor=${this}
                @click=${e=>e.stopPropagation()}
            ></ui-tooltip>`}};N([D()],X.prototype,`name`,void 0),N([D()],X.prototype,`label`,void 0),N([D({type:Boolean,reflect:!0})],X.prototype,`selected`,void 0),N([D({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),N([D({type:Boolean,reflect:!0,attribute:`icon-only`})],X.prototype,`iconOnly`,void 0),N([D({attribute:`tooltip-placement`})],X.prototype,`tooltipPlacement`,void 0),N([D({type:Boolean,attribute:!1})],X.prototype,`focusable`,void 0),X=N([E(`ui-content-switcher-item`)],X);var Z=class extends M{constructor(...e){super(...e),this.selectedIndex=0,this.size=`md`,this.selectionMode=`automatic`,this.lowContrast=!1,this.iconOnly=!1,this.hovered=null,this.focused=null}static{this.styles=h`
        :host {
            display: flex;
            justify-content: space-evenly;
            box-sizing: border-box;
            inline-size: 100%;
            block-size: var(--ui-field-height-md);
            border-radius: 4px;
            outline: 1px solid var(--ui-border-inverse);
            outline-offset: -1px;
            font-family: var(--ui-font-family);
        }

        :host([size='sm']) {
            block-size: var(--ui-field-height-sm);
        }

        :host([size='lg']) {
            block-size: var(--ui-field-height-lg);
        }

        /* Carbon .cds--content-switcher:has(.cds--content-switcher-btn:disabled); an attribute, as Chromium matches no :has() inside :host() */
        :host([data-has-disabled]) {
            outline-color: var(--ui-border-disabled);
        }

        :host([icon-only]) {
            inline-size: fit-content;
            justify-content: flex-start;
        }

        :host([low-contrast]) {
            background-color: var(--ui-content-switcher-background);
            outline-color: var(--ui-hairline-strong);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`tablist`)}updated(){this.sync()}enabledItems(){return this.items.filter(e=>!e.disabled)}sync(){let e=this.items,t=e[this.selectedIndex],n=t&&!t.disabled?t:this.enabledItems()[0];e.forEach((t,r)=>{t.selected=r===this.selectedIndex,t.focusable=t===n,t.dataset.size=this.size,t.toggleAttribute(`data-low-contrast`,this.lowContrast);let i=e[r-1];t.toggleAttribute(`data-no-divider`,!!i&&(i.selected||i===this.hovered||i===this.focused))}),this.iconOnly=e.length>0&&e.every(e=>e.iconOnly),this.toggleAttribute(`data-has-disabled`,e.some(e=>e.disabled))}itemOf(e){return e?.closest?.(`ui-content-switcher-item`)??null}select(e){let t=this.items.indexOf(e);t<0||e.disabled||t===this.selectedIndex||(this.selectedIndex=t,this.sync(),this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{index:t,name:e.name},bubbles:!0,composed:!0})))}onClick(e){let t=this.itemOf(e.target);t&&!t.disabled&&(t.focus(),this.select(t))}nextItem(e,t){let n=this.enabledItems(),r=n.indexOf(e),i=ii(n.length,r,t,{rtl:getComputedStyle(this).direction===`rtl`});return i===void 0?void 0:n[i]}onKeydown(e){let t=this.itemOf(e.target);if(!t||t.disabled)return;if(e.key===`Enter`||e.key===` `){e.preventDefault(),this.select(t);return}let n=this.nextItem(t,e.key);n&&(e.preventDefault(),n.focus(),this.selectionMode===`automatic`&&this.select(n))}onPointer(e){this.hovered=e.type===`pointerover`?this.itemOf(e.target):null,this.sync()}onFocus(e){this.focused=e.type===`focusin`?this.itemOf(e.target):null,this.sync()}focus(e){(this.items.find(e=>e.focusable)??this.enabledItems()[0])?.focus(e)}render(){return b`<slot
            @slotchange=${()=>this.sync()}
            @click=${this.onClick}
            @keydown=${this.onKeydown}
            @pointerover=${this.onPointer}
            @pointerout=${this.onPointer}
            @focusin=${this.onFocus}
            @focusout=${this.onFocus}
        ></slot>`}};N([D({type:Number,reflect:!0,attribute:`selected-index`})],Z.prototype,`selectedIndex`,void 0),N([D({reflect:!0})],Z.prototype,`size`,void 0),N([D({attribute:`selection-mode`})],Z.prototype,`selectionMode`,void 0),N([D({type:Boolean,reflect:!0,attribute:`low-contrast`})],Z.prototype,`lowContrast`,void 0),N([D({type:Boolean,reflect:!0,attribute:`icon-only`})],Z.prototype,`iconOnly`,void 0),N([Xt({selector:`ui-content-switcher-item`})],Z.prototype,`items`,void 0),Z=N([E(`ui-content-switcher`)],Z);var ai=[`light`,`dark`,`system`],oi=[`white`,`g10`,`g90`,`g100`],si=`ui-theme`,ci={light:`white`,dark:`g100`},li=`(prefers-color-scheme: dark)`,ui=`ui-theme-change`,Q=globalThis,di=e=>ai.includes(e),fi=e=>oi.includes(e);function pi(e,t){return{light:fi(e)?e:ci.light,dark:fi(t)?t:ci.dark}}function mi(e,t,n=ci){return e===`dark`||e===`system`&&t?n.dark:n.light}function hi(e){if(e===`auto`)return`system`;if(e===`white`||e===`g10`)return`light`;if(e===`g90`||e===`g100`)return`dark`}function gi(){return!!Q.matchMedia?.(li).matches}function _i(e){if(e)try{let t=Q.localStorage?.getItem(e);return di(t)?t:void 0}catch{return}}function vi(e,t){if(e)try{Q.localStorage?.setItem(e,t)}catch{}}function yi(e,t){return _i(e)??(di(t)?t:void 0)??hi(Q.document?.documentElement.dataset.theme)??`light`}function bi(e,t=ci){let n=mi(e,gi(),t),r=Q.document?.documentElement;return r&&r.dataset.theme!==n&&(r.dataset.theme=n),n}function xi(e){let t=Q.matchMedia?.(li);return t?(t.addEventListener(`change`,e),()=>t.removeEventListener(`change`,e)):()=>{}}var Si={light:kt`<svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.5 1h1v2.5h-1z"/><path d="M10.8 3.4h2.5v1h-2.5z" transform="rotate(-45 12.041 3.923)"/><path d="M12.5 7.5H15v1h-2.5z"/><path d="M11.6 10.8h1v2.5h-1z" transform="rotate(-45 12.075 12.04)"/><path d="M7.5 12.5h1V15h-1z"/><path d="M2.7 11.6h2.5v1H2.7z" transform="rotate(-45 3.96 12.078)"/><path d="M1 7.5h2.5v1H1z"/><path d="M3.4 2.7h1v2.5h-1z" transform="rotate(-45 3.925 3.961)"/><path d="M8 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-1C6.3 5 5 6.3 5 8s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/></svg>`,dark:kt`<svg slot="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M7.2 2.3c-1 4.4 1.7 8.7 6.1 9.8h.2c-1.1 1.2-2.7 1.8-4.3 1.8h-.2C5.6 13.8 3 11 3.2 7.7c0-2.4 1.6-4.6 4-5.4M8 1C4.1 1.6 1.5 5.3 2.1 9.1c.6 3.3 3.4 5.8 6.8 5.9h.3c2.3 0 4.4-1.1 5.8-3 .2-.2.1-.6-.1-.7-.1-.1-.2-.1-.3-.1-3.9-.3-6.7-3.8-6.4-7.6.1-.6.2-1.2.4-1.8.1-.3 0-.6-.3-.7C8.1 1 8.1 1 8 1z"/></svg>`,system:kt`<svg slot="icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM18 28h-4v-4h4Zm10-6H4V6h24Z"/></svg>`},$=class extends M{constructor(...e){super(...e),this.lightTheme=`white`,this.darkTheme=`g100`,this.storageKey=si,this.size=`md`,this.lowContrast=!1,this.tooltipPlacement=`top`,this.label=``,this.localize=new F(this),this.quiet=!0,this.onPageChange=e=>{let t=e.detail?.mode;e.target!==this&&di(t)&&t!==this.value&&(this.quiet=!0,this.value=t)},this.onStorage=e=>{if(!this.storageKey||e.key!==this.storageKey)return;let t=_i(this.storageKey);t&&t!==this.value&&(this.quiet=!0,this.value=t)}}static{this.styles=h`
        :host {
            display: inline-block;
            vertical-align: top;
        }
    `}connectedCallback(){super.connectedCallback();let e=yi(this.storageKey,this.value);e!==this.value&&(this.quiet=!0,this.value=e),this.stopWatching=xi(()=>{this.value===`system`&&this.apply()}),document.addEventListener(ui,this.onPageChange),globalThis.addEventListener(`storage`,this.onStorage)}disconnectedCallback(){super.disconnectedCallback(),this.stopWatching?.(),document.removeEventListener(ui,this.onPageChange),globalThis.removeEventListener(`storage`,this.onStorage)}updated(e){super.updated(e),(e.has(`value`)||e.has(`lightTheme`)||e.has(`darkTheme`))&&(this.apply(),!this.quiet&&e.has(`value`)&&this.value&&vi(this.storageKey,this.value),this.quiet=!1)}apply(){return this.value?bi(this.value,pi(this.lightTheme,this.darkTheme)):void 0}onChange(e){e.stopPropagation();let t=e.detail.name;if(!di(t))return;this.quiet=!0,this.value=t,vi(this.storageKey,t);let n=bi(t,pi(this.lightTheme,this.darkTheme));this.dispatchEvent(new CustomEvent(ui,{detail:{mode:t,theme:n},bubbles:!0,composed:!0}))}render(){let e=this.localize.t.common,t={light:e.themeLight,dark:e.themeDark,system:e.themeSystem};return b`<ui-content-switcher
            part="switcher"
            aria-label=${this.label||e.theme}
            size=${this.size}
            ?low-contrast=${this.lowContrast}
            selected-index=${Math.max(0,ai.indexOf(this.value??`light`))}
            @ui-change=${this.onChange}
        >
            ${ai.map(e=>b`<ui-content-switcher-item part="item" icon-only name=${e} label=${t[e]} tooltip-placement=${this.tooltipPlacement}>${Si[e]}</ui-content-switcher-item>`)}
        </ui-content-switcher>`}};N([D({reflect:!0})],$.prototype,`value`,void 0),N([D({attribute:`light-theme`})],$.prototype,`lightTheme`,void 0),N([D({attribute:`dark-theme`})],$.prototype,`darkTheme`,void 0),N([D({attribute:`storage-key`})],$.prototype,`storageKey`,void 0),N([D({reflect:!0})],$.prototype,`size`,void 0),N([D({type:Boolean,attribute:`low-contrast`})],$.prototype,`lowContrast`,void 0),N([D({attribute:`tooltip-placement`})],$.prototype,`tooltipPlacement`,void 0),N([D()],$.prototype,`label`,void 0),$=N([E(`ui-theme-switcher`)],$);export{Tn as $,Jn as A,Bn as B,N as C,h as Ct,Xn as D,Qn as E,e as Et,kn as F,jn as G,Dn as H,Hn as I,Rn as J,Fn as K,Vn as L,pn as M,vn as N,Zn as O,yn as P,bn as Q,fn as R,vr as S,kt as St,$n as T,t as Tt,mn as U,Mn as V,hn as W,Sn as X,_n as Y,On as Z,Tr as _,S as _t,di as a,rn as at,Er as b,b as bt,pi as c,Qt as ct,Nr as d,Xt as dt,zn as et,Fr as f,k as ft,wr as g,T as gt,Ar as h,E as ht,yi as i,un as it,gn as j,Yn as k,xi as l,$t as lt,R as m,D as mt,si as n,on as nt,_i as o,A as ot,Ir as p,O as pt,Pn as q,bi as r,ln as rt,vi as s,en as st,ui as t,j as tt,ii as u,Zt as ut,Or as v,x as vt,M as w,qe as wt,F as x,Ht as xt,Dr as y,At as yt,Cn as z};
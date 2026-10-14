import{C as e,Ct as t,P as n,_t as r,bt as i,ft as a,ht as o,mt as s,pt as c,st as l,w as u,x as d}from"./theme-switcher-BKi8EfZd.js";import"./tabs-CbT56wPv.js";import"./icon-button-Cj1wsc-u.js";import{t as f}from"./motion-C95bcdt7.js";import{i as p,n as m,r as h,t as g}from"./action-set-ChequQBs.js";var _=i`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,v=i`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7 12.3 3.2 8.5H15v-1H3.2L7 3.7 6.3 3 1.3 8l5 5z" /></svg>`;function y(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function b(e,t=[]){let n=e instanceof HTMLSlotElement?e.assignedElements({flatten:!0}):[...e.shadowRoot?.children??e.children??[]];for(let e of n)!(e instanceof HTMLElement)||e.hidden||e.inert||(e.matches(`input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`)&&!e.matches(`[tabindex="-1"]`)||e.shadowRoot?.delegatesFocus&&!e.hasAttribute(`disabled`)?t.push(e):b(e,t));return t}var x=class extends u{constructor(...e){super(...e),this.open=!1,this.placement=`right`,this.size=`md`,this.heading=``,this.labelText=``,this.slideIn=!1,this.includeOverlay=!1,this.preventCloseOnClickOutside=!1,this.selectorInitialFocus=``,this.selectorPageContent=``,this.hideCloseButton=!1,this.closeIconDescription=``,this.closeIconTooltipAlignment=`left`,this.navigationBackIconDescription=``,this.currentStep=0,this.condensedActions=!1,this.animateTitle=!0,this.shown=!1,this.animated=!1,this.hasSubtitle=!1,this.hasToolbar=!1,this.actionCount=0,this.localize=new d(this),this.launcher=null,this.pushedPage=null,this.savedOverflow=null,this.onScroll=e=>{if(!this.animated||!this.panel)return;let t=this.distance()||1,n=Math.min(e.target.scrollTop,t)/t;this.panel.style.setProperty(`--_progress`,String(n))},this.onWindowKeydown=e=>{e.key===`Escape`&&!e.defaultPrevented&&!this.slideIn&&this.requestClose(`escape`)},this.onKeydown=e=>{if(e.key!==`Tab`||this.slideIn||!this.panel)return;let t=b(this.panel);if(!t.length)return;let n=t[0],r=t.at(-1);e.shiftKey&&n.matches(`:focus-within`)?(e.preventDefault(),r.focus()):!e.shiftKey&&r.matches(`:focus-within`)&&(e.preventDefault(),n.focus())}}static{this.styles=[g(`.actions`),t`
            :host {
                display: contents;
            }

            .overlay {
                position: fixed;
                z-index: 6000;
                inset: 0;
                background-color: var(--ui-overlay);
            }

            .panel {
                --_progress: 0;
                --_title-pad-end: var(--ui-space-xl);
                --_title-pad-bottom: var(--ui-space-md);
                --_actions-height: 64px;

                position: fixed;
                z-index: 9000;
                inset-block-start: var(--ui-side-panel-top, 3rem);
                display: grid;
                box-sizing: border-box;
                block-size: calc(100% - var(--ui-side-panel-top, 3rem));
                inline-size: clamp(16rem, var(--_size), 100%);
                min-inline-size: 16rem;
                max-inline-size: 100%;
                grid-template-rows: auto 1fr auto;
                background-color: var(--ui-layer-1);
                color: var(--ui-ink);
                box-shadow: 0 2px 4px var(--ui-overlay);
                /* a containing block for the fixed back and close buttons */
                transform: translateX(0);
            }

            .panel *,
            .panel *::before {
                box-sizing: border-box;
            }

            @media (min-width: 42rem) {
                .panel {
                    max-inline-size: 75vw;
                }
            }

            .panel[data-placement='right'] {
                inset-inline-end: 0;
                border-inline-start: 1px solid var(--ui-border-subtle-2);
            }

            .panel[data-placement='left'] {
                inset-inline-start: 0;
                border-inline-end: 1px solid var(--ui-border-subtle-2);
            }

            .panel.slide-in {
                box-shadow: none;
            }

            .panel.animated {
                grid-template-rows: 1fr auto;
            }

            .panel.toolbar {
                --_title-pad-end: 64px;
            }

            .panel.condensed {
                --_actions-height: 48px;
            }

            /* animated title: header and content scroll together; static: the content scrolls under the header */
            .scroller {
                display: contents;
            }

            .animated .scroller,
            .body.scrolls {
                overflow: hidden auto;
            }

            .animated .scroller {
                display: grid;
                grid-template-rows: auto 1fr;
            }

            .header {
                position: relative;
                z-index: 4;
                min-block-size: 40px;
                padding: var(--ui-space-md) var(--ui-space-md) 0;
                background-color: var(--ui-layer-1);
            }

            .header.has-heading {
                min-block-size: auto;
            }

            .header.has-subtitle {
                --_title-pad-bottom: var(--ui-space-xs);
            }

            .header.has-back {
                padding-block-start: var(--ui-space-xl);
            }

            .header.has-back.md-buttons {
                padding-block-start: 40px;
            }

            /* the line under the header: there from the start when static, faded in by the scroll when animated */
            .header::before {
                position: absolute;
                z-index: 9;
                inset-block-end: 0;
                inset-inline-start: 0;
                inline-size: 100%;
                block-size: 1px;
                background-color: var(--ui-border-subtle-2);
                content: '';
                opacity: 1;
            }

            .header:not(.has-heading)::before,
            .header.has-toolbar::before {
                content: none;
            }

            .animated .header {
                position: sticky;
                inset-block-start: calc(-1px * var(--_distance, 0));
            }

            .animated .header::before {
                opacity: var(--_progress);
            }

            .header.has-toolbar {
                margin-block-end: var(--ui-space-xs);
            }

            .label {
                margin: 0;
                padding-inline-end: var(--_title-pad-end);
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
                opacity: calc(1 - var(--_progress));
            }

            .title {
                position: relative;
                z-index: 4;
                background-color: var(--ui-layer-1);
                border-block-end: var(--_title-pad-bottom) solid transparent;
            }

            .animated .title {
                position: sticky;
                inset-block-start: var(--ui-space-md);
            }

            h2 {
                margin: 0;
                padding-inline-end: var(--_title-pad-end);
                font: var(--ui-font-heading-03);
            }

            .title-text {
                opacity: calc(1 - var(--_progress));
            }

            .collapsed {
                position: absolute;
                inset-block-start: 0;
                font: var(--ui-font-heading-compact-02);
                opacity: var(--_progress);
            }

            .no-label .title-text {
                transform: translateY(calc(-1 * var(--ui-space-md) * var(--_progress)));
            }

            .no-label .collapsed {
                transform: translateY(calc(var(--ui-space-md) * (1 - var(--_progress))));
            }

            .subtitle {
                margin: 0;
                padding-block-end: var(--ui-space-md);
                padding-inline-end: var(--_title-pad-end);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                opacity: calc(1 - var(--_progress));
            }

            .subtitle[hidden],
            .toolbar-row[hidden] {
                display: none;
            }

            .toolbar-row {
                position: sticky;
                z-index: 4;
                display: flex;
                align-items: center;
                background-color: var(--ui-layer-1);
            }

            .toolbar-row ::slotted(:first-child) {
                margin-inline-end: var(--ui-space-xs);
            }

            .close-area {
                position: fixed;
                z-index: 10;
                inset-block-start: 0;
                inset-inline-end: 0;
                display: flex;
            }

            .back {
                position: fixed;
                z-index: 5;
                inset-block-start: 0;
                inset-inline-start: 0;
            }

            .body {
                min-block-size: 0;
                padding: 0 var(--ui-space-md) var(--ui-space-md);
            }

            .header.has-toolbar + .body {
                padding-block-start: var(--ui-space-xs);
            }

            .actions {
                position: sticky;
                inset-block-end: 0;
                inline-size: 100%;
                background-color: var(--ui-layer-1);
                border-block-start: 1px solid var(--ui-border-subtle-2);
            }

            .actions ::slotted(*) {
                --ui-field-height-lg: var(--_actions-height);
            }

            .actions[hidden] {
                display: none;
            }

            @media (forced-colors: active) {
                .panel {
                    border: 1px solid CanvasText;
                }
            }
        `]}disconnectedCallback(){super.disconnectedCallback(),this.release(),clearTimeout(this.closeTimer);for(let e of this.shadowRoot?.getAnimations()??[])e.cancel();this.shown=!1}get actionSize(){return this.size===`xs`?`sm`:this.size}duration(e){return f(getComputedStyle(this).getPropertyValue(e))}willUpdate(e){e.has(`open`)&&this.open&&(clearTimeout(this.closeTimer),this.shown=!0)}updated(e){super.updated(e),e.has(`currentStep`)&&(this.animated?this.scroller:this.body)?.scrollTo?.({top:0}),e.has(`size`)&&this.layout(),this.open&&!e.has(`open`)&&this.measureTitle(),e.has(`open`)&&(e.get(`open`)!==void 0||this.open)&&(this.open?this.opened():this.closed())}async opened(){this.launcher=y(),this.includeOverlay&&(this.savedOverflow=document.body.style.overflow,document.body.style.overflow=`hidden`),globalThis.addEventListener(`keydown`,this.onWindowKeydown),this.resizeObserver=typeof ResizeObserver>`u`?void 0:new ResizeObserver(()=>this.measureTitle()),this.panel&&this.resizeObserver?.observe(this.panel);let e=this.slide(!0);this.pushPage(),this.layout();let t=[...this.querySelectorAll(`*`)].map(e=>e.updateComplete).filter(e=>e!==void 0);await Promise.all(t),this.measureTitle(),await e?.finished.catch(()=>void 0),this.open&&this.focusInitial()}closed(){this.release(),this.pushPage(),this.slide(!1);let e=this.launcher;this.launcher=null,e?.isConnected&&e.focus(),this.closeTimer=setTimeout(()=>{this.shown=!1,this.dispatchEvent(new Event(`ui-close`,{bubbles:!0,composed:!0}))},this.duration(`--ui-duration-moderate-01`))}release(){globalThis.removeEventListener(`keydown`,this.onWindowKeydown),this.resizeObserver?.disconnect(),this.savedOverflow!==null&&(document.body.style.overflow=this.savedOverflow,this.savedOverflow=null)}slide(e){let t=this.panel;if(!t||typeof t.animate!=`function`||document.hidden)return;let n=this.duration(`--ui-duration-moderate-01`);if(n<=0)return;let r={opacity:0,transform:`translateX(${this.placement===`left`?`-320px`:`320px`})`},i={opacity:1,transform:`translateX(0)`},a=e?`cubic-bezier(0, 0, 0.38, 0.9)`:`cubic-bezier(0.2, 0, 1, 0.9)`,o=e?`none`:`forwards`;return this.overlay?.animate([{opacity:+!e},{opacity:+!!e}],{duration:n,easing:a,fill:o}),t.animate(e?[r,i]:[i,r],{duration:n,easing:a,fill:o})}pageContent(){return this.getRootNode().querySelector(this.selectorPageContent)??document.querySelector(this.selectorPageContent)}pushPage(){if(!this.slideIn||!this.selectorPageContent)return;let e=this.open?this.pageContent():this.pushedPage;if(this.pushedPage=this.open?e:null,!e)return;let t=this.open?`${this.panel?.offsetWidth??0}px`:``;e.style.transition=`margin var(--ui-duration-moderate-02) var(--ui-easing)`,e.style.marginInlineStart=this.placement===`left`?t:``,e.style.marginInlineEnd=this.placement===`right`?t:``}layout(){let e=this.actionsEl?.querySelector(`slot`);if(!this.actionsEl||!e)return;let t=h(e);p(this,t,this.actionSize),m(this.actionsEl,t,this.actionSize)}distance(){let e=this.titleEl,t=this.hasToolbar&&e?e.offsetHeight-e.clientHeight:0;return(this.labelEl?.offsetHeight??0)+(this.hasSubtitle?this.subtitleEl?.offsetHeight??0:0)+t}measureTitle(){let e=this.panel;if(!e||!this.open)return;let t=this.distance();e.style.setProperty(`--_distance`,String(t));let n=this.duration(`--ui-duration-moderate-02`)>0,r=this.animated?this.scroller:this.body,i=r?r.scrollHeight-r.clientHeight:0;this.animated=this.animateTitle&&n&&!!this.heading&&t>0&&(!!this.labelText||this.hasToolbar||this.hasSubtitle)&&i>=t+16,this.animated||e.style.setProperty(`--_progress`,`0`)}focusInitial(){let e=this.selectorInitialFocus?this.querySelector(this.selectorInitialFocus):null;e?e.focus():!this.slideIn&&this.panel&&b(this.panel)[0]?.focus()}requestClose(e){let t=new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)&&(this.open=!1)}onOverlayClick(){this.preventCloseOnClickOutside||this.requestClose(`overlay`)}onBack(){this.dispatchEvent(new Event(`ui-navigate-back`,{bubbles:!0,composed:!0}))}onActionsChange(e){this.actionCount=h(e.target).length,this.layout()}renderTitle(){let e=this.animated?i`<h2 class="collapsed" aria-hidden="true">${this.heading}</h2>`:r;return i`<div class=${l({title:!0,"no-label":!this.labelText})}><h2 class="title-text" part="heading">${this.heading}</h2>${e}</div>`}renderHeader(){let e=this.localize.t.common,t=this.actionCount>0&&/l/.test(this.size)?`md`:`sm`,n={header:!0,"has-heading":!!this.heading,"has-subtitle":this.hasSubtitle,"has-back":this.currentStep>0,"has-toolbar":this.hasToolbar,"md-buttons":t===`md`};return i`<div class=${l(n)} part="header">
            ${this.currentStep>0?i`<ui-icon-button class="back" kind="ghost" size=${t} label=${this.navigationBackIconDescription||e.back} tooltip-placement="bottom-start" @click=${this.onBack}>${v}</ui-icon-button>`:r}
            <slot name="above-title"></slot>
            ${this.heading&&this.labelText?i`<p class="label">${this.labelText}</p>`:r}
            ${this.heading?this.renderTitle():r}
            <div class="close-area">
                ${this.hideCloseButton?r:i`<ui-icon-button class="close" kind="ghost" size=${t} label=${this.closeIconDescription||e.close} tooltip-placement=${this.closeIconTooltipAlignment} @click=${()=>this.requestClose(`close-button`)}>${_}</ui-icon-button>`}
            </div>
            <p class="subtitle" ?hidden=${!this.hasSubtitle}><slot name="subtitle" @slotchange=${e=>this.hasSubtitle=e.target.assignedNodes().length>0}></slot></p>
            <slot name="below-title"></slot>
            <div class="toolbar-row" ?hidden=${!this.hasToolbar}>
                <slot name="action-toolbar" @slotchange=${e=>this.hasToolbar=e.target.assignedElements().length>0}></slot>
            </div>
        </div>`}render(){if(!this.shown)return r;let e={panel:!0,animated:this.animated,"slide-in":this.slideIn,toolbar:this.hasToolbar,condensed:this.condensedActions},t={xs:`16rem`,sm:`20rem`,md:`30rem`,lg:`40rem`,xl:`65rem`,"2xl":`80rem`},n=this.includeOverlay?i`<div class="overlay" part="overlay" @click=${this.onOverlayClick}></div>`:r;return i`${n}
            <ui-layer
                class=${l(e)}
                part="panel"
                level="1"
                role="complementary"
                aria-label=${this.heading||r}
                data-placement=${this.placement}
                style="--_size: ${t[this.size]??t.md}"
                @keydown=${this.onKeydown}
            >
                <div class="scroller" @scroll=${this.onScroll}>
                    ${this.renderHeader()}
                    <div class=${l({body:!0,scrolls:!this.animated})} part="body" @scroll=${this.onScroll}><slot @slotchange=${()=>this.measureTitle()}></slot></div>
                </div>
                <div class="actions" part="actions" ?hidden=${this.actionCount===0} ?data-condensed=${this.condensedActions}><slot name="actions" @slotchange=${this.onActionsChange}></slot></div>
            </ui-layer>`}};e([s({type:Boolean,reflect:!0})],x.prototype,`open`,void 0),e([s({reflect:!0})],x.prototype,`placement`,void 0),e([s({reflect:!0})],x.prototype,`size`,void 0),e([s()],x.prototype,`heading`,void 0),e([s({attribute:`label-text`})],x.prototype,`labelText`,void 0),e([s({type:Boolean,reflect:!0,attribute:`slide-in`})],x.prototype,`slideIn`,void 0),e([s({type:Boolean,reflect:!0,attribute:`include-overlay`})],x.prototype,`includeOverlay`,void 0),e([s({type:Boolean,attribute:`prevent-close-on-click-outside`})],x.prototype,`preventCloseOnClickOutside`,void 0),e([s({attribute:`selector-initial-focus`})],x.prototype,`selectorInitialFocus`,void 0),e([s({attribute:`selector-page-content`})],x.prototype,`selectorPageContent`,void 0),e([s({type:Boolean,attribute:`hide-close-button`})],x.prototype,`hideCloseButton`,void 0),e([s({attribute:`close-icon-description`})],x.prototype,`closeIconDescription`,void 0),e([s({attribute:`close-icon-tooltip-alignment`})],x.prototype,`closeIconTooltipAlignment`,void 0),e([s({attribute:`navigation-back-icon-description`})],x.prototype,`navigationBackIconDescription`,void 0),e([s({type:Number,attribute:`current-step`})],x.prototype,`currentStep`,void 0),e([s({type:Boolean,reflect:!0,attribute:`condensed-actions`})],x.prototype,`condensedActions`,void 0),e([s({attribute:`animate-title`,converter:n})],x.prototype,`animateTitle`,void 0),e([c()],x.prototype,`shown`,void 0),e([c()],x.prototype,`animated`,void 0),e([c()],x.prototype,`hasSubtitle`,void 0),e([c()],x.prototype,`hasToolbar`,void 0),e([c()],x.prototype,`actionCount`,void 0),e([a(`.panel`)],x.prototype,`panel`,void 0),e([a(`.overlay`)],x.prototype,`overlay`,void 0),e([a(`.scroller`)],x.prototype,`scroller`,void 0),e([a(`.body`)],x.prototype,`body`,void 0),e([a(`.label`)],x.prototype,`labelEl`,void 0),e([a(`.subtitle`)],x.prototype,`subtitleEl`,void 0),e([a(`.title`)],x.prototype,`titleEl`,void 0),e([a(`.actions`)],x.prototype,`actionsEl`,void 0),x=e([o(`ui-side-panel`)],x);
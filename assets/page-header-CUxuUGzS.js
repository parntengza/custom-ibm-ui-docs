import{C as e,Ct as t,P as n,Z as r,_t as i,bt as a,ft as o,ht as s,mt as c,pt as l,st as u,w as d,x as f}from"./theme-switcher-BKi8EfZd.js";import"./button-BVtMUNlp.js";import"./icon-button-Cj1wsc-u.js";import"./tag-0gjkxrgN.js";import"./popover-B5Yx-N5R.js";import"./overflow-menu-BtpSVDpJ.js";import{t as p}from"./repeat-Chi44jDn.js";import{t as m}from"./overflow-Ctnez5Id.js";import{t as h}from"./breadcrumb-DHA8UVKl.js";import{n as g,t as _}from"./static-html-DNRYTeVn.js";import"./truncated-text-CNzhScYk.js";function v(e){let t=e.style.flexShrink;e.style.flexShrink=`0`;let n=e.getBoundingClientRect().width;return e.style.flexShrink=t,n}var y=class extends d{constructor(...e){super(...e),this.frame=0,this.schedule=()=>{cancelAnimationFrame(this.frame),this.frame=requestAnimationFrame(()=>this.measure())}}connectedCallback(){super.connectedCallback(),this.observer=new ResizeObserver(this.schedule),this.observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),cancelAnimationFrame(this.frame)}};function b(e,t){return e.getAttribute(`label`)||e.textContent?.trim()||`Action ${t+1}`}var x=class extends y{constructor(...e){super(...e),this.overflowLabel=``,this.collapsed=[],this.localize=new f(this),this.onPick=e=>{this.collapsed[Number(e.detail.value)]?.click()}}static{this.styles=t`
        :host {
            display: flex;
            flex: 1 1 auto;
            align-items: center;
            min-inline-size: 0;
            max-inline-size: 100%;
        }

        ::slotted(*) {
            flex-shrink: 0;
        }

        ::slotted([data-hidden]) {
            display: none !important;
        }

        /* Carbon: the buttons from the start, the menu at the end */
        ui-overflow-menu {
            flex-shrink: 0;
            margin-inline-start: auto;
        }

        ui-overflow-menu[hidden] {
            display: none;
        }
    `}measure(){let e=[...this.children].filter(e=>e instanceof HTMLElement);for(let t of e)delete t.dataset.hidden;let t=e.map(v),n=m({container:this.clientWidth,sizes:t,offset:48,keepFirst:!1}),r=e.filter((e,t)=>(e.toggleAttribute(`data-hidden`,t>=n),t>=n));(r.length!==this.collapsed.length||r.some((e,t)=>e!==this.collapsed[t]))&&(this.collapsed=r)}render(){return a`<slot @slotchange=${this.schedule}></slot>
            <ui-overflow-menu part="overflow" size="md" placement="bottom-end" label=${this.overflowLabel||this.localize.t.common.moreActions} ?hidden=${this.collapsed.length===0} @ui-select=${this.onPick}>
                ${this.collapsed.map((e,t)=>a`<ui-menu-item label=${b(e,t)} value=${String(t)}></ui-menu-item>`)}
            </ui-overflow-menu>`}};e([c({attribute:`overflow-label`})],x.prototype,`overflowLabel`,void 0),e([l()],x.prototype,`collapsed`,void 0),x=e([s(`ui-page-header-actions`)],x);var S=10,C=class extends y{constructor(...e){super(...e),this.tags=[],this.shown=1/0,this.popoverOpen=!1,this.modalOpen=!1,this.search=``,this.localize=new f(this),this.openModal=()=>{this.popoverOpen=!1,this.search=``,this.modalOpen=!0}}static{this.styles=[r,t`
            :host {
                display: flex;
                justify-content: flex-end;
                min-inline-size: 0;
                inline-size: 100%;
            }

            .tags {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: var(--ui-space-xs);
                inline-size: 100%;
                min-inline-size: 0;
                white-space: nowrap;
            }

            .tags > ui-tag {
                flex-shrink: 0;
            }

            [data-hidden],
            .more[hidden] {
                display: none;
            }

            .more {
                flex-shrink: 0;
            }

            /* Carbon: the hidden tags one under the other, 4px apart, 16px in */
            .list {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-xxs);
                padding: var(--ui-space-md);
            }

            /* Carbon: each hidden tag as wide as the popover, its text centred in label-02 (14px) */
            .list > ui-tag {
                display: flex;
                margin: 0;
            }

            .list > ui-tag::part(base) {
                justify-content: center;
                inline-size: 100%;
                max-inline-size: none;
                font: var(--ui-font-body-sm);
                line-height: 18px; /* label-02: 14 × 1.28572 */
                letter-spacing: var(--ui-tracking-body);
            }

            /* on the high-contrast box: the inverse link colour */
            .view-all {
                --ui-link: var(--ui-link-inverse);
                --ui-blue-60: var(--ui-link-inverse); /* the ghost button's hover text */

                display: block;
                margin-block-start: var(--ui-space-xs);
            }

            .search {
                display: block;
                margin-block-end: var(--ui-space-md);
            }

            .all {
                display: flex;
                flex-wrap: wrap;
                gap: var(--ui-space-xxs) var(--ui-space-xs);
            }
        `]}updated(e){e.has(`tags`)&&this.schedule()}get hiddenTags(){return this.tags.slice(this.shown)}measure(){let e=this.renderRoot.querySelector(`.tags`),t=this.renderRoot.querySelector(`.more`);if(!e||!t)return;let n=[...e.querySelectorAll(`:scope > ui-tag`)];for(let e of n)delete e.dataset.hidden;let r=t.hidden;t.hidden=!1;let i=n.map(e=>v(e)+8),a=v(t)+8;t.hidden=r;let o=m({container:e.clientWidth,sizes:i,offset:a,gap:8,keepFirst:!1});n.forEach((e,t)=>e.toggleAttribute(`data-hidden`,t>=o)),this.shown=o}dismiss(e){let t=this.tags.indexOf(e);t<0||(this.tags=this.tags.filter(t=>t!==e),this.hiddenTags.length===0&&(this.popoverOpen=!1),this.dispatchEvent(new CustomEvent(`ui-tag-dismiss`,{detail:{tag:e,index:t},bubbles:!0,composed:!0})))}renderTag(e){return a`<ui-tag type=${e.type??`gray`} size=${e.size??`md`} ?dismissible=${!!e.dismissible} @ui-dismiss=${()=>this.dismiss(e)}>${e.text}</ui-tag>`}renderPopover(e,t){return a`<ui-popover
            class="more"
            part="popover"
            high-contrast
            auto-close
            placement="bottom-end"
            ?hidden=${e.length===0}
            ?open=${this.popoverOpen}
            @ui-toggle=${e=>this.popoverOpen=e.detail.open}
        >
            <ui-tag slot="trigger" part="more" operational size=${this.tags[0]?.size??`md`} label=${t} .expanded=${this.popoverOpen} @click=${()=>this.popoverOpen=!this.popoverOpen}>+${e.length}</ui-tag>
            <div class="list">
                ${e.slice(0,S).map(e=>this.renderTag(e))}
                ${e.length>S?a`<ui-button class="view-all" kind="ghost" size="sm" @click=${this.openModal}>${this.localize.t.common.viewAllTags}</ui-button>`:i}
            </div>
        </ui-popover>`}renderModal(){let e=this.localize.t.common,t=this.search.trim().toLowerCase(),n=this.tags.filter(e=>e.text.toLowerCase().includes(t));return a`<ui-modal part="modal" size="sm" heading=${e.allTags} ?open=${this.modalOpen} @ui-close=${()=>this.modalOpen=!1}>
            <ui-search class="search" size="lg" label=${e.searchAllTags} placeholder=${e.searchAllTags} .value=${this.search} @input=${e=>this.search=e.target.value}></ui-search>
            <div class="all">${p(n,e=>e,e=>this.renderTag(e))}</div>
        </ui-modal>`}render(){let e=this.hiddenTags,t=this.localize.t.common.moreTags.replace(`{count}`,String(e.length));return a`<div class="tags">
                ${p(this.tags,e=>e,e=>this.renderTag(e))} ${this.renderPopover(e,t)}
                <span class="sr-only" role="status">${e.length?t:``}</span>
            </div>
            ${this.tags.length>S?this.renderModal():i}`}};e([c({type:Array})],C.prototype,`tags`,void 0),e([l()],C.prototype,`shown`,void 0),e([l()],C.prototype,`popoverOpen`,void 0),e([l()],C.prototype,`modalOpen`,void 0),e([l()],C.prototype,`search`,void 0),C=e([s(`ui-page-header-tags`)],C);var w=new Set([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]),T=(e,t)=>_(w.has(e)?e:t);function E(e){for(let t=e.parentElement;t&&t!==document.body&&t!==document.documentElement;t=t.parentElement)if(/(auto|scroll)/.test(getComputedStyle(t).overflowY))return t;return document.scrollingElement??document.documentElement}function D(e){let t=E(e),n=e.getBoundingClientRect().top,r=t===document.scrollingElement?0:t.getBoundingClientRect().top;return Math.max(n-r,0)}var O=t`
    .row {
        --_m: 0px;

        box-sizing: border-box;
        inline-size: 100%;
        max-inline-size: 1584px;
        margin-inline: auto;
        padding-inline: calc(var(--_m) + 16px);
    }

    @media (min-width: 42rem) {
        .row {
            --_m: 16px;
        }
    }

    @media (min-width: 99rem) {
        .row {
            --_m: 24px;
        }
    }

    .row.narrow {
        padding-inline-start: var(--_m);
    }

    .row.full-width {
        max-inline-size: none;
    }
`,k=class extends d{constructor(...e){super(...e),this.header=null,this.onState=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.header=this.closest(`ui-page-header`),this.header?.addEventListener(`ui-page-header-state`,this.onState)}disconnectedCallback(){super.disconnectedCallback(),this.header?.removeEventListener(`ui-page-header-state`,this.onState),this.header=null}get state(){return this.header?.state??{fullyCollapsed:!1,titleClipped:!1,contentActionsClipped:!1,withContent:!1,fullWidthGrid:!1,narrowGrid:!1}}get rowClasses(){return{row:!0,narrow:this.state.narrowGrid,"full-width":this.state.fullWidthGrid}}},A=class extends d{constructor(...e){super(...e),this.fullWidthGrid=!1,this.narrowGrid=!1,this.state={fullyCollapsed:!1,titleClipped:!1,contentActionsClipped:!1,withContent:!1,fullWidthGrid:!1,narrowGrid:!1},this.observers=[]}static{this.styles=t`
        :host {
            position: sticky;
            z-index: 1;
            inset-block-start: var(--ui-page-header-top, 0px);
            display: block;
            background-color: var(--ui-layer-1);
            border-block-end: 1px solid var(--ui-border-subtle-2);
        }

        /* Carbon --disable-sticky-tab-bar: the header scrolls away; the bar is fixed at the top, the padding keeping its room */
        :host([data-static]) {
            position: static;
            padding-block-start: 40px;
        }

        :host([data-static]) ::slotted(ui-page-header-breadcrumb) {
            position: fixed;
            inset-block-start: 0;
            inset-inline: 0;
        }
    `}connectedCallback(){super.connectedCallback(),typeof ResizeObserver<`u`&&(this.resizeObserver=new ResizeObserver(()=>this.measure()),this.resizeObserver.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),this.disconnectObservers()}updated(e){super.updated(e),(e.has(`fullWidthGrid`)||e.has(`narrowGrid`))&&this.setState({fullWidthGrid:this.fullWidthGrid,narrowGrid:this.narrowGrid})}setState(e){Object.entries(e).some(([e,t])=>this.state[e]!==t)&&(this.state={...this.state,...e},this.dispatchEvent(new Event(`ui-page-header-state`)))}setStatic(e){this.toggleAttribute(`data-static`,e)}disconnectObservers(){for(let e of this.observers)e.disconnect();this.observers=[]}measure(){let e=this.querySelector(`ui-page-header-content`),t=D(this),n=e?.offsetHeight??0;if(this.style.setProperty(`--ui-page-header-top`,`${(Math.round(n)-t)*-1}px`),this.style.setProperty(`--ui-page-header-bar-top`,`${t}px`),this.setState({withContent:!!e}),this.disconnectObservers(),!e||typeof IntersectionObserver>`u`)return;let r=E(this),i=r===document.scrollingElement?null:r,a=(e,n)=>{if(!e)return;let r=new IntersectionObserver(e=>e.forEach(e=>this.setState({[n]:!e.isIntersecting})),{root:i,rootMargin:`${(t+40+1)*-1}px 0px 0px 0px`});r.observe(e),this.observers.push(r)};a(e,`fullyCollapsed`),a(e.shadowRoot?.querySelector(`.title`),`titleClipped`),a(e.shadowRoot?.querySelector(`.page-actions`),`contentActionsClipped`)}render(){return a`<slot></slot>`}};e([c({type:Boolean,reflect:!0,attribute:`full-width-grid`})],A.prototype,`fullWidthGrid`,void 0),e([c({type:Boolean,reflect:!0,attribute:`narrow-grid`})],A.prototype,`narrowGrid`,void 0),A=e([s(`ui-page-header`)],A);var j=class extends k{constructor(...e){super(...e),this.border=!0,this.pageActionsFlush=!1,this.contentActionsFlush=!1,this.actionsAriaLabel=``,this.localize=new f(this)}static{this.styles=[O,t`
            :host {
                position: sticky;
                z-index: 2;
                inset-block-start: var(--ui-page-header-bar-top, 0px);
                display: block;
                box-sizing: border-box;
                block-size: 40px;
                background-color: var(--ui-layer-1);
            }

            :host([border]) {
                border-block-end: 1px solid var(--ui-border-subtle-2);
            }

            .container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                block-size: 100%;
                gap: var(--ui-space-xs);
                min-inline-size: 0;
            }

            .trail {
                display: flex;
                flex: 1 1 75%;
                align-items: center;
                min-inline-size: 0;
            }

            ::slotted([slot='icon']) {
                flex: none;
                margin-inline-end: var(--ui-space-xs);
            }

            /* one line: the title crumb shrinks with an ellipsis instead of wrapping */
            ::slotted(ui-breadcrumb) {
                --ui-breadcrumb-wrap: nowrap;

                flex: 1 1 0%;
                min-inline-size: 0;
            }

            .actions {
                display: flex;
                flex: 0 1 25%;
                align-items: center;
                justify-content: flex-end;
                gap: var(--ui-space-xs);
                max-inline-size: 25%;
                min-inline-size: 0;
            }

            @media (min-width: 42rem) {
                .trail {
                    flex: 1 1 auto;
                    max-inline-size: 60%;
                }

                .actions {
                    flex: 0 0 auto;
                    max-inline-size: none;
                }

                :host(:not([content-actions-flush])) ::slotted([slot='content-actions']) {
                    margin-inline-end: var(--ui-space-sm);
                }
            }

            /* side by side, as Carbon's actions set; a <ui-page-header-actions> in it shrinks into its overflow menu */
            .page-actions {
                display: flex;
                flex: 1 1 auto;
                align-items: center;
                justify-content: flex-end;
                min-inline-size: 0;
            }

            .content-actions {
                display: none;
                min-inline-size: 0;
                overflow: hidden;
            }

            @media (min-width: 42rem) {
                .content-actions {
                    display: flex;
                    visibility: hidden;
                    opacity: 0;
                }

                .content-actions.show {
                    visibility: visible;
                    opacity: 1;
                    transition: opacity var(--ui-duration-moderate-01) var(--ui-easing);
                }
            }

            :host([page-actions-flush]) .row {
                padding-inline-end: 0;
            }
        `]}render(){return a`<div class=${u(this.rowClasses)}>
            <div class="container">
                <div class="trail"><slot name="icon"></slot><slot></slot></div>
                <div class="actions" role="toolbar" aria-label=${this.actionsAriaLabel||this.localize.t.common.pageHeaderActions}>
                    <div class=${u({"content-actions":!0,show:this.state.contentActionsClipped})}><slot name="content-actions"></slot></div>
                    <div class="page-actions"><slot name="page-actions"></slot></div>
                </div>
            </div>
        </div>`}};e([c({reflect:!0,converter:n})],j.prototype,`border`,void 0),e([c({type:Boolean,reflect:!0,attribute:`page-actions-flush`})],j.prototype,`pageActionsFlush`,void 0),e([c({type:Boolean,reflect:!0,attribute:`content-actions-flush`})],j.prototype,`contentActionsFlush`,void 0),e([c({attribute:`actions-aria-label`})],j.prototype,`actionsAriaLabel`,void 0),j=e([s(`ui-page-header-breadcrumb`)],j);var M=class extends k{constructor(...e){super(...e),this.heading=``,this.headingLevel=`h1`,this.hasContextualActions=!1,this.hasTitleSlot=!1,this.onTitleSlotChange=e=>{this.hasTitleSlot=e.target.assignedNodes().length>0}}static{this.styles=[O,t`
            :host {
                display: block;
                padding-block-start: var(--ui-space-xxl);
            }

            .title-wrapper {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-md);
                min-block-size: 40px;
                margin-block-end: var(--ui-space-md);
            }

            @media (min-width: 42rem) {
                .title-wrapper {
                    display: grid;
                    grid-template-columns: auto minmax(auto, auto);
                }
            }

            .start {
                display: flex;
                flex-wrap: wrap;
                gap: var(--ui-space-md);
            }

            .title-container {
                display: flex;
            }

            ::slotted([slot='icon']) {
                flex: none;
                margin-inline-end: var(--ui-space-md);
            }

            .title {
                max-inline-size: 640px;
                margin: 0;
                font: var(--ui-font-heading-04);
            }

            ::slotted([slot='contextual-actions']) {
                display: flex;
                align-items: center;
            }

            .page-actions {
                display: flex;
                justify-self: end;
                transition: opacity var(--ui-duration-moderate-02) var(--ui-easing);
            }

            .page-actions.clipped {
                visibility: hidden;
                opacity: 0;
            }

            @media (max-width: 41.98rem) {
                .page-actions {
                    justify-content: start;
                }
            }
        `]}renderTitle(){let e=T(this.headingLevel,`h1`),t=this.hasContextualActions?1:2,n=this.hasTitleSlot?i:a`<ui-truncated-text value=${this.heading} lines=${t} placement="bottom"></ui-truncated-text>`;return g`<${e} class="title" part="title">${n}<slot name="title" @slotchange=${this.onTitleSlotChange}></slot></${e}>`}render(){return a`<div class=${u(this.rowClasses)}>
            <div class="title-wrapper">
                <div class="start">
                    <div class="title-container"><slot name="icon"></slot>${this.renderTitle()}</div>
                    <slot name="contextual-actions" @slotchange=${e=>this.hasContextualActions=e.target.assignedNodes().length>0}></slot>
                </div>
                <div class=${u({"page-actions":!0,clipped:this.state.contentActionsClipped})}><slot name="page-actions"></slot></div>
            </div>
            <slot></slot>
        </div>`}};e([c()],M.prototype,`heading`,void 0),e([c({attribute:`heading-level`})],M.prototype,`headingLevel`,void 0),e([l()],M.prototype,`hasContextualActions`,void 0),e([l()],M.prototype,`hasTitleSlot`,void 0),e([o(`.title`)],M.prototype,`titleElement`,void 0),M=e([s(`ui-page-header-content`)],M);var N=class extends d{constructor(...e){super(...e),this.subtitle=``,this.subtitleLevel=`h2`}static{this.styles=t`
        :host {
            display: block;
            max-inline-size: 640px;
            padding-block-end: var(--ui-space-lg);
            font: var(--ui-font-body-01);
            letter-spacing: var(--ui-tracking-body);
        }

        .subtitle {
            margin: 0 0 var(--ui-space-xs);
            font: var(--ui-font-heading-03);
            letter-spacing: normal;
        }
    `}render(){let e=T(this.subtitleLevel,`h2`),t=this.subtitle?g`<${e} class="subtitle" part="subtitle">${this.subtitle}</${e}>`:i;return a`${t}<slot></slot>`}};e([c()],N.prototype,`subtitle`,void 0),e([c({attribute:`subtitle-level`})],N.prototype,`subtitleLevel`,void 0),N=e([s(`ui-page-header-content-text`)],N);var P=class extends d{constructor(...e){super(...e),this.objectFit=`cover`}static{this.styles=t`
        :host {
            display: block;
            overflow: hidden;
            aspect-ratio: 3 / 2;
        }

        @media (min-width: 66rem) {
            :host {
                aspect-ratio: 2 / 1;
            }
        }

        ::slotted(img),
        ::slotted(picture) {
            display: block;
            inline-size: 100%;
            block-size: 100%;
            object-fit: var(--_fit, cover);
            object-position: center;
        }
    `}render(){return a`<slot style="--_fit: ${this.objectFit===`contain`?`contain`:`cover`}"></slot>`}};e([c({reflect:!0,attribute:`object-fit`})],P.prototype,`objectFit`,void 0),P=e([s(`ui-page-header-hero-image`)],P);var F=class extends k{constructor(...e){super(...e),this.disableStickyTabBar=!1}static{this.styles=[O,t`
            :host {
                position: sticky;
                z-index: 1;
                inset-block-start: var(--ui-page-header-bar-top, 0px);
                display: block;
                background-color: var(--ui-layer-1);
            }

            :host([disable-sticky-tab-bar]) {
                position: static;
            }

            .bar {
                display: flex;
                align-items: center;
            }

            .row {
                padding-inline: var(--_m);
            }

            .tablist {
                display: flex;
                flex: 1;
                align-items: center;
                min-inline-size: 0;
            }

            ::slotted(:not([slot])) {
                flex: 1 1 auto;
                min-inline-size: 0;
            }

            ::slotted([slot='tags']) {
                display: inline-flex;
                align-items: center;
                justify-content: flex-end;
                inline-size: 40%;
                min-inline-size: 0;
                margin-inline-start: auto;
            }
        `]}updated(e){super.updated(e),e.has(`disableStickyTabBar`)&&this.header?.setStatic(this.disableStickyTabBar)}render(){return a`<div class="bar">
            <div class=${u(this.rowClasses)}><div class="tablist"><slot></slot><slot name="tags"></slot></div></div>
            <slot name="scroller"></slot>
        </div>`}};e([c({type:Boolean,reflect:!0,attribute:`disable-sticky-tab-bar`})],F.prototype,`disableStickyTabBar`,void 0),F=e([s(`ui-page-header-tabs`)],F);var I=a`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 5 13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z" /></svg>`,L=class extends k{constructor(...e){super(...e),this.collapseText=``,this.expandText=``,this.localize=new f(this)}static{this.styles=t`
        :host {
            display: inline-flex;
        }

        /* Carbon .cds--page-header--scroller-button-icon: $transition-base (250ms, no token) with the browser's ease */
        svg {
            transition: transform 250ms;
        }

        .collapsed svg {
            transform: rotate(180deg);
        }

        @media (prefers-reduced-motion: reduce) {
            svg {
                transition: none;
            }
        }
    `}onClick(){let e=this.header?.querySelector(`ui-page-header-content`);e&&E(e).scrollTo({top:this.state.fullyCollapsed?0:e.offsetHeight,behavior:`smooth`})}render(){let e=this.state.fullyCollapsed,{collapse:t,expand:n}=this.localize.t.common,r=e?this.expandText||n:this.collapseText||t;return a`<ui-icon-button class=${u({collapsed:e})} kind="ghost" size="md" label=${r} tooltip-placement="top" @click=${this.onClick}>${I}</ui-icon-button>`}};e([c({attribute:`collapse-text`})],L.prototype,`collapseText`,void 0),e([c({attribute:`expand-text`})],L.prototype,`expandText`,void 0),L=e([s(`ui-page-header-scroller`)],L);var R=class extends h{constructor(...e){super(...e),this.header=null,this.sync=()=>{let e=this.header?.state,t=!e?.withContent||e.titleClipped;this.toggleAttribute(`data-show`,t),this.inert=!t,t?this.removeAttribute(`aria-hidden`):this.setAttribute(`aria-hidden`,`true`)}}static{this.styles=[h.styles,t`
            :host {
                opacity: 0;
                transform: translateY(16px);
                transition:
                    transform var(--ui-duration-moderate-01) var(--ui-easing),
                    opacity var(--ui-duration-moderate-01) var(--ui-easing);
            }

            :host([data-show]) {
                opacity: 1;
                transform: translateY(0);
            }

            @media (prefers-reduced-motion: reduce) {
                :host {
                    transform: none;
                }
            }

            .slash {
                display: none;
            }

            :host {
                flex: 0 1 auto;
                min-inline-size: 0;
            }

            .current {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        `]}connectedCallback(){this.current=!0,super.connectedCallback(),this.header=this.closest(`ui-page-header`),this.header?.addEventListener(`ui-page-header-state`,this.sync),this.sync()}disconnectedCallback(){super.disconnectedCallback(),this.header?.removeEventListener(`ui-page-header-state`,this.sync),this.header=null}};R=e([s(`ui-page-header-title-breadcrumb`)],R);
import{C as e,Ct as t,St as n,_t as r,bt as i,dt as a,gt as o,ht as s,mt as c,w as l,x as u}from"./theme-switcher-BKi8EfZd.js";var d={complete:n`<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z" /><path d="m7 11.4-2.7-2.7.7-.7L7 10l4-4 .7.7z" />`,current:n`<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 13a6 6 0 0 1 0-12z" />`,incomplete:n`<path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2m0-1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Z" />`,invalid:n`<path d="M8 1 1 14h14L8 1Zm0 2.2L13.3 13H2.7L8 3.2ZM7.4 6h1.2v4H7.4zM8 12.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" />`},f=class extends l{constructor(...e){super(...e),this.label=``,this.secondaryLabel=``,this.complete=!1,this.invalid=!1,this.disabled=!1,this.state=`incomplete`,this.clickable=!1,this.index=0,this.localize=new u(this)}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=t`
        :host {
            position: relative;
            display: inline-flex;
            flex-direction: row;
            box-sizing: border-box;
            width: 128px;
            min-width: 112px;
            overflow: visible;
            font-family: var(--ui-font-family);
        }

        :host([data-space-equally]) {
            flex: 1 1 0;
            min-width: 128px;
        }

        .button {
            display: flex;
            flex-direction: row;
            box-sizing: border-box;
            width: 100%;
            min-height: 32px;
            margin: 0;
            padding: 0;
            border: 0;
            background: none;
            color: inherit;
            font: inherit;
            text-align: start;
            cursor: default;
        }

        .button.clickable {
            cursor: pointer;
        }

        .button:focus-visible {
            outline: none;
        }

        .button:focus-visible .label {
            color: var(--ui-focus);
            outline: 1px solid var(--ui-focus);
        }

        .icon {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            margin: 10px var(--ui-space-xs) 0 0;
            border-radius: 50%;
            fill: var(--ui-primary);
        }

        :host([data-state='incomplete']) .icon {
            fill: var(--ui-ink);
        }

        :host([invalid]) .icon {
            fill: var(--ui-error);
        }

        :host([disabled]) .icon {
            fill: var(--ui-ink-disabled);
        }

        .text {
            display: flex;
            flex-direction: column;
            min-width: 0;
        }

        .label {
            margin: var(--ui-space-xs) 0 0;
            max-width: 88px;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            /* Carbon truncates at 88px with an ellipsis; a long label wraps here instead, so no step name is hidden */
            overflow-wrap: break-word;
            transition: color var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([data-space-equally]) .label {
            max-width: 100%;
            margin-inline-end: 12px;
        }

        .button.clickable:hover .label {
            color: var(--ui-link-hover);
        }

        :host([disabled]) .label,
        :host([disabled]) .secondary {
            color: var(--ui-ink-disabled);
        }

        :host([disabled]) .button {
            cursor: not-allowed;
        }

        .secondary {
            margin-top: var(--ui-space-xxs);
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            letter-spacing: var(--ui-tracking-caption);
        }

        /* the 2px line along the top: interactive for complete / current, subtle for incomplete */
        .line {
            position: absolute;
            top: 0;
            inset-inline-start: 0;
            width: 100%;
            height: 2px;
            background-color: var(--ui-primary);
        }

        :host([data-space-equally]) .line {
            min-width: 128px;
        }

        :host([data-state='incomplete']) .line {
            background-color: var(--ui-hairline);
        }

        /* vertical: steps stack, the line runs down the start edge */
        :host([data-vertical]) {
            display: flex;
            width: auto;
            min-width: 0;
            min-height: 58px;
        }

        :host([data-vertical]) .button {
            align-items: flex-start;
            min-height: 58px;
        }

        :host([data-vertical]) .icon {
            margin: 10px var(--ui-space-xs) 0 0;
        }

        :host([data-vertical]) .label {
            margin-top: 8px;
            white-space: normal;
            max-width: 160px;
        }

        :host([data-vertical]) .line {
            top: 0;
            width: 2px;
            height: 100%;
        }

        :host([data-vertical]) .button {
            padding-inline-start: var(--ui-space-md);
        }

        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip-path: inset(50%);
            white-space: nowrap;
        }

        @media (forced-colors: active) {
            .icon {
                fill: CanvasText;
            }

            :host([data-state='current']) .icon {
                fill: Highlight;
            }

            :host([disabled]) .icon {
                fill: GrayText;
            }

            .button:focus-visible {
                outline: 2px solid Highlight;
            }
        }

    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}get message(){let e=this.localize.t.common;return this.invalid?e.stepInvalid:this.state===`complete`?e.stepComplete:this.state===`current`?e.stepCurrent:e.stepIncomplete}onClick(){this.clickable&&!this.disabled&&this.state!==`current`&&this.dispatchEvent(new CustomEvent(`ui-step-click`,{detail:{index:this.index},bubbles:!0}))}render(){let e=this.invalid?`invalid`:this.state,t=this.clickable&&!this.disabled&&this.state!==`current`;return i`
            <button
                class="button ${t?`clickable`:``}"
                part="button"
                type="button"
                ?disabled=${this.disabled}
                aria-disabled=${this.disabled?`true`:r}
                aria-current=${this.state===`current`?`step`:r}
                tabindex=${this.disabled||!this.clickable?-1:0}
                @click=${this.onClick}
            >
                <svg class="icon" part="icon" viewBox="0 0 16 16" aria-hidden="true">${d[e]}</svg>
                <span class="text">
                    <span class="label" part="label">${this.label}</span>
                    ${this.secondaryLabel?i`<span class="secondary" part="secondary-label">${this.secondaryLabel}</span>`:r}
                </span>
                <span class="sr-only">${this.message}</span>
                <span class="line" part="line"></span>
            </button>
        `}};e([c()],f.prototype,`label`,void 0),e([c({attribute:`secondary-label`})],f.prototype,`secondaryLabel`,void 0),e([c({type:Boolean,reflect:!0})],f.prototype,`complete`,void 0),e([c({type:Boolean,reflect:!0})],f.prototype,`invalid`,void 0),e([c({type:Boolean,reflect:!0})],f.prototype,`disabled`,void 0),e([c({attribute:`data-state`,reflect:!0})],f.prototype,`state`,void 0),e([c({type:Boolean,attribute:!1})],f.prototype,`clickable`,void 0),e([c({type:Number,attribute:!1})],f.prototype,`index`,void 0),f=e([s(`ui-progress-step`)],f);var p=class extends l{constructor(...e){super(...e),this.currentIndex=0,this.vertical=!1,this.spaceEqually=!1,this.interactive=!1,this.onStepClick=e=>{e.stopPropagation(),this.currentIndex=e.detail.index,this.dispatchEvent(new CustomEvent(`ui-change`,{detail:{index:this.currentIndex},bubbles:!0,composed:!0}))}}static{this.styles=t`
        :host {
            display: flex;
            flex-direction: row;
            list-style: none;
            font-family: var(--ui-font-family);
        }

        :host([vertical]) {
            flex-direction: column;
        }

        .list {
            display: contents;
        }
    `}connectedCallback(){super.connectedCallback(),this.addEventListener(`ui-step-click`,this.onStepClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`ui-step-click`,this.onStepClick)}updated(){this.sync()}sync(){this.steps.forEach((e,t)=>{e.index=t,e.clickable=this.interactive,e.toggleAttribute(`data-vertical`,this.vertical),e.toggleAttribute(`data-space-equally`,this.spaceEqually&&!this.vertical),e.state=e.complete||t<this.currentIndex?`complete`:t===this.currentIndex?`current`:`incomplete`})}focus(e){(this.steps.find(e=>e.state===`current`)??this.steps[0])?.focus(e)}render(){return i`<div class="list" part="base" role="list"><slot @slotchange=${()=>this.sync()}></slot></div>`}};e([c({type:Number,attribute:`current-index`})],p.prototype,`currentIndex`,void 0),e([c({type:Boolean,reflect:!0})],p.prototype,`vertical`,void 0),e([c({type:Boolean,reflect:!0,attribute:`space-equally`})],p.prototype,`spaceEqually`,void 0),e([c({type:Boolean,reflect:!0})],p.prototype,`interactive`,void 0),e([a({selector:`ui-progress-step`})],p.prototype,`steps`,void 0),p=e([s(`ui-progress-indicator`)],p);
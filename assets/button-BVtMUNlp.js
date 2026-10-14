import{C as e,Ct as t,St as n,Z as r,_t as i,bt as a,gt as o,h as s,ht as c,m as l,mt as u,tt as d,w as f,x as p}from"./theme-switcher-BKi8EfZd.js";function m(e,t,n){return n||e===`end`&&(t===`ghost`||t===`danger-ghost`)?`center`:e}var h=n`<svg class="spinner" viewBox="0 0 100 100"><circle class="track" cx="50%" cy="50%" r="42"></circle><circle class="arc" cx="50%" cy="50%" r="42"></circle></svg>`,g=class extends f{constructor(...e){super(...e),this.localize=new p(this),this.kind=`primary`,this.size=`lg`,this.disabled=!1,this.disabledFocusable=!1,this.type=`button`,this.fullWidth=!1,this.iconOnly=!1,this.label=``,this.description=``,this.dangerDescription=``,this.href=``,this.target=`_self`,this.loading=!1,this.loadingLabel=``,this.loadingPosition=`end`,this.loadingText=``,this.haspopup=``,this.descriptionId=d(`ui-button-desc`),this.dangerId=d(`ui-button-danger`),this.internals=this.attachInternals(),this.slots=new s(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...o.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[r,t`
        :host {
            display: inline-block;
            vertical-align: middle;
        }

        :host([full-width]) {
            display: block;
        }

        .button {
            position: relative; /* for a badge indicator in its corner */
            box-sizing: border-box;
            display: inline-flex;
            align-items: var(--ui-button-align, var(--_ui-button-align, center));
            justify-content: space-between;
            /* Carbon: text 15px from the start (+1px border), 63px of room at the end: 16px icon at 16px, text at least 31px before it */
            gap: 32px;
            width: 100%;
            min-height: var(--ui-field-height-lg, 48px);
            margin: 0;
            padding-block: var(--ui-button-padding-top, var(--_ui-button-padding-top, 0)) 0;
            padding-inline: var(--ui-button-padding-start, 15px) var(--ui-button-padding-end, 63px);
            border: 1px solid transparent;
            border-radius: var(--ui-radius-none);
            font: var(--ui-font-button);
            letter-spacing: var(--ui-tracking-body);
            text-align: start;
            cursor: pointer;
            /* Carbon button-base: background, box-shadow, border-color, outline at fast-01 with the entrance easing (the text colour switches at once) */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                box-shadow var(--ui-duration-fast) var(--ui-easing-entrance),
                border-color var(--ui-duration-fast) var(--ui-easing-entrance),
                outline var(--ui-duration-fast) var(--ui-easing-entrance);
        }

        .button.has-suffix {
            padding-inline-end: 16px; /* icon edge 16px inside the padding box, as Carbon's absolute icon (17px from the outer edge) */
        }

        :host([size='sm']) .button {
            min-height: var(--ui-field-height-sm, 32px);
        }


        :host([size='md']) .button {
            min-height: var(--ui-field-height-md, 40px);
        }

        :host([size='xl']) .button {
            min-height: 64px;
        }

        :host([size='2xl']) .button {
            min-height: 80px;
        }

        /*
         * Carbon xl / 2xl: padding-block is min((height - 18px) / 2 - 1px, lg's 14px), so the content stays at the
         * top, 14px inside the border; the icon (Carbon btn__icon: the same 14px + 1px margin) sits 1px lower.
         */
        :host([size='xl']:not([icon-only])),
        :host([size='2xl']:not([icon-only])) {
            --_ui-button-align: flex-start;
            --_ui-button-padding-top: 14px;
        }

        :host([size='xl']:not([icon-only])) ::slotted(svg),
        :host([size='2xl']:not([icon-only])) ::slotted(svg),
        :host([size='xl']:not([icon-only])) .spinner,
        :host([size='2xl']:not([icon-only])) .spinner {
            margin-block-start: 1px;
        }

        /*
         * Carbon focus (:focus, so a mouse click shows it too): 2px focus ring + 1px focus-inset line inside it.
         * Carbon: 1px focus border + inset 1px focus + inset 2px background. The inset starts inside the 1px
         * border, so 2px reaches 3px from the edge and the 2px outline leaves 1px of it showing.
         */
        .button:focus {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
            box-shadow: inset 0 0 0 2px var(--ui-focus-inset);
        }

        ::slotted(svg) {
            flex-shrink: 0;
            width: 16px;
            height: 16px;
        }

        /* primary */
        .button {
            background-color: var(--ui-primary);
            color: var(--ui-on-primary);
        }
        .button:hover {
            background-color: var(--ui-blue-hover);
        }
        .button:active {
            background-color: var(--ui-blue-80);
        }

        /* secondary — charcoal */
        :host([kind='secondary']) .button {
            background-color: var(--ui-secondary); /* Carbon button-secondary */
            color: var(--ui-on-primary); /* text-on-color */
        }
        :host([kind='secondary']) .button:hover {
            background-color: var(--ui-secondary-hover);
        }
        :host([kind='secondary']) .button:active {
            background-color: var(--ui-secondary-active);
        }

        /* tertiary — blue outline, fills on hover */
        :host([kind='tertiary']) .button {
            background-color: transparent;
            border-color: var(--ui-primary);
            color: var(--ui-primary);
        }
        :host([kind='tertiary']) .button:hover {
            background-color: var(--ui-blue-hover);
            color: var(--ui-on-primary);
        }
        :host([kind='tertiary']) .button:active {
            background-color: var(--ui-blue-80);
            border-color: var(--ui-blue-80);
            color: var(--ui-on-primary);
        }
        :host([kind='tertiary']) .button:focus {
            background-color: var(--ui-primary);
            color: var(--ui-on-primary);
        }

        /* ghost — text only until hover */
        :host([kind='ghost']) .button {
            background-color: transparent;
            color: var(--ui-link); /* Carbon link-primary */
            justify-content: flex-start;
            gap: var(--ui-space-xs);
            padding-inline-end: 15px;
        }
        /* Carbon: background-hover / background-active (theme level, not the layer set) */
        :host([kind='ghost']) .button:hover {
            background-color: var(--ui-canvas-hover);
            color: var(--ui-blue-60);
        }
        :host([kind='ghost']) .button:active {
            background-color: var(--ui-canvas-active);
        }

        /* danger */
        :host([kind='danger']) .button {
            background-color: var(--ui-button-danger);
            color: var(--ui-on-primary);
        }
        :host([kind='danger']) .button:hover {
            background-color: var(--ui-error-hover);
        }
        :host([kind='danger']) .button:active {
            background-color: var(--ui-error-active);
        }

        /* danger-tertiary — red outline, fills on hover */
        :host([kind='danger-tertiary']) .button {
            background-color: transparent;
            border-color: var(--ui-error);
            color: var(--ui-error);
        }
        :host([kind='danger-tertiary']) .button:hover,
        :host([kind='danger-tertiary']) .button:focus {
            background-color: var(--ui-error-hover);
            border-color: var(--ui-error-hover);
            color: var(--ui-on-primary);
        }
        :host([kind='danger-tertiary']) .button:active {
            background-color: var(--ui-error-active);
            border-color: var(--ui-error-active);
            color: var(--ui-on-primary);
        }

        /* danger-ghost — red text, fills on hover */
        :host([kind='danger-ghost']) .button {
            background-color: transparent;
            color: var(--ui-error);
            justify-content: flex-start;
            gap: var(--ui-space-xs);
            padding-inline-end: 15px;
        }
        :host([kind='danger-ghost']) .button:hover {
            background-color: var(--ui-error-hover);
            color: var(--ui-on-primary);
        }
        :host([kind='danger-ghost']) .button:active {
            background-color: var(--ui-error-active);
            color: var(--ui-on-primary);
        }

        /* toggle buttons (ghost icon buttons in toolbars): Carbon btn--selected, background-selected */
        :host([pressed]) .button[aria-pressed='true'] {
            background-color: var(--ui-canvas-selected);
            color: var(--ui-ink);
        }

        a.button {
            text-decoration: none;
        }

        /*
         * loading: the small Loading spinner of Carbon's InlineLoading (a layer-accent track, an interactive arc, 690ms
         * a turn), on the label's line. The label and the loading text share one grid cell, so the button keeps the
         * wider of the two; what is hidden is see-through (the label stays the button's name).
         */
        .label {
            display: inline-grid;
            align-items: var(--ui-button-align, var(--_ui-button-align, center));
        }

        .label > * {
            grid-area: 1 / 1;
        }

        .label.replaced .label-text,
        .label .busy.reserve {
            opacity: 0;
        }

        /* Carbon InlineLoading: 8px between the spinner and its text */
        .busy {
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .busy-mark {
            position: absolute;
            inset-block: 0;
            box-sizing: border-box;
            display: flex;
            align-items: var(--ui-button-align, var(--_ui-button-align, center));
            padding-block-start: var(--ui-button-padding-top, var(--_ui-button-padding-top, 0));
            pointer-events: none;
        }

        /* where Carbon's trailing icon goes (16px inside the padding box), the place of the ActionSet's spinner */
        .busy-mark.end {
            inset-inline-end: 16px;
        }

        .busy-mark.start {
            inset-inline-start: var(--ui-button-padding-start, 15px);
        }

        .busy-mark.center {
            inset-inline: 0;
            justify-content: center;
        }

        /* on the slot, not ::slotted: what it holds inherits it, a slot passed through (ui-icon-button's) too */
        .button.hide-prefix slot[name='prefix'],
        .button.hide-suffix slot[name='suffix'] {
            visibility: hidden;
        }

        .spinner {
            inline-size: 16px;
            block-size: 16px;
            fill: transparent;
            animation: spin 690ms linear infinite;
        }

        .spinner circle {
            stroke-dasharray: 276.46 276.46;
            stroke-linecap: butt;
            stroke-width: 16;
        }

        .spinner .track {
            stroke: var(--ui-layer-accent);
            stroke-dashoffset: -22;
        }

        .spinner .arc {
            stroke: var(--ui-interactive);
            stroke-dashoffset: 143.76; /* 48 % */
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 2s;
            }
        }

        /*
         * disabled (Carbon button mixin): button-disabled fill and border, text-on-color-disabled; tertiary kinds keep
         * the border on a clear fill, ghost kinds are clear. :host([…]) selectors so no kind's hover / active wins.
         */
        :host([disabled]) .button,
        :host([disabled]) .button:hover,
        :host([disabled]) .button:active,
        :host([disabled]) .button:focus,
        :host([disabled-focusable]) .button,
        :host([disabled-focusable]) .button:hover,
        :host([disabled-focusable]) .button:active,
        :host([disabled-focusable]) .button:focus,
        :host([loading]) .button,
        :host([loading]) .button:hover,
        :host([loading]) .button:active,
        :host([loading]) .button:focus {
            border-color: var(--ui-button-disabled);
            background-color: var(--ui-button-disabled);
            box-shadow: none;
            color: var(--ui-on-color-disabled);
            cursor: not-allowed;
        }
        :host([kind='tertiary'][disabled]) .button,
        :host([kind='tertiary'][disabled]) .button:hover,
        :host([kind='tertiary'][disabled]) .button:active,
        :host([kind='tertiary'][disabled]) .button:focus,
        :host([kind='tertiary'][disabled-focusable]) .button,
        :host([kind='tertiary'][disabled-focusable]) .button:hover,
        :host([kind='tertiary'][disabled-focusable]) .button:active,
        :host([kind='tertiary'][disabled-focusable]) .button:focus,
        :host([kind='tertiary'][loading]) .button,
        :host([kind='tertiary'][loading]) .button:hover,
        :host([kind='tertiary'][loading]) .button:active,
        :host([kind='tertiary'][loading]) .button:focus,
        :host([kind='danger-tertiary'][disabled]) .button,
        :host([kind='danger-tertiary'][disabled]) .button:hover,
        :host([kind='danger-tertiary'][disabled]) .button:active,
        :host([kind='danger-tertiary'][disabled]) .button:focus,
        :host([kind='danger-tertiary'][disabled-focusable]) .button,
        :host([kind='danger-tertiary'][disabled-focusable]) .button:hover,
        :host([kind='danger-tertiary'][disabled-focusable]) .button:active,
        :host([kind='danger-tertiary'][disabled-focusable]) .button:focus,
        :host([kind='danger-tertiary'][loading]) .button,
        :host([kind='danger-tertiary'][loading]) .button:hover,
        :host([kind='danger-tertiary'][loading]) .button:active,
        :host([kind='danger-tertiary'][loading]) .button:focus {
            background-color: transparent;
            color: var(--ui-ink-disabled);
        }
        :host([kind='ghost'][disabled]) .button,
        :host([kind='ghost'][disabled]) .button:hover,
        :host([kind='ghost'][disabled]) .button:active,
        :host([kind='ghost'][disabled]) .button:focus,
        :host([kind='ghost'][disabled-focusable]) .button,
        :host([kind='ghost'][disabled-focusable]) .button:hover,
        :host([kind='ghost'][disabled-focusable]) .button:active,
        :host([kind='ghost'][disabled-focusable]) .button:focus,
        :host([kind='ghost'][loading]) .button,
        :host([kind='ghost'][loading]) .button:hover,
        :host([kind='ghost'][loading]) .button:active,
        :host([kind='ghost'][loading]) .button:focus,
        :host([kind='danger-ghost'][disabled]) .button,
        :host([kind='danger-ghost'][disabled]) .button:hover,
        :host([kind='danger-ghost'][disabled]) .button:active,
        :host([kind='danger-ghost'][disabled]) .button:focus,
        :host([kind='danger-ghost'][disabled-focusable]) .button,
        :host([kind='danger-ghost'][disabled-focusable]) .button:hover,
        :host([kind='danger-ghost'][disabled-focusable]) .button:active,
        :host([kind='danger-ghost'][disabled-focusable]) .button:focus,
        :host([kind='danger-ghost'][loading]) .button,
        :host([kind='danger-ghost'][loading]) .button:hover,
        :host([kind='danger-ghost'][loading]) .button:active,
        :host([kind='danger-ghost'][loading]) .button:focus {
            border-color: transparent;
            background-color: transparent;
            color: var(--ui-ink-disabled);
        }
        /* a focusable disabled (or loading) button still shows where focus is */
        :host([disabled-focusable]) .button:focus,
        :host([loading]) .button:focus {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        /* Carbon icon-only: a square the height of the button, icon centred (ui-icon-button) */
        :host([icon-only]) .button,
        :host([icon-only][kind='ghost']) .button,
        :host([icon-only][kind='danger-ghost']) .button {
            inline-size: var(--ui-field-height-lg, 48px);
            min-inline-size: 0;
            padding-block: 0;
            padding-inline: 0;
            justify-content: center;
            gap: 0;
        }

        :host([icon-only][size='md']) .button {
            inline-size: var(--ui-field-height-md, 40px);
        }

        :host([icon-only][size='sm']) .button {
            inline-size: var(--ui-field-height-sm, 32px);
        }

        /* Carbon btn--icon-only: a square of the layout height (layout.size('height')), xl and 2xl too */
        :host([icon-only][size='xl']) .button {
            inline-size: 64px;
        }

        :host([icon-only][size='2xl']) .button {
            inline-size: 80px;
        }

        /* Carbon btn--icon-only.btn--ghost:focus: the 2px ring only, no focus-inset line */
        :host([icon-only][kind='ghost']) .button:focus {
            box-shadow: none;
        }

        /* not while disabled: the ghost's disabled grey (above) must win, as Carbon's btn--ghost:disabled */
        :host([icon-only][kind='ghost']:not([disabled], [disabled-focusable], [loading])) .button {
            color: var(--ui-icon-primary);
        }

        @media (forced-colors: active) {
            .button {
                border-color: ButtonText;
            }
            .spinner .track {
                stroke: GrayText;
            }
            .spinner .arc {
                stroke: CanvasText;
            }
            .button:focus {
                outline-color: Highlight;
            }
        }
    `]}get variant(){return this.kind}set variant(e){this.kind=e,this.hasAttribute(`variant`)&&this.setAttribute(`variant`,e)}static get observedAttributes(){return[...super.observedAttributes,`variant`]}attributeChangedCallback(e,t,n){e===`variant`?n!==null&&(this.kind=n):super.attributeChangedCallback(e,t,n)}handleClick(e){if(this.disabled||this.disabledFocusable||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}let t=this.internals.form;t&&(this.type===`submit`&&t.requestSubmit(),this.type===`reset`&&t.reset())}get busyPlace(){return m(this.loadingPosition,this.kind,this.iconOnly)}get busyInline(){return this.busyPlace===`start`&&!this.slots.has(`prefix`)}get busyClass(){if(!this.loading)return``;let e=this.busyPlace;return e===`center`?`hide-prefix hide-suffix`:e===`end`?`hide-suffix`:this.busyInline?``:`hide-prefix`}renderLabel(){if(!this.loading||this.href||this.iconOnly)return a`<slot></slot>`;let e=this.busyPlace===`center`,t=this.busyInline||e;if(!t&&!this.loadingText)return a`<span class="label"><span class="label-text"><slot></slot></span></span>`;let n=this.renderBusy(t,e?`reserve`:``);return a`<span class="label replaced"><span class="label-text"><slot></slot></span>${n}</span>`}renderBusy(e,t=``){let n=this.loadingText?a`<span>${this.loadingText}</span>`:i;return a`<span class="busy ${t}" aria-hidden="true">${e?h:i}${n}</span>`}renderBusyMark(){let e=this.busyPlace;if(!this.loading||this.busyInline)return i;let t=e===`center`?this.renderBusy(!0):a`<span class="busy">${h}</span>`;return a`<span class="busy-mark ${e}" part="loading" aria-hidden="true">${t}</span>`}renderContent(){return a`
            <slot name="prefix" part="prefix"></slot>
            ${this.renderLabel()}
            <slot name="suffix" part="suffix"></slot>
            <slot name="badge-indicator"></slot>
        `}get hasDangerDescription(){return this.kind.startsWith(`danger`)&&!!this.dangerDescription}get describedBy(){let e=[this.hasDangerDescription?this.dangerId:``,this.description?this.descriptionId:``].filter(Boolean);return e.length?e.join(` `):i}renderHidden(e,t){return t?a`<span class="sr-only" id=${e}>${t}</span>`:i}renderDescription(){return[this.renderHidden(this.dangerId,this.hasDangerDescription?this.dangerDescription:``),this.renderHidden(this.descriptionId,this.description)]}get suffixClass(){return this.slots.has(`suffix`)?`has-suffix`:``}renderLink(){let e=this.target===`_blank`;return a`<a
            part="base"
            class="button ${this.disabled||this.disabledFocusable?`is-disabled`:``} ${this.suffixClass}"
            href=${this.disabled||this.disabledFocusable?i:this.href}
            target=${this.disabled||this.disabledFocusable?i:this.target}
            rel=${e?`noopener noreferrer`:i}
            role=${this.disabledFocusable?`link`:i}
            tabindex=${this.disabled&&!this.disabledFocusable?i:`0`}
            aria-disabled=${this.disabled||this.disabledFocusable?`true`:i}
            aria-label=${this.label||i}
            aria-describedby=${this.describedBy}
            @click=${l}
        >
            ${this.renderContent()}
        </a>`}renderButton(){return a`<button
            part="base"
            class="button ${this.suffixClass} ${this.busyClass}"
            type="button"
            tabindex="0"
            ?disabled=${this.disabled}
            aria-disabled=${this.loading||this.disabledFocusable?`true`:i}
            aria-pressed=${this.pressed===void 0?i:String(this.pressed)}
            aria-haspopup=${this.haspopup||i}
            aria-expanded=${this.haspopup||this.expanded!==void 0?String(!!this.expanded):i}
            aria-label=${this.label||i}
            aria-describedby=${this.describedBy}
            @click=${this.handleClick}
        >
            ${this.renderContent()}
            ${this.renderBusyMark()}
        </button>`}render(){return a`
            ${this.href?this.renderLink():this.renderButton()}
            ${this.renderDescription()}
            <span class="sr-only" role="status">${this.loading?this.loadingLabel||this.loadingText||this.localize.t.common.loading:``}</span>
        `}};e([u({type:String,reflect:!0})],g.prototype,`kind`,void 0),e([u({type:String,reflect:!0})],g.prototype,`size`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`disabled`,void 0),e([u({type:Boolean,reflect:!0,attribute:`disabled-focusable`})],g.prototype,`disabledFocusable`,void 0),e([u({type:String})],g.prototype,`type`,void 0),e([u({type:Boolean,reflect:!0,attribute:`full-width`})],g.prototype,`fullWidth`,void 0),e([u({type:Boolean,reflect:!0,attribute:`icon-only`})],g.prototype,`iconOnly`,void 0),e([u()],g.prototype,`label`,void 0),e([u()],g.prototype,`description`,void 0),e([u({attribute:`danger-description`})],g.prototype,`dangerDescription`,void 0),e([u()],g.prototype,`href`,void 0),e([u()],g.prototype,`target`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`loading`,void 0),e([u({attribute:`loading-label`})],g.prototype,`loadingLabel`,void 0),e([u({attribute:`loading-position`,reflect:!0})],g.prototype,`loadingPosition`,void 0),e([u({attribute:`loading-text`})],g.prototype,`loadingText`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`pressed`,void 0),e([u()],g.prototype,`haspopup`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`expanded`,void 0),g=e([c(`ui-button`)],g);
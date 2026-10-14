import{C as e,Ct as t,K as n,R as r,Z as i,_t as a,bt as o,gt as s,h as c,ht as l,mt as u,pt as d,tt as f,w as p,x as m,z as h}from"./theme-switcher-BKi8EfZd.js";var g=class extends p{static{this.formAssociated=!0}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,t`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .label {
                display: block;
                margin-bottom: var(--ui-space-md); /* Carbon: 16px (sm: 8px) between label and switch */
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
                color: var(--ui-ink-muted);
            }

            :host([size='sm']) .label {
                margin-bottom: var(--ui-space-xs);
            }

            .row {
                display: flex;
                align-items: center;
                cursor: pointer;
            }

            /* the real control: keyboard-reachable, visually hidden (Carbon toggle__button) */
            .button {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                border: 0;
                overflow: hidden;
                clip-path: inset(50%);
                white-space: nowrap;
            }

            .switch {
                position: relative;
                box-sizing: border-box;
                width: 48px;
                height: 24px;
                border-radius: 12px;
                background-color: var(--ui-toggle-off);
                transition: background-color var(--ui-duration-fast) var(--ui-easing-exit); /* Carbon toggle__switch: fast-01, exit easing */
            }

            .handle {
                position: absolute;
                top: 3px;
                inset-inline-start: 3px;
                display: grid;
                place-items: center;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: var(--ui-on-primary);
                transition: translate var(--ui-duration-fast) var(--ui-easing-exit); /* Carbon toggle__switch::before: fast-01, exit easing */
            }

            .switch.checked {
                background-color: var(--ui-success);
            }

            .switch.checked .handle {
                translate: 24px 0;
            }

            :host(:dir(rtl)) .switch.checked .handle {
                translate: -24px 0;
            }

            :host([size='sm']) .switch {
                width: 32px;
                height: 16px;
            }

            :host([size='sm']) .handle {
                width: 10px;
                height: 10px;
            }

            :host([size='sm']) .switch.checked .handle {
                translate: 16px 0;
            }

            :host([size='sm']:dir(rtl)) .switch.checked .handle {
                translate: -16px 0;
            }

            /* sm shows a 6×5 check mark in the knob while on (Carbon toggle__check) */
            .check {
                display: none;
                width: 6px;
                height: 5px;
                fill: var(--ui-success);
            }

            :host([size='sm']) .switch.checked .check {
                display: block;
            }

            .text {
                margin-inline-start: var(--ui-space-xs);
                font: var(--ui-font-body-sm);
                line-height: 20px; /* body-01 */
                letter-spacing: var(--ui-tracking-body);
                color: var(--ui-ink);
            }

            /* Carbon toggle__button:focus (not :focus-visible), so a click keeps the ring after release */
            .button:focus ~ .row .switch,
            .row:active .switch {
                outline: 2px solid var(--ui-focus);
                outline-offset: 1px;
            }

            /* disabled */
            :host([aria-disabled='true']) .row,
            :host([aria-disabled='true']) .label {
                cursor: not-allowed;
            }

            :host([aria-disabled='true']) .label,
            :host([aria-disabled='true']) .text {
                color: var(--ui-ink-disabled);
            }

            :host([aria-disabled='true']) .switch,
            :host([aria-disabled='true']) .switch.checked {
                background-color: var(--ui-button-disabled);
            }

            :host([aria-disabled='true']) .handle {
                background-color: var(--ui-on-color-disabled); /* icon-on-color-disabled, the same values */
            }

            :host([aria-disabled='true']) .check {
                fill: var(--ui-button-disabled);
            }

            /* read-only: hollow track, dark knob */
            :host([readonly]) .row {
                cursor: default;
            }

            :host([readonly]) .switch,
            :host([readonly]) .switch.checked {
                border: 1px solid var(--ui-ink-disabled);
                background-color: transparent;
            }

            :host([readonly]) .handle {
                top: 2px;
                inset-inline-start: 2px;
                background-color: var(--ui-ink);
            }

            :host([readonly]) .check {
                fill: var(--ui-canvas);
            }

            @media (forced-colors: active) {
                .switch {
                    border: 1px solid ButtonText;
                }
                .switch.checked {
                    background-color: Highlight;
                }
                .handle {
                    background-color: ButtonText;
                    forced-color-adjust: none;
                }
            }
        `]}constructor(){super(),this.label=``,this.localize=new m(this),this.hideLabel=!1,this.labelA=``,this.labelB=``,this.checked=!1,this.value=`on`,this.name=``,this.size=`md`,this.disabled=!1,this.readonly=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.ids=f(`ui-toggle`),this.slots=new c(this),this.defaultChecked=!1,this.onLabelClick=e=>{h(this,e)&&this.shadowRoot?.querySelector(`button[role="switch"]`)?.click()},this.addEventListener(`click`,this.onLabelClick)}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.defaultChecked=this.checked)}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}updated(){this.internals.setFormValue(this.checked&&!this.isDisabled?this.value:null,String(this.checked)),this.isDisabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`)}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e){typeof e==`string`&&(this.checked=e===`true`)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||r(this)}toggle(){this.isDisabled||this.readonly||(this.checked=!this.checked,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))}onClick(e){this.toggle(),e.currentTarget.focus()}renderLabel(){return this.hideLabel||!this.label&&!this.slots.has(`label`)?a:o`<span class="label" part="label" id="${this.ids}-label">${n(this.label)}</span>`}get sideText(){return this.hideLabel?this.label:this.checked?this.labelB||this.localize.t.field.on:this.labelA||this.localize.t.field.off}render(){let e=this.label||this.slots.has(`label`),t=this.hideLabel?`text`:`label`,n=e?`${this.ids}-${t}`:a;return o`
            ${this.renderLabel()}
            <button
                class="button"
                type="button"
                role="switch"
                id=${this.ids}
                aria-checked=${this.checked?`true`:`false`}
                aria-labelledby=${n}
                aria-readonly=${this.readonly?`true`:a}
                ?disabled=${this.isDisabled}
                @click=${this.onClick}
            ></button>
            <label class="row" part="base" for=${this.ids}>
                <span class="switch ${this.checked?`checked`:``}" part="switch" aria-hidden="true">
                    <span class="handle" part="handle">
                        <svg class="check" viewBox="0 0 6 5" aria-hidden="true"><path d="M2.2 2.7 4.7 0l.9.9L2.2 4.6 0 2.4l.9-.9z" /></svg>
                    </span>
                </span>
                <span class="text" part="text" id="${this.ids}-text" aria-hidden=${this.hideLabel?a:`true`}>${this.sideText}</span>
            </label>
        `}};e([u()],g.prototype,`label`,void 0),e([u({type:Boolean,attribute:`hide-label`})],g.prototype,`hideLabel`,void 0),e([u({attribute:`label-a`})],g.prototype,`labelA`,void 0),e([u({attribute:`label-b`})],g.prototype,`labelB`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`checked`,void 0),e([u()],g.prototype,`value`,void 0),e([u({reflect:!0})],g.prototype,`name`,void 0),e([u({reflect:!0})],g.prototype,`size`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`disabled`,void 0),e([u({type:Boolean,reflect:!0})],g.prototype,`readonly`,void 0),e([d()],g.prototype,`fieldsetDisabled`,void 0),g=e([l(`ui-toggle`)],g);
import{B as e,C as t,Ct as n,F as r,G as i,I as a,J as o,K as s,M as c,R as l,U as u,V as d,W as f,Y as p,_t as m,bt as h,et as g,ft as _,gt as v,h as y,ht as b,j as x,mt as S,pt as C,q as w,tt as T,w as E,x as D}from"./theme-switcher-BKi8EfZd.js";var O=e=>`options`in e,k=e=>({value:e.value,label:e.label||e.textContent?.trim()||``,disabled:e.disabled}),A=class extends E{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.inline=!1,this.entries=[],this.touched=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.localize=new D(this),this.customValidityMessage=``,this.selectId=T(`ui-select`),this.defaultValue=``,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()},this.slots=new y(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[r,n`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .field {
                position: relative;
            }

            select {
                appearance: none;
                box-sizing: border-box;
                width: 100%;
                min-height: var(--ui-field-height-lg, 48px);
                margin: 0;
                padding: 0 calc(var(--ui-space-md) * 2 + 16px) 0 var(--ui-space-md);
                border: none;
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                cursor: pointer;
                outline: 2px solid transparent;
                outline-offset: -2px;
                transition: outline-color var(--ui-duration-fast) var(--ui-easing); /* Carbon select-input: the outline only, not the background */
            }

            :host([size='sm']) select {
                min-height: var(--ui-field-height-sm, 32px);
            }

            :host([size='md']) select {
                min-height: var(--ui-field-height-md, 40px);
            }

            select:focus {
                outline-color: var(--ui-focus);
            }

            .placeholder select {
                color: var(--ui-ink-muted);
            }

            option {
                color: var(--ui-ink);
            }

            .invalid select {
                outline-color: var(--ui-error);
            }

            .invalid select:focus {
                outline-color: var(--ui-focus);
            }

            select:disabled {
                border-bottom-color: transparent;
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
            }

            :host([readonly]) select {
                background-color: transparent;
                border-bottom-color: var(--ui-hairline);
                cursor: default;
            }

            :host([inline]) {
                display: grid;
                grid-template-columns: auto auto;
                justify-content: start;
                align-items: center;
                column-gap: var(--ui-space-xs);
            }

            :host([inline]) .label {
                margin-bottom: 0;
            }

            :host([inline]) select {
                width: auto;
                background-color: transparent;
                border-bottom-color: transparent;
            }

            :host([inline]) select:hover {
                background-color: var(--ui-ghost-hover);
            }

            :host([inline]) .helper,
            :host([inline]) .warn,
            :host([inline]) .error {
                grid-column: 1 / -1;
            }

            :host([readonly]) .chevron {
                fill: var(--ui-ink-subtle);
            }

            .icons {
                position: absolute;
                inset-block: 0;
                inset-inline-end: var(--ui-space-md);
                display: flex;
                align-items: center;
                gap: var(--ui-space-xs);
                pointer-events: none;
            }

            .chevron {
                width: 16px;
                height: 16px;
                fill: var(--ui-ink);
            }

            select:disabled ~ .icons .chevron {
                fill: var(--ui-ink-disabled);
            }

            .has-status select {
                padding-inline-end: calc(var(--ui-space-md) * 2 + 40px);
            }

            @media (forced-colors: active) {
                select {
                    border: 1px solid FieldText;
                }
                select:focus {
                    outline-color: Highlight;
                }
                .chevron {
                    fill: FieldText;
                }
            }
        `,a,n`
            :host([data-fluid]) select,
            :host([data-fluid]) .has-status select {
                block-size: 64px;
                min-height: 64px;
                padding-block: 32px 13px;
                padding-inline-end: 32px;
            }

            /* Carbon fluid select: the arrow 34px down, 12px from the end */
            :host([data-fluid]) .icons {
                --ui-fluid-icon-end: 4px;
                align-items: flex-start;
                padding-block-start: 34px;
                inset-inline-end: 12px;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}willUpdate(){g(this,this.fluid)}connectedCallback(){super.connectedCallback(),g(this,this.fluid),this.hasUpdated||(!this.value&&!this.hasAttribute(`value`)&&(this.value=p(this)??``),this.defaultValue=this.value),this.readOptions(),this.observer??=new MutationObserver(()=>this.readOptions()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeEventListener(`invalid`,this.onFormInvalid)}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||l(this)}get interactive(){return!this.isDisabled&&!this.readonly}updated(){this.select.value===this.value?(this.syncValidity(),this.syncHostState()):this.value=this.select.value}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownMessageKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownMessageKind===`warn`),this.toggleAttribute(`data-placeholder`,!!this.placeholder&&!this.value)}syncValidity(){if(x(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=c(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.select):this.select.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.select.validity,u(this.select,this.localize.t.field.requiredOne),this.select)}readOptions(){this.entries=[...this.children].flatMap(e=>e instanceof HTMLOptionElement?[k(e)]:e instanceof HTMLOptGroupElement?[{label:e.label,disabled:e.disabled,options:[...e.querySelectorAll(`option`)].map(k)}]:[])}onMouseDown(e){this.readonly&&e.preventDefault()}onKeyDown(e){this.readonly&&e.key!==`Tab`&&e.preventDefault()}onInput(){this.value=this.select.value}onChange(){this.value=this.select.value,this.touched=!0,this.dispatchEvent(new Event(`change`,{bubbles:!0}))}renderOption(e){return h`<option value=${e.value} ?disabled=${e.disabled} ?selected=${e.value===this.value}>
            ${e.label}
        </option>`}renderLabel(){return!this.label&&!this.slots.has(`label`)?m:h`<label class=${this.hideLabel?`sr-only`:`label`} part="label" for=${this.selectId}>${s(this.label)}</label>`}render(){let t=this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||!!this.select&&!this.select.validity.valid)),n=i({showError:t,errorText:f(this.invalid,this.customValidityMessage,this.invalidText||(this.select?u(this.select,this.localize.t.field.requiredOne):``)),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});e(this,n),this.shownMessageKind=n?.kind;let r=d(this.selectId,n),a=[t?`invalid`:``,n&&n.kind!==`helper`?`has-status`:``,this.placeholder&&!this.value?`placeholder`:``].filter(Boolean).join(` `);return h`
            ${this.renderLabel()}
            <div class="field ${a}" part="base">
                <select
                    part="input"
                    id=${this.selectId}
                    ?disabled=${this.isDisabled}
                    ?required=${this.required}
                    aria-readonly=${this.readonly?`true`:m}
                    aria-invalid=${t?`true`:`false`}
                    aria-describedby=${r??m}
                    @mousedown=${this.onMouseDown}
                    @keydown=${this.onKeyDown}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @blur=${()=>this.touched=!0}
                >
                    ${this.placeholder?h`<option value="" ?selected=${!this.value}>${this.placeholder}</option>`:m}
                    ${this.entries.map(e=>O(e)?h`<optgroup label=${e.label} ?disabled=${e.disabled}>
                                  ${e.options.map(e=>this.renderOption(e))}
                              </optgroup>`:this.renderOption(e))}
                </select>
                <span class="icons" aria-hidden="true">
                    ${o(n)}
                    <svg class="chevron" part="chevron" viewBox="0 0 16 16"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                </span>
            </div>
            ${w(this.selectId,n)}
        `}};t([S()],A.prototype,`label`,void 0),t([S({type:Boolean,attribute:`hide-label`})],A.prototype,`hideLabel`,void 0),t([S({attribute:`helper-text`})],A.prototype,`helperText`,void 0),t([S({attribute:`invalid-text`})],A.prototype,`invalidText`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`invalid`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`warn`,void 0),t([S({attribute:`warn-text`})],A.prototype,`warnText`,void 0),t([S()],A.prototype,`placeholder`,void 0),t([S()],A.prototype,`value`,void 0),t([S({reflect:!0})],A.prototype,`name`,void 0),t([S({type:String,reflect:!0})],A.prototype,`size`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`disabled`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`required`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`readonly`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`fluid`,void 0),t([S({type:Boolean,reflect:!0})],A.prototype,`inline`,void 0),t([C()],A.prototype,`entries`,void 0),t([C()],A.prototype,`touched`,void 0),t([C()],A.prototype,`fieldsetDisabled`,void 0),t([_(`select`)],A.prototype,`select`,void 0),A=t([b(`ui-select`)],A);
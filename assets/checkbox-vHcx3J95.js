import{C as e,Ct as t,F as n,G as r,M as i,R as a,V as o,W as s,_t as c,bt as l,ft as u,gt as d,ht as f,j as p,mt as m,pt as h,q as g,tt as _,w as v,z as y}from"./theme-switcher-BKi8EfZd.js";var b=class extends v{static{this.formAssociated=!0}static{this.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[n,t`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            label {
                position: relative;
                display: inline-flex;
                align-items: flex-start;
                gap: 14px; /* Carbon: 20px label inset + 10px text inset − 16px box */
                min-height: 24px;
                padding-block: 4px;
                box-sizing: border-box;
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                color: var(--ui-ink);
                cursor: pointer;
            }

            /* Native input sits exactly on top of the box: invisible, but focusable and clickable */
            input {
                position: absolute;
                top: 4px;
                inset-inline-start: 0;
                z-index: 1; /* above the now-positioned .box so clicks still land on the input */
                width: 16px;
                height: 16px;
                margin: 0;
                opacity: 0;
                cursor: inherit;
            }

            .box {
                position: relative;
                display: block;
                flex-shrink: 0;
                width: 16px;
                height: 16px;
                margin-top: 1px;
                box-sizing: border-box;
                border: 1px solid var(--ui-ink);
                border-radius: var(--ui-radius-xs);
                background-color: transparent; /* Carbon: a filled box looks off on tinted layers */
                color: var(--ui-icon-inverse); /* Carbon: the check mark is icon-inverse on the icon-primary box */
            }

            /* Carbon's check mark: a 9×5 L of 1.5px borders rotated −45° about its bottom-right corner (checkbox.scss ::after) */
            .box::after {
                content: '';
                position: absolute;
                /* Carbon frame: box at 3px from the label, mark at 7px → 4px / 0.5px from the box edge; our frame is the 1px-bordered box, hence 3 / -0.5 */
                top: -0.5px;
                inset-inline-start: 3px;
                box-sizing: border-box;
                width: 9px;
                height: 5px;
                border-bottom: 1.5px solid currentColor;
                border-left: 1.5px solid currentColor;
                transform: scale(0) rotate(-45deg);
                transform-origin: bottom right;
            }

            input:checked + .box,
            input:indeterminate + .box {
                background-color: var(--ui-ink);
            }

            input:checked + .box::after {
                transform: scale(1) rotate(-45deg);
            }

            input:indeterminate + .box::after {
                top: 4px; /* Carbon indeterminate: 8px bar, 2px thick, 11px − 3px margin from the label → rows 8–10 of the 16px box, 1px below centre as on Carbon (kept on purpose, user's choice 2026-10-05) */
                inset-inline-start: 3px;
                width: 8px;
                border-left-width: 0;
                border-bottom-width: 2px;
                transform: scale(1) rotate(0deg);
            }

            /* Carbon checkbox:focus (not :focus-visible), so a click shows the ring too */
            input:focus + .box {
                outline: 2px solid var(--ui-focus);
                outline-offset: 1px;
            }

            .invalid .box,
            :host([data-group-invalid]) .box {
                border: 2px solid var(--ui-error);
            }

            :host([data-disabled]) label {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
            }

            :host([data-disabled]) .box {
                border-color: var(--ui-ink-disabled);
            }

            :host([data-disabled]) input:checked + .box,
            :host([data-disabled]) input:indeterminate + .box {
                background-color: var(--ui-ink-disabled);
            }

            :host([data-readonly]) label {
                cursor: default;
            }

            :host([data-readonly]) .box {
                border-color: var(--ui-ink-subtle);
            }

            :host([data-readonly]) input:checked + .box,
            :host([data-readonly]) input:indeterminate + .box {
                background-color: var(--ui-ink-muted);
            }

            .error,
            .warn,
            .helper {
                padding-inline-start: calc(16px + var(--ui-space-xs));
            }

            @media (forced-colors: active) {
                .box {
                    border-color: CanvasText;
                    forced-color-adjust: none;
                }
                input:checked + .box,
                input:indeterminate + .box {
                    background-color: Highlight;
                    color: HighlightText;
                }
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}constructor(){super(),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.required=!1,this.readonly=!1,this.groupDisabled=!1,this.groupReadonly=!1,this.groupMessage=``,this.hideLabel=!1,this.name=``,this.value=`on`,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.touched=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.inputId=_(`ui-checkbox`),this.controlTabIndex=void 0,this.defaultChecked=!1,this.onLabelClick=e=>{y(this,e)&&!this.isDisabled&&!this.isReadonly&&this.input.click()},this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()},this.addEventListener(`click`,this.onLabelClick)}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.defaultChecked=this.checked),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.onFormInvalid)}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.checked=this.defaultChecked,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.checked=e===`true`)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||this.groupDisabled||a(this)}get interactive(){return!this.isDisabled&&!this.isReadonly}get isReadonly(){return this.readonly||this.groupReadonly}updated(e){e.has(`checked`)&&this.closest(`ui-checkbox-group`)?.requestUpdate(),this.toggleAttribute(`data-disabled`,this.isDisabled),this.toggleAttribute(`data-readonly`,this.isReadonly),this.input.indeterminate=this.indeterminate,this.syncValidity(),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`||this.groupMessage!==``&&this.interactive),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}syncValidity(){if(p(this.internals,this.isDisabled))return;this.internals.setFormValue(this.checked?this.value:null,String(this.checked));let e=i(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.input):this.required&&!this.checked?this.internals.setValidity({valueMissing:!0},this.input.validationMessage||` `,this.input):this.internals.setValidity({})}onClick(e){this.isReadonly&&e.preventDefault()}onInput(){this.checked=this.input.checked,this.indeterminate=!1}onChange(){this.checked=this.input.checked,this.indeterminate=!1,this.touched=!0,this.dispatchEvent(new Event(`change`,{bubbles:!0}))}renderBox(){return l`<span class="box" part="box" aria-hidden="true"></span>`}render(){let e=this.interactive&&(this.invalid||this.touched&&(!!this.customValidityMessage||this.required&&!this.checked)),t=r({showError:e,errorText:s(this.invalid,this.customValidityMessage,this.invalidText||this.input?.validationMessage||``),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText});this.shownKind=t?.kind;let n=this.groupMessage?`${this.inputId}-group-message`:void 0,i=[o(this.inputId,t),n].filter(Boolean).join(` `)||c;return l`
            <label class=${e?`invalid`:``} part="base">
                <input
                    part="control"
                    id=${this.inputId}
                    type="checkbox"
                    tabindex=${this.controlTabIndex??c}
                    .checked=${this.checked}
                    ?disabled=${this.isDisabled}
                    ?required=${this.required}
                    aria-readonly=${this.isReadonly?`true`:c}
                    aria-invalid=${e||n?`true`:`false`}
                    aria-describedby=${i}
                    @click=${this.onClick}
                    @input=${this.onInput}
                    @change=${this.onChange}
                />
                ${this.renderBox()}
                <span class=${this.hideLabel?`sr-only`:``} part="label"><slot></slot></span>
            </label>
            ${g(this.inputId,t,!0)}
            ${n?l`<span class="sr-only" id=${n}>${this.groupMessage}</span>`:c}
        `}};e([m({type:Boolean,reflect:!0})],b.prototype,`checked`,void 0),e([m({type:Boolean,reflect:!0})],b.prototype,`indeterminate`,void 0),e([m({type:Boolean,reflect:!0})],b.prototype,`disabled`,void 0),e([m({type:Boolean,reflect:!0})],b.prototype,`required`,void 0),e([m({type:Boolean,reflect:!0})],b.prototype,`readonly`,void 0),e([m({attribute:!1})],b.prototype,`groupDisabled`,void 0),e([m({attribute:!1})],b.prototype,`groupReadonly`,void 0),e([m({attribute:!1})],b.prototype,`groupMessage`,void 0),e([m({type:Boolean,attribute:`hide-label`})],b.prototype,`hideLabel`,void 0),e([m({reflect:!0})],b.prototype,`name`,void 0),e([m()],b.prototype,`value`,void 0),e([m({attribute:`helper-text`})],b.prototype,`helperText`,void 0),e([m({attribute:`invalid-text`})],b.prototype,`invalidText`,void 0),e([m({type:Boolean,reflect:!0})],b.prototype,`invalid`,void 0),e([m({type:Boolean,reflect:!0})],b.prototype,`warn`,void 0),e([m({attribute:`warn-text`})],b.prototype,`warnText`,void 0),e([h()],b.prototype,`touched`,void 0),e([h()],b.prototype,`fieldsetDisabled`,void 0),e([u(`input`)],b.prototype,`input`,void 0),b=e([f(`ui-checkbox`)],b);export{b as t};
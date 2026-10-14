import{$ as e,B as t,C as n,Ct as r,F as i,G as a,I as o,J as s,K as c,M as l,R as u,U as d,V as f,_t as p,bt as m,et as h,ft as g,gt as _,h as v,ht as y,j as b,mt as x,pt as S,q as C,tt as w,w as T,x as E}from"./theme-switcher-BKi8EfZd.js";import{n as D,r as O,t as k}from"./affixes-CuT3Z31w.js";import{t as A}from"./skeleton-CJ3-DC_A.js";import{t as j}from"./live-BjLUomhr.js";import{i as M,n as N,r as P,t as F}from"./number-format-DzPjAHdO.js";var I=class extends A{};I=n([y(`ui-number-input-skeleton`)],I);var L=m`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 7.5h10v1H3z" /></svg>`,R=m`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8.5 3v4.5H13v1H8.5V13h-1V8.5H3v-1h4.5V3z" /></svg>`,z=class extends T{constructor(...t){super(...t),this.label=``,this.localize=new E(this),this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.value=``,this.name=``,this.placeholder=``,this.prefixText=``,this.suffixText=``,this.step=1,this.stepStartValue=0,this.type=`number`,this.locale=``,this.formatOptions={},this.allowEmpty=!1,this.hideSteppers=!1,this.disableWheel=!1,this.size=`md`,this.disabled=!1,this.readonly=!1,this.fluid=!1,this.required=!1,this.decrementLabel=``,this.incrementLabel=``,this.touched=!1,this.fieldsetDisabled=!1,this.text=``,this.internals=this.attachInternals(),this.customValidityMessage=``,this.inputId=w(`ui-number-input`),this.slots=new v(this),this.defaultValue=``,this.committedValue=``,this.formatKey=``,this.onEnterKey=t=>e(this,t),this.affixSizes=new k,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()}}static{this.formAssociated=!0}static{this.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,r`
            :host {
                --_h: var(--ui-field-height-lg, 48px);

                display: block;
                font-family: var(--ui-font-family);
            }

            :host([size='sm']) {
                --_h: var(--ui-field-height-sm, 32px);
            }

            /* the steppers' width */
            :host {
                --_ctrl: 80px;
            }

            :host([hide-steppers]) {
                --_ctrl: 0px;
            }

            :host([size='md']) {
                --_h: var(--ui-field-height-md, 40px);
            }

            .field {
                position: relative;
                display: flex;
                align-items: center;
            }

            /* Carbon number input: 150px min width, controls 80px at the end (+32px when a status icon shows) */
            input {
                box-sizing: border-box;
                width: 100%;
                min-width: 150px;
                height: var(--_h);
                margin: 0;
                padding: 0 96px 0 var(--ui-space-md);
                border: none;
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                appearance: textfield;
                outline: 2px solid transparent;
                outline-offset: -2px;
                /* Carbon number input: background-color and outline at fast-01 */
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing),
                    outline-color var(--ui-duration-fast) var(--ui-easing);
            }

            input::-webkit-inner-spin-button,
            input::-webkit-outer-spin-button {
                appearance: none;
                margin: 0;
            }

            .has-status input {
                padding-inline-end: 128px;
            }

            :host([hide-steppers]) input {
                padding-inline-end: var(--ui-space-md);
            }

            :host([hide-steppers]) .has-status input {
                padding-inline-end: calc(var(--ui-space-md) * 2 + 16px);
            }

            input::placeholder {
                color: var(--ui-ink-placeholder);
                opacity: 1;
            }

            input:focus {
                outline-color: var(--ui-focus);
            }

            .invalid input {
                outline-color: var(--ui-error);
            }

            .invalid input:focus {
                outline-color: var(--ui-focus);
            }

            input:disabled {
                border-bottom-color: transparent;
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
            }

            input:read-only:not(:disabled) {
                background-color: transparent;
                border-bottom-color: var(--ui-hairline);
            }

            /* prefix / suffix: the value 8px clear of them (widths measured, see AffixSizes); the suffix sits before the status icon */
            .field:has(.prefix) input {
                padding-inline-start: calc(var(--ui-space-md) + var(--prefix-width, 0px) + var(--ui-space-xs));
            }

            .field:has(.suffix) input {
                padding-inline-end: calc(var(--_ctrl) + var(--ui-space-md) + var(--suffix-width, 0px) + var(--ui-space-xs));
            }

            .field.has-status:has(.suffix) input {
                padding-inline-end: calc(var(--_ctrl) + var(--ui-space-md) + 16px + var(--ui-space-xs) + var(--suffix-width, 0px) + var(--ui-space-xs));
            }

            .prefix,
            .suffix {
                position: absolute;
                inset-block: 0;
                display: flex;
                align-items: center;
                color: var(--ui-ink-muted);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                white-space: nowrap;
                /* clicks go through to the input */
                pointer-events: none;
            }

            .prefix {
                inset-inline-start: var(--ui-space-md);
            }

            .suffix {
                inset-inline-end: calc(var(--_ctrl) + var(--ui-space-md));
            }

            .has-status .suffix {
                inset-inline-end: calc(var(--_ctrl) + var(--ui-space-md) + 16px + var(--ui-space-xs));
            }

            input:disabled ~ :is(.prefix, .suffix) {
                color: var(--ui-ink-disabled);
            }

            .status {
                position: absolute;
                inset-block: 0;
                inset-inline-end: 80px;
                display: flex;
                align-items: center;
                padding-inline-end: var(--ui-space-md);
                pointer-events: none;
            }

            :host([hide-steppers]) .status {
                inset-inline-end: 0;
            }

            .controls {
                position: absolute;
                inset-block: 0;
                inset-inline-end: 0;
                display: flex;
                align-items: center;
                width: 80px;
            }

            .step {
                position: relative;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 100%;
                padding: 0;
                border: none;
                background: transparent;
                color: var(--ui-ink);
                cursor: pointer;
            }

            .step svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }

            .step:hover {
                background-color: var(--ui-ghost-hover);
                box-shadow: 0 -1px 0 var(--ui-ink-subtle) inset;
            }

            .step:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            .step:disabled {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                background: transparent;
                box-shadow: none;
            }

            /* Carbon rule-divider: a 16px hairline at the start edge of each button, drawn over it so the buttons stay 40px */
            .step::before {
                content: '';
                position: absolute;
                inset-inline-start: 0;
                top: 50%;
                width: 1px;
                height: 16px;
                translate: 0 -50%;
                background-color: var(--ui-hairline);
            }

            input:disabled ~ .controls .step::before {
                background-color: transparent;
            }

            /*
             * the field focused, a hovered stepper keeps the field's 2px focus line (as Carbon keeps it for search's ×):
             * its fill is drawn inside it — 2px in from the top and bottom (and the end, for the last one) — under the icon
             */
            .step svg {
                position: relative;
                z-index: 1;
            }

            input:focus ~ .controls .step:hover {
                background-color: transparent;
                box-shadow: none;
            }

            input:focus ~ .controls .step:hover::after {
                content: '';
                position: absolute;
                inset-block: 2px;
                inset-inline: 0;
                background-color: var(--ui-ghost-hover);
                pointer-events: none;
            }

            input:focus ~ .controls .step:last-child:hover::after {
                inset-inline-end: 2px;
            }

            @media (forced-colors: active) {
                input {
                    border: 1px solid FieldText;
                }
                input:focus {
                    outline-color: Highlight;
                }
                .step {
                    border: 1px solid ButtonText;
                }
            }
        `,o,r`
            :host([data-fluid]) {
                --_h: 64px;
            }

            :host([data-fluid]) input,
            :host([data-fluid]) .has-status input {
                padding-block: 32px 13px;
                padding-inline-end: 80px;
            }

            :host([data-fluid][hide-steppers]) input {
                padding-inline-end: var(--ui-space-md);
            }

            /* the status icon sits in the message row: the suffix keeps its place; both on the value's line */
            :host([data-fluid]) .field:has(.suffix) input {
                padding-inline-end: calc(var(--_ctrl) + var(--ui-space-md) + var(--suffix-width, 0px) + var(--ui-space-xs));
            }

            :host([data-fluid]) :is(.prefix, .suffix) {
                inset-block: 32px auto;
                block-size: 18px;
            }

            :host([data-fluid]) .has-status .suffix {
                inset-inline-end: calc(var(--_ctrl) + var(--ui-space-md));
            }

            /* Carbon fluid number input: the 40px steppers sit 23px down, level with the value */
            :host([data-fluid]) .controls {
                inset-block: 23px auto;
                block-size: 40px;
            }

            :host([data-fluid]) .status {
                --ui-fluid-icon-end: var(--ui-space-md);
                inset-inline-end: 0;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}get valueAsNumber(){return this.value.trim()===``?NaN:Number(this.value)}connectedCallback(){super.connectedCallback(),h(this,this.fluid),this.addEventListener(`keydown`,this.onEnterKey),this.hasUpdated||(this.defaultValue=this.value),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey),this.removeEventListener(`invalid`,this.onFormInvalid),this.affixSizes.disconnect()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.touched=!0,this.internals.reportValidity()}willUpdate(e){if(h(this,this.fluid),e.has(`value`)&&this.value!==``&&!F(this.value)){let e=this.type===`text`?this.numberFormat.parse(this.value):NaN;this.value=Number.isNaN(e)?``:String(e)}if(this.type!==`text`)return;let t=`${this.numberFormat.locale}|${JSON.stringify(this.formatOptions)}`;(t!==this.formatKey||e.has(`type`)||e.has(`value`)&&this.value!==this.typedValue)&&(this.formatKey=t,this.showValue())}get numberFormat(){let e=this.locale||this.localize.lang();try{return N(e,this.formatOptions??{})}catch(t){return console.warn(`ui-number-input: invalid locale "${e}" or format-options`,t),N(`en`)}}showValue(){this.typedValue=void 0,this.text=this.value===``?``:this.numberFormat.format(Number(this.value))}updated(e){this.syncFormState(),(e.has(`prefixText`)||e.has(`suffixText`))&&this.affixSizes.follow(this.renderRoot,this.input),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}formResetCallback(){this.value=this.defaultValue,this.committedValue=this.value,this.touched=!1,this.type===`text`&&this.showValue()}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e,this.type===`text`&&this.showValue())}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||u(this)}get interactive(){return!this.isDisabled&&!this.readonly}get isEmpty(){return this.type===`text`?this.text.trim()===``:this.value.trim()===``}get badText(){return this.type===`text`&&!this.isEmpty&&this.value===``}rangeError(){let e=this.valueAsNumber;if(this.type!==`text`||Number.isNaN(e))return;let{field:t}=this.localize.t;if(this.min!==void 0&&e<this.min)return[{rangeUnderflow:!0},this.invalidText||t.rangeUnderflow.replace(`{min}`,this.numberFormat.format(this.min))];if(this.max!==void 0&&e>this.max)return[{rangeOverflow:!0},this.invalidText||t.rangeOverflow.replace(`{max}`,this.numberFormat.format(this.max))]}syncFormState(){if(b(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=l(this.invalid,this.invalidText,this.customValidityMessage),t=this.rangeError();e?this.internals.setValidity({customError:!0},e,this.input):this.badText?this.internals.setValidity({badInput:!0},this.invalidText||this.localize.t.field.enterNumber,this.input):this.isEmpty&&!this.allowEmpty&&!this.required?this.internals.setValidity({valueMissing:!0},this.invalidText||this.input.validationMessage||this.localize.t.field.enterNumber,this.input):t?this.internals.setValidity(t[0],t[1],this.input):this.input.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.input.validity,d(this.input,this.localize.t.field.required),this.input)}onInput(e){let t=e.target.value;if(this.type!==`text`){this.value=t;return}let n=this.numberFormat.parse(t);this.text=t,this.value=Number.isNaN(n)?``:String(n),this.typedValue=this.value}onChange(){this.type!==`text`&&this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onFocus(){this.committedValue=this.value}onBlur(){if(this.touched=!0,this.type!==`text`)return;let e=this.numberFormat.round(this.valueAsNumber);this.value=Number.isNaN(e)?``:String(e),this.showValue(),this.value!==this.committedValue&&(this.committedValue=this.value,this.dispatchEvent(new Event(`change`,{bubbles:!0})))}onKeydown(e){(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),this.stepBy(e.key===`ArrowUp`?1:-1))}onWheel(e){this.disableWheel&&e.preventDefault()}stepBy(e){if(!this.interactive)return;let t=P(this.valueAsNumber,e,{step:this.step,min:this.min,max:this.max,stepStartValue:this.stepStartValue});this.type===`text`&&(t=this.numberFormat.round(t));let n=String(t);n!==this.value&&(this.value=n,this.committedValue=n,this.type===`text`&&this.showValue(),this.touched=!0,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0})))}get showError(){return this.interactive?this.invalid?!0:this.touched&&!this.internals.validity.valid:!1}get errorText(){return this.customValidityMessage&&!this.invalid?this.customValidityMessage:this.invalidText||this.internals.validationMessage||``}renderLabel(){return!this.label&&!this.slots.has(`label`)?p:m`<label class=${this.hideLabel?`sr-only`:`label`} part="label" for=${this.inputId}>${c(this.label)}</label>`}renderSteppers(){if(this.hideSteppers)return p;let{atMin:e,atMax:t}=M(this.valueAsNumber,this.min,this.max);return m`<span class="controls" part="controls">
            <button class="step" part="decrement-button" type="button" tabindex="-1" aria-label=${this.decrementLabel||this.localize.t.field.decrement} ?disabled=${!this.interactive||e} @click=${()=>this.stepBy(-1)}>
                ${L}
            </button>
            <button class="step" part="increment-button" type="button" tabindex="-1" aria-label=${this.incrementLabel||this.localize.t.field.increment} ?disabled=${!this.interactive||t} @click=${()=>this.stepBy(1)}>
                ${R}
            </button>
        </span>`}render(){let e=this.showError,n=a({showError:e,errorText:this.errorText,showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});t(this,n),this.shownKind=n?.kind;let r=[e?`invalid`:``,n&&n.kind!==`helper`?`has-status`:``].filter(Boolean).join(` `);return m`
            ${this.renderLabel()}
            <div class="field ${r}" part="base">
                <input
                    part="input"
                    id=${this.inputId}
                    type=${this.type===`text`?`text`:`number`}
                    inputmode="decimal"
                    .value=${j(this.type===`text`?this.text:this.value)}
                    name=${this.name||p}
                    placeholder=${this.placeholder||p}
                    min=${this.type===`text`?p:this.min??p}
                    max=${this.type===`text`?p:this.max??p}
                    step=${this.type===`text`?p:this.step}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-invalid=${e?`true`:`false`}
                    aria-describedby=${D(this.inputId,this.prefixText,this.suffixText,f(this.inputId,n))}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @keydown=${this.onKeydown}
                    @wheel=${this.onWheel}
                    @focus=${this.onFocus}
                    @blur=${this.onBlur}
                />
                ${O(this.inputId,`prefix`,this.prefixText)}${O(this.inputId,`suffix`,this.suffixText)}
                <span class="status">${s(n)}</span>
                ${this.renderSteppers()}
            </div>
            ${C(this.inputId,n)}
        `}};n([x()],z.prototype,`label`,void 0),n([x({type:Boolean,attribute:`hide-label`})],z.prototype,`hideLabel`,void 0),n([x({attribute:`helper-text`})],z.prototype,`helperText`,void 0),n([x({attribute:`invalid-text`})],z.prototype,`invalidText`,void 0),n([x({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),n([x({type:Boolean,reflect:!0})],z.prototype,`warn`,void 0),n([x({attribute:`warn-text`})],z.prototype,`warnText`,void 0),n([x()],z.prototype,`value`,void 0),n([x({reflect:!0})],z.prototype,`name`,void 0),n([x()],z.prototype,`placeholder`,void 0),n([x({attribute:`prefix-text`})],z.prototype,`prefixText`,void 0),n([x({attribute:`suffix-text`})],z.prototype,`suffixText`,void 0),n([x({type:Number})],z.prototype,`min`,void 0),n([x({type:Number})],z.prototype,`max`,void 0),n([x({type:Number})],z.prototype,`step`,void 0),n([x({type:Number,attribute:`step-start-value`})],z.prototype,`stepStartValue`,void 0),n([x({reflect:!0})],z.prototype,`type`,void 0),n([x()],z.prototype,`locale`,void 0),n([x({type:Object,attribute:`format-options`})],z.prototype,`formatOptions`,void 0),n([x({type:Boolean,attribute:`allow-empty`})],z.prototype,`allowEmpty`,void 0),n([x({type:Boolean,reflect:!0,attribute:`hide-steppers`})],z.prototype,`hideSteppers`,void 0),n([x({type:Boolean,attribute:`disable-wheel`})],z.prototype,`disableWheel`,void 0),n([x({reflect:!0})],z.prototype,`size`,void 0),n([x({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),n([x({type:Boolean,reflect:!0})],z.prototype,`readonly`,void 0),n([x({type:Boolean,reflect:!0})],z.prototype,`fluid`,void 0),n([x({type:Boolean,reflect:!0})],z.prototype,`required`,void 0),n([x({attribute:`decrement-label`})],z.prototype,`decrementLabel`,void 0),n([x({attribute:`increment-label`})],z.prototype,`incrementLabel`,void 0),n([S()],z.prototype,`touched`,void 0),n([S()],z.prototype,`fieldsetDisabled`,void 0),n([S()],z.prototype,`text`,void 0),n([g(`input`)],z.prototype,`input`,void 0),z=n([y(`ui-number-input`)],z);
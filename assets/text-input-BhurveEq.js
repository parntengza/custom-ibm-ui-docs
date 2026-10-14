import{$ as e,B as t,C as n,Ct as r,F as i,G as a,I as o,J as s,K as c,L as l,M as u,R as d,U as f,V as p,_t as m,bt as h,et as g,ft as _,gt as v,h as y,ht as b,j as x,mt as S,nt as C,pt as w,q as T,tt as E,w as D,x as O}from"./theme-switcher-BKi8EfZd.js";import{n as k,r as A,t as j}from"./affixes-CuT3Z31w.js";import{a as M,i as N,n as P,r as F,t as I}from"./mask-BgmAmoJG.js";var L=h`<svg viewBox="0 0 16 16" aria-hidden="true">
    <path
        d="M15.5 7.8C14.3 4.7 11.3 2.5 8 2.5S1.7 4.7.5 7.8v.4c1.2 3.1 4.2 5.3 7.5 5.3s6.3-2.2 7.5-5.3v-.4ZM8 12.5c-2.7 0-5.4-1.9-6.5-4.5C2.6 5.4 5.3 3.5 8 3.5s5.4 1.9 6.5 4.5c-1.1 2.6-3.8 4.5-6.5 4.5Z"
    />
    <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
</svg>`,R=h`<svg viewBox="0 0 16 16" aria-hidden="true">
    <path
        d="m2.6 11.3.7-.7C2.5 9.9 1.9 9 1.5 8c1.1-2.6 3.8-4.5 6.5-4.5.9 0 1.7.2 2.5.5l.8-.8c-1-.4-2.1-.7-3.3-.7C4.7 2.5 1.7 4.7.5 7.8v.4c.5 1.2 1.2 2.3 2.1 3.1ZM6 7.9A2 2 0 0 1 7.9 6l.9-.9A3 3 0 0 0 5.1 8.8l.9-.9ZM15.5 7.8c-.6-1.5-1.5-2.8-2.7-3.8L15 1.7 14.3 1 1 14.3l.7.7 2.5-2.5c1.1.6 2.4 1 3.8 1 3.3 0 6.3-2.2 7.5-5.3v-.4ZM10 8a2 2 0 0 1-2 2c-.3 0-.6-.1-.9-.2l2.7-2.7c.1.3.2.6.2.9Zm-2 4.5c-1.1 0-2.1-.3-3-.8L6.4 10.3c.5.4 1 .7 1.6.7a3 3 0 0 0 3-3c0-.6-.3-1.2-.7-1.6L12 4.7c1.1.9 2 2 2.5 3.3-1.1 2.6-3.8 4.5-6.5 4.5Z"
    />
</svg>`,z=class extends D{constructor(...t){super(...t),this.label=``,this.localize=new O(this),this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.value=``,this.name=``,this.type=`text`,this.size=`md`,this.placeholder=``,this.autocomplete=``,this.inputmode=``,this.enterkeyhint=``,this.pattern=``,this.prefixText=``,this.suffixText=``,this.mask=``,this.tooLongText=``,this.nearLimitText=``,this.disabled=!1,this.readonly=!1,this.fluid=!1,this.required=!1,this.showPasswordLabel=``,this.hidePasswordLabel=``,this.inline=!1,this.touched=!1,this.fieldsetDisabled=!1,this.passwordVisible=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.inputId=E(`ui-text-input`),this.defaultValue=``,this.onEnterKey=t=>e(this,t),this.affixSizes=new j,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()},this.slots=new y(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,r`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .field {
                position: relative;
                display: flex;
                align-items: center;
            }

            .top {
                display: flex;
                justify-content: space-between;
                gap: var(--ui-space-xs);
            }

            .counter {
                margin-inline-start: auto;
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
                color: var(--ui-ink-muted);
            }

            .counter.over {
                color: var(--ui-error);
            }

            input {
                box-sizing: border-box;
                width: 100%;
                min-height: var(--ui-field-height-lg, 48px);
                margin: 0;
                padding: 0 var(--end-pad, var(--ui-space-md)) 0 var(--ui-space-md);
                border: none;
                /* ink-subtle keeps the 3:1 non-text contrast WCAG 1.4.11 asks of input edges */
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                outline: 2px solid transparent;
                outline-offset: -2px;
                /* Carbon text-input: background-color and outline at fast-01 */
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing),
                    outline-color var(--ui-duration-fast) var(--ui-easing);
            }

            :host([size='sm']) input {
                min-height: var(--ui-field-height-sm, 32px);
            }

            :host([size='md']) input {
                min-height: var(--ui-field-height-md, 40px);
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

            input:disabled::placeholder {
                color: var(--ui-ink-disabled);
            }

            input:read-only:not(:disabled) {
                background-color: transparent;
                border-bottom-color: var(--ui-hairline);
            }

            /* the value starts after the prefix and stops before the suffix (widths measured, see measureAffixes) */
            .field:has(.prefix) input {
                padding-inline-start: calc(var(--ui-space-md) + var(--prefix-width, 0px) + var(--ui-space-xs));
            }

            .field:has(.suffix) input {
                padding-inline-end: calc(var(--end-pad) + var(--suffix-width, 0px) + var(--ui-space-xs));
            }

            /* the toggle brings no gap of its own */
            .field:has(.suffix):has(.reveal) input {
                padding-inline-end: calc(var(--end-pad) + var(--suffix-width, 0px) + 2 * var(--ui-space-xs));
            }

            .prefix,
            .suffix {
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                color: var(--ui-ink-muted);
                white-space: nowrap;
            }

            /* clicks go through to the input */
            .prefix {
                position: absolute;
                inset-block: 0;
                inset-inline-start: var(--ui-space-md);
                display: flex;
                align-items: center;
                pointer-events: none;
            }

            input:disabled ~ .prefix,
            input:disabled ~ .adornments .suffix {
                color: var(--ui-ink-disabled);
            }

            .adornments {
                position: absolute;
                inset-block: 0;
                inset-inline-end: 0;
                display: flex;
                align-items: center;
                gap: var(--ui-space-xs);
                padding-inline-end: var(--ui-space-md);
                /* Let clicks on the empty area reach the input; the toggle opts back in */
                pointer-events: none;
            }

            .adornments:has(.reveal) {
                padding-inline-end: 0;
            }

            .reveal {
                display: grid;
                place-items: center;
                width: 40px;
                height: 40px;
                padding: 0;
                border: none;
                background: transparent;
                color: var(--ui-ink);
                cursor: pointer;
                pointer-events: auto;
                /* Carbon password visibility toggle: its outline at fast-01 */
                outline: 2px solid transparent;
                outline-offset: -2px;
                transition: outline-color var(--ui-duration-fast) var(--ui-easing);
            }

            .reveal svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }


            .reveal:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            .reveal:disabled {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                background: transparent;
            }

            /*
             * Carbon inline (text-input-wrapper--inline): label, field and message in one row, centred; the label and
             * the message each at most 142px and 8px from the field, which takes the rest (flex: 8).
             */
            :host([inline]:not([data-fluid])) {
                display: flex;
                align-items: center;
            }

            :host([inline]:not([data-fluid])) .top {
                flex: 0 1 auto;
                max-inline-size: 142px;
                margin-inline-end: var(--ui-space-xs);
                overflow-wrap: break-word;
            }

            :host([inline]:not([data-fluid])) .label {
                margin: 0;
                word-break: break-word;
            }

            :host([inline]:not([data-fluid])) .field {
                flex: 8;
            }

            .inline-message {
                flex: 0 1 auto;
                max-inline-size: 142px;
                margin-inline-start: var(--ui-space-xs);
                overflow-wrap: break-word;
            }

            .inline-message > p {
                margin: 0;
            }

            @media (forced-colors: active) {
                input {
                    border: 1px solid FieldText;
                }
                input:focus {
                    outline-color: Highlight;
                }
            }
        `,o,r`
            :host([data-fluid]) input {
                block-size: 64px;
                min-height: 64px;
                padding-block: 32px 13px;
            }

            :host([data-fluid]) .adornments {
                --ui-fluid-icon-end: var(--ui-space-md);
                inset-block: 24px auto;
                block-size: 40px;
            }

            /* on the value's line (32px down, 18px tall) */
            :host([data-fluid]) .prefix {
                inset-block: 32px auto;
                block-size: 18px;
            }

            :host([data-fluid]) .suffix {
                align-self: flex-start;
                margin-block-start: 8px;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}willUpdate(e){g(this,this.fluid),this.mask&&(e.has(`value`)||e.has(`mask`))&&(this.value=I(this.value,this.mask))}get rawValue(){return this.mask?M(this.value,this.mask):this.value}connectedCallback(){super.connectedCallback(),g(this,this.fluid),this.addEventListener(`keydown`,this.onEnterKey),this.hasUpdated||(this.defaultValue=this.value),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.onEnterKey),this.removeEventListener(`invalid`,this.onFormInvalid),this.affixSizes.disconnect()}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.touched=!0,this.internals.reportValidity()}updated(e){this.syncFormState(),(e.has(`prefixText`)||e.has(`suffixText`))&&this.affixSizes.follow(this.renderRoot,this.input),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`),this.toggleAttribute(`data-password-visible`,this.type===`password`&&this.passwordVisible)}formResetCallback(){this.value=this.defaultValue,this.touched=!1,this.passwordVisible=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||d(this)}syncFormState(){if(x(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=u(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.input):this.overLimit?this.internals.setValidity({tooLong:!0},this.tooLongMessage,this.input):this.input.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.input.validity,f(this.input,this.localize.t.field.required),this.input)}onInput(e){let t=e.target;if(this.mask&&!e.isComposing){let n=F(this.value,t.value,t.selectionStart??t.value.length,this.mask,P(e.inputType));t.value=n.value,t.selectionStart!==null&&t.setSelectionRange(n.caret,n.caret)}this.value=t.value}onChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onBlur(){this.touched=!0}togglePassword(){this.passwordVisible=!this.passwordVisible,this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{visible:this.passwordVisible},bubbles:!0,composed:!0}))}get interactive(){return!this.isDisabled&&!this.readonly}get count(){return C(this.value.length,this.maxCount)}get overLimit(){return this.count.over}get tooLongMessage(){return(this.tooLongText||this.localize.t.field.tooLong).replace(`{max}`,String(this.maxCount))}get showError(){return this.interactive?this.invalid||this.overLimit?!0:this.touched&&(!!this.customValidityMessage||!!this.input&&!this.input.validity.valid):!1}get counterAnnouncement(){return this.count.over?this.tooLongMessage:this.count.near?this.nearLimitText||this.localize.t.field.nearLimit:``}renderCounter(){return this.maxCount===void 0?m:h`<span class="counter ${this.overLimit?`over`:``}" part="counter" aria-hidden="true">
                ${this.value.length}/${this.maxCount}
            </span>
            <span class="sr-only" aria-live="polite">${this.counterAnnouncement}</span>`}get errorText(){return this.customValidityMessage&&!this.invalid?this.customValidityMessage:this.invalidText?this.invalidText:this.overLimit?this.tooLongMessage:this.input?f(this.input,this.localize.t.field.required):``}renderLabel(){return!this.label&&!this.slots.has(`label`)?m:h`<label class=${this.hideLabel?`sr-only`:`label`} part="label" for=${this.inputId}>${c(this.label)}</label>`}get revealLabel(){let e=this.localize.t.field;return this.passwordVisible?this.hidePasswordLabel||e.hidePassword:this.showPasswordLabel||e.showPassword}renderReveal(){if(this.type!==`password`)return m;let e=this.revealLabel;return h`<ui-tooltip as-label part="password-tooltip" text=${e} placement="bottom-end"
            ><button class="reveal" part="password-toggle" type="button" aria-label=${e} ?disabled=${this.isDisabled} @click=${this.togglePassword}>
                ${this.passwordVisible?R:L}
            </button></ui-tooltip
        >`}renderMessageBox(e){let t=T(this.inputId,e);return!this.inline||l(this,`fluid`)?t:h`<div class="inline-message">${t}</div>`}get keyboard(){return this.inputmode||this.mask&&N(this.mask)||m}get inputType(){return this.type===`password`&&this.passwordVisible?`text`:this.type}render(){let e=this.showError,n=a({showError:e,errorText:this.errorText,showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});t(this,n),this.shownKind=n?.kind;let r=p(this.inputId,n),i=n&&n.kind!==`helper`&&!l(this,`fluid`)?24:0,o=this.type===`password`?40:16;return h`
            <div class="top">${this.renderLabel()}${this.renderCounter()}</div>
            <div class="field ${e?`invalid`:``}" part="base" style="--end-pad: ${i+o}px">
                <input
                    part="input"
                    id=${this.inputId}
                    .value=${this.value}
                    type=${this.inputType}
                    name=${this.name||m}
                    placeholder=${this.placeholder||m}
                    autocomplete=${this.autocomplete||m}
                    inputmode=${this.keyboard}
                    enterkeyhint=${this.enterkeyhint||m}
                    pattern=${this.pattern||m}
                    minlength=${this.minlength??m}
                    maxlength=${this.maxlength??m}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-invalid=${e?`true`:`false`}
                    aria-describedby=${k(this.inputId,this.prefixText,this.suffixText,r)}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @blur=${this.onBlur}
                />
                ${A(this.inputId,`prefix`,this.prefixText)}
                <span class="adornments">${A(this.inputId,`suffix`,this.suffixText)}${s(n)}${this.renderReveal()}</span>
            </div>
            ${this.renderMessageBox(n)}
        `}};n([S()],z.prototype,`label`,void 0),n([S({type:Boolean,attribute:`hide-label`})],z.prototype,`hideLabel`,void 0),n([S({attribute:`helper-text`})],z.prototype,`helperText`,void 0),n([S({attribute:`invalid-text`})],z.prototype,`invalidText`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`invalid`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`warn`,void 0),n([S({attribute:`warn-text`})],z.prototype,`warnText`,void 0),n([S()],z.prototype,`value`,void 0),n([S({reflect:!0})],z.prototype,`name`,void 0),n([S()],z.prototype,`type`,void 0),n([S({type:String,reflect:!0})],z.prototype,`size`,void 0),n([S()],z.prototype,`placeholder`,void 0),n([S()],z.prototype,`autocomplete`,void 0),n([S()],z.prototype,`inputmode`,void 0),n([S()],z.prototype,`enterkeyhint`,void 0),n([S()],z.prototype,`pattern`,void 0),n([S({attribute:`prefix-text`})],z.prototype,`prefixText`,void 0),n([S({attribute:`suffix-text`})],z.prototype,`suffixText`,void 0),n([S()],z.prototype,`mask`,void 0),n([S({type:Number})],z.prototype,`minlength`,void 0),n([S({type:Number})],z.prototype,`maxlength`,void 0),n([S({type:Number,attribute:`max-count`})],z.prototype,`maxCount`,void 0),n([S({attribute:`too-long-text`})],z.prototype,`tooLongText`,void 0),n([S({attribute:`near-limit-text`})],z.prototype,`nearLimitText`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`disabled`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`readonly`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`fluid`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`required`,void 0),n([S({attribute:`show-password-label`})],z.prototype,`showPasswordLabel`,void 0),n([S({attribute:`hide-password-label`})],z.prototype,`hidePasswordLabel`,void 0),n([S({type:Boolean,reflect:!0})],z.prototype,`inline`,void 0),n([w()],z.prototype,`touched`,void 0),n([w()],z.prototype,`fieldsetDisabled`,void 0),n([w()],z.prototype,`passwordVisible`,void 0),n([_(`input`)],z.prototype,`input`,void 0),z=n([b(`ui-text-input`)],z);
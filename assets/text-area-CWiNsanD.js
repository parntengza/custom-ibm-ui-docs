import{B as e,C as t,Ct as n,F as r,G as i,I as a,J as o,K as s,M as c,R as l,U as u,V as d,_t as f,bt as p,et as m,ft as h,gt as g,h as _,ht as v,j as y,mt as b,nt as x,pt as S,q as C,rt as w,tt as T,w as E,x as D}from"./theme-switcher-BKi8EfZd.js";import{n as O,t as k}from"./auto-grow-B4XS1-9c.js";var A=class extends E{constructor(...e){super(...e),this.label=``,this.localize=new D(this),this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.value=``,this.name=``,this.placeholder=``,this.rows=4,this.autocomplete=``,this.inputmode=``,this.enterkeyhint=``,this.counterMode=`character`,this.autoGrow=!1,this.tooLongText=``,this.nearLimitText=``,this.disabled=!1,this.readonly=!1,this.fluid=!1,this.required=!1,this.touched=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.inputId=T(`ui-text-area`),this.slots=new _(this),this.defaultValue=``,this.lastWidth=0,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()}}static{this.formAssociated=!0}static{this.shadowRootOptions={...g.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[r,n`
            :host {
                display: block;
                font-family: var(--ui-font-family);
            }

            .field {
                position: relative;
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

            /* Carbon text-area: 11px/16px padding, 40px min, body-01, vertical resize */
            textarea {
                box-sizing: border-box;
                display: block;
                width: 100%;
                min-width: 10rem;
                min-height: 40px;
                margin: 0;
                padding: 11px var(--ui-space-md);
                border: none;
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                line-height: 20px; /* body-01 */
                letter-spacing: var(--ui-tracking-body);
                resize: vertical;
                outline: 2px solid transparent;
                outline-offset: -2px;
                /* Carbon text-area: background-color and outline at fast-01 */
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing),
                    outline-color var(--ui-duration-fast) var(--ui-easing);
            }

            /* room for the status icon so text doesn't run under it */
            .has-status textarea {
                padding-inline-end: calc(var(--ui-space-md) * 2 + 16px);
            }

            textarea::placeholder {
                color: var(--ui-ink-placeholder);
                opacity: 1;
            }

            textarea:focus {
                outline-color: var(--ui-focus);
            }

            .invalid textarea {
                outline-color: var(--ui-error);
            }

            .invalid textarea:focus {
                outline-color: var(--ui-focus);
            }

            textarea:disabled {
                border-bottom-color: transparent;
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                resize: none;
            }

            textarea:disabled::placeholder {
                color: var(--ui-ink-disabled);
            }

            /* sized by its text, not by hand */
            :host([auto-grow]) textarea {
                resize: none;
            }

            textarea:read-only:not(:disabled) {
                background-color: transparent;
                border-bottom-color: var(--ui-hairline);
            }

            /* Carbon: the icon sits in the top-right corner, not vertically centred */
            .status {
                position: absolute;
                top: var(--ui-space-xs);
                inset-inline-end: var(--ui-space-md);
                display: flex;
                pointer-events: none;
            }

            @media (forced-colors: active) {
                textarea {
                    border: 1px solid FieldText;
                }
                textarea:focus {
                    outline-color: Highlight;
                }
            }
        `,a,n`
            /* Carbon fluid text area: the text starts 32px down, under the label */
            :host([data-fluid]) textarea {
                margin-block-start: 32px;
                padding-block: 0 13px;
            }

            :host([data-fluid]) .has-status textarea {
                padding-inline-end: var(--ui-space-md);
            }

            :host([data-fluid]) .status {
                --ui-fluid-icon-end: var(--ui-space-md);
                inset-block: 0;
                inset-inline-end: 0;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}willUpdate(){m(this,this.fluid)}connectedCallback(){super.connectedCallback(),m(this,this.fluid),this.hasUpdated||(this.defaultValue=this.value),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.onFormInvalid),this.widthObserver?.disconnect(),this.widthObserver=void 0}fit(){this.autoGrow&&(k(this.textarea,this.maxRows),this.widthObserver??=new ResizeObserver(([e])=>{let t=e.contentRect.width;t!==this.lastWidth&&(this.lastWidth=t,k(this.textarea,this.maxRows))}),this.widthObserver.observe(this.textarea))}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.touched=!0,this.internals.reportValidity()}updated(e){this.syncFormState(),this.autoGrow?this.fit():e.get(`autoGrow`)&&(this.widthObserver?.disconnect(),O(this.textarea)),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||l(this)}get interactive(){return!this.isDisabled&&!this.readonly}get counted(){return w(this.value,this.counterMode,this.localize.lang())}get count(){return x(this.counted,this.maxCount)}get overLimit(){return this.count.over}get tooLongMessage(){let e=this.localize.t.field;return(this.tooLongText||(this.counterMode===`word`?e.tooManyWords:e.tooLong)).replace(`{max}`,String(this.maxCount))}syncFormState(){if(y(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=c(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.textarea):this.overLimit?this.internals.setValidity({tooLong:!0},this.tooLongMessage,this.textarea):this.textarea.validity.valid?this.internals.setValidity({}):this.internals.setValidity(this.textarea.validity,u(this.textarea,this.localize.t.field.required),this.textarea)}onInput(e){this.value=e.target.value}onChange(){this.dispatchEvent(new Event(`change`,{bubbles:!0}))}get showError(){return this.interactive?this.invalid||this.overLimit?!0:this.touched&&(!!this.customValidityMessage||!!this.textarea&&!this.textarea.validity.valid):!1}get counterAnnouncement(){if(this.count.over)return this.tooLongMessage;if(!this.count.near)return``;let e=this.localize.t.field;return this.nearLimitText||(this.counterMode===`word`?e.nearWordLimit:e.nearLimit)}get errorText(){return this.customValidityMessage&&!this.invalid?this.customValidityMessage:this.invalidText?this.invalidText:this.overLimit?this.tooLongMessage:this.textarea?u(this.textarea,this.localize.t.field.required):``}renderLabel(){return!this.label&&!this.slots.has(`label`)?f:p`<label class=${this.hideLabel?`sr-only`:`label`} part="label" for=${this.inputId}>${s(this.label)}</label>`}renderCounter(){return this.maxCount===void 0?f:p`<span class="counter ${this.overLimit?`over`:``}" part="counter" aria-hidden="true">
                ${this.counted}/${this.maxCount}
            </span>
            <span class="sr-only" aria-live="polite">${this.counterAnnouncement}</span>`}render(){let t=this.showError,n=i({showError:t,errorText:this.errorText,showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots});e(this,n),this.shownKind=n?.kind;let r=[t?`invalid`:``,n&&n.kind!==`helper`?`has-status`:``].filter(Boolean).join(` `);return p`
            <div class="top">${this.renderLabel()}${this.renderCounter()}</div>
            <div class="field ${r}" part="base">
                <textarea
                    part="input"
                    id=${this.inputId}
                    autocomplete=${this.autocomplete||f}
                    inputmode=${this.inputmode||f}
                    enterkeyhint=${this.enterkeyhint||f}
                    .value=${this.value}
                    name=${this.name||f}
                    placeholder=${this.placeholder||f}
                    rows=${this.rows}
                    minlength=${this.minlength??f}
                    maxlength=${this.maxlength??f}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    ?required=${this.required}
                    aria-invalid=${t?`true`:`false`}
                    aria-describedby=${d(this.inputId,n)??f}
                    @input=${this.onInput}
                    @change=${this.onChange}
                    @blur=${()=>this.touched=!0}
                ></textarea>
                <span class="status">${o(n)}</span>
            </div>
            ${C(this.inputId,n)}
        `}};t([b()],A.prototype,`label`,void 0),t([b({type:Boolean,attribute:`hide-label`})],A.prototype,`hideLabel`,void 0),t([b({attribute:`helper-text`})],A.prototype,`helperText`,void 0),t([b({attribute:`invalid-text`})],A.prototype,`invalidText`,void 0),t([b({type:Boolean,reflect:!0})],A.prototype,`invalid`,void 0),t([b({type:Boolean,reflect:!0})],A.prototype,`warn`,void 0),t([b({attribute:`warn-text`})],A.prototype,`warnText`,void 0),t([b()],A.prototype,`value`,void 0),t([b({reflect:!0})],A.prototype,`name`,void 0),t([b()],A.prototype,`placeholder`,void 0),t([b({type:Number})],A.prototype,`rows`,void 0),t([b({type:Number})],A.prototype,`minlength`,void 0),t([b({type:Number})],A.prototype,`maxlength`,void 0),t([b()],A.prototype,`autocomplete`,void 0),t([b()],A.prototype,`inputmode`,void 0),t([b()],A.prototype,`enterkeyhint`,void 0),t([b({type:Number,attribute:`max-count`})],A.prototype,`maxCount`,void 0),t([b({attribute:`counter-mode`})],A.prototype,`counterMode`,void 0),t([b({type:Boolean,reflect:!0,attribute:`auto-grow`})],A.prototype,`autoGrow`,void 0),t([b({type:Number,attribute:`max-rows`})],A.prototype,`maxRows`,void 0),t([b({attribute:`too-long-text`})],A.prototype,`tooLongText`,void 0),t([b({attribute:`near-limit-text`})],A.prototype,`nearLimitText`,void 0),t([b({type:Boolean,reflect:!0})],A.prototype,`disabled`,void 0),t([b({type:Boolean,reflect:!0})],A.prototype,`readonly`,void 0),t([b({type:Boolean,reflect:!0})],A.prototype,`fluid`,void 0),t([b({type:Boolean,reflect:!0})],A.prototype,`required`,void 0),t([S()],A.prototype,`touched`,void 0),t([S()],A.prototype,`fieldsetDisabled`,void 0),t([h(`textarea`)],A.prototype,`textarea`,void 0),A=t([v(`ui-text-area`)],A);
import{B as e,C as t,Ct as n,D as r,F as i,G as a,I as o,J as s,K as c,M as l,R as u,V as d,W as f,Y as p,Z as m,_t as h,bt as g,et as _,ft as v,gt as y,h as b,ht as x,j as S,mt as C,pt as w,q as T,tt as E,w as D,x as O}from"./theme-switcher-BKi8EfZd.js";import{a as k,c as A,i as j,o as M,s as N,t as P}from"./listbox-CJ3hc4cw.js";import{t as F}from"./typeahead-CDCzrGcR.js";import{n as I,t as L}from"./dropdown-BTrTv3n3.js";var R=class extends D{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.direction=`bottom`,this.disabled=!1,this.required=!1,this.readonly=!1,this.loading=!1,this.fluid=!1,this.inline=!1,this.groups=[],this.options=[],this.open=!1,this.activeIndex=-1,this.touched=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.localize=new O(this),this.fieldId=E(`ui-dropdown`),this.defaultValue=``,this.typed=new F,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()},this.reposition=()=>this.position(),this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this.menu)&&!t.includes(this.trigger)&&this.close()},this.slots=new b(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,m,k,j,n`
            :host {
                --_h: var(--ui-field-height-lg, 48px);

                display: block;
                font-family: var(--ui-font-family);
            }

            :host([size='sm']) {
                --_h: var(--ui-field-height-sm, 32px);
            }

            :host([size='md']) {
                --_h: var(--ui-field-height-md, 40px);
            }

            .field {
                position: relative;
            }

            .trigger {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                width: 100%;
                height: var(--_h);
                margin: 0;
                padding: 0 calc(var(--ui-space-md) * 2 + 16px) 0 var(--ui-space-md);
                border: none;
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                text-align: start;
                cursor: pointer;
                outline: 2px solid transparent;
                outline-offset: -2px;
                transition: background-color var(--ui-duration-fast) var(--ui-easing); /* Carbon list-box: all at fast-01; the hover fill is what changes */
            }

            .trigger:hover {
                background-color: var(--ui-ghost-hover);
            }

            .trigger:focus,
            .trigger[aria-expanded='true'] {
                outline-color: var(--ui-focus);
            }

            .text {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .placeholder .text {
                color: var(--ui-ink-muted);
            }

            .invalid .trigger {
                outline-color: var(--ui-error);
            }

            .invalid .trigger:focus {
                outline-color: var(--ui-focus);
            }

            .trigger:disabled {
                border-bottom-color: transparent;
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                background-color: var(--ui-surface-1);
            }

            :host([readonly]) .trigger {
                background-color: transparent;
                border-bottom-color: var(--ui-hairline);
                cursor: default;
            }

            .icons {
                position: absolute;
                inset-block: 0;
                inset-inline-end: var(--ui-space-md); /* Carbon list-box menu icon: 24px box 12px from the end, so the 16px glyph is 16px from it */
                display: flex;
                align-items: center;
                gap: var(--ui-space-xs);
                pointer-events: none;
            }

            .chevron {
                width: 16px;
                height: 16px;
                fill: var(--ui-ink);
                transition: transform var(--ui-duration-fast) var(--ui-easing);
            }

            .open .chevron {
                transform: rotate(180deg);
            }

            :host([readonly]) .chevron {
                fill: var(--ui-ink-subtle);
            }

            .trigger:disabled ~ .icons .chevron {
                fill: var(--ui-ink-disabled);
            }

            .has-status .trigger {
                padding-inline-end: 64px; /* Carbon list-box field with a status icon */
            }

            /* Carbon inline dropdown (measured on react.carbondesignsystem.com): label, field and message in one row */
            :host([inline]) {
                display: inline-grid;
                grid-template-columns: auto auto auto;
                justify-content: start;
                align-items: center;
                column-gap: var(--ui-space-xs);
            }

            :host([inline]) .label {
                margin-bottom: 0;
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
            }

            :host([inline]) .trigger {
                width: auto;
                min-width: 0;
                background-color: transparent;
                border-bottom-color: transparent;
            }

            :host([inline]) .trigger:hover {
                background-color: var(--ui-ghost-hover);
            }

            :host([inline]) .has-status .trigger {
                padding-inline-end: 64px;
            }

            :host([inline]) .icons {
                inset-inline-end: var(--ui-space-md);
            }

            /* the error / warning sits after the field; Carbon's inline dropdown has no helper line */
            :host([inline]) .warn,
            :host([inline]) .error {
                margin: 0;
            }

            :host([inline]) .helper {
                display: none;
            }

            @media (forced-colors: active) {
                .trigger {
                    border: 1px solid FieldText;
                }
                .trigger:focus {
                    outline-color: Highlight;
                }
                .chevron {
                    fill: FieldText;
                }
            }
        `,o,n`
            /* the 64px box is the field's; the open list keeps its rows (--_h), not Carbon's 64px fluid rows (user's choice) */
            :host([data-fluid]) .trigger,
            :host([data-fluid]) .has-status .trigger {
                height: 64px;
                padding: 33px 48px 13px var(--ui-space-md);
            }

            /* Carbon fluid dropdown: the chevron 34px down, 16px from the end */
            :host([data-fluid]) .icons {
                align-items: flex-start;
                padding-block-start: 34px;
                inset-inline-end: var(--ui-space-md);
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}connectedCallback(){super.connectedCallback(),_(this,this.fluid),this.hasUpdated||(!this.value&&!this.hasAttribute(`value`)&&(this.value=p(this)??``),this.defaultValue=this.value),this.readOptions(),this.observer??=new MutationObserver(()=>this.readOptions()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeEventListener(`invalid`,this.onFormInvalid),this.removeMenuListeners()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||u(this)}get interactive(){return!this.isDisabled&&!this.readonly}get selectedIndex(){return this.options.findIndex(e=>e.value===this.value)}willUpdate(e){_(this,this.fluid),this.syncValidity(),this.open&&e.get(`loading`)===!0&&!this.loading&&(this.activeIndex=I(this.options,this.selectedIndex))}updated(e){e.has(`open`)?(this.onOpenChanged(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))):this.open&&e.has(`activeIndex`)&&this.scrollActiveIntoView(),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`),this.toggleAttribute(`data-placeholder`,!this.options[this.selectedIndex])}get listed(){return this.loading?[]:this.options}syncValidity(){if(S(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=this.trigger??void 0,t=l(this.invalid,this.invalidText,this.customValidityMessage);t?this.internals.setValidity({customError:!0},t,e):this.required&&!this.value?this.internals.setValidity({valueMissing:!0},this.localize.t.list.required,e):this.internals.setValidity({})}readOptions(){this.groups=M(this),this.options=P(this.groups)}openMenu(e){if(!this.interactive||this.open)return;let t=this.loading?-1:e??I(this.options,this.selectedIndex);this.activeIndex=t,this.open=!0}close(){this.open=!1,this.activeIndex=-1}toggle(){this.open?this.close():this.openMenu(this.selectedIndex)}onOpenChanged(){this.open?(this.menu.showPopover(),this.position(),this.scrollActiveIntoView(),window.addEventListener(`resize`,this.reposition),window.addEventListener(`scroll`,this.reposition,!0),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0)):(this.menu.matches(`:popover-open`)&&this.menu.hidePopover(),this.removeMenuListeners())}removeMenuListeners(){window.removeEventListener(`resize`,this.reposition),window.removeEventListener(`scroll`,this.reposition,!0),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0)}position(){this.menu.style.width=`${this.trigger.getBoundingClientRect().width}px`,r(this.trigger,this.menu,`${this.direction}-start`,0)}scrollActiveIntoView(){this.menu.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})}onTriggerFocusOut(){this.open&&this.close()}selectIndex(e){let t=this.options[e];t&&!t.disabled&&(this.touched=!0,t.value!==this.value&&(this.value=t.value,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))))}onTriggerKeydown(e){if(!this.interactive)return;let t=L({open:this.open,active:this.activeIndex,selected:this.selectedIndex},this.listed,e,this.typed);t&&(t.handled&&e.preventDefault(),this.apply(t))}apply(e){e.pick!==void 0&&this.selectIndex(e.pick),e.open?this.open?this.activeIndex=e.active:this.openMenu(e.active):this.close()}get busy(){return this.loading?`true`:h}get statusText(){return this.open&&this.loading?this.localize.t.list.loadingOptions:``}renderRows(){return this.loading?g`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${this.localize.t.list.loadingOptions}</li>`:N(this.groups,this.fieldId,(e,t)=>this.renderOption(e,t))}renderOption(e,t){let n=e.value===this.value,r=[`option`,t===this.activeIndex?`active`:``].join(` `);return g`<li
            id="${this.fieldId}-opt-${t}"
            class=${r}
            part="option"
            role="option"
            aria-selected=${n?`true`:`false`}
            aria-disabled=${e.disabled?`true`:h}
            @click=${()=>this.onOptionClick(t)}
        >
            ${A(e)}
            ${n?this.renderCheck():h}
        </li>`}renderCheck(){return g`<svg class="check" viewBox="0 0 16 16" aria-hidden="true">
            <path d="m6.5 12.5-4-4 .7-.7 3.3 3.3 7.3-7.3.7.7z" />
        </svg>`}onOptionClick(e){this.selectIndex(e),this.close()}renderLabel(){return!this.label&&!this.slots.has(`label`)?h:g`<span class=${this.hideLabel?`sr-only`:`label`} part="label" id="${this.fieldId}-label">${c(this.label)}</span>`}get showError(){return this.interactive&&(this.invalid||this.touched&&!this.internals.validity.valid)}get fieldMessage(){return a({showError:this.showError,errorText:f(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots})}render(){let t=this.showError,n=this.fieldMessage;e(this,n);let r=this.options[this.selectedIndex],i=[t?`invalid`:``,n&&n.kind!==`helper`?`has-status`:``,r?``:`placeholder`,this.open?`open`:``].filter(Boolean).join(` `),a=this.open&&this.activeIndex>=0?`${this.fieldId}-opt-${this.activeIndex}`:h;return g`
            ${this.renderLabel()}
            <div class="field ${i}" part="base">
                <button
                    class="trigger"
                    part="input"
                    type="button"
                    tabindex="0"
                    role="combobox"
                    aria-haspopup="listbox"
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls="${this.fieldId}-list"
                    aria-activedescendant=${a}
                    aria-labelledby="${this.fieldId}-label ${this.fieldId}-value"
                    aria-readonly=${this.readonly?`true`:h}
                    aria-required=${this.required?`true`:h}
                    aria-invalid=${t?`true`:`false`}
                    aria-describedby=${d(this.fieldId,n)??h}
                    ?disabled=${this.isDisabled}
                    @click=${this.toggle}
                    @keydown=${this.onTriggerKeydown}
                    @focusout=${this.onTriggerFocusOut}
                    @blur=${()=>this.touched=!0}
                >
                    <span class="text" id="${this.fieldId}-value">${r?.label??this.placeholder}</span>
                </button>
                <span class="icons" aria-hidden="true">
                    ${s(n)}
                    <svg class="chevron" part="chevron" viewBox="0 0 16 16"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                </span>
            </div>
            ${T(this.fieldId,n)}
            <ul
                class="menu"
                part="menu"
                id="${this.fieldId}-list"
                popover="manual"
                role="listbox"
                aria-labelledby="${this.fieldId}-label"
                aria-busy=${this.busy}
                @mousedown=${e=>e.preventDefault()}
            >
                ${this.open?this.renderRows():h}
            </ul>
            <span class="sr-only" role="status">${this.statusText}</span>
        `}};t([C()],R.prototype,`label`,void 0),t([C({type:Boolean,attribute:`hide-label`})],R.prototype,`hideLabel`,void 0),t([C({attribute:`helper-text`})],R.prototype,`helperText`,void 0),t([C({attribute:`invalid-text`})],R.prototype,`invalidText`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`invalid`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`warn`,void 0),t([C({attribute:`warn-text`})],R.prototype,`warnText`,void 0),t([C()],R.prototype,`placeholder`,void 0),t([C()],R.prototype,`value`,void 0),t([C({reflect:!0})],R.prototype,`name`,void 0),t([C({reflect:!0})],R.prototype,`size`,void 0),t([C()],R.prototype,`direction`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`disabled`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`required`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`readonly`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`loading`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`fluid`,void 0),t([C({type:Boolean,reflect:!0})],R.prototype,`inline`,void 0),t([w()],R.prototype,`groups`,void 0),t([w()],R.prototype,`options`,void 0),t([w()],R.prototype,`open`,void 0),t([w()],R.prototype,`activeIndex`,void 0),t([w()],R.prototype,`touched`,void 0),t([w()],R.prototype,`fieldsetDisabled`,void 0),t([v(`.trigger`)],R.prototype,`trigger`,void 0),t([v(`.menu`)],R.prototype,`menu`,void 0),R=t([x(`ui-dropdown`)],R);
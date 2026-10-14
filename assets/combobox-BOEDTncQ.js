import{B as e,C as t,Ct as n,D as r,F as i,G as a,I as o,J as s,K as c,M as l,R as u,V as d,W as f,Y as p,Z as m,_t as h,bt as g,et as _,ft as v,gt as y,h as b,ht as x,j as S,mt as C,pt as w,q as T,tt as E,w as D,x as O}from"./theme-switcher-BKi8EfZd.js";import{a as k,c as A,i as j,o as M,r as N,s as P,t as F}from"./listbox-CJ3hc4cw.js";import{a as I,i as L,n as R,r as z,t as B}from"./combobox-DaZ44UEe.js";var V=class extends D{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=``,this.name=``,this.size=`md`,this.direction=`bottom`,this.filter=`none`,this.allowCustomValue=!1,this.hideClear=!1,this.loading=!1,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.groups=[],this.options=[],this.text=``,this.open=!1,this.activeIndex=-1,this.touched=!1,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.localize=new O(this),this.fieldId=E(`ui-combobox`),this.defaultValue=``,this.lastSyncedValue=null,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()},this.reposition=()=>this.position(),this.onDocumentPointerDown=e=>{let t=e.composedPath();!t.includes(this.menu)&&!t.includes(this.input)&&!t.includes(this.shadowRoot.querySelector(`.controls`))&&this.closeAndSettle()},this.slots=new b(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,m,k,N,j,n`
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

            input {
                box-sizing: border-box;
                width: 100%;
                height: var(--_h);
                margin: 0;
                padding: 0 48px 0 var(--ui-space-md);
                border: none;
                border-bottom: 1px solid var(--ui-ink-subtle);
                border-radius: var(--ui-radius-none);
                background-color: var(--ui-surface-1);
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                outline: 2px solid transparent;
                outline-offset: -2px;
                /* Carbon: the combo box's box is a text-input, background-color and outline at fast-01 */
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing),
                    outline-color var(--ui-duration-fast) var(--ui-easing);
            }

            input::placeholder {
                color: var(--ui-ink-placeholder);
                opacity: 1;
            }

            input:focus,
            .open input {
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

            @media (forced-colors: active) {
                input {
                    border: 1px solid FieldText;
                }
                input:focus {
                    outline-color: Highlight;
                }
            }
        `,o,n`
            /* the 64px box is the field's; the open list keeps its rows (--_h), not Carbon's 64px fluid rows (user's choice) */
            :host([data-fluid]) input,
            :host([data-fluid]) .has-status input {
                height: 64px;
                padding: 33px 64px 13px var(--ui-space-md);
            }

            :host([data-fluid]) .has-clear input,
            :host([data-fluid]) .has-status.has-clear input {
                padding-inline-end: 96px;
            }

        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}get inputValue(){return this.text}set inputValue(e){this.text=e}connectedCallback(){super.connectedCallback(),_(this,this.fluid),this.hasUpdated||(!this.value&&!this.hasAttribute(`value`)&&(this.value=p(this)??``),this.defaultValue=this.value),this.readOptions(),this.observer??=new MutationObserver(()=>this.readOptions()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeEventListener(`invalid`,this.onFormInvalid),this.removeMenuListeners()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=this.defaultValue,this.lastSyncedValue=null,this.requestUpdate(`value`),this.touched=!1}formStateRestoreCallback(e){typeof e==`string`&&(this.value=e)}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||u(this)}get interactive(){return!this.isDisabled&&!this.readonly}get messages(){return this.localize.t.list}get committedText(){return L(this.options,this.value,this.allowCustomValue)}get filteredGroups(){return[...B(this.groups,this.text,this.committedText,this.filter)]}get filtered(){return F(this.filteredGroups)}willUpdate(e){_(this,this.fluid),(e.has(`value`)||e.has(`options`))&&this.value!==this.lastSyncedValue&&(this.text=this.committedText,this.lastSyncedValue=this.value),this.syncValidity()}updated(e){e.has(`open`)?(this.onOpenChanged(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))):this.open&&(e.has(`activeIndex`)||e.has(`text`)||e.has(`options`))&&(this.position(),this.scrollActiveIntoView()),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`),this.toggleAttribute(`data-has-value`,this.text!==``)}syncValidity(){if(S(this.internals,this.isDisabled))return;this.internals.setFormValue(this.value);let e=this.input??void 0,t=l(this.invalid,this.invalidText,this.customValidityMessage);t?this.internals.setValidity({customError:!0},t,e):this.required&&!this.value?this.internals.setValidity({valueMissing:!0},this.messages.required,e):this.internals.setValidity({})}readOptions(){this.groups=M(this),this.options=F(this.groups)}openMenu(e=-1){this.interactive&&(this.activeIndex=e,this.open=!0)}close(){this.open=!1,this.activeIndex=-1}closeAndSettle(){this.commitText(),this.close()}onOpenChanged(){this.open?(this.menu.showPopover(),this.position(),this.scrollActiveIntoView(),window.addEventListener(`resize`,this.reposition),window.addEventListener(`scroll`,this.reposition,!0),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0)):(this.menu.matches(`:popover-open`)&&this.menu.hidePopover(),this.removeMenuListeners())}removeMenuListeners(){window.removeEventListener(`resize`,this.reposition),window.removeEventListener(`scroll`,this.reposition,!0),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0)}position(){this.menu.matches(`:popover-open`)&&(this.menu.style.width=`${this.input.getBoundingClientRect().width}px`,r(this.input,this.menu,`${this.direction}-start`,0))}scrollActiveIntoView(){this.menu.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})}setValue(e){this.lastSyncedValue=e,e!==this.value&&(this.value=e,this.dispatchEvent(new Event(`change`,{bubbles:!0})))}selectOption(e){return!e||e.disabled?!1:(this.touched=!0,this.text=e.label,this.setValue(e.value),!0)}commitText(){let e=z(this.text,this.options,this.value,this.allowCustomValue);(e.value!==this.value||e.text!==this.text)&&(this.touched=!0),this.text=e.text,this.setValue(e.value)}clear(){this.touched=!0,this.text=``,this.setValue(``),this.close(),this.input.focus()}selectedIndexIn(e){return e.findIndex(e=>e.value===this.value&&!e.disabled)}onKeydown(e){if(!this.interactive)return;let t=R({open:this.open,active:this.activeIndex,text:this.text,value:this.value},this.filtered,this.options,e,this.allowCustomValue);t&&(t.handled&&e.preventDefault(),this.apply(t))}apply(e){e.pick!==void 0&&this.selectOption(this.filtered[e.pick]),e.pickOption&&this.selectOption(e.pickOption),e.commit&&this.commitText(),e.clearText&&(this.text=``),e.clearValue&&this.setValue(``),e.close?this.close():e.open&&!this.open?this.openMenu(e.active??-1):e.active!==void 0&&(this.activeIndex=e.active)}onInput(){this.text=this.input.value;let e=I(this.filtered,this.text);this.open?this.activeIndex=e:this.openMenu(e)}openFromPointer(){this.openMenu(this.selectedIndexIn(this.filtered))}onInputClick(){this.open||this.openFromPointer()}onToggleClick(){this.open?this.closeAndSettle():this.openFromPointer(),this.input.focus()}onFocusOut(){this.commitText(),this.touched=!0,this.close()}onOptionClick(e){this.selectOption(this.filtered[e])&&this.close()}renderOption(e,t){let n=e.value===this.value;return g`<li
            id="${this.fieldId}-opt-${t}"
            class="option ${t===this.activeIndex?`active`:``}"
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
        </svg>`}renderRows(){let e=this.messages;if(this.loading)return g`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${e.searching}</li>`;let t=this.filteredGroups;return t.length===0?g`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${e.noResults}</li>`:P(t,this.fieldId,(e,t)=>this.renderOption(e,t))}get statusText(){return this.open?this.loading?this.messages.searching:this.filteredGroups.length===0?this.messages.noResults:``:``}renderClear(e){return e?g`<button class="clear" part="clear-button" type="button" tabindex="-1" aria-label=${this.messages.clear} @click=${this.clear}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
        </button>`:h}renderLabel(){return!this.label&&!this.slots.has(`label`)?h:g`<label class=${this.hideLabel?`sr-only`:`label`} part="label" id="${this.fieldId}-label" for=${this.fieldId}>${c(this.label)}</label>`}fieldClasses(e,t,n){return[e?`invalid`:``,t&&t.kind!==`helper`?`has-status`:``,n?`has-clear`:``,this.open?`open`:``].filter(Boolean).join(` `)}get showError(){return this.interactive&&(this.invalid||this.touched&&!this.internals.validity.valid)}get fieldMessage(){return a({showError:this.showError,errorText:f(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots})}get showClear(){return this.interactive&&this.text!==``&&!this.hideClear}render(){let t=this.messages,n=this.showError,r=this.fieldMessage;e(this,r);let i=this.showClear,a=this.fieldClasses(n,r,i),o=this.open&&this.activeIndex>=0?`${this.fieldId}-opt-${this.activeIndex}`:h;return g`
            ${this.renderLabel()}
            <div class="field ${a}" part="base">
                <input
                    part="input"
                    id=${this.fieldId}
                    type="text"
                    role="combobox"
                    autocomplete="off"
                    aria-autocomplete="list"
                    aria-haspopup="listbox"
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls="${this.fieldId}-list"
                    aria-activedescendant=${o}
                    aria-required=${this.required?`true`:h}
                    aria-invalid=${n?`true`:`false`}
                    aria-describedby=${d(this.fieldId,r)??h}
                    placeholder=${this.placeholder}
                    .value=${this.text}
                    ?disabled=${this.isDisabled}
                    ?readonly=${this.readonly}
                    @input=${this.onInput}
                    @keydown=${this.onKeydown}
                    @click=${this.onInputClick}
                    @focusout=${this.onFocusOut}
                />
                <span class="controls" @mousedown=${e=>e.preventDefault()}>
                    <span class="status">${s(r)}</span>
                    ${this.renderClear(i)}
                    <button
                        class="toggle"
                        part="toggle"
                        type="button"
                        tabindex="-1"
                        aria-label=${this.open?t.closeList:t.openList}
                        aria-expanded=${this.open?`true`:`false`}
                        aria-controls="${this.fieldId}-list"
                        ?disabled=${!this.interactive}
                        @click=${this.onToggleClick}
                    >
                        <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                    </button>
                </span>
            </div>
            ${T(this.fieldId,r)}
            <ul
                class="menu"
                part="menu"
                id="${this.fieldId}-list"
                popover="manual"
                role="listbox"
                aria-labelledby="${this.fieldId}-label"
                aria-busy=${this.loading?`true`:h}
                @mousedown=${e=>e.preventDefault()}
            >
                ${this.open?this.renderRows():h}
            </ul>
            <span class="sr-only" role="status">${this.statusText}</span>
        `}};t([C()],V.prototype,`label`,void 0),t([C({type:Boolean,attribute:`hide-label`})],V.prototype,`hideLabel`,void 0),t([C({attribute:`helper-text`})],V.prototype,`helperText`,void 0),t([C({attribute:`invalid-text`})],V.prototype,`invalidText`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`invalid`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`warn`,void 0),t([C({attribute:`warn-text`})],V.prototype,`warnText`,void 0),t([C()],V.prototype,`placeholder`,void 0),t([C()],V.prototype,`value`,void 0),t([C({reflect:!0})],V.prototype,`name`,void 0),t([C({reflect:!0})],V.prototype,`size`,void 0),t([C()],V.prototype,`direction`,void 0),t([C()],V.prototype,`filter`,void 0),t([C({type:Boolean,attribute:`allow-custom-value`})],V.prototype,`allowCustomValue`,void 0),t([C({type:Boolean,reflect:!0,attribute:`hide-clear`})],V.prototype,`hideClear`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`loading`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`disabled`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`required`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`readonly`,void 0),t([C({type:Boolean,reflect:!0})],V.prototype,`fluid`,void 0),t([w()],V.prototype,`groups`,void 0),t([w()],V.prototype,`options`,void 0),t([w()],V.prototype,`text`,void 0),t([w()],V.prototype,`open`,void 0),t([w()],V.prototype,`activeIndex`,void 0),t([w()],V.prototype,`touched`,void 0),t([w()],V.prototype,`fieldsetDisabled`,void 0),t([v(`input`)],V.prototype,`input`,void 0),t([v(`.menu`)],V.prototype,`menu`,void 0),V=t([x(`ui-combobox`)],V);
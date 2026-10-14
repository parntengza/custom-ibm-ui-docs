import{B as e,C as t,Ct as n,D as r,F as i,G as a,I as o,J as s,K as c,M as l,R as u,V as d,W as f,Z as p,_t as m,bt as h,et as g,ft as _,gt as v,h as y,ht as b,j as x,mt as S,pt as C,q as w,tt as T,w as E,x as D}from"./theme-switcher-BKi8EfZd.js";import{a as O,c as k,i as A,n as j,o as M,r as N,s as P,t as F}from"./listbox-CJ3hc4cw.js";import{t as I}from"./typeahead-CDCzrGcR.js";import{a as L,t as R}from"./listbox-CcjKNS4K.js";import{a as z,i as B,n as V,o as H,r as U,s as W,t as G}from"./multi-select-CPEV2vrT.js";var K=class extends E{constructor(...e){super(...e),this.label=``,this.hideLabel=!1,this.helperText=``,this.invalidText=``,this.invalid=!1,this.warn=!1,this.warnText=``,this.placeholder=``,this.value=[],this.name=``,this.size=`md`,this.direction=`bottom`,this.selectionFeedback=`top-after-reopen`,this.selectAll=!1,this.filterable=!1,this.filter=`contains`,this.loading=!1,this.disabled=!1,this.required=!1,this.readonly=!1,this.fluid=!1,this.groups=[],this.options=[],this.open=!1,this.activeIndex=-1,this.touched=!1,this.fieldsetDisabled=!1,this.pinned=[],this.text=``,this.internals=this.attachInternals(),this.customValidityMessage=``,this.localize=new D(this),this.fieldId=T(`ui-multi-select`),this.defaultValue=[],this.typed=new I,this.onFormInvalid=e=>{e.preventDefault(),this.touched=!0,this.form?.querySelector(`:invalid`)===this&&this.focus()},this.reposition=()=>this.position(),this.onDocumentPointerDown=e=>{let t=e.composedPath();t.includes(this.menu)||t.includes(this.field)||(this.filterable?this.closeAndClearText():this.close())},this.onTagButtonMousedown=e=>{this.filterable&&e.preventDefault()},this.slots=new y(this)}static{this.formAssociated=!0}static{this.shadowRootOptions={...v.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,p,O,N,A,n`
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
                gap: var(--ui-space-xs);
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

            .trigger .text {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
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

            /* Count tag (Carbon list-box__selection--multi): number + clear-all button */
            .tag {
                position: absolute;
                inset-block: 0;
                inset-inline-start: var(--ui-space-md);
                display: flex;
                align-items: center;
                height: 24px;
                margin-block: auto;
                padding-inline-start: var(--ui-space-xs);
                border-radius: var(--ui-radius-pill);
                background-color: var(--ui-ink);
                color: var(--ui-inverse-ink);
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
            }

            .tag button {
                display: grid;
                place-items: center;
                width: 24px;
                height: 24px;
                padding: 0;
                border: none;
                border-radius: var(--ui-radius-pill);
                background: transparent;
                color: inherit;
                cursor: pointer;
                transition: background-color var(--ui-duration-fast) var(--ui-easing); /* Carbon tag__close-icon */
            }

            .tag button:hover {
                background-color: var(--ui-secondary-hover);
            }

            .tag button:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            .tag svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }

            .has-tag .trigger {
                padding-inline-start: calc(var(--ui-space-md) + 48px + var(--ui-space-xs));
            }

            :host([readonly]) .tag button,
            .trigger:disabled ~ .tag button,
            .filterable.disabled .tag button {
                display: none;
            }

            :host([readonly]) .tag,
            .trigger:disabled ~ .tag,
            .filterable.disabled .tag {
                padding-inline-end: var(--ui-space-xs);
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

            /* checkbox inside a row */
            .box {
                position: relative;
                display: block;
                flex: none;
                box-sizing: border-box;
                width: 16px;
                height: 16px;
                margin-inline-end: 22px; /* Carbon multiselect row: 28px label inset + 10px text inset − 16px box */
                border: 1px solid var(--ui-ink);
                border-radius: var(--ui-radius-xs);
                background-color: transparent;
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
                border-bottom: 1.5px solid var(--ui-icon-inverse);
                border-left: 1.5px solid var(--ui-icon-inverse);
                transform: scale(0) rotate(-45deg);
                transform-origin: bottom right;
            }

            .option[aria-selected='true'] .box,
            .option.mixed .box {
                background-color: var(--ui-ink);
                border-color: var(--ui-ink);
            }

            .option[aria-selected='true'] .box::after {
                transform: scale(1) rotate(-45deg);
            }

            .option.mixed .box::after {
                top: 4px; /* Carbon indeterminate: 8px bar, 2px thick, 11px − 3px margin from the label */
                inset-inline-start: 3px;
                width: 8px;
                border-left-width: 0;
                border-bottom-width: 2px;
                transform: scale(1) rotate(0deg);
            }

            .option[aria-disabled='true'] .box {
                border-color: var(--ui-ink-disabled);
            }

            .select-all {
                border-bottom: 1px solid var(--ui-hairline);
            }

            /*
             * filterable (Carbon cds--multi-select--filterable, measured on web-components.carbondesignsystem.com):
             * the count tag 16px from the start, the text 8px after it; × and chevron as ComboBox.
             */
            .filterable {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                height: var(--_h);
                border-bottom: 1px solid var(--ui-ink-subtle);
                background-color: var(--ui-surface-1);
                outline: 2px solid transparent;
                outline-offset: -2px;
                transition: outline-color var(--ui-duration-fast) var(--ui-easing); /* Carbon multi-select--filterable: the outline only (the hover fill switches at once) */
            }

            .filterable:hover {
                background-color: var(--ui-ghost-hover);
            }

            .filterable:focus-within,
            .filterable.open {
                outline-color: var(--ui-focus);
            }

            .filterable.invalid {
                outline-color: var(--ui-error);
            }

            .filterable.invalid:focus-within {
                outline-color: var(--ui-focus);
            }

            .filterable .tag {
                position: static;
                flex: none;
                margin-inline: var(--ui-space-md) var(--ui-space-xs);
            }

            .filterable input {
                box-sizing: border-box;
                flex: 1;
                min-width: 0;
                height: 100%;
                margin: 0;
                padding: 0 48px 0 var(--ui-space-md);
                border: none;
                background: transparent;
                color: var(--ui-ink);
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
                outline: none;
            }

            .filterable.has-tag input {
                padding-inline-start: 0;
            }

            /* room for × and the status icon as ui-combobox (the rule above would keep 48px and let text run under them) */
            .filterable.has-clear input {
                padding-inline-end: 70px;
            }

            .filterable.has-status input {
                padding-inline-end: 64px;
            }

            .filterable.has-status.has-clear input {
                padding-inline-end: 105px;
            }

            .filterable input::placeholder {
                color: var(--ui-ink-placeholder);
                opacity: 1;
            }

            .filterable.disabled {
                border-bottom-color: transparent;
                background-color: var(--ui-surface-1);
            }

            .filterable input:disabled {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
            }

            :host([readonly]) .filterable {
                background-color: transparent;
                border-bottom-color: var(--ui-hairline);
            }

            @media (forced-colors: active) {
                .trigger,
                .filterable {
                    border: 1px solid FieldText;
                }
                .trigger:focus,
                .filterable:focus-within {
                    outline-color: Highlight;
                }
                .chevron,
                .tag svg {
                    fill: FieldText;
                }
                .box {
                    border-color: FieldText;
                }
                .option[aria-selected='true'] .box,
                .option.mixed .box {
                    forced-color-adjust: none;
                    background-color: Highlight;
                    border-color: Highlight;
                }
            }
        `,o,n`
            /* the 64px box is the field's; the open list keeps its rows (--_h), not Carbon's 64px fluid rows (user's choice) */
            :host([data-fluid]) .trigger,
            :host([data-fluid]) .has-status .trigger,
            :host([data-fluid]) .filterable {
                height: 64px;
            }

            :host([data-fluid]) .trigger,
            :host([data-fluid]) .has-status .trigger {
                padding: 33px 48px 13px var(--ui-space-md);
            }

            :host([data-fluid]) .has-tag .trigger {
                padding-inline-start: calc(var(--ui-space-md) + 48px + var(--ui-space-xs));
            }

            /* the count tag on the value's line */
            :host([data-fluid]) .tag {
                inset-block: 30px auto;
                margin-block: 0;
            }

            :host([data-fluid]) .filterable {
                align-items: flex-start;
            }

            :host([data-fluid]) .filterable input {
                padding-block: 33px 13px;
                padding-inline-end: 64px;
            }

            :host([data-fluid]) .filterable.has-clear input {
                padding-inline-end: 96px;
            }

            :host([data-fluid]) .filterable .tag {
                margin-block-start: 30px;
            }

            /* Carbon fluid multi-select: the chevron 34px down, 12px from the end */
            :host([data-fluid]) .icons {
                inset-inline-end: var(--ui-space-sm);
                --ui-fluid-icon-end: 4px;
                align-items: flex-start;
                padding-block-start: 34px;
            }
        `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncValidity(),this.requestUpdate())}get inputValue(){return this.text}set inputValue(e){this.text=e}connectedCallback(){super.connectedCallback(),g(this,this.fluid),this.readOptions(),this.value.length===0&&(this.value=[...this.querySelectorAll(`option`)].filter(e=>e.hasAttribute(`selected`)).map(e=>e.value)),this.defaultValue=[...this.value],this.observer??=new MutationObserver(()=>this.readOptions()),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0}),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect(),this.removeEventListener(`invalid`,this.onFormInvalid),this.removeMenuListeners()}get form(){return this.internals.form}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}reportValidity(){return this.internals.reportValidity()}get validity(){return this.internals.validity}checkValidity(){return this.internals.checkValidity()}formResetCallback(){this.value=[...this.defaultValue],this.text=``,this.touched=!1}formStateRestoreCallback(e){e instanceof FormData&&(this.value=e.getAll(this.name).map(String))}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||u(this)}get interactive(){return!this.isDisabled&&!this.readonly}get messages(){return this.localize.t.list}isChosen(e){return this.value.includes(e.value)}get filtering(){return this.filterable&&this.filter!==`none`&&this.text.trim()!==``}isShown(e){return!this.filtering||L(e.label,this.text,this.filter)}get shownGroups(){return this.filtering?R(this.groups,e=>this.isShown(e)):this.groups}get rows(){if(this.loading)return[];let e=j(this.groups),t=e?F(this.shownGroups):this.options.filter(e=>this.isShown(e));return B(t,this.value,this.pinned,this.selectionFeedback,e)}get enabledOptions(){return this.options.filter(e=>!e.disabled&&this.isShown(e))}get showSelectAll(){return this.selectAll&&!this.loading&&this.enabledOptions.length>0}get selectAllState(){return z(this.enabledOptions,this.value)}willUpdate(e){g(this,this.fluid),this.syncValidity(),this.open&&e.get(`loading`)===!0&&!this.loading&&(this.activeIndex=this.firstEnabled())}updated(e){e.has(`open`)?(this.onOpenChanged(),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))):this.open&&(e.has(`activeIndex`)||e.has(`text`)||e.has(`options`))&&(this.position(),this.scrollActiveIntoView()),this.syncHostState()}syncHostState(){let e=this.fieldMessage?.kind;this.toggleAttribute(`data-open`,this.open),this.toggleAttribute(`data-show-error`,e===`error`),this.toggleAttribute(`data-show-warn`,e===`warn`),this.toggleAttribute(`data-has-value`,this.value.length>0)}syncValidity(){if(x(this.internals,this.isDisabled))return;let e=new FormData;for(let t of this.value)e.append(this.name,t);this.internals.setFormValue(this.isDisabled||!this.name?null:e);let t=this.input??this.trigger??void 0,n=l(this.invalid,this.invalidText,this.customValidityMessage);n?this.internals.setValidity({customError:!0},n,t):this.required&&this.value.length===0?this.internals.setValidity({valueMissing:!0},this.messages.required,t):this.internals.setValidity({})}readOptions(){this.groups=M(this),this.options=F(this.groups),this.open&&this.activeIndex>=this.rows.length&&(this.activeIndex=this.firstEnabled())}renderRows(){let e=this.messages;return this.loading?h`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${this.filterable?e.searching:e.loadingOptions}</li>`:this.filterable&&this.rows.length===0?h`<li class="empty" part="empty" role="option" aria-disabled="true" aria-selected="false">${e.noResults}</li>`:j(this.groups)?P(this.shownGroups,this.fieldId,(e,t)=>this.renderRow(e,t)):this.rows.map((e,t)=>this.renderRow(e,t))}get statusText(){return this.open?this.loading?this.filterable?this.messages.searching:this.messages.loadingOptions:this.filterable&&this.rows.length===0?this.messages.noResults:``:``}openMenu(e){this.interactive&&!this.open&&(this.pinned=[...this.value],this.activeIndex=e??this.firstEnabled(),this.open=!0)}close(){this.open=!1,this.activeIndex=-1}closeAndClearText(){this.close(),this.resetText()}resetText(){this.text!==``&&(this.text=``,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})))}toggle(){this.open?this.close():this.openMenu(this.value.length>0?void 0:-1)}onOpenChanged(){this.open?(this.menu.showPopover(),this.position(),this.scrollActiveIntoView(),window.addEventListener(`resize`,this.reposition),window.addEventListener(`scroll`,this.reposition,!0),document.addEventListener(`pointerdown`,this.onDocumentPointerDown,!0)):(this.menu.matches(`:popover-open`)&&this.menu.hidePopover(),this.removeMenuListeners())}removeMenuListeners(){window.removeEventListener(`resize`,this.reposition),window.removeEventListener(`scroll`,this.reposition,!0),document.removeEventListener(`pointerdown`,this.onDocumentPointerDown,!0)}position(){this.menu.matches(`:popover-open`)&&(this.menu.style.width=`${this.field.getBoundingClientRect().width}px`,r(this.field,this.menu,`${this.direction}-start`,0))}scrollActiveIntoView(){this.menu.querySelector(`.option.active`)?.scrollIntoView({block:`nearest`})}onTriggerFocusOut(){this.open&&this.close(),this.touched=!0}setValue(e){this.touched=!0,this.value=e,this.filterable||this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}toggleOption(e){e&&!e.disabled&&this.setValue(W(this.value,e))}toggleSelectAll(){this.setValue(H(this.value,this.enabledOptions))}toggleActive(){this.activeIndex===-2?this.toggleSelectAll():this.toggleOption(this.rows[this.activeIndex])}clearAll(){this.value.length>0&&this.setValue([]),(this.input??this.trigger)?.focus()}firstEnabled(){return V(this.rows,this.showSelectAll)}onTriggerKeydown(e){if(!this.interactive)return;let t=U({open:this.open,active:this.activeIndex,hasValue:this.value.length>0},this.rows,this.showSelectAll,e,this.typed);t&&(t.handled&&e.preventDefault(),this.apply(t))}apply(e){e.clearAll&&this.setValue([]),e.clearText&&this.resetText(),e.toggle!==void 0&&(this.activeIndex=e.toggle,this.toggleActive()),e.close?this.close():e.open&&!this.open?this.openMenu(e.active):e.active!==void 0&&(this.activeIndex=e.active)}onFilterKeydown(e){if(!this.interactive)return;let t=G({open:this.open,active:this.activeIndex,hasValue:this.value.length>0},this.rows,this.showSelectAll,e);t&&(t.handled&&e.preventDefault(),this.apply(t))}onFilterInput(){this.text=this.input?.value??``,this.interactive&&(this.open?this.activeIndex=this.firstEnabled():this.openMenu())}onFilterClick(){this.open||this.openMenu(this.value.length>0?void 0:-1)}onToggleClick(){this.open?this.closeAndClearText():this.openMenu(this.value.length>0?void 0:-1),this.input?.focus()}clearText(){this.resetText(),this.input?.focus(),this.open&&(this.activeIndex=this.firstEnabled())}onFilterFocusOut(e){e.relatedTarget instanceof Node&&this.shadowRoot.contains(e.relatedTarget)||(this.closeAndClearText(),this.touched=!0)}renderBox(){return h`<span class="box" part="checkbox" aria-hidden="true">
        </span>`}renderSelectAllRow(){if(!this.showSelectAll)return m;let e=this.selectAllState;return h`<li
            id="${this.fieldId}-opt-all"
            class="option select-all ${this.activeIndex===-2?`active`:``} ${e===`some`?`mixed`:``}"
            part="option select-all"
            role="option"
            aria-selected=${e===`all`?`true`:`false`}
            aria-checked=${e===`some`?`mixed`:m}
            @click=${()=>{this.activeIndex=-2,this.toggleSelectAll()}}
        >
            ${this.renderBox()}
            <span class="text">${this.messages.selectAll}</span>
        </li>`}renderRow(e,t){return h`<li
            id="${this.fieldId}-opt-${t}"
            class="option ${t===this.activeIndex?`active`:``}"
            part="option"
            role="option"
            aria-selected=${this.isChosen(e)?`true`:`false`}
            aria-disabled=${e.disabled?`true`:m}
            @click=${()=>{e.disabled||(this.activeIndex=t),this.toggleOption(e)}}
        >
            ${this.renderBox()}
            ${k(e)}
        </li>`}renderTag(){let e=this.value.length;if(e===0)return m;let t=this.messages;return h`<span class="tag" part="tag">
            <span aria-hidden="true">${e}</span>
            <span class="sr-only" id="${this.fieldId}-count">${t.selectedCount(e)}</span>
            <button
                type="button"
                part="clear-button"
                tabindex="-1"
                aria-label=${t.clearAll}
                ?disabled=${!this.interactive}
                @mousedown=${this.onTagButtonMousedown}
                @click=${this.clearAll}
            >
                <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
                </svg>
            </button>
        </span>`}renderLabel(){return!this.label&&!this.slots.has(`label`)?m:h`<span class=${this.hideLabel?`sr-only`:`label`} part="label" id="${this.fieldId}-label">${c(this.label)}</span>`}activeId(){return!this.open||this.activeIndex===-1?m:this.activeIndex===-2?`${this.fieldId}-opt-all`:`${this.fieldId}-opt-${this.activeIndex}`}describedBy(e){let t=[this.value.length>0?`${this.fieldId}-count`:``,d(this.fieldId,e)??``].filter(Boolean);return t.length?t.join(` `):m}renderTrigger(e,t){return h`<button
                class="trigger"
                part="input"
                type="button"
                tabindex="0"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls="${this.fieldId}-list"
                aria-activedescendant=${this.activeId()}
                aria-labelledby="${this.fieldId}-label ${this.fieldId}-value"
                aria-readonly=${this.readonly?`true`:m}
                aria-required=${this.required?`true`:m}
                aria-invalid=${e?`true`:`false`}
                aria-describedby=${this.describedBy(t)}
                ?disabled=${this.isDisabled}
                @click=${this.toggle}
                @keydown=${this.onTriggerKeydown}
                @focusout=${this.onTriggerFocusOut}
            >
                <span class="text" id="${this.fieldId}-value">${this.placeholder}</span>
            </button>
            ${this.renderTag()}
            <span class="icons" aria-hidden="true">
                ${s(t)}
                <svg class="chevron" part="chevron" viewBox="0 0 16 16"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </span>`}renderFilterField(e,t){let n=this.messages;return h`${this.renderTag()}
            <input
                part="input"
                type="text"
                role="combobox"
                autocomplete="off"
                aria-autocomplete="list"
                aria-haspopup="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-controls="${this.fieldId}-list"
                aria-activedescendant=${this.activeId()}
                aria-labelledby="${this.fieldId}-label"
                aria-required=${this.required?`true`:m}
                aria-invalid=${e?`true`:`false`}
                aria-describedby=${this.describedBy(t)}
                placeholder=${this.placeholder||m}
                .value=${this.text}
                ?disabled=${this.isDisabled}
                ?readonly=${this.readonly}
                @input=${this.onFilterInput}
                @keydown=${this.onFilterKeydown}
                @click=${this.onFilterClick}
            />
            <span class="controls" @mousedown=${e=>e.preventDefault()}>
                <span class="status">${s(t)}</span>
                ${this.renderClearText()}
                <button
                    class="toggle"
                    part="toggle"
                    type="button"
                    tabindex="-1"
                    aria-label=${this.open?n.closeList:n.openList}
                    aria-expanded=${this.open?`true`:`false`}
                    aria-controls="${this.fieldId}-list"
                    ?disabled=${!this.interactive}
                    @click=${this.onToggleClick}
                >
                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
                </button>
            </span>`}renderClearText(){return this.showClearText?h`<button class="clear" part="clear-filter-button" type="button" tabindex="-1" aria-label=${this.messages.clear} @click=${this.clearText}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" />
            </svg>
        </button>`:m}get showClearText(){return this.filterable&&this.interactive&&this.text!==``}fieldClasses(e,t){return[e?`invalid`:``,t&&t.kind!==`helper`?`has-status`:``,this.value.length>0?`has-tag`:``,this.open?`open`:``,this.filterable?`filterable`:``,this.showClearText?`has-clear`:``,this.filterable&&this.isDisabled?`disabled`:``].filter(Boolean).join(` `)}get showError(){return this.interactive&&(this.invalid||this.touched&&!this.internals.validity.valid)}get fieldMessage(){return a({showError:this.showError,errorText:f(this.invalid,this.customValidityMessage,this.invalidText||this.internals.validationMessage),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:this.helperText,slots:this.slots})}render(){let t=this.showError,n=this.fieldMessage;e(this,n);let r=this.fieldClasses(t,n);return h`
            ${this.renderLabel()}
            <div class="field ${r}" part="base" @focusout=${this.filterable?this.onFilterFocusOut:m}>
                ${this.filterable?this.renderFilterField(t,n):this.renderTrigger(t,n)}
            </div>
            ${w(this.fieldId,n)}
            <ul
                class="menu"
                part="menu"
                id="${this.fieldId}-list"
                popover="manual"
                role="listbox"
                aria-multiselectable="true"
                aria-labelledby="${this.fieldId}-label"
                aria-busy=${this.loading?`true`:m}
                @mousedown=${e=>e.preventDefault()}
            >
                ${this.open?h`${this.renderSelectAllRow()}${this.renderRows()}`:m}
            </ul>
            <span class="sr-only" role="status">${this.statusText}</span>
        `}};t([S()],K.prototype,`label`,void 0),t([S({type:Boolean,attribute:`hide-label`})],K.prototype,`hideLabel`,void 0),t([S({attribute:`helper-text`})],K.prototype,`helperText`,void 0),t([S({attribute:`invalid-text`})],K.prototype,`invalidText`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`invalid`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`warn`,void 0),t([S({attribute:`warn-text`})],K.prototype,`warnText`,void 0),t([S()],K.prototype,`placeholder`,void 0),t([S({attribute:!1})],K.prototype,`value`,void 0),t([S({reflect:!0})],K.prototype,`name`,void 0),t([S({reflect:!0})],K.prototype,`size`,void 0),t([S()],K.prototype,`direction`,void 0),t([S({attribute:`selection-feedback`})],K.prototype,`selectionFeedback`,void 0),t([S({type:Boolean,attribute:`select-all`})],K.prototype,`selectAll`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`filterable`,void 0),t([S()],K.prototype,`filter`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`loading`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`disabled`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`required`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`readonly`,void 0),t([S({type:Boolean,reflect:!0})],K.prototype,`fluid`,void 0),t([C()],K.prototype,`groups`,void 0),t([C()],K.prototype,`options`,void 0),t([C()],K.prototype,`open`,void 0),t([C()],K.prototype,`activeIndex`,void 0),t([C()],K.prototype,`touched`,void 0),t([C()],K.prototype,`fieldsetDisabled`,void 0),t([C()],K.prototype,`pinned`,void 0),t([C()],K.prototype,`text`,void 0),t([_(`.trigger`)],K.prototype,`trigger`,void 0),t([_(`input`)],K.prototype,`input`,void 0),t([_(`.field`)],K.prototype,`field`,void 0),t([_(`.menu`)],K.prototype,`menu`,void 0),K=t([b(`ui-multi-select`)],K);
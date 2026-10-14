import{C as e,Ct as t,F as n,G as r,J as i,K as a,M as o,R as s,St as c,V as l,W as u,_t as d,bt as f,ft as p,h as m,ht as h,j as g,mt as _,ot as v,pt as y,q as b,st as x,tt as S,w as C,x as w,z as T}from"./theme-switcher-BKi8EfZd.js";import{t as E}from"./live-BjLUomhr.js";import{a as D,c as O,i as k,n as A,o as j,r as M,s as N,t as P}from"./slider-CiHQ8-H4.js";var F=class extends C{static{this.formAssociated=!0}static{this.styles=[n,t`
        :host {
            display: block;
            font-family: var(--ui-font-family);
        }

        .label {
            display: block;
        }

        .container {
            position: relative;
            display: flex;
            align-items: center;
            gap: var(--ui-space-md);
            user-select: none;
        }

        .range-label {
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            white-space: nowrap;
        }

        .slider {
            position: relative;
            box-sizing: border-box;
            inline-size: 100%;
            min-inline-size: 200px;
            max-inline-size: 640px;
            padding: var(--ui-space-md) 0;
            cursor: pointer;
            touch-action: none;
        }

        .track {
            position: absolute;
            inline-size: 100%;
            block-size: 2px;
            background: var(--ui-hairline);
            transform: translate(0, -50%);
        }

        .track::before {
            content: '';
            position: absolute;
            inset-block-start: -5px;
            inset-inline-start: 50%;
            display: inline-block;
            inline-size: 2px;
            block-size: 4px;
            background: var(--ui-hairline);
            transform: translate(-50%, 0);
        }

        .filled-track {
            position: absolute;
            inline-size: 100%;
            block-size: 2px;
            background: var(--ui-layer-selected-inverse);
            pointer-events: none;
            transform-origin: left;
            /* from the lower thumb (a range) or the start, to the (upper) thumb */
            transform: translate(calc(var(--_p0, 0) * 100%), -50%) scaleX(calc(var(--_p, 0) - var(--_p0, 0)));
            transition: background var(--ui-duration-moderate) var(--ui-easing);
        }

        .thumb-wrapper {
            position: absolute;
            z-index: 3;
            inline-size: 14px;
            block-size: 14px;
            inset-inline-start: calc(var(--_p, 0) * 100%);
            transform: translate(-50%, -50%);
        }

        :host(:dir(rtl)) .thumb-wrapper {
            transform: translate(50%, -50%);
        }

        :host(:dir(rtl)) .filled-track {
            transform-origin: right;
            transform: translate(calc(var(--_p0, 0) * -100%), -50%) scaleX(calc(var(--_p, 0) - var(--_p0, 0)));
        }

        /* ---- two thumbs (Carbon cds--slider-container--two-handles) ---- */
        .range .slider {
            margin-inline: var(--ui-space-xxs);
        }

        .range .thumb-wrapper {
            inline-size: 16px;
            block-size: 24px;
        }

        /* the lower thumb sits before its value, the upper one after */
        .range .thumb-wrapper.lower {
            inset-inline-start: calc(var(--_p0, 0) * 100%);
            transform: translate(-100%, -50%);
        }

        .range .thumb-wrapper.upper {
            transform: translateY(-50%);
        }

        :host(:dir(rtl)) .range .thumb-wrapper.lower {
            transform: translate(100%, -50%);
        }

        :host(:dir(rtl)) .range .thumb-wrapper.upper {
            transform: translateY(-50%);
        }

        .range .thumb,
        .range .thumb:hover,
        .range .thumb:focus,
        .range .thumb:active {
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            transform: none;
        }

        /* Carbon: a 6×2 page-coloured gap where the thumb's flat side meets the track (the whole width while focused) */
        .range .thumb::before {
            content: '';
            position: absolute;
            z-index: -1;
            inset-block-start: calc(50% - 1px);
            inline-size: 6px;
            block-size: 2px;
            background: var(--ui-canvas);
        }

        .range .thumb[data-handle='lower']::before {
            inset-inline-end: 0;
        }

        .range .thumb[data-handle='upper']::before {
            inset-inline-start: 0;
        }

        .range .thumb:focus::before {
            inline-size: 100%;
        }

        .handle-icon {
            position: absolute;
            inset: 0;
            display: block;
            inline-size: 16px;
            block-size: 24px;
            fill: var(--ui-layer-selected-inverse);
        }

        /* Carbon swaps the lower / upper icons in RTL so the flat side still meets the track: the same as a mirror */
        :host(:dir(rtl)) .handle-icon {
            transform: scaleX(-1);
        }

        .handle-icon.focus,
        .thumb:focus .handle-icon:not(.focus) {
            display: none;
        }

        .thumb:focus .handle-icon.focus {
            display: block;
            fill: var(--ui-interactive, var(--ui-primary));
        }

        .thumb:hover .handle-icon:not(.focus) {
            fill: var(--ui-ink-muted);
        }

        .disabled .handle-icon,
        .disabled .thumb:hover .handle-icon:not(.focus) {
            fill: var(--ui-border-disabled);
        }

        .readonly.range .thumb {
            inline-size: 0;
            block-size: 0;
        }

        .readonly.range .handle-icon {
            display: none;
        }

        ui-tooltip {
            display: block;
            inline-size: 100%;
            block-size: 100%;
        }

        .thumb {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: var(--ui-layer-selected-inverse);
            box-shadow:
                inset 0 0 0 1px transparent,
                inset 0 0 0 2px transparent;
            outline: none;
            transition:
                transform var(--ui-duration-moderate) var(--ui-easing),
                background var(--ui-duration-moderate) var(--ui-easing),
                box-shadow var(--ui-duration-moderate) var(--ui-easing);
        }

        .thumb:hover {
            transform: scale(1.4286);
        }

        /* Carbon cds--slider__thumb:focus (a click or drag too, not only the keyboard): blue fill, 2px blue + layer ring, scaled */
        .thumb:focus {
            background-color: var(--ui-interactive, var(--ui-primary));
            box-shadow:
                inset 0 0 0 2px var(--ui-interactive, var(--ui-primary)),
                inset 0 0 0 3px var(--ui-surface-1);
            transform: scale(1.4286);
        }

        .thumb:active {
            box-shadow: inset 0 0 0 2px var(--ui-interactive, var(--ui-primary));
            transform: scale(1.4286);
        }

        .thumb-wrapper:focus-within ~ .filled-track {
            background-color: var(--ui-border-interactive);
        }

        .input-wrapper {
            position: relative;
        }

        input {
            box-sizing: border-box;
            inline-size: 64px;
            block-size: 40px;
            margin: 0;
            padding: 0 var(--ui-space-md);
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
            /* Carbon slider-text-input is a text-input: background-color and outline at fast-01 */
            transition:
                background-color var(--ui-duration-fast) var(--ui-easing),
                outline-color var(--ui-duration-fast) var(--ui-easing);
        }

        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button {
            appearance: none;
            margin: 0;
        }

        input:focus {
            outline-color: var(--ui-focus);
        }

        .has-status input {
            inline-size: 96px;
            padding-inline-end: var(--ui-space-xxl);
        }

        .invalid input {
            outline-color: var(--ui-error);
        }

        .invalid input:focus {
            outline-color: var(--ui-focus);
        }

        .status {
            position: absolute;
            inset-block-start: 50%;
            inset-inline-end: var(--ui-space-md);
            display: flex;
            transform: translateY(-50%);
            pointer-events: none;
        }

        /* disabled */
        .disabled .slider {
            cursor: not-allowed;
        }

        .disabled .range-label,
        :host([data-disabled]) .label {
            color: var(--ui-ink-disabled);
        }

        .disabled .thumb,
        .disabled .thumb:hover,
        .disabled .thumb:focus,
        .disabled .filled-track,
        .disabled .thumb-wrapper:focus-within ~ .filled-track {
            background: var(--ui-border-disabled);
            box-shadow: none;
            transform: translate(calc(var(--_p0, 0) * 100%), -50%) scaleX(calc(var(--_p, 0) - var(--_p0, 0)));
        }

        /* the whole track greys, at its full width (Carbon cds--slider--disabled .cds--slider__track) */
        .disabled .track {
            background: var(--ui-border-disabled);
        }

        .disabled .thumb,
        .disabled .thumb:hover {
            transform: none;
            cursor: not-allowed;
        }

        .disabled input,
        .disabled input:focus {
            border-bottom-color: transparent;
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
            outline: none;
        }

        /* read-only */
        .readonly .slider {
            cursor: default;
        }

        .readonly .thumb {
            inline-size: 0;
            block-size: 0;
            inset: auto;
        }

        /* read-only without the number box: the hidden thumb still takes focus (like a read-only input), so ring the track */
        .readonly .slider:has(.thumb:focus) {
            outline: 2px solid var(--ui-focus);
            outline-offset: 2px;
        }

        .readonly input {
            background-color: transparent;
        }

        .sr-live {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip-path: inset(50%);
        }

        @media (forced-colors: active) {
            .track,
            .filled-track {
                background: CanvasText;
            }

            .thumb {
                border: 1px solid CanvasText;
            }

            .thumb:focus {
                outline: 2px solid Highlight;
            }
        }
    `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&(this.syncFormState(),this.requestUpdate())}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get form(){return this.internals.form}get willValidate(){return this.internals.willValidate}get labels(){return this.internals.labels}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}formResetCallback(){this.value=this.defaultValue,this.valueUpper=this.defaultValueUpper,this.notANumber=!1}formStateRestoreCallback(e){if(typeof e==`string`&&(this.value=Number(e)),e instanceof FormData){let[t,n]=[...e.values()].map(Number);this.value=t,this.valueUpper=n??this.valueUpper}}formDisabledCallback(e){this.fieldsetDisabled=e}constructor(){super(),this.label=``,this.localize=new w(this),this.hideLabel=!1,this.value=0,this.valueUpper=null,this.nameUpper=``,this.upperInputLabel=``,this.min=0,this.max=100,this.step=1,this.stepMultiplier=4,this.minLabel=``,this.maxLabel=``,this.formatLabel=(e,t)=>`${e}${t??``}`,this.inputLabel=``,this.hideTextInput=!1,this.name=``,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.invalidText=``,this.warn=!1,this.warnText=``,this.correctedText=``,this.text=``,this.textUpper=``,this.notANumber=!1,this.corrected=``,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.slots=new m(this),this.ids=S(`ui-slider`),this.defaultValue=0,this.defaultValueUpper=null,this.dragging=!1,this.dragHandle=`lower`,this.onLabelClick=e=>{T(this,e)&&this.interactive&&this.thumb.focus()},this.onPointerMove=e=>{this.dragging&&this.commit(this.valueAt(e.clientX),!1,this.dragHandle)},this.onPointerUp=e=>{this.dragging&&(this.commit(this.valueAt(e.clientX),!1,this.dragHandle),this.stopDrag(),this.handleValue(this.dragHandle)!==this.valueBeforeDrag&&this.dispatchEvent(new Event(`change`,{bubbles:!0})))},this.valueBeforeDrag=0,this.textChangePending=!1,this.addEventListener(`click`,this.onLabelClick)}connectedCallback(){super.connectedCallback(),this.hasUpdated||(this.defaultValue=this.value,this.defaultValueUpper=this.valueUpper),this.text=String(this.value),this.textUpper=String(this.upper)}disconnectedCallback(){super.disconnectedCallback(),this.stopDrag()}get isDisabled(){return this.disabled||this.fieldsetDisabled||s(this)}get interactive(){return!this.isDisabled&&!this.readonly}get isRange(){return this.valueUpper!==null&&this.valueUpper!==void 0}get upper(){return this.valueUpper??this.max}get fraction(){return D(this.isRange?this.upper:this.value,this)}get fractionStart(){return this.isRange?D(this.value,this):0}boundsOf(e){return this.isRange?e===`upper`?{min:this.value,max:this.max,step:this.step}:{min:this.min,max:this.upper,step:this.step}:{min:this.min,max:this.max,step:this.step}}handleValue(e){return e===`upper`?this.upper:this.value}willUpdate(e){e.has(`value`)&&!this.notANumber&&(this.text=String(this.value)),e.has(`valueUpper`)&&!this.notANumber&&(this.textUpper=String(this.upper)),(e.has(`min`)||e.has(`max`)||e.has(`value`)||e.has(`valueUpper`))&&(this.isRange?(this.valueUpper=A(this.upper,this.min,this.max),this.value=A(this.value,this.min,this.upper)):(e.has(`min`)||e.has(`max`))&&(this.value=A(this.value,this.min,this.max)))}updated(){this.toggleAttribute(`data-disabled`,this.isDisabled),this.syncFormState(),this.syncHostState()}syncHostState(){this.toggleAttribute(`data-show-error`,this.shownKind===`error`),this.toggleAttribute(`data-show-warn`,this.shownKind===`warn`)}syncFormState(){if(g(this.internals,this.isDisabled))return;if(this.isRange&&this.name){let e=new FormData;e.append(this.name,String(this.value)),e.append(this.nameUpper||this.name,String(this.upper)),this.internals.setFormValue(e)}else this.internals.setFormValue(String(this.value));let e=o(this.invalid,this.invalidText,this.customValidityMessage);e?this.internals.setValidity({customError:!0},e,this.thumb):this.notANumber?this.internals.setValidity({badInput:!0},this.invalidText||this.localize.t.field.enterNumber,this.thumb):this.internals.setValidity({})}get thumbFocusable(){return this.interactive||this.readonly&&this.hideTextInput&&!this.isDisabled}get showError(){return this.interactive&&(this.invalid||this.notANumber||!!this.customValidityMessage)}commit(e,t,n=`lower`){let r=this.isRange?P(n,e,this.value,this.upper,this):A(e,this.min,this.max),i=r!==this.handleValue(n);return n===`upper`?this.valueUpper=r:this.value=r,this.notANumber=!1,i&&this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),t&&i&&this.dispatchEvent(new Event(`change`,{bubbles:!0})),i}valueAt(e){let t=this.sliderEl.getBoundingClientRect(),n=t.width===0?0:A((e-t.left)/t.width,0,1);return getComputedStyle(this).direction===`rtl`&&(n=1-n),O(n,this)}onPointerDown(e){if(!this.interactive||e.button!==0)return;e.preventDefault();let t=this.valueAt(e.clientX),n=e.composedPath()[0]?.closest?.(`[data-handle]`)?.dataset.handle;this.dragHandle=this.isRange?n??k(t,this.value,this.upper):`lower`,this.dragging=!0,this.valueBeforeDrag=this.handleValue(this.dragHandle),this.corrected=``;try{this.sliderEl.setPointerCapture(e.pointerId)}catch{}globalThis.addEventListener(`pointermove`,this.onPointerMove),globalThis.addEventListener(`pointerup`,this.onPointerUp),globalThis.addEventListener(`pointercancel`,this.onPointerUp),this.commit(t,!1,this.dragHandle),this.thumbOf(this.dragHandle)?.focus({preventScroll:!0})}thumbOf(e){return this.renderRoot.querySelector(`.thumb[data-handle="${e}"]`)??this.thumb}stopDrag(){this.dragging=!1,globalThis.removeEventListener(`pointermove`,this.onPointerMove),globalThis.removeEventListener(`pointerup`,this.onPointerUp),globalThis.removeEventListener(`pointercancel`,this.onPointerUp)}onThumbKeydown(e,t=`lower`){if(!this.interactive)return;let n=j(e.key,e.shiftKey,this.handleValue(t),{min:this.min,max:this.max,step:this.step,multiplier:this.stepMultiplier});n!==void 0&&(e.preventDefault(),this.corrected=``,this.commit(n,!0,t))}onInput(e,t=`lower`){if(e.stopPropagation(),!this.interactive)return;let n=e.target;t===`upper`?this.textUpper=n.value:this.text=n.value;let r=N(n.value,this.boundsOf(t));r!==void 0&&this.commit(r,!1,t)&&(this.textChangePending=!0)}processText(e=`lower`){let t=M(e===`upper`?this.textUpper:this.text,this.boundsOf(e));t.notANumber?(this.notANumber=!0,this.corrected=``):(this.corrected=t.corrected===void 0?``:(this.correctedText||this.localize.t.field.sliderCorrected).replace(`{value}`,String(t.corrected)),this.notANumber=!1,!this.commit(t.value,!0,e)&&this.textChangePending&&this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.textChangePending=!1,this.text=String(this.value),this.textUpper=String(this.upper))}onInputKeydown(e,t=`lower`){e.key===`Enter`&&this.processText(t)}handleIcons(e){let t=e===`lower`?c`<path d="M15.08 6.46H16v11.08h-.92zM4.46 17.54c-.25 0-.46-.21-.46-.46V6.92a.465.465 0 0 1 .69-.4l8.77 5.08a.46.46 0 0 1 0 .8l-8.77 5.08c-.07.04-.15.06-.23.06Z" />`:c`<path d="M0 6.46h.92v11.08H0zM11.54 6.46c.25 0 .46.21.46.46v10.15a.465.465 0 0 1-.69.4L2.54 12.4a.46.46 0 0 1 0-.8l8.77-5.08c.07-.04.15-.06.23-.06Z" />`,n=e===`lower`?c`<path d="M15.08 0H16v6.46h-.92zM0 0h.92v24H0zM15.08 0H16v24h-.92zM0 .92V0h16v.92zM0 24v-.92h16V24z" />`:c`<path d="M.92 24H0v-6.46h.92zM16 24h-.92V0H16zM.92 24H0V0h.92zM16 23.08V24H0v-.92zM16 0v.92H0V0z" />`;return f`<svg class="handle-icon" viewBox="0 0 16 24" aria-hidden="true">${t}</svg><svg class="handle-icon focus" viewBox="0 0 16 24" aria-hidden="true">${t}${n}</svg>`}renderThumb(e,t,n=`lower`){let r=this.isRange,i=this.handleValue(n),a=r?`${this.ids}-label ${this.ids}-${n}-name`:`${this.ids}-label`,o=f`<div
            class="thumb"
            part=${r?`thumb thumb-${n}`:`thumb`}
            role="slider"
            data-handle=${n}
            id=${`${this.ids}-${r?n:`thumb`}`}
            tabindex=${v(this.thumbFocusable?0:void 0)}
            aria-valuemin=${r&&n===`upper`?this.value:this.min}
            aria-valuemax=${r&&n===`lower`?this.upper:this.max}
            aria-valuenow=${i}
            aria-valuetext=${this.formatLabel(i)}
            aria-labelledby=${a}
            aria-disabled=${v(this.isDisabled?`true`:void 0)}
            aria-readonly=${v(this.readonly?`true`:void 0)}
            aria-invalid=${v(e?`true`:void 0)}
            aria-describedby=${v(t)}
            @keydown=${e=>this.onThumbKeydown(e,n)}
        >${r?this.handleIcons(n):d}</div>`;return this.hideTextInput?f`<ui-tooltip text=${this.formatLabel(i)} placement="top">${o}</ui-tooltip>`:o}renderInput(e,t,n,r,i=`lower`){if(this.hideTextInput)return d;let a=this.isRange,o=this.inputLabel||this.localize.t.field.sliderInput;a&&(o=i===`upper`?this.upperInputLabel||this.localize.t.field.sliderUpper:this.inputLabel||this.localize.t.field.sliderLower);let s=!a||i===`upper`,c=a?`${this.ids}-${i}-input`:`${this.ids}-input`;return f`<div class="input-wrapper ${x({"has-status":n&&s})}">
            <input
                part=${a?`input input-${i}`:`input`}
                id=${c}
                type="number"
                inputmode="decimal"
                .value=${E(i===`upper`?this.textUpper:this.text)}
                aria-label=${o}
                min=${a&&i===`upper`?this.value:this.min}
                max=${a&&i===`lower`?this.upper:this.max}
                step=${this.step}
                ?disabled=${this.isDisabled}
                ?readonly=${this.readonly}
                ?required=${this.required}
                aria-invalid=${e?`true`:`false`}
                aria-describedby=${v(t)}
                @input=${e=>this.onInput(e,i)}
                @blur=${()=>this.processText(i)}
                @keydown=${e=>this.onInputKeydown(e,i)}
            />
            ${s?f`<span class="status">${r}</span>`:d}
        </div>`}focus(e){this.thumb?.focus(e)}renderThumbs(e,t){if(!this.isRange)return f`<div class="thumb-wrapper">${this.renderThumb(e,t)}</div>`;let[n,r]=[`${this.ids}-lower-name`,`${this.ids}-upper-name`];return f`<div class="thumb-wrapper lower">${this.renderThumb(e,t,`lower`)}</div>
            <div class="thumb-wrapper upper">${this.renderThumb(e,t,`upper`)}</div>
            <span class="sr-only" id=${n}>${this.localize.t.field.sliderLower}</span>
            <span class="sr-only" id=${r}>${this.localize.t.field.sliderUpper}</span>`}render(){let e=this.showError,t=r({showError:e,errorText:u(this.invalid,this.customValidityMessage,this.invalidText||(this.notANumber?this.localize.t.field.enterNumber:``)),showWarn:this.warn&&this.interactive,warnText:this.warnText,helperText:``,slots:this.slots});this.shownKind=t?.kind;let n=!!t&&t.kind!==`helper`,o={container:!0,range:this.isRange,invalid:e,disabled:this.isDisabled,readonly:this.readonly},s=l(this.ids,t),c=i(t);return f`
            <label class=${this.hideLabel?`sr-only`:`label`} part="label" id=${`${this.ids}-label`} for=${`${this.ids}-${this.isRange?`lower`:`thumb`}`}>${a(this.label)}</label>
            <div
                class=${x(o)}
                part="base"
                role="group"
                aria-labelledby=${`${this.ids}-label`}
                aria-disabled=${v(this.isDisabled?`true`:void 0)}
                style=${`--_p: ${this.fraction}; --_p0: ${this.fractionStart}`}
            >
                ${this.isRange?this.renderInput(e,s,n,c,`lower`):d}
                <span class="range-label" part="min-label">${this.formatLabel(this.min,this.minLabel)}</span>
                <div class="slider" part="track-wrapper" @pointerdown=${this.onPointerDown}>
                    ${this.renderThumbs(e,s)}
                    <div class="track" part="track"></div>
                    <div class="filled-track" part="filled-track"></div>
                </div>
                <span class="range-label" part="max-label">${this.formatLabel(this.max,this.maxLabel)}</span>
                ${this.renderInput(e,s,n,c,this.isRange?`upper`:`lower`)}
            </div>
            ${b(this.ids,t)}
            <div class="sr-live" aria-live="polite">${this.corrected}</div>
        `}};e([_()],F.prototype,`label`,void 0),e([_({type:Boolean,attribute:`hide-label`})],F.prototype,`hideLabel`,void 0),e([_({type:Number})],F.prototype,`value`,void 0),e([_({type:Number,attribute:`value-upper`})],F.prototype,`valueUpper`,void 0),e([_({attribute:`name-upper`})],F.prototype,`nameUpper`,void 0),e([_({attribute:`upper-input-label`})],F.prototype,`upperInputLabel`,void 0),e([_({type:Number})],F.prototype,`min`,void 0),e([_({type:Number})],F.prototype,`max`,void 0),e([_({type:Number})],F.prototype,`step`,void 0),e([_({type:Number,attribute:`step-multiplier`})],F.prototype,`stepMultiplier`,void 0),e([_({attribute:`min-label`})],F.prototype,`minLabel`,void 0),e([_({attribute:`max-label`})],F.prototype,`maxLabel`,void 0),e([_({attribute:!1})],F.prototype,`formatLabel`,void 0),e([_({attribute:`input-label`})],F.prototype,`inputLabel`,void 0),e([_({type:Boolean,reflect:!0,attribute:`hide-text-input`})],F.prototype,`hideTextInput`,void 0),e([_({reflect:!0})],F.prototype,`name`,void 0),e([_({type:Boolean,reflect:!0})],F.prototype,`disabled`,void 0),e([_({type:Boolean,reflect:!0})],F.prototype,`readonly`,void 0),e([_({type:Boolean,reflect:!0})],F.prototype,`required`,void 0),e([_({type:Boolean,reflect:!0})],F.prototype,`invalid`,void 0),e([_({attribute:`invalid-text`})],F.prototype,`invalidText`,void 0),e([_({type:Boolean,reflect:!0})],F.prototype,`warn`,void 0),e([_({attribute:`warn-text`})],F.prototype,`warnText`,void 0),e([_({attribute:`corrected-text`})],F.prototype,`correctedText`,void 0),e([y()],F.prototype,`text`,void 0),e([y()],F.prototype,`textUpper`,void 0),e([y()],F.prototype,`notANumber`,void 0),e([y()],F.prototype,`corrected`,void 0),e([y()],F.prototype,`fieldsetDisabled`,void 0),e([p(`.thumb`)],F.prototype,`thumb`,void 0),e([p(`.slider`)],F.prototype,`sliderEl`,void 0),F=e([h(`ui-slider`)],F);
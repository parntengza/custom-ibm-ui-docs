import{C as e,Ct as t,N as n,R as r,Z as i,_t as a,bt as o,ft as s,gt as c,ht as l,j as u,mt as d,ot as f,pt as p,st as m,tt as h,w as g,x as _}from"./theme-switcher-BKi8EfZd.js";import"./button-BVtMUNlp.js";import{a as v,n as y}from"./skeleton-CJ3-DC_A.js";import"./progress-bar-Cr8VK0Az.js";import{a as b,c as x,i as S,n as C,o as w,r as T,s as E,t as D}from"./file-uploader-Dfyz1981.js";var O=class extends y{static{this.styles=[v,t`
            :host {
                display: block;
            }

            .stack {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: var(--ui-space-xs);
            }

            .title {
                inline-size: 100px;
                block-size: 24px;
            }

            .description {
                inline-size: 225px;
                block-size: 16px;
            }

            .button {
                inline-size: 150px;
                block-size: var(--ui-field-height-lg, 48px);
            }
        `]}render(){return o`<div class="stack">
            <span class="bone title" part="title"></span><span class="bone description" part="description"></span><span class="bone button" part="button"></span>
        </div>`}};O=e([l(`ui-file-uploader-skeleton`)],O);var k=o`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12 4.7 11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z" /></svg>`,A=o`<svg class="complete" viewBox="0 0 16 16"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-1 10.2L4 8.2l.8-.8L7 9.6l4.2-4.2.8.8z" /></svg>`,j=o`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8Z" /><path d="M20 22h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8Z" /></svg>`,M=o`<svg class="invalid-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.5 3h1v5h-1zM8 12.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" /></svg>`,N=0;function P(e){e&&(e.tabIndex=-1,e.addEventListener(`blur`,()=>e.removeAttribute(`tabindex`),{once:!0}),e.focus())}var F=class extends g{constructor(...e){super(...e),this.name=``,this.uuid=``,this.status=`edit`,this.invalid=!1,this.errorSubject=``,this.errorBody=``,this.size=`md`,this.disabled=!1,this.iconLabel=``,this.retryable=!1,this.ids=h(`ui-file-uploader-item`),this.localize=new _(this),this.announcement=``,this.retryFocused=!1}static{this.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[i,t`
        :host {
            display: block;
            max-inline-size: 320px;
            font-family: var(--ui-font-family);
        }

        /* 8px under each file but the last — on the row, collapsing through the host: a page-wide CSS reset would remove a :host margin */
        .row {
            margin-block-end: var(--ui-space-xs);
        }

        /* holds focus while a restarted upload shows only its spinner (see focusRow) */
        .row:focus {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        :host(:last-of-type) .row {
            margin-block-end: 0;
        }

        /* a progress bar sits right under the row: the 8px goes under the bar */
        .row.progressing {
            margin-block-end: 0;
        }

        .progress {
            margin-block-end: var(--ui-space-xs);
        }

        :host(:last-of-type) .progress {
            margin-block-end: 0;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr auto auto; /* name | size, percentage | state */
            grid-auto-rows: auto;
            align-items: center;
            gap: 12px 0;
            min-block-size: 48px;
            background-color: var(--ui-surface-1);
            overflow-wrap: break-word;
        }

        :host([size='md']) .row {
            gap: var(--ui-space-xs) 0;
            min-block-size: 40px;
        }

        :host([size='sm']) .row {
            gap: var(--ui-space-xxs) 0;
            min-block-size: 32px;
        }

        .row.invalid {
            padding: 12px 0;
            outline: 2px solid var(--ui-error);
            outline-offset: -2px;
        }

        :host([size='md']) .row.invalid {
            padding: var(--ui-space-xs) 0;
        }

        :host([size='sm']) .row.invalid {
            padding: var(--ui-space-xxs) 0;
        }

        .name {
            margin: 0 0 0 var(--ui-space-md);
            overflow: hidden;
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        :host([disabled]) .name {
            color: var(--ui-ink-disabled);
        }

        .meta {
            display: flex;
            gap: var(--ui-space-xs);
            padding-inline: var(--ui-space-xs);
            color: var(--ui-ink-muted);
            font: var(--ui-font-caption);
            font-variant-numeric: tabular-nums;
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
            white-space: nowrap;
        }

        :host([disabled]) .meta {
            color: var(--ui-ink-disabled);
        }

        .state {
            display: flex;
            align-items: center;
            justify-content: center;
            min-inline-size: 24px;
            padding-inline-end: 12px;
        }

        .invalid-icon {
            width: 16px;
            height: 16px;
            margin-inline-end: var(--ui-space-xs);
            fill: var(--ui-error);
        }

        .close,
        .retry {
            display: flex;
            align-items: center;
            justify-content: center;
            inline-size: 24px;
            block-size: 24px;
            padding: 0;
            border: none;
            background: transparent;
            color: var(--ui-icon-primary);
            cursor: pointer;
            outline: none;
        }

        .close svg,
        .retry svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .close:focus-visible,
        .retry:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        .close:disabled,
        .retry:disabled {
            color: var(--ui-icon-disabled);
            cursor: not-allowed;
        }

        .complete {
            inline-size: 24px;
            block-size: 16px;
            fill: var(--ui-interactive, var(--ui-primary));
        }

        .spinner {
            box-sizing: border-box;
            inline-size: 16px;
            block-size: 16px;
            margin: var(--ui-space-xxs);
            border: 2px solid var(--ui-layer-accent);
            border-top-color: var(--ui-interactive, var(--ui-primary));
            border-radius: 50%;
            animation: spin 690ms linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 2s;
            }
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .error {
            grid-column: 1 / -1;
            margin: 0;
            padding: var(--ui-space-md) 0 0;
            border-block-start: 1px solid var(--ui-hairline);
        }

        :host([size='md']) .error {
            padding-block-start: 11px;
        }

        :host([size='sm']) .error {
            padding-block-start: 7px;
        }

        .error-title,
        .error-body {
            margin: 0;
            padding: 0 var(--ui-space-md);
            font: var(--ui-font-caption);
            line-height: 16px; /* label-01 */
            letter-spacing: var(--ui-tracking-caption);
        }

        .error-title {
            color: var(--ui-error-text, var(--ui-error));
        }

        .error-body {
            color: var(--ui-ink);
        }

        @media (forced-colors: active) {
            .row {
                outline: 1px solid CanvasText;
            }
        }
    `]}willUpdate(e){e.get(`status`)===`uploading`&&this.status===`complete`?this.announcement=`${this.localize.t.fileUploader.uploaded}: ${this.name}`:e.has(`status`)&&(this.announcement=``),this.retryFocused=!!this.shadowRoot?.activeElement?.matches(`.retry`)}updated(){if(!this.retryFocused||this.renderRoot.querySelector(`.retry`))return;let e=this.renderRoot.querySelector(`.close`);e?e.focus():P(this.renderRoot.querySelector(`.row`))}get percent(){return this.status===`uploading`?x(this.progress):void 0}get removable(){return!this.disabled&&(this.status===`edit`||this.percent!==void 0)}get errorText(){return b(this,this.localize.t.fileUploader)}get defaultIconLabel(){let e=this.localize.t.fileUploader;return this.status===`uploading`?e.uploading:this.status===`complete`?e.uploaded:e.removeFile}requestDelete(){this.disabled||this.dispatchEvent(new CustomEvent(`ui-delete`,{detail:{uuid:this.uuid||this.name,name:this.name},bubbles:!0,composed:!0}))}requestRetry(){this.disabled||this.dispatchEvent(new CustomEvent(`ui-retry`,{detail:{uuid:this.uuid||this.name,name:this.name},bubbles:!0,composed:!0}))}renderState(){let e=this.localize.t.fileUploader,t=this.iconLabel||this.defaultIconLabel,n=this.percent;if(this.status===`uploading`&&n===void 0)return o`<span class="spinner" data-file-state aria-hidden="true"></span><span class="sr-only">${t}</span>`;if(this.status===`complete`)return o`<span data-file-state aria-hidden="true">${A}</span><span class="sr-only">${t}</span>`;let r=this.errorText?`${this.ids}-error`:void 0,i=this.invalid&&this.retryable;return o`${this.invalid?M:a}${i?o`<button
                      class="retry"
                      part="retry-button"
                      type="button"
                      aria-label=${`${e.retry} - ${this.name}`}
                      aria-describedby=${f(r)}
                      ?disabled=${this.disabled}
                      @click=${this.requestRetry}
                  >
                      ${j}
                  </button>`:a}<button
                class="close"
                part="delete-button"
                type="button"
                aria-label=${`${n===void 0?t:e.cancelUpload} - ${this.name}`}
                aria-describedby=${f(r)}
                ?disabled=${this.disabled}
                @click=${this.requestDelete}
            >
                ${k}
            </button>`}renderMeta(e){let t=this.localize.lang(),n=typeof this.fileSize==`number`&&Number.isFinite(this.fileSize)?T(this.fileSize,t):``;if(!n&&e===void 0)return a;let r=n?o`<span part="size">${n}</span>`:a,i=e===void 0?a:o`<span part="percent" aria-hidden="true">${S(e,t)}</span>`;return o`<span class="meta">${r}${i}</span>`}renderError(){let e=this.errorText;return e?o`<div class="error" part="error" role="alert" id="${this.ids}-error">
            <div class="error-title">${e}</div>
            ${this.errorBody?o`<p class="error-body">${this.errorBody}</p>`:a}
        </div>`:a}renderProgress(e){if(e===void 0)return a;let t=`${this.iconLabel||this.localize.t.fileUploader.uploading} - ${this.name}`;return o`<ui-progress-bar class="progress" part="progress" size="sm" hide-label label=${t} .value=${e}></ui-progress-bar>`}render(){let e=this.percent;return o`<div class="row ${m({invalid:this.invalid,progressing:e!==void 0})}" part="base" aria-disabled=${f(this.disabled?`true`:void 0)}>
                <p class="name" part="name" title=${this.name}>${this.name}</p>
                ${this.renderMeta(e)}
                <span class="state">${this.renderState()}</span>
                ${this.renderError()}
                <span class="sr-only" role="status">${this.announcement}</span>
            </div>
            ${this.renderProgress(e)}`}};e([d()],F.prototype,`name`,void 0),e([d()],F.prototype,`uuid`,void 0),e([d({reflect:!0})],F.prototype,`status`,void 0),e([d({type:Boolean,reflect:!0})],F.prototype,`invalid`,void 0),e([d({attribute:`error-subject`})],F.prototype,`errorSubject`,void 0),e([d({attribute:`error-body`})],F.prototype,`errorBody`,void 0),e([d({reflect:!0})],F.prototype,`size`,void 0),e([d({type:Boolean,reflect:!0})],F.prototype,`disabled`,void 0),e([d({attribute:`icon-label`})],F.prototype,`iconLabel`,void 0),e([d({type:Number})],F.prototype,`progress`,void 0),e([d({type:Boolean,reflect:!0})],F.prototype,`retryable`,void 0),e([d({type:Number,attribute:`file-size`})],F.prototype,`fileSize`,void 0),e([p()],F.prototype,`announcement`,void 0),F=e([l(`ui-file-uploader-item`)],F);var I=class extends g{constructor(...e){super(...e),this.labelTitle=``,this.localize=new _(this),this.labelDescription=``,this.buttonLabel=``,this.buttonKind=`primary`,this.size=`md`,this.drop=!1,this.dropLabel=``,this.accept=``,this.multiple=!1,this.maxFileSize=0,this.maxFiles=0,this.maxTotalSize=0,this.showSize=!1,this.name=``,this.disabled=!1,this.status=`edit`,this.iconLabel=``,this.keepLabel=!1,this.required=!1,this.requiredText=``,this.invalidTypeText=``,this.tooLargeText=``,this.tooManyText=``,this.totalTooLargeText=``,this.invalidBodyText=``,this.files=[],this.dragOver=!1,this.pickedLabel=``,this.fieldsetDisabled=!1,this.internals=this.attachInternals(),this.customValidityMessage=``,this.ids=h(`ui-file-uploader`),this.onFormInvalid=e=>{e.preventDefault(),this.form?.querySelector(`:invalid`)===this&&this.focus()}}static{this.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0}}static{this.formAssociated=!0}static{this.styles=[i,t`
        :host {
            display: block;
            inline-size: 100%;
            font-family: var(--ui-font-family);
        }

        .title {
            margin: 0 0 var(--ui-space-xs);
            color: var(--ui-ink);
            font: var(--ui-font-body-emphasis);
            line-height: 18px; /* heading-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        .description {
            margin: 0 0 var(--ui-space-md);
            color: var(--ui-ink-muted);
            font: var(--ui-font-body-sm);
            line-height: 18px; /* body-compact-01 */
            letter-spacing: var(--ui-tracking-body);
        }

        :host([disabled]) .title,
        :host([disabled]) .description {
            color: var(--ui-ink-disabled);
        }

        .drop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            box-sizing: border-box;
            inline-size: 100%;
            max-inline-size: 320px;
            block-size: 96px;
            padding: var(--ui-space-md);
            border: 1px dashed var(--ui-hairline-strong);
            background: transparent;
            color: var(--ui-link);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            text-align: start;
            overflow: hidden;
            cursor: pointer;
            outline: 2px solid transparent;
            outline-offset: -2px;
            /* Carbon file-browse-btn: everything at fast-02 (the outline, and the text colour while pressed) */
            transition:
                outline-color var(--ui-duration-moderate) var(--ui-easing),
                color var(--ui-duration-moderate) var(--ui-easing);
        }

        .drop:hover,
        .drop:focus-visible,
        .drop.drag-over {
            outline-color: var(--ui-focus);
        }

        .drop:hover,
        .drop:focus-visible {
            text-decoration: underline;
        }

        .drop:active {
            color: var(--ui-ink);
        }

        .drop:disabled {
            border-color: var(--ui-button-disabled);
            color: var(--ui-ink-disabled);
            cursor: no-drop;
            text-decoration: none;
            outline: none;
        }

        .items {
            margin-block-start: var(--ui-space-md);
        }

        :host([drop]) .items {
            margin-block-start: var(--ui-space-xs);
        }

        .items:empty {
            display: none;
        }
    `]}setCustomValidity(e){this.customValidityMessage=e,this.hasUpdated&&this.syncFormValue()}get form(){return this.internals.form}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.internals.checkValidity()}reportValidity(){return this.internals.reportValidity()}connectedCallback(){super.connectedCallback(),this.addEventListener(`invalid`,this.onFormInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`invalid`,this.onFormInvalid)}formResetCallback(){this.clearFiles()}formDisabledCallback(e){this.fieldsetDisabled=e}get isDisabled(){return this.disabled||this.fieldsetDisabled||r(this)}updated(e){[`files`,`disabled`,`fieldsetDisabled`,`name`,`required`,`requiredText`].some(t=>e.has(t))&&this.syncFormValue(),this.toggleAttribute(`data-drag-over`,this.dragOver)}syncFormValue(){if(u(this.internals,this.isDisabled))return;let e=this.files.filter(e=>!e.invalid);if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n.file,n.name);this.internals.setFormValue(t)}else this.internals.setFormValue(null);let t=this.shadowRoot?.querySelector(`.drop, ui-button`)??void 0;this.customValidityMessage?this.internals.setValidity({customError:!0},this.customValidityMessage,t):this.required&&!e.length?this.internals.setValidity({valueMissing:!0},this.requiredText||this.localize.t.fileUploader.required,t):this.internals.setValidity({})}browse(){this.isDisabled||(this.input.value=``,this.input.click())}toItem(e,t){let n={uuid:`${this.ids}-${++N}`,name:e.name,file:e,status:this.status};if(!t)return n;let r=E(t,this.localize.t.fileUploader,this,{maxFiles:this.maxFiles,maxTotalSize:this.maxTotalSize,locale:this.localize.lang()});return{...n,invalid:!0,...r}}addFiles(e){if(this.isDisabled||!e.length)return;let t=this.multiple?e:[e[0]],n=this.multiple?this.files.filter(e=>!e.invalid).map(e=>e.file):[],r={accept:this.accept,maxFileSize:this.maxFileSize,maxFiles:this.maxFiles,maxTotalSize:this.maxTotalSize},i=D(t,r,n),a=t.map((e,t)=>this.toItem(e,i[t]));this.dispatchEvent(new CustomEvent(`ui-add`,{detail:{addedFiles:a},bubbles:!0,composed:!0})),this.files=this.multiple?[...this.files,...a]:a,this.keepLabel||(this.pickedLabel=w(t.map(e=>e.name),this.localize.t.fileUploader.filesChosen)),this.emitChange({addedFiles:a,removedFiles:[],currentFiles:this.files,action:`add`})}removeFile(e){let t=this.files.find(t=>t.uuid===e);t&&(this.files=this.files.filter(e=>e!==t),this.dispatchEvent(new CustomEvent(`ui-delete`,{detail:{deletedFile:t,remainingFiles:this.files},bubbles:!0,composed:!0})),this.emitChange({addedFiles:[],removedFiles:[t],currentFiles:this.files,action:`remove`}))}clearFiles(){let e=this.files;this.files=[],this.pickedLabel=``,this.input&&(this.input.value=``),e.length&&this.emitChange({addedFiles:[],removedFiles:e,currentFiles:[],action:`clear`})}emitChange(e){this.dispatchEvent(new CustomEvent(`ui-change`,{detail:e,bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0}))}onInputChange(e){this.addFiles([...e.target.files??[]])}onDragOver(e){e.preventDefault(),e.stopPropagation(),!this.isDisabled&&(this.dragOver=!0,e.dataTransfer&&(e.dataTransfer.dropEffect=`copy`))}onDragLeave(e){e.preventDefault(),e.stopPropagation(),this.dragOver=!1}onDrop(e){if(e.preventDefault(),e.stopPropagation(),this.dragOver=!1,this.isDisabled||!e.dataTransfer)return;let t=[...e.dataTransfer.items],n=t.length?t.filter(e=>e.kind===`file`&&!e.webkitGetAsEntry?.()?.isDirectory).flatMap(e=>e.getAsFile()??[]):[...e.dataTransfer.files];this.addFiles(n)}onTriggerKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.browse())}onItemDelete(e){let t=e.target;if(!t.closest(`.items`))return;e.stopPropagation();let r=this.renderedItems().indexOf(t),i=n(),a=!!i&&!!t.shadowRoot?.contains(i);this.removeFile(e.detail.uuid),a&&this.updateComplete.then(()=>this.focusAfterRemoval(r))}focusAfterRemoval(e){let t=this.renderedItems(),n=t[C(t.map(e=>e.removable),e)];n?n.focus():this.renderRoot.querySelector(`[part="trigger"]`)?.focus()}onItemRetry(e){if(!e.target.closest(`.items`))return;e.stopPropagation();let t=this.files.find(t=>t.uuid===e.detail.uuid);t&&this.dispatchEvent(new CustomEvent(`ui-retry`,{detail:{retriedFile:t},bubbles:!0,composed:!0}))}renderedItems(){return[...this.renderRoot.querySelectorAll(`.items > ui-file-uploader-item`)]}renderTrigger(){return this.drop?o`<button
                class="drop ${m({"drag-over":this.dragOver})}"
                part="trigger"
                type="button"
                ?disabled=${this.isDisabled}
                @click=${this.browse}
                @keydown=${this.onTriggerKeydown}
            >
                ${this.dropLabel||this.localize.t.fileUploader.dropHint}
            </button>`:o`<ui-button part="trigger" kind=${this.buttonKind} size=${this.size} ?disabled=${this.isDisabled} @click=${this.browse}>
            ${this.pickedLabel||this.buttonLabel||this.localize.t.fileUploader.addFile}
        </ui-button>`}render(){return o`
            <div class="base" role="group" aria-labelledby=${f(this.labelTitle?`${this.ids}-title`:void 0)} aria-disabled=${f(this.isDisabled?`true`:void 0)}>
            ${this.labelTitle?o`<p class="title" part="title" id="${this.ids}-title">${this.labelTitle}</p>`:a}
            ${this.labelDescription?o`<p class="description" part="description" id="${this.ids}-description">${this.labelDescription}</p>`:a}
            <div class="zone" @dragover=${this.onDragOver} @dragleave=${this.onDragLeave} @drop=${this.onDrop}>
                ${this.renderTrigger()}
                <label class="sr-only" for=${`${this.ids}-input`}>${this.labelTitle||this.buttonLabel||this.localize.t.fileUploader.addFile}</label>
                <input
                    class="sr-only"
                    id=${`${this.ids}-input`}
                    type="file"
                    tabindex="-1"
                    ?multiple=${this.multiple}
                    accept=${this.accept||a}
                    ?disabled=${this.isDisabled}
                    @change=${this.onInputChange}
                />
            </div>
            </div>
            <div class="items" part="items" @ui-delete=${this.onItemDelete} @ui-retry=${this.onItemRetry}>
                ${this.files.map(e=>o`<ui-file-uploader-item
                        uuid=${e.uuid}
                        name=${e.name}
                        status=${e.status??this.status}
                        size=${this.size}
                        ?invalid=${!!e.invalid}
                        error-subject=${e.errorSubject??``}
                        error-body=${e.errorBody??``}
                        icon-label=${this.iconLabel}
                        ?disabled=${this.isDisabled}
                        .progress=${e.progress}
                        ?retryable=${!!e.retryable}
                        .fileSize=${this.showSize?e.file.size:void 0}
                    ></ui-file-uploader-item>`)}
                <slot></slot>
            </div>
        `}};e([d({attribute:`label-title`})],I.prototype,`labelTitle`,void 0),e([d({attribute:`label-description`})],I.prototype,`labelDescription`,void 0),e([d({attribute:`button-label`})],I.prototype,`buttonLabel`,void 0),e([d({attribute:`button-kind`})],I.prototype,`buttonKind`,void 0),e([d({reflect:!0})],I.prototype,`size`,void 0),e([d({type:Boolean,reflect:!0})],I.prototype,`drop`,void 0),e([d({attribute:`drop-label`})],I.prototype,`dropLabel`,void 0),e([d()],I.prototype,`accept`,void 0),e([d({type:Boolean,reflect:!0})],I.prototype,`multiple`,void 0),e([d({type:Number,attribute:`max-file-size`})],I.prototype,`maxFileSize`,void 0),e([d({type:Number,attribute:`max-files`})],I.prototype,`maxFiles`,void 0),e([d({type:Number,attribute:`max-total-size`})],I.prototype,`maxTotalSize`,void 0),e([d({type:Boolean,attribute:`show-size`})],I.prototype,`showSize`,void 0),e([d({reflect:!0})],I.prototype,`name`,void 0),e([d({type:Boolean,reflect:!0})],I.prototype,`disabled`,void 0),e([d()],I.prototype,`status`,void 0),e([d({attribute:`icon-label`})],I.prototype,`iconLabel`,void 0),e([d({type:Boolean,attribute:`keep-label`})],I.prototype,`keepLabel`,void 0),e([d({type:Boolean,reflect:!0})],I.prototype,`required`,void 0),e([d({attribute:`required-text`})],I.prototype,`requiredText`,void 0),e([d({attribute:`invalid-type-text`})],I.prototype,`invalidTypeText`,void 0),e([d({attribute:`too-large-text`})],I.prototype,`tooLargeText`,void 0),e([d({attribute:`too-many-text`})],I.prototype,`tooManyText`,void 0),e([d({attribute:`total-too-large-text`})],I.prototype,`totalTooLargeText`,void 0),e([d({attribute:`invalid-body-text`})],I.prototype,`invalidBodyText`,void 0),e([d({attribute:!1})],I.prototype,`files`,void 0),e([p()],I.prototype,`dragOver`,void 0),e([p()],I.prototype,`pickedLabel`,void 0),e([p()],I.prototype,`fieldsetDisabled`,void 0),e([s(`input[type="file"]`)],I.prototype,`input`,void 0),I=e([l(`ui-file-uploader`)],I);
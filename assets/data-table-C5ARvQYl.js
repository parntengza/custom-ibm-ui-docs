import{C as e,Ct as t,St as n,Z as r,_t as i,bt as a,h as o,ht as s,mt as c,ot as l,pt as u,tt as d,w as f,x as ee}from"./theme-switcher-BKi8EfZd.js";import"./button-BVtMUNlp.js";import{a as p}from"./skeleton-CJ3-DC_A.js";import{t as m}from"./live-BjLUomhr.js";import"./checkbox-group-5ZIXOOsg.js";import"./checkbox-vHcx3J95.js";import"./radio-BKvqkkkD.js";import"./popover-B5Yx-N5R.js";import{t as te}from"./repeat-Chi44jDn.js";import{C as ne,S as h,_ as g,b as _,c as re,d as v,f as y,g as b,h as x,l as S,m as ie,p as ae,s as C,u as oe,v as w,x as T,y as E}from"./pagination-BDu9hp8D.js";import"./pagination-BL8MscO-.js";import{a as D,c as O,i as k,l as A,n as j,o as M,r as N,s as P,t as F}from"./column-resize-BIR7jtGa.js";import{n as I}from"./timers-B8uB_VHg.js";var L=n`<path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />`,R=n`<path d="M2 13h12v1H2zm10.7-8.3L11.3 3.3a1 1 0 0 0-1.4 0L4 9.2V12h2.8l5.9-5.9a1 1 0 0 0 0-1.4ZM6.4 11H5V9.6l4-4L10.4 7Zm4.7-4.7L9.7 4.9l1-1 1.4 1.4Z" />`;function se(e){e.tabIndex=-1;let t=()=>{for(let t of e.shadowRoot?.querySelectorAll(`button, a[href], input, select, textarea, [tabindex]`)??[])t.tabIndex=-1};t(),e.updateComplete?.then(t)}var z=e=>e.classList.contains(`filler`),B=`button, a[href], input, select, textarea, [tabindex], ui-checkbox, ui-radio, ui-button, ui-link`,V=B.split(`, `).map(e=>`tbody > tr[data-row-id] > td ${e}:not(.cell-editor)`).join(`, `),H=class{constructor(e){this.active=null,this.editing=null,this.draft=``,this.error=``,this.pendingFocus=null,this.stop=null,this.outOfTabOrder=new WeakSet,this.onKeydown=e=>{if(!this.enabled||this.editing)return;let t=this.targetCell(e);if(!t||e.composedPath()[0]!==t)return;let n=this.bodyRows(),r=t.parentElement,i=[...r.cells].filter(e=>!z(e)).length,a=O(e.key,e.ctrlKey||e.metaKey,{row:n.indexOf(r),cell:t.cellIndex},n.length,i);if(a)e.preventDefault(),this.moveTo(n[a.row]?.cells[a.cell]);else if(t.dataset.editable!==void 0)this.onEditableKey(e,t);else if(e.key===`Enter`||e.key===` `){let n=t.querySelector(B);if(!n)return;e.preventDefault(),n.click()}},this.onFocusIn=e=>{if(!this.enabled)return;let t=this.targetCell(e),n=t?.parentElement;t&&n?.dataset.rowId&&(this.active?.rowId!==n.dataset.rowId||this.active.cell!==t.cellIndex)&&(this.active={rowId:n.dataset.rowId,cell:t.cellIndex},this.setStop(t))},this.onClick=e=>{if(!this.enabled)return;let t=this.targetCell(e);t&&!t.classList.contains(`editing`)&&((this.active?.rowId!==t.parentElement.dataset.rowId||this.active?.cell!==t.cellIndex)&&(this.active={rowId:t.parentElement.dataset.rowId??``,cell:t.cellIndex},this.setStop(t)),e.composedPath()[0].closest?.(`.edit-icon`)?this.start(t):(e.composedPath()[0]===t||e.composedPath()[0].classList?.contains(`cell-value`))&&t.focus())},this.onDoubleClick=e=>{let t=this.targetCell(e);t?.hasAttribute(`data-editable`)&&!t.classList.contains(`editing`)&&this.start(t)},this.host=e,e.addController(this)}get enabled(){return this.host.visibleHeaders.some(e=>e.editable)}get cellTabIndex(){return this.enabled?`-1`:void 0}get readOnly(){return this.enabled?`true`:void 0}hostUpdated(){if(!this.enabled)return;let e=this.host.renderRoot.querySelector(`tbody > tr[data-row-id]`);if(!e)return;let t=this.activeCell();t||=(this.active={rowId:e.dataset.rowId??``,cell:0},e.cells[0]),this.setStop(t);for(let e of this.host.renderRoot.querySelectorAll(V))this.outOfTabOrder.has(e)||(this.outOfTabOrder.add(e),se(e));this.applyPendingFocus()}setStop(e){this.stop&&this.stop!==e&&(this.stop.tabIndex=-1),e.tabIndex=0,this.stop=e}applyPendingFocus(){let e=this.pendingFocus;if(this.pendingFocus=null,e===`cell`&&this.activeCell()?.focus(),e!==`editor`)return;let t=this.editorElement();t?.focus(),t instanceof HTMLInputElement&&t.type===`text`&&t.select()}renderCell(e,t,n,r,o,s){let c=this.editing?.rowId===e.id&&this.editing.key===t.key;if(!t.editable)return a`<td data-align=${n??i} tabindex=${this.cellTabIndex??i} aria-readonly=${this.readOnly??i}>${r()}</td>`;if(c){let e=t.header+s;return a`<td data-align=${n??i} tabindex="-1" data-editable class="editing" data-key=${t.key}>${this.renderEditor(t,e)}</td>`}let l=t.editable===`select`&&t.options?t.options.find(n=>n.value===C(e[t.key]))?.label??r():r();return a`<td data-align=${n??i} tabindex="-1" data-editable data-key=${t.key} aria-describedby=${o}>
            <span class="cell-value">${l}</span><svg class="edit-icon" viewBox="0 0 16 16" aria-hidden="true">${R}</svg>
        </td>`}renderEditor(e,t){let n=this.error!==``,r=n?a`<span class="cell-error" id="cell-error" role="alert">${this.error}</span>`:i,o=e=>this.onEditorKeydown(e),s=e=>this.onEditorFocusOut(e),c=e=>{this.draft=e.target.value};if(e.editable===`select`)return a`<select class="cell-editor" aria-label=${t} aria-invalid=${n?`true`:`false`} aria-describedby=${n?`cell-error`:i} @input=${c} @change=${c} @keydown=${o} @focusout=${s}>
                    ${(e.options??[]).map(e=>a`<option value=${e.value} ?selected=${e.value===this.draft}>${e.label}</option>`)}
                </select><svg class="cell-chevron" viewBox="0 0 16 16" aria-hidden="true">${L}</svg>${r}`;let l=e.editable===`number`;return a`<input
                class="cell-editor"
                type=${l?`number`:`text`}
                inputmode=${l?`decimal`:i}
                .value=${m(this.draft)}
                aria-label=${t}
                aria-invalid=${n?`true`:`false`}
                aria-describedby=${n?`cell-error`:i}
                @input=${c}
                @keydown=${o}
                @focusout=${s}
            />${r}`}renderHint(e,t){return this.enabled?a`<span class="sr-only" id=${e}>${t.editHint}</span>`:a``}bodyRows(){return[...this.host.renderRoot.querySelectorAll(`tbody > tr[data-row-id]`)]}activeCell(){return this.active?this.host.renderRoot.querySelector(`tbody > tr[data-row-id="${CSS.escape(this.active.rowId)}"]`)?.cells[this.active.cell]??null:null}editorElement(){return this.host.renderRoot.querySelector(`td.editing .cell-editor`)}moveTo(e){let t=e?.parentElement;e&&!z(e)&&t?.dataset.rowId&&(this.active={rowId:t.dataset.rowId,cell:e.cellIndex},this.setStop(e),e.focus())}targetCell(e){for(let t of e.composedPath())if(t instanceof HTMLTableCellElement&&!z(t)&&t.closest(`tbody`)&&t.parentElement?.dataset.rowId)return t;return null}onEditableKey(e,t){let n=this.headerOf(t)?.editable,r=n?P(e,n):null;r&&(e.preventDefault(),this.start(t,r===`type`?e.key:void 0))}headerOf(e){return this.host.visibleHeaders.find(t=>t.key===e.dataset.key)}rowOf(e){return this.host.rows.find(t=>t.id===e)}start(e,t){let n=this.headerOf(e),r=e.parentElement.dataset.rowId??``,i=this.rowOf(r);n&&i&&(this.active={rowId:r,cell:e.cellIndex},this.editing={rowId:r,key:n.key},this.draft=t??M(i[n.key]),this.error=``,this.pendingFocus=`editor`,this.host.requestUpdate())}cancel(){this.editing=null,this.error=``,this.pendingFocus=`cell`,this.host.requestUpdate()}commit(){let e=this.editing;if(!e)return!0;let t=this.host.visibleHeaders.find(t=>t.key===e.key),n=this.rowOf(e.rowId);if(!t||!n)return!0;let r=A(t.editable??`text`,this.draft),i=t.validate?.(r,n)??``;if(i)return this.error=i,this.host.requestUpdate(),!1;this.editing=null,this.error=``;let a=D(this.host.rows,n.id,t.key,r);return a&&(this.host.rows=a.rows,this.host.dispatchEvent(new CustomEvent(`ui-cell-edit`,{detail:{rowId:n.id,key:t.key,value:r,previous:a.previous,row:a.row},bubbles:!0,composed:!0}))),this.host.requestUpdate(),!0}onEditorKeydown(e){if(e.stopPropagation(),e.key===`Escape`)e.preventDefault(),this.cancel();else if(e.key===`Enter`)e.preventDefault(),this.commit()&&(this.pendingFocus=`cell`);else if(e.key===`Tab`){e.preventDefault();let t=this.activeCell();if(!this.commit())return;let n=this.nextEditable(t,e.shiftKey?-1:1);n?this.host.updateComplete.then(()=>{let e=this.findCell(n);e&&this.start(e)}):this.pendingFocus=`cell`}}onEditorFocusOut(e){let t=e.relatedTarget,n=e.target.closest(`td`);t&&n?.contains(t)||this.editing&&(this.commit()||(this.pendingFocus=`editor`))}nextEditable(e,t){let n=this.bodyRows().flatMap(e=>[...e.cells].filter(e=>e.dataset.editable!==void 0)),r=n[(e?n.indexOf(e):-1)+t];return r?{rowId:r.parentElement.dataset.rowId??``,cell:r.cellIndex}:null}findCell(e){return this.bodyRows().find(t=>t.dataset.rowId===e.rowId)?.cells[e.cell]??null}},U=t`
    tbody td:focus-visible {
        outline: 2px solid var(--ui-focus);
        outline-offset: -2px;
    }

    td[data-editable] {
        position: relative;
        cursor: text;
    }

    /* right after the value, so it reads as that value's control (hidden but in place: nothing shifts on hover) */
    .edit-icon {
        width: 16px;
        height: 16px;
        margin-inline-start: var(--ui-space-xs);
        vertical-align: text-bottom;
        fill: var(--ui-ink-muted);
        opacity: 0;
        cursor: pointer;
    }

    td[data-editable]:hover .edit-icon,
    td[data-editable]:focus .edit-icon {
        opacity: 1;
    }

    td.editing {
        padding: 0;
    }

    .cell-editor {
        box-sizing: border-box;
        display: block;
        inline-size: 100%;
        block-size: 100%;
        min-block-size: calc(var(--_row, 48px) - 2px); /* the cell keeps its 1px top and bottom borders */
        margin: 0;
        padding-inline: var(--ui-space-md);
        border: none;
        border-radius: 0;
        background-color: var(--ui-surface-1);
        color: var(--ui-ink);
        font: var(--ui-font-body-sm);
        letter-spacing: var(--ui-tracking-body);
        text-align: inherit;
        outline: 2px solid var(--ui-focus);
        outline-offset: -2px;
    }

    /* Carbon select: own chevron 16px from the end, room for it in the padding, the same in every browser */
    select.cell-editor {
        appearance: none;
        padding-inline-end: calc(var(--ui-space-md) * 2 + 16px);
        cursor: pointer;
    }

    .cell-chevron {
        position: absolute;
        inset-block-start: calc(50% - 8px);
        inset-inline-end: var(--ui-space-md);
        width: 16px;
        height: 16px;
        fill: var(--ui-ink);
        pointer-events: none;
    }

    .cell-editor[aria-invalid='true'] {
        outline-color: var(--ui-error);
    }

    .cell-error {
        position: absolute;
        z-index: 1;
        inset-block-start: 100%;
        inset-inline-start: 0;
        padding: var(--ui-space-xxs) var(--ui-space-xs);
        background-color: var(--ui-surface-1);
        box-shadow: 0 2px 6px rgb(0 0 0 / 0.3);
        color: var(--ui-error-text, var(--ui-error));
        font: var(--ui-font-caption);
        letter-spacing: var(--ui-tracking-caption);
        white-space: nowrap;
    }

    @media (forced-colors: active) {
        .edit-icon,
        .cell-chevron {
            fill: CanvasText;
        }
    }
`,W=class{constructor(e){this.frozen=null,this.frozenFor=``,this.viewWidth=0,this.live=null,this.drag=null,this.onPointerDown=e=>{let t=e.currentTarget,n=this.headerOf(t);e.button===0&&n&&(e.preventDefault(),this.freeze(),t.focus({preventScroll:!0}),t.setPointerCapture?.(e.pointerId),this.drag={key:n.key,startX:e.clientX,startWidth:this.currentWidth(t,n)},t.closest(`th`)?.toggleAttribute(`data-resizing`,!0))},this.onPointerMove=e=>{let t=e.currentTarget,n=this.headerOf(t);if(!this.drag||!n)return;let r=this.host.matches(`:dir(rtl)`)?-1:1;this.apply(t,n,this.drag.startWidth+(e.clientX-this.drag.startX)*r)},this.onPointerEnd=e=>{this.drag&&(this.drag=null,e.currentTarget.closest(`th`)?.removeAttribute(`data-resizing`),this.commit())},this.onKeyDown=e=>{let t=e.currentTarget,n=this.headerOf(t);if(!n)return;let r=k(e.key,{shift:e.shiftKey,rtl:this.host.matches(`:dir(rtl)`),current:this.currentWidth(t,n),column:n,viewWidth:this.viewWidth});r!==void 0&&(e.preventDefault(),this.freeze(),this.apply(t,n,r))},this.onKeyUp=()=>{this.drag||this.commit()},this.onInput=e=>{let t=e.currentTarget,n=this.headerOf(t);n&&!this.drag&&(this.freeze(),this.apply(t,n,Number(t.value)),this.commit())},this.onFocus=()=>{this.freeze()},this.onBlur=()=>{this.drag||this.commit()},this.host=e,e.addController(this)}hostUpdate(){this.host.visibleHeaders.map(e=>e.key).join(`
`)!==this.frozenFor&&(this.frozen=null)}isResizable(e){return e.resizable??this.host.resizable}get enabled(){return this.host.visibleHeaders.some(e=>this.isResizable(e))}widthOf(e){return(this.live?.key===e.key?this.live.width:void 0)??this.host.columnWidths[e.key]??e.width??this.frozen?.[e.key]}get fixed(){return this.enabled&&(this.frozen!==null||this.host.visibleHeaders.every(e=>this.widthOf(e)!==void 0))}get hasFiller(){return this.fixed&&!this.host.staticWidth}headerStyle(e){let t=this.widthOf(e);return t===void 0?void 0:`inline-size: ${t}px`}tableStyle(){let e=this.host.visibleHeaders.reduce((e,t)=>e+(this.widthOf(t)??0),0);return this.fixed&&this.host.staticWidth?`inline-size: ${e}px`:void 0}renderFiller(){return this.hasFiller?a`<td class="filler" aria-hidden="true"></td>`:i}renderHandle(e,t){if(!this.isResizable(e))return a``;let n=this.widthOf(e),r=this.minOf(e);return a`<input
                class="resizer"
                part="resizer"
                type="range"
                data-key=${e.key}
                min=${r}
                max=${this.maxOf(e,n)}
                step="1"
                .value=${m(String(n??r))}
                aria-label=${t.resizeColumn(e.header)}
                aria-valuetext=${n===void 0?i:t.columnWidth(n)}
                @pointerdown=${this.onPointerDown}
                @pointermove=${this.onPointerMove}
                @pointerup=${this.onPointerEnd}
                @pointercancel=${this.onPointerEnd}
                @keydown=${this.onKeyDown}
                @keyup=${this.onKeyUp}
                @input=${this.onInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
            /><span class="resize-bar" aria-hidden="true"></span>`}minOf(e){return N(e)}maxOf(e,t=0){return j(e,t,this.viewWidth)}headerOf(e){return this.host.visibleHeaders.find(t=>t.key===e.dataset.key)}get content(){return this.host.renderRoot.querySelector(`.content`)}freeze(){let e=this.content;this.viewWidth=e?.clientWidth??0;let t=this.host.renderRoot.querySelector(`tbody`);if(e?.style.setProperty(`--_resize-guide`,`${t?.getBoundingClientRect().height??0}px`),this.frozen)return;let n={};for(let e of this.host.renderRoot.querySelectorAll(`thead th[data-key]`))n[e.dataset.key??``]=Math.floor(e.getBoundingClientRect().width);this.frozen=n,this.frozenFor=this.host.visibleHeaders.map(e=>e.key).join(`
`),this.host.requestUpdate()}apply(e,t,n){let r=F(t,n,this.viewWidth);this.live={key:t.key,width:r},e.closest(`th`)?.style.setProperty(`inline-size`,`${r}px`),e.max=String(this.maxOf(t,r)),e.value=String(r);let i=e.closest(`table`),a=this.tableStyle();i&&a!==void 0&&i.setAttribute(`style`,a)}commit(){let e=this.live;if(!e)return;if(this.live=null,this.host.columnWidths[e.key]===e.width){this.host.requestUpdate();return}let t={...this.host.columnWidths,[e.key]:e.width};this.host.columnWidths=t,this.host.dispatchEvent(new CustomEvent(`ui-column-resize`,{detail:{key:e.key,width:e.width,widths:t},bubbles:!0,composed:!0}))}currentWidth(e,t){return this.widthOf(t)??Math.floor(e.closest(`th`)?.getBoundingClientRect().width??0)}},G=t`
    table[data-fixed] {
        table-layout: fixed;
    }

    /* fixed columns never grow for their content: long words wrap inside */
    table[data-fixed] th,
    table[data-fixed] td {
        overflow-wrap: anywhere;
    }

    /* fixed layout ignores the checkbox column's 40px min-inline-size */
    table[data-fixed] .select:not(.radio) {
        inline-size: 40px;
    }

    .filler,
    tbody tr td.filler {
        padding: 0;
    }

    thead td.filler {
        border: 0;
        background-color: var(--ui-layer-accent);
    }

    th[data-resizable] {
        position: relative;
    }

    @media (any-hover: hover) {
        th[data-resizable]:hover {
            background-color: var(--ui-layer-selected-hover);
        }
    }

    /* grab area centred on the edge (IBM: 16px; 24px for WCAG 2.2 target size); the native slider is invisible */
    .resizer {
        position: absolute;
        z-index: 2;
        inset-block-start: 0;
        inset-inline-end: -12px;
        box-sizing: border-box;
        inline-size: 24px;
        block-size: 100%;
        margin: 0;
        padding: 0;
        appearance: none;
        background: transparent;
        cursor: col-resize;
        touch-action: none;
    }

    .resizer::-webkit-slider-thumb {
        inline-size: 16px;
        block-size: 16px;
        border: 0;
        appearance: none;
        background: transparent;
    }

    .resizer::-moz-range-thumb {
        visibility: hidden;
    }

    .resizer:focus {
        outline: none;
    }

    /* the 4px strip and its 2px line, 3px either side of the edge (IBM .datagrid__resizer) */
    .resize-bar {
        position: absolute;
        z-index: 1;
        inset-block: 0;
        inset-inline-end: -3px;
        inline-size: 4px;
        border-inline-end: 2px solid transparent;
        pointer-events: none;
    }

    @media (any-hover: hover) {
        th[data-resizable]:hover .resize-bar {
            border-inline-end-color: var(--ui-hairline-strong);
            background-color: var(--ui-canvas-selected-hover);
        }
    }

    th[data-resizing] .resize-bar,
    th[data-resizing]:hover .resize-bar {
        border-inline-end-color: var(--ui-secondary-hover);
    }

    /* keyboard: a 2px focus line the height of the header with an 8px dot, and a 1px guide down the body */
    .resizer:focus-visible + .resize-bar {
        border-inline-end-color: transparent;
        background: none;
    }

    .resizer:focus-visible + .resize-bar::before {
        position: absolute;
        inset-block: 0;
        inset-inline-end: -1px;
        inline-size: 2px;
        background-color: var(--ui-focus);
        content: '';
    }

    .resizer:focus-visible + .resize-bar::after {
        position: absolute;
        inset-block-start: calc(50% - 4px);
        inset-inline-end: -4px;
        inline-size: 8px;
        block-size: 8px;
        border-radius: 50%;
        background-color: var(--ui-focus);
        content: '';
    }

    th[data-resizable]::after {
        position: absolute;
        z-index: 1;
        inset-block-start: 100%;
        inset-inline-end: -0.5px;
        display: none;
        inline-size: 1px;
        block-size: var(--_resize-guide, 0);
        background-color: var(--ui-ghost-active);
        pointer-events: none;
        content: '';
    }

    th[data-resizing]::after,
    th[data-resizable]:has(.resizer:focus-visible)::after {
        display: block;
    }

    @media (forced-colors: active) {
        .resizer:focus-visible + .resize-bar::before,
        .resizer:focus-visible + .resize-bar::after,
        th[data-resizable]::after {
            background-color: Highlight;
        }

        th[data-resizing] .resize-bar,
        th[data-resizable]:hover .resize-bar {
            border-inline-end-color: Highlight;
        }
    }
`,K=/^[=+\-@\t\r]/;function ce(e){let t=C(e);return typeof e!=`number`&&K.test(t)&&(t=`'${t}`),`"${t.replaceAll(`"`,`""`)}"`}function le(e,t){let n=e[t.key];return t.options?t.options.find(e=>e.value===C(n))?.label??n:n}function q(e,t,n){let r=e=>e.map(ce).join(`,`);return[r(e.map(e=>e.header)),...t.map(t=>r(e.map(e=>n?n(t,e):le(t,e))))].join(`\r
`)}function ue(e){return`${(e??``).replace(/\.csv$/i,``).replaceAll(/[\\/:*?"<>|]/g,` `).replaceAll(/\s+/g,` `).trim()||`table`}.csv`}function J(e,t){let{URL:n,Blob:r,document:i}=globalThis,a=n.createObjectURL(new r([`﻿`,e],{type:`text/csv;charset=utf-8`})),o=Object.assign(i.createElement(`a`),{href:a,download:ue(t)});o.hidden=!0,i.body.append(o),o.click(),o.remove(),I(()=>n.revokeObjectURL(a),1e3)}var Y=n`<path d="M11 8 6 13l-.7-.7L9.6 8 5.3 3.7 6 3z" />`,de=n`<path d="M16 4 6 14l1.41 1.41L15 7.83V28h2V7.83l7.59 7.58L26 14 16 4z" />`,fe=n`<path d="M27.6 20.6 24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6 6-6-1.4-1.4zM9 4l-6 6 1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10 9 4z" />`,X=t`
    :host {
        --_row: 48px;
        --_label-pad: 0px;
        --_cell-pad-start: 0px;
        --_cell-pad-end: 0px;
        --_align: middle;
    }

    :host([size='xs']) {
        --_row: 24px;
        --_label-pad: 2px;
        --_cell-pad-start: 2px;
        --_cell-pad-end: 2px;
    }

    :host([size='sm']) {
        --_row: 32px;
        --_label-pad: 7px;
        --_cell-pad-start: 7px;
        --_cell-pad-end: 6px;
    }

    :host([size='md']) {
        --_row: 40px;
        --_label-pad: 7px;
        --_cell-pad-start: 7px;
        --_cell-pad-end: 6px;
    }

    :host([size='xl']) {
        --_row: 64px;
        --_label-pad: 16px;
        --_cell-pad-start: 16px;
        --_cell-pad-end: 16px;
        --_align: top;
    }
`,Z=t`
    :host {
        display: block;
    }

    .container {
        position: relative;
        padding-block-start: 2px; /* spacing-01 */
    }

    :host([static-width]) .container {
        inline-size: fit-content;
    }

    .header {
        padding-block: var(--ui-space-md) var(--ui-space-lg);
        padding-inline: var(--ui-space-md);
        background-color: var(--ui-surface-1);
    }

    .title {
        margin: 0;
        color: var(--ui-ink);
        font: var(--ui-font-subhead); /* heading-03 */
    }

    .description {
        margin: 0;
        color: var(--ui-ink-muted);
        font: var(--ui-font-body-sm);
        line-height: 18px; /* body-compact-01 */
        letter-spacing: var(--ui-tracking-body);
    }

    @media (min-width: 672px) {
        .description {
            max-inline-size: 50ch;
        }
    }

    @media (min-width: 1056px) {
        .description {
            max-inline-size: 80ch;
        }
    }

    .content {
        display: block;
        overflow-x: auto;
    }

    table {
        inline-size: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    :host([static-width]) table {
        inline-size: auto;
    }

    thead {
        background-color: var(--ui-layer-accent);
        font: var(--ui-font-body-emphasis);
        line-height: 18px; /* heading-compact-01 */
        letter-spacing: var(--ui-tracking-body);
    }

    tbody {
        background-color: var(--ui-surface-1);
        font: var(--ui-font-body-sm);
        line-height: 18px; /* body-compact-01 */
        letter-spacing: var(--ui-tracking-body);
    }

    tr {
        block-size: var(--_row);
        border: none;
    }

    th,
    td {
        box-sizing: border-box;
        padding-inline: var(--ui-space-md);
        text-align: start;
        vertical-align: var(--_align);
    }

    th {
        padding-block: var(--_label-pad);
        background-color: var(--ui-layer-accent);
        color: var(--ui-ink);
        font-weight: 600; /* heading-compact-01, over the UA bold */
    }

    td {
        padding-block: var(--_cell-pad-start) var(--_cell-pad-end);
        border-block-start: 1px solid var(--ui-surface-1);
        /* Carbon web components: border-subtle (00 on the page, 01 / 02 in layers), the user's pick over Carbon React's border-subtle-01 */
        border-block-end: 1px solid var(--ui-hairline);
        color: var(--ui-ink-muted);
    }

    /* cells only: Carbon keeps every header label at the start (.cds--table-header-label { text-align: start }) */
    td[data-align='center'] {
        text-align: center;
    }

    td[data-align='end'] {
        text-align: end;
    }

    :host([zebra]) tbody tr:not([data-zebra]) td {
        border-block-end-color: var(--ui-surface-1);
    }

    /*
     * zebra: a softer stripe than Carbon's layer-accent (the header's colour) — layer-hover, deeper (layer-accent) when
     * hovered; the user's pick (Carbon: layer-accent stripes, layer-hover on hover)
     */
    :host([zebra]) tbody tr[data-zebra] {
        background-color: var(--ui-ghost-hover);
    }

    :host([zebra]) tbody tr[data-zebra] td {
        border-block-color: var(--ui-ghost-hover);
    }
`,pe=a`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4ZM26 14l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10 10-10z" /></svg>`,me=a`<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M24 4h2v24h-2zM18 6v20h-4V6h4m0-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 4h2v24H6z" /></svg>`,Q=class extends f{constructor(...e){super(...e),this.headers=[],this.rows=[],this.size=`lg`,this.zebra=!1,this.staticWidth=!1,this.sortable=!1,this.sortKey=``,this.sortDirection=`none`,this.manualSorting=!1,this.heading=``,this.description=``,this.label=``,this.selectable=!1,this.radio=!1,this.selectedIds=[],this.searchable=!1,this.searchPersistent=!1,this.filterText=``,this.manualFiltering=!1,this.searchLabel=``,this.searchPlaceholder=``,this.searchExpanded=!1,this.announcement=``,this.expandedIds=[],this.expandAll=!1,this.stickyHeader=!1,this.resizable=!1,this.columnWidths={},this.loading=!1,this.loadingRows=0,this.pageSize=0,this.page=1,this.pageSizes=`10,25,50`,this.columnSettings=!1,this.columnsOpen=!1,this.csvExport=!1,this.csvFileName=``,this.selectAllPending=!1,this.ids=d(`ui-data-table`),this.localize=new ee(this),this.grid=new H(this),this.resize=new W(this),this.slots=new o(this),this.scrollable=!1,this.onExportClick=()=>{let e=this.csvRows(`shown`),t={csv:q(this.visibleHeaders,e),rows:e,fileName:this.defaultCsvFileName};this.dispatchEvent(new CustomEvent(`ui-csv-export`,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))&&J(t.csv,t.fileName)},this.onSelectAllPages=()=>{this.selectAllPending=!0,this.totalCount==null?this.setSelection(b(this.selectedIds,this.filteredRows)):this.dispatchEvent(new CustomEvent(`ui-select-all`,{detail:{totalCount:this.totalCount},bubbles:!0,composed:!0}))},this.onPageChange=e=>{e.stopPropagation(),this.page=e.detail.page,this.pageSize=e.detail.pageSize,this.dispatchEvent(new CustomEvent(`ui-page-change`,{detail:{page:this.page,pageSize:this.pageSize},bubbles:!0,composed:!0}))},this.onSelectAllChange=e=>{e.stopPropagation(),this.toggleAll()},this.onRadioKeydown=e=>{let t=[...this.shadowRoot?.querySelectorAll(`td.select ui-radio`)??[]].filter(e=>!e.disabled),n=e.currentTarget,r=t.indexOf(n),i;if(e.key===`ArrowDown`||e.key===`ArrowRight`?i=t[(r+1)%t.length]:e.key===`ArrowUp`||e.key===`ArrowLeft`?i=t.at(r-1):e.key===` `&&(i=n),!i)return;e.preventDefault();let a=this.rows.find(e=>e.id===i.dataset.rowId);a&&this.toggleRow(a,!0),i.focus()},this.onSearchInput=e=>{e.stopPropagation();let t=e.currentTarget.value;t!==this.filterText&&(this.filterText=t,this.dispatchEvent(new CustomEvent(`ui-filter`,{detail:{value:t},bubbles:!0,composed:!0})),clearTimeout(this.announceTimer),!this.manualFiltering&&(this.announceTimer=setTimeout(()=>{this.announcement=this.localize.t.dataTable.rowsShown(this.filteredRows.length,this.rows.length)},500)))},this.onSearchFocusIn=()=>{this.searchExpanded=!0},this.onSearchFocusOut=e=>{e.relatedTarget!==e.currentTarget&&(this.searchExpanded=!1)},this.onColumnCheck=e=>{e.stopPropagation();let t=e.target,n=t.dataset.key??``,r=_(this.headers,this.hiddenKeys,n,t.checked);x(r,this.hiddenKeys)||this.setHiddenColumns(r,n)},this.resetColumns=()=>{this.setHiddenColumns(S(this.headers),``)}}focus(e){[...this.shadowRoot?.querySelectorAll(`input:not(.resizer), button, [tabindex="0"], ui-checkbox, ui-radio, ui-search`)??[]].find(e=>!e.closest(`[inert]`)&&!e.disabled)?.focus(e)}static{this.styles=[r,X,Z,t`
            tbody tr,
            tbody td {
                transition: background-color var(--ui-duration-fast) var(--ui-easing-entrance); /* Carbon fast-01, entrance */
            }

            @media (any-hover: hover) {
                tbody tr:hover,
                :host([zebra]) tbody tr[data-zebra]:hover {
                    background-color: var(--ui-ghost-hover);
                }

                tbody tr:hover td,
                :host([zebra]) tbody tr:hover td {
                    border-block-color: var(--ui-ghost-hover);
                    color: var(--ui-ink);
                }

                /* a striped row is already layer-hover: hovered, it deepens to layer-accent */
                :host([zebra]) tbody tr[data-zebra]:hover {
                    background-color: var(--ui-layer-accent);
                }

                :host([zebra]) tbody tr[data-zebra]:hover td {
                    border-block-color: var(--ui-layer-accent);
                }
            }

            /* selected rows (Carbon --data-table--selected) */
            tbody tr[data-selected],
            :host([zebra]) tbody tr[data-selected][data-zebra] {
                background-color: var(--ui-surface-2);
            }

            tbody tr[data-selected] td,
            :host([zebra]) tbody tr[data-selected] td {
                border-block-start-color: var(--ui-surface-2);
                border-block-end-color: var(--ui-ghost-active);
                color: var(--ui-ink);
            }

            tbody tr[data-selected]:first-child td,
            :host([zebra]) tbody tr[data-selected]:first-child td {
                border-block-start-color: var(--ui-border-subtle-selected);
            }

            tbody tr[data-selected]:last-child td,
            :host([zebra]) tbody tr[data-selected]:last-child td {
                border-block-color: var(--ui-surface-2);
            }

            @media (any-hover: hover) {
                tbody tr[data-selected]:hover,
                :host([zebra]) tbody tr[data-selected][data-zebra]:hover {
                    background-color: var(--ui-layer-selected-hover); /* data-table-column-hover */
                }

                tbody tr[data-selected]:hover td,
                :host([zebra]) tbody tr[data-selected]:hover td {
                    border-block-color: var(--ui-layer-selected-hover);
                }
            }

            /* selection column: checkbox 32px + 16 / 4 padding (min 40), radio 48px */
            thead td.select {
                border: 0;
                background-color: var(--ui-layer-accent);
            }

            th.select,
            td.select {
                inline-size: 32px;
                min-inline-size: 40px;
                padding-block: var(--_select-pad, 0);
                padding-inline: var(--ui-space-md) var(--ui-space-xxs);
            }

            th.select.radio,
            td.select.radio {
                inline-size: 48px;
            }

            :host([size='sm']),
            :host([size='md']) {
                --_select-pad: 3px;
            }

            :host([size='xl']) .select {
                padding-block: 13px 0;
            }

            :host([size='xl']) .select.radio {
                padding-block-start: var(--ui-space-md);
            }

            /* Carbon draws the table checkbox 3px in and 4px down a 24px label */
            .select ui-checkbox {
                display: block;
                block-size: 24px;
                margin-inline-start: 3px;
            }

            .select ui-checkbox::part(base) {
                padding-block: 3px;
            }

            /* Carbon radio cell: the 18px circle centred, margins 1 / -2 / 2 / 2 */
            .select ui-radio {
                justify-content: center;
                gap: 0;
                min-height: 0;
                padding-block: 0;
            }

            .select ui-radio::part(circle) {
                margin: 1px -2px 2px 2px;
            }

            /* expand column (Carbon .table-expand): 40px, padding 8 / 0 / 8 / 8, a 32px chevron button */
            th.expand,
            td.expand {
                inline-size: 40px;
                padding: var(--_expand-pad, 8px 0 8px 8px);
            }

            :host([size='xs']),
            :host([size='sm']) {
                --_expand-pad: 0 0 0 8px;
            }

            :host([size='md']) {
                --_expand-pad: 4px 0 4px 8px;
            }

            :host([size='xl']) {
                --_expand-pad: 10px 0 22px 8px;
            }

            thead td.expand {
                border: 0;
                background-color: var(--ui-layer-accent);
            }

            .expand-button {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                inline-size: 32px;
                block-size: var(--_expand-button, 32px);
                margin: 0;
                padding: 0 var(--ui-space-xs);
                border: 0;
                background: transparent;
                cursor: pointer;
                vertical-align: middle;
            }

            :host([size='xs']) {
                --_expand-button: 24px;
            }

            .expand-button:focus-visible {
                outline: none;
                box-shadow: inset 0 0 0 2px var(--ui-focus);
            }

            .expand-button svg {
                inline-size: 16px;
                block-size: 16px;
                fill: var(--ui-icon-primary);
                transform: rotate(90deg);
                transition: transform 150ms var(--ui-easing); /* Carbon $duration-moderate-01 */
            }

            .expand-button[aria-expanded='true'] svg {
                transform: rotate(270deg);
            }

            /* with selection: the checkbox column tightens to 6 / 6 and the next cell starts at 8 (Carbon) */
            .expand + .select {
                padding-inline: 6px;
            }

            .expand + .select + th,
            .expand + .select + td {
                padding-inline-start: var(--ui-space-xs);
            }

            /* an open parent row joins its child row: subtle rule below, none under the chevron */
            tbody tr[data-expanded] td,
            :host([zebra]) tbody tr[data-expanded] td {
                border-block-end-color: var(--ui-hairline);
            }

            tbody tr[data-expanded] td.expand,
            :host([zebra]) tbody tr[data-expanded] td.expand {
                border-block-end-color: transparent;
            }

            tbody tr.child-row td,
            :host([zebra]) tbody tr.child-row td {
                padding: 0 var(--ui-space-md) 0 56px;
                border-block-start: 0;
                border-block-end: 1px solid var(--ui-hairline);
                vertical-align: top;
            }

            :host([selectable]) tbody tr.child-row td,
            :host([radio]) tbody tr.child-row td {
                padding-inline-start: 88px;
            }

            .child-inner {
                padding-block: var(--ui-space-md) var(--ui-space-lg);
            }

            @media (any-hover: hover) {
                tbody tr[data-parent-row]:hover + tr.child-row,
                tbody tr[data-parent-row]:has(+ tr.child-row:hover) {
                    background-color: var(--ui-ghost-hover);
                }

                :host([zebra]) tbody tr[data-parent-row][data-zebra]:hover + tr.child-row,
                :host([zebra]) tbody tr[data-parent-row][data-zebra]:has(+ tr.child-row:hover) {
                    background-color: var(--ui-layer-accent);
                }

                tbody tr[data-parent-row]:has(+ tr.child-row:hover) td {
                    color: var(--ui-ink);
                }

                tbody tr.child-row:hover td,
                :host([zebra]) tbody tr.child-row:hover td,
                tbody tr[data-expanded]:hover td,
                :host([zebra]) tbody tr[data-expanded]:hover td {
                    border-block-end-color: var(--ui-hairline);
                }

                tbody tr[data-expanded]:hover td.expand {
                    border-block-end-color: var(--ui-ghost-hover);
                }
            }

            /* sticky header: the body scrolls under the header inside a box (Carbon 300px) */
            /* the scroll box takes focus so keyboard users can scroll it (Carbon .data-table-content:focus) */
            :host([sticky-header]) .content {
                max-block-size: var(--ui-data-table-max-height, 300px);
                overflow-y: auto;
                scroll-padding-block-start: var(--_row); /* focused rows don't hide under the sticky header (WCAG 2.4.11) */
            }

            .content:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            :host([sticky-header]) thead th,
            :host([sticky-header]) thead td {
                --_head-edge: inset 0 -1px 0 var(--ui-ghost-active);

                position: sticky;
                inset-block-start: 0;
                z-index: 2; /* over pinned body cells scrolling under it */
                box-shadow: var(--_head-edge); /* collapsed borders don't travel with sticky cells */
            }

            /*
             * pinned columns (IBM Products Datagrid sticky columns; not in Carbon): the table says how many leading
             * cells stick (expand, select, the first column) and whether the last column does; offsets are measured
             */
            :host {
                --_dir: 1;
            }

            :host(:dir(rtl)) {
                --_dir: -1;
            }

            .content {
                isolation: isolate; /* the pinned cells' layers stay inside the table */
            }

            :where(table[data-pin-start] > tbody > tr, table[data-pin-end] > tbody > tr) {
                background-color: var(--ui-surface-1); /* what a pinned cell shows when the row has no colour of its own */
            }

            @media (min-width: 672px) {
                table[data-pin-start='1'] > * > tr > :nth-child(1):not([colspan]),
                table[data-pin-start='2'] > * > tr > :nth-child(-n + 2):not([colspan]),
                table[data-pin-start='3'] > * > tr > :nth-child(-n + 3):not([colspan]) {
                    position: sticky;
                    inset-inline-start: 0;
                    z-index: 1;
                }

                table[data-pin-start='2'] > * > tr > :nth-child(2):not([colspan]),
                table[data-pin-start='3'] > * > tr > :nth-child(2):not([colspan]) {
                    inset-inline-start: var(--_pin-1, 0px);
                }

                table[data-pin-start='3'] > * > tr > :nth-child(3):not([colspan]) {
                    inset-inline-start: var(--_pin-2, 0px);
                }

                /* a border-subtle rule on the inner edge (shadows travel with sticky cells; collapsed borders don't) */
                table[data-pin-start='1'] > * > tr > :nth-child(1):not([colspan]),
                table[data-pin-start='2'] > * > tr > :nth-child(2):not([colspan]),
                table[data-pin-start='3'] > * > tr > :nth-child(3):not([colspan]) {
                    box-shadow:
                        inset calc(-1px * var(--_dir)) 0 0 var(--ui-hairline),
                        var(--_head-edge, 0 0 transparent);
                }

                table[data-pin-start='1'] > tbody > tr > :nth-child(1):not([colspan]),
                table[data-pin-start='2'] > tbody > tr > :nth-child(-n + 2):not([colspan]),
                table[data-pin-start='3'] > tbody > tr > :nth-child(-n + 3):not([colspan]) {
                    background-color: inherit; /* the row's colour: hover, zebra, selected */
                }

                table[data-pin-start='1'] > thead > tr > :nth-child(1),
                table[data-pin-start='2'] > thead > tr > :nth-child(-n + 2),
                table[data-pin-start='3'] > thead > tr > :nth-child(-n + 3) {
                    z-index: 3; /* over the header cells scrolling under them */
                }
            }

            table[data-pin-end='1'] > * > tr > :last-child:not([colspan]),
            table[data-pin-end='2'] > * > tr > :nth-last-child(2):not([colspan]) {
                position: sticky;
                inset-inline-end: 0;
                z-index: 1;
                box-shadow:
                    inset calc(1px * var(--_dir)) 0 0 var(--ui-hairline),
                    var(--_head-edge, 0 0 transparent);
            }

            table[data-pin-end='1'] > tbody > tr > :last-child:not([colspan]),
            table[data-pin-end='2'] > tbody > tr > :nth-last-child(2):not([colspan]) {
                background-color: inherit;
            }

            table[data-pin-end='1'] > thead > tr > :last-child,
            table[data-pin-end='2'] > thead > tr > :nth-last-child(2) {
                z-index: 3;
            }

            /* toolbar + batch actions (Carbon TableToolbar / TableBatchActions) */
            .toolbar {
                position: relative;
                z-index: 1;
                display: flex;
                inline-size: 100%;
                block-size: var(--_toolbar, 48px);
                min-block-size: var(--_toolbar, 48px);
                background-color: var(--ui-surface-1);
            }

            :host([size='xs']) {
                --_toolbar: 24px;
            }

            :host([size='sm']) {
                --_toolbar: 32px;
            }

            .toolbar-content {
                display: flex;
                justify-content: flex-end;
                inline-size: 100%;
                block-size: var(--_toolbar, 48px);
                transform: translate3d(0, 0, 0);
                transition:
                    transform var(--ui-duration-moderate) var(--ui-easing),
                    clip-path var(--ui-duration-moderate) var(--ui-easing);
            }

            .toolbar-content.under-batch {
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                transform: translate3d(0, var(--_toolbar, 48px), 0);
            }

            ::slotted([slot='toolbar']) {
                flex-shrink: 0;
            }

            /* Carbon TableToolbarSearch: expandable = a 48px magnifier until focused, then full width */
            .search {
                flex: 0 1 auto;
                min-inline-size: 0;
            }

            .search::part(input) {
                background-color: var(--ui-surface-1);
                transition:
                    outline-color var(--ui-duration-moderate) var(--ui-easing),
                    background-color var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--search-input, fast-02 */
            }

            .search.persistent,
            .search.active {
                inline-size: 100%;
            }

            .search.persistent::part(input) {
                border-block-end: none;
            }

            .search.expandable {
                inline-size: var(--_toolbar, 48px);
                /* Carbon .cds--toolbar-search-container-expandable: $transition-expansion (300ms) with $standard-easing (no tokens), fast-02 entrance */
                transition:
                    inline-size 300ms cubic-bezier(0.5, 0, 0.1, 1),
                    background-color var(--ui-duration-moderate) var(--ui-easing-entrance);
            }

            .search.expandable.active {
                inline-size: 100%;
            }

            .search.expandable:not(.active)::part(input) {
                padding: 0;
                opacity: 0;
                cursor: pointer;
            }

            /* Carbon: hovering the collapsed search tints its box; the input stays invisible */
            @media (any-hover: hover) {
                .search.expandable:not(.active):hover {
                    background-color: var(--ui-ghost-hover); /* field-hover */
                }

                .search.persistent::part(input):hover {
                    background-color: var(--ui-ghost-hover);
                }
            }

            .search[data-filled]::part(input) {
                background-color: var(--ui-ghost-hover);
            }

            /* Carbon toolbar action (TableToolbarMenu): a square of the toolbar's height, field-hover, layer-02 while open */
            .toolbar-action {
                display: grid;
                place-items: center;
                inline-size: var(--_toolbar, 48px);
                block-size: var(--_toolbar, 48px);
                padding: 0;
                border: none;
                background-color: transparent;
                color: var(--ui-icon-primary);
                cursor: pointer;
                transition: background-color var(--ui-duration-moderate) var(--ui-easing-entrance); /* Carbon .cds--toolbar-action, fast-02 */
            }

            .toolbar-action svg {
                inline-size: 16px;
                block-size: 16px;
                fill: currentColor;
            }

            @media (any-hover: hover) {
                .toolbar-action:hover {
                    background-color: var(--ui-ghost-hover); /* field-hover */
                }
            }

            .toolbar-action[aria-expanded='true'] {
                background-color: var(--ui-layer-2);
            }

            .toolbar-action:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            /* as Carbon's toolbar menu: flush under the button, layer-02, the menu shadow */
            .columns::part(content) {
                background-color: var(--ui-layer-2);
                box-shadow: 0 2px 6px rgb(0 0 0 / 0.3);
            }

            .columns-panel {
                box-sizing: border-box;
                min-inline-size: 160px;
                max-block-size: 320px;
                padding: var(--ui-space-md) var(--ui-space-md) var(--ui-space-xs);
                overflow-y: auto;
            }

            /* the label lines up with the boxes above */
            .columns-reset {
                margin-block-start: var(--ui-space-xs);
                margin-inline-start: calc(-1 * var(--ui-space-md));
            }

            .batch-actions {
                position: absolute;
                inset-block-end: 0;
                inset-inline: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                block-size: var(--_toolbar, 48px);
                background-color: var(--ui-background-brand);
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                opacity: 0;
                pointer-events: none;
                transform: translate3d(0, var(--_toolbar, 48px), 0);
                transition:
                    transform var(--ui-duration-moderate) var(--ui-easing),
                    clip-path var(--ui-duration-moderate) var(--ui-easing),
                    opacity var(--ui-duration-moderate) var(--ui-easing);
            }

            .batch-actions.active {
                z-index: 1;
                clip-path: polygon(0 0, 300% 0, 300% 300%, 0 300%);
                opacity: 1;
                pointer-events: all;
                transform: translate3d(0, 0, 0);
            }

            .batch-summary {
                display: flex;
                align-items: center;
                min-block-size: var(--_toolbar, 48px);
                margin: 0;
                padding: 0 var(--ui-space-md);
                color: var(--ui-on-primary);
                font: var(--ui-font-body-sm);
                line-height: 18px; /* body-compact-01 */
                letter-spacing: var(--ui-tracking-body);
                white-space: nowrap;
            }

            .action-list {
                display: flex;
                align-items: center;
                block-size: 100%;
            }

            .summary {
                display: flex;
                align-items: center;
                min-inline-size: 0;
            }

            /* Carbon .batch-summary__divider */
            .summary-divider {
                color: var(--ui-on-primary);
                font: var(--ui-font-body-sm);
            }

            .select-all-pages {
                block-size: var(--_toolbar, 48px);
                margin: 0;
                padding: 0 var(--ui-space-md);
                border: 0;
                background-color: var(--ui-primary);
                color: var(--ui-on-primary);
                font: var(--ui-font-button);
                letter-spacing: var(--ui-tracking-body);
                white-space: nowrap;
                cursor: pointer;
            }

            .select-all-pages:hover {
                background-color: var(--ui-blue-hover);
            }

            .select-all-pages:active {
                background-color: var(--ui-blue-80);
            }

            .select-all-pages:focus-visible {
                outline: 2px solid var(--ui-surface-1);
                outline-offset: -2px;
            }

            /* skeleton rows while loading: Carbon DataTableSkeleton bars (4rem × 1rem) */
            .loading-bar {
                display: block;
                inline-size: 64px;
                max-inline-size: 100%;
                block-size: 16px;
            }

            .empty-row td,
            :host([zebra]) .empty-row td {
                padding-block: var(--ui-space-md);
                border-block-end-color: var(--ui-hairline);
                color: var(--ui-ink-muted);
                text-align: start;
            }

            ui-pagination {
                display: block;
            }

            ::slotted([slot='batch-actions']) {
                flex-shrink: 0;
                --ui-button-padding-start: 16px; /* Carbon .action-list .btn */
                --ui-button-padding-end: 16px;
            }

            .cancel {
                position: relative;
                block-size: var(--_toolbar, 48px);
                margin: 0;
                padding: 0 var(--ui-space-md);
                border: 0;
                background-color: var(--ui-primary);
                color: var(--ui-on-primary);
                font: var(--ui-font-button);
                letter-spacing: var(--ui-tracking-body);
                white-space: nowrap;
                cursor: pointer;
            }

            /* Carbon .cds--btn: the fill and the ring change in fast-01 with the entrance easing */
            .select-all-pages,
            .cancel {
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                    outline var(--ui-duration-fast) var(--ui-easing-entrance);
            }

            /* 1px divider before Cancel, hidden while it is hovered */
            .cancel::before {
                content: '';
                position: absolute;
                inset-block-start: calc((var(--_toolbar, 48px) - 16px) / 2);
                inset-inline-start: 0;
                inline-size: 1px;
                block-size: 16px;
                background-color: var(--ui-on-primary);
                transition: opacity var(--ui-duration-moderate) var(--ui-easing);
            }

            .cancel:hover {
                background-color: var(--ui-blue-hover);
            }

            .cancel:hover::before {
                opacity: 0;
                transition: opacity 250ms cubic-bezier(0.5, 0, 0.1, 1); /* Carbon $transition-base, $standard-easing */
            }

            .cancel:active {
                background-color: var(--ui-blue-80);
            }

            .cancel:focus-visible {
                outline: 2px solid var(--ui-surface-1);
                outline-offset: -2px;
            }

            th[aria-sort] {
                padding: 0;
            }

            .sort {
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                inline-size: 100%;
                min-block-size: var(--_row);
                margin: 0;
                padding: 0;
                padding-inline-start: var(--ui-space-md);
                border: 0;
                background-color: var(--ui-layer-accent);
                color: var(--ui-ink);
                font: inherit;
                letter-spacing: inherit;
                text-align: start;
                cursor: pointer;
                transition:
                    background-color var(--ui-duration-fast) var(--ui-easing-entrance),
                    outline var(--ui-duration-fast) var(--ui-easing-entrance); /* Carbon .cds--table-sort, fast-01 entrance */
            }

            :host([size='xl']) .sort {
                align-items: flex-start;
            }

            .sort-label {
                padding-block: var(--_label-pad);
            }

            .sort:hover,
            .sort[data-active] {
                background-color: var(--ui-layer-selected-hover); /* data-table-column-hover */
            }

            .sort:focus-visible {
                outline: 2px solid var(--ui-focus);
                outline-offset: -2px;
            }

            .sort svg {
                flex-shrink: 0;
                inline-size: 20px;
                min-inline-size: 16px;
                block-size: 20px;
                margin-inline: var(--ui-space-xs);
                fill: var(--ui-icon-primary);
            }

            :host([size='xl']) .sort svg {
                margin-block-start: 13px;
            }

            .icon-unsorted {
                opacity: 0;
            }

            .sort:hover .icon-unsorted,
            .sort:focus-visible .icon-unsorted {
                opacity: 1;
            }

            .icon-sorted {
                transition: transform 250ms cubic-bezier(0.5, 0, 0.1, 1); /* Carbon $transition-base, $standard-easing */
            }

            .sort[data-direction='descending'] .icon-sorted {
                transform: rotate(180deg);
            }

            @media (prefers-reduced-motion: reduce) {
                .icon-sorted,
                tbody tr,
                tbody td,
                .batch-actions,
                .cancel::before,
                .cancel:hover::before,
                .toolbar-content,
                .search.expandable,
                .expand-button svg {
                    transition: none;
                }
            }

            @media (forced-colors: active) {
                .sort svg {
                    fill: ButtonText;
                }

                tbody tr[data-selected] td {
                    border-block-color: Highlight;
                }

                .batch-actions {
                    outline: 1px solid CanvasText;
                    outline-offset: -1px;
                }

                .sort[data-active] {
                    outline: 1px solid Highlight;
                    outline-offset: -1px;
                }
            }
        `,U,G,p]}get hiddenKeys(){return this.hiddenColumns??S(this.headers)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.observeSize()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect(),clearTimeout(this.announceTimer)}firstUpdated(){this.observeSize()}updated(){this.measurePins();let e=this.shadowRoot?.querySelector(`.columns-tip`),t=this.shadowRoot?.querySelector(`.columns-button`)??null;e&&e.anchor!==t&&(e.anchor=t),this.selectAllPending&&!this.shadowRoot?.querySelector(`.select-all-pages`)&&(this.selectAllPending=!1,this.shadowRoot?.querySelector(`.cancel`)?.focus()),this.toggleAttribute(`data-has-selection`,this.selectedCount>0)}observeSize(){let e=this.shadowRoot?.querySelector(`.content`),t=e?.querySelector(`table`);e&&t&&typeof ResizeObserver<`u`&&(this.resizeObserver??=new ResizeObserver(()=>{this.scrollable=e.scrollWidth>e.clientWidth+1,this.measurePins()}),this.resizeObserver.observe(e),this.resizeObserver.observe(t))}willUpdate(e){if(e.has(`filterText`)&&e.get(`filterText`)!==void 0&&this.pageSize>0&&(this.page=1),e.has(`loading`)&&e.get(`loading`)!==void 0&&(this.announcement=this.loading?this.localize.t.dataTable.loading:``),e.has(`rows`)&&this.selectedIds.length){let e=v(this.selectedIds,this.rows);e.length!==this.selectedIds.length&&(this.selectedIds=e)}if(e.has(`rows`)&&this.expandedIds.length){let e=v(this.expandedIds,this.rows);e.length!==this.expandedIds.length&&(this.expandedIds=e)}}get expandable(){return this.renderExpandedRow!==void 0}setExpanded(e,t){this.expandedIds=e,this.dispatchEvent(new CustomEvent(`ui-expand`,{detail:{...t,expandedIds:e},bubbles:!0,composed:!0}))}toggleRowExpanded(e){let t=T(this.expandedIds,e.id);this.setExpanded(t.ids,{expanded:t.expanded,id:e.id})}toggleAllExpanded(){let e=w(this.expandedIds,this.visibleRows.map(e=>e.id));this.setExpanded(e.ids,{expanded:e.expanded})}get hasSelection(){return this.selectable||this.radio}get selectedRows(){let e=new Set(this.selectedIds);return this.rows.filter(t=>e.has(t.id))}setSelection(e){this.selectedIds=e,this.dispatchEvent(new CustomEvent(`ui-select`,{detail:{selected:e,rows:this.selectedRows},bubbles:!0,composed:!0}))}toggleRow(e,t){let n=h(this.selectedIds,e,t,this.radio);n&&this.setSelection(n)}toggleAll(){let e=this.paginated?this.shownRows:this.rows,t=this.paginated?this.shownRows:this.filteredRows;this.setSelection(E(this.selectedIds,e,t))}cancelSelection(){this.setSelection([]),this.shadowRoot?.querySelector(`thead .select ui-checkbox`)?.focus()}get visibleHeaders(){return ne(this.headers,this.hiddenKeys)}csvRows(e){return e===`all`?this.rows:e===`selected`?this.selectedRows:this.visibleRows}toCsv({scope:e=`shown`}={}){return q(this.visibleHeaders,this.csvRows(e))}downloadCsv({scope:e=`shown`,fileName:t}={}){J(this.toCsv({scope:e}),t??this.defaultCsvFileName)}get defaultCsvFileName(){return this.csvFileName||this.heading||this.label}renderExportButton(){if(!this.csvExport)return i;let e=this.localize.t.dataTable.exportCsv;return a`<ui-tooltip as-label text=${e} placement="top">
            <button class="toolbar-action" part="export-button" type="button" aria-label=${e} @click=${this.onExportClick}>${pe}</button>
        </ui-tooltip>`}get filteredRows(){return this.manualFiltering?this.rows:oe(this.rows,this.visibleHeaders,this.filterText,this.filterRows)}get visibleRows(){return this.manualSorting?this.filteredRows:g(this.filteredRows,this.sortKey,this.sortDirection,{locale:this.localize.lang(),sortRow:this.sortRow})}get paginated(){return this.pageSize>0}get pageCount(){return ae(this.filteredRows.length,this.pageSize)}get shownRows(){return ie(this.visibleRows,this.page,this.pageSize)}get selectedCount(){return this.totalSelected??this.selectedRows.length}get selectAllTotal(){return this.totalCount==null?this.paginated?this.filteredRows.filter(e=>!e.disabled).length:void 0:this.totalCount}isSortable(e){return e.sortable??this.sortable}sortBy(e,t){this.sortKey=t===`none`?``:e,this.sortDirection=t,this.dispatchEvent(new CustomEvent(`ui-sort`,{detail:{key:e,direction:t},bubbles:!0,composed:!0}))}onSortClick(e){let t=e.key===this.sortKey?this.sortDirection:`none`,n=y(t);this.sortBy(e.key,n);let r=this.localize.t.dataTable;this.announcement=n===`none`?r.unsorted:r.sorted(e.header,n)}sortDescription(e,t){let n=this.localize.t.dataTable,r=y(t),i=n.unsort;return r===`ascending`?i=n.sortAscending:r===`descending`&&(i=n.sortDescending),i.replaceAll(`{header}`,e.header)}renderHeaderCell(e,t){let n=this.resize.isResizable(e),r=this.resize.headerStyle(e),i=this.resize.renderHandle(e,this.localize.t.dataTable);if(!this.isSortable(e))return a`<th scope="col" data-key=${e.key} ?data-resizable=${n} style=${l(r)}>${e.header}${i}</th>`;let o=e.key===this.sortKey?this.sortDirection:`none`,s=o!==`none`,c=`${this.ids}-sort-${t}`;return a`<th scope="col" aria-sort=${o} data-key=${e.key} ?data-resizable=${n} style=${l(r)}>
            <button class="sort" part="sort-button" type="button" ?data-active=${s} data-direction=${o} aria-describedby=${c} @click=${()=>this.onSortClick(e)}>
                <span class="sort-label">${e.header}</span>
                ${s?a`<svg class="icon-sorted" viewBox="0 0 32 32" aria-hidden="true">${de}</svg>`:a`<svg class="icon-unsorted" viewBox="0 0 32 32" aria-hidden="true">${fe}</svg>`}
            </button>
            <span class="sr-only" id=${c}>${this.sortDescription(e,o)}</span>${i}
        </th>`}renderCellContent(e,t){return this.renderCell?this.renderCell(e,t):C(e[t.key])}renderExpandHeaderCell(e,t){if(!this.expandAll)return a`<td class="expand"></td>`;let n=this.localize.t.dataTable,r=e.length>0&&e.every(e=>t.has(e.id)),i=e.filter(e=>t.has(e.id)).map(e=>`${this.ids}-expanded-${e.id}`).join(` `);return a`<td class="expand">
            <button class="expand-button" part="expand-button" type="button" aria-label=${r?n.collapseAll:n.expandAll} aria-expanded=${r?`true`:`false`} aria-controls=${l(i||void 0)} @click=${this.toggleAllExpanded}>
                <svg viewBox="0 0 16 16" aria-hidden="true">${Y}</svg>
            </button>
        </td>`}renderSelectAllCell(){let e=this.localize.t.dataTable;if(this.radio)return a`<th class="select radio" scope="col"><span class="sr-only">${e.selectRow}</span></th>`;let t=this.paginated?this.shownRows:this.rows,n=new Set(this.selectedIds),r=t.length,i=t.filter(e=>n.has(e.id)).length,o=r>0&&i===r,s=i>0&&i!==r,c=o||s?e.unselectAll:e.selectAll;return a`<td class="select">
            <ui-checkbox hide-label .checked=${m(o)} .indeterminate=${m(s)} @change=${this.onSelectAllChange}>${c}</ui-checkbox>
        </td>`}rowName(e){let t=this.headers[0]?.key,n=t===void 0?``:e[t];return typeof n==`string`||typeof n==`number`?`, ${n}`:``}renderSelectCell(e,t,n){let r=this.localize.t.dataTable,i=(t?r.unselectRow:r.selectRow)+this.rowName(e);if(this.radio){let r=n&&!this.grid.enabled?0:-1;return a`<td class="select radio" tabindex=${l(this.grid.cellTabIndex)} aria-readonly=${l(this.grid.readOnly)}>
                <ui-radio aria-label=${i} .checked=${t} .disabled=${!!e.disabled} tabindex=${r} data-row-id=${e.id} @click=${()=>this.toggleRow(e,!0)} @keydown=${this.onRadioKeydown}></ui-radio>
            </td>`}return a`<td class="select" tabindex=${l(this.grid.cellTabIndex)} aria-readonly=${l(this.grid.readOnly)}>
            <ui-checkbox hide-label .checked=${m(t)} .disabled=${!!e.disabled} @change=${t=>this.onRowCheckboxChange(t,e)}>${i}</ui-checkbox>
        </td>`}onRowCheckboxChange(e,t){e.stopPropagation(),this.toggleRow(t,e.target.checked)}renderExpandCell(e,t){let n=this.localize.t.dataTable;return a`<td class="expand" tabindex=${l(this.grid.cellTabIndex)} aria-readonly=${l(this.grid.readOnly)}>
            <button class="expand-button" part="expand-button" type="button" aria-label=${(t?n.collapseRow:n.expandRow)+this.rowName(e)} aria-expanded=${t?`true`:`false`} aria-controls=${l(t?`${this.ids}-expanded-${e.id}`:void 0)} @click=${()=>this.toggleRowExpanded(e)}>
                <svg viewBox="0 0 16 16" aria-hidden="true">${Y}</svg>
            </button>
        </td>`}renderExpandedRowContent(e,t){let n=this.visibleHeaders.length+ +!!this.hasSelection+1+ +!!this.resize.hasFiller;return a`<tr class="child-row" id="${this.ids}-expanded-${e.id}" data-child-row ?data-zebra=${t.zebra} ?data-selected=${t.selected}>
            <td colspan=${n} part="expanded-row"><div class="child-inner">${this.renderExpandedRow?.(e)}</div></td>
        </tr>`}renderRow(e,t,n){let r=a`<tr data-row-id=${e.id} ?data-selected=${t.selected} ?data-zebra=${t.zebra} ?data-parent-row=${this.expandable} ?data-expanded=${t.expanded}>
            ${this.expandable?this.renderExpandCell(e,t.expanded):i}
            ${this.hasSelection?this.renderSelectCell(e,t.selected,t.tabStop):i}
            ${this.visibleHeaders.map(t=>this.grid.renderCell(e,t,t.align,()=>this.renderCellContent(e,t),`${this.ids}-edit-hint`,this.rowName(e)))}${n}
        </tr>`;return t.expanded?a`${r}${this.renderExpandedRowContent(e,t)}`:r}renderBatchActions(e){if(!this.slots.has(`batch-actions`))return i;let t=this.localize.t.dataTable;return a`<div class="batch-actions ${e?`active`:``}" part="batch-actions" aria-hidden=${e?`false`:`true`} ?inert=${!e}>
            <div class="summary">
                <p class="batch-summary" part="batch-summary" role="status">${t.selectedCount(this.selectedCount)}</p>
                ${this.renderSelectAllPages(e)}
            </div>
            <div class="action-list">
                <slot name="batch-actions"></slot>
                <button class="cancel" part="cancel-button" type="button" @click=${this.cancelSelection}>${t.cancel}</button>
            </div>
        </div>`}renderSelectAllPages(e){let t=this.selectAllTotal;return!e||t===void 0||this.selectedCount>=t?a``:a`<span class="summary-divider" aria-hidden="true">|</span>
            <button class="select-all-pages" part="select-all-button" type="button" @click=${this.onSelectAllPages}>${this.localize.t.dataTable.selectAllCount(t)}</button>`}get defaultSearchLabel(){let e=this.heading||this.label,t=this.localize.t.dataTable.searchLabel;return e?`${t}: ${e}`:t}renderSearch(){if(!this.searchable)return i;let e=this.localize.t.dataTable,t=[`search`,this.searchPersistent?`persistent`:`expandable`,this.searchExpanded||this.filterText?`active`:``].join(` `);return a`<ui-search
            class=${t}
            part="search"
            size=${this.size===`xs`||this.size===`sm`?`sm`:`lg`}
            label=${this.searchLabel||this.defaultSearchLabel}
            placeholder=${this.searchPlaceholder||e.searchPlaceholder}
            ?data-filled=${this.filterText!==``}
            .value=${m(this.filterText)}
            @input=${this.onSearchInput}
            @change=${e=>e.stopPropagation()}
            @ui-clear=${this.onSearchInput}
            @focusin=${this.onSearchFocusIn}
            @focusout=${this.onSearchFocusOut}
        ></ui-search>`}setHiddenColumns(e,t){this.hiddenColumns=e;let n={hiddenColumns:e,key:t,hidden:e.includes(t)};this.dispatchEvent(new CustomEvent(`ui-columns-change`,{detail:n,bubbles:!0,composed:!0}))}renderColumnSettings(){if(!this.columnSettings)return i;let e=this.localize.t.dataTable,t=this.hiddenKeys,n=new Set(t),r=!x(t,S(this.headers));return a`<ui-popover
                class="columns"
                placement="bottom-end"
                caret="false"
                drop-shadow="false"
                auto-close
                .open=${this.columnsOpen}
                @ui-toggle=${e=>this.columnsOpen=e.detail.open}
            >
                <button slot="trigger" class="toolbar-action columns-button" part="columns-button" type="button" aria-label=${e.columns} @click=${()=>this.columnsOpen=!this.columnsOpen}>${me}</button>
                <div class="columns-panel" part="columns-panel">
                    <ui-checkbox-group label=${e.columns}>
                        ${this.headers.map(e=>a`<ui-checkbox data-key=${e.key} .checked=${m(!n.has(e.key)||e.hideable===!1)} ?disabled=${re(this.headers,t,e.key)} @change=${this.onColumnCheck}>${e.header}</ui-checkbox>`)}
                    </ui-checkbox-group>
                    <ui-button class="columns-reset" kind="ghost" size="sm" ?disabled=${!r} @click=${this.resetColumns}>${e.resetColumns}</ui-button>
                </div>
            </ui-popover>
            <ui-tooltip class="columns-tip" as-label text=${e.columns} placement="top"></ui-tooltip>`}renderToolbar(){if(!(this.slots.has(`toolbar`)||this.searchable||this.columnSettings||this.csvExport)&&!this.slots.has(`batch-actions`))return i;let e=this.selectable&&!this.radio&&this.selectedCount>0&&this.slots.has(`batch-actions`);return a`<section class="toolbar" part="toolbar" role="group" aria-label=${this.localize.t.dataTable.toolbar}>
            ${this.renderBatchActions(e)}
            <div class="toolbar-content ${e?`under-batch`:``}" part="toolbar-content" ?inert=${e}>
                ${this.renderSearch()}${this.renderColumnSettings()}${this.renderExportButton()}
                <slot name="toolbar"></slot>
            </div>
        </section>`}renderBody(e,t){if(this.loading){let t=this.loadingRows||e.length||this.pageSize||5;return Array.from({length:t},(e,t)=>this.renderLoadingRow(t))}return e.length===0?this.renderEmptyRow():te(e,e=>e.id,t)}get columnCount(){return this.visibleHeaders.length+ +!!this.hasSelection+ +!!this.expandable+ +!!this.resize.hasFiller}renderLoadingRow(e){let t=a`<td><span class="bone loading-bar"></span></td>`;return a`<tr class="loading-row" aria-hidden="true" ?data-zebra=${e%2==1}>
            ${this.expandable?a`<td class="expand"></td>`:i}${this.hasSelection?a`<td class="select"></td>`:i}
            ${this.visibleHeaders.map(()=>t)}${this.resize.hasFiller?a`<td class="filler"></td>`:i}
        </tr>`}renderEmptyRow(){let e=this.localize.t.dataTable,t=this.filterText.trim()!==``;return a`<tr class="empty-row">
            <td colspan=${this.columnCount} part="empty">${t?a`<slot name="no-results">${e.noResults}</slot>`:a`<slot name="empty">${e.noRows}</slot>`}</td>
        </tr>`}renderPagination(){return this.paginated?a`<ui-pagination
            part="pagination"
            size=${{xs:`sm`,sm:`sm`,md:`md`,lg:`lg`,xl:`lg`}[this.size]}
            .page=${Math.min(Math.max(1,this.page),this.pageCount)}
            .pageSize=${this.pageSize}
            .pageSizes=${this.pageSizes}
            .totalItems=${this.filteredRows.length}
            ?disabled=${this.loading}
            @ui-change=${this.onPageChange}
        ></ui-pagination>`:a``}renderHeader(){if(!this.heading&&!this.description)return i;let e=this.heading?a`<h4 class="title" part="title" id="${this.ids}-title">${this.heading}</h4>`:i,t=this.description?a`<p class="description" part="description" id="${this.ids}-description">${this.description}</p>`:i;return a`<div class="header" part="header">${e}${t}</div>`}get pinStart(){return this.visibleHeaders[0]?.pinned===`start`?1+ +!!this.expandable+ +!!this.hasSelection:0}get pinEnd(){let e=this.visibleHeaders;return e.length<2||e.at(-1)?.pinned!==`end`?0:this.resize.hasFiller?2:1}measurePins(){let e=this.shadowRoot?.querySelector(`.content`),t=this.shadowRoot?.querySelector(`thead tr`)?.children;if(!e||!t||this.pinStart<2)return;let n=0;for(let r=1;r<this.pinStart;r++)n+=t[r-1].getBoundingClientRect().width,e.style.setProperty(`--_pin-${r}`,`${n}px`)}render(){let e=this.heading?`${this.ids}-title`:void 0,t=this.description?`${this.ids}-description`:void 0,n=this.stickyHeader||this.scrollable,r=this.shownRows,o=this.resize.renderFiller(),s=new Set(this.selectedIds),c=r.find(e=>s.has(e.id)&&!e.disabled)?.id??r.find(e=>!e.disabled)?.id,u=new Set(this.expandable?this.expandedIds:[]),d=(e,t)=>({selected:s.has(e.id),tabStop:e.id===c,zebra:t%2==1,expanded:u.has(e.id)});return a`<div class="container" part="base">
            ${this.renderHeader()}${this.renderToolbar()}
            <span class="sr-only" role="status">${this.announcement}</span>
            ${this.grid.renderHint(`${this.ids}-edit-hint`,this.localize.t.dataTable)}
            <div class="content" part="content" tabindex=${l(n?`0`:void 0)} role=${l(n?`region`:void 0)} aria-labelledby=${l(n?e:void 0)} aria-label=${l(n&&!e&&this.label?this.label:void 0)}>
                <table part="table" aria-labelledby=${l(e)} aria-describedby=${l(t)} aria-label=${l(e||!this.label?void 0:this.label)} role=${l(this.grid.enabled?`grid`:void 0)} aria-busy=${l(this.loading?`true`:void 0)} ?data-fixed=${this.resize.fixed} data-pin-start=${l(this.pinStart||void 0)} data-pin-end=${l(this.pinEnd||void 0)} style=${l(this.resize.tableStyle())}>
                    <thead>
                        <tr>
                            ${this.expandable?this.renderExpandHeaderCell(r,u):i}
                            ${this.hasSelection?this.renderSelectAllCell():i}
                            ${this.visibleHeaders.map((e,t)=>this.renderHeaderCell(e,t))}${o}
                        </tr>
                    </thead>
                    <tbody @keydown=${this.grid.onKeydown} @focusin=${this.grid.onFocusIn} @click=${this.grid.onClick} @dblclick=${this.grid.onDoubleClick}>
                        ${this.renderBody(r,(e,t)=>this.renderRow(e,d(e,t),o))}
                    </tbody>
                </table>
            </div>
            ${this.renderPagination()}
        </div>`}};e([c({attribute:!1})],Q.prototype,`headers`,void 0),e([c({attribute:!1})],Q.prototype,`rows`,void 0),e([c({reflect:!0})],Q.prototype,`size`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`zebra`,void 0),e([c({type:Boolean,reflect:!0,attribute:`static-width`})],Q.prototype,`staticWidth`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`sortable`,void 0),e([c({reflect:!0,attribute:`sort-key`})],Q.prototype,`sortKey`,void 0),e([c({reflect:!0,attribute:`sort-direction`})],Q.prototype,`sortDirection`,void 0),e([c({type:Boolean,attribute:`manual-sorting`})],Q.prototype,`manualSorting`,void 0),e([c({attribute:!1})],Q.prototype,`sortRow`,void 0),e([c({attribute:!1})],Q.prototype,`renderCell`,void 0),e([c()],Q.prototype,`heading`,void 0),e([c()],Q.prototype,`description`,void 0),e([c()],Q.prototype,`label`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`selectable`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`radio`,void 0),e([c({attribute:!1})],Q.prototype,`selectedIds`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`searchable`,void 0),e([c({type:Boolean,attribute:`search-persistent`})],Q.prototype,`searchPersistent`,void 0),e([c({attribute:`filter-text`})],Q.prototype,`filterText`,void 0),e([c({attribute:!1})],Q.prototype,`filterRows`,void 0),e([c({type:Boolean,attribute:`manual-filtering`})],Q.prototype,`manualFiltering`,void 0),e([c({attribute:`search-label`})],Q.prototype,`searchLabel`,void 0),e([c({attribute:`search-placeholder`})],Q.prototype,`searchPlaceholder`,void 0),e([u()],Q.prototype,`searchExpanded`,void 0),e([u()],Q.prototype,`announcement`,void 0),e([c({attribute:!1})],Q.prototype,`renderExpandedRow`,void 0),e([c({attribute:!1})],Q.prototype,`expandedIds`,void 0),e([c({type:Boolean,attribute:`expand-all`})],Q.prototype,`expandAll`,void 0),e([c({type:Boolean,reflect:!0,attribute:`sticky-header`})],Q.prototype,`stickyHeader`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`resizable`,void 0),e([c({attribute:!1})],Q.prototype,`columnWidths`,void 0),e([c({type:Boolean,reflect:!0})],Q.prototype,`loading`,void 0),e([c({type:Number,attribute:`loading-rows`})],Q.prototype,`loadingRows`,void 0),e([c({type:Number,attribute:`page-size`})],Q.prototype,`pageSize`,void 0),e([c({type:Number})],Q.prototype,`page`,void 0),e([c({attribute:`page-sizes`})],Q.prototype,`pageSizes`,void 0),e([c({type:Number,attribute:`total-selected`})],Q.prototype,`totalSelected`,void 0),e([c({type:Number,attribute:`total-count`})],Q.prototype,`totalCount`,void 0),e([c({attribute:!1})],Q.prototype,`hiddenColumns`,void 0),e([c({type:Boolean,reflect:!0,attribute:`column-settings`})],Q.prototype,`columnSettings`,void 0),e([u()],Q.prototype,`columnsOpen`,void 0),e([c({type:Boolean,reflect:!0,attribute:`csv-export`})],Q.prototype,`csvExport`,void 0),e([c({attribute:`csv-file-name`})],Q.prototype,`csvFileName`,void 0),e([u()],Q.prototype,`scrollable`,void 0),Q=e([s(`ui-data-table`)],Q);var $=class extends f{constructor(...e){super(...e),this.rowCount=5,this.columnCount=5,this.size=`lg`,this.zebra=!1,this.hideHeader=!1,this.hideToolbar=!1}static{this.styles=[X,Z,p,t`
            .bar {
                display: block;
                inline-size: 64px;
                block-size: 16px;
            }

            th .bar {
                background-color: var(--ui-skeleton-element);
            }

            .header .bar.title-bar {
                inline-size: 120px;
                block-size: 24px;
            }

            .header .bar.description-bar {
                inline-size: 160px;
                margin-block-start: var(--ui-space-xs);
            }

            .toolbar {
                display: flex;
                justify-content: flex-end;
                block-size: 48px;
                background-color: var(--ui-surface-1);
            }

            .toolbar .bar {
                inline-size: 150px;
                block-size: 100%;
            }


        `]}connectedCallback(){super.connectedCallback(),this.setAttribute(`aria-hidden`,`true`)}renderHeaderCell(e){return this.headers?a`<th>${this.headers[e]?.header??``}</th>`:a`<th><span class="bone bar"></span></th>`}renderRow(e,t){let n=Array.from({length:e},()=>a`<td><span class="bone bar"></span></td>`);return a`<tr ?data-zebra=${t%2==1}>${n}</tr>`}render(){let e=Array.from({length:Math.max(1,this.columnCount)},(e,t)=>t),t=Array.from({length:Math.max(0,this.rowCount)},(e,t)=>t),n=this.hideHeader?i:a`<div class="header"><span class="bone bar title-bar"></span><span class="bone bar description-bar"></span></div>`,r=this.hideToolbar?i:a`<div class="toolbar"><span class="bone bar"></span></div>`;return a`<div class="container" part="base">
            ${n}${r}
            <div class="content">
                <table part="table">
                    <thead>
                        <tr>
                            ${e.map(e=>this.renderHeaderCell(e))}
                        </tr>
                    </thead>
                    <tbody>
                        ${t.map(t=>this.renderRow(e.length,t))}
                    </tbody>
                </table>
            </div>
        </div>`}};e([c({attribute:!1})],$.prototype,`headers`,void 0),e([c({type:Number,attribute:`row-count`})],$.prototype,`rowCount`,void 0),e([c({type:Number,attribute:`column-count`})],$.prototype,`columnCount`,void 0),e([c({reflect:!0})],$.prototype,`size`,void 0),e([c({type:Boolean,reflect:!0})],$.prototype,`zebra`,void 0),e([c({type:Boolean,attribute:`hide-header`})],$.prototype,`hideHeader`,void 0),e([c({type:Boolean,attribute:`hide-toolbar`})],$.prototype,`hideToolbar`,void 0),$=e([s(`ui-data-table-skeleton`)],$);
import{C as e,Ct as t,bt as n,ht as r}from"./theme-switcher-BKi8EfZd.js";import{t as i}from"./checkbox-vHcx3J95.js";import{t as a}from"./radio-BKvqkkkD.js";var o=t`
    position: relative;
    display: block;
    box-sizing: border-box;
    min-height: 64px;
    padding: var(--ui-space-md) calc(var(--ui-space-md) * 2 + 16px) var(--ui-space-md) var(--ui-space-md);
    border: 1px solid transparent;
    outline: 2px solid transparent;
    outline-offset: -2px;
    background-color: var(--ui-surface-1);
    color: var(--ui-ink);
    font: var(--ui-font-body-sm);
    line-height: 18px;
    letter-spacing: var(--ui-tracking-body);
    cursor: pointer;
    transition: all var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon .cds--tile--selectable: every property, moderate-01 */
`,s=t`
    .mark {
        position: absolute;
        top: var(--ui-space-md);
        inset-inline-end: var(--ui-space-md);
        width: 16px;
        height: 16px;
        fill: var(--ui-icon-secondary);
        transition: all var(--ui-duration-moderate) var(--ui-easing); /* Carbon .cds--tile__checkmark: every property, fast-02 */
    }
`,c=class extends a{static{this.styles=t`
            ${s}

            :host {
                display: block;
                outline: none;
            }

            /* the tile is drawn by this part, not :host, so a page-wide CSS reset can't remove its padding and border */
            .base {
                ${o}
            }

            :host(:hover) .base {
                background-color: var(--ui-ghost-hover);
            }

            :host([checked]) .base {
                border-color: var(--ui-layer-selected-inverse);
            }

            /* Carbon: .cds--tile-input:focus + .cds--tile (a click too) */
            :host(:focus) .base {
                outline-color: var(--ui-focus);
            }

            :host([data-invalid]) .base {
                border: 2px solid var(--ui-error);
            }

            .mark {
                opacity: 0;
                fill: var(--ui-icon-primary);
            }

            :host([checked]) .mark {
                opacity: 1;
            }

            :host([disabled]) .base,
            :host([data-group-disabled]) .base {
                color: var(--ui-ink-disabled);
                cursor: not-allowed;
                background-color: var(--ui-surface-1);
            }

            :host([checked][disabled]) .base,
            :host([checked][data-group-disabled]) .base {
                border-color: var(--ui-border-disabled);
            }

            :host([disabled]) .mark,
            :host([data-group-disabled]) .mark {
                fill: var(--ui-icon-disabled);
            }

            :host([data-group-readonly]) .base {
                cursor: default;
                background-color: var(--ui-surface-1);
            }

            @media (forced-colors: active) {
                :host([checked]) .base {
                    border: 2px solid Highlight;
                }

                .mark {
                    fill: CanvasText;
                }
            }
        `}render(){return n`<div class="base">
            <svg class="mark" part="mark" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM7 11 4.3 8.3l.9-.8L7 9.3l4-3.9.9.8L7 11z" />
            </svg>
            <slot></slot>
        </div>`}};c=e([r(`ui-radio-tile`)],c);var l=class extends i{constructor(...e){super(...e),this.controlTabIndex=`0`}static{this.styles=[...i.styles,s,t`
            label {
                ${o}
                width: 100%;
            }

            :host(:not([data-disabled], [data-readonly])) label:hover {
                background-color: var(--ui-ghost-hover);
            }

            :host([checked]) label {
                border-color: var(--ui-layer-selected-inverse);
            }

            :host([checked]) .mark {
                fill: var(--ui-icon-primary);
            }

            /* Ring the whole tile on :focus (a click too, as Carbon), not the small mark */
            label:has(input:focus) {
                outline-color: var(--ui-focus);
            }

            input,
            .mark {
                position: absolute;
                top: var(--ui-space-md);
                inset-inline-start: auto;
                inset-inline-end: var(--ui-space-md);
                margin: 0;
            }

            /* the native box stays clickable under the mark but invisible */
            input {
                width: 16px;
                height: 16px;
                opacity: 0;
            }

            .invalid,
            :host([data-group-invalid]) label {
                border: 2px solid var(--ui-error);
            }

            :host([data-disabled]) label {
                background-color: var(--ui-surface-1);
            }

            :host([data-disabled][checked]) label {
                border-color: var(--ui-border-disabled);
            }

            :host([data-disabled]) .mark {
                fill: var(--ui-icon-disabled);
            }

            :host([data-readonly]) label {
                cursor: default;
            }

            .error,
            .warn,
            .helper {
                padding-inline-start: 0;
            }

            @media (forced-colors: active) {
                .mark {
                    fill: CanvasText;
                }
            }
        `]}renderBox(){return this.checked?n`<svg class="mark" part="box" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM14 21.5l-5-4.957L10.59 15 14 18.346 21.409 11 23 12.577z" />
              </svg>`:n`<svg class="mark" part="box" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM6 26V6h20v20z" />
              </svg>`}};l=e([r(`ui-selectable-tile`)],l);
import{C as e,Ct as t,Z as n,_t as r,bt as i,gt as a,ht as o,m as s,mt as c,w as l,x as u}from"./theme-switcher-BKi8EfZd.js";var d=class extends l{constructor(...e){super(...e),this.href=``,this.target=`_self`,this.disabled=!1,this.localize=new u(this)}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[n,t`
        :host {
            display: block;
        }

        /* Carbon .cds--tile: body-compact-01, 16px padding, layer background, 64px tall and 128px wide at least */
        .tile {
            position: relative;
            display: block;
            box-sizing: border-box;
            height: 100%;
            min-height: 64px;
            min-width: 128px;
            padding: var(--ui-space-md);
            border-radius: var(--ui-radius-none);
            outline: 2px solid transparent;
            outline-offset: -2px;
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 18px;
            letter-spacing: var(--ui-tracking-body);
            text-decoration: none;
        }

        a.tile {
            cursor: pointer;
            transition: all var(--ui-duration-moderate-01) var(--ui-easing); /* Carbon .cds--tile--clickable: every property, moderate-01 */
        }

        a.tile:hover {
            background-color: var(--ui-ghost-hover);
        }

        /* Carbon: the focus ring follows :focus (a click too) */
        a.tile:focus {
            outline-color: var(--ui-focus);
        }

        .disabled {
            color: var(--ui-ink-disabled);
            cursor: not-allowed;
        }

        ::slotted([slot='icon']) {
            position: absolute;
            inset-block-end: 12px;
            inset-inline-end: 12px;
            width: 20px;
            height: 20px;
            fill: var(--ui-icon-interactive);
        }

        .disabled ::slotted([slot='icon']) {
            display: none;
        }

        @media (forced-colors: active) {
            .tile {
                border: 1px solid CanvasText;
            }
        }
    `]}render(){if(!this.href)return i`<div class="tile" part="base"><slot></slot></div>`;if(this.disabled)return i`<div class="tile disabled" part="base" aria-disabled="true"><slot></slot><slot name="icon"></slot></div>`;let e=this.target===`_blank`;return i`
            <a
                class="tile"
                part="base"
                href=${this.href}
                target=${this.target}
                rel=${e?`noopener noreferrer`:r}
                tabindex="0"
                @click=${s}
            >
                <slot></slot>
                ${e?i`<span class="sr-only">${this.localize.t.common.opensInNewTab}</span>`:r}
                <slot name="icon"></slot>
            </a>
        `}};e([c()],d.prototype,`href`,void 0),e([c()],d.prototype,`target`,void 0),e([c({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),d=e([o(`ui-tile`)],d);
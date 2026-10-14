import{C as e,Ct as t,T as n,bt as r,ft as i,gt as a,ht as o,mt as s,w as c,x as l}from"./theme-switcher-BKi8EfZd.js";import"./button-BVtMUNlp.js";import"./icon-button-Cj1wsc-u.js";import{t as u}from"./overflow-menu-BtpSVDpJ.js";var d=class extends n(c){constructor(...e){super(...e),this.label=``,this.size=`lg`,this.placement=`bottom`,this.tooltipPlacement=`bottom`,this.triggerLabel=``,this.disabled=!1,this.open=!1,this.localize=new l(this),this.onPrimaryClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent(`ui-click`,{bubbles:!0,composed:!0}))}}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=t`
        :host {
            display: inline-flex;
            column-gap: 1px;
            font-family: var(--ui-font-family);
        }

        .primary {
            min-inline-size: calc(160px - 1px - var(--_t, 48px));
        }

        :host([size='md']) .primary {
            --_t: 40px;
        }

        :host([size='sm']) .primary {
            --_t: 32px;
        }

        .primary ui-button {
            inline-size: 100%;
            min-inline-size: 111px;
            max-inline-size: 239px;
        }

        .primary ui-button::part(base) {
            inline-size: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .chevron {
            transition: transform var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([open]) .chevron {
            transform: rotate(180deg);
        }
    `}updated(e){e.has(`open`)&&this.menu.open!==this.open&&(this.menu.anchor=this,this.menu.open=this.open)}onTriggerKeydown(e){u(e,this.menu,this)}toggle(){this.open?this.menu.hide():this.menu.show(this)}render(){let e=this.triggerLabel||this.localize.t.common.additionalActions,t=this.placement===`bottom`||this.placement===`top`;return r`
            <div class="primary"><ui-button part="primary" kind="primary" size=${this.size} ?disabled=${this.disabled} title=${this.label} @click=${this.onPrimaryClick}>${this.label}</ui-button></div>
            <ui-icon-button
                part="trigger"
                kind="primary"
                size=${this.size}
                label=${e}
                tooltip-placement=${this.tooltipPlacement}
                haspopup="menu"
                ?expanded=${this.open}
                ?disabled=${this.disabled}
                @click=${this.toggle}
                @keydown=${this.onTriggerKeydown}
            >
                <svg class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </ui-icon-button>
            <ui-menu part="menu" label=${e} size=${this.size} placement=${this.placement} ?match-width=${t} @ui-toggle=${e=>this.open=e.detail.open}>
                <slot></slot>
            </ui-menu>
        `}};e([s()],d.prototype,`label`,void 0),e([s({reflect:!0})],d.prototype,`size`,void 0),e([s()],d.prototype,`placement`,void 0),e([s({attribute:`tooltip-placement`})],d.prototype,`tooltipPlacement`,void 0),e([s({attribute:`trigger-label`})],d.prototype,`triggerLabel`,void 0),e([s({type:Boolean,reflect:!0})],d.prototype,`disabled`,void 0),e([s({type:Boolean,reflect:!0})],d.prototype,`open`,void 0),e([i(`ui-menu`)],d.prototype,`menu`,void 0),d=e([o(`ui-combo-button`)],d);var f=class extends n(c){constructor(...e){super(...e),this.label=``,this.kind=`primary`,this.size=`lg`,this.placement=`bottom`,this.disabled=!1,this.open=!1}static{this.shadowRootOptions={...a.shadowRootOptions,delegatesFocus:!0}}static{this.styles=t`
        :host {
            display: inline-block;
        }

        ui-button:not([kind='ghost']) {
            min-width: 192px;
        }

        /* Carbon: the chevron takes the button's text colour (white on primary) */
        .chevron {
            fill: currentColor;
            transition: transform var(--ui-duration-moderate) var(--ui-easing);
        }

        :host([open]) .chevron {
            transform: rotate(180deg);
        }

        @media (forced-colors: active) {
            .chevron {
                fill: CanvasText;
            }
        }

    `}get variant(){return this.kind}set variant(e){this.kind=e,this.hasAttribute(`variant`)&&this.setAttribute(`variant`,e)}static get observedAttributes(){return[...super.observedAttributes,`variant`]}attributeChangedCallback(e,t,n){e===`variant`?n!==null&&(this.kind=n):super.attributeChangedCallback(e,t,n)}updated(e){e.has(`open`)&&this.menu.open!==this.open&&(this.menu.anchor=this.button,this.menu.open=this.open)}onTriggerKeydown(e){u(e,this.menu,this.button)}toggle(){this.open?this.menu.hide():this.menu.show(this.button)}render(){let e=this.placement===`bottom`||this.placement===`top`;return r`
            <ui-button
                part="trigger"
                kind=${this.kind}
                size=${this.size}
                haspopup="menu"
                ?expanded=${this.open}
                ?disabled=${this.disabled}
                @click=${this.toggle}
                @keydown=${this.onTriggerKeydown}
            >
                ${this.label}
                <svg slot="suffix" class="chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" /></svg>
            </ui-button>
            <ui-menu
                part="menu"
                label=${this.label}
                size=${this.size}
                placement=${this.placement}
                ?match-width=${e}
                @ui-toggle=${e=>this.open=e.detail.open}
            >
                <slot></slot>
            </ui-menu>
        `}};e([s()],f.prototype,`label`,void 0),e([s({reflect:!0})],f.prototype,`kind`,void 0),e([s({reflect:!0})],f.prototype,`size`,void 0),e([s()],f.prototype,`placement`,void 0),e([s({type:Boolean,reflect:!0})],f.prototype,`disabled`,void 0),e([s({type:Boolean,reflect:!0})],f.prototype,`open`,void 0),e([i(`ui-button`)],f.prototype,`button`,void 0),e([i(`ui-menu`)],f.prototype,`menu`,void 0),f=e([o(`ui-menu-button`)],f);
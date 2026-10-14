import{C as e,Ct as t,bt as n,ht as r,mt as i,w as a}from"./theme-switcher-BKi8EfZd.js";var o=class extends a{constructor(...e){super(...e),this.stacked=!1}static{this.styles=t`
        :host {
            display: flex;
        }

        :host([stacked]) {
            flex-direction: column;
        }

        /* Carbon .btn-set .btn: full width up to 196px (design kit) */
        ::slotted(*) {
            inline-size: 100%;
            max-inline-size: 196px;
        }

        ::slotted(:not(:first-child):not(:focus-within)) {
            box-shadow: -1px 0 0 0 var(--ui-button-separator);
        }

        :host([stacked]) ::slotted(:not(:first-child):not(:focus-within)) {
            box-shadow: 0 -1px 0 0 var(--ui-button-separator);
        }
    `}render(){return n`<slot></slot>`}};e([i({type:Boolean,reflect:!0})],o.prototype,`stacked`,void 0),o=e([r(`ui-button-set`)],o);
import{C as e,Ct as t,bt as n,ht as r,mt as i,w as a}from"./theme-switcher-BKi8EfZd.js";var o=t`
    :host {
        display: block;
    }

    .list {
        margin: 0;
        padding: 0;
        list-style: none;
        font: var(--ui-font-body-sm);
        line-height: 20px; /* body-01 */
        letter-spacing: var(--ui-tracking-body);
    }

    :host([nested]) .list {
        margin-inline-start: 32px;
        font: inherit;
        letter-spacing: inherit;
    }

    :host([is-expressive]) .list {
        font: var(--ui-font-body); /* body-02 */
        letter-spacing: 0;
    }

    ::slotted(*) {
        position: relative;
    }

    :host([nested]) ::slotted(*) {
        padding-inline-start: var(--ui-space-xxs);
    }
`;function s(e){return!!e.parentElement?.closest(`ui-list-item`)}var c=class extends a{constructor(...e){super(...e),this.nested=!1,this.isExpressive=!1}static{this.styles=[o,t`
            :host(:not([nested])) .list {
                margin-inline-start: var(--ui-space-md);
            }

            ::slotted(*)::before {
                content: '\\2013';
                position: absolute;
                inset-inline-start: -16px;
            }

            :host([nested]) ::slotted(*)::before {
                content: '\\25AA\\FE0E';
                inset-inline-start: -12px;
            }
        `]}connectedCallback(){super.connectedCallback(),s(this)&&(this.nested=!0)}render(){return n`<ul class="list" part="list"><slot></slot></ul>`}};e([i({type:Boolean,reflect:!0})],c.prototype,`nested`,void 0),e([i({type:Boolean,reflect:!0,attribute:`is-expressive`})],c.prototype,`isExpressive`,void 0),c=e([r(`ui-unordered-list`)],c);var l=class extends a{constructor(...e){super(...e),this.nested=!1,this.native=!1,this.isExpressive=!1}static{this.styles=[o,t`
            :host(:not([nested])) {
                counter-reset: item;
            }

            :host(:not([nested]):not([native])) ::slotted(*)::before {
                content: counter(item) '.';
                counter-increment: item;
                position: absolute;
                inset-inline-start: -24px;
            }

            :host([native]) .list {
                list-style: decimal;
            }

            :host([nested]) .list {
                list-style: lower-latin;
            }
        `]}connectedCallback(){super.connectedCallback(),s(this)&&(this.nested=!0)}render(){return n`<ol class="list" part="list"><slot></slot></ol>`}};e([i({type:Boolean,reflect:!0})],l.prototype,`nested`,void 0),e([i({type:Boolean,reflect:!0})],l.prototype,`native`,void 0),e([i({type:Boolean,reflect:!0,attribute:`is-expressive`})],l.prototype,`isExpressive`,void 0),l=e([r(`ui-ordered-list`)],l);var u=class extends a{static{this.styles=t`
        :host {
            display: list-item;
            color: var(--ui-ink);
        }
    `}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`)}render(){return n`<slot></slot>`}};u=e([r(`ui-list-item`)],u);
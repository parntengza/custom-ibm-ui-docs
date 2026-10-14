import{C as e,Ct as t,bt as n,ht as r,mt as i}from"./theme-switcher-BKi8EfZd.js";import{a,n as o}from"./skeleton-CJ3-DC_A.js";var s=class extends o{constructor(...e){super(...e),this.size=`lg`}static{this.styles=[a,t`
            :host {
                display: inline-block;
                vertical-align: middle;
            }

            .bone {
                inline-size: 150px;
                block-size: var(--ui-field-height-lg, 48px);
            }

            :host([size='sm']) .bone {
                block-size: var(--ui-field-height-sm, 32px);
            }

            :host([size='md']) .bone {
                block-size: var(--ui-field-height-md, 40px);
            }

            :host([size='xl']) .bone {
                block-size: 64px;
            }

            :host([size='2xl']) .bone {
                block-size: 80px;
            }
        `]}render(){return n`<div class="bone" part="bone"></div>`}};e([i({reflect:!0})],s.prototype,`size`,void 0),s=e([r(`ui-button-skeleton`)],s);
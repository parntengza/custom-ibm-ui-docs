import{C as e,Ct as t,bt as n,ht as r,mt as i}from"./theme-switcher-BKi8EfZd.js";import{a,n as o}from"./skeleton-CJ3-DC_A.js";var s=class extends o{constructor(...e){super(...e),this.size=`md`}static{this.styles=[a,t`
            :host {
                display: inline-block;
                vertical-align: middle;
            }

            .bone {
                inline-size: 60px;
                block-size: 24px;
                border-radius: 16px;
            }

            :host([size='sm']) .bone {
                block-size: 18px;
            }

            :host([size='lg']) .bone {
                block-size: 32px;
            }
        `]}render(){return n`<div class="bone" part="bone"></div>`}};e([i({reflect:!0})],s.prototype,`size`,void 0),s=e([r(`ui-tag-skeleton`)],s);
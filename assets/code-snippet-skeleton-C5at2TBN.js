import{C as e,Ct as t,bt as n,ht as r,mt as i}from"./theme-switcher-BKi8EfZd.js";import{a,n as o}from"./skeleton-CJ3-DC_A.js";var s=class extends o{constructor(...e){super(...e),this.type=`single`}static{this.styles=[a,t`
            :host {
                display: block;
                max-inline-size: 768px;
            }

            .box {
                box-sizing: border-box;
                block-size: 56px;
                padding: 20px 40px 0 var(--ui-space-md);
                background-color: var(--ui-surface-1);
            }

            .bone {
                display: block;
                block-size: 16px;
            }

            :host([type='multi']) .box {
                display: flex;
                flex-direction: column;
                gap: var(--ui-space-xs);
                block-size: 98px;
                padding: var(--ui-space-md);
            }

            :host([type='multi']) .bone:nth-child(2) {
                inline-size: 85%;
            }

            :host([type='multi']) .bone:nth-child(3) {
                inline-size: 95%;
            }
        `]}render(){let e=this.type===`multi`?3:1,t=n`<span class="bone" part="line"></span>`;return n`<div class="box" part="base">${Array.from({length:e},()=>t)}</div>`}};e([i({reflect:!0})],s.prototype,`type`,void 0),s=e([r(`ui-code-snippet-skeleton`)],s);
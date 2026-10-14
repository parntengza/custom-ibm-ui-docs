import{C as e,Ct as t,bt as n,ht as r,mt as i}from"./theme-switcher-BKi8EfZd.js";import{a,n as o}from"./skeleton-CJ3-DC_A.js";var s=class extends o{constructor(...e){super(...e),this.items=3,this.noTrailingSlash=!1,this.size=`md`}static{this.styles=[a,t`
            :host {
                display: block;
                font: var(--ui-font-body-sm);
                letter-spacing: var(--ui-tracking-body);
            }

            :host([size='sm']) {
                font: var(--ui-font-caption);
                letter-spacing: var(--ui-tracking-caption);
            }

            .trail {
                display: flex;
                flex-wrap: wrap;
                column-gap: var(--ui-space-xs);
            }

            :host([size='sm']) .trail {
                column-gap: var(--ui-space-xxs);
            }

            .item {
                display: inline-flex;
                align-items: center;
                line-height: 18px;
            }

            .bone {
                inline-size: 100px;
                block-size: 16px;
            }

            .item::after {
                content: '/';
                margin-inline-start: var(--ui-space-xs);
                color: var(--ui-ink);
            }

            :host([size='sm']) .item::after {
                margin-inline-start: var(--ui-space-xxs);
            }

            :host([no-trailing-slash]) .item:last-child::after {
                content: none;
            }
        `]}render(){let e=n`<span class="item"><span class="bone" part="item"></span></span>`;return n`<div class="trail">${Array.from({length:Math.max(1,this.items)},()=>e)}</div>`}};e([i({type:Number})],s.prototype,`items`,void 0),e([i({type:Boolean,reflect:!0,attribute:`no-trailing-slash`})],s.prototype,`noTrailingSlash`,void 0),e([i({reflect:!0})],s.prototype,`size`,void 0),s=e([r(`ui-breadcrumb-skeleton`)],s);
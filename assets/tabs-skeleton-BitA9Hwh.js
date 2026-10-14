import{C as e,Ct as t,bt as n,ht as r,mt as i}from"./theme-switcher-BKi8EfZd.js";import{a,n as o}from"./skeleton-CJ3-DC_A.js";var s=class extends o{constructor(...e){super(...e),this.tabs=5}static{this.styles=[a,t`
            :host {
                display: block;
            }

            .list {
                display: flex;
                gap: 1px;
            }

            .tab {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                inline-size: 160px;
                block-size: 40px;
                padding: 0 var(--ui-space-md);
                border-block-end: 2px solid var(--ui-skeleton-element);
            }

            .bone {
                inline-size: 100%;
                block-size: 14px;
            }
        `]}render(){let e=n`<div class="tab" part="tab"><span class="bone"></span></div>`;return n`<div class="list">${Array.from({length:Math.max(1,this.tabs)},()=>e)}</div>`}};e([i({type:Number})],s.prototype,`tabs`,void 0),s=e([r(`ui-tabs-skeleton`)],s);
import{C as e,Ct as t,bt as n,ht as r}from"./theme-switcher-BKi8EfZd.js";import{t as i}from"./skeleton-CJ3-DC_A.js";var a=class extends i{static{this.styles=[...i.styles,t`
            .field {
                block-size: 100px;
            }

            .fluid-area {
                box-sizing: border-box;
                padding: var(--ui-space-md);
                border-block-end: 1px solid var(--ui-skeleton-element);
                background-color: var(--ui-skeleton-background);
            }

            .fluid-area .label {
                block-size: 8px;
                margin-block-end: var(--ui-space-sm);
            }

            .fluid-area .field {
                inline-size: 80%;
                block-size: 64px;
            }
        `]}render(){return this.isFluid?n`<div class="fluid-area" part="box"><span class="bone label" part="label"></span><div class="bone field" part="field"></div></div>`:super.render()}};a=e([r(`ui-text-area-skeleton`)],a);
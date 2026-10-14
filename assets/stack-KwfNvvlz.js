import{C as e,Ct as t,bt as n,ht as r,mt as i,w as a}from"./theme-switcher-BKi8EfZd.js";var o=[0,2,4,8,12,16,24,32,40,48,64,80,96,160];function s(e){if(e===void 0||e===``)return``;let t=Number(e);return Number.isInteger(t)&&t>0&&t<o.length?`${o[t]}px`:String(e)}var c=class extends a{constructor(...e){super(...e),this.orientation=`vertical`,this.gap=``}static{this.styles=t`
        :host {
            display: grid;
            grid-auto-flow: row;
            row-gap: var(--ui-stack-gap, 0);
        }

        :host([orientation='horizontal']) {
            display: inline-grid;
            grid-auto-flow: column;
            row-gap: 0;
            column-gap: var(--ui-stack-gap, 0);
        }
    `}updated(e){if(!e.has(`gap`))return;let t=s(this.gap);t?this.style.setProperty(`--ui-stack-gap`,t):this.style.removeProperty(`--ui-stack-gap`)}render(){return n`<slot></slot>`}};e([i({reflect:!0})],c.prototype,`orientation`,void 0),e([i()],c.prototype,`gap`,void 0),c=e([r(`ui-stack`)],c);
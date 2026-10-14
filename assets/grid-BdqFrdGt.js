import{C as e,Ct as t,bt as n,ht as r,mt as i,pt as a,st as o,w as s,wt as c}from"./theme-switcher-BKi8EfZd.js";var l=[{name:`sm`,minRem:0,columns:4,margin:0},{name:`md`,minRem:42,columns:8,margin:16},{name:`lg`,minRem:66,columns:16,margin:16},{name:`xlg`,minRem:82,columns:16,margin:16},{name:`max`,minRem:99,columns:16,margin:24}],u=1584,d=16,f={"25%":.25,"50%":.5,"75%":.75,"100%":1},p=e=>typeof e==`string`&&e in f;function m(e){return e===0?{display:`none`}:{display:`block`,columns:e,start:`span ${e}`,end:`span ${e}`}}function h(e,t){if(e===`100%`)return{start:`1`,end:`-1`};let n=t*f[e];return{columns:n,start:`span ${n}`,end:`span ${n}`}}function g(e,t){if(e===void 0||e===!1)return;if(e===!0)return{start:`auto`,end:`auto`};let n=typeof e==`object`?e.span:e;if(p(n))return h(n,l[t].columns);if(typeof n==`number`&&n>=0&&n<=l[t].columns)return m(n)}function _(e){if(typeof e!=`object`||!e)return;let t={};return typeof e.offset==`number`&&(t.start=e.offset>0?String(e.offset+1):`auto`),typeof e.start==`number`&&(t.start=e.start?String(e.start):`auto`),typeof e.end==`number`&&(t.end=String(e.end)),t.start===void 0&&t.end===void 0?void 0:t}function v(e){let t=[],n=(e,n)=>{n&&t.push({from:e,set:n})},r=e.span,i=typeof r==`object`?r.span:r;return typeof i==`number`&&i>=0&&i<=d&&n(0,m(i)),l.forEach((t,r)=>n(r,g(e[t.name],r))),i===!0&&n(0,{start:`auto`,end:`auto`}),p(i)&&l.forEach((e,t)=>n(t,h(i,e.columns))),n(0,_(r)),l.forEach((t,r)=>n(r,_(e[t.name]))),t}function y(e){let t=v(e),n={};return l.forEach((e,r)=>{let i={};for(let e of t)e.from<=r&&Object.assign(i,e.set);n[e.name]={start:i.start??`auto`,end:i.end??`auto`,hidden:i.display===`none`,columns:i.columns}}),n}function b(e){if(e==null)return;let t=e.trim();if(t===``||t===`auto`||t===`true`)return!0;if(/^\d+$/.test(t))return Number(t);if(p(t))return t;let n={};for(let e of t.split(/\s+/)){let[t,r]=e.split(`:`);t===`span`&&p(r)?n.span=r:(t===`span`||t===`offset`||t===`start`||t===`end`)&&/^\d+$/.test(r??``)&&(n[t]=Number(r))}return Object.keys(n).length?n:void 0}function x(e){return l.map(t=>t.minRem===0?e(t.name):`@media (min-width: ${t.minRem}rem) { ${e(t.name)} }`).join(`
`)}var S=c(l.map(e=>{let t=`.grid { --ui-grid-columns: ${e.columns}; --ui-grid-margin: ${e.margin}px; }`;return e.minRem===0?t:`@media (min-width: ${e.minRem}rem) { ${t} }`}).join(`
`)),C=class extends s{constructor(...e){super(...e),this.narrow=!1,this.condensed=!1,this.fullWidth=!1,this.withRowGap=!1,this.subgrid=!1}static{this.styles=[S,t`
            :host {
                display: block;
            }

            .grid {
                --ui-grid-gutter: ${32}px;
                --ui-grid-gutter-start: calc(var(--ui-grid-gutter) / 2);
                --ui-grid-gutter-end: calc(var(--ui-grid-gutter) / 2);
                --ui-grid-column-hang: calc(var(--ui-grid-gutter) / 2);
                display: grid;
                grid-template-columns: repeat(var(--ui-grid-columns), minmax(0, 1fr));
                box-sizing: border-box;
                inline-size: 100%;
                max-inline-size: ${u}px;
                margin-inline: auto;
                padding-inline: var(--ui-grid-margin);
            }

            .full-width {
                max-inline-size: 100%;
            }

            .grid.narrow {
                --ui-grid-gutter-start: 0px;
            }

            .grid.condensed {
                --ui-grid-gutter: ${1}px;
                --ui-grid-column-hang: ${31/2}px;
            }

            .grid.row-gap {
                row-gap: var(--ui-grid-gutter);
            }

            .grid.narrow.row-gap {
                row-gap: calc(var(--ui-grid-gutter) / 2);
            }

            .start {
                margin-inline-start: 0;
            }

            .end {
                margin-inline-end: 0;
            }

            /* a subgrid takes its column's span (--ui-grid-columns) and reaches over the column's gutters */
            .subgrid {
                display: grid;
                grid-template-columns: repeat(var(--ui-grid-columns), minmax(0, 1fr));
                margin-inline: calc(var(--ui-grid-mode-start) * -1) calc(var(--ui-grid-mode-end) * -1);
            }

            :host(:dir(rtl)) .subgrid {
                margin-inline: calc(var(--ui-grid-mode-end) * -1) calc(var(--ui-grid-mode-start) * -1);
            }

            .subgrid.wide {
                --ui-grid-gutter-start: ${16}px;
                --ui-grid-gutter-end: ${16}px;
                --ui-grid-column-hang: 0px;
            }

            .subgrid.narrow {
                --ui-grid-gutter-start: 0px;
                --ui-grid-gutter-end: ${16}px;
                --ui-grid-column-hang: ${16}px;
            }

            .subgrid.condensed {
                --ui-grid-gutter: ${1}px;
                --ui-grid-gutter-start: ${1/2}px;
                --ui-grid-gutter-end: ${1/2}px;
                --ui-grid-column-hang: ${31/2}px;
            }

            .subgrid.row-gap {
                row-gap: ${32}px;
            }

            .subgrid.narrow.row-gap {
                row-gap: ${16}px;
            }

            .subgrid.condensed.row-gap {
                row-gap: ${1}px;
            }
        `]}connectedCallback(){super.connectedCallback(),this.subgrid=!!this.parentElement?.closest(`ui-grid`)}render(){let e=`wide`;this.narrow?e=`narrow`:this.condensed&&(e=`condensed`);let t=this.subgrid?{subgrid:!0,[e]:!0,"row-gap":this.withRowGap}:{grid:!0,narrow:this.narrow,condensed:!this.narrow&&this.condensed,"full-width":this.fullWidth,start:this.align===`start`,end:this.align===`end`,"row-gap":this.withRowGap};return n`<div class=${o(t)} part="grid"><slot></slot></div>`}};e([i({type:Boolean,reflect:!0})],C.prototype,`narrow`,void 0),e([i({type:Boolean,reflect:!0})],C.prototype,`condensed`,void 0),e([i({type:Boolean,reflect:!0,attribute:`full-width`})],C.prototype,`fullWidth`,void 0),e([i({reflect:!0})],C.prototype,`align`,void 0),e([i({type:Boolean,reflect:!0,attribute:`with-row-gap`})],C.prototype,`withRowGap`,void 0),e([a()],C.prototype,`subgrid`,void 0),C=e([r(`ui-grid`)],C);var w=c(x(e=>`:host {
            display: var(--_ui-col-display-${e}, block);
            grid-column-start: var(--_ui-col-start-${e}, auto);
            grid-column-end: var(--_ui-col-end-${e}, auto);
        }
        :host([data-columns-${e}]) {
            --ui-grid-columns: var(--_ui-col-columns-${e});
        }`)),T=class extends s{static{this.styles=[w,t`
            :host {
                --ui-grid-mode-start: var(--ui-grid-gutter-start);
                --ui-grid-mode-end: var(--ui-grid-gutter-end);
                margin-inline: var(--ui-grid-gutter-start) var(--ui-grid-gutter-end);
            }

            :host(:dir(rtl)) {
                margin-inline: var(--ui-grid-gutter-end) var(--ui-grid-gutter-start);
            }
        `]}updated(e){super.updated(e);let t={span:b(this.span)};for(let e of l)t[e.name]=b(this[e.name]);let n=y(t);for(let e of l){let t=n[e.name];this.style.setProperty(`--_ui-col-start-${e.name}`,t.start),this.style.setProperty(`--_ui-col-end-${e.name}`,t.end),this.style.setProperty(`--_ui-col-display-${e.name}`,t.hidden?`none`:`block`),t.columns===void 0?this.style.removeProperty(`--_ui-col-columns-${e.name}`):this.style.setProperty(`--_ui-col-columns-${e.name}`,String(t.columns)),this.toggleAttribute(`data-columns-${e.name}`,t.columns!==void 0)}}render(){return n`<slot></slot>`}};e([i({reflect:!0})],T.prototype,`sm`,void 0),e([i({reflect:!0})],T.prototype,`md`,void 0),e([i({reflect:!0})],T.prototype,`lg`,void 0),e([i({reflect:!0})],T.prototype,`xlg`,void 0),e([i({reflect:!0})],T.prototype,`max`,void 0),e([i({reflect:!0})],T.prototype,`span`,void 0),T=e([r(`ui-column`)],T);var E=class extends s{static{this.styles=t`
        :host {
            display: block;
            margin-inline-start: var(--ui-grid-column-hang);
        }

        :host(:dir(rtl)) {
            margin-inline: initial var(--ui-grid-column-hang);
        }
    `}render(){return n`<slot></slot>`}};E=e([r(`ui-column-hang`)],E);
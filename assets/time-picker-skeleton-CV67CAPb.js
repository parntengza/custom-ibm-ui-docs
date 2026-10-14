import{C as e,Ct as t,_t as n,bt as r,ht as i,mt as a}from"./theme-switcher-BKi8EfZd.js";import{a as o,i as s,n as c,r as l}from"./skeleton-CJ3-DC_A.js";var u=class extends c{constructor(...e){super(...e),this.isOnlyTwo=!1}static{this.styles=[o,l,t`
            .row {
                display: flex;
                block-size: 64px;
            }

            .row > * {
                inline-size: 25%;
            }

            .row > :last-child,
            :host([is-only-two]) .row > :first-child {
                inline-size: 50%;
            }
        `]}render(){return r`<div class="row">${s}${s}${this.isOnlyTwo?n:s}</div>`}};e([a({type:Boolean,reflect:!0,attribute:`is-only-two`})],u.prototype,`isOnlyTwo`,void 0),u=e([i(`ui-time-picker-skeleton`)],u);
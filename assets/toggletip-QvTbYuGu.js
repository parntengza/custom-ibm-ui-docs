import{C as e,Ct as t,E as n,O as r,T as i,bt as a,ft as o,gt as s,ht as c,mt as l,tt as u,w as d,x as f}from"./theme-switcher-BKi8EfZd.js";var p=class extends i(d){constructor(...e){super(...e),this.label=``,this.localize=new f(this),this.placement=`bottom`,this.open=!1,this.bubbleId=u(`ui-toggletip`),this.returnFocus=!1,this.browserToggling=!1,this.reposition=()=>r(this.trigger,this.bubble,this.placement,10)}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[n,t`
        :host {
            display: inline-block;
            vertical-align: middle;
        }

        .trigger {
            display: grid;
            place-items: center;
            width: 24px;
            height: 24px;
            padding: 0;
            border: none;
            background: transparent;
            color: var(--ui-ink-muted);
            cursor: pointer;
        }

        .trigger:hover,
        .trigger[aria-expanded='true'] {
            color: var(--ui-ink);
        }

        .trigger:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: -2px;
        }

        .trigger svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        /* Carbon toggletip: the default (light) popover — layer surface, drop shadow, 12×6 caret, 16px padding */
        .bubble {
            position: absolute; /* document coordinates in the top layer: scrolls with the page, see position.ts */
            inset: auto;
            margin: 0;
            box-sizing: border-box;
            width: max-content; /* Carbon popover-content; a shrink-to-fit width would depend on where it lands */
            max-width: 288px;
            padding: var(--ui-space-md);
            border: none;
            border-radius: var(--ui-radius-xs);
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            filter: drop-shadow(0 2px 2px rgb(0 0 0 / 0.2));
            overflow: visible;
        }

        /* Carbon link-primary: readable on the bubble in every theme (the button blue is too dark on g90 / g100) */
        ::slotted(a) {
            color: var(--ui-link);
        }

        /* no fade: Carbon's toggletip shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}disconnectedCallback(){super.disconnectedCallback(),this.stopTracking()}show(){this.open=!0}hide(){this.open=!1}updated(e){if(e.has(`open`)){if(this.browserToggling)this.browserToggling=!1;else{let e=this.bubble.matches(`:popover-open`);this.open&&!e&&this.bubble.showPopover(),!this.open&&e&&this.bubble.hidePopover()}this.open?(requestAnimationFrame(this.reposition),window.addEventListener(`scroll`,this.reposition,!0),window.addEventListener(`resize`,this.reposition)):(this.stopTracking(),this.returnFocus&&this.trigger.focus(),this.returnFocus=!1),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}}stopTracking(){window.removeEventListener(`scroll`,this.reposition,!0),window.removeEventListener(`resize`,this.reposition)}hasFocus(){let e=this.getRootNode();return this.contains(e.activeElement)||!!this.shadowRoot?.activeElement}onBeforeToggle(e){let t=e.newState===`open`;t||(this.returnFocus=this.hasFocus()),t!==this.open&&(this.browserToggling=!0),this.open=t}onFocusOut(e){let t=e.relatedTarget;t&&!this.contains(t)&&!this.shadowRoot?.contains(t)&&(this.open=!1)}render(){return a`
            <button
                class="trigger"
                part="trigger"
                type="button"
                aria-label=${this.label||this.localize.t.common.moreInfo}
                aria-expanded=${this.open?`true`:`false`}
                aria-controls=${this.bubbleId}
                popovertarget=${this.bubbleId}
                @focusout=${this.onFocusOut}
            >
                <slot name="trigger">
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                        <path
                            d="M8.5 11V6.5h-2v1h1V11H6v1h4v-1h-1.5ZM8 3.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
                        />
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14ZM8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" />
                    </svg>
                </slot>
            </button>
            <div
                class="bubble"
                part="bubble"
                id=${this.bubbleId}
                popover="auto"
                role="group"
                aria-label=${this.label||this.localize.t.common.moreInfo}
                @beforetoggle=${this.onBeforeToggle}
                @focusout=${this.onFocusOut}
            >
                <slot></slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};e([l()],p.prototype,`label`,void 0),e([l({reflect:!0})],p.prototype,`placement`,void 0),e([l({type:Boolean,reflect:!0})],p.prototype,`open`,void 0),e([o(`.trigger`)],p.prototype,`trigger`,void 0),e([o(`.bubble`)],p.prototype,`bubble`,void 0),p=e([c(`ui-toggletip`)],p);
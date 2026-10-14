import{C as e,Ct as t,E as n,O as r,T as i,bt as a,ft as o,gt as s,ht as c,mt as l,tt as u,w as d}from"./theme-switcher-BKi8EfZd.js";var f=class extends i(d){constructor(...e){super(...e),this.definition=``,this.placement=`bottom`,this.open=!1,this.openOnHover=!1,this.bubbleId=u(`ui-definition-tooltip`),this.scheduleHide=()=>{clearTimeout(this.hideTimer),this.hideTimer=setTimeout(()=>this.open=!1,100)},this.cancelHide=()=>clearTimeout(this.hideTimer),this.reposition=()=>r(this.term,this.bubble,this.placement,6),this.onDocumentKeydown=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this.open=!1)}}static{this.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0}}static{this.styles=[n,t`
        :host {
            display: inline;
        }

        .term {
            display: inline;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: 0;
            border-block-end: 1px dotted var(--ui-hairline-strong);
            background: transparent;
            color: var(--ui-ink);
            font: inherit;
            letter-spacing: inherit;
            cursor: pointer;
            outline: none;
        }

        .term:hover,
        .term:focus-visible {
            border-block-end-color: var(--ui-primary); /* border-interactive */
        }

        .term:focus-visible {
            outline: 2px solid var(--ui-focus);
            outline-offset: 1px;
        }

        /* Carbon popover high-contrast without drop shadow: 8/16px padding, body-01, 176px max */
        .bubble {
            --_caret-w: 12px;
            --_caret-h: 6px;

            position: absolute; /* document coordinates in the top layer, see position.ts */
            inset: auto;
            box-sizing: border-box;
            margin: 0;
            max-width: 176px;
            padding: var(--ui-space-xs) var(--ui-space-md);
            border: none;
            border-radius: var(--ui-radius-xs);
            background-color: var(--ui-inverse-surface-1);
            color: var(--ui-inverse-ink);
            font: var(--ui-font-body-sm);
            line-height: 20px; /* body-01 */
            letter-spacing: var(--ui-tracking-body);
            overflow-wrap: break-word;
            overflow: visible;
        }

        /* no fade: Carbon's definition tooltip shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.hideTimer),this.stopTracking()}updated(e){if(!e.has(`open`))return;let t=this.bubble.matches(`:popover-open`);this.open&&!t?(this.bubble.showPopover(),this.reposition(),window.addEventListener(`scroll`,this.reposition,!0),window.addEventListener(`resize`,this.reposition),document.addEventListener(`keydown`,this.onDocumentKeydown,!0)):!this.open&&t&&(this.bubble.hidePopover(),this.stopTracking()),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}stopTracking(){window.removeEventListener(`scroll`,this.reposition,!0),window.removeEventListener(`resize`,this.reposition),document.removeEventListener(`keydown`,this.onDocumentKeydown,!0)}onKeydown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open=!this.open)}onMousedown(e){e.button===0&&(this.open=!this.open)}render(){return a`
            <button
                class="term"
                part="trigger"
                type="button"
                tabindex="0"
                aria-controls=${this.bubbleId}
                aria-describedby=${this.bubbleId}
                aria-expanded=${this.open?`true`:`false`}
                @mousedown=${this.onMousedown}
                @keydown=${this.onKeydown}
                @focus=${()=>this.open=!0}
                @blur=${()=>this.open=!1}
                @pointerenter=${()=>{this.cancelHide(),this.openOnHover&&(this.open=!0)}}
                @pointerleave=${this.scheduleHide}
            >
                <slot></slot>
            </button>
            <div class="bubble" part="bubble" id=${this.bubbleId} popover="manual" role="tooltip" @pointerenter=${this.cancelHide} @pointerleave=${this.scheduleHide}>
                <slot name="definition">${this.definition}</slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};e([l()],f.prototype,`definition`,void 0),e([l({reflect:!0})],f.prototype,`placement`,void 0),e([l({type:Boolean,reflect:!0})],f.prototype,`open`,void 0),e([l({type:Boolean,attribute:`open-on-hover`})],f.prototype,`openOnHover`,void 0),e([o(`.term`)],f.prototype,`term`,void 0),e([o(`.bubble`)],f.prototype,`bubble`,void 0),f=e([c(`ui-definition-tooltip`)],f);
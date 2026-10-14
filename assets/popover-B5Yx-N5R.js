import{C as e,Ct as t,D as n,E as r,N as i,O as a,P as o,T as s,_t as c,bt as l,dt as u,ft as d,ht as f,mt as p,tt as m,w as h}from"./theme-switcher-BKi8EfZd.js";var g=class extends s(h){constructor(...e){super(...e),this.open=!1,this.placement=`bottom`,this.caret=!0,this.dropShadow=!0,this.highContrast=!1,this.tabTip=!1,this.autoClose=!1,this.label=``,this.contentId=m(`ui-popover`),this.reposition=()=>{let e=this.anchor;e&&(this.caret&&!this.tabTip?a(e,this.content,this.placement,10):n(e,this.content,this.placement,0))},this.onKeydown=e=>{if(e.key!==`Escape`||e.defaultPrevented||!this.open||!this.autoClose)return;e.preventDefault();let t=i(),n=!1;for(let e=t;e&&!n;e=e.parentNode??e.host??null)n=e===this;this.requestClose(`escape`),!this.open&&n&&this.updateComplete.then(()=>this.triggers[0]?.focus())},this.onPointerDown=e=>{let t=e.composedPath();t.includes(this)||t.includes(this.content)||this.requestClose(`outside`)}}static{this.styles=[r,t`
        :host {
            display: inline-block;
        }

        .bubble {
            --_caret-w: 12px;
            --_caret-h: 6px;

            position: absolute; /* document coordinates in the top layer, see position.ts */
            inset: auto;
            box-sizing: border-box;
            inline-size: max-content;
            max-inline-size: 368px;
            margin: 0;
            padding: 0;
            border: none;
            border-radius: var(--ui-radius-xs);
            background-color: var(--ui-surface-1);
            color: var(--ui-ink);
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
            overflow: visible;
        }

        :host([drop-shadow]:not([drop-shadow='false'])) .bubble {
            filter: drop-shadow(0 2px 2px rgb(0 0 0 / 0.2));
        }

        :host([high-contrast]) .bubble {
            background-color: var(--ui-inverse-surface-1);
            color: var(--ui-inverse-ink);
        }

        :host(:not([caret])) .caret,
        :host([caret='false']) .caret,
        :host([tab-tip]) .caret {
            display: none;
        }

        :host([tab-tip]) .bubble {
            border-radius: 0;
        }

        /* no fade: Carbon's popover shows and hides at once (its CSS has no transition or animation) */

        @media (forced-colors: active) {
            .bubble {
                border: 1px solid CanvasText;
            }
        }
    `]}disconnectedCallback(){super.disconnectedCallback(),this.stopTracking()}show(){this.open=!0}hide(){this.open=!1}get anchor(){return this.triggers[0]??this}updated(e){if(e.has(`open`)){let t=this.content.matches(`:popover-open`);this.open&&!t?(this.content.showPopover(),this.reposition(),window.addEventListener(`scroll`,this.reposition,!0),window.addEventListener(`resize`,this.reposition),this.addEventListener(`keydown`,this.onKeydown),document.addEventListener(`pointerdown`,this.onPointerDown,!0)):!this.open&&t&&(this.content.hidePopover(),this.stopTracking()),e.get(`open`)!==void 0&&this.dispatchEvent(new CustomEvent(`ui-toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))}else this.open&&(e.has(`placement`)||e.has(`caret`)||e.has(`tabTip`))&&this.reposition();this.syncTrigger()}syncTrigger(){let e=this.triggers[0];e&&(`expanded`in e?e.expanded=this.open:e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}stopTracking(){window.removeEventListener(`scroll`,this.reposition,!0),window.removeEventListener(`resize`,this.reposition),this.removeEventListener(`keydown`,this.onKeydown),document.removeEventListener(`pointerdown`,this.onPointerDown,!0)}requestClose(e){this.autoClose&&this.dispatchEvent(new CustomEvent(`ui-request-close`,{detail:{reason:e},bubbles:!0,composed:!0,cancelable:!0}))&&(this.open=!1)}render(){return l`
            <slot name="trigger" @slotchange=${this.syncTrigger}></slot>
            <div class="bubble" part="content" id=${this.contentId} popover="manual" role="group" aria-label=${this.label||c}>
                <slot></slot>
                <span class="caret" part="caret" aria-hidden="true"></span>
            </div>
        `}};e([p({type:Boolean,reflect:!0})],g.prototype,`open`,void 0),e([p({reflect:!0})],g.prototype,`placement`,void 0),e([p({reflect:!0,converter:o})],g.prototype,`caret`,void 0),e([p({reflect:!0,attribute:`drop-shadow`,converter:o})],g.prototype,`dropShadow`,void 0),e([p({type:Boolean,reflect:!0,attribute:`high-contrast`})],g.prototype,`highContrast`,void 0),e([p({type:Boolean,reflect:!0,attribute:`tab-tip`})],g.prototype,`tabTip`,void 0),e([p({type:Boolean,attribute:`auto-close`})],g.prototype,`autoClose`,void 0),e([p()],g.prototype,`label`,void 0),e([d(`.bubble`)],g.prototype,`content`,void 0),e([u({slot:`trigger`})],g.prototype,`triggers`,void 0),g=e([f(`ui-popover`)],g);
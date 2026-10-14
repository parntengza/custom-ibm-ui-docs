import{C as e,Ct as t,N as n,P as r,St as i,_t as a,bt as o,ft as s,ht as c,mt as l,ot as u,pt as d,w as f,x as p}from"./theme-switcher-BKi8EfZd.js";import{t as m}from"./spin-delay-Ag8fesN_.js";var h=class extends f{constructor(...e){super(...e),this.active=!0,this.small=!1,this.overlay=!1,this.description=``,this.contained=!1,this.delay=0,this.minDuration=0,this.shown=!1,this.localize=new p(this),this.previouslyFocused=null,this.trapping=!1,this.scopes=[],this.areaFocus=null,this.onFocusIn=e=>{let t=e.composedPath();t.includes(this)||this.isLayeredOnTop(t[0]??null)||this.focusTarget?.focus()},this.onKeydown=e=>{e.key!==`Tab`||this.isLayeredOnTop(e.composedPath()[0]??null)||(e.preventDefault(),this.focusTarget?.focus())}}static{this.styles=t`
        :host {
            display: inline-block;
        }

        :host([overlay]) {
            display: contents;
        }

        :host([contained]) {
            position: relative;
            display: block;
        }

        /* the area's own overlay: over just this box, under anything floating above the page */
        .overlay.contained {
            position: absolute;
            z-index: 1;
        }

        :host([hidden]) {
            display: none;
        }

        .overlay {
            position: fixed;
            inset: 0;
            z-index: 6000; /* Carbon z('overlay') */
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--ui-overlay);
            /* Carbon .cds--loading-overlay: $duration-slow-02 with the expressive standard easing (no token for either) */
            transition: background-color 700ms cubic-bezier(0.4, 0.14, 0.3, 1);
        }

        .overlay.stop,
        :host(:not([overlay])) .base.stop {
            display: none;
        }

        .focus {
            outline: none;
        }

        .base {
            inline-size: 88px;
            block-size: 88px;
            animation: rotate 690ms linear infinite;
        }

        :host([small]) .base {
            inline-size: 16px;
            block-size: 16px;
            line-height: 1rem;
        }

        svg {
            fill: transparent;
            inline-size: 100%;
            block-size: 100%;
        }

        circle {
            stroke-dasharray: 276.46 276.46;
            stroke-linecap: butt;
            stroke-width: 10;
        }

        :host([small]) circle {
            stroke-width: 16;
        }

        .stroke {
            stroke: var(--ui-interactive, var(--ui-primary));
            stroke-dashoffset: 52.53; /* 81 % of the circle */
        }

        :host([small]) .stroke {
            stroke-dashoffset: 143.76; /* 48 % */
        }

        .background {
            stroke: var(--ui-layer-accent);
            stroke-dashoffset: -22;
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .base {
                animation-duration: 2s;
            }

            .overlay {
                transition: none;
            }
        }

        @media (forced-colors: active) {
            .stroke {
                stroke: CanvasText;
            }

            .background {
                stroke: GrayText;
            }

            .overlay {
                background-color: Canvas;
                opacity: 0.8;
            }
        }
    `}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.spin?.update(this.active,this.delay,this.minDuration)}disconnectedCallback(){super.disconnectedCallback(),this.spin?.dispose(),this.stopTrap(),this.releaseArea()}willUpdate(e){(e.has(`active`)||e.has(`delay`)||e.has(`minDuration`))&&(this.spin??=new m(e=>this.shown=e),this.spin.update(this.active,this.delay,this.minDuration))}updated(e){this.toggleAttribute(`data-shown`,this.shown),(e.has(`shown`)||e.has(`overlay`)||e.has(`contained`))&&(this.overlay&&!this.contained&&this.shown?this.startTrap():this.stopTrap(),this.contained&&this.shown?this.holdArea():this.releaseArea())}inArea(e){for(let t=e;t;t=t.parentNode??t.host??null){if(t===this.shadowRoot)return!1;if(t===this)return!0}return!1}holdArea(){let e=n();this.inArea(e)&&(this.areaFocus=e,this.focusTarget?.focus())}releaseArea(){let e=this.areaFocus;if(this.areaFocus=null,!e?.isConnected)return;let t=n();(!t||t===document.body||t===this.focusTarget)&&e.focus()}get text(){return this.description||this.localize.t.common.loading}startTrap(){if(this.trapping)return;this.trapping=!0,this.previouslyFocused=document.activeElement instanceof HTMLElement&&document.activeElement!==document.body?document.activeElement:null,this.focusTarget?.focus();let e=this.getRootNode();this.scopes=e instanceof ShadowRoot?[document,e]:[document];for(let e of this.scopes)e.addEventListener(`focusin`,this.onFocusIn,!0);document.addEventListener(`keydown`,this.onKeydown,!0)}stopTrap(){if(!this.trapping)return;this.trapping=!1;for(let e of this.scopes)e.removeEventListener(`focusin`,this.onFocusIn,!0);this.scopes=[],document.removeEventListener(`keydown`,this.onKeydown,!0);let e=document.activeElement;(!e||e===document.body||this.shadowRoot?.contains(e)||e===this)&&this.previouslyFocused?.isConnected&&this.previouslyFocused.focus(),this.previouslyFocused=null}isLayeredOnTop(e){if(!(e instanceof Element))return!1;let t=e.closest(`dialog[open], [aria-modal="true"]`);return!!t&&!t.contains(this)}renderSpinner(){return o`<div class="base ${this.shown?``:`stop`}" part="base" aria-atomic="true" aria-live=${this.shown?`assertive`:`off`}>
            <svg part="spinner" viewBox="0 0 100 100" role="img" aria-label=${this.text}>
                <title .textContent=${this.text}></title>
                ${this.small?i`<circle class="background" cx="50%" cy="50%" r="42" />`:a}
                <circle class="stroke" cx="50%" cy="50%" r=${this.small?42:44} />
            </svg>
        </div>`}render(){if(this.contained)return this.renderContained();if(!this.overlay)return this.renderSpinner();let e=this.shown;return o`<div class="overlay ${e?``:`stop`}" part="overlay" role="presentation">
            <div class="focus" role=${u(e?`dialog`:void 0)} aria-modal=${u(e?`true`:void 0)} aria-label=${u(e?this.text:void 0)} tabindex=${u(e?-1:void 0)}>${this.renderSpinner()}</div>
        </div>`}renderContained(){let e=this.shown;return o`<div class="area" part="area" aria-busy=${u(e?`true`:void 0)} ?inert=${e}><slot></slot></div>
            <div class="overlay contained ${e?``:`stop`}" part="overlay">
                <div class="focus" role=${u(e?`group`:void 0)} aria-label=${u(e?this.text:void 0)} tabindex=${u(e?-1:void 0)}>${this.renderSpinner()}</div>
            </div>`}};e([l({reflect:!0,converter:r})],h.prototype,`active`,void 0),e([l({type:Boolean,reflect:!0})],h.prototype,`small`,void 0),e([l({type:Boolean,reflect:!0})],h.prototype,`overlay`,void 0),e([l()],h.prototype,`description`,void 0),e([l({type:Boolean,reflect:!0})],h.prototype,`contained`,void 0),e([l({type:Number})],h.prototype,`delay`,void 0),e([l({type:Number,attribute:`min-duration`})],h.prototype,`minDuration`,void 0),e([d()],h.prototype,`shown`,void 0),e([s(`.focus`)],h.prototype,`focusTarget`,void 0),h=e([c(`ui-loading`)],h);
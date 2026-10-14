import{C as e,Ct as t,_t as n,bt as r,ht as i,mt as a,w as o,x as s}from"./theme-switcher-BKi8EfZd.js";var c=class extends o{constructor(...e){super(...e),this.status=`active`,this.successDelay=1500,this.iconLabel=``,this.localize=new s(this),this.internals=this.attachInternals()}static{this.styles=t`
        :host {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 32px;
            font-family: var(--ui-font-family);
            color: var(--ui-ink-muted);
        }

        .animation {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 16px;
            margin-inline-end: var(--ui-space-xs);
        }

        svg {
            width: 16px;
            height: 16px;
        }

        .spinner {
            animation: rotate 690ms linear infinite;
        }

        .track {
            fill: none;
            stroke: var(--ui-layer-accent);
            stroke-width: 16;
        }

        .stroke {
            fill: none;
            stroke: var(--ui-primary);
            stroke-width: 16;
            stroke-dasharray: 276.46;
            stroke-dashoffset: 52; /* ~81% of the circle, like Carbon's small loader */
            stroke-linecap: butt;
        }

        .check {
            fill: var(--ui-success);
        }

        /* drawn at once: Carbon's finished icon (CheckmarkFilled) doesn't move */
        .check .mark {
            fill: none;
            stroke: var(--ui-on-primary);
            stroke-width: 1.5;
        }

        .error {
            fill: var(--ui-error);
        }

        .text {
            font: var(--ui-font-body-sm);
            letter-spacing: var(--ui-tracking-body);
        }

        @keyframes rotate {
            to {
                transform: rotate(360deg);
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .spinner {
                animation-duration: 0s;
            }
        }

        @media (forced-colors: active) {
            .track {
                stroke: GrayText;
            }

            .stroke,
            .check .mark {
                stroke: CanvasText;
            }

            .check {
                fill: Canvas;
            }
        }

    `}connectedCallback(){super.connectedCallback(),this.internals.ariaLive=`polite`}updated(e){e.has(`status`)&&(clearTimeout(this.timer),this.status===`finished`&&(this.timer=setTimeout(()=>this.dispatchEvent(new CustomEvent(`ui-success`,{bubbles:!0,composed:!0})),this.successDelay)))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timer)}renderIcon(){let e=this.localize.t.common,t={active:e.loading,finished:e.loadingFinished,error:e.loadingError,inactive:``},i=this.iconLabel||t[this.status];switch(this.status){case`active`:return r`<svg class="spinner" viewBox="0 0 100 100" role="img" aria-label=${i}>
                    <circle class="track" cx="50" cy="50" r="44" /><circle class="stroke" cx="50" cy="50" r="44" />
                </svg>`;case`finished`:return r`<svg class="check" viewBox="0 0 16 16" role="img" aria-label=${i}>
                    <circle cx="8" cy="8" r="8" /><path class="mark" d="M4.5 8.2 7 10.7l4.5-5" />
                </svg>`;case`error`:return r`<svg class="error" viewBox="0 0 16 16" role="img" aria-label=${i}>
                    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm3 9-1 1-2-2-2 2-1-1 2-2-2-2 1-1 2 2 2-2 1 1-2 2z" />
                </svg>`;default:return n}}render(){return r`
            <span class="animation" part="icon">${this.renderIcon()}</span>
            <span class="text" part="text"><slot></slot></span>
        `}};e([a({reflect:!0})],c.prototype,`status`,void 0),e([a({type:Number,attribute:`success-delay`})],c.prototype,`successDelay`,void 0),e([a({attribute:`icon-label`})],c.prototype,`iconLabel`,void 0),c=e([i(`ui-inline-loading`)],c);
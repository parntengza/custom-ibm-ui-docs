import{C as e,Ct as t,_t as n,bt as r,h as i,ht as a,mt as o,st as s,w as c,x as l}from"./theme-switcher-BKi8EfZd.js";import"./tabs-CbT56wPv.js";import"./button-BVtMUNlp.js";import"./icon-button-Cj1wsc-u.js";import"./overflow-menu-BtpSVDpJ.js";import{n as u,t as d}from"./static-html-DNRYTeVn.js";function f(e,t,n){return t?!e||n===`one`?`card`:n===`two`?`header-body`:`body`:null}function p(e){let t=e.productive&&e.hasOverflowActions,n=e.hasPrimaryButton&&e.primaryButtonPlacement===`top`,r=e.hasActionIcons||t||n,i=e.actionsPlacement===`top`,a=r&&i,o=r&&!i,s=e.hasSecondaryButton||e.hasPrimaryButton&&e.primaryButtonPlacement===`bottom`;return{zone:f(e.productive,e.clickable,e.clickZone),overflow:t,headerActions:a,footerActions:o,iconSize:e.productive&&!i?`md`:`sm`,overflowPlacement:i?`bottom-end`:`top-end`,headerPrimary:a&&n,headerSecondary:a&&e.hasSecondaryButton&&e.secondaryButtonPlacement===`top`,footerPrimary:e.hasPrimaryButton&&e.primaryButtonPlacement===`bottom`,footerSecondary:e.hasSecondaryButton&&e.secondaryButtonPlacement===`bottom`,footerPrimaryKind:e.productive?`ghost`:e.primaryButtonKind,footerSecondaryKind:e.productive?`ghost`:e.secondaryButtonKind,footer:o||s,footerNoButton:!s}}function m(e){return{labelOnly:e.hasLabel&&!e.hasTitle&&!e.hasDescription,hasLabel:e.hasLabel,large:e.titleSize===`large`,largeOrLabel:e.hasTitle&&(e.hasLabel||e.titleSize===`large`)}}function h(e,t,n){return t.includes(e)?e:n}var g=new Set([`h1`,`h2`,`h3`,`h4`,`h5`,`h6`]),_=[`top`,`bottom`],v=`bottom`,y=`true`,b=t`
    :host {
        display: block;
    }

    :host([hidden]) {
        display: none;
    }

    /* Carbon's global box-sizing */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* _card.scss .c4p--card: 1px transparent border, $layer-01, $text-primary */
    .card {
        position: relative;
        height: 100%;
        border: 1px solid transparent;
        background-color: var(--ui-surface-1);
        color: var(--ui-ink);
        font-family: var(--ui-font-family);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    /* .c4p--card__clickable: border-tile-01, a pointer, layer-hover-01 under it (110ms with the browser's ease: no easing given) */
    .zone {
        position: relative;
        cursor: pointer;
        transition: background-color var(--ui-duration-moderate);
    }

    .card.zone {
        border-color: var(--ui-border-tile);
    }

    .zone:hover {
        background-color: var(--ui-ghost-hover);
    }

    /* the zone's button: covers the zone under its controls, so the controls stay its siblings, not its content */
    .trigger {
        position: absolute;
        inset: 0;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        font: inherit;
        outline: 2px solid transparent;
        outline-offset: -2px;
        /* above the content, which is positioned beside media (.media + .content); the controls come later at z-index 1 */
        z-index: 1;
    }

    /* on the card it covers the 1px border too, where Carbon's outline (offset -2px) starts */
    .card > .trigger {
        inset: -1px;
    }

    /* .c4p--card__clickable:focus: focus-outline('outline'), on :focus as Carbon (a click shows it too) */
    .trigger:focus {
        outline-color: var(--ui-focus);
    }

    /* the controls in a clickable zone sit above its button */
    .actions,
    .footer-button,
    .body ::slotted(:is(a, button, input, select, textarea, [tabindex], ui-button, ui-icon-button, ui-link, ui-overflow-menu)) {
        position: relative;
        z-index: 1;
    }

    /* .c4p--card__media-left */
    .media-left {
        display: flex;
        flex-direction: row;
    }

    .media-left .content {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .media-left .footer {
        align-self: flex-end;
        margin-block-start: auto;
    }

    .media ::slotted(*) {
        display: block;
        max-inline-size: 100%;
    }

    /* .c4p--card__media + .c4p--card__content-container: the decorator places itself under the media */
    .media + .content {
        position: relative;
    }

    /* .c4p--card__header: $spacing-05, nothing at the end (the decorator sits there) */
    .header {
        padding: var(--ui-space-md);
        padding-inline-end: 0;
    }

    .header.label-only {
        padding-block-end: var(--ui-space-xs);
    }

    .header-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header-container.has-actions {
        padding-inline-end: var(--ui-space-xs);
    }

    .header-container.has-decorator {
        inline-size: 100%;
        padding-inline-end: var(--ui-space-xl);
    }

    .header-container.has-decorator.has-actions {
        padding-inline-end: 40px; /* $spacing-08 */
    }

    .header-container.has-decorator.large-or-label {
        padding-inline-end: var(--ui-space-xxl);
    }

    /* label-01 */
    .label,
    .description {
        font: var(--ui-font-caption);
        line-height: 16px;
        letter-spacing: var(--ui-tracking-caption);
    }

    .label {
        margin-block-end: 2px; /* $spacing-01 */
    }

    .label-only .label {
        margin-block-end: 0;
    }

    .description {
        margin-block-start: 2px;
    }

    /* .c4p--card__body: body-compact-01, $spacing-05 except on top */
    .body {
        padding: var(--ui-space-md);
        padding-block-start: 0;
        font: var(--ui-font-body-sm);
        line-height: 18px;
        letter-spacing: var(--ui-tracking-body);
    }

    .footer {
        display: flex;
        justify-content: flex-end;
    }

    .actions {
        display: flex;
        flex-direction: row;
    }

    /* .c4p--card__pictogram */
    .pictogram {
        padding-block-start: var(--ui-space-md);
        padding-inline-start: var(--ui-space-md);
        /* Carbon's reset (line-height 1): an inline pictogram's line box, whatever the page sets */
        line-height: 1;
    }

    /* .c4p--card__header__inner-wrapper--decorator: 16px from the top and the end */
    .decorator {
        position: absolute;
        z-index: 1;
        inset-block-start: var(--ui-space-md);
        inset-inline-end: var(--ui-space-md);
    }

    @media (forced-colors: active) {
        .card {
            border-color: CanvasText;
        }

        .trigger:focus {
            outline-color: Highlight;
        }
    }
`,x=class extends c{constructor(...e){super(...e),this.heading=``,this.headingLevel=`h2`,this.label=``,this.description=``,this.clickable=!1,this.disabled=!1,this.primaryButtonText=``,this.primaryButtonHref=``,this.primaryButtonDisabled=!1,this.secondaryButtonText=``,this.secondaryButtonHref=``,this.secondaryButtonDisabled=!1,this.slots=new i(this),this.localize=new l(this),this.onActionsSlotChange=()=>this.sizeActions(this.layout()),this.onZoneClick=()=>{this.disabled||this.dispatchEvent(new CustomEvent(`ui-click`,{bubbles:!0,composed:!0}))},this.onPrimaryClick=()=>{this.primaryButtonDisabled||this.dispatchEvent(new CustomEvent(`ui-primary-button-click`,{bubbles:!0,composed:!0}))},this.onSecondaryClick=()=>{this.secondaryButtonDisabled||this.dispatchEvent(new CustomEvent(`ui-secondary-button-click`,{bubbles:!0,composed:!0}))}}layout(){return p({productive:this.productive,clickable:this.clickable,clickZone:this.clickZoneValue,actionsPlacement:this.actionsPlacementValue,hasActionIcons:this.slots.has(`actions`),hasOverflowActions:this.hasOverflow,hasPrimaryButton:!!this.primaryButtonText,primaryButtonPlacement:this.primaryPlacementValue,primaryButtonKind:this.primaryKindValue,hasSecondaryButton:!!this.secondaryButtonText,secondaryButtonPlacement:this.secondaryPlacementValue,secondaryButtonKind:this.secondaryKindValue})}updated(e){super.updated(e);let t=this.layout();this.toggleAttribute(`data-has-footer`,t.footer),this.toggleAttribute(`data-overflow`,t.overflow),this.sizeActions(t)}sizeActions(e){let t=this.renderRoot.querySelector(`slot[name="actions"]`);for(let n of t?.assignedElements()??[])n.localName===`ui-icon-button`&&n.getAttribute(`size`)!==e.iconSize&&n.setAttribute(`size`,e.iconSize)}get hasLabel(){return!!this.label||this.slots.has(`label`)}get hasHeading(){return!!this.heading||this.slots.has(`title`)}get hasDescription(){return!!this.description||this.slots.has(`description`)}triggerName(){return this.hasHeading?`heading`:this.hasLabel?`label`:`body`}renderTrigger(e,t){return e===t?r`<button
            class="trigger"
            part="click-zone"
            type="button"
            tabindex="0"
            aria-labelledby=${this.triggerName()}
            aria-describedby=${this.hasDescription?`description`:n}
            aria-disabled=${this.disabled?y:n}
            @click=${this.onZoneClick}
        ></button>`:n}renderIcons(e){return e.overflow?r`<ui-layer level="2" class="overflow-layer">
                <ui-overflow-menu part="overflow" size=${e.iconSize} placement=${e.overflowPlacement} label=${this.overflowLabel()}>
                    <slot name="overflow"></slot>
                </ui-overflow-menu>
            </ui-layer>`:this.slots.has(`actions`)?r`<slot name="actions" @slotchange=${this.onActionsSlotChange}></slot>`:n}overflowLabel(){return this.localize.t.common.options}iconSlot(e){return this.slots.has(e)?r`<slot name=${e} slot="suffix"></slot>`:n}renderHeaderActions(e){if(!e.headerActions)return n;let t=e.headerSecondary?r`<span class="header-button"
                  ><ui-button part="secondary-button" kind="ghost" size="sm" href=${this.secondaryButtonHref} ?disabled=${this.secondaryButtonDisabled} @click=${this.onSecondaryClick}
                      >${this.secondaryButtonText}${this.iconSlot(`secondary-button-icon`)}</ui-button
                  ></span
              >`:n,i=e.headerPrimary?r`<span class="header-button"
                  ><ui-button part="primary-button" kind="ghost" size="sm" ?disabled=${this.primaryButtonDisabled} @click=${this.onPrimaryClick}
                      >${this.primaryButtonText}${this.iconSlot(`primary-button-icon`)}</ui-button
                  ></span
              >`:n;return r`<div class="actions actions-header" part="actions">${this.renderIcons(e)}${t}${i}</div>`}renderTitle(){if(!this.hasHeading)return n;let e=d(g.has(this.headingLevel)?this.headingLevel:`h2`);return u`<${e} class="title" id="heading" part="title"><slot name="title">${this.heading}</slot></${e}>`}renderHeader(e){let t=m({hasLabel:this.hasLabel,hasTitle:this.hasHeading,hasDescription:this.hasDescription,titleSize:this.titleSizeValue}),i=this.slots.has(`decorator`),a=s({"header-container":!0,"has-actions":e.headerActions,"has-decorator":i,"large-or-label":t.largeOrLabel});return r`<div class=${s({header:!0,"label-only":t.labelOnly,"has-label":t.hasLabel,"title-lg":t.large})} part="header">
            <div class=${a}>
                <div class="title-container">
                    ${t.hasLabel?r`<p class="label" id="label" part="label"><slot name="label">${this.label}</slot></p>`:n}${this.renderTitle()}${this.hasDescription?r`<p class="description" id="description" part="description"><slot name="description">${this.description}</slot></p>`:n}
                </div>
                ${this.renderHeaderActions(e)}${i?r`<div class="decorator" part="decorator"><slot name="decorator"></slot></div>`:n}
            </div>
        </div>`}renderFooter(e){if(!e.footer)return n;let t=e.footerSecondary?r`<ui-button
                  class="footer-button"
                  part="secondary-button"
                  kind=${e.footerSecondaryKind}
                  size="md"
                  href=${this.secondaryButtonHref}
                  ?disabled=${this.secondaryButtonDisabled}
                  @click=${this.onSecondaryClick}
                  >${this.secondaryButtonText}${this.iconSlot(`secondary-button-icon`)}</ui-button
              >`:n,i=e.footerPrimary?r`<ui-button
                  class="footer-button"
                  part="primary-button"
                  kind=${e.footerPrimaryKind}
                  size="md"
                  href=${this.primaryButtonHref}
                  ?disabled=${this.primaryButtonDisabled}
                  @click=${this.onPrimaryClick}
                  >${this.primaryButtonText}${this.iconSlot(`primary-button-icon`)}</ui-button
              >`:n,a=e.footerActions?r`<div class="actions" part="actions">${this.renderIcons(e)}</div>`:n;return r`<div class=${s({footer:!0,"no-button":e.footerNoButton})} part="footer">${t}${i}${a}</div>`}renderContent(e){let t=e.zone;return r`<div class="content" part="content">
            <div class=${s({"header-body":!0,zone:t===`header-body`})}>
                ${this.renderTrigger(t,`header-body`)}
                <div class="header-wrapper">
                    ${this.renderHeader(e)}
                    <div class=${s({body:!0,zone:t===`body`})} id="body" part="body">${this.renderTrigger(t,`body`)}<slot></slot></div>
                </div>
            </div>
            ${this.renderFooter(e)}
        </div>`}};e([o()],x.prototype,`heading`,void 0),e([o({attribute:`heading-level`})],x.prototype,`headingLevel`,void 0),e([o()],x.prototype,`label`,void 0),e([o()],x.prototype,`description`,void 0),e([o({type:Boolean,reflect:!0})],x.prototype,`clickable`,void 0),e([o({type:Boolean,reflect:!0})],x.prototype,`disabled`,void 0),e([o({attribute:`primary-button-text`})],x.prototype,`primaryButtonText`,void 0),e([o({attribute:`primary-button-href`})],x.prototype,`primaryButtonHref`,void 0),e([o({type:Boolean,reflect:!0,attribute:`primary-button-disabled`})],x.prototype,`primaryButtonDisabled`,void 0),e([o({attribute:`secondary-button-text`})],x.prototype,`secondaryButtonText`,void 0),e([o({attribute:`secondary-button-href`})],x.prototype,`secondaryButtonHref`,void 0),e([o({type:Boolean,reflect:!0,attribute:`secondary-button-disabled`})],x.prototype,`secondaryButtonDisabled`,void 0);var S=class extends x{constructor(...e){super(...e),this.productive=!0,this.clickZone=`one`,this.actionsPlacement=`top`,this.titleSize=`default`,this.overflowAriaLabel=``,this.primaryButtonPlacement=`bottom`,this.secondaryButtonPlacement=`bottom`}static{this.styles=[b,t`
            /* _productive-card.scss */
            .card {
                display: flex;
                flex-direction: column;
            }

            .title {
                font: var(--ui-font-heading-compact-02);
                letter-spacing: 0;
            }

            .title-lg .title {
                font: var(--ui-font-heading-03);
            }

            .body {
                padding-block-start: var(--ui-space-xs);
            }

            .footer {
                align-items: center;
                justify-content: space-between;
                border-block-start: 1px solid var(--ui-row-divider);
            }

            .footer.no-button {
                justify-content: flex-end;
            }

            .actions {
                margin: 0;
                min-block-size: var(--ui-space-xl);
            }

            .actions-header {
                margin-block-start: calc(-1 * var(--ui-space-xxs));
            }

            .title-lg .actions-header,
            .has-label .actions-header {
                margin-block-start: 0;
            }

            /* .c4p--card__actions-header-ghost-button: 32px tall, 10px each side, a 24px layer-hover-01 rule before it */
            .header-button {
                position: relative;
                display: inline-flex;
            }

            .header-button ui-button::part(base) {
                min-block-size: var(--ui-space-xl);
                padding-inline: calc(2px + var(--ui-space-xs));
            }

            .header-button::before {
                content: '';
                position: absolute;
                z-index: 1;
                inset-block-start: var(--ui-space-xxs);
                inset-inline-start: 0;
                block-size: var(--ui-space-lg);
                inline-size: 0.05rem;
                background-color: var(--ui-ghost-hover);
                pointer-events: none;
            }

            .header-button:hover::before,
            .header-button:hover + .header-button::before {
                opacity: 0;
            }

            .header-button:first-child:not(:last-child)::before {
                display: none;
            }

            .header-container {
                align-items: flex-start;
            }

            .content {
                display: flex;
                flex: 1;
                flex-direction: column;
            }

            .header-body {
                flex: 1;
            }
        `]}get clickZoneValue(){return h(this.clickZone,[`one`,`two`,`three`],`one`)}get actionsPlacementValue(){return h(this.actionsPlacement,_,`top`)}get primaryPlacementValue(){return h(this.primaryButtonPlacement,_,v)}get secondaryPlacementValue(){return h(this.secondaryButtonPlacement,_,v)}get primaryKindValue(){return`ghost`}get secondaryKindValue(){return`ghost`}get titleSizeValue(){return h(this.titleSize,[`default`,`large`],`default`)}get hasOverflow(){return this.slots.has(`overflow`)}overflowLabel(){return this.overflowAriaLabel||super.overflowLabel()}render(){let e=this.layout();return r`<div class=${s({card:!0,zone:e.zone===`card`})} part="base" aria-disabled=${this.disabled?y:n}>
            ${this.renderTrigger(e.zone,`card`)}${this.renderContent(e)}
        </div>`}};e([o({reflect:!0,attribute:`click-zone`})],S.prototype,`clickZone`,void 0),e([o({reflect:!0,attribute:`actions-placement`})],S.prototype,`actionsPlacement`,void 0),e([o({reflect:!0,attribute:`title-size`})],S.prototype,`titleSize`,void 0),e([o({attribute:`overflow-aria-label`})],S.prototype,`overflowAriaLabel`,void 0),e([o({reflect:!0,attribute:`primary-button-placement`})],S.prototype,`primaryButtonPlacement`,void 0),e([o({reflect:!0,attribute:`secondary-button-placement`})],S.prototype,`secondaryButtonPlacement`,void 0),S=e([a(`ui-productive-card`)],S);var C=class extends x{constructor(...e){super(...e),this.productive=!1,this.mediaPosition=`top`,this.primaryButtonKind=`primary`,this.secondaryButtonKind=`secondary`}static{this.styles=[b,t`
            /* _expressive-card.scss */
            .title {
                font: var(--ui-font-heading-03);
                letter-spacing: 0;
            }

            /* _card.scss .c4p--card__icon:hover: the card's layer-hover instead of the ghost button's background-hover
               (its :active colour doesn't show: the ghost button's icon fill wins) */
            ::slotted(ui-icon-button[slot='actions']) {
                --ui-canvas-hover: var(--ui-ghost-hover);
            }
        `]}get clickZoneValue(){return`one`}get actionsPlacementValue(){return v}get primaryPlacementValue(){return v}get secondaryPlacementValue(){return v}get primaryKindValue(){return h(this.primaryButtonKind,[`primary`,`ghost`],`primary`)}get secondaryKindValue(){return h(this.secondaryButtonKind,[`secondary`,`ghost`],`secondary`)}get titleSizeValue(){return`default`}get hasOverflow(){return!1}updated(e){super.updated(e),this.toggleAttribute(`data-has-media`,this.slots.has(`media`))}render(){let e=this.layout(),t=this.slots.has(`media`),i=s({card:!0,zone:e.zone===`card`,"media-left":t&&this.mediaPosition===`left`});return r`<div class=${i} part="base" aria-disabled=${this.disabled?y:n}>
            ${this.renderTrigger(e.zone,`card`)}${t?r`<div class="media" part="media"><slot name="media"></slot></div>`:n}${this.slots.has(`pictogram`)?r`<div class="pictogram" part="pictogram"><slot name="pictogram"></slot></div>`:n}${this.renderContent(e)}
        </div>`}};e([o({reflect:!0,attribute:`media-position`})],C.prototype,`mediaPosition`,void 0),e([o({reflect:!0,attribute:`primary-button-kind`})],C.prototype,`primaryButtonKind`,void 0),e([o({reflect:!0,attribute:`secondary-button-kind`})],C.prototype,`secondaryButtonKind`,void 0),C=e([a(`ui-expressive-card`)],C);
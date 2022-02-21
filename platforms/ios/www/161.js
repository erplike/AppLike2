(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[161],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast", function() { return Toast; });
/* harmony import */ var _chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-09ec7fc0.js */ "./node_modules/@ionic/core/dist/esm/chunk-09ec7fc0.js");
/* harmony import */ var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-1074393c.js */ "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
/* harmony import */ var _chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-d83bfeae.js */ "./node_modules/@ionic/core/dist/esm/chunk-d83bfeae.js");
/* harmony import */ var _chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-ba834eff.js */ "./node_modules/@ionic/core/dist/esm/chunk-ba834eff.js");
/* harmony import */ var _chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunk-cae2ca23.js */ "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js");






/**
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (AnimationC, baseEl, position) => {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', '-100%', top);
            break;
        case 'middle':
            const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperAnimation.fromTo('translateY', '100%', bottom);
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.155,1.105,.295,1.12)')
        .duration(400)
        .add(wrapperAnimation));
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (AnimationC, baseEl, position) => {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperAnimation.fromTo('translateY', top, '-100%');
            break;
        case 'middle':
            wrapperAnimation.fromTo('opacity', 0.99, 0);
            break;
        default:
            wrapperAnimation.fromTo('translateY', bottom, '100%');
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (AnimationC, baseEl, position) => {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
    const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
    switch (position) {
        case 'top':
            wrapperEl.style.top = top;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        case 'middle':
            const topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
            wrapperEl.style.top = `${topPosition}px`;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
        default:
            wrapperEl.style.bottom = bottom;
            wrapperAnimation.fromTo('opacity', 0.01, 1);
            break;
    }
    return Promise.resolve(baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .add(wrapperAnimation));
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = (AnimationC, baseEl) => {
    const baseAnimation = new AnimationC();
    const wrapperAnimation = new AnimationC();
    const hostEl = baseEl.host || baseEl;
    const wrapperEl = baseEl.querySelector('.toast-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    wrapperAnimation.fromTo('opacity', 0.99, 0);
    return Promise.resolve(baseAnimation
        .addElement(hostEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(300)
        .add(wrapperAnimation));
};

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
class Toast {
    constructor(hostRef) {
        Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        /**
         * How many milliseconds to wait before hiding the toast. By default, it will show
         * until `dismiss()` is called.
         */
        this.duration = 0;
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = false;
        /**
         * The position of the toast on the screen.
         */
        this.position = 'bottom';
        /**
         * If `true`, the close button will be displayed.
         */
        this.showCloseButton = false;
        /**
         * If `true`, the toast will be translucent.
         */
        this.translucent = false;
        /**
         * If `true`, the toast will animate.
         */
        this.animated = true;
        this.didPresent = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionToastDidPresent", 7);
        this.willPresent = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionToastWillPresent", 7);
        this.willDismiss = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionToastWillDismiss", 7);
        this.didDismiss = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionToastDidDismiss", 7);
    }
    /**
     * Present the toast overlay after it has been created.
     */
    async present() {
        await Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["d"])(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);
        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
        }
    }
    /**
     * Dismiss the toast overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the toast.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    dismiss(data, role) {
        if (this.durationTimeout) {
            clearTimeout(this.durationTimeout);
        }
        return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    }
    /**
     * Returns a promise that resolves when the toast did dismiss.
     */
    onDidDismiss() {
        return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el, 'ionToastDidDismiss');
    }
    /**
     * Returns a promise that resolves when the toast will dismiss.
     */
    onWillDismiss() {
        return Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el, 'ionToastWillDismiss');
    }
    getButtons() {
        const buttons = this.buttons
            ? this.buttons.map(b => {
                return (typeof b === 'string')
                    ? { text: b }
                    : b;
            })
            : [];
        if (this.showCloseButton) {
            buttons.push({
                text: this.closeButtonText || 'Close',
                handler: () => this.dismiss(undefined, 'cancel')
            });
        }
        return buttons;
    }
    async buttonClick(button) {
        const role = button.role;
        if (Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["i"])(role)) {
            return this.dismiss(undefined, role);
        }
        const shouldDismiss = await this.callButtonHandler(button);
        if (shouldDismiss) {
            return this.dismiss(undefined, button.role);
        }
        return Promise.resolve();
    }
    async callButtonHandler(button) {
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            try {
                const rtn = await Object(_chunk_d83bfeae_js__WEBPACK_IMPORTED_MODULE_2__["s"])(button.handler);
                if (rtn === false) {
                    // if the return value of the handler is false then do not dismiss
                    return false;
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    hostData() {
        const mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return {
            style: {
                zIndex: 60000 + this.overlayIndex,
            },
            class: Object.assign({ [mode]: true }, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color), Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass), { 'toast-translucent': this.translucent })
        };
    }
    renderButtons(buttons, side) {
        if (buttons.length === 0) {
            return;
        }
        const mode = Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        const buttonGroupsClasses = {
            'toast-button-group': true,
            [`toast-button-group-${side}`]: true
        };
        return (Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: buttonGroupsClasses }, buttons.map(b => Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b) }, Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-button-inner" }, b.icon &&
            Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", { name: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "toast-icon" }), b.text), mode === 'md' && Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })))));
    }
    __stencil_render() {
        const allButtons = this.getButtons();
        const startButtons = allButtons.filter(b => b.side === 'start');
        const endButtons = allButtons.filter(b => b.side !== 'start');
        const wrapperClass = {
            'toast-wrapper': true,
            [`toast-${this.position}`]: true
        };
        return (Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: wrapperClass }, Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-container" }, this.renderButtons(startButtons, 'start'), Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-content" }, this.header !== undefined &&
            Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-header" }, this.header), this.message !== undefined &&
            Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "toast-message", innerHTML: Object(_chunk_cae2ca23_js__WEBPACK_IMPORTED_MODULE_4__["s"])(this.message) })), this.renderButtons(endButtons, 'end'))));
    }
    get el() { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    render() { return Object(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_09ec7fc0_js__WEBPACK_IMPORTED_MODULE_0__["H"], this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}\@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"; }
}
const buttonClass = (button) => {
    return Object.assign({ 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined, [`toast-button-${button.role}`]: button.role !== undefined, 'ion-focusable': true, 'ion-activatable': true }, Object(_chunk_ba834eff_js__WEBPACK_IMPORTED_MODULE_3__["g"])(button.cssClass));
};




/***/ })

}]);
//# sourceMappingURL=161.js.map
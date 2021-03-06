(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['ngx-selectable-list'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListService = /** @class */ (function () {
    function SelectableListService() {
        this.selecting = false;
        this.selectedItemIds = [];
        this.single = new core.EventEmitter();
        this.multiple = new core.EventEmitter();
        this.mode = Mode.single;
        this.clearSelection = new core.EventEmitter();
    }
    return SelectableListService;
}());
/** @enum {string} */
var Mode = {
    single: 'Single',
    multiple_tap: 'Multiple (tap activated)',
    multiple_press: 'Multiple (press activated)',
    both: 'Single and multiple (press activated)',
};
var SERVICE = new SelectableListService();
var SelectableListDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} view
     * @param {?} resolver
     * @param {?} selectableListService
     */
    function SelectableListDirective(el, renderer, view, resolver, selectableListService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.view = view;
        this.resolver = resolver;
        this.selectableListService = selectableListService;
        this.isSelecting = new core.EventEmitter();
        this.single = new core.EventEmitter();
        this.multiple = new core.EventEmitter();
        // Since services are singletons let's set some defaults
        this.selectableListService.selecting = false;
        this.selectableListService.selectedItemIds = [];
        this.selectableListService.single = new core.EventEmitter();
        this.selectableListService.multiple = new core.EventEmitter();
        this.selectableListService.mode = Mode.single;
        this.singleSubscription = this.selectableListService.single.subscribe(function (id) { return _this.single.emit(id); });
        this.multipleSubscription = this.selectableListService.multiple.subscribe(function (id) { return _this.selectItem(id); });
    }
    Object.defineProperty(SelectableListDirective.prototype, "mode", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.selectableListService.mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableListDirective.prototype, "selecting", {
        /**
         * @return {?}
         */
        get: function () {
            return this.selectableListService.selecting;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.selectableListService.selecting = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableListDirective.prototype, "selectedItemIds", {
        /**
         * @return {?}
         */
        get: function () {
            return this.selectableListService.selectedItemIds;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.selectableListService.selectedItemIds = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableListDirective.prototype, "appSelectableList", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value in Mode) {
                this.mode = Mode[value];
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectableListDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        //FIXME: renderer doesn't work in Nativescript
        /*if (this.confirmButton) {
              this.clickListenerFn = this.renderer.listen(this.confirmButton.nativeElement, 'tap', () => this.confirmSelection());
            }*/
        // Workaround
        if (this.selectionConfirmed) {
            this.selectionConfirmedSubscription = this.selectionConfirmed.subscribe(function () { return _this.confirmSelection(); });
        }
    };
    /**
     * @return {?}
     */
    SelectableListDirective.prototype.ngOnDestroy = function () {
        this.singleSubscription.unsubscribe();
        this.multipleSubscription.unsubscribe();
        if (this.clickListenerFn) {
            this.clickListenerFn();
        }
        // Workaround
        if (this.selectionConfirmedSubscription) {
            this.selectionConfirmedSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    SelectableListDirective.prototype.selectItem = function (itemId) {
        if (this.selectedItemIds.find(function (id) { return id === itemId; })) {
            this.selectedItemIds = this.selectedItemIds.filter(function (selectedItemId) { return selectedItemId !== itemId; });
        }
        else {
            this.selectedItemIds = this.selectedItemIds.concat(itemId);
        }
        if (this.selecting !== !!this.selectedItemIds.length) {
            this.selecting = !!this.selectedItemIds.length;
            this.isSelecting.emit(this.selecting);
        }
    };
    /**
     * @return {?}
     */
    SelectableListDirective.prototype.confirmSelection = function () {
        var _this = this;
        if (this.selectedItemIds.length) {
            this.multiple.emit(this.selectedItemIds.filter(function (itemId) { return _this.items.find(function (item) { return item.id === itemId; }); }));
            this.selectableListService.clearSelection.emit(this.selectedItemIds);
            this.selectedItemIds = [];
            this.selecting = false;
            this.isSelecting.emit(false);
        }
    };
    return SelectableListDirective;
}());
SelectableListDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[appSelectableList]',
                providers: [
                    {
                        provide: 'selectable-list-service',
                        useValue: SERVICE,
                    }
                ],
            },] },
];
/** @nocollapse */
SelectableListDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: core.ComponentFactoryResolver, },
    { type: SelectableListService, decorators: [{ type: core.Inject, args: ['selectable-list-service',] },] },
]; };
SelectableListDirective.propDecorators = {
    "selectionConfirmed": [{ type: core.Input },],
    "appSelectableList": [{ type: core.Input },],
    "items": [{ type: core.Input },],
    "isSelecting": [{ type: core.Output },],
    "single": [{ type: core.Output },],
    "multiple": [{ type: core.Output },],
    "confirmButton": [{ type: core.ContentChild, args: ['confirmSelection', { read: core.ElementRef },] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableItemDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} selectableListService
     */
    function SelectableItemDirective(el, renderer, selectableListService) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.selectableListService = selectableListService;
        this.clearSelectionSubscription = this.selectableListService.clearSelection.subscribe(function (ids) {
            if (ids.find(function (id) { return id === _this.item.id; })) {
                _this.switchBackground();
            }
        });
    }
    Object.defineProperty(SelectableItemDirective.prototype, "mode", {
        /**
         * @return {?}
         */
        get: function () {
            return this.selectableListService.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableItemDirective.prototype, "selected", {
        /**
         * @return {?}
         */
        get: function () {
            var _this = this;
            return !!this.selectableListService.selectedItemIds.find(function (id) { return id === _this.item.id; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectableItemDirective.prototype, "selecting", {
        /**
         * @return {?}
         */
        get: function () {
            return this.selectableListService.selecting;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectableItemDirective.prototype.ngAfterViewInit = function () {
        //FIXME: cannot use querySelector in NativeScript
        //this.container = this.el.nativeElement.querySelector(':only-child');
    };
    /**
     * @return {?}
     */
    SelectableItemDirective.prototype.ngOnDestroy = function () {
        this.clearSelectionSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    SelectableItemDirective.prototype.onTap = function () {
        console.log('tap');
        this.handleEvent('tap');
    };
    /**
     * @return {?}
     */
    SelectableItemDirective.prototype.onPress = function () {
        console.log('longPress');
        this.handleEvent('press');
    };
    /**
     * @param {?} type
     * @return {?}
     */
    SelectableItemDirective.prototype.handleEvent = function (type) {
        switch (this.mode) {
            case Mode.single:
                this.dispatchEvent('single');
                break;
            case Mode.multiple_tap:
                this.switchBackground();
                this.dispatchEvent('multiple');
                break;
            case Mode.multiple_press:
                if (this.selecting || type === 'press') {
                    this.switchBackground();
                    this.dispatchEvent('multiple');
                }
                break;
            case Mode.both:
                if (this.selecting || type === 'press') {
                    this.switchBackground();
                    this.dispatchEvent('multiple');
                }
                else if (type === 'tap') {
                    this.dispatchEvent('single');
                }
                break;
        }
    };
    /**
     * @return {?}
     */
    SelectableItemDirective.prototype.switchBackground = function () {
        //FIXME: cannot use querySelector in NativeScript
        /*this.selected ? this.renderer.removeStyle(this.container, 'background-color')
              : this.renderer.setStyle(this.container, 'background-color', 'lightblue');*/
        //Workaround + FIXME: renderer doesn't work in Nativescript
        /*this.selected ? this.renderer.removeStyle(this.itemContainer.nativeElement, 'background-color')
              : this.renderer.setStyle(this.itemContainer.nativeElement, 'background-color', 'lightblue');*/
        //Workaround
        this.isSelected = !this.selected;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    SelectableItemDirective.prototype.dispatchEvent = function (type) {
        this.selectableListService[type].emit(this.item.id);
    };
    return SelectableItemDirective;
}());
SelectableItemDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[appSelectableItem]',
            },] },
];
/** @nocollapse */
SelectableItemDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: SelectableListService, decorators: [{ type: core.Inject, args: ['selectable-list-service',] },] },
]; };
SelectableItemDirective.propDecorators = {
    "itemContainer": [{ type: core.ContentChild, args: ['item', { read: core.ElementRef },] },],
    "isSelected": [{ type: core.HostBinding, args: ['class.selected',] },],
    "item": [{ type: core.Input },],
    "onTap": [{ type: core.HostListener, args: ['tap',] },],
    "onPress": [{ type: core.HostListener, args: ['longPress',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectableListModule = /** @class */ (function () {
    function SelectableListModule() {
    }
    return SelectableListModule;
}());
SelectableListModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    SelectableItemDirective,
                    SelectableListDirective,
                ],
                exports: [
                    SelectableItemDirective,
                    SelectableListDirective,
                ],
            },] },
];
/** @nocollapse */
SelectableListModule.ctorParameters = function () { return []; };

exports.SelectableListDirective = SelectableListDirective;
exports.SelectableListModule = SelectableListModule;
exports.ɵc = SelectableItemDirective;
exports.ɵb = SERVICE;
exports.ɵa = SelectableListService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-selectable-list.umd.js.map

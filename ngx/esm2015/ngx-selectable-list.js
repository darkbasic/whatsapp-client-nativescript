import { ComponentFactoryResolver, ContentChild, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, NgModule, Output, Renderer2, ViewContainerRef } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableListService {
    constructor() {
        this.selecting = false;
        this.selectedItemIds = [];
        this.single = new EventEmitter();
        this.multiple = new EventEmitter();
        this.mode = Mode.single;
        this.clearSelection = new EventEmitter();
    }
}
/** @enum {string} */
const Mode = {
    single: 'Single',
    multiple_tap: 'Multiple (tap activated)',
    multiple_press: 'Multiple (press activated)',
    both: 'Single and multiple (press activated)',
};
const SERVICE = new SelectableListService();
class SelectableListDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} view
     * @param {?} resolver
     * @param {?} selectableListService
     */
    constructor(el, renderer, view, resolver, selectableListService) {
        this.el = el;
        this.renderer = renderer;
        this.view = view;
        this.resolver = resolver;
        this.selectableListService = selectableListService;
        this.isSelecting = new EventEmitter();
        this.single = new EventEmitter();
        this.multiple = new EventEmitter();
        // Since services are singletons let's set some defaults
        this.selectableListService.selecting = false;
        this.selectableListService.selectedItemIds = [];
        this.selectableListService.single = new EventEmitter();
        this.selectableListService.multiple = new EventEmitter();
        this.selectableListService.mode = Mode.single;
        this.singleSubscription = this.selectableListService.single.subscribe(id => this.single.emit(id));
        this.multipleSubscription = this.selectableListService.multiple.subscribe(id => this.selectItem(id));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        this.selectableListService.mode = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selecting(value) {
        this.selectableListService.selecting = value;
    }
    /**
     * @return {?}
     */
    get selecting() {
        return this.selectableListService.selecting;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedItemIds(value) {
        this.selectableListService.selectedItemIds = value;
    }
    /**
     * @return {?}
     */
    get selectedItemIds() {
        return this.selectableListService.selectedItemIds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set appSelectableList(value) {
        if (value in Mode) {
            this.mode = Mode[value];
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        //FIXME: renderer doesn't work in Nativescript
        /*if (this.confirmButton) {
              this.clickListenerFn = this.renderer.listen(this.confirmButton.nativeElement, 'tap', () => this.confirmSelection());
            }*/
        // Workaround
        if (this.selectionConfirmed) {
            this.selectionConfirmedSubscription = this.selectionConfirmed.subscribe(() => this.confirmSelection());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.singleSubscription.unsubscribe();
        this.multipleSubscription.unsubscribe();
        if (this.clickListenerFn) {
            this.clickListenerFn();
        }
        // Workaround
        if (this.selectionConfirmedSubscription) {
            this.selectionConfirmedSubscription.unsubscribe();
        }
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    selectItem(itemId) {
        if (this.selectedItemIds.find(id => id === itemId)) {
            this.selectedItemIds = this.selectedItemIds.filter(selectedItemId => selectedItemId !== itemId);
        }
        else {
            this.selectedItemIds = this.selectedItemIds.concat(itemId);
        }
        if (this.selecting !== !!this.selectedItemIds.length) {
            this.selecting = !!this.selectedItemIds.length;
            this.isSelecting.emit(this.selecting);
        }
    }
    /**
     * @return {?}
     */
    confirmSelection() {
        if (this.selectedItemIds.length) {
            this.multiple.emit(this.selectedItemIds.filter(itemId => this.items.find(item => item.id === itemId)));
            this.selectableListService.clearSelection.emit(this.selectedItemIds);
            this.selectedItemIds = [];
            this.selecting = false;
            this.isSelecting.emit(false);
        }
    }
}
SelectableListDirective.decorators = [
    { type: Directive, args: [{
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
SelectableListDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: SelectableListService, decorators: [{ type: Inject, args: ['selectable-list-service',] },] },
];
SelectableListDirective.propDecorators = {
    "selectionConfirmed": [{ type: Input },],
    "appSelectableList": [{ type: Input },],
    "items": [{ type: Input },],
    "isSelecting": [{ type: Output },],
    "single": [{ type: Output },],
    "multiple": [{ type: Output },],
    "confirmButton": [{ type: ContentChild, args: ['confirmSelection', { read: ElementRef },] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableItemDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} selectableListService
     */
    constructor(el, renderer, selectableListService) {
        this.el = el;
        this.renderer = renderer;
        this.selectableListService = selectableListService;
        this.clearSelectionSubscription = this.selectableListService.clearSelection.subscribe(ids => {
            if (ids.find(id => id === this.item.id)) {
                this.switchBackground();
            }
        });
    }
    /**
     * @return {?}
     */
    get mode() {
        return this.selectableListService.mode;
    }
    /**
     * @return {?}
     */
    get selected() {
        return !!this.selectableListService.selectedItemIds.find(id => id === this.item.id);
    }
    /**
     * @return {?}
     */
    get selecting() {
        return this.selectableListService.selecting;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        //FIXME: cannot use querySelector in NativeScript
        //this.container = this.el.nativeElement.querySelector(':only-child');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearSelectionSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    onTap() {
        console.log('tap');
        this.handleEvent('tap');
    }
    /**
     * @return {?}
     */
    onPress() {
        console.log('longPress');
        this.handleEvent('press');
    }
    /**
     * @param {?} type
     * @return {?}
     */
    handleEvent(type) {
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
    }
    /**
     * @return {?}
     */
    switchBackground() {
        //FIXME: cannot use querySelector in NativeScript
        /*this.selected ? this.renderer.removeStyle(this.container, 'background-color')
              : this.renderer.setStyle(this.container, 'background-color', 'lightblue');*/
        //Workaround + FIXME: renderer doesn't work in Nativescript
        /*this.selected ? this.renderer.removeStyle(this.itemContainer.nativeElement, 'background-color')
              : this.renderer.setStyle(this.itemContainer.nativeElement, 'background-color', 'lightblue');*/
        //Workaround
        this.isSelected = !this.selected;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    dispatchEvent(type) {
        this.selectableListService[type].emit(this.item.id);
    }
}
SelectableItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSelectableItem]',
            },] },
];
/** @nocollapse */
SelectableItemDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: SelectableListService, decorators: [{ type: Inject, args: ['selectable-list-service',] },] },
];
SelectableItemDirective.propDecorators = {
    "itemContainer": [{ type: ContentChild, args: ['item', { read: ElementRef },] },],
    "isSelected": [{ type: HostBinding, args: ['class.selected',] },],
    "item": [{ type: Input },],
    "onTap": [{ type: HostListener, args: ['tap',] },],
    "onPress": [{ type: HostListener, args: ['longPress',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectableListModule {
}
SelectableListModule.decorators = [
    { type: NgModule, args: [{
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
SelectableListModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { SelectableListDirective, SelectableListModule, SelectableItemDirective as ɵc, SERVICE as ɵb, SelectableListService as ɵa };
//# sourceMappingURL=ngx-selectable-list.js.map

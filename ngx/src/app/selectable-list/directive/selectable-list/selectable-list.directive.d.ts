import { AfterContentInit, ComponentFactoryResolver, ElementRef, EventEmitter, OnDestroy, Renderer2, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
export declare class SelectableListService {
    selecting: boolean;
    selectedItemIds: string[];
    single: EventEmitter<string>;
    multiple: EventEmitter<string>;
    mode: Mode;
    clearSelection: EventEmitter<string[]>;
}
export declare enum Mode {
    single = "Single",
    multiple_tap = "Multiple (tap activated)",
    multiple_press = "Multiple (press activated)",
    both = "Single and multiple (press activated)",
}
export declare const SERVICE: SelectableListService;
export declare class SelectableListDirective implements OnDestroy, AfterContentInit {
    private el;
    private renderer;
    private view;
    private resolver;
    private selectableListService;
    singleSubscription: Subscription;
    multipleSubscription: Subscription;
    clickListenerFn: () => void;
    selectionConfirmedSubscription: Subscription;
    mode: Mode;
    selecting: boolean;
    selectedItemIds: string[];
    selectionConfirmed: EventEmitter<null>;
    appSelectableList: Mode;
    items: {
        id: string;
    }[];
    isSelecting: EventEmitter<boolean>;
    single: EventEmitter<string>;
    multiple: EventEmitter<string[]>;
    confirmButton: any;
    constructor(el: ElementRef, renderer: Renderer2, view: ViewContainerRef, resolver: ComponentFactoryResolver, selectableListService: SelectableListService);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    selectItem(itemId: string): void;
    confirmSelection(): void;
}

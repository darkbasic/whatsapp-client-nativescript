import { AfterViewInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Mode, SelectableListService } from '../selectable-list/selectable-list.directive';
import { Subscription } from "rxjs/Subscription";
export declare class SelectableItemDirective implements AfterViewInit, OnDestroy {
    private el;
    private renderer;
    private selectableListService;
    clearSelectionSubscription: Subscription;
    container: HTMLElement;
    itemContainer: any;
    isSelected: boolean;
    readonly mode: Mode;
    item: {
        id: string;
    };
    readonly selected: boolean;
    readonly selecting: boolean;
    constructor(el: ElementRef, renderer: Renderer2, selectableListService: SelectableListService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onTap(): void;
    onPress(): void;
    handleEvent(type: string): void;
    switchBackground(): void;
    dispatchEvent(type: 'single' | 'multiple'): void;
}

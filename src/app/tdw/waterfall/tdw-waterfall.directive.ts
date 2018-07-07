import {
    AfterContentInit,
    ChangeDetectorRef,
    ContentChildren,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    QueryList,
    Renderer,
    SimpleChanges,
    Inject,
    Renderer2,
    HostListener
} from '@angular/core';


import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[tdwWaterfall]',
    exportAs: 'tdwWaterfall'
})
export class TdwWaterfall implements OnChanges, OnDestroy, AfterContentInit {


    //private classes: string[] = [];
    private mClassActive: string;
    //private referenceLink: string;
    //private _mLinkedElement;
    private document: Document;
    private scrollListener: Function;
    private _mOffsetY: number = 0;

    private mRefView: ElementRef;


    private _mIsActive: boolean = false;
    private _mIsActivePrev: boolean = false;

    @Input()
    set waterfallActiveClass(data: string) {
        //const classes = Array.isArray(data) ? data : data.split(' ');
        //this.classes = classes.filter(c => !!c);
        this.mClassActive = data;

    }


    @Input()
    set waterfallReference(ref: ElementRef) {
        //const link = Array.isArray(data) ? data[0] : data.split(" ")[0];
        //this.referenceLink = link;

        console.log(ref)
        this.mRefView = ref;
    }

    @Input()
    set waterfallOffsetRef(ref: ElementRef) {
        // if(data!=null && Number(data))
        // {
        //     this._mOffsetY = data;
        // }else{
        //     this._mOffsetY = 2;
        // }

        if (ref.nativeElement.offsetHeight && ref.nativeElement.offsetHeight > 0) {
            this._mOffsetY = ref.nativeElement.offsetHeight;
        } else {
            this._mOffsetY = 2;
        }

        ///console.log(this._mOffsetY);

    }

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) document: any) {
        this.document = <Document>document;
        console.log(el);
        // console.log('inpage: ');
    }

    ngAfterContentInit(): void {

        // console.log('inpage: ' + this.link);
        if (!this.mRefView) {
            return;
        }
        //     this._mLinkedElement = this.document.getElementById(this.referenceLink);
        //    if (!this._mLinkedElement) {
        //         return;
        //     }

        this.checkForChanges();
        this.update();
        //console.log(this._mLinkedElement);
        /*this.scrollListener = this.renderer.listen(this._mLinkedElement, 'scroll', (e) => {
            console.log("scroll");
            console.log(this._mLinkedElement.scrollTop);
            this.onScroll(this._mLinkedElement.scrollTop);
            return true;
        });*/
        //this._mLinkedElement = this.el.nativeElement.
        //throw new Error("Method not implemented.");
    }
    ngOnDestroy(): void {
        //throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        //throw new Error("Method not implemented.");
    }


    @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        // console.debug("Scroll Event", document.body.scrollTop);
        // see András Szepesházi's comment below
        this.checkForChanges();
        this.update();


    }

    private checkForChanges() {
        let positionY = window.pageYOffset;
        //console.debug("Scroll Event", positionY);
        if (this.mRefView) {
            let offsetTop = this.mRefView.nativeElement.offsetTop;
            let offsetBottom = this.mRefView.nativeElement.offsetHeight + offsetTop;

            if (offsetTop + this._mOffsetY < positionY && offsetBottom > positionY) {
                this._mIsActive = true;
                // console.log("active");

            } else {
                this._mIsActive = false;
                // console.log("inactive");
            }
        }

        // if (this._mLinkedElement) {
        //     let offsetTop = this._mLinkedElement.offsetTop;
        //     let offsetBottom = this._mLinkedElement.offsetHeight + offsetTop;

        //     if (offsetTop+ this._mOffsetY < positionY && offsetBottom > positionY) {
        //         this._mIsActive = true;
        //        // console.log("active");

        //     } else {
        //         this._mIsActive = false;
        //        // console.log("inactive");
        //     }
        // }
    }

    private update(): void {
        if (!this.mRefView) return;

        if (this._mIsActivePrev !== this._mIsActive) {
            this._mIsActivePrev = this._mIsActive;
            if (this._mIsActive) {
                this.addClass(this.mClassActive)
                // this.classes.forEach(
                //     c => this.renderer.addClass(this.el.nativeElement, c));
            } else {
                this.removeClass(this.mClassActive)
                // this.classes.forEach(
                //     c => this.renderer.removeClass(this.el.nativeElement, c));
            }
            this.cdr.detectChanges();
        }
    }

    private addClass(classNames: string) {
        console.log(this.el.nativeElement)
        let classes = classNames.split(' ');
        classes.forEach(
            c => this.renderer.addClass(this.el.nativeElement, c));
        //this.renderer.addClass(this.el.nativeElement,);
    }

    private removeClass(classNames: string) {
        let classes = classNames.split(' ');

        classes.forEach(
            c => this.renderer.removeClass(this.el.nativeElement, c));

    }

}
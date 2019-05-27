import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.sass']
})
export class TooltipComponent implements OnInit {
  bottomPosition:boolean = false;
  @Input() visible:boolean;
  @Input() text:string;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    const el = this.elementRef.nativeElement;
    const elementTopPosition = el.getBoundingClientRect().top
    const elementHeight = el.getBoundingClientRect().height
    
    this.bottomPosition = (elementTopPosition - 40) <= 0 ? true : false;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  setClasses() { 
    return {
      'tooltip-visible': this.visible,
      'tooltip-on-bottom': this.bottomPosition
    }
  }

}

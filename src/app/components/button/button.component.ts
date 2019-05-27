import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() text:string;
  @Input() class:string;
  @Input() tooltipText:string;
  tooltipVisible:boolean = false;
  buttonFocus:boolean = false;

  @HostListener('click')
  clickOn() {
    this.tooltipVisible = true;
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.buttonFocus) {
      this.tooltipVisible = false;
    }
  }

  @HostListener('mouseenter')
  focusOn() {
    this.buttonFocus = true;
  }

  @HostListener('mouseleave')
  focusOut() {
    this.buttonFocus = false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  escapeKeydown(event: KeyboardEvent) {
    this.tooltipVisible = false;
  }

  constructor() { }

  ngOnInit() {
    
  }
}

import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'lightgreen';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elRef:ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter') mouseenter() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click') click() {
    this.backgroundColor = 'yellow';
  }
}

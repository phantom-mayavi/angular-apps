import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  constructor(private elRef:ElementRef, private renderer: Renderer2) {

  }

  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgreen');
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}

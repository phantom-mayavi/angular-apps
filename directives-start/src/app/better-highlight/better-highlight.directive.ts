import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  constructor(private elRef:ElementRef, private renderer: Renderer2) {

  }

}

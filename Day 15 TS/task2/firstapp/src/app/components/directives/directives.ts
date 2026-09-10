import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight: boolean = false;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {

    if (this.appHighlight) {

      this.renderer.setStyle(
        this.element.nativeElement,
        'border',
        '3px solid orange'
      );

      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        '#fff8e1'
      );

    }

  }
}
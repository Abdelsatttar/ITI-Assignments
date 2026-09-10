import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() highlightColor = '#e8f5e9';
  @Input() defaultHighlight = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setHighlight(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setHighlight(this.defaultHighlight);
  }

  private setHighlight(isHighlighted: boolean): void {
    if (isHighlighted) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        this.highlightColor,
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'border-color',
        this.highlightColor,
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'box-shadow',
        `0 0 0 3px ${this.highlightColor}`,
      );
      return;
    }

    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'background-color',
    );
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'border-color',
    );
    this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow',
    );
  }
}

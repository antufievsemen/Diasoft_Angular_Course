import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlighter]',
  standalone: true
})
export class HighlighterDirective {
  @Input('highlighter')
  creationDate: Date = new Date();

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2,
  ) { }

  public ngAfterViewInit(): void {
    let currentDate = new Date();
    if (this.creationDate > currentDate) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '3px solid #30b6dd');
    }
  
    if (currentDate > this.creationDate && currentDate.getDate() - 14 <= this.creationDate.getDate()) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '3px solid rgb(48, 221, 91)');
    }
  }

}

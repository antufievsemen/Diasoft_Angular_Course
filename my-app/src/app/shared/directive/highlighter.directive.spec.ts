import { ElementRef, Renderer2 } from "@angular/core";
import { HighlighterDirective } from "./highlighter.directive";

describe('HighlighterDirective', () => {
  let directive: HighlighterDirective;
  const {build, renderer, element} = setup<HighlighterDirective>();
  
  beforeEach(() => {
    directive = build();
  })

  afterEach(() => {
    renderer.setStyle.calls.reset();
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should highlight course with bigger date', () => {
    directive.creationDate = new Date('11.11.2027');
    directive.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledWith({}, 'border', '3px solid #30b6dd');
  })

  it('should not highlight course', () => {
    directive.creationDate = new Date('17.02.2023');
    directive.ngAfterViewInit();

    expect(renderer.setStyle).not.toHaveBeenCalled();
  })
});

function setup<T>(): { default: () => any; build: () => T; [key: string]: any } {
  const element = { nativeElement: { children: [{}] } } as ElementRef;
  const renderer = { setStyle: jasmine.createSpy('setStyle')} as unknown as Renderer2;
  const builder = {
    renderer,
    element,
    default(): any {
      return builder;
    },
    build(): any {
      return new HighlighterDirective(element, renderer);
    }
  };
  return builder;
}
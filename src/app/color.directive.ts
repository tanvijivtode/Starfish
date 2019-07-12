import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') coloring: string;

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.colorWord(this.coloring);
  }

  private colorWord(color: string) {
    this.el.nativeElement.style.color = color;
  }


}

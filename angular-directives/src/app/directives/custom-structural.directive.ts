import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appCustomStructural]'
})
export class CustomStructuralDirective {

  @Input() set appCustomStructural(condition: boolean) {
    if(!condition){
      // показати елементи
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // сховати елементи
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

}

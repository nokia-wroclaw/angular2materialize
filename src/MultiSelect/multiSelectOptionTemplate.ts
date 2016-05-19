import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: 'bd-multi-select>template[bdMultiSelectOptionTemplate]'
})
export class BdMultiSelectOptionTemplate {
  
  constructor(private template: TemplateRef<any>) { }
  
  getTemplate() {
    return this.template;
  }
}

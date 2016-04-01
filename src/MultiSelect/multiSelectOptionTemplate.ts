import {Directive, TemplateRef} from 'angular2/core';

@Directive({
  selector: 'bd-multi-select>template[bdMultiSelectOptionTemplate]'
})
export class BdMultiSelectOptionTemplate {
  
  constructor(private template: TemplateRef) { }
  
  getTemplate() {
    return this.template;
  }
}

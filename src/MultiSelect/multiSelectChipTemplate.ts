import {Directive, TemplateRef} from 'angular2/core';

@Directive({
  selector: 'bd-multi-select>template[bdMultiSelectChipTemplate]'
})
export class BdMultiSelectChipTemplate {
  
  constructor(private template: TemplateRef) { }
  
  getTemplate() {
    return this.template;
  }
}

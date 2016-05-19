import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: 'bd-multi-select>template[bdMultiSelectChipTemplate]'
})
export class BdMultiSelectChipTemplate {
  
  constructor(private template: TemplateRef<any>) { }
  
  getTemplate() {
    return this.template;
  }
}

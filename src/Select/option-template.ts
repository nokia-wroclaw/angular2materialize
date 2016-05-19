import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: 'bd-select>template[bdOptionTemplate]'
})
export class BdOptionTemplate {

  constructor(private template: TemplateRef<any>) { }

  getTemplate() {
    return this.template;
  }
}

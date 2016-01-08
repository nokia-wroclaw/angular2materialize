import {Directive, TemplateRef} from 'angular2/core';

@Directive({
  selector: 'bd-select>template[bdOptionTemplate]' 
})
export class BdOptionTemplate {

  constructor(private template: TemplateRef) {}

  getTemplate() {
    return this.template;
  }
}

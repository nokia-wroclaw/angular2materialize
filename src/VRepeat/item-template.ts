import {Directive, TemplateRef} from 'angular2/core';

@Directive({
  selector: 'bd-v-repeat>template[bdItemTemplate]',
})
export class BdItemTemplate {

  constructor(private template: TemplateRef) {}

  getTemplate() {
    return this.template;
  }
}

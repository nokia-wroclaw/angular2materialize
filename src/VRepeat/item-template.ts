import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: 'bd-v-repeat>template[bdItemTemplate]',
})
export class BdItemTemplate {

  constructor(private template: TemplateRef<any>) { }

  getTemplate() {
    return this.template;
  }
}

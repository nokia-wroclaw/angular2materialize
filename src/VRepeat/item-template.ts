import {Directive, TemplateRef, ViewContainerRef, EmbeddedViewRef} from 'angular2/core';

@Directive({
  selector: 'bd-v-repeat>template[bdItemTemplate]',
  inputs: ['outerTemplate:template']
})
export class BdItemTemplate {
  private template: TemplateRef;

  constructor(private originalTemplate: TemplateRef, private viewContainerRef: ViewContainerRef) {
    this.setTemplate(this.originalTemplate);
  }

  getTemplate() {
    return this.template;
  }
  
  setTemplate(template: TemplateRef) {
    this.template = template;
  }

  set outerTemplate(template: TemplateRef) {
    if(template) {
      this.setTemplate(template);
    }
  }
}

declare module 'jquery' {
  interface JQueryElement {
    pickadate(params: any): void;
    openModal(params: any): void;
    closeModal(): void;
    materialbox(): void;
    slider(params: any): void;
    tooltip(params: any): void;
    collapsible(params: any): void;
    dropdown(params?: any): void;
    tabs(params?: any): void;
    on(event: string, selector?: string, handler?: any): void;
    remove(): void;
  }

  interface jQuery {
    (e : Element) : JQueryElement;
  }

  interface jQuery {
    (e : string) : JQueryElement;
  }

  var $ : jQuery;

  export = $;
}

declare module 'hammerjs' {
}

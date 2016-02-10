declare module 'jquery' {
  interface JQueryElement {
    pickadate(params: any): void;
    openModal(params: any): void;
    closeModal(): void;
    tooltip(params: any): void;
    collapsible(params: any): void;
    dropdown(params: any): void;
  }

  interface jQuery {
    (e : Element) : JQueryElement;
  }

  var $ : jQuery;

  export = $;
}

declare module 'hammerjs' {
}

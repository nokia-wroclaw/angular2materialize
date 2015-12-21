declare module 'jquery' {

  interface JQueryElement {
    pickadate(params: any) : void;
  }

  interface jQuery {
    (e : Element) : JQueryElement;
  }

  var $ : jQuery;

  export default $;
}
declare module 'hammerjs' {
}

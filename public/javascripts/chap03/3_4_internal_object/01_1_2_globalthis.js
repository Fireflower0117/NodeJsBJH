/**
 * Node에서는 DOM이 없어 Window와 document객체를 노드에서 사용할수없다. (DOM = Document Object Model)
 * 그래서 만들어진것이 globalThis객체이다.
 * 웹브라우저 환경에서 globalThis는 window객체이고, Node에서 globalThis는 global 객체를 가리킨다.
 *
 *  {projecthome}/public/javascripts/chap03> node
 *  Welcome to ~~~~~
 *  > globalThis
 *  ~~~~~~~
 *  > globalThis === global
 *  true
 *  > global.console
 *   ~~~~~~~
 *  > globalThis.console
 *   ~~~~~~~
 */
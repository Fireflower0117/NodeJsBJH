/** url모듈은 인터넷 주소를 쉽게 조작하도록 도와주는 모듈이다.
 *  하나는 노드 7버전에서 추가된 WHATWG(웹표준지정 단체이름)박식의 url이고
 *  다른 하나는 예전부터 노드에 사용하던 방식의 url이다.
 *  요즘은 전부 WHATWG방식만 사용한다. 웹브라우저에서도 WHATWG방식을 사용해서 호환성이 좋다.
 *  참고 자료 : https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-url-모듈
 *
 */

const url = require('url');
const {URL} = url;  // const {URL} = require('url'); //  url모듈내부 URL 생성자 exports

const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL() : ', myURL);
console.log('url.format() : ', url.format(myURL));

/**
 * url모듈안에 URL생성자가 있음. 참고로 URL은 노드 내장객체이기도해서 require할필요는 없기도 하다.
 * 이 생성자(new URL)에 주소를 넣으면 주소가 부분별로 정리된다. 이방식이  WHATWG방식 이라 한다. => new URL() 방식
 */
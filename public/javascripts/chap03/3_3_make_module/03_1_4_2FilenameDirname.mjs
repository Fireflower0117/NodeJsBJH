/* ES 모듈에서는 __filename ,__dirname를 사용할수없다.
   그대신 import.meta.url로 경로정보를 가져올수있다.
* */
console.log('import.meta.url : ',import.meta.url);
console.log('__filename은 에러발생');
console.log('__filename : ', __filename);

/* CommonJs모듈에서 사용했던 require함수 , module객체는 따로 선언하지 않아도 사용가능하다.
 바로 노드에서 제공하는 내장객체이기 떄문이다.  */

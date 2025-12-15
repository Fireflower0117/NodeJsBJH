/* 다음 예제를 통해 searchParams객체를 파악해본다. */
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams : ', myURL.searchParams);
console.log('searchParams.getAll(category) : ', myURL.searchParams.getAll('category'));
console.log('searchParams.get(limit) : ', myURL.searchParams.get('limit'));
console.log('searchParams.has(page) : ', myURL.searchParams.has('page'));

console.log('searchParams.keys() : ', myURL.searchParams.keys());
console.log('searchParams.values() : ', myURL.searchParams.values());

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log('searchParams.getAll(filter) 11 : ', myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log('searchParams.getAll(filter) 22 : ', myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log('searchParams.getAll(filter) 33 : ', myURL.searchParams.getAll('filter'));


console.log('searchParams.toString() : ', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

/* 앞서 설명한대로 URL은 내장객체이기도 해서 require('url')하지 않았다.
*  WHATWG방식으로 생성한 URL은 주소정보를 객체로 가지며, seachParams객체가 포함되어있다.
*  이객체는 search부분을 조작하는 다양한 함수를 제공한다.
*
*   getAll(key) : key의에 해당하는 모든값을 가져온다.
*   get(key) : key에 해당하는 첫번쨰 값만 가져온다.
*   has(key) : 해당하는 키 존재여부를 확인할수있다.
*   keys() : searchParams의 모든 key값을 반환한다.
*   values() : searchParams의 모든 value값을 반환한다.
*   append(key, value) : 해당키를 추가한다. 같은 key값이 있다면 유지하고, 하나더 추가한다.
*   set(key,value) : append와 유사하지만 같은 key값을 지우고 새로 추가한다. (덮어쓴다.)
*   delete(key) : 해당키를 삭제한다.
*   toString() : 조작한 searchParams객체를 다시 문자열로 만든다.
*                이 문자열을 search에 대입하면 URL주소 객체에 반영된다.
*  */
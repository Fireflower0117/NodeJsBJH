const A = require('./01_1_3_globalA');
global.message = '안녕하세요.'; // global.message속성 변경
console.log('A() : ', A() );  // global.message속성 반환 함수 호출
/* {projecthome}\public\javascripts\chap03> node .\01_1_4_globalB.js
   A() :  안녕하세요.

   3_4_01_1_3_globalA의 함수를 호출하기전에 global객체의 message 속셩을 변경해본다.
   그후 global.message속성 반환 함수 호출한다.
   global객체는 어디에서도 접근 가능하다.
* */
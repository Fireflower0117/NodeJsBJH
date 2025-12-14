exports.odd = '홀수입니다.';
exports.even = '짝수입니다.';

/* module.exports대신 각각의 변수를 exports객체에 대입
*  동일하게 동작하는 이유는 module.exports , exports가 같은 객체를 참조하기 때문이다
*  (module.exports === exports) == true 이다.
*
*  주의점 : module.export와 참조관계가 깨지지 않도록 주의
*          exports는 반드시 속성명과 속성값을 대입해야한다.
*
*          Spring F/W에서 사용하는 interface 클래스에 public static final 같은 형식으로 사용하면 편리할듯....
*
*    3_3_01_3_this.js 보기
* */
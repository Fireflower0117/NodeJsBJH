// ES2015에서 새로운 문자열이 생겼다.
// 이문자열은 큰따옴표나 작은따옴표로 감싸는 기존의 문자열과 달리 백틱(`) 으로 감싼다.  (백틱 = 키보드의 숫자1 왼쪽의 문자)

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 +' 더하기 '+num2+' 는 \''+result+'\'';  // 기존의 문자열 더하기 방식
console.log(string1);

const string2 = `${num1} 더하기 ${num2} 는 '${result}'`; // ES2015에 추가된 백틱 문자열
console.log(string2);




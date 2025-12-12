// 보통 자바스크립트를 배울떄는 var로 변수를 선언하는 법을 배운다.
// 하지만 이제는 const , let이 var을 대체한다.

if(true){
    var x = 3;
}
console.log(x);

if(true){
    const y = 3
}
// console.log(y); // Uncaught TypeError 발생

// x는 정상 출력되는데 y는 정상출력되지 않고 스크립트 오류가 발생한다.
// var는 함수 Scope를 가지므로 if문의 블록과 상관없이 접근가능하다.
// 하지만 const, let는 블록 Scope를 가지므로 블록밖에서는 접근할수없다.
// 블록의 범위는  if, while , for , function등에서 볼수있는 중괄호({})사이 이다.

// const, let과 var는 Scope종류가 다르다.
// 그럼 오히려 단잠인거 같은 const, let는 왜쓰는 걸까.
// const는 한번 할당하면 다른값을 할당할수없다. (java의 static final같은..)
// const로 선헌한 변수를 상수라고 한다.

const a = 0;
// a = 1; // Uncaught TypeError 발생

let b = 0
b = 1;




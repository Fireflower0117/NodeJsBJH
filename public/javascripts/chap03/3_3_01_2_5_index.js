const {odd, even} = require('./3_3_01_2_3_var2');
const checkNumber = require('./3_3_01_2_4_func');

function checkStringOddOrEven(str){
    if(str.length % 2){ // 홀수이면...
     // (str의 길이(length) 를 나누기2수행,  나머지값(%) 판단 (return 나머지값 0:짝수 ,1:홀수)
     // if조건의 값이 0이면 false, 1이면 true , 따라서 if(1) 이면 홀수

        return odd; // /3_3_02_1_var.js에서 export한 odd변수
    }
    return even; // /3_3_02_1_var.js에서 export한 even변수
}

console.log('checkNumber(10) : ', checkNumber(10)); // 3_3_01_2_4_func.js export모듈 활용
console.log('checkStringOddOrEven(hello) : ', checkStringOddOrEven('hello')); // 여기파일에서 선언한 함수활용


// 콘솔(터미널)에서 {projectHome}\public\javascripts\chap03 경로로 이동후 js파일 실행
// {projectHome}\public\javascripts\chap03> node 3_3_02_1_index
// checkNumber(10) : 짝수입니다.
// checkStringOddOrEven(hello) : 홀수입니다.


// 프로젝트를 수행하다보면 모듈이 많아지고 , 모듈간의 관계가 강력해지면(Tight Coupling) 구조를 파악하기 어렵다는 단점도 존재함
// 지금까지는 모듈을 만들떄 module.exports를 사용햇는데 module객체말고 exports객체만으로도 모듈을 만들수있음
// 3_3_01_2_3_var2.js 파일참고
// func.js , index.js에서 require('./3_3_02_1_var2')로 변경후 재실행해볼것
// {projectHome}\public\javascripts\chap03> node 3_3_02_1_index
// checkNumber(10) : 짝수입니다.
// checkStringOddOrEven(hello) : 홀수입니다.

// 동일하게 나오면 성공



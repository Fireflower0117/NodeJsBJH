// 3_3_02_1_var.js파일의 odd, even변수 참조 파일 , require내부 확장자(.js)는 생략가능
const {odd , even} = require('./01_2_3_var2');
// 구조,분해,할당 문법을 활용
// 구조,분해,할당을 모르겠으면 https://ko.javascript.info/destructuring-assignment 다시보기 (객체 분해하기)


// ./routes/index.js 를 불러오고싶을떈 require('./routes'); 까지만 입력해도 된다.
function chechOddOrEven(num){
    if (num % 2){ // 홀수면
        return odd;
    }
    return even;
}

module.exports = chechOddOrEven;

/* 홀수, 짝수를 확인하는 chechOddOrEven 함수를 만들었고,
*  이함수또한 module.exports로 모듈화 시켜서 외부에서 chechOddOrEven함수를 활용할수있다.
*  */
import {odd, even} from './3_3_02_1_1_var.mjs';
import checkNumber from './3_3_02_1_2_func.mjs';

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log('checkNumber(10) : ', checkNumber(10));
console.log('checkStringOddOrEven(hello) : ', checkStringOddOrEven('hello'));

/* 스크립트 구문의 내용은 3_3_01_2_5_index.js를 참고한다.
{projecthome}\public\javascripts\chap03> node .\3_3_02_1_3_index.mjs
checkNumber(10) :  짝수입니다.
checkStringOddOrEven(hello) :  홀수입니다.

node의 require, exports , module.exports가 각각 import , export , export default로 바꾸었다.
ES모듈은 함수나 객체가 아니라 , 문법 그자체이다.

Node에서 사용하는 CommonJs모듈과 ECMAScrpt모듈의 비교를 확인해본다.
https://sosodev.tistory.com/entry/Nodejs-CommonJS-vs-ESMECMAScript-Module-비교

*/
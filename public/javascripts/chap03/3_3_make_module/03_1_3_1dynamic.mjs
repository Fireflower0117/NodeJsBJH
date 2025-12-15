const a = false;
if (a){
    import './02_1_2_func.mjs';
}
console.log('성공');

/* 하지만 ES모듈(ECMAScript 모듈)은 import하는것이 불가능 함니다. 이럴때 Dynamic Import를 사욯한다.
*  {projecthome}\public\javascripts\chap03>node 03_1_3_1dynamic.mjs
*     import './02_1_2_func.mjs';
           ^^^^^^^^^^^^^^^^^^^^^^^
*  파일을 3_3_03_1_3_2dynamic.mjs와 같이 수정해본다.
*   */
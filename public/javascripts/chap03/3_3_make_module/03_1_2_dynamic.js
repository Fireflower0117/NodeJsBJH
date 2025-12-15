const a = false;
if(a){
    require('./01_2_4_func');
}
console.log('성공');

/*  3_3_03_1_2_dynamic.js를 수행해도 if문은 무조건 fasle라서 ./3_3_01_2_4_func는 실행되지 않는다.
   이런식으로 조건부로 모듈을 가져오는것을 dynamic import라고 한다.
* */
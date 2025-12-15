const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key : 'value' ,
        }
    }
}

console.time('전체시간');
console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
console.log(string , number , boolean); // console에 쉽표로 구분해서 여러값을 출력하기
console.error('에러메세지는 console.error에 담아주세요.'); // 에러메세지 로그

console.table([{name:'OpenNote', birth : 2014}, {name:'innoMind', birth : 2024}]); // Array를 console에 Table형태로 Layout
console.dir(obj , {colors: false , depth : 2}); // Object 분석 (2Depth까지, 색으로 구분 안함)
console.dir(obj , {colors: true , depth : 2});  // Object 분석 (2Depth까지, 색으로 구분)
console.dir(obj , {colors: false , depth : 1}); // Object 분석 (1Depth까지, 색으로 구분 안함)
console.dir(obj , {colors: true , depth : 1});  // Object 분석 (1Depth까지, 색으로 구분)
console.time('시간측정');
for(let i = 0; i < 10; i++){
    console.timeEnd('시간측정');
}

function b(){
    console.trace('에러 위치 추적');  // 에러위치 Trace
}

function a(){
    b();
}

a();

console.timeEnd('전체시간');  // 전체 로직 전체 수행시간
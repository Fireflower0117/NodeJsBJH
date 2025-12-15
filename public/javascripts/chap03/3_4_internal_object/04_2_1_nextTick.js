/* 이벤트 루프가 다른 콜백 함수들보다. nextTick의 콜백함수를 우선으로 처리하게 만든다. */

setImmediate( () =>{
    console.log('immediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeOut');
}, 0);

Promise.resolve().then( () => { console.log('promise'); });

/*
{projecthome}\public\javascripts\chap03>node .\04_2_1_nextTick.js
nextTick
promise
timeOut
immediate

process.nextTick은 setImmediate나 setTimeout보다 먼저 실행된다.
코드의 마지막에 Promise를 넣은것은 resolve된 Promise도 nextTick처럼 다른콜백들 보다 우선 실행되기 떄문이다.

실행우선순위
1 : process.nextTick
2 : Promise.resolve().then()
3 : setTimeout({},0)
4 : immediate()

그래서 process.nextTick , Promise를 마이크로태스크 (microTask)라고 구분해 부르기도 한다.

마이크로태스크는 비동기 통신할떄 setImmediate보다 process.nextTick를 선호하는 개발자도 있다.
하지만 이런 마이크로태스크를 재귀호출하면 이벤트 루프는 다른 콜백함수보다 마이크로태스크를우선해 처리하므로
콜백함수슬이 실행되지 않는경우도 있음므로 조심해서 사용해야 한다. 
 */
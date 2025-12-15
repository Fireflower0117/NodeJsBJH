/**
 * 타이머 기능을 제공하는 함수인 setTimeout, setImmedate는 Node에서 window대신 global객체안에 들어있다.
 * setTimeout과 setInterval은 웹브라우저에서도 자주사용한다.
 *
 *  let timeoutId = setTimeout(콜백함수, 밀리초) : 설정한 밀리초이후에 콜백함수를 수행
 *  let intervalId = setInterval(콜백함수, 밀리초) : 설정한 밀리초 마다 콜백함수를 수행
 *  let immediateId = setImmediate(콜백함수) : 콜백함수를 즉시 실행
 *  상기 3개 함수는 모드 아이디를 반환한다, 아이디를 사용하면 타이머를 취소할수있다.
 *
 *  clearTimeout(timeoutId)  : setTimeout을 취소한다.
 *  clearInterval(intervalId)  : setInterval을 취소한다.
 *  clearImmediate(immediateId) : setImmediate를 취소한다.
 *
 *  아래는 위의 함수들을 사용한코드이다. 코드의 실행순서를 예측해보자
 */

const timeoutId = setTimeout(() => {
    console.log('1.5초후 실행');
}, 1500);

const intervalId = setInterval( () => {
    console.log('1초마다 실행');
}, 1000);

const timeoutId2 = setTimeout( () => {
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout( () => {
    clearTimeout(timeoutId2);
    clearInterval(intervalId);
}, 2500);

const immediateId = setImmediate(() =>{
    console.log('즉시실행');
});

const immediate2Id = setImmediate( () =>{
    console.log('즉시 실행되지 않습니다.');
});

clearImmediate(immediate2Id);
















 

/*
즉시실행
1초마다 실행
1.5초후 실행
1초마다 실행
 */


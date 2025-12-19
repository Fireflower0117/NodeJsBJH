/* 이번에는 정말 예측이 불가능한 에러를 처리하는 방법을 알아보자. */

process.on('uncaughtException', (err) => {
   console.error('예기치 못한 에러 :',err) ;
});

setInterval( () =>{
    throw  new Error('서버를 고장내주마..');
} , 1000 );

setTimeout(() =>{
    console.log('실행됩니다.');
}, 2000);

/* {projecthome}\public\javascripts\chap03\3_8_exception> node .\1_1_3_error4.js
예기치 못한 에러 : Error: 서버를 고장내주마..
    at Timeout._onTimeout (D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\1_1_3_error4.js:8:12)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)
실행됩니다.
예기치 못한 에러 : Error: 서버를 고장내주마..
    at Timeout._onTimeout (D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\1_1_3_error4.js:8:12)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)
예기치 못한 에러 : Error: 서버를 고장내주마..
    at Timeout._onTimeout (D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\1_1_3_error4.js:8:12)
    at listOnTimeout (node:internal/timers:588:17)
    at process.processTimers (node:internal/timers:523:7)



  global의 process객체에 uncaughtException 이벤트 리스너로 모든 에러를 처리할수 있을것처럼 보입니다.
  실제로 uncaughtException 의 콜백 함수에 에러 발생시 복구작업을 하는 코드를 넣어두는 경우도 있습니다.
  하지만 Node공식문서에서는 uncaughtException 이벤트는 최후의 수단으로 사용할것을 명시하고있습니다.

  노드는 uncaughtException 이벤트 발생후 다음동작이 제대로 작동하는것을 보장하지 않습니다.
  따라서 uncaughtExceptiondms 에러내용을 기록하는 정도로 사용하고 에러를 기록한후
  process.exit()로 프로세스를 종료하는것이 좋습니다.

  노드서버 운영은 에러와의 싸움입니다. 모든상황에 대비하는것이 최선이지만 시간,인력,비용등 여러가지 제약으로
  대비하지못한 에러가 발생할수있습ㄴ다.

  따라서 에러가 발생했을때 에러를 로깅(기록)하는 습관을 들이고 주기적으로 에러로그를 확인하고 보완해 나가야 합니다.
  운영중인 서버가 에러로 인해 종료했을때 자동으로 시작하는 방법은 15장(chap15)에서 알아봅니다.

*
* */
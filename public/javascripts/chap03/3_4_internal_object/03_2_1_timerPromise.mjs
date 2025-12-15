/* 타이머는 콜백기반 API이지만 promise방식을 사용할수도 있습니다.
*  다만, 프로미스기반 타이머는 노드 내장객체가 아니라 3.5절 에서 학습할 노드 내장모듈이다.
*  우선 아래에 먼저 한번 해보기로 한다.
*  */

import { setTimeout , setInterval } from 'timers/promises';

await setTimeout(3000);
console.log('3초후 실행');

for await (const startTime of setInterval(1000, Date.now())){
    console.log('1초마다 실행', new Date(startTime));
}

/**
 * {projecthome}\public\javascripts\chap03> node .\03_2_1_timerPromise.mjs
 * 3초후 실행
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * 1초마다 실행 2025-12-14T10:57:10.175Z
 * ..................................   Ctrl + C
 *
 *
 * 프로미스 기반이므로 then대신 await를 사용하기위해 ES모듈을 사용했다 .(timers/promises)
 * await setTimeout(3000); 에서 3초간 대기한다.
 *
 * await ( const startTime of setInterval(1000, Date.now()) )는 1초마다 실행되며 현재시각정보를 startTime변수에 반환한다.
 * 상기 구분은 for 반복문 안에있어서 1초마다 수행한다.
 *
 * 이후 for문의 body블록에서 현재시간 정보를 console에 출력한다.  =>  console.log('1초마다 실행', new Date(startTime));
 *
 * 이파일은 ESMAScript(*.mjs) 로 웹브라우저에서도 동작한다.
 */
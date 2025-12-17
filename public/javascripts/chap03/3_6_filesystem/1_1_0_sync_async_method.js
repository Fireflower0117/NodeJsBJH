/* setTimer같은 타이머와 process.nextTick()외에도 Node는 대부분 메서드를 비동기로 처리한다.
*  하지만 몇몇 메서드는 동기방식으로 처리한다. 특히 fs모듈이 동기 메서드가 많다.
*  비동기, 동기 메서드를 알아보고 어떻게 사용하는지 알아본다.
**/

const fs = require('fs');

console.log('-- 시작 --')
fs.readFile('./1_1_0_readme.txt', (err , data) => {
   if(err){
       throw err;
   }
   console.log('첫번째 : ',data.toString());
});

fs.readFile('./1_1_0_readme.txt', (err , data) => {
    if(err){
        throw err;
    }
    console.log('두번째 : ',data.toString());
});

fs.readFile('./1_1_0_readme.txt', (err , data) => {
    if(err){
        throw err;
    }
    console.log('세번째 : ',data.toString());
});

console.log('-- 끝 --')

/*
{projecthome}\public\javascripts\chap03\3_6_filesystem> node .\1_1_0_sync_async_method.js
-- 시작 --
-- 끝 --
두번째 :  저를 여러번 읽어보세요.
첫번째 :  저를 여러번 읽어보세요.
세번째 :  저를 여러번 읽어보세요.

-- 시작 --, -- 끝 -- 을 제외하고는 읽는 순서가 개발자 마다각각 다를수있다. 다시 수행해보면 또 다를수있다.
미동기 메서드들은 MainThread가 명령을 Background에게 수행을 위임하고 다음작업으로 넘어간다.
그래서 -- 시작 --, -- 끝 --을 수행후 읽기가 완료된 순서대로 MainThread에 알리고
MainThread는 Background의 알림이 들어온순서대로 callback함수를 수행한다.

이러한 방식응 수많은 I/O 요청이 들어와도 MainThread는 Background에 요청을 위임한다.
MainThread는 그후로도 얼마든지 요청을 더 받을수있다.

Background는 거의 동시에 같은 파일을 읽게된다.
백그라운드에서는 어떻게 읽기작업을 처리하는지는 나중에 ThreadPool에서 알아보기로한다.

--- 동기와 비동기 , 블로킹과 논블로킹  ---
동기와 비동기, 블로킹,논블로킹은 의미와 용어가 다름에도 혼용되어 사용되는 경우가 많다.

동기 ,비동기 : BackGround 작업 완료 확인 여부
블로킹,논블로킹 : 함수가 바로 return 되는지 여부

참고자료 : https://inpa.tistory.com/entry/%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-동기비동기-블로킹논블로킹-개념-정리

 */



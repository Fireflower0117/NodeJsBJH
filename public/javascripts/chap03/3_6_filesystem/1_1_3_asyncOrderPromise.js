/* 콜백 지옥은 Promise나 async/await로 어느정도 해결할수있다.  */

const fs = require('fs').promises;  // fileSystem의 Promise화 한다.
console.log('-- 시작 --');
fs.readFile('./1_1_0_readme.txt')
    .then((data) => {
        console.log('첫번째 : ', data.toString());
        return fs.readFile('./1_1_0_readme.txt');
    })
    .then((data) => {
        console.log('두번째 : ', data.toString());
        return fs.readFile('./1_1_0_readme.txt');
    })
    .then((data) => {
        console.log('세번째 : ', data.toString());
        console.log('-- 끝 --');
    })
    .catch((err) => {
        console.error(err);
    });

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\1_1_3_asyncOrderPromise.js
-- 시작 --
첫번째 :  저를 여러번 읽어보세요.
두번째 :  저를 여러번 읽어보세요.
세번째 :  저를 여러번 읽어보세요.
-- 끝 --

실행결과는 1_1_2_syncOrder.js와 같다.

지금까지 동기/비동기 메서드의 차이점을 알아봤다.
다음순서는 readFile()의 결과로 받아온 data를 왜 toString()로 변환하는 이유를 알아보기로 한다.

결과부터 말하자면 readFile()의 결과 data는 Buffer객체이기 때문이다.
다음은 Buffer에 대해 알아보기로 한다.
 */
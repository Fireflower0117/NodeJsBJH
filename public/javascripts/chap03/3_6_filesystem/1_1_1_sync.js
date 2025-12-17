const fs = require('fs');

console.log('-- 시작 --');
let fstData = fs.readFileSync('./1_1_0_readme.txt');
console.log('첫번쨰 : ', fstData.toString());

let scdData = fs.readFileSync('./1_1_0_readme.txt');
console.log('두번쨰 : ', scdData.toString());

let trdData = fs.readFileSync('./1_1_0_readme.txt');
console.log('세번쨰 : ', trdData.toString());
console.log('-- 끝 --');

/*
{projecthome}\public\javascripts\chap03\3_6_filesystem> node .\1_1_1_sync.js
-- 시작 --
첫번쨰 :  저를 여러번 읽어보세요.
두번쨰 :  저를 여러번 읽어보세요.
세번쨰 :  저를 여러번 읽어보세요.
-- 끝 --

fs.readFile대신 fs.readFileSync 메서드로 동기로 파일을 읽었다.
그래서 callback함수는 없고 return 하는 값이 있다.
console.log도 순서대로 찍혔다. 스크립트를 이해하긴 쉽지만 치명적 단점이 있다.
만약 readFileSync를 수천번을 동작해야 한다면 서버의 성능에 문제가 발생할수있다.
동기(sync)작업을 할때는 반드시 선행작업이 완료되어야 한다.
이는 Background가 작업하는동안 MainThread는 대기상태에 머물러있다.
MainThread가 작업을 수행하지않고 대기상태에 있다는건 그만큼 작업처리가 비효율적이라는 것이다.
게다가 readFileSync처럼 메서드명 뒤에 Sync가 있어 동기메서드 여부를 판단하기는 쉽다.
Sync로 끝나는 메서드는 프로그램을 처음 시작할떄 프로그램 초기화 용도로 사용하는것을 권장한다.
 */
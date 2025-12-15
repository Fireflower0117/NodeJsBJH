/* 내장모듈 os를 활용해서 운영체제정보를 가져올수있다.
 내장모듈인 os를 불러오면 require('os') 또는 require('node:os')를 사용해 os모듈을 불러올수있다.
* */

const os = require('os');

console.log('운영체제 정보 ---------------------------------------------');
console.log('os.arch() : ', os.arch());  // process.arch와 같음
console.log('os.platform() : ', os.platform()); // process.platform과 같음
console.log('os.type() : ', os.type());  // 운영체제의 종류
console.log('os.uptime() : ', os.uptime()); // 운영체제의 부팅이후 현재까지의 경과시간(seconds) , process.uptime()는 노드의 실행 경과시간이었음
console.log('os.hostname() : ', os.hostname()); // 컴퓨터의 이름
console.log('os.release() : ', os.release()); // 운영체제 버전정보

console.log('경로 -----------------------------------------------------')
console.log('os.homedir() : ', os.homedir()); // 홈 디렉토리 경로
console.log('os.tmpdir() : ', os.tmpdir()); // 임시파일 저장 경로

console.log('CPU 정보 -------------------------------------------------')
console.log('os.cpus() : ', os.cpus()); // 컴퓨터 코어 정보
console.log('os.cpus().length : ', os.cpus().length); // 컴퓨터 코어 갯수

console.log('메모리 정보 -----------------------------------------------')
console.log('os.freemem()  : ', os.freemem()); // 사용가능한 메모리(RAM)
console.log('os.totalmem() : ', os.totalmem()); // 전체 메모리 용량 (RAM)

/* {projecthome}\public\javascripts\chap03>node 1_1_os.js

예제에는 없지만 os.constants라는 객체가 있다. 그안에는 각종 에러와 신호에 대한 정보가 담겨있다. 
에러가 발생했을떄 EADDRINUSE나 ECONNRESET같은 에러코드를 함께 보여주며 이런 코드들이 
os.constants 안에 들어있다. 

os모듈은 컴퓨터(서버) 내부환경정보를 가져오는 경우 사용한다. 
서버의 환경( local, dev , oper )에따라 서비스를 구분할떄 os모듈이 유용하게 사용된다 
 */
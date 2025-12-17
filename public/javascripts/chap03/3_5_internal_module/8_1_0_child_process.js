/* Node에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을때 사용하는 모듈이다.
*  이모듈을 활용해서 다른언어코드( ex:python)을 실행하고 결과값을 받을수있다.
*  이름이 child_process인 이유는 현재  Node 프로세스외에 다른 프로세스를 생성 , 명령을 수행하고 결과를 반환하기때문이다.
*
*  테스트로 Window의 폴더 목록을 보는 dir 명령어를 실행해본다.
*  본인의 테스트환경 OS가 리눅스나 ,Mac이면 dir대신 ls를 입력한다.
* */

const exec = require('child_process').exec;

const process = exec('dir');  // 1) exec의 첫인수로 명령어 입력한다.

process.stdout.on('data', function(data){ // 2) 명령어가 정상적으로 수행했다면...
   console.log(data.toString());
});

process.stderr.on('data', function(data){ // 3) 명령어가 비정상적으로 수행했다면...
   console.error(data.toString());
});

/* {projecthome}\public\javascripts\chap03\3_5_internal_module> node .\8_1_0_child_process.js
*  -- 현재 디렉토리의 파일 목록
*
* */

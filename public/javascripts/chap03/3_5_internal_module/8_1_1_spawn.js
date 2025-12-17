/* 이번에는 Python 프로그램을 실행해본다.
*  실습전에 Python3이 설치가 되어있어야 한다.
* */

const spawn = require('child_process').spawn;

const process = spawn('python', ['8_1_1_test.py']);

process.stdout.on('data', function(data){
   console.log(data.toString());
});

process.stdout.on('data', function(data) {
   console.error(data.toString());
});

/* 파이썬 프로그램을 실행하는 명령어인 python 8_1_1_test.py를 노드의 spawn을 통해 실행한다.
*  spawn의 첫번째 인수는 명령어를 두번째인수는 옵션정보를 배열(Array)로 입력하면 된다.
*  결과는 exec와 마찬가지로 stdout, stderr의 데이터로 나온다.
*
*  exec와 spawn의 차이점은 exec는 쉘을통해 명령어를 수행하고,
*  spawn은 새로운 프로세스를 생성하며 명령어를 수행한다.  spawn에서도 세번째 인수로 {shell: true}를 넣으면
*  exec처럼 쉘을 실행해서 명령을 수행한다.
*  쉘을 사용하여 수행할지 여부는 명령어에 차이가있다.
*  */
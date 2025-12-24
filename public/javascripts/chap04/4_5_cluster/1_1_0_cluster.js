/* 서버를 클러스터링 해본다.
*  서버클러스터링의 개념이 궁금하면 아래 페이지에 접속해본다.
*  https://sosodev.tistory.com/entry/HA-서버-클러스터링에-대해서-알아보기
*
**/

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`Master Process ID : ${process.pid}`);

    // CPU개수만큼 WorkProcess 생산
    for(let i = 0; i < numCPUs; i++){
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
       console.log(`${worker.process.pid}번 Work Process 가 종료되었습니다.`);
       console.log('code : ', code , ', signal : ', signal);
    });
}
else {
    // Work Process 들이 Port에서 대기(Ready)
    http.createServer((req, res) => {
       res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
       res.write('<h1>Hello Open Node</h1>');
       res.end('<p>Hello Cluster</p>')
    }).listen(8086);

    console.log(`${process.pid}번 Worker Process 실행`);
}
/* {projecthome}\public\javascripts\chap04\4_5_cluster> node .\1_1_0_cluster.js

   서버를 기동후 웹브라우저에서 http://localhost:8086 /으로 접근해본다.

   앞서 chap03.3_5_internal_module에서  배운 Work_Thread와 유사한 구조 형태이다.
*  다만, 이번엔 Thread가 아닌 Process란점이 다르다.  클러스터에는 MasterProcess와 WorkProcess가 있다.
*  마스터 프로세스틑 CPU개수만큼 WorkProcess를 생산하고 8086번 Port에서 서비스를 시작한다.
*  요청(request)을 받으면 MasterProcess는 WorkProcess에 요청을 분배한다.
*  실질적 서비스는 WorkProcess가 수행한다.
*
*  */



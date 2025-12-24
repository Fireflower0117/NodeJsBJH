/* 현재 학습중인 컴퓨터의 CPU개수는 8개이다.
   실제로 여덟개 서버가 생성되었는지 확인해보자
*/


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
        res.end('<p>Hello Cluster</p>');

        setTimeout( () => {
            process.exit(1);
        } , 1000);

    }).listen(8086);

    console.log(`${process.pid}번 Worker Process 실행`);
}

/* 요청을 받은 프로세스는 서비스응답후 1초가 경과하면 프로세스가 소멸되도록 만들었다.
*
* {projecthome}\public\javascripts\chap04\4_5_cluster> node .\1_1_1_cluster.js
* 서버 기동후 http://localhost:8086/ 접속해본다.
*  웹페이지에 섭속할때마다 프로세스는 하나씩 소멸되며 8번을 요청하면 WorkProcess가 전부 소멸되어
*  서버는 더이상 서비스를 하지 않는다.
*
*  */
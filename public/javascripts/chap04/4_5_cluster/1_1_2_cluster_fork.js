
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
        cluster.fork();  // 1)
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

/* 1_1_1_cluster.js에서  1) process.fork() 한줄 추가했다.
*  이제 WorkProcess가 종료될때마다 신규 WorkProcess가 생성(fork)한다.
*
*  사실 이런 방식의 Cluster는 좋은 프로그램이 아니다.
*  근본적인 오류자체의 원인을 찾아 해결하는것을 권장한다.
*
*  그래도 예상치 못한 에러때문에 서비스가 종료되는 현상을 방지할수있어서
*  클러스터링 해두는것이 좋다.
*  */
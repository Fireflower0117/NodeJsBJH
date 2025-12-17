/* 이번에는 여러개의 Work Thread를 등록하고 데이터(message)를 넘겨보자.
*  postMessage로 데이터를 보내는 방법과 다른방법이다.
*
*  참고자료 https://velog.io/@njt6419/Node.js-내장-모듈-worker-threads
*
*  아래의 경우
*  const{Worker.... } 로 직접타이핑을 시작하지말고
*  const {} = require('worker_threads'); 먼저작성후
*  const {Work } = require('worker_threads'); 까지만 입력후 tab 키를 누르면 오타없이 import할수 있다.
*/

const {Worker , isMainThread, parentPort, workerData} = require('worker_threads');

if(isMainThread){
    const threads = new Set();
    threads.add(new Worker(__filename, { workerData : {start : 1} }));
    threads.add(new Worker(__filename, { workerData : {start : 2} }));
    // 1) WorkThrad에게 보낼 Data 기본값 설정 => { workerData : {start : 1} }
    //    WorkThrad에게 보낼 Data 기본값 설정 => { workerData : {start : 2} }

    for(let worker of threads){
        worker.on('message', message => console.log('MainThread From WorkerThread : ', message));
        worker.on('exit', () => { // workThread에서 연결이 종료됐을떄
            threads.delete(worker);  //  5) Set에서 WorkThread를 한개 삭제한다.
            if(threads.size == 0){
                console.log('job done');  // 6) WorkThread가 전부 삭제되면 작업이 마무리된다. (job done)
            }
        });
    }
}
else {
    const data = workerData; // 2) MainThread가 보낸 Data(workerData)를 WorkThread가 수신
    parentPort.postMessage(data.start + 100); // 3) MainThread가 보낸 start에 + 100을 더해서 MainThread에게 전송 => (workerData : {start : 1} )
    // 4) WorkerThread가 MainThread에 메세지를 전송하는 순간(parentPort.postMessage) 자동으로 parentPort.close(); 가 동작한다.
}

/* {projecthome}\public\javascripts\chap03\3_5_internal_module> node .\7_1_1_worker_data.js
    MainThread From WorkerThread :  101
    MainThread From WorkerThread :  102
    job done
 
   1) new Work생성자로 WorkThread를 생성할떄 두번쨰 인자값({workerData}) 으로 WorkThread에게 원하는 데이터를 보낼수있다.
   2) WorkThread에서는 MainThread가 보낸 Data(workerData)를 수신할수있다.
   3) MainThread가 보낸 start값에 + 100을 더해서 MainThread에게 전송한다.
   4) WorkThread에서 parentPort.close(); 가 동작(자동)
   5) Set에서 WorkThread를 한개 삭제한다.
   6) WorkThread가 전부 삭제되면 작업이 마무리된다. (job done)

*/
/* Node에서 멀티쓰레드 방식으로 작업하는 방법을 알아본다. 
   worker_threads 모듈로 가능하다.  
*/ 
const {Worker , isMainThread , parentPort} = require('worker_threads');

console.log('isMainThread : ', isMainThread);
if(isMainThread){ // 부모 Thread일떄 (Main Thread일떄..)
    const worker = new Worker(__filename);  // 현재파일을 Worker Thread로 생성한다.
    console.log('__filename : ', __filename ,' Worker thread로 등록');
    worker.on('message', message => console.log('MainThread from workerThread : ', message));  // WorkerThread가 보낸 메세지를 수신하는 이벤트 리스너
    console.log(' Worker thread로 부터 메세지 수신준비 완료');
    worker.on('exit', () => console.log('worker exit'));
    console.log(' Worker thread로 message연결 종료시 동작 이벤트리스트 등록 완료');
    worker.postMessage('ping');  // Worker Thread에 메세지 보내기
    console.log(' Worker thread에게 ping메시지 전송 완료');

}
else {  // 자식 Thread일때 (Worker Thread일때..)
    parentPort.on('message', (value) => {  // 메인Thread로부터 Message를 수신하는 이벤트 리스너
        console.log('WorkerThread from MainThread : ', value); // 메인Thread로부터 수신한 Message
        parentPort.postMessage('pong');  // to MainThread에 메세지전송 함수
        parentPort.close(); // Main Thread에 메세지 전송완료시 WorkThread는 수동으로 연결을 종료해야한다.
    });
}

/* isMainThread를 통해 MainThread인지 , WorkerThread인지 판단한다. 
*  MainThread에서는 new Worker를 통해 현재파일(__filename)을 WorkerThread로 지정했다. 
*  (WorkerTherad는 new Worker생성자로 여러개 지정가능하다.) 
* 
*  MainThread에서는 Worker생성후 worker.postMessage를통해 WorkerThread에 데이터를 보낼수있다. 
*  WorkerThread에서는 parentPort.on('message') 이벤트 리스너로 MainThead로부터 메세지를 받는다. 
*  
*  WorkerThread는 parentPort.postMessage() 함수로 MainThread에 메세지를 전송할수있다. 
*  참로로 메세지를 1회만 수신하고 싶다면 worker.once('message') 로 이벤트리스너를 등록하면된다.
*
*  WorkerThread에서 메세지를 전송하면 반드시 직접 MainThread와 연결을 종료해야 한다. (parentPort.close())
*
*  MainThread에서는 WorkerThrea로부터 연결이 끈어지면(parentPort.close())
*
*  MainThread를 종료하고싶다면 worker.on('exit') 이벤트 리스너를 수행한다.
*  MainThreadd에서 생성한 WorkerThread와 연결은 전부 종료된다.
*
*
*  {projecthome}\public\javascripts\chap03\3_5_internal_module> node .\7_1_0_worker_therads.js
    isMainThread :  true
    __filename :  {projecthome}\public\javascripts\chap03\3_5_internal_module\7_1_0_worker_therads.js  Worker thread로 등록
     Worker thread로 부터 메세지 수신준비 완료
     Worker thread로 message연결 종료시 동작 이벤트리스트 등록 완료
     Worker thread에게 ping메시지 전송 완료
    isMainThread :  false
    WorkerThread from MainThread :  ping
    MainThread from workerThread :  pong
    worker exit 
* */
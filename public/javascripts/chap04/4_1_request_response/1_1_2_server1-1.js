/* listen메서드에 콜백함수를 넣는대신 listening이벤트 리스너를 붙여도 된다.
*  추가로 error 이벤트 리스너도 붙여본다.
**/

const http = require('http');

http.createServer( (req , res) => {
   res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
   res.write('<h1>Hello OpenNote Node1 </h1>');
   res.end('<p>Hello OpenNote Server</p>');
})
.listen(8090 , () => {
   console.log('8090포트로 서비스를 시작했습니다.');
});

http.createServer( (req , res) => {
    res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello OpenNote Node2 </h1>');
    res.end('<p>Hello OpenNote Server</p>');
})
.listen(8091 , () => {
    console.log('8091포트로 서비스를 시작했습니다.');
});

/* {projecthome}\public\javascripts\chap04\4_1_request_response> node .\1_1_2_server1-1.js
8090포트로 서비스를 시작했습니다.
8091포트로 서비스를 시작했습니다.
실무프로젝트에서 두개의 서버를 동시에 띄우는 일은 드물다.
그래도 불가능 하지는 않다는것만 알아두자.  포트번호가 같으면 EADDRINUSE에러가 발생한다.

웹브라우저에서 http://localhost:8090 , http://localhost:8091 로 접속해본다.

res.write와 res.end에 일일이 HTML을 작성하는것은 비효율적이다.
그래서 HTML 파일을 미리 만들어 두는것이 바람직하다.
그 HTML파일은 fs모듈로 읽어서 client에 전송할수있다.
*
*  */
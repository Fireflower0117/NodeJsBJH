/* 아래는 http 서버 코드 예시이다. 이미 익숙하게 봐왔던 스크립트이다.  */

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Open Note Node ~~!! </h1>');
    res.end('<p>Hello Open Server</p>');
})
.listen(80 , () => {
   console.log('80 포트로 서비스를 시작합니다.');
});

/* {projecthome}\public\javascripts\chap04\4_4_http_http2> node .\1_1_0_server.js
   8080 포트로 서비스를 시작합니다.

   웹브라우저에서 localhost:8080 으로 접근해본다.

   이서버에 암호화를 적용하려면 https 모듈을 적용해야 한다.
   하지만 https모듈은 아무나 사용할수있는게 아니다.  암호를 적용하는만큼 암호화를 인증해줄 기관도 필요하다.
   SSL은 인증기관을 통해 구입해야 하지만 Let's Encrypt같은 기관에서 무료로 발급해주기도 한다.

   인증서를 발급 받아 적용해보자.

*/
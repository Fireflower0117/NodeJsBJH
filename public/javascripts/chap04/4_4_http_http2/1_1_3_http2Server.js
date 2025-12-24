/* 노드의 http2 모듈은 SSL암호화 + http/2 를사용할수있다.
   http/2는 요청 응답방식이 기존Http/1.1보다 훷신 효율적인 요청과 응답을 동작한다. 따라서 속도도 많이 개선되었다.

   아래의 블로그를 확인하여 http1.1 과 http2 동작방식 비교를 알아보자
   https://velog.io/@wiostz98kr/HTTP1.1과-HTTP2.0의-차이-e2v4x4t1
*/

const http2 = require('http2');
const fs = require('fs');

const options = {
    key : fs.readFileSync('./localhost+2-key.pem'),
    cert: fs.readFileSync('./localhost+2.pem'),
};

http2.createSecureServer( options , (req , res) => {  // 1)
  res.writeHead(200 , {'Content-Type':'text/html; charset=utf-8'});
  res.write('<h1>Hello Open Note</h1>');
  res.end('<p>Hello 443 Port Server</p>');
})
.listen(443 , () => {
    console.log('443포트에서 서버가 서비스를 시작했습니다.')
});

/* {projecthome}\public\javascripts\chap04\4_4_http_http2> node .\1_1_3_http2Server.js
   443포트에서 서버가 서비스를 시작했습니다.

   https://localhost/ 로 접근해본다. 페이지에 아래내용이 보이면 정상 동작하는것이다.
   Hello Open Note
   Hello 443 Port Server


   1) https모듈과 http2모듈은 거의 유사하다.  다만 http2는 createSecureServer() 메서드를 사용한다.
 */
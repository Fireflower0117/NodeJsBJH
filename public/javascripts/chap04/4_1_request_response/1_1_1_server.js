/* http 서버가 있어야 웹브라우저 요청을 처리할수있으므로 http모듈을 사용했다.
*  http모듈에는 createServer메서드가 있다. 인수로 요청에대한 콜백 함수를 넣을수 있으며,
*  요청이 들어올때마다 매번 새로운 콜백함수가 실행된다.
*  따라서 콜백함수에 응답정모를 적으면 된다.
*
*  createServer의 콜백 매개변수를 보면 req(request) , res(response)가 있다.
*  req는 요청에대한정보를 , res는 응답에 대한 정보를 담고있다 .
*
*  이제 응답을 보내는 부분과 서버연결부분을 추가 해보자.
**/

const http = require('http');

http.createServer( (req, res) => {
   res.writeHead(200 , {'Content-Type': 'text/html; charset=utf-8'});  // 2)
   res.write('<h1>Hello Open Note Node </h1>');  // 2)
   res.end('<p>Hello Node Server</p>');  // 2)
})
.listen( 8090 , () =>{  // 1)
   console.log('8090번 포트로 노드 서비스가 시작됐습니다.');  // port연결 콜백함수 내용
});

/* {projecthome}\public\javascripts\chap04\4_1_request_response> node .\1_1_1_server.js
    8090번 포트로 노드 서비스가 시작됐습니다.

    위에메세지가 보인다면  웹브라우저에서  http://localhost:8090 을 입력해보자. 
    서버를 종료하려면 콘솔(터미널)에서 ctrl + C를 누르면 된다.
    
    1) createServer 메서드 뒤에 listen 메서드를 붙이고 클라이언트에 공개할 포트(8090)번호와 연결 콜백함수를 넣는다. 
    2) res(response) 객체에는 res.writeHead와 res.write, res.end 메서드가있다.

       res.writeHead : 응답에 대한 정보를 기록하는 메서드이다.
                       첫번쨰 인수로 성공적인 요청을 의미하는 200을 넣었다.  (http.statusCode)
                       두번쨰 인수는 응답에대한 정보를 보낸다. Content-Type가 HTML임을 알리고있다.
                       그리고 문자셋(charset)은 utf-8을 지정했다.  이정보를 담는부분은 responseHeader이라 한다.

       res.write     : 첫번쨰 인수는 클라이언트에게 보낼데이터 이다.
                       지금은 HTML문자열을 보냈지만 Buffer를 보낼수도있다.

       res.end       : 응답을 종료하는 메서드 이다. 만약 인수를 입력하면 그 데이터도 클라이언트로 보내고
                       응답을 종료한다.                                  
    
    -----------------------------------------------------------------------------------
    이전에 ExceptionCase.txt에서 본대로 EADDRINUSE 에러가 발생한다면 포트번호를 바꾸는것을 권장한다.
    window + r = cmd  > netstat -ano | findstr 8090
    아무런 메세지가 없다면 8090은 사용해도 되는 포트이다.




*
* */
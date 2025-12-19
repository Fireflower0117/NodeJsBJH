/* html 파일을 fs모듈을 활용해 클라이언트에게 메세지를 전송하는 방법을 알아본다. */

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req , res) => {
    try{
        const data = await fs.readFile('./1_1_3_server2.html'); // 1)
        res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'});
        res.end(data); // 2)
    }
    catch (err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
.listen(8090, () =>{
    console.log('8090포트로 서비스를 시작했습니다.');
});

/* {projecthome}\public\javascripts\chap04\4_1_request_response> node .\1_1_3_server2.js
8090포트로 서비스를 시작했습니다.

1) 요청이 들어오면 fs모듈로 HTML파일을 읽는다.
2) data변수에 저장된 Buffer를 그대로 client에게 보낸다
3) 예기지 못한 에러가 발생한경우에는 에러메세지를 응답한다.
   에러메세지는 일만적인 문자이므로 Content-Type는 text/plain을 사용한다.

   테스트 삼아 읽을 바일명을 1_1_3_server2.html말고  1_1_3_server.html로 변경하고
   서버를 재기동해보자

   Error: ENOENT: no such file or directory, ....
   에러메세지가 console에 나오고 client에게도 에러메세지를 전송한다.

    ---------------------------------------------------
    res.writeHead()에 넣는 HTTP.status에 대해 알아보자

    2XX : 성공을 알리는 상태코드다  대표적으로 200(성공), 201(작성됨)을 많이 사용한다.
    3XX : 리다이렉션(다른페이지로 이동)을 알리는 상태코드다. 특정주소를 입력했는데
          다른 주소 페이지로 이동할떄 사용된다.
          301(영구이동), 302(임시이동), 304(수정되지않음) => 수정된 파일이 아니라서 캐시에 있는 정보로 응답했다는뜻
    4XX : 요청 오류를 나타낸다. 대표적으로 400(잘못된요청), 401(권한없음) , 403(금지됨) , 404(찾을수없음)이 있다.
    5XX : 서버 오류를 나타낸다. 서버가 요청을 제대로 받았지만, 서버의 동작중에 오류가 발생했을때 발생한다.
          오류가 발생하지 않도록 프로그램을 잘만들어야 한다.
          500(내부에러), 502(불량게이트웨이), 503(서비스거부)가 자주 사용된다.

 */
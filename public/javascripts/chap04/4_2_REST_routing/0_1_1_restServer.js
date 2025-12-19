const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const users = {};

http.createServer(async (req, res) => {
    try{
        console.log(req.method , req.url );
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile(path.join(__dirname, '0_1_1_restFront.html'));
                res.writeHead(200 , {'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if(req.url === '/about'){
                const data = await fs.readFile(path.join(__dirname, '0_1_1_about.html'));
                res.writeHead(200 , {'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if(req.url === '/users'){
                const data = await fs.readFile(path.join(__dirname, '0_1_1_about.html'));
                res.writeHead(200 , {'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }

            // 주소가 /도 /about도 아니면..
            try{
                const data = await fs.readFile(path.join(__dirname, req.url));
                return res.end(data);
            }
            catch(err){
                // 주소에 해양하는 Route를 찾지 못했다는 404 NotFound error 발생
            }
        }
        else if(req.method === 'POST'){
            if(req.url === '/user'){
                let body = '';

                // 요청의 body를 Stream으로 받음
                req.on('data', (data) => {
                    body += data;
                });

                // 요청의 body를 다받은후 실행
                return req.on('end', () => {
                   console.log('POST 본문(Body) : ', body);
                   const {name} = JSON.parse(body);
                   const id = Date.now();
                   users[id] = name;

                    res.writeHead(201 , {'Content-Type' : 'text/plain; charset=utf-8'});
                    res.end('등록 성공');
                });
            }
        }
        else if(req.method === 'PUT'){
            if(req.url.startsWith('/users/')){
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                   body += data;
                });

                return req.on('end', () => {
                    console.log('PUT 본문(Body) : ', body);
                    users[key] = JSON.parse(body).name;

                    res.writeHead(200 , {'Content-Type' : 'text/json; charset=utf-8'});
                    res.end(JSON.stringify(users));
                });
            }
            else if(req.method === 'DELTE'){
                if(req.url.startsWith('/users/')){
                    const key = req.url.split('/')[2];
                    delete users[key];

                    res.writeHead(200 , {'Content-Type' : 'text/json; charset=utf-8'});
                    res.end(JSON.stringify(users));
                }
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    }catch(err){
        console.error(err);
        res.writeHead(500);
        res.writeHead(500 , {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(err);
    }
})
.listen(8082, () => {
   console.log('8082포트에서 서비스를 시작합니다.');
});

/* req.method로 HTTP요청을 구분(분기)하고있다.
   req.method가 GET이면 다시 req.url로 요청 주소를 구분한다.
   주소가 /일떄는 0_1_1_restFront.html을 제공하고 주소가 /about이면 0_1_1_about.html을 제공한다.

    만약 존재하지 않는 파일을 요청했거나 GET메소드 호출이 아니면 404 NOT FOUND에러가 응답으로 전송된다.
    응답중에 예상외 에러가 발생하면 500에러가 전송된다.
    실무에서 500에러 전송은 드물다 (내부에러여서 수정하는게 보통이다.)

    ----------------------------------------------------------------------
    res.end 앞에 return을 붙이는 이유는??
    res.end를 호출하면 함수가 종료된다고 착각을 하곤한다.  노드도 일반적인 자바스크립트 문법을 따른다.
    그래서 return을 붙이지 않으면 함수가 종료되지 않는다. 따라서 코드가 이어지는 경우는
    return구분으로 명시적으로 함수를 종료시킨다.
    만약 return없이 res.end가 여러번 실행되면
    Error: Can't render headers after they are sent to the client. 에러가 발생한다.

* */
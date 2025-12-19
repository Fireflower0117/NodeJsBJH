const http = require('http');
const fs = require('fs').promises;
const path = require('path');

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

            // 주소가 /도 /about도 아니면..
            try{
                const data = await fs.readFile(path.join(__dirname, req.url));
                return res.end(data);
            }
            catch(err){
                // 주소에 해양하는 Route를 찾지 못했다는 404 NotFound error 발생
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    }catch(err){
        console.error(err);
        res.writeHead(500 , {'Content-Type' : 'text/plain; charset=utf-8'});
        return res.end(err.message);

    }
})
.listen(8082, () => {
   console.log('8082포트에서 서비스를 시작합니다.');
});

/* req.method로 HTTP요청을 구분(분기)하고있다.
   req.method가 GET이면 다시 req.url로 요청 주소를 구분한다.
   주소가 /일떄는 0_1_1_restFront.html을 제공하고 주소가 /about이면 0_1_1_about.html을 제공한다.


* */
const https = require('https');
const fs = require('fs');

const options = {
    key : fs.readFileSync('./localhost+2-key.pem'),
    cert: fs.readFileSync('./localhost+2.pem'),
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('Hello HTTPS localhost!');
}).listen(443, () => {
    console.log('HTTPS server running at https://localhost');
});

/* {projecthome}\public\javascripts\chap04\4_4_http_http2> node .\1_1_2_sslServer.js
   HTTPS server running at https://localhost

   웹브라우저에서 https://localhost 로 접근후
   Hello HTTPS localhost! 가 나타나면 개발 테스트용 SSL 정상 동작 (적용완료)

   SSL서버는 기동시에는 443 port를 사용할것..
**/
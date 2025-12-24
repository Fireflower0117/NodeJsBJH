/* 1_2_1_cookie.js를 실행하고 새로고침(F5)를 해도 쿠키는 여전히 유지된다.
*  원하는대로 동작하긴 하지만 이런 방식은 상당한 위험에 노출되어있다.
*  웹브라우저에서 개발자모드(devtools)로 Application탭에서 cookie가 노출되어있다.
*  또한 쿠키가 조작(가공)될수도 있다. 그래서 민감정보(로그인정보)를 쿠키에 저장하는것은 추천하지 않는다.
*  그래서 아래와 같은 서버가 사용자 정보를 관리하도록 만드는것이 cookie보다 안전하다.
* */

const http = require('http');
const fs = require('fs').promises;
const path = require('path');


const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
                acc[k.trim()] = decodeURIComponent(v);
                return acc;
         } , {});

const session = {};

http.createServer(async (req , res) => {
    const cookies =  parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const url = new URL(req.url, 'http://localhost:8085');
        const name = url.searchParams.get('name'); // 1_2_1_cookie.html에서  input name='name' 으로 전송한정보

        const expires = new Date();
        expires.setMinutes( expires.getMinutes() + 5);  // 쿠키 유효기간 현재시간 + 5분

        // 쿠키의 고유키정보를 위해 uniqueInt를 생성하고 session객에세 uniqueInt를 key정보로 저장했다.
        const uniqueInt = Date.now();
        session[uniqueInt] = { name , expires }

        // '/'주소로 redirect 시킨다. 쿠키이름을 session으로하고 uniqueInt값을 value로 담았다.
        res.writeHead(302, {Location : '/', 'Set-Cookie' : `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`});
        res.end();
    }
    // '/' 리다이렉션하고 cookie이름중에 session이라는 이름이 있고, 만료기간이 경과하지 않았다면..
    else if(cookies.session && session[cookies.session].expires > new Date()){
        res.writeHead(200 , {'Content-Type': 'text/plain; charset=utf-8'});
        // cookies.session = uniqueInt 정보이고, session객에서 찾는다. 찾은 객체의 .name
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    }
    else {

        // '/login'으로 시작하지도 않고, cookie중에 session이라는 이름이 없다면..
        //  1_2_1_cookie.html 페이지로이동
        try{
            const data = await fs.readFile(path.join(__dirname, '1_2_1_cookie.html')); // data = Buffer
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }

})
.listen(8085 , () => {
    console.log('8085번 포트에서 서버 대기 중입니다.');
});

/* 1_2_1_cookie.js와 비교해보면 조금 달라진 부분이 있다.
   쿠키에 이름을 담아 보내는대신, uniqueInt 숫자값을 name으로 설정해 응답했다.
   사용자의 이름과 만료시간은 uniqueInt속성 아래에 session객체에 대신 저장했다.
   이제 cookie.session이 있고 만료기한을 넘기지 않았다면 session 변수에서 사용자 정보를 사용한다.

   물론 실제 운영서버에서는 세선을 뒤에서 설정한것같이 session = {} 객체로 관리하지는 않는다.
   서버가 재기동 되면 저장됨 변수(session)가 초기화 되버리기 떄문이다.
   그래서 보통은 Redis , Memcached 같은 DB에 저장해둔다.

   사실 위의 방식역시 세션ID값이 공개되어 있어 누출되면, 다른사람이 악용할 소지가 있다.
   그래서 운영서버에 절대로 위의 코드처럼(session객체활용) 적용하면 안된다.
   위의 코드는 쿠키의 개념을 익히기 위한 것일뿐이다. 보안에 매우 취약함을 보인다.

 */
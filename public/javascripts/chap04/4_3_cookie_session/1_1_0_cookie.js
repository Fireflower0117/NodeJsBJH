/* 서버에서 직접 쿠키를 만들어 요청자의 브라우저에 넣어본다.  */

const http = require('http');

http.createServer( (req , res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200 , {'Set-Cookie' : 'mycookie=opennote'});
    res.end('Hello Cookie');
})
.listen(8083, () =>{
    console.log('8083포트로 서비스를 시작합니다.');
});


/* {projecthome}\public\javascripts\chap04\4_3_cookie_session> node .\1_1_0_cookie.js
   8083포트로 서비스를 시작합니다.

   크롬기준 > 개발자도구 (F12) , Ctrl + Shift + I
   애플리케이션 Tab > 쿠키 (열기)
   이름이 opennote인 cookie가 보이고 expire = 세션(session)
   웹브라우저가 닫히면 쿠키가 사라짐

   쿠키는 name=opennote;year=2014처럼 문자열 형식으로 존재한다. 각 쿠키간에는 세미콜론(;)으로 넣어 속성을 구분한다.
   createServer 메서드의 콜백에는 req, res가 있는데 req.headers.cookie에 들어있다.
   코키는 요청과 응답헤더를 통해 오고간다.

   요청은 한번만 보냈는데 console의 log상에는 두개가 기록되어있다.
   /favicon.ico는 요청한적이 없는데 요청정보에 포함되어있다.
   파비콘은 (favorite Icon)의 약자로, 웹브라우저 title영역 왼족에 붙어있는 조그만 아이콘이다.



*
* */
/* 이전에는 단순히 쿠키만 웹브라우저에 심을을뿐이다. 그 Cookie가 본인을 식별해주지는 못하고있었다.
*  이제 사용자를 식별하는 방법을 알아보자.
* */

const http = require('http');
const fs = require('fs').promises;
const path = require('path');

// 1)
const parseCookies = (cookie = '') => //  cookie값이 undefinde라면 default값('')을 설정한다.

        // 0)
        cookie
            .split(';') //  예를 들어 쿠키값이 "k1='v1';k2='v2';k3:'v3'"라면 ["k1='v1'","k2='v2'","k3='v3'"] 형태로 분할한다( split )
            .map(v => v.split('='))
            // map는 내부적으로 Array를 가지고있으며, 반복(iteration)을 수행한다.
            // 그래서 map(v => v.split('='))의 결과는 [ ["k1", "v1"], [" k2", "v2"],  [" k3", "v3"] ] 이되며 결과는 reduce로 전잘된다.
            .reduce((acc, [k, v]) => {  // 누산기(accumulator) / reducer 패턴
                    acc[k.trim()] = decodeURIComponent(v);
                    return acc;
                    // 여기서 acc매개변수는 누산기(accumulator)의 약어이다. reduce또한 내부적으로 반복(iteration)을 수행하며 수행결과를 acc에 저장(누적)할수도있다.
                    // 첫번째 foreah에서는 acc={}이고,  [k , v]는  [k1, 'v1']와 같다.  그리고 acc[k.trim()] = decodeURIComponent(v); 수행결과 => acc = {k1:'v1'}
                    // 두번쨰 foreah에서는 acc={k1:'v1'} 이고,  [k , v]는  [k2, 'v2']와 같다.  그리고 acc[k.trim()] = decodeURIComponent(v); 수행결과 => acc = {k1:'v1',k2:'v2'}
                    // 세번쨰 foreah에서는 acc={k1:'v1',k2:'v2'} 이고,  [k , v]는  [k3, 'v3']와 같다.  그리고 acc[k.trim()] = decodeURIComponent(v); 수행결과 => acc = {k1:'v1',k2:'v2',k3:'v3'}
                }
                , {});
                // reduce의 acc(누적변수) 형태를 지정한다.  ==>> 여기서 Object({}) 로 선언했기때문에 reduce의 acc는 Object가 된다.


http.createServer( async (req , res) => {
    const cookies = parseCookies(req.headers.cookie);

    // 2)
    if(req.url.startsWith('/login')){
        const url = new URL(req.url, 'http://localhost:8084');
        const name = url.searchParams.get('name');  // url.searchParams => QueryString
        const expiresDt = new Date();

        // 쿠키 유효시간을 현재시간 + 5분으로 설정
        expiresDt.setMinutes(expiresDt.getMinutes() + 5);
        res.writeHead(302, {location : '/', 'Set-Cookie': `name=${encodeURIComponent(name)}; expires=${expiresDt.toGMTString()}; HttpOnly; Path=/`,});
        res.end();
    }
    else if(cookies.name){ // 3)
        res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(`${cookies.name} 님 안녕하세요.`);
    }
    else {  // 4)
        try {
            const data = await fs.readFile(path.join(__dirname, '1_2_1_cookie.html'));
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        }
        catch(err){
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
.listen(8084 , () => {
   console.log('8084번 포트에서 서비스를 시작합니다.');
});

/*    {projecthome}\public\javascripts\chap04\4_3_cookie_session> node .\1_2_1_cookie.js
      8084번 포트에서 서비스를 시작합니다.

      웹브라우저에서 localhost:8084/에 접근해본다.

   0) parseCookies 메서드 내부
      map, reduce 가 궁금하면 구글에 mapreduce를 검색할것을 추천한다.
      map() : https://www.freecodecamp.org/korean/news/javascript-map-method/
      reduce() : https://tocomo.tistory.com/26

   1) 쿠키는 mycookie=test같은 문자열이다. parseCookies함수는 쿠키 문자열을 쉽게 사용하기위해 자바스크립트 객체 형식으로
      만들어 반환하는 함수디다. 이함수의 결과는 {mycookie:'test'} 형태가 된다.

   2) 로그인 요청을 처리하는 부분이다. form은 GET요청인경우 데이터를 QueryString으로 보내기떄문에 URL객체로 QueryString를 분석했다.
      쿠키의 만료시간(expires)을 현재시점보다 5분이후로 지정했다. 쿠키의 다이렉트(302) 주소와 함께 쿠키정보를 Respose Header에 넣는다.
      웹브라우저는 Response의 Header정보에 따라 '/' 로 리다이렉션 한다.
      ResponseHeader에는 한글을 입력할수없으니 encodeURIComponent()로 한글인 인코딩했다.

   3) 2)에서 리다이렉션한 '/'주소가 전달되는 부분이다. response에 '/' 주소로 cookie를 생성했으므로 쿠키정보를 가져올수있다.

   4) 만약 Cookie정보가 없다면 쿠키정보를 입력/로그인할수있는 페이지(1_2_1_cookie.html) 로이동한다.

---------------------------------------------------------------
   Cookie에는 입력되면 안되는 글자들이 있는데, 한글도 포함된다. 한글은 encodeURIComponent() 메서드로 감싸서 넣는다.

    === Cookie속성 ===
    쿠키명=쿠키값  : 기본적인 쿠키값을 입력한다. ex) myCookie=test , name=opennote 등등..
    Expires=날짜 : 쿠키의 만료기간을 설정한다.  기간이 경과하면 쿠키가 삭제된다.
    Max-age=초  : Expires와 비슷하지만 날짜대신, 유효기간(초((second)))정보로 설정한다.
                  생성시점터 설정된 시간이 경과하면 쿠키는 삭제된다.
    Domain=도메인명 : Cookie가 전송될 특정도메인을 설정할수있다. 기본값은 현재 시스템의 도메인이다.
    Path=URL : 쿠키가 전송될 특정 URL을 지정할수있다. 기본값은 '/' 이고, 이경오 모든 URL에 쿠키를 전송할수있다.
    Secure : Https일 경우만 쿠키를 선송한다
    HttpOnly : 설정시 자바스크립트에서는 쿠키에 접근할수가 없다. (쿠키 가공불가)

**/

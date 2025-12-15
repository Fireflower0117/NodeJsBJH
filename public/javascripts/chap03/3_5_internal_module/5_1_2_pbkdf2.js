/* 해킹용 컴퓨터의 성능 발달로 기존의 Hash암호화 알고리즘이 위협을 받고있다.
*  언젠가 조만간 sha512암호화 알고리즘도 보안취약점이 발견될것이다.
*  그땐 sha3 알고리즘을 사용하면 된다.
*
*  현재는 주로 pbkdf2, bcrypt 알고리즘으로 암호화를 수행한다.
*  그중 노드에서 지원하는 pbkdf2알고리즘을 학습해본다.
**/

const crypto = require('crypto');

crypto.randomBytes(64 , (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt : ', salt); // salt 생성

    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
       console.log('password : ', key.toString('base64'));
    });
});
/* 우선 crypto.randomBytes() 함수로 64Byte길이 문자열을 만든다. 이것이 salt가 된다.
   salt란 소금이란뜻으로 비밀번호에 일부문자열을 추가하여 암호화를 수행하는데,  이떄 추가되는 문자열을 salt라고 한다.

   crypto.pbkdf2 함수의 인자는 차례대로 '입력비밀번호', salt , 반복횟수 , 출력바이트 , Hash알고리즘 순서대로 넣었다.
   위의 예시는 10만번을 반속해서 적용한 결과물이 콘솔에 출력된것이다.
   sha512로 변환된 결과값을 다시 sha512로 암호화과정을 10만번을 수행한것이다.

   반복이 너무많으면 시간이 오래걸리는것이 아닌지.. 서버 성능에 따라 조정이 필요하다.
   노드 같은 싱글스레드 프로그래밍에서 1초동안 스레드가 블로킹되는것이 큰문제일수 있다.
   다행이 crypto.randomBytes()  , crypto.pbkdf2() 같은 함수는 내부적으로 스레드 풀을 사용해서
   멀티 태스킹으로 동작해서 문제가 발생하지는 않는다.

   {projecthome}\public\javascripts\chap03\3_5_internal_module>node .\5_1_2_pbkdf2.js
   수행을 반복해보면 할떄마다 암호화 결과가 다르다. 따라서 salt도 잘보관해야 하는 이유이다.

 */

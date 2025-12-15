/*
이번에는 양방향 암호화에대해 알아본다.
양방향 암호화는 암화화 결과를 복호화 할수있으며, 복호화를 위해 key(열쇄)를 사용한다.
양방향 암호화는 대칭형과 비대칭형으로 분류한다.
대칭형 암호화는 암호화할떄 사용했던 key값을 복호화에서도 같은 key를 사용하는 방식이다.
아래는 노드로 양방향 암호화를 수행하는 방법이다.
*/

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456'; // 32byte
const iv = '1234567890123456'; // 16 byte

const password = 'encode패스워드';
console.log('암호화 이전 원문 : ', password);

const cipher = crypto.createCipheriv(algorithm, key , iv); // 암호화
let encResult = cipher.update(password,'utf8', 'base64'); // 입력 utf8 , base64
encResult += cipher.final('base64');
console.log('암호화 결과 : ', encResult);

const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 (암호화와 같은 알고리즘,key,iv);
let decResult = decipher.update(encResult, 'base64', 'utf8'); // 입력 base64, utf8
decResult += decipher.final('utf8');
console.log('복호화 결과 : ',decResult);

/*  {projecthome}\public\javascripts\chap03\3_5_internal_module> node .\5_2_0_cipher.js
    암호화 이전 원문 :  encode패스워드
    암호화 결과 :  z9PNO2mK/g/ksUFqVznIt6o/vpp+xiC4ZLPmfvzTDZU=
    복호화 결과 :  encode패스워드

    crypto.createCipheriv(알고리즘, 키 , iv)
               암호화 알고리즘은 aes-256-cbc를 사용했으며 다른 알고리즘을 사용해도 된다.
               aes-256-cbc알고리즘의 경우 키는 32byte여야 하고, iv는 16byte여야 한다.
               iv은 초기화 벡터를 의미한다. iv를 설명하기엔 양이 방대하므로 별도로 공부하는것을 추천한다.
               사용가능한 알고리즘 목록은 crypto.getCiphers()를 호출하면 볼수있다.

    cipher.update(문자열, 인코딩, 출력인코딩) : 암호화할 대상과 대상의 인코딩, 출력결과물의 인코딩을 넣는다.
               보통 문자열은 utf8 , 출력 인코딩은 base64를 많이 사용한다.

    cipher.final(출력인코딩) : 출력 결과물의 인코딩을 입력하면 암호화를 수행한다.  (암호화 완료)

    crypto.createDecipheriv(알고리즘, 키 , iv) : 복호화 할떄 사용한다. 암호화할떄 사용했던 알고리즘, 키, iv그대로 넣어야 한다.

    decipher.update(문자열, 인코딩, 출력인코딩) : 암호화된 문장, 그문장의 인코딩, 복호화할 인코딩을 입력한다.
               cipher.update의 입력순서가 utf8, base64순서대로 넣었다면
               decipher.update에서는 base64, utf8순서대로(반대로) 넣는다.

     decipher.final(출력인코딩) : 복호화 결과물의 인코딩을 입력한다.

     그외에도 crypto모듈은 양방향, 비대칭형, HMAC 등의 다양한 암호화를 제공한다.
     노드 공식문서(https://nodejs.org/api/crypto.html)을 참고하면 된다.
**/

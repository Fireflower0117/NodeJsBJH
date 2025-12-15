const crypto = require('crypto'); // Node 내장 암호화 모듈

console.log('base64 : ', crypto.createHash('sha512').update('password').digest('base64'));
console.log('hexa : ', crypto.createHash('sha512').update('password').digest('hex'));
console.log('base64 : ', crypto.createHash('sha512').update('OtherPassword').digest('base64'));

/*  'password' 문자열을 Hash를 활용해 암호화 시켰다.
*   createHash('알고리즘') : 사용할 Hash알고리즘을 넣는다. (MD5, sha1, sha256, sha512 등등...)
*                          MD5, sha1 알고리즘은 보안취약점으로 인해 권장하지 않는 알고리즘이다.
*                          sha256은 hash결과가 256byte이고 sha512는 hash결과가 512byte라는 뜻이다.
*                          byte가 클수록(길이가 길수록) 암호화 강도는 강해진다.
*   update('문자열') : 암호화 대상 문자열을 입력
*   digest('인코딩') : 인코딩할 알고리즘을 입력한다. 주로 base64, hex, latin1이 사용된다.
*                     그중 base64가 결과문자열이 짧아서 주로 사용된다.
*
*
* */


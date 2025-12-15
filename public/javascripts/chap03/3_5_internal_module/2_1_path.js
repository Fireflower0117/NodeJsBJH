/** 폴더와 파일의 경로를 쉽게 조작할떄 유용한 모듈이다.
 * path모듈이 필요한 이유즁하나는 운영체제 별로 경로구분자(system.seperator)가 다르기 때문이다.
 * 크게 Window계열과 POSIX 타입으로 구분한다.
 * windows : C:\Users\...  처럼 \를 구분자로 쓴다
 * POSIX : /home/....   처험 /를 구분자로쓴다.  (linux , unix, mac 등등...)
 */

const path = require('path');
const string = __filename;

console.log('path.sep : ', path.sep);  // 경로 구분자
console.log('path.delimiter : ', path.delimiter); // 환경변수의 구분자 (window : ';', POSIX : ':')
console.log('--------------------------------------------------------------------');
console.log('path.dirname() : ',path.dirname(string)); // 현재파일의 경로
console.log('path.extname() : ',path.extname(string)); // 현재파일의 확장자
console.log('path.basename() : ',path.basename(string));// 현재파일의 이름 + 확장자
console.log('path.basename - extname : ', path.basename(string, path.extname(string))); //
console.log('--------------------------------------------------------------------');
console.log('path.parse() : ', path.parse(string)); // 파일의 경로를 root ,base , ext , name으로 분리
console.log('path.format() : ', path.format({
      dir : 'C:\\Users\\PC'
    , name : 'path'
    , ext : '.js'
})); // apth.parse() 결과 객체를 파일 경로로 합침
console.log('path.normalize() : ',path.normalize('C://users\\\\PC\\\path.js')); // path.sep 혼동시 정상경로로 변환
console.log('--------------------------------------------------------------------');
console.log('path.isAbsolute(C:\\) : ', path.isAbsolute('C:\\')); // 파일의 경로가 절대경로 여부를 판단 (Window : true)
console.log('path.isAbsolute(./home) : ', path.isAbsolute('./home')); //  (POSIX : true)

console.log('--------------------------------------------------------------------');
// path.relative(기준경로, 비교경로) => 기준경로에서 비교경로로 가는 방법
console.log('path.relative() : ', path.relative('C:\\users\\PC\\path.js', 'C:\\'));


// path.join , path.resolve => 여러개 인수를 넣으면 하나의 경로로 합침
console.log('path.join() : ', path.join(__dirname, '..', '..','/users','.','fireflower'));
console.log('path.resolve() : ', path.resolve(__dirname, '..', 'users','.','/fireflower'));
/* path.resolve도 경로롤 합치는데 /를 만나면 절대경로로 인식해서 앞의 경로는 무시하고
  ,path.join은 상대경로로 처리한다.
  ex)  path.join('/a','/b','/c',d);  => /a/b/c/d
       path.resolve('/a','/b','/c','d') => /c/d  (마지막 /인 /c앞은 전부 제거한다. )
*/

/* __filename , __dirname는 각각 현재 파일과 폴더의 경로를 나타낸다.  */
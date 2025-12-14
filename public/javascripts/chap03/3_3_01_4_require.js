console.log('require가 가장위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';
require('./3_3_01_2_2_var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);

// 콘솔에 나오는 정보는 PC마다 각각 다를수 있다.
// 여기서 알아야할것은 require가 반드시 파일의 최상단에 있지 않아도 된다는것이다.파일의 아무위치에서나 사용해도 된다.

// require.cache객체에 3_3_01_4_require.js , 3_3_02_1_var.js파일의 정보들어있다.
// 한번 require한 파일은 require.cache에 저장되므로 다음번에 require할떄는 require.cache에서 읽어온다.
// 만약 계속 새로 require하길 원한다면 require.cache속성을 제거하면된다. (프로그램이 비정상동작위험 , 권하지 않음)

// require.main은 현재 실행한 파일(3_3_04_requre.js)을 가리킨다.
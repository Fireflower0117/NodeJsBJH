/* util 모듈은 여러가지 편의기능을 모아둔 모듈이다.
   계속해서 API가 추가되고있으며 가끔 deprecated되어 사라지는 경우도 있다.

   deprecated란 프로그래밍 용어로써 중요도가 떨어지며, 더이상 사용하지 않을것을 권장, 머지않아 update되면 곧 사라지게 될 기능
*/

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
    console.log(x + y);
}, 'dontUseMe 함수는 deprecated 되었으니 더이상 사용하지 마세요.');

dontUseMe(1,2);

/* util.deprecate 함수를 더이상 사용하지 않는것을 권장한다. (deprecated)
         첫번쨰 인수로  수행함수를 넣고, 두번쨰 인수로 경고메세지를 입력한다.
 */


const randomBytePromise = util.promisify(crypto.randomBytes); // crypto.randomBytes함수를 Promise형태로 변경한다.
    randomBytePromise(64)
        .then((buf) => {
            console.log(buf.toString('base64'));
        })
        .catch((error) => {
           console.error(error);
        });

/*  util.promisify() : 콜백패턴 프로미스로 변경한다.
                       이렇게 바꿔두면 async , await 패턴까지 사용할수있다.
* */

/*
 {projecthome}\public\javascripts\chap03\3_5_internal_module> node .\6_1_0_util.js
 3
 (node:13972) DeprecationWarning: dontUseMe 함수는 deprecated 되었으니 더이상 사용하지 마세요.
 (Use `node --trace-deprecation ...` to show where the warning was created)
 PoKIb25yOXkhblg/ROWk6ezwTCHMfg3OGu9bwC8+bCO426n5R3vd4rnaC+lwkopqePMTIl8f8MzVEKPegPnWxg==
 */
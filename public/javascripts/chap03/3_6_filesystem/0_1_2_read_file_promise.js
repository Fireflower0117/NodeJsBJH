/* fs모듈은 기본적으로 콜백형식의 모듈이므로 실무에세 사용하기가 불편한 점이잇다.
* 그래서 fs모듈을 promise 형식으로 바꿔서 사용하는 방법을 알아본다.*/

const fs = require('fs').promises;

fs.readFile('./0_1_1_readme.txt')
    .then((data) => {
        console.log('Data : ', data);
        console.log('Read Data : ', data.toString());
    })
    .catch((err) => {
        console.error(err)
    });

/* fs모듈을 promise 속성으로 불러오면 프로미스기반 fs모듈을 사용할수있다. */

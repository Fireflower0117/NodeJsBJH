// 자바스크립트와 노드는 보통 비동기를 접한다.
// EventListener대신 CallBack함수를 자주사용한다.
// ES2015부터는 Javascript와 Node의 API들이 CallBack대신 Promise기반으로 재구성되며 CallBack지옥 현상을 극복햇다는 평가를 받고있다.
// 프로미스는 규칙이 있다. 먼저 Promise 객체를 생성해야 한다.

const condition = false;
const constPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공')
    }
    else {
        reject('실패')
    }
});

constPromise
    .then((message) =>{
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
       console.log('무조건 실행')
    });


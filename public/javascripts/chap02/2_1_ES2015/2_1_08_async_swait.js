// 노드 7.6부터 지원되는기능으로 ES2017에서 추가됐다.
// Promese가 콜백지옥을 해결했다고 하지만 then catch가 반복되어 장황해 보인다.
// async / await 구문으로 더 깔끔한 코드로 해결할수있다.

function findAndSaveUser(Users){
    Users.findOne({})
        .then( user => {
            user.name = 'zero';
            return user.save();
        })
        .then(user =>{
            return Users.findOne({gender : 'm'})
        })
        .then( (user) => {
            // 생략
        })
        .catch(err => {
            console.error(err)
        });
}
// 콜백과 다르게 깊이가 깊지는 않지만 코드길이는 여전히 길다.

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({genger : 'm'})
    // 생략
}
// async await로 코드의 길이가 많이 짧아졌다.
// 함수선언부를 async function으로 교체후, 프로미스앞에 await를 붙였다.
// 이제 함수가 resolce까지 대기수 다음 로직으로 넘어간다.
// 예를들어 await Users.findOne({})가 resolve 될때까지 대기후 다음에 user변수를 초기화한다.
// 이제 에러를 처리하는부분을 추가해본다.

async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({genger : 'm'});
        // 생략
    } catch(error){
        console.error(error);
    }
}

// 로직을 try catch문으로 감싸서 에러처리를 할수있다.
// 화살표 함수도 async와 같이 사용할수있다.

const findAndSaveUser = async (Users) => {
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({genger : 'm'});
        // 생략
    } catch(error){
        console.error(error);
    }
};

// for문과 async / await를 같이 사용해서 프로미스를 순차적으로 실행할수있다.
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();

// for async await 키워드를 사용해서 배열을 순회하는 모습이다.
// async의 반환값은 항상 Promise로 감싸진다.
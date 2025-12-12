// 구조 분해 할당
// 구조 분해 할당 문법을 사욯나면 객체나 배열로 부터 속성이나 요소를 쉽체 꺼낼수있다.

var candyMachine = {
    status : {
        name : 'node'
      , count : 5
    }
    , getCandy : function(){
        this.status.count--;
        return this.status.count;
    }
    ,
};
var getCandy = candyMachine.getCandy();
var count = candyMachine.status.count;
console.log(`candy : ${getCandy} , count : ${count} `);

// ES 2015부터는 아래와 같이 바꿀수있다.
const newCandiMachine = {
    newStatus : {
          newName : 'node'
        , newCount : 5
    }
  , newGetCandy(){
        this.newStatus.newCount --;
        return this.newStatus.newCount;
    }
}

const { newGetCandy } = newCandiMachine;
console.log(`new candy : ${newCandiMachine.newGetCandy()} , count : ${newCandiMachine.newStatus.newCount}`);

// 상이 문법은 유효한 문법이다.  newCandiMachile의 속성을 찾아 변수와 매칭한다.
// newCandiMachine.getCandy 함수를 const newGetCandy에 할당했다.
// 그래서 구조분해할당 이라한다.

// 배열에 대한 구조분해할당 문법도 존재한다.
var array = ['oldNode', {} , 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];
console.log(`old : ${node}, ${obj}, ${bool}`)
// 상기 Array의 할당을 아래로 바꿀수있다.

const newArray = ['newNode',{}, 10 , true];
const [newNode , newObj , , newBool] = newArray;
console.log(`new : ${newNode}, ${newObj}, ${newBool}`);

// 조금은 이상해보이지만 나름의 규칙이 존재한다.
// 할당은 배열의 요소순서대로 할당한다. newArray[0]인 'node'는 const [0번째 상수 newNode에 할당 ]
// newArray[1] 은 const [1번째 상수 newObj에 할당 ]  10은 할당할것이 없으니..  , ,  형식으로 할당은 Pass하고
// newArray[3] 은 const [3번째 상수 newBool에 할당 ] 이런식이다.

// 참고 페이지  https://ko.javascript.info/destructuring-assignment





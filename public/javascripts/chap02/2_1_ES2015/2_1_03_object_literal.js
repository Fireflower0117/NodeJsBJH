// 객체 리터럴
// 객체 리터럴에는 편리한 기능들이 추가되었다.

var sayNode = function(){
    console.log('Node');
}

let es = 'ES';
var oldObject = {
    sayJs: function(){
        console.log('JS');
    }
    ,sayNode : sayNode,
}

oldObject[es + 6] = 'Fanstic';  //  oldObject.ES6
oldObject.sayNode(); // Node
oldObject.sayJs(); // JS
console.log(oldObject['ES6']); // Fanstic

// 위으 스크립트를 아래와 같이 다시 쓸수있다.

const newObject = {
    sayJS(){                    //  newObject.sayJS
        console.log('New JS');
    }
  , sayNode                          //  newObject.sayNode (객체의 key이름도 sayNode , value도 sayNodedl로 명칭이 같으면 한번만 사용해되 된다.)
  , [es + 6] : 'New Fanstic'             //  newObject.ES6
  ,
}
newObject.sayNode(); // Node
newObject.sayJS();   // JS
console.log(newObject['ES6']); // Fanstic

// oldObject ,  newObject 비교해보면 sayJS같은 객체에 함수를 연결할떄 더는 콜론(:)과 function을 붙이지 않아도 된다. (newObject.sayJS)
// 속성명과 변수명이 동일한경우는 한번만 써도 되게끔 바뀌었다. (newObject.sayNode)

// {name: name , age: age} // ES5
// {name, age} // ES2015이상

// 예전문법에서는 ES6라는 속성명을 만들때는 객체리터럴 밖에서 해야 핬다. (oldObject.ES6)
// ES2015부터는 객체리터럴 내부에서 선언을 해도 된다. (newObject.ES6)

// 리터럴(literal) 이란..
// 프로그래밍 언어의 소스 코드에서 특정한 자료형의 값을 그대로(literally) 표현하는 문법 또는 토큰을 말한다.
// https://namu.wiki/w/리터럴
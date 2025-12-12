// 화살표 함수
// 화살표 함수는 () => {}  형식의 함수이다.
// ES2015부터 화살표 함수가 추가되었다. 물론 기존에 사용하던 문법( function(){} )도 사용가능하다.

function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x){
    return !x;
}

const not2 = x => !x;

// add1, add2, add3, add4는 같은기능을 하는 함수다.
// not1, not1도 마찬가지로 같은 기능을 하는 함수다.

// 화살표 함수는 내부에서 return문 밖에 없는경우 , return 키워드를 생략 할수있다.
// 중괄호 대신 add3, add4처럼 return할 식을 바로 작성하면 된다.
// 물론 add4처럼 중괄호('{}')로 감싸도된다.
// not2처럼 매개변수가 1개일떈 매개변수를 소괄호('()')로 감싸지 않아도 된다.

// 기존의 function과 다른점은 this 바인드 방식이다.

var relationship1 = {
    name : 'zero'
  , friends : ['nero','hero','xero']
  , logFriend : function(){
        var that = this; // relationship1을 가리키는 this를 that변수에 저장
        this.friends.forEach(function(friend){
           console.log(that.name, friend);
        });
    }
}
relationship1.logFriend();

// relationship1.logFriends(); 안에 forEach문에는 function을 선언하고 사옹했다.
// 각자다른 함수 scope를 가지므로 that 변수에 this를 선언한다음 relationship1에 간접적으로 접근할수있다.

const relationship2 = {
    name : 'Zero2'
  , friends: ['nero2','hero2','xero2']
  , logFriends(){
        this.friends.forEach( friend => {
           console.log(this.name , friend);
        });
    }
}
relationship2.logFriends();

// relationship2에서는 logFriends에 function을 선언하지 않고 사용하고있다.
// 따라서 logFriends 함수는 함부바깥 스코프인 this를 접근할수있다.

// 스코프(Scope)는 범위라는 뜻이다.
// 블록스코프란 블록({}) 내부에서 사용가능한 범위의 함수나 객체를 말한다.


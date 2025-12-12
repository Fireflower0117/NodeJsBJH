// ES2015에서는 클래스 문법도 추가되었다.
// 하지만 다른 언어들처럼 클래스 기반의 동작이 아니라 여전히 프로토타입 기반으로 동작한다
// 다음은 프로토타입 상속 예제 코드이다.

var Human = function(type){
    this.type = type || 'Human';
}

Human.isHuman = function(human){
    return human instanceof Human;
}

Human.prototype.breathe = function(){
    console.log('h-a-a-m');
};

var Zero = function(type , firstName, lastName){
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function(){
    console.log('firstName : '+this.firstName + ', lastName : ' + this.lastName);
}
var oldZero = new Zero('human', 'Zero', 'Cho');
var isHuman = Human.isHuman(oldZero); // true
console.log(`Zero isHuman : ${isHuman}`);
// console.log(`Zero sayName : ${oldZero.sayName()}`);

// 위의 코드를 클래스기반 코드로 바꿔보겠습니다.

class newHuman{
    constructor(type = 'human') {
       this.type = type;
    }

    static isHuman(human){
        return human instanceof newHuman;
    }
    breathe(){
       console.log('New h-a-a-a-m');
    }
}

class newZero extends newHuman{
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName(){
        super.breathe();
        console.log(`newZero firstName : ${this.firstName} , lastName : ${this.lastName}`);
    }
}

const constNewZero = new newZero('humann', 'Zero', 'Cho');
let isNewHuman = newHuman.isHuman(constNewZero);
console.log(`isNewHuman : ${isNewHuman}`);
constNewZero.sayName();
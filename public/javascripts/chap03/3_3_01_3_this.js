console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis(){
    console.log('function', this === exports, this === global);
}
whatIsThis();

// 최상위 Scope에 존재하는 this는 module.exports, export객체를 가리킨다.
// 함수블록내부에 this는 global객체를 가리킨다.global객체는 나중에 배워보기로한다.
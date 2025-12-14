const dept1 = require('./3_3_01_5_1_dept1');
const dept2 = require('./3_3_01_5_2_dept2');
dept1();
dept2();

// dept1의 module.exports가 함수가 아니라 빈객체로 나온다. ( require dept1 :  {} )
// 이러한 현상을 순환참고 (circular dependency)라고 한다.
// 이러한 순환참조가 있을떈 순환참조 대상을 빈 객체({})로 만든다.
// 순환참조는 Error이 아니고 Warinig(경고)를 나타낸다.
// 이러한 경우도 빈객체로 예기치 않은 비정상 동작이 발생할수있으니, 순환참조가 발행하지 않도록 구조를 잘 설계 해야한다.

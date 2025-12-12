// ES2020에서 추가된 ??(널병합) 연산자와, ?. (옵셔널 체이닝 : Optional Chaining) 연산자다.
// null병합은 주로 || 연산자 대용으로 사용한다.  falsy값 (0 , '' , false , NaN, null, undefined) 중에서
// null과 undefined만 따로 구분한다. (값이 null과 undefined일떄만 동작한다.)

const a = 0;
const b = a || 3; // ||연산자(or)는 좌변이 falsy면 우변으로 넘어간다. (a가 falsy면 b는 3이다.)
console.log(b);

const c = 0;
const d = c ?? 3 ; // 열병합(??)연산자는  좌변이 null과 undefined일떄만 두변으로 넘어간다.
console.log(d); // 0

const e = null;
const f = e ?? 3; // 좌변 e가 null이므로 우변 3으로 넘어간다.
console.log(f); // 3

const g = undefined;
const h = g ?? 3;
console.log(h); // 3

// 옵셔널 체이닝 연산자는 변수의값이 null이나 undefined의 경우 에러가 발생하는것을 방지할수있다.
const aa = {};
aa.b // aa는 객체이므로 에러가 발생하지 않는다.

const cc = null;
try{
    cc.d;
}catch(error){
    console.log(e); // TypeError 발생
}
// 상단의 try catch로 에러를 제어했다면 null병합으로 간단히 해결할수있다.
cc?.d; // 문제없음 (d값이 있으면 d반환, 없으면 undefined 반환

try{
    cc.f();
}catch(error){
    console.log(error); // TypeError발생
}
// 상단의 try catch로 에러를 제어했다면  null병합으로 간단히 해결할수있다.
cc?.f();  // 문제없음 (있으면 함수실행 , 없으면 장애발생안하고 무시)

try{
    cc[0];
}catch(error){
    console.log(error); // TypeError발생
}
cc?.[0]; // 문제없음 (요소가 있으면 반환 , 없으면 undefined반환






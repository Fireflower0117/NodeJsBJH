// ES2015에서 부터 Map,Set자료구조가 추가되었다.
// Map은 객체와 유사하고, Set은 배열과 유사하다.

const m = new Map();
m.set('a','b');  // Key , value을 기준으로 Map에 저장
m.set(3,'c'); // 문자열이 아닌 값을 키로 사용할수도있다.

const d = {};
m.set(d, 'e'); // 객체도 키로 사용할수있다.

m.get(d); // get(key)로 속성을 조회 할수있다.
console.log(m.get(d));

m.size;
console.log(m.size);

// for of , in  참고자로 : https://ko.javascript.info/array
for(const [k , v] of m ){ // 반복문에 배열을 넣어 사용가능하다.
    console.log(k , v);
}

m.forEach((v ,k) => { // forEach도 가능하다.
    console.log(k, v);
});

m.has(d); // has(key)로 속성의 존재여부를 확인할수도 잇다.
console.log(m.has(d)); // true

m.delete(d); // delete(key)로 삭제할수있다.
m.clear(); // Map의 속성을 전부 제거한다.
console.log(m.size); // 0

// Map은 속성들간의 순서를 보장하고 반복문을 사용할수있다.

const s = new Set();
s.add(false); // add(요소)로 Set에 추가한다.
s.add(1);
s.add('1');
s.add(1);  // 중복입력으로 무시된다.
s.add(2);

console.log(s.size);
s.has(1); // has로 요소의 존재여부를 확인할수있다.
console.log(s.has(1)); // true

for(const a of s){
    console.log(a); // false , 1 , '1' , 2
}

s.forEach((a) =>{
    console.log(a); // false , 1 , '1' , 2
});

s.delete(2);  // delete(요소)로 요소를 제거한다.
s.clear(); // clear() 로 요소를 전부 제거한다.

// Set은 중복을 허용하지 않은것이 특징이다.  ( Array는 중복허용 )
const arr = [1,3,2,7,2,6,3,5];  // Array선언 (중복허용)
const s2 = new Set(arr);  // Set으로 변환 (중복요소가 발생하면 continue 한다. )
const result = Array.from(s);  // Set을 Array로 변환
console.log(result); // 1,3,2,7,6,5 // 중복값 제거

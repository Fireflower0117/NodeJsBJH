/* REPL에 코드를 입력하는 대신 이번에는 자바스크립트 파일을 만들어 실행본다.
*/

function helloWorld(){
    console.log('Hello World OpenNote');
    helloNode();
}

function helloNode(){
    console.log('Hello Node OpenNote');
}

helloWorld();

/*
* 현재 파일을 실행해본다.
* 만약 인텔리J를 사용한다면 여기파일에서 선택+ 우클릭 > 경로/참조복사 를 선택
* 절대경로를 선택후 메모장에 붙여넣기를 해보면 이파일의 경로를 알수있다.
* 인텔리J 터미털에서 현재파일의 경로로 이동후
 {projectHome}\public\javascript\chap03>node 3_2_00_executeJs.js
* 실행해본다. 실행결과가 아래로 나오면 정상 동작 한것이다.
  Hello World OpenNote
  Hello Node OpenNote

  파일 확장자 js는 입격하지 않아도 된다.
  {projectHome}\public\javascript\chap03>node 3_1_02_executeJs
  Hello World OpenNote
  Hello Node OpenNote
**/
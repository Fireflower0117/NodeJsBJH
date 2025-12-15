/** 가장먼저 global객체를 학습해보기로 한다.
 *  웹브라우저의 window와 같은 전역 객체이며, 전역객체이므로 모든 파일에서 접근가능하다.
 *  또한 window.alert 함수를 그냥 호출할수있는것처럼 Node에서는 global 키워드도 생략 가능하다.
 *  이전에 사용했던 require도 사실 global.require이다.  앞에 global키워드를 생략했을뿐이다 .
 *  노드에서 사용하는 console객체도 사실 global.console이다.
 *  global 객체에는 매우많은 속성이 들어있다. 확인해보기로한다.
 *  콘솔(터미널)에서 node를 입력해본다.
 *  {projecthome}/public/javascripts/chap03> node
 *  Welcome to ~~~~~
 *  > global
 */
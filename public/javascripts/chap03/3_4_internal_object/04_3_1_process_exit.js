/** 실행중인 프로세스를 종료한다.
 * 서버환경에서 이함수를 사용하면 서버가 멈추고 서비스를 하지 않음으로, 특수한 경우를 제외하고는
 * 서버에 사용하는것을 권장하지 않는다. 하지만 서버외 독립적인 프로그램에서는
 * 프로그램을 수동으로 멈추기위해 사용하기도 한다.
 *
 * setInterval로 반복되고있는 코드를 process.exit()로 프로그램을 정지시켜 보기로 한다.
 *
 * {projecthome}\public\javascripts\chap03> node .\04_3_1_process_exit.js
 * 1  Seconds....
 * 2  Seconds....
 * 3  Seconds....
 * 4  Seconds....
 * 종료~!
 *
 */

let i = 1;
setInterval( () =>{
    if(i === 5){
        console.log('종료~!');
        process.exit(); // 프로그램 종료
    }
    console.log(i, ' Seconds.... ');
    i += 1;
}, 1000); // 1초마다 반복수행

/* 1 ~ 4 Seconds 까지 수행하고 5초가 되면 프로그램이 종료되도록 만들었다.
* process.exit() 함수는 인수를 넣을수있다.
* 값을 안넣거나 0을 주면 정상종료를 뜻한다.  ex) process.exit(); , process.exit(0);
* 값을 1을 주면 비정상 종료를 뜻한다. 만약에 에러가 발생해서 종료하는 경우 1을 넣으면 된다. ex) process.exit(1);
*
* 지금까지 알아본 타이머, 콘솔, 프로세스, 모듈은 기본적인 기능이지만 앞으로 계속 사용할것이다.
**/
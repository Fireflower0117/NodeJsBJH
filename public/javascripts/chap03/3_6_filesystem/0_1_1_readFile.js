const fs = require('fs');

fs.readFile('./0_1_1_readme.txt', (err, data) => {
   if(err){
       throw err;
   }
   console.log('Data : ', data);
   console.log('Read Data : ', data.toString());
});

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\0_1_1_readFile.js
Data :  <Buffer ec a0 80 eb a5 bc 20 ec 9d bd ec 96 b4 ec a3 bc ec 84 b8 ec 9a 94 2e>
Read Data :  저를 읽어주세요.

fs모듈의 readFile() 함수의 결과는 Buffer로 반환된다.
이러한 buffer을 사람이 읽을수있형식으로 변환하려면 toString()을 사용하면된다.

fs모듈을 불러온뒤 파일의 경로를 지정한다.
여기서는 파일의 경로가 현재파일을 기준으로 읽는것이 아니라. 콘솔의 실행경로가 기준이라는 점을 주의해야 한다.
만약 현재파일의 실행위치(path)가 {projecthome}\public\javascripts> node chap03\3_6_filesystem\0_1_1_readFile.js을 실행했다면
0_1_1_readme.txt를 읽는 파일위치는 {projecthome}\public\javascripts\0_1_1_readme.txt 로 찾는다.



*
* */
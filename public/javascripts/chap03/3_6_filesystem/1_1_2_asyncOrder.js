/* 그렇다면 비동기 방식으로 하되 순서를 유지하고 시다면 어떻게 해야 할까?? */

const fs = require('fs');
console.log('-- 시작 --');
fs.readFile('./1_1_0_readme.txt', (err, data) =>{
   if (err){
       throw err;
   }
   console.log('첫번쨰 : ',data.toString());

   fs.readFile('./1_1_0_readme.txt', (err, data) => {
       if (err){
           throw err;
       }
       console.log('두번쨰 : ',data.toString());

       fs.readFile('./1_1_0_readme.txt',(err, data) => {
           if (err){
               throw err;
           }
           console.log('세번쨰 : ',data.toString());
           console.log('-- 끝 --');
       });
   });
});

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\1_1_2_asyncOrder.js
-- 시작 --
첫번쨰 :  저를 여러번 읽어보세요.
두번쨰 :  저를 여러번 읽어보세요.
세번쨰 :  저를 여러번 읽어보세요.
-- 끝 --

이전 ReadFile 메서드의 callback에서 readFile 메서드를 실행하면 된다.
*  */
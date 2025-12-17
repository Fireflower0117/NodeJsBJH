/* 이번에는 파일을 만들어본다. */

const fs = require('fs');

fs.writeFile('./0_1_3_writeme.txt', '글을 입력합니다.', (err) =>{
    if(err){
        throw err;
    }

    fs.readFile('./0_1_3_writeme.txt', (err, data) => {
        if(err){
            throw err;
        }
        console.log('0_1_3_writeme.txt : ', data.toString());
    });
});

/* writeFile 메서드에 생성된 파일의 경로와 내용을 입력한다.
*  도중에 에러가 발생하지 않았다면 0_1_3_writeme.txt파일이 생성되었을것이다
*  생성한 파일을 직접 열어봐도 되지만. readFile방법으로 읽어보기로 했다.
*  생성된 파일(0_1_3_writeme.txt)을 더블클릭해서 직접 열어보자.
* */
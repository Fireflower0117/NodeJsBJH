/* 이번에는 노드 자체에서 잡아주는 에러에 대해 알아보자 */
const fs = require('fs');

setInterval( () => {
    fs.unlink('./abcd.js', (err) => {
       if(err){
           console.error(err);
       }
    });
}, 1000);

/* [Error: ENOENT: no such file or directory, unlink '{projecthome}\public\javascripts\chap03\3_8_exception\abcd.js'] {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'unlink',
      path: 'D:\\JetBrains\\workspace-egov\\NodeJsBookStudy\\public\\javascripts\\chap03\\3_8_exception\\abcd.js'
    }
    [Error: ENOENT: no such file or directory, unlink '{projecthome}\public\javascripts\chap03\3_8_exception\abcd.js'] {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'unlink',
      path: 'D:\\JetBrains\\workspace-egov\\NodeJsBookStudy\\public\\javascripts\\chap03\\3_8_exception\\abcd.js'
    }
    ...............

 fs.unlink는 존재하지 않는 파일을 지우고있습니다.
*  에러가 발생하지만 다행히 Node내장 모듈의 에러는 실행중인 프로세스를 멈추지 않습니다.
*  에러 로그를 기록해두고 나중에 원인을 찾아 수정하면 됩니다.
*
*  에러가 발생하면 throw하는 경우가있습니다. 그런데 throw하면 노드는
*  프로세스가 멈춰버립니다. 따라서 throw하는 경우에는 반드시 try/catch로 에러를 잡아야 합니다.
*
*  */
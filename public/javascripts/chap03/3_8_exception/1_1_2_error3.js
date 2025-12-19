/* 노드 16버전 부터 Promise의 에러는 방드시 catch해야 합니다.
*  catch하지 않으면 에러와 함께 노드 프로세스가 종료됩니다.
* */

const fs = require('fs').promises;

setInterval( () => {
    fs.unlink('./abcd.js').catch(console.error);
}, 1000);

/*  {projecthome}\public\javascripts\chap03\3_8_exception> node .\1_1_2_error3.js
    Error: ENOENT: no such file or directory, unlink 'D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\abcd.js'
        at async Object.unlink (node:internal/fs/promises:1065:10) {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'unlink',
      path: 'D:\\JetBrains\\workspace-egov\\NodeJsBookStudy\\public\\javascripts\\chap03\\3_8_exception\\abcd.js'
    }
    Error: ENOENT: no such file or directory, unlink 'D:\JetBrains\workspace-egov\NodeJsBookStudy\public\javascripts\chap03\3_8_exception\abcd.js'
        at async Object.unlink (node:internal/fs/promises:1065:10) {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'unlink',
      path: 'D:\\JetBrains\\workspace-egov\\NodeJsBookStudy\\public\\javascripts\\chap03\\3_8_exception\\abcd.js'
    }
    ..................

*/
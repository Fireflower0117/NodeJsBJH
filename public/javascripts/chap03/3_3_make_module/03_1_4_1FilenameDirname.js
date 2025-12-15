/* 노드에서는 파일사이 모듈관계가 있는 경우가 많으므로 현재파일의
   경로나, 파일며을 알아야할경우가 있다. 노드는 __filename, __dirname 키워드로
   파일이나 경로의 정보를 알수있다.
*/
console.log('__filename : ', __filename);
console.log('__dirname : ', __dirname);
/*
* __filename : {projecthome}\public\javascripts\chap03\03_1_4_1FilenameDirname.js
  __dirname : {projecthome}\public\javascripts\chap03

  경로정보는 학습 환경마다 다르다.
*/
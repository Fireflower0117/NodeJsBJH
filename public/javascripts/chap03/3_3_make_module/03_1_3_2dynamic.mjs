const a = true;
if(a){
    const m1 = await import('./02_1_2_func.mjs');
    console.log(m1);
    const m2 = await import('./02_1_1_var.mjs');
    console.log(m2);
}
/*
[Module: null prototype] { default: [Function: checkOddOrEven] }
[Module: null prototype] { even: '짝수입니다.', odd: '홀수입니다.' }
 */

import {odd, even} from './3_3_02_1_1_var.mjs';

function checkOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

export default checkOddOrEven;

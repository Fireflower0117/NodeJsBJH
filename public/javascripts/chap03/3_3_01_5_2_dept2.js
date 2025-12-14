const dept1 = require('./3_3_01_5_1_dept1');
console.log('require dept1 : ',dept1);
module.exports = () => {
    console.log('dept1', dept1);
}
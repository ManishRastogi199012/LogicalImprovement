/* 
    palindrom check
*/
let a = "abdba"

function pali(param) {
    let j = param.length-1;
    // console.log('param.length',param.length)
    for (let index = 0; index < param.length/2; index++) {
        // const element = array[index];
        if(param[index]!=param[j]){
            return false;
        }
        // console.log(param[index])
        j--
        // console.log(param[param.length-index-1])
        // console.log('param.length',param.length)
        // console.log('param.length-index',param.length-index)
    }
    return true;
}
output = pali(a)
console.log(output)
/*
    Calculate the factorial of a number
*/

 function fact(params) {
    let op= 1;
    for (let i = 1; i <= params; i++) {
        op = op*i
    }
    return op;
 }

 c= fact(6)

//  console.log(c)

function prime(x){
    let isPrime = true;
    if(x==1){
        isPrime = true;
    }
    else{
        for (let i = 2; i < x; i++) {
            if(x%i==0){
                isPrime = false;
            }            
            
        }
    }
    return isPrime;
}

d= prime(10)
// console.log(d)
e=[1,2,4,5,8,13,21,1,2,3,5,8]

function fibonaci(y) {
    isFibonaci = true;
    g=[]
    for (let i = 0; i < y.length-2; i++) {
        if(y[i]+y[i+1]==y[i+2]){
            isFibonaci = false;
            if(g.length==0){
                g.push(y[i],y[i+1],y[i+2])
            }
            else if(y[i-1]==y[i]){
                
            }
            else{
                g.push(y[i],y[i+1],y[i+2])

            }
            // break;
        }
        
    }
    return g

}

f= fibonaci(e)
console.log(f)
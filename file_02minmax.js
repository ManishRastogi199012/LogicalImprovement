/*
    Find the maximum number in array
*/

a= [-2,-5,-33,0,-56];
maxNumber=0;
minNumber=0;
sumOfElement = 0;
for(let i= 0;i<a.length-1;i++){
    // console.log(a[i])
    // console.log(a[i+1])
    maxNumber = a[i]<a[i+1] ? a[i+1] : a[i]
    minNumber = a[i]>a[i+1] ? a[i+1] : a[i]
    // if(a[i]<a[i+1]){
    //     maxNumber=a[i]
    // }
    // else{
    //     maxNumber=a[i+1]
    // }
    // sumOfElement = sumOfElement+a[i]
}
c= Math.max(...a)
c= Math.min(...a)

console.log(c)
// console.log(maxNumber)
// console.log(sumOfElement)
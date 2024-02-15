// reverse a string

a= "abcdefghijkl"
b=""
console.log(a)
for (let index = a.length-1; index >= 0; index--) {
    let c = a[index];
    b=b+c
}
console.log(b)

console.log(b.split("").reverse().join(""));
function rever(str){
    if(str==""){
        return ""
    }
    else{
        return rever(str.substr(1))+str.charAt(0)
    }
}

c = rever(a)
console.log("c",c)
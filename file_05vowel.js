/* 
    Count the number of vowels in a string
*/

let vowels= ['a','e','i','o','u']
function countVowel(a){
    count = 0;
    for (const i of a) {
        if(vowels.includes(i.toLowerCase())){
            count++
        }
    }
    return count
}

// c= countVowel("Abc3EIJHHAIodioisufkd")

/* 
    Check if two strings are anagrams    
*/

function checkAnagram(a,b){
    let isAnagram = true;
    if(a.length==b.length){
        j= b.length-1;
        for (let i = 0; i < a.length; i++) {
             if(a[i]!=b[j]){
                isAnagram = false;
                break;
             }
            j--
        }
    }
    else {
        isAnagram = false;
    }
    return isAnagram
}

d = checkAnagram('netsil','listen')

console.log(d)
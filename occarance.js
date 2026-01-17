let string = "Hey My name is KAIF";

let count = 0;

for(let i = 0 ; i <string.length ; i++){
    if(string[i] != " "){
        count++;
    }
}

console.log(count);
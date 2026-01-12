let arr =[1,2,1,3,2,3,4,5,4];
let count = {};
for(let i = 0 ; i < arr.length ; i++){
    if(count[arr[i]]){

        count[arr[i]]++;
    }
    else{
        count[arr[i]] = 1;
    }
}
console.log(count);
const filterRange = (arr, a, b) => {

    for(let i=0; i<arr.length; i++){

        if(arr[i]< a || arr[i]>b){

            arr.splice(i,1);
            i--;
        }
    }
    
}

let arr = [1,4,5,6,6,7,8];

filterRange(arr, 1, 6);

console.log(arr);
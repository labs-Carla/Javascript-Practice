let arr = [1, 2, 3,6,7,8,9,10];


const shuffle = (arr)  => { 
    for (let i = 0; i<arr.length ; i++){

        let randomIndex = Math.floor(Math.random() * arr.length);

        let temp = arr[i];

        arr[i] = arr[randomIndex];

        arr[randomIndex] = temp;
    }

    return arr;
}

console.log(shuffle(arr));
// arr = [3, 2, 1]

console.log(shuffle(arr));
// arr = [2, 1, 3]

console.log(shuffle(arr));
// arr = [3, 1, 2]
// ...
const unique = (arr)=> {

    const resultado = [];

    for (let i=0; i<arr.length; i++){

        if(!resultado.includes(arr[i])){
            resultado.push(arr[i]);
        }
    }

    return resultado;


}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); 
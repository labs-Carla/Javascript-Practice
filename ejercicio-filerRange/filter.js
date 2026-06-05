/* we have this array numbers [1, 2, 4, 8, 4] we want only the ones 
that are higher or equal than a and less or equal than b*/

/* arr.filter(arr, a, b) */

function filterRange(arr, a ,b ){    
    return arr.filter(numero => {numero >= a && numero <=b;})         
}
/*camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.

input: background-color
output: backgroundColor

process: input.split('-'); background color
        input[0].toUpperCase(); first position in uppercase
         input.slice(1); give me the word from index one

*/

const camelize = (str) => {

    const words = str.split('-'); // save words without hyphen

    const result = words.map((word, index)=>{ // save new array in result, evaluates the first word to leave it the same then  uppercase the index of the next word
        if(index === 0){
            return word;
        }else{
            return word[0].toUpperCase() + word.slice(1);
        }
    })

    return result.join("");

}

console.log(camelize("backgroud-Carla"));
//var input = 'turpentine and turtles';

var input = 'Such a pretty moon!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const character = input[i];
    
    if (input[i] === 'e') {
        resultArray.push('e');
    };

    if (input[i] === 'u') {
        resultArray.push('u');
    }
    
    for (let j = 0; j < vowels.length; j++) {
        const vowel = vowels[j];

        if (character === vowel) {
            resultArray.push(character);
        }
    }
};

// console.log(resultArray);

var resultString = resultArray.join('').toUpperCase();
console.log(resultString);

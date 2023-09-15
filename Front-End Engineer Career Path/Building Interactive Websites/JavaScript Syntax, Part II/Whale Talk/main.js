const input = 'I love plankton';
const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i)
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j)
    if (vowels[j] === input[i]) {
      resultArray.push(input[i]);
      if (input[i] === 'e') {
        resultArray.push(input[i]);
      }
      if (input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
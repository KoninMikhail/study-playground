# Split Strings 

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

### Examples:

```
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```
---
## Solution:
```
function solution(str){
  const srtSrc = str.split('');  
  let   strSeperated = [];
  
  srtSrc.forEach((current, index, array) => {
    let isODD = index % 2 == 1;
    let nextLetter = (array[index + 1] !== undefined) ? array[index + 1] : '_';
    
    if (!isODD){
      strSeperated.push(current.toString() + nextLetter.toString());
    }
  });
  
  return strSeperated;
  }
```
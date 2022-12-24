# Format words into a sentence

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

### Note:

* Empty string values should be ignored.
* Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
* Example: (Input --> output)

```
['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
```
---

## Solution:
```
function formatWords(words){
  let wordsArray = words;
  let wordsArrayCheckFormat = words && Object.keys(words).length === 0 && Object.getPrototypeOf(words) === Object.prototype;
  
  let clearedEmptyStringsWordsArray = () =>{ 
    return wordsArray.filter(word => word !== ''); 
  }  
  
  if (wordsArrayCheckFormat !== true  && wordsArrayCheckFormat !== null){  
    return clearedEmptyStringsWordsArray().join(', ').replace(/,([^,]+)$/g, ' and$1');  
  }
  
  return ''; 
}
```
# (Ready for) Prime Time

We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

### Example

```
11 => [2, 3, 5, 7, 11]
```
---
## Solution:

```
function prime(num) {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2);
  let sqroot = Math.floor(Math.sqrt(num));
  let numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
      numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
}
```
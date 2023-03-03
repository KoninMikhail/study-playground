# How to do a selective delete

**Interviewer questions:**

---
* How can I remove from this directory all files whose names end with .cpp? 
* And how to delete all files that have the letter `a` in their name?
---

**Your answer:**

```
rm *.cpp
rm *a*
find . -name "template" | xargs rm // add subdirectories for cleanup
```

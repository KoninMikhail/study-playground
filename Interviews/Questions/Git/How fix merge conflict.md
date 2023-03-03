# What is merge conflict and how fix it?

**Interviewer questions:**

---
 * What is a merge conflict? 
 * What needs to be done to fix it
---

**Your answer:**

* Check out the branch that you were merging into. 
* Use the command git status to see which files have a merge conflict. 
* Open each of the files that have a merge conflict in a text editor. 
* Look for lines that begin with <<<<<<< and =======. These are the areas where a conflict has been detected. 
* Resolve the conflict by deciding which changes to keep and which to discard. 
* Once you have resolved the conflict, delete the lines that begin with <<<<<<<, =======, and >>>>>>>. 
* Save the file and use the git add command to add the resolved file to the staging area. 
* Use the git commit command to commit the merge with a message that clearly states what you did to resolve the conflict.

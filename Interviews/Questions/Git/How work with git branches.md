# How work with git branches

**Interviewer questions:**

---
* What is a branch in git? 
* How to create a new branch? 
* How to create a new branch and goto it?
* How switch branches
* How to delete a branch, what happens when a branch is deleted?
---

**Your answer:**

 A branch is a version of the repository that diverges from the main working project.

if you want to create a new branch, you can follow this command:
```
git branch <name of new branch>
```
if you want to create a new branch and goto it, you need this command:
```
git checkout branch <name of new branch> 
```
if you want switch a branch, follow this command:
```
git checkout <name of branch>
```

if you want to delete a branch, you need command:
```
git branch -d <name of branch>
```

if you want to delete a remote branch, you need command:
```
git push <remote> -delete <branch name>  
```

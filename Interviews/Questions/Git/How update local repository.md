# How local repository and what is the difference between git fetch and git pull

**Interviewer's question:**

---
How to update the local version of the repository by downloading new commits from the server? 
What is the difference between git fetch and git pull?
---

**Your answer:**

## We can update the local repository in two ways:
```
// manually
git fetch <remote>
git merge <remote>/<branch> || git rebase <base> // via merge or rebase

// shorthand
git pull || git pull --rebase // via merge or rebase
```


## What is the difference between git fetch and git pull?
`git fetch` - The command downloads commits, files, and refs from a remote repository into your local storage.

`git pull` - The command is used to fetch and download content from a remote repository and immediately update the local repository to match that content. For merge repositories can use: `git merge` or `git rebase`
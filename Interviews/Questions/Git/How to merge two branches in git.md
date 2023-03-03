# How to merge two branches in git ?

**Interviewer's question:**

---
What is the procedure for combining two branches, 
and what would the resulting change graph appear to be?
---

**Your answer:**

`git merge <branch for merge into current>` - for merge two branches.


// --no-ff
```
If the merge is not in fast-forward mode and do not contain conflicts, 
will be created a new commit with current and merging contents.

This commit will have two parents, one for the current branch and another for the merging branch.
This commit can be seen in the graph of the repository.
```

// ff
```
Fast-forward merging in git is a type of merge that moves the current branch forward to include the latest commits from the target branch. 
This is the default merging behavior when the branches have no common ancestor. 
A fast-forward merge is a simple operation that updates the current branch's pointer to point at the same commit as the target branch. 
No new commit is created and the current branch's history is not altered.
```


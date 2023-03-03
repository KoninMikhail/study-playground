# How upload and download branches from remote repository

**Interviewer questions:**

---
How to publish a specific branch from your local repository to the server?
How to download a specific branch from the server?
---

**Your answer:**

for upload your branch to the server:
```
git push <remote> <name of branch>
```
for download single branch:
```
git clone http://whatever.git -b <name of branch>
```
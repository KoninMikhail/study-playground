# How publish local repository changes

**Interviewer's question:**

---
You have made some changes to the repository and want to publish them to the server.
What is the sequence of commands needed to do this?
---

**Your answer:**

Basic usage:
```
git commit -m "your message here";
git push <remote> <branch>
```

Same as the above command, but force the push even if it results in a non-fast-forward merge. Do not use the --force flag unless you’re absolutely sure you know what you’re doing.

```
git commit -m "your message here";
git push <remote> --force
```

If you have multiple remote repositories and you wish to publish to all of them.

```
git commit -m "your message here";
git push <remote> --all
```

---
⚠️ please do not forget ⚠️
---
Tags are not automatically pushed when you push a branch or use the --all option. The --tags flag sends all of your local tags to the remote repository.

```
git push <remote> --tags
```
# Useful Git Commands

Online Cheat Sheet [git-tower](https://www.git-tower.com/blog/git-cheat-sheet/).

## Create a new GitHub repository from command line using GitHub API

```
curl -u 'username' https://api.github.com/user/repos -d '{"name":"repo_name"}'
```

### Config Git

```
git config --global user.name "John Doe"
git config --global user.email jdoe@example.com
```

To verify, type `git config --list`

### To start a new repository

```
git init
```

### To check the current state o our project

```
git status
```

### To check the log of past commit commands

```
git log
```

### To add untracked files

```
git add <file>
```

> We can use wildcards to add several files at a time, like `git add '*.txt'`.

### To unstage files

```
git rm --cached <file>
```

or

```
git reset HEAD <file>
```

or

```
git reset <file>
```

### Simple commit:

```
git commit -m "Message"
```

### To push our local repo to the GitHub server, we need to add a remote repository.

```
git remote add <remote name> <remote github url>
```

`remote name` is usually `origin`.

### To push commands to origin

```
git push -u origin <branch>
```

### To pull down remote changes

```
git pull origin <branch>
```

### To look at what is different from our last commit by using

```
git diff HEAD
```

or

```
git diff --staged
```

### To reset a file

```
git checkout -- <file>
```

### To create another branch

```
git branch <branch name>
```

### To delete a branch
```
git branch -d <branch name>
```

### To checkout a branch

```
git checkout <branch>
```

### To merge two branches

```
git merge <branch>
```


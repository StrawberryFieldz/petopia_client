# Contributing

## General Workflow

1. Fork the repo
1. Cut a namespaced feature branch from master
1. Make commits to your feature branch. Prefix each commit with parens describing the type of commit. Then add the commit message (present tense). Examples:
  - (feat) adds Facebook login 
  - (fix) fixes navbar display bug
  - (refactor) refactors database to mongo
  - (cleanup) reformats user model to conform to style guide
  - (test) adds testing for [issue #7]
  - (doc) adds [document name].md to docs folder
  - (inc) saves working progress on main.js
1. When you've finished with your fix or feature, rebase upstream changes into your branch. From your branch, submit a pull request directly to organization master. The title of the pull request is the name of the issue you were working on.
1. Your pull request will be reviewed by another team member. The point of code
   reviews is to help keep the codebase clean and of high quality and, equally
   as important, to help you grow as a programmer. If your code reviewer
   requests you make a change you don't understand, ask them why.
1. Fix any issues raised by your code reviwer, and push your fixes as a single
   new commit.
1. Once the pull request has been reviewed, it will be merged by another member of the team. Do not merge your own pull request.

## Detailed Workflow

### Fork the repo

Use github’s interface to make a fork of the repo, then add that repo as an upstream remote:

```
git remote add upstream https://github.com/StrawberryFieldz/petopia_client.git
```

### Cut a namespaced feature branch from master

Your branch name should reflect the issue you're working on.

These commands will help you do this:

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch

Prefix each commit using the commit guidelines above.

- Commit messages should begin in lowercase and be written in the present tense in such a way as to complete the sentence, "This commit..." e.g. "fixes continuous integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- You can add additional comments to the commit after the first line summary, if required. 

### Rebase upstream changes into your branch

After you finish your git commits, rebase upstream changes to your branch by running the following command:

```
git pull --rebase upstream master
```

This will start the rebase process. If there are no conflicts, this should just roll all of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

If there are conflicting changes, git will display the merge conflicts. You must fix the merge conflicts before you can continue.

Once you are done fixing conflicts for a specific commit, run:

```
git rebase --continue
```

### Make a pull request

Make a pull request from your feature branch to the upstream master branch. The title of the pull request will be the issue name you were working on. Add any additional comments in the comment section to reflect any changes that you made that need to be highlighted.

Tag another team member in the comments section and they will review the pull request. Remember that you should not be merging your own pull request.

# Development Workflow

## Issues

The development team uses waffle.io as part of the development workflow.

1. Choose an issue from the "Ready" queue and move it to the "In Progress" section. Update the issue's label to "In Progress." This notifies the development team which issue you are working on in order to prevent conflicts.
2. Write tests for your issue before you write any code.
3. Begin coding.
4. Follow the git workflow (detailed below).
5. Once you submit a pull request, add the "awaiting merge" label to the issue in waffle.io
6. A team member will review the pull request and evaluate whether it can be merged. Once the pull request has been merged, the team member responsible for merging it will update the issue label to "complete" and move it to the "Done" section in waffle.io

## Git Workflow

The development team adheres to the rebase git workflow.

Step 1

```
git pull --rebase upstream master
```

Step 2

```
git checkout -b featureBranch
```

Step 3
> Work on the feature branch and commit changes following the [contributing guide](https://github.com/StrawberryFieldz/petopia_client/blob/master/CONTRIBUTING.md)

 ```
 git commit
 ```

Step 4

```
git pull --rebase upstream master
```

Step 5

```
git push origin featureBranch
```

Step 6 

Issue pull request on github.com

## Issue Labels

1. awaiting merge
  > Add this label once you complete an issue and make a pull request.

2. blocker bug
  > Add this label when you encounter a bug that you cannot move past until it is resolved.

3. bug
  > Add this label to a non-showstopper bug.

4. complete
  > Add this label once the issue has been merged. Also move the issue to the "Done" section on waffle.io

# Devapt - Contributing

##Code of conduct

As contributors and maintainers of the Devapt projects, we want to respect everyone who contributes by posting issues, updating documentation, submitting pull requests, providing feedback in comments, and any other activities.

Please follow us in these recommendations and have fun contributing.



## Bugs / Questions

See [ISSUES](https://github.com/lucbories/devapt-app-testbus/issues)

See [QUESTIONS](https://github.com/lucbories/devapt-app-testbus/issues)

Before creating any issue, check these points:

If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to our GitHub Repository. Even better you can submit a Pull Request with a fix.

Before to submit an issue try these checklist:
* have you searched a past issue ?
* what behaviour do you expect ?
* what behaviour do you have ?
* how to reproduce your issue : browser/server version, sample of code, logs



## Want a Feature?

You can request a new feature by submitting an issue to our GitHub Repository. If you would like to implement a new feature then submit an issue to check your proposal isn't implemented yet.



## Submitting a Pull Request

### Before you submit your pull request consider the following guidelines:

Search GitHub for an open or closed Pull Request that relates to your submission. You don't want to duplicate effort.

Make your changes in a new git branch:
```
git checkout -b my-fix-branch master
```

### Create your patch, including appropriate test cases.
```
git commit -a
```
Note: the optional commit -a command line option will automatically "add" and "rm" edited files.

Build your changes locally to ensure all the tests pass:
```
npm run test
```

### Push your branch to GitHub:
```
git push origin my-fix-branch
```

Pull request checklist
* Follows code style
* Doc change
* Read CONTRIBUTING
* Added tests
* All tests pass

How to send a pull request
* Description
* Related Issue
* Type of Change:
** Bug fix
** New feature
** Breaking Change

In GitHub, send a pull request to project:develop.



### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:
```
git push origin --delete my-fix-branch
```

Check out the master branch:
```
git checkout master -f
```

Delete the local branch:
```
git branch -D my-fix-branch
```

Update your master with the latest upstream version:
```
git pull --ff upstream master
```



## Follow our Coding Rules.

Coming soon, please see source files.



## Commit message format

Each commit message has this format :
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header (first line) is mandatory with a maximum of 50 characters.

Body and footer are optional and each line cannot be longer than 70 characters.

Type is one of:
* feat: add/remove/update a feature
* fix: fix a bug
* docs: add/remove/update documentation
* test: add/remove/update test code
* refactor: reorganisation of files and folders
* style: formatting code

Scope is the source tree part of the changes.



[This document is inspired by Angular Contributing](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)

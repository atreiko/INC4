Resolve conflict
===

* first:
https://github.com/atreiko/test1

---

* second:
https://github.com/atreiko/test2

---

How to create and resolve a conflict in git
===========================================

$ git init
Initialized empty Git repository in /test/.git/

$ echo one > file

$ git add file

$ git commit -m "1"
[master (root-commit) 3a1f898] 1
 1 file changed, 1 insertion(+)
 create mode 100644 file

$ git branch test

$ echo two > file

$ git add file 

$ git commit -m "2"
[master 445a5ac] 2
 1 file changed, 1 insertion(+), 1 deletion(-)

$ git checkout test
Switched to branch 'test'

$ echo three > file

$ git add file     

$ git commit -m "3"
[test b0dd30a] 3
 1 file changed, 1 insertion(+), 1 deletion(-)

$ git checkout -
Switched to branch 'master'

$ git merge test
Auto-merging file
CONFLICT (content): Merge conflict in file
Automatic merge failed; fix conflicts and then commit the result.
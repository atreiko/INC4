
# ВСТУПЛЕНИЕ

JS
  * объектно-ориентированный язык с функциями первого класса.
  * мультипарадигменный (ООП, функциональнное, декларативное прог-ние)
  * с динамической типизацией

---

- Функции первого класса -
       объекты могут быть переданы другим функциям и их можно вернуть из функций. 
       Так же их можно присваивать в переменную 

- Стандартом языка является ECMAScript

---

# Типы данных (8)

  * null
  * undefined
  * Boolean
  * Number
  * String
  * Object
  * Symbol
  * BigInt

---

# Порядок выполнения и обработка ошибок

Ложные значения:
* false
* undefined
* null
* 0
* NaN
* ''

---
throw
---
Инструкция throw используется, чтобы выбросить исключение,
а инструкция try...catch, чтобы его обработать

Выброшенное исключение может быть любым типом

---

try...catch
---
Если в блоке try будет выброшено исключение, то управление будет передано в блок catch
Иначе, блок catch будет пропущен
Блок finally отработает по окончанию вышеперечисленных блоков 

Если блок finally возвращает значение, то данное значение становится 
возвращаемым значением всей связки try-catch-finally. 
Значения, возвращаемые блоками try и catch, будут проигнорированы.

---

Использлвание объекта Error
---
В зависимости от типа ошибки вы можете использовать свойства name и message
* error.name
* error.message

---

Объект Promise - используется для отложенных или асинхронных операций
---
Состояния
* pending (ожидание)
* fulfilled (выполнено)
* rejected (операция завершена с ошибкой)
* settled (промис выполнен или отклонен, но не находится в состоянии ожидания)

function imgLoad(url) {
  return new Promise((resolve, reject)) {
    let request = new XMLHttpRequest();
    ...
  }
}

# Циклы и итерации

* for...in проходит по именам свойств
* for...of проходит по значениям свойств


# GIT
git add . && git commit -m "new-commit" && git push origin your-branch

* Как проверить какой репозиторий у вас? --> git remote -v.
* Создать ветку                          --> git checkout -b your-new-awesome-branch

---

>Git rebase “повторно применяет коммиты поверх другой базовой ветки”, тогда как merge “объединяет две или более историй разработки”


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

  
   


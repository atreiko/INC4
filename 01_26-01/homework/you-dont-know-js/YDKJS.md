# Теория компиляторов

Одна из самых фундаментальных парадигм почти всех языков программирования — возможность сохранять значения в переменных, а позже извлекать или менять эти значения. 

---

JavaScript попадает под общую категорию "динамических" или "интерпретируемых" языков, на самом деле он язык компилируемый

---

Три шага, котрые в совокупности называют компиляцией:
- Разбиение на лексемы (var, a, =, 2 и ;)
- Парсинг (берет поток (массив) лексем и превращает его в дерево вложенных элементов)
- Генерация кода (процесс взятия AST и превращения его в исполняемый код)  (Abstract Syntax Tree)

---

# Понимание области видимости

Движок, который отвечает за компиляцию от начала и до конца
Компилятор
Область видимости 


# Клиент серверная архитектура

---

## Параметры, которые могут реализоваться на стороне сервера:

* Хранение, защита и доступ к данным;
* Работа с поступающими клиентскими запросами;
* Процесс отправки ответа клиенту.

## Параметры, которые могут реализоваться на стороне клиента:

* Площадка по предоставлению пользовательского графического интерфейса;
* Формулировка запроса к серверу и его последующая отправка;
* Получение итогов запроса и отправка дополнительной группы команд (запросы на добавление, обновление информации, удаление группы данных).

---

# Есть сразу 2 вида клиент-серверных архитектур:

## Двухуровневая, состоящая сразу из 2 узлов:

* сервер, который ответственен за получение входящих запросов и отправку ответа пользователю, применяя при этом собственные ресурсы системы;

* клиент, который может предоставлять пользовательский графический интерфейс.

>Особенности работы заключаются в том, что на сервер приходит определенный запрос, потом его обрабатывают и дают напрямую, без дополнительного применения группы внешних ресурсов.


## Трехуровневая система состоит из использования таких компонентов

* предоставление информации – графический пользовательский, прикладной объект в виде сервера приложения;

* менеджмент ресурсов – сервер БД, который может предоставлять данные

>Особенность работы состоит в том, что сразу несколько серверов могут обрабатывать клиентские запросы. Процесс распределения операций может существенным образом снизить нагрузку на используемый сервер.

>Трехуровневая архитектура может трансформироваться до многоуровневой, возможностью установки группы дополнительных серверов.
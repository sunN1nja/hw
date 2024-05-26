# Задание 6.4.5
Вам дана заготовка и результат, который вы должны получить. Напишите код, который будет преобразовывать _XML_ в _dict_ и выводить его в консоль.

Подсказка:
Воспользуйтесь модулем _XML_ из стандартной библиотеки.

XML: 
```xml
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
```

JS-объект:
```js
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
```
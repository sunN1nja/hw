const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
   
   // Парсинг JSON
   const data = JSON.parse(jsonString);
   
   // Преобразование типов данных
   data.list.forEach(item => {
     item.age = parseInt(item.age, 10);
   });
   
   // Вывод результата
   console.log(data);
   
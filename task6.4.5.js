const xmlData = `
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
`;

// Парсинг XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "text/xml");

// Преобразование в объект
const result = { list: [] };
const students = xmlDoc.getElementsByTagName('student');

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const nameNode = student.getElementsByTagName('name')[0];
  const firstName = nameNode.getElementsByTagName('first')[0].textContent;
  const secondName = nameNode.getElementsByTagName('second')[0].textContent;
  const fullName = `${firstName} ${secondName}`;
  const lang = nameNode.getAttribute('lang');
  const age = parseInt(student.getElementsByTagName('age')[0].textContent, 10);
  const prof = student.getElementsByTagName('prof')[0].textContent;

  result.list.push({
    name: fullName,
    age: age,
    prof: prof,
    lang: lang
  });
}

// Вывод результата
console.log(result);

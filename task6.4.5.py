import xml.etree.ElementTree as ET

xml_data = """
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
"""

# Парсинг XML
root = ET.fromstring(xml_data)

# Преобразование в словарь
result = {"list": []}
for student in root.findall('student'):
    name = student.find('name')
    first_name = name.find('first').text
    second_name = name.find('second').text
    full_name = f"{first_name} {second_name}"
    lang = name.get('lang')
    age = int(student.find('age').text)
    prof = student.find('prof').text
    
    result["list"].append({
        "name": full_name,
        "age": age,
        "prof": prof,
        "lang": lang
    })

# Вывод результата
print(result)
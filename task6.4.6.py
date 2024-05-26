import json

json_string = '''
{
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
}
'''

# Парсинг JSON
data = json.loads(json_string)

# Преобразование типов данных
for item in data["list"]:
    item["age"] = int(item["age"])

# Вывод результата
print(data)
# e-Student App

## Опис
e-Student е апликација за менаџирање на курсеви. Овозможува креирање, читање, ажурирање и бришење курсеви преку REST API.

## Технологии
- Node.js
- Express
- MongoDB
- Mongoose
- Docker и Docker Compose

## Започнување

1. Клонирај го репозиториумот:
   ```bash
   git clone https://github.com/JovanaRuso/e-student-app.git

2. Влези во папката на проектот:
cd e-student-app

3. Креирај .env фајл во e-student-app директориумот со следните подесувања:
MONGO_URI=твојата_mongodb_конекција
PORT=3000

4. Стартувај со Docker Compose:
docker-compose up --build

5. Отвори го прелистувачот и влези на:
http://localhost:3000

Клучни рути
GET /api/courses - листа на сите курсеви
POST /api/courses - креирање на нов курс
PUT /api/courses/:id - ажурирање на курс
DELETE /api/courses/:id - бришење на курс

Контакт
За прашања и помош контактирај на: rusomarovska.jovana@uklo.edu.mk


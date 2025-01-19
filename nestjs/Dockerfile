# Используем Node.js образ
FROM node:18

# Рабочая директория
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь проект
COPY . .

# Сборка Nest.js
RUN npm run build

# Запуск Nest.js
CMD ["npm", "run", "start:dev"]

FROM node:18.17.1-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
EXPOSE 3000
COPY . .
CMD ["npm","run","dev", "--port 3000"]
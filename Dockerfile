FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm i -D dotenv
RUN npm i -D @import-meta-env/unplugin
RUN npm i -D @import-meta-env/cli
RUN npm i -g serve

COPY . .
RUN npm run build
#RUN npx import-meta-env -x .env

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
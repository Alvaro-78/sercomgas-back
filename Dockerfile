FROM node:18.19.0-alpine3.18

RUN npm install -g npm

WORKDIR /src

COPY package*.json tsconfig.json ./
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "run", "dev"]
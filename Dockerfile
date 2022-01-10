FROM node:16-stretch

RUN npm i -g nodemon

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

CMD ["nodemon", "dist/index.js"]

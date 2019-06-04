FROM node:12.0.0

RUN mkdir -p /db

WORKDIR /db

COPY . /db

RUN npm install mongoose

CMD [ "node", "seed.js" ]
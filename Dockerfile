FROM node:16-alpine

WORKDIR /app

COPY ./public /app/public
COPY ./pages /app/pages
COPY ./components /app/components
COPY ./package.json /app/
COPY ./package-lock.json /app/

RUN npm install
CMD ["npm", "run", "dev"]

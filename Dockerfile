FROM node:16 as node

COPY . /usr/src/application

WORKDIR /usr/src/application

RUN npm i spike -g
RUN npm i && spike compile

FROM nginx:alpine
COPY --from=node /usr/src/application/public /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

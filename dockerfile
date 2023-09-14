FROM node:16

WORKDIR /usr/src/app

COPY --from=development /usr/src/app .

COPY ./package*.json ./

RUN npm install
ADD ./ ./

RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/main" ]
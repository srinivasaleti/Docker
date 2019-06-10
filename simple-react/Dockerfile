FROM node:alpine as build
WORKDIR /usr/src

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# production environment
FROM nginx
EXPOSE 80
COPY --from=build /usr/src/build /usr/share/nginx/html
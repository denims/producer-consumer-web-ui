FROM node:14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.19.3
COPY --from=build /app/docs /usr/share/nginx/html

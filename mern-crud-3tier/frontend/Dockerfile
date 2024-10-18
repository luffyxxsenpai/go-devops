FROM node AS builder
WORKDIR /static

COPY package* yarn* /static/ 
RUN yarn install 
COPY . .
RUN yarn build 

FROM nginx:alpine AS prod
WORKDIR /prod
COPY --from=builder /static/build/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]




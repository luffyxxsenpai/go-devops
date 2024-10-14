FROM node AS builder
WORKDIR /app
COPY package*.json /app/ 
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=builder /app/build/ /usr/share/nginx/html/

CMD ["nginx","-g","daemon off;"]
EXPOSE 3000

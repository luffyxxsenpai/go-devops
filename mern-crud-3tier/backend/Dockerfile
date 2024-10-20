FROM node:alpine AS builder
WORKDIR /back

COPY package*  /back/
RUN npm install --only=production
COPY . .

FROM node:alpine AS production
WORKDIR /app
COPY --from=builder /back /app

EXPOSE 7000
CMD ["npm" , "start"]

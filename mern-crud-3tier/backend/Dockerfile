FROM node:alpine 
WORKDIR /back

ENV PORT=7000
ENV URI="mongodb+srv://luffytodo:luffytodo@cluster0todo.fbrcn.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0todo"

COPY package*  /back/
RUN npm install
COPY . .
EXPOSE 7000
CMD ["npm" , "start"]



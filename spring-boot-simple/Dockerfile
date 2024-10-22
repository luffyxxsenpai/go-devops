FROM ubuntu AS builder
WORKDIR /app
RUN apt update && apt install openjdk-17-jdk maven git -y && \
    git clone https://github.com/jaiswaladi246/springboot-java-poject.git && \
    cd springboot-java-poject && \
    mvn package &&\
    cp ./target/*.jar /app/myjava.jar 

FROM openjdk 
WORKDIR /app
COPY --from=builder /app/myjava.jar /app/myjava.jar
ENV PORT=8080
CMD ["java", "-jar", "/app/myjava.jar"]

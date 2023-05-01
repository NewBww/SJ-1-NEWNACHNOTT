FROM openjdk:20-jdk
COPY . /app/
WORKDIR /app/
RUN ./mvnw clean package -Dmaven.test.skip=false
CMD ["java","-jar","./target/*.jar"]

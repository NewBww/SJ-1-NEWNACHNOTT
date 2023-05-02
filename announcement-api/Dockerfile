FROM openjdk:20-jdk AS build
COPY . /app/
WORKDIR /app/
RUN ./mvnw clean package -Dspring.profiles.active=prod

FROM openjdk:20-jdk
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

FROM openjdk:20-jdk AS build
COPY . /app/
WORKDIR /app/
ENV MYSQL_SECRET=sj1sas
ENV MYSQL_USERNAME=api_announcement
ENV MYSQL_DATABASE=sas
ENV DB_HOSTNAME=172.28.0.3
RUN ./mvnw clean package -Dspring.profiles.active=prod 

FROM openjdk:20-jdk
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]

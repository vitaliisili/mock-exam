### For arm64 system, uncomment line below and comment or delete line 'FROM openjdk:17-jdk-alpine'
#FROM arm64v8/openjdk:17

### For amd64 system, uncomment line below and comment or delete line 'FROM arm64v8/openjdk:17'
#FROM openjdk:11
#
#### Maven
##ARG JAR_FILE=target/*.jar
#
#### Gradle
#ARG JAR_FILE=build/libs/*.jar
#
#COPY ${JAR_FILE} app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]




FROM gradle:7.5.1-jdk18 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build --no-daemon

FROM openjdk:11-jre-slim

RUN mkdir /app

COPY --from=build /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar

ENTRYPOINT ["java","-jar","/app/spring-boot-application.jar"]
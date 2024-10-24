---
title: "CSV Exporter"
description: "A test project utilizing Apache Camel and Spring Boot for backend integration and Angular for the frontend user interface."
image: "/img/projects/csv-exporter/code.jpg"
---

# Project with Apache Camel, Spring Boot, and Angular

![csv exporter code sample](/img/projects/csv-exporter/code.jpg){.content-project-image}

This project was developed as a test application aimed at integrating various systems using **Apache Camel** and **Spring Boot** for the backend, and **Angular** for the frontend. **Apache Camel** was used for message processing and system integration, while **Spring Boot** provided a stable and scalable platform for backend operations. **Angular** was used to develop a modern web user interface that allows interaction with the data.

- **GitHub**:  [Navigator exporter (Apache Camel + Spring Boot)](https://github.com/aleksandar-pejkovic/navigator-data-exporter){target="_blank"}

- **GitHub**: [Navogator client (Angular.js)](https://github.com/aleksandar-pejkovic/navigator-data-client){target="_blank"}

## System Architecture

The project was developed with a clear separation between the backend and frontend, ensuring flexibility, scalability, and ease of maintenance.

- **Backend**: The backend was built using **Apache Camel** for integration and **Spring Boot** as the base of the application. **Apache Camel** allows for routing, processing, and transforming data from various sources, while **Spring Boot** facilitates the management of REST APIs and business logic. Camel integrations were implemented through Spring Boot routines, enabling easy data processing and connecting with different systems.

- **Frontend**: The frontend was developed using **Angular**, a modern frontend framework for building dynamic web applications. Angular enables the development of single-page applications (SPA), providing users with fast and responsive interfaces.

## Project Functionalities

1. **System Integration with Apache Camel and Spring Boot**:
   - **Message Routing**: **Apache Camel** uses defined routes to send, receive, and transform messages between different systems, automating business processes.
   - **REST API**: **Spring Boot** provides REST API endpoints that act as an interface between the frontend and backend, allowing the Angular application to access data and send requests to the backend.
   - **Data Transformation**: Camel routes enable the transformation of data from one format to another, simplifying integration with various systems.
<br><br/>

2. **User Interface with Angular**:
   - **Data View and Management**: Angular allows users to view and manage data sent from the backend through the API. Users can send requests and receive data in real-time, thanks to Angular SPA’s dynamic nature.
   - **Responsive Design**: The application is designed to be accessible and functional on various devices, from desktop computers to mobile phones.
<br><br/>

3. **Data Integration and Processing**:
   - **Multi-source Support**: By using Apache Camel, the application can integrate data from various sources, such as databases, web services, files, and other external systems.
   - **Monitoring and Logging**: Spring Boot enables easy monitoring of application performance through logs and metrics, while Camel provides advanced features for overseeing integration flows.

## Technologies Used in the Project

### Backend:
- **Java**: The core of the application for business logic.
- **Spring Boot**: Framework for backend development and building REST APIs.
- **Apache Camel**: Integration tool for routing and transforming data.
- **PostgresSQL**: Relational database for storing business data.

### Frontend:
- **Angular**: Frontend framework for building dynamic and responsive user interfaces.
- **TypeScript**: A superset of JavaScript used for developing Angular applications.

### Deployment and Scalability:
- **Docker**: Application containerization for easy deployment and scaling.

## Conclusion

This project demonstrates the powerful integration capabilities of **Apache Camel** in combination with the **Spring Boot** platform, while **Angular** enables the development of dynamic, user-oriented interfaces. The project is ideal for companies that want to connect different systems and manage complex business processes through a single application.

---

Aleksandar Pejković  
**Web developer**

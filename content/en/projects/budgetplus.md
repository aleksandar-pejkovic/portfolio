---
title: "BudgetPlus"
description: "A comprehensive budget management application for users of budgetary funds."
image: "/img/projects/budgetplus/landing-page.png"
---

# BudgetPlus

<img src="/img/projects/budgetplus/landing-page.png" alt="budget plus landing page" class="content-project-image">

**BudgetPlus** is a comprehensive software application designed for institutions that manage budgets, such as schools, public institutions, and NGOs. The system enables automation of financial flows, report generation, budgeting, and analysis of financial performance, significantly reducing the administrative burden for users.

## System Architecture

**BudgetPlus** is developed as a **SaaS** (Software as a Service) application with separate backend and frontend components.

- **Backend**: Written in **Java** using the **Spring Boot** framework. The backend is responsible for handling business logic, database interactions, and managing user authentication and authorization.
- **Frontend**: The frontend is built using **Vue.js** and **Nuxt.js**, which provide a modular and dynamic user interface with optimal performance and an excellent user experience.

## Backend Functionalities

1. **Authentication and Authorization**: The **OAuth2** system is implemented for user authentication via JWT (JSON Web Token), with different levels of access (administrator, accountant, user).
   - **Role-based Access Control (RBAC)**: Access rights are defined based on user roles, where administrators have full control over the application, while ordinary users have limited functionalities.
   - **Multi-organization Support**: Each organization has its own users, transactions, and budgets, allowing easy expansion of the system to different institutions.
<br><br/>

2. **Financial Management**:
   - **Income and Expense Tracking**: Users can record all incomes and expenses, with automatic balance generation.
   - **Transaction Modules**: The application allows for input and tracking of transactions by different categories, such as operational costs, capital investments, grants, and donations.
   - **Multi-currency Support**: The system supports working with multiple currencies, allowing users to input and convert transactions across different currencies.
<br><br/>

3. **Budgeting and Planning**:
   - **Budget Creation**: Administrators can define budgets for specific time periods (annual, quarterly) as well as by sectors or projects within the organization.
   - **Budget Execution Tracking**: The system automatically generates statistics on how much has been spent in relation to the planned budget, with the ability to alert users when spending exceeds defined limits.
   - **Cost Prediction**: The system analyzes historical data and suggests optimizations for future spending based on trends.
<br><br/>

4. **Reporting**:
   - **Financial Report Generation**: The system allows for the generation of various types of reports, such as balance sheets, income statements, and analytical reports by category.
   - **Export to PDF/Excel**: Users can export reports to PDF or Excel format for further analysis or archiving.
   - **Data Visualization**: The application uses graphical representations and charts for better tracking and analysis of expenses and revenues.

## Frontend Functionalities

1. **User Interface (UI)**:
   - **Intuitive Design**: The frontend is designed with a focus on simplicity and user experience, with clear navigation menus and cards for different functionalities.
   - **Responsive Design**: The application is optimized for all devices (computers, tablets, mobile phones) using a flexible layout and media queries.
   - **Real-time Notifications**: Users receive alerts about important events, such as budget overruns, new transactions, or report updates.
<br><br/>

2. **User Management**:
   - **Registration and Login**: Simple user registration and login system, with an option to reset the password via email.
   - **Profile Management**: Users can update their personal information, roles, and settings based on access rights.
<br><br/>

3. **Transaction Viewing and Entry**:
   - **Interactive Input Forms**: The transaction input form allows users to add, edit, and delete transactions in a simple interface.
   - **Filtering and Search**: All data is searchable, and users can use filters for easier viewing of transactions by date, category, currency, etc.
<br><br/>

4. **Analytical Tools**:
   - **Chart Display**: The application visually displays data on expenses, revenues, and budgets using interactive charts and graphs.
   - **Budget Simulations**: Users can simulate different budget scenarios based on historical data and expected income/expenses.

## Technologies Used in the Project

### Backend:
- **Java**: Core of the application for handling business logic.
- **Spring Boot**: Framework for building REST APIs, session management, and security.
- **MariaDB**: Relational database for storing transactions, budgets, and user data.
- **Hibernate**: ORM for communicating with the database.
- **JWT**: For user authentication and authorization.

### Frontend:
- **Vue.js**: Frontend JavaScript framework for building dynamic user interfaces.
- **Nuxt.js**: Framework for static-generated and server-side rendering (SSR) frontend.
- **Pinia**: Used for sharing state between components.
- **Tailwind CSS**: Used for styling the application with responsive design.

### Deployment and Scalability:
- **Docker**: The application is containerized using Docker, making it easy to test, deploy, and scale.
- **CI/CD**: Automated deployment via GitHub Actions.

## Conclusion

**BudgetPlus** is a powerful tool that helps organizations manage budgets and finances more efficiently. The combination of modern technologies and an intuitive user interface allows for seamless integration with existing systems, while the flexibility of the architecture makes it easy to adapt to different business needs.

---

Aleksandar Pejković  
**Web developer**

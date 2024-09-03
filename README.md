# Angular HTTP Request Handling Assignment

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Screenshots](#screenshots)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [Implementation Details](#implementation-details)
9. [Error Handling](#error-handling)

## Introduction

This project is an Angular application designed to demonstrate the handling of HTTP requests using an Angular service. The service fetches data from a mock REST API endpoint and displays it in a component. The application also implements error handling for failed HTTP requests.

## Features

- **HTTP Requests**: Uses Angular's `HttpClient` to fetch data from a REST API.
- **Asynchronous Data Handling**: Efficiently manages asynchronous data retrieval.
- **Error Handling**: Includes error handling for failed HTTP requests to ensure a smooth user experience.
- **Data Display**: Displays fetched data in a component using Angular's data binding.

## Technologies Used

- **Angular**: A platform for building mobile and desktop web applications.
- **Angular CLI**: A command-line interface tool for managing Angular projects.
- **HttpClient**: Angular's built-in service for making HTTP requests.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **HTML/CSS**: Markup and styling for the components.

## Screenshots
### Home Page
![Screenshot 2024-09-04 at 01-26-43 POSTS](https://github.com/user-attachments/assets/0d67826b-d5b4-44b4-9c64-2cc27fd8a2cf)
### After Clicking Fetch Button
![Screenshot 2024-09-04 at 01-27-53 POSTS](https://github.com/user-attachments/assets/68c0d46c-ae48-410d-aaf9-b3ed57e61363)
### Error Message Displays on HTTP Connection Failure
![Screenshot 2024-09-04 at 01-28-34 POSTS](https://github.com/user-attachments/assets/3e5e6941-ac33-419a-b1f2-b71d2f1b3c95)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/MahiTzy/angular-rest-posts-app.git
    cd angular-rest-posts-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    ng serve
    ```

4. **Open your browser** and navigate to `http://localhost:4200/`.

## Usage

Once the application is running, you can click `Fetch Posts` button to fetch data from the mock REST API and display it in the component. The application handles errors gracefully and displays error messages if the HTTP requests fail.

## Project Structure

Here is an overview of the project structure:

```
angular-http-assignment/
│
├── src/
│   ├── app/
│   │   ├── service/
│   │   │   └── posts-loader-service.service.ts      # Angular service for HTTP requests
│   │   ├── components/
│   │   │   └── post-card/
│   │   │       ├── post-card.component.ts  # Post Card Component
│   │   │       ├── post-card.component.html
│   │   │       └── post-card.component.css
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   │   └── app.component.ts   # Component to display data
│   │   └── app.component.html
│   │   └── app.component.css
│   └── index.html
└── README.md
```

## Implementation Details

### Angular Service (`posts-loader-service.service.ts`)

- **HttpClient**: Used to make HTTP GET requests to the mock REST API.
- **Methods**: Includes methods to fetch data and handle errors.

### Component (`app.component.ts`)

- **Data Binding**: Uses Angular's data binding to display the fetched data.
- **Template**: The component template iterates over the data and displays it in a structured format.

### Error Handling

- **HTTP Errors**: Uses Angular's `catchError` operator to catch and handle HTTP errors.
- **Error Messages**: Displays user-friendly error messages when a request fails.

## Error Handling

The application includes comprehensive error handling to manage HTTP request failures:

- **Network Errors**: Handles scenarios when the server is unreachable.
- **Server Errors**: Catches errors returned from the server and displays appropriate messages.
- **User Feedback**: Provides visual feedback to the user when an error occurs.

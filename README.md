# User Auth App
Welcome to the User Auth App! This Angular web application is designed for user authentication, allowing users to sign in or sign up easily. Below you will find the details of the application, including setup instructions and features.

## Features  
1. **User Input**: Users can enter their email address or phone number.  
2. **User Validation**:  
   - If the user exists, the app displays a login screen.  
   - If not, a signup screen is shown.  
3. **Login Screen**:  
   - Password and email/phone number fields.  
   - Login button that validates user password and displays success or failure messages.  
4. **Signup Screen**:  
   - Step 1: User inputs their name and creates a password.  
   - Step 2: Additional fields fetched from a mocked backend API:  
     - Organization name validation against allowed organization IDs.  
     - Designation (dropdown).  
     - Birth date (calendar).  
     - City (text).  
     - Pincode (6-digit number verification).  
   - Navigation buttons for saving inputs and returning to previous steps.  

## Technologies Used  
- **Angular**: Frontend framework for building the application.  
- **RxJS**: For reactive programming and handling asynchronous data streams.  
- **NgRx**: State management for Angular applications.  
- **Bootstrap**: For styling and responsive design.  

## Screenshots

![Screenshot (285)](https://github.com/user-attachments/assets/61885ef2-f56a-4889-bcdc-528f7283672d)
![Screenshot (286)](https://github.com/user-attachments/assets/890519b5-72d3-4b6f-bcbb-6be89506aad5)
![Screenshot (284)](https://github.com/user-attachments/assets/c1ecde07-4711-4924-949b-a2efceab639e)
![Screenshot (305)](https://github.com/user-attachments/assets/a4fbd850-e426-4ad1-90e5-fcd63377159f)
![Screenshot (304)](https://github.com/user-attachments/assets/be6c814d-5f6a-4e05-9941-506097d3114d)

## Getting Started

To run this project locally, follow these steps:

### Clone the repository:

```bash
   git clone https://github.com/yourusername/user-auth-app.git  
```

Navigate to the project directory:

```bash
  cd User-Auth-Application
```

Install the dependencies:

```bash
  npm install
```

### Running the Application

Start the development server:

```bash
  ng serve
```

### Open your browser

Navigate to http://localhost:4200 to view the application.

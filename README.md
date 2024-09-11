# User Auth App
Welcome to the User Auth App! This Angular web application is designed for user authentication, allowing users to sign in or sign up easily. Below you will find the details of the application, including setup instructions and features.

## Features
- User Input: Users can enter their email address or phone number.
- User Validation: If the user exists, the app displays a login screen and if not, a signup screen is shown.
- Login Screen: Login button that validates user password and displays success or failure messages.
- Signup Screen: Step 1: User inputs their name and creates a password.
Step 2: Additional fields fetched from a mocked backend API:
Organization name validation against allowed organization IDs.
Designation (dropdown).
Birth date (calendar).
City (text).
Pincode (6-digit number verification).
Navigation buttons for saving inputs and returning to previous steps.

## Screenshots

![image](https://github.com/user-attachments/assets/249fd3fe-bc6c-4d9c-92a8-cbf9e5a5a7b2)
![image](https://github.com/user-attachments/assets/85cde95a-b744-4d26-ab46-559aa8ef9bbb)
![image](https://github.com/user-attachments/assets/48eda59b-7c71-41ae-98f9-984ef3376bce)
![image](https://github.com/user-attachments/assets/6781d6cc-ce4f-4c95-97d1-43457b345252)


## Technologies Used
- Frontend Framework: React
- Build Tool: Vite
- Styling: Tailwind CSS
- Rouing: REact Router(for single page navigation)

## Getting Started

To run this project locally, follow these steps:

### Clone the repository:

```bash
  git clone https://github.com/SandSnorter/Book-Generator-API.git
```

Navigate to the project directory:

```bash
  cd Book-Generator-API
```

Install the dependencies:

```bash
  npm install
```

### Running the Server

Start the development server:

```bash
  npm run dev
```

### Open your browser

Navigate to http://localhost:3000 to view the application.

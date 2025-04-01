# DBMS-ProjectHere's a suitable description for your Git repository:

---

# Student Information Management System

This project is a Student Information Management System built using Node.js, Express, OracleDB, and EJS for rendering dynamic web pages. It allows users to:

- Insert Student Records: Accepts student details via a form and stores them in an Oracle database.
- View Student Details: Displays student records from the database.
- Retrieve Lateral Entry Student Data: Fetches details of lateral entry students.
- Manage Admission Details: Updates and retrieves admission-related data.

 Technologies Used:
- Node.js & Express.js- Backend framework for handling HTTP requests.
- OracleDB- Database for storing student information.
- EJS (Embedded JavaScript) - Template engine for rendering dynamic HTML pages.
- dotenv- For managing environment variables.

### Setup & Installation:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure your `.env` file with OracleDB credentials:
   ```
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_CONNECTION_STRING=your_connection_string
   ```
4. Run the application:
   ```sh
   node app.js
   ```
5. Open your browser and visit:
   ```
   http://localhost:5000
   ```

### Features:
- Secure database operations using **OracleDB**.
- Dynamic HTML rendering with **EJS**.
- Modular code structure.
- Handles student registration and admission records.


# learner-lift
 Application that allows users from South Africa prepare for their learners licence in a interactive and fun way



## How to Install Learner Lift

### Prerequisites
Before you begin, make sure you have the following installed on your machine:
- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)
- **MySQL** (ensure the MySQL server is running)


## Step-by-Step Installation

### Step 1: Clone the Repository
First, clone the Learner Lift repository to your local machine and navigate into the project directory:

```bash
git clone https://github.com/your-username/learner-lift.git
cd learner-lift
```

###  Step 2: Install Backend Dependencies

```bash
cd backend
npm install

```

###  Step 3: Set Up the Database

1. Create a Database:
-Open your MySQL client (e.g., phpMyAdmin or MySQL Workbench).
-Create a new database named learner_lift.

2. Import the Database Schema:

-Import the learner_lift.sql file provided in the repository.
-Run the following command if using the command line:

```bash
mysql -u root -p learner_lift < path/to/learner_lift.sql
```

###  Step 4: Configure Environment Variables
1. Copy the Example Environment File:

```bash
cp .env.example .env
```
2. Update the Environment Variables:
   - Open .env in a text editor and update the database credentials and other environment variables:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=learner_lift
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
```
###  Step 5: Run the Backend Server

Ensure your MySQL server is running, then start the backend server:

```bash
node app.js
```
or, if you have a start script defined in package.json:
```bash
npm start
```

###  Step 6: Install and Build Frontend Dependencies
Navigate to the frontend folder and install dependencies:

```bash
cd ../frontend
npm install
```

Build the React app:
```bash
npm run build
```

###  Step 7: Run the Frontend (Development Mode)

Build the React app:
```bash
npm start
```

###  Step 8: Access the Application

Backend API: http://localhost:5001
Frontend Application: http://localhost:3000


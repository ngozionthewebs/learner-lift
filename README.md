
<img width="1920" alt="Frame 554" src="https://github.com/user-attachments/assets/9a627ba1-dc07-4c9b-84c7-b9d8d2e1926e">


## About Learner Lift

Learner Lift is an innovative web application designed to help South African learners prepare for their learner's licence exams through engaging and interactive quizzes. The platform is built with the aim of enhancing users' learning experience by offering multiple-choice quizzes that simulate the real learner's licence test environment. The application provides various features, including user account management, timed quizzes, progress tracking, and a leaderboard to encourage friendly competition and motivation.

## Built With

[![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org/)
[![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=for-the-badge)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?logo=bootstrap&logoColor=white&style=for-the-badge)](https://getbootstrap.com/)

## Learner Lift Profile Screenshot
<img width="1920" alt="Dashboard" src="https://github.com/user-attachments/assets/cba907c9-b3fb-4baf-998a-df2860f394aa">




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

## Features

## Features Overview

| Page                          | Description                                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Login Page + Sign Up Page** | - Allows users to create a profile. <br> - Provides login functionality for registered users.             |
| **Home Page**                 | Allows users to access different quizzes and logout.                                                     |
| **Quiz Page**                 | - Allows users to answer questions based on a specific section. <br> - Quizzes are timed to let users think on their feet. <br> - Multiple-choice format to simulate a real test, similar to the real K53 exams. |
| **Leaderboard Page**          | - Based on the user's score, a progress line and final score display their rank compared to other users. <br> - Scoreboard resets all scores after 5 days. |

## The Idea

Learner Lift was created as an interactive platform to help South Africans prepare for their learner's licence test. It simulates real test conditions with timed, multiple-choice quizzes on Road Signs, Rules of the Road, and Vehicle Controls. Key features include user account management, progress tracking, and a competitive leaderboard that resets every 5 days to promote continuous practice. The goal is to make learning engaging, accessible, and effective, encouraging users to track and improve their performance.

## UI Design

### Home Page
<img width="1920" alt="Dashboard" src="https://github.com/user-attachments/assets/5bb473cc-0001-42a0-9c9a-908e01e33d68">

### Login Page
<img width="1920" alt="Login" src="https://github.com/user-attachments/assets/f213bf3b-c85c-4b66-8f34-16a04b82da4e">

### Sign Up Page
<img width="1920" alt="Sign Up" src="https://github.com/user-attachments/assets/a2b8f33f-277b-4880-b506-4a34dc3e228c">

### Quiz Page
<img width="1920" alt="quiz page" src="https://github.com/user-attachments/assets/450822d3-cf24-4570-9464-0328afa15d9b">

### Scoreboard Page
<img width="1920" alt="scoreboard" src="https://github.com/user-attachments/assets/a4e4ef64-80d5-420c-8753-2704de12db2b">

## Development Process

### Highlights:

Built a practical application aimed at helping users prepare for real-world learner's tests.
Enjoyed the challenge and overall had a fulfilling time developing it.

### Challenges:

Implementing the leaderboard functionality was particularly challenging due to database issues with saving the quiz ID and user ID, making it difficult for the leaderboard to function. Through troubleshooting and persistence, I was able to resolve these issues and implement a working leaderboard.

## Demonstration Video

```
https://youtu.be/uF3ZzwMv65w

```
## Open Brief Proposal

[231285_Ngozi Ojukwu_Open Brief Proposal _DV200.pdf](https://github.com/user-attachments/files/17626113/231285_Ngozi.Ojukwu_Open.Brief.Proposal._DV200.pdf)

## Milestone Check Document

[231285_Ngozi Ojukwu_Progress Milestone Check (1).pdf](https://github.com/user-attachments/files/17626118/231285_Ngozi.Ojukwu_Progress.Milestone.Check.1.pdf)

## License

Distributed under the MIT License. See LICENSE for more information.

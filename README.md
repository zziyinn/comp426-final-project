The final project is very open-ended and there are no specific requirements for what your final project does per se. There will be 100 overall points awarded as follows:

30 points: Having a front end that is interactive and event-driven
30 points: Having a back end that serves at least two resources with a RESTful CRUD (create, read, update, and delete) API.
10 points: Uses at least one 3rd party API
10 points: Uses session-persistent state in some way.
For example, authenticating the user and then having user-specific preferences and/or data.
10 points: A pleasing user experience (i.e., easy to use, good design, etc.).
10 points: Quality of presentation video (see below)
Each group will be expected to turn in their final projects as a repository with all of the code, stylesheets, images, and any other files developed as part of their project with a top-level README.md file that briefly describes their project and includes a link to a presentation video. Please be sure NOT to include npm modules or external libraries. Use .gitignore to exclude these kinds of things from your repository.

The presentation video should be no more than 10 minutes long and should demonstrate your final project and describe the various components of its implementation. You should think of this as if you are presenting your work to someone who may be interested in purchasing your software. To that end, you are trying to show that the web application you built is interesting, useful, and well-constructed. We will be primarily grading based on your presentation video, so be sure that it appropriately points out or otherwise demonstrates the various aspects listed above (i.e., interactive front-end, backend RESTful API, 3rd party APIs in use, session-persistent state, design elements, etc.).


# comp426-final-project

## Weight Management and Workout Recommendation Web Application

## Project Structure

```
weight-management-app/
├── client/                # Frontend code (React)
│   ├── public/            # Static assets
│   ├── src/               # React components and logic
│       ├── components/    # Reusable components (e.g., charts, forms)
│       ├── pages/         # Application pages
│       ├── services/      # API request logic
│       ├── App.js         # Main app entry point
│       └── index.js       # React render entry
├── server/                # Backend code (Node.js + Express)
│   ├── models/            # Data models (MongoDB schemas)
│   ├── routes/            # API routes
│   ├── server.js          # Main server entry point
│   └── controllers/       # Business logic
├── README.md              # Project documentation
├── package.json           # Project dependencies
└── .env                   # Environment variable configurations
```

## Project Overview
This web application helps users track their weight management and receive personalized workout recommendations. By integrating weight logging, data visualization, and third-party workout recommendation APIs, users can easily plan and maintain a healthy lifestyle.

## Features
1. **Weight Tracking**  
   - Users can log daily/weekly weight data.
   - Visualize weight changes with a line chart.

2. **Workout Recommendations**  
   - Provide personalized workout plans through a third-party Workout API.
   - Filter workouts by type (e.g., intensity, duration).

3. **Data Management**  
   - Users can create, read, update, and delete their weight records.
   - Backend supports multi-user data storage and management.

4. **Interactive Features**  
   - Customer service chat window for answering common questions.
   - Provide health-related suggestions.

## Tech Stack
- **Frontend**: React.js, D3.js (for data visualization)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Third-party API**: Workout Recommendation API (e.g., from RapidAPI platform)
- **Other Tools**: Axios (for HTTP communication), dotenv (for environment variables)

### Prerequisites
1. Install [Node.js](https://nodejs.org/)
2. Install and run MongoDB

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/weight-management-app.git
   cd weight-management-app
   ```

2. **Install dependencies**
   - Frontend
     ```bash
     cd client
     npm install
     ```
   - Backend
     ```bash
     cd server
     npm install
     ```

3. **Set environment variables**
   - In `server/.env`, configure the following:
     ```
     MONGO_URI=<Your MongoDB connection string>
     PORT=5000
     WORKOUT_API_KEY=<Your Workout API key>
     ```

4. **Run the application**
   - Start the backend:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

5. **Access the application**
   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## API Routes Documentation

### Weight Records API
- **GET /weights**  
  Retrieve all weight records.
- **POST /weights**  
  Create a new weight record.
- **PUT /weights/:id**  
  Update a specific weight record.
- **DELETE /weights/:id**  
  Delete a specific weight record.

### Workout Recommendation API
- **GET /workouts**  
  Retrieve workout recommendations based on user preferences.

## Future Improvements
- Add user authentication for a personalized experience.
- Implement target weight reminders.
- Provide integrated dietary suggestions.

## License
This project is open-sourced under the [MIT License](LICENSE).

## comp426-final-project -- Fitness Hub: Your Personal Fitness Assistant

### Project Structure


### Project Overview

Fitness Hub is a web application designed to inspire and empower individuals to achieve their fitness goals. Whether you're just starting your fitness journey or are an experienced enthusiast, Fitness Hub provides the tools you need to stay motivated, organized, and informed. By offering personalized workout suggestions, tracking weight progress, and delivering real-time weather updates, Fitness Hub creates a holistic fitness companion tailored to your unique needs.

We built Fitness Hub with the mission of bridging the gap between fitness aspirations and everyday life. Many people struggle to maintain a consistent fitness routine due to a lack of guidance, motivation, or personalized tools. With Fitness Hub, our goal is to eliminate these barriers and make fitness a joyful, accessible, and sustainable part of everyone's lifestyle.

The idea for Fitness Hub was born from a shared passion for health and technology. As a team, we realized the power of combining data, design, and creativity to solve common challenges faced by fitness enthusiasts. Whether it’s tracking progress, finding suitable workouts, or just adapting plans to fit your current weather, Fitness Hub is designed to be the all-in-one solution to help users stay consistent and reach their goals. By making fitness simple, enjoyable, and personalized, we hope to inspire users to embrace healthier habits and feel accomplished every step of the way.

From the moment you open the app, Fitness Hub welcomes you into a supportive and intuitive space where your goals are our priority. Start your journey today, and let Fitness Hub guide you to a healthier, happier you.


### Features

### Interactive Front End
- **Dynamic Weather Widget**:
  - Displays real-time weather updates for the user’s location, including temperature, conditions, and a weather icon.
  - Integrated with WeatherAPI to provide accurate and timely information, ensuring users can plan outdoor activities accordingly.
  
- **Weight Management Tracker**:
  - Users can log their daily weight, visualize progress through an interactive Chart.js graph, and track trends over time.
  - The graph dynamically updates to reflect changes, providing immediate feedback and insights into their fitness journey.

- **Personalized Workout Suggestions**:
  - Users can filter workout recommendations by muscle group and difficulty level.
  - A responsive interface displays tailored exercise plans that are easy to follow and visually organized.

- **Chat Widget for Assistance**:
  - Integrated a chatbot to provide users with fitness tips and guidance in real time.
  - Ensures users feel supported during their fitness journey by offering quick answers and motivational feedback.


### RESTful Back End
- **Weight Management Tracker**:


- **Workout Recommendation API**:
  - Custom-built API supports CRUD operations to manage workout suggestions.
  - Endpoints allow users to fetch, update, and manage workout data based on filters such as muscle group and skill level.

- **User Data Management**:
  - Stores user preferences and weight logs securely, ensuring data is retrievable across sessions.
  - Designed for scalability to support diverse user needs and growth.


### 3rd Party API Integration
- **WeatherAPI**:
  - Fetches and displays real-time weather updates based on user location.
  - Provides a seamless connection between environmental conditions and fitness planning.


### Session-Persistent State
- **Personalized User Experience**:
  - The application remembers user names and preferences using `sessionStorage`, creating a welcoming and consistent experience.
  - Greets returning users with a personalized message, reinforcing engagement and usability.


### Pleasing User Experience
- **Modern, Responsive Design**:
  - Styled with CSS to create an appealing, user-friendly interface that adapts to both desktop and mobile screens.
  - Includes hover effects, animations, and intuitive layouts to enhance user interactions.

- **Accessible and Intuitive Navigation**:
  - Clear section headers, input placeholders, and buttons guide users through the application.
  - Optimized for accessibility with appropriate color contrast and responsiveness for various devices.


### Implementation Details

#### Front End
- **Languages/Tools**:  
  - HTML, CSS, JavaScript
- **Libraries**:  
  - Chart.js for weight tracking visualization
- **Highlights**:  
  - Responsive layout designed to adapt seamlessly to mobile and desktop devices.  
  - Dynamic interaction enabled through JavaScript event listeners, providing a smooth and engaging user experience.

#### Back End
- **Framework**:  
  - Node.js (used as a local development server for APIs)
- **Features**:  
  - **RESTful API Endpoints** for managing workout data:  
    - `GET`: Retrieve workout suggestions based on user-defined filters.  
    - `POST`: Save user progress logs.  
    - `PUT`: Update user preferences or logs.  
    - `DELETE`: Remove specific data entries as needed.

#### APIs Used
- **WeatherAPI**:  
  - Provides real-time weather updates to ensure users can plan their activities effectively.  
- **Custom Workout API**:  
  - Fetches personalized workout suggestions tailored to the user’s selected muscle group and fitness level.


#### State Management
- **Session Storage**:  
  - Ensures user-specific data, such as their name, is preserved during the session to provide a consistent and personalized experience.  
  - Implements dynamic greetings and updates based on stored session data.


### Prerequisites
1. Install [Node.js](https://nodejs.org/)
2. Install and run MongoDB

#### Steps
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

### Presentation Video
- **Link**: [Presentation Video](#) 

### Credits
- **Team Members**:  
  - Ziyin Zheng  
  - Anqi Zhou


### License
This project is open-sourced under the [MIT License](LICENSE).
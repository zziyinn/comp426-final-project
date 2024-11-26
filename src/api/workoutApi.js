import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your RapidAPI key
const API_URL = 'https://work-out-api1.p.rapidapi.com/search';

const workoutApi = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'work-out-api1.p.rapidapi.com',
  },
});

export const getWorkouts = async (muscle) => {
  try {
    const response = await workoutApi.get(`?Muscles=${muscle}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching workouts:', error);
    throw error;
  }
};

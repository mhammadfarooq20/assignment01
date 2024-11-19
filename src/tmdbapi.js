import axios from 'axios';

// TMDB API base URL
const BASE_URL = 'https://api.themoviedb.org/3';

// Your API key
const API_KEY = 'dad4ae61f71a3512935e1fe227ce1855';

// Create Axios instance
const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovies = (endpoint) => tmdb.get(endpoint).then((res) => res.data);

export default tmdb;

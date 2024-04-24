import axios from "axios";

export const fetcher = axios.create({
  baseURL: 'http://localhost:5000/api',
  //withCredentials: true,
});

fetcher.defaults.headers.common['Content-Type'] = 'application/json';
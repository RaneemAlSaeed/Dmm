import axios from "axios";

// Default config options
const defaultOptions = {
  baseURL:"https://dm-mobile-back.point-dev.net",
  
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create axiosInstance
let axiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  const token =  localStorage.getItem('token');
  console.log("toooken",token);
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
export default axiosInstance;

import axios from 'axios';

// const isDevelopment =process.env.NODE_ENV === 'development'
// const baseURL = 'https://food-delivery-application-c5jk.onrender.com'

const axiosClient = axios.create({
  baseURL : 'https://scholarhub-backend.onrender.com',
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export default axiosClient;
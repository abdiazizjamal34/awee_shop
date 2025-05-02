import axios from 'axios';

const BASE_URL = 'http://192.168.238.185:5000/api'; // update this to your backend

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
  return response.data;
};

export const registerUser = async (email: string, password: string, name: string, phone : string) => {
  const response = await axios.post(`${BASE_URL}/auth/register`, { email, password , name, phone });    
  return response.data;
};

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';

export const getFood = (token) => {
  return axios({
    url: '/api/foods/',
    method: 'get',
    headers: {
      'x-auth-token': token,
    },
  });
};

export const createFood = (data) => {
  return axios({
    url: '/api/foods/',
    method: 'post',
    data: { ...data },
    headers: {
      'x-auth-token': data.token,
    },
  });
};

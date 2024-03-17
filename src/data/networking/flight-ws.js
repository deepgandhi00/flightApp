import axios from 'axios';

export const getFlights = () => {
  return axios.get('https://api.npoint.io/378e02e8e732bb1ac55b');
};

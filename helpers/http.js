import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'X-Zone-Id': Intl.DateTimeFormat().resolvedOptions().timeZone,
  },
  maxContentLength: 104857600,
  maxBodyLength: 104857600,
});

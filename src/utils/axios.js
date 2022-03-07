import axios from 'axios'


 const instance = axios.create({
  baseURL: `https://newsapi.org/v2/top-headlines?apiKey=6ef33175ea344ae9a50694cda7551c4c`,
});

 export default instance
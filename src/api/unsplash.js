import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',  
  headers: {
    Authorization:
      'Client-ID 0679d83d2b877db4240af4d9a4be25390ef03707cec14013839cf3579e5059bc'
  }
});

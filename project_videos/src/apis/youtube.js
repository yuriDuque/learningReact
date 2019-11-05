import axios from 'axios'

const KEY = 'AIzaSyDEdg4XjHenTQKK1h8Tl84_etEwbQ_wNtk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});
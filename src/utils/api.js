import axios from 'axios';
import data from '../overwatchData.json';

const getUserData = (username) => {
  let encodedURI = window.encodeURI('https://owapi.net/api/v3/u/' + username + '/stats')
  return axios.get(encodedURI)
    .then( res => {
      return res.data.us.stats
    })
    .catch(err => {console.warn(err)})
}

const getTESTUserData = (username) => {
  return data.us.stats;
}

export { getUserData, getTESTUserData }

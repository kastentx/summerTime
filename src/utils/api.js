import axios from 'axios';


const getUserData = (username) => {
  let encodedURI = window.encodeURI('https://owapi.net/api/v3/u/' + username + '/stats')
  return axios.get(encodedURI)
    .then( res => {
      return res.data.us.stats
    })
    .catch(err => {console.warn(err)})
}

export { getUserData }

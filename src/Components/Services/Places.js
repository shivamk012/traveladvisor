import axios from "axios";

const getPlaces = (location , place) => {
    return new Promise((resolve , reject) => {
        let config = {
          method: 'get',
          url: `https://travel-advisor.p.rapidapi.com/${place}/list-in-boundary`,
          params : {
            bl_latitude: location.latitude-0.1,
            tr_latitude: location.latitude+0.1,
            bl_longitude: location.longitude-0.1,
            tr_longitude: location.longitude+0.1,
            currency: 'INR',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: { 
            'X-RapidAPI-Key': process.env.REACT_APP_Key, 
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com\''
            }
          };
          
          axios.request(config)
          .then((response) => {
            resolve(response.data.data);
          })
          .catch((error) => {
            reject(error);
        });
    })
}

export {getPlaces};
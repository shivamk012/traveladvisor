import axios from "axios";

const getHotels = (location , checkin) => {
    return new Promise((resolve , reject) => {
        let config = {
          method: 'get',
          url: "https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng",
          params : {
            latitude: location.latitude,
            longitude: location.longitude,
            lang: 'en_US',
            currency: 'INR',
            checkin: checkin
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

export {getHotels};
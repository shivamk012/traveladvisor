import axios from "axios";


const getLocation = (searchTerm) => {
    return new Promise(async(resolve , reject) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
            params : {
                query : searchTerm
            },
            headers: { 
            'X-RapidAPI-Key': process.env.REACT_APP_Key, 
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com\''
            }
        };
        const response = await axios.request(config)
        const {latitude , longitude} = (response.data.data.Typeahead_autocomplete.results.filter(el => {return el.__typename === 'Typeahead_LocationItem'})[0].detailsV2.geocode);
        resolve({latitude  , longitude})
    })
}

export {getLocation};
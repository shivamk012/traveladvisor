const extractRestaurant = (data) => {
    return data.map((el) => {
        // console.log(el);
        if(el.name) return {
            name: el.name,
            rating: el.rating,
            ranking : el.ranking,
            imgLink : el.photo,
            distance : el.distance_string,
            price : el.price,
            address : el.address,
            cuisine : el.cuisine,
            numberOfReviews : el.num_reviews,
            latitude : el.latitude,
            longitude : el.longitude
        }
    })
}

export {extractRestaurant}
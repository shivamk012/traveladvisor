const extractAttraction = (data) => {
    console.log(data);
    const renderData = data.map((el) => {
        if(el.name) return {
            name: el.name,
            rating: el.rating,
            ranking : el.ranking,
            imgLink : el.photo,
            distance : el.distance_string,
            address : el.address,
            description : el.subtype,
            latitude : el.latitude,
            longitude : el.longitude,
            numberOfReviews : el.num_reviews
        }
    })
    return renderData;
}

export {extractAttraction}
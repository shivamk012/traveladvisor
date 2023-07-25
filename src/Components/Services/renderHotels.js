import { AiOutlineHeart } from "react-icons/ai";

const renderHotels = (items) => {
    // console.log(items);
    items = items.filter((el) => {return el !== undefined && el.imgLink !== undefined});
    
    const ratings = items.map(item => {
        if(!item) return NaN;
        let arr = [] , rate = Number(item.rating);
        for(let i=0 ; i<5 ; ++i){
            if(rate === 0){
                arr.push(<span className="dot"></span>);
            }else if(rate < 1){
                arr.push(<span className="dot color-gradient" ></span>)
                rate=0;
            }else{
                arr.push(<span className="dot color-green"></span>);
            }
            rate--;
        }
        return arr;
    })

    let renderItems = items.map((item , index) => {
        if(!item) return [];
        // console.log(item.imgLink);
        if(!item.imgLink) return [];
        return item && (<div key={index} className="card p-2 border-bottom border-top-0 border-end-0 border-start-0" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.imgLink.images.original.url} style={{"height" : "100%"}} className="img-thumbnail rounded-start position-relative" alt="..."/>
                <div className='position-absolute rounded-circle' style={{"top" : "8%" , "right" : "68%" , "backgroundColor" : "white" , "height" : "30px" , "width" : "30px" , "textAlign" : "center"}}><AiOutlineHeart style={{"fontSize" : "25px"}}/></div>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title mb-0">{index+1}. {item.name}</h5>
                    <div className="d-inline-flex ">
                        <div>{ratings[index]}</div>
                        <p className="card-text mx-4">{item.numberOfReviews}</p>
                    </div>
                    <div className='py-2'>{item.ranking}</div>
                </div>
            </div>
        </div>
    </div>)
    })
    renderItems = renderItems.filter((el) => {return el.length != 0});
    return renderItems;
}

export {renderHotels};
import './Card.css'

export default function Card({items}) {
    const ratings = items.map(item => {
        let arr = [] , rate = Number(item.rating);
        for(let i=0 ; i<5 ; ++i){
            if(rate === 0){
                arr.push(<span className="dot"></span>);
            }else if(rate < 1){
                console.log(rate);
                arr.push(<span className="dot color-gradient" ></span>)
                rate=0;
            }else{
                arr.push(<span className="dot color-green"></span>);
            }
            rate--;
        }
        return arr;
    })

    const cuisineItem = items.map(item => {
        return <div className='d-flex justify-content-evenly'>
            {item.cuisine.map(el => {
                return <span class="badge text-dark rounded-pill" style={{"backgroundColor" : "#e0e0e0"}}>{el}</span>
            })}
        </div>
    })


    const renderItems = items.map((item , index) => {
        return (<div className="card p-2 border-bottom border-top-0 border-end-0 border-start-0" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.imgLink} style={{"height" : "100%"}}className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title mb-0">{index+1}. Card title</h5>
                    <div className="d-inline-flex ">
                        <div>{ratings[index]}</div>
                        <p className="card-text mx-4">{item.numberOfReviews}</p>
                    </div>
                    <div className='py-2'>{item.price}</div>
                    <div className='py-2'><span>Cuisines</span> {cuisineItem[index]}</div>
                </div>
            </div>
        </div>
    </div>)
    })
  return (
    <div>{renderItems}</div>
  )
}

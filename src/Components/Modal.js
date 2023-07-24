import DropDown from "./DropDown"

export default function Modal({dropDownRating , filter , setFilter}) {

  return(
    <>
      <button type="button" className="btn btn-outline-dark rounded-pill mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Filter
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Rating</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <DropDown dropValue={filter} dropDownItems={dropDownRating} setDropValue={setFilter}/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

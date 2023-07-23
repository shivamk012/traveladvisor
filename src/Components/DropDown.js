import './button.css'

export default function DropDown({dropValue , setDropValue , dropDownItems}) { 

    const handleClick = (itemName) => {
        setDropValue(itemName)
    }

    const renderItem = dropDownItems.map((item ) => {
        return <li key={item} onClick={() => handleClick(item)}>{item}</li>
    })

  return (
    <>
        <button className="btn btn-outline-dark dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {dropValue}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {renderItem}
        </ul>
    </>
  )
}

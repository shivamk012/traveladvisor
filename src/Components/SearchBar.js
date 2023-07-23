import './SearchBar.css'
import {ImSearch} from 'react-icons/im';

export default function SearchBar() {
  return (
    <div>
      <form>
        <button className="icon-btn" type="submit"><ImSearch/></button>   
        <input type="search" name="" placeholder="Where to?"/>
      </form>
    </div>
  )
}

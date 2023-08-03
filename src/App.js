import './App.css';
import Maps from './Components/Maps'
import List from './Components/List';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';

function App(){
  const [data , changeData ] = useState({});
  const [filterData , changeFilterData] = useState({});
  const [isLoading , setLoading] = useState(false);

  useEffect(() => {
    changeFilterData(data);
  } , [data])

  return (
    <div className='App overflow-hidden'>
      <div style={{"width" : "100%"}}><Nav stateChange = {changeData} data={data} changeFilterData = {changeFilterData} setLoading={setLoading}/></div>
      <div style={{"width" : "100%"}}>
        <div className='container-fluid gx-0' style={{"maxHeight" : "100vh"}}>
        <div className='row'>
           <div className='col-lg' ><List data={filterData} actualData = {data} changeFilterData = {changeFilterData} isLoading={isLoading}/></div>
          <div className='col-lg'><Maps data={filterData}/></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;

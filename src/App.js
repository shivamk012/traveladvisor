import './App.css';
import Maps from './Components/Maps'
import List from './Components/List';
import Nav from './Components/Nav';
function App(){
  return (
    <div className='App overflow-hidden'>
      <div style={{"width" : "100%"}}><Nav/></div>
      <div style={{"width" : "100%"}}>
      <div className='container-fluid gx-0'>
        <div className='row'>
          <div className='col-lg' ><List/></div>
          <div className='col-lg'><Maps/></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;

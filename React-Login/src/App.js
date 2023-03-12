
import {Routes,Route} from 'react-router-dom';
import Login from './Login'
import Main from './Main';
function App() {
  return (   
  <div>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Main/>}/>
      </Routes>
  </div>
  )
}

export default App;


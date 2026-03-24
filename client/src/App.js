import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './views/Signup'
import Login from './views/Login'
import Notes from './views/Notes'
import Navbar from './components/Navbar'
function App(){
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
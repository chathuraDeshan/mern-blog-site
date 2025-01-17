import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Dashbord from './pages/Dashbord';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/sign-in' element = {<Signin/>}/>
      <Route path='/sign-up' element = {<Signup/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/dashbord' element = {<Dashbord/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
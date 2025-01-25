import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Dashbord from './pages/Dashbord';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/sign-in' element = {<Signin/>}/>
      <Route path='/sign-up' element = {<Signup/>}/>
      <Route path='/projects' element = {<Projects/>}/>
      <Route path='/dashbord' element = {<Dashbord/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
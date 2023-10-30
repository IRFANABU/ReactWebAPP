
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Navbar from './components/navbar';
import Home from './pages/Home/home';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Signup from './components/signup'
import './App.css';
function App() {
  return (
    // fragment using in react <>  </> multiple tag
    <>
    <Routers>
    <Navbar signBtn="Sign In"/>
    {/* <Routes>
      <Route path='/' element={<Home  Children="its our Home page"/>}></Route>
      <Route path='/home' element={<Home Children="its our home page"/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About title="aboutone"/>}/>
    </Routes>
    
    <Footer details1="hello" details2="hello" details3="hello"/> */}
        {/* <Login/> */}


    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>


    <Routes>
    
    <Route path='/home' element={<Home Children="its our home page"/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About title="aboutone"/>}/>
    </Routes>
   
    </Routers>
   
    </>
   
  );
}

export default App;

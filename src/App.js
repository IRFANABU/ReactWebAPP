import logo from './logo.svg';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import './App.css';

function App() {
  return (
    // fragment using in react <>  </>
    <>
    <Navbar/>
    <Home Children="its our Home page"/>
    <About>
      <h2>second One of About page</h2>
   </About>
   <Contact/>
    <Footer/>
    </>
   
  );
}

export default App;

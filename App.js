
import './App.css';
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import OrderNow from './Components/OrderNow';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route element={<Home/>} path='home'/>
      <Route element={<About/>} path='About'/>
      <Route element={<Contact/>} path='Contact'/>
      <Route element={<OrderNow/>} path='Order Now'/>
      <Route element={<Footer/>} path='footer'/>
       

      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;


import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import {Routes, Route, Link} from 'react-router-dom'
import HomePage from './HomePage';
import About from './About';
import Menu from './Menu';

function App() {
  return (
   <>
   <Header />
   <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Menu" element={<Menu/>}></Route>
        
        </Routes>

   <Main  />
   <Footer/>
   </>
  );
}

export default App;

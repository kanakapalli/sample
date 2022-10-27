
import { Routes, Link, Route, Navigate } from 'react-router-dom';
import './App.css';
import Displayshow from './component/Displayshow';
import Feedback from './component/Feedback';
import Footer from './component/Footer';
import Header from './component/Header';
import Help from './component/Help';
import Home from './component/Home';
import HRating from './component/HRating';
import Kids from './component/Kids';
import Subscribe from './component/Subscribe';
import Tvshows from './component/Tvshows';

function App() {
  return (
    <div>

      <Header />
      

      <section style={{ backgroundColor: 'whitesmoke' }}>
        <nav>
          <Link to="/home">Home |</Link>
          <Link to="/tv-shows">Tv Show |</Link>
          {/* <Link to="/Help">Help |</Link> */}
          <Link to="/Feedback">Feedback |</Link>
          <Link to="/HRating">Hightest Rating Movies |</Link>
          <Link to="/kids">Kids</Link>
        </nav>
      </section>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home'/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/tv-shows" element={<Tvshows />} />
        <Route path="/tv-shows/:name" element={<Displayshow />} />
        {/* <Route path="/Help/*" element={<Help />}>
          <Route path="FAQ" element={<Help />} />
          <Route path="Aboutus" element={<Help />} />
          <Route path="Contact" element={<Help />} />
        </Route> */}
        
      <Route path="/Subscribe" element={<Subscribe/>}/>
      <Route path="/Feedback" element={<Feedback/>}/>
      <Route path="/HRating" element={<HRating/>}/>
      <Route path="/Kids" element={<Kids/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

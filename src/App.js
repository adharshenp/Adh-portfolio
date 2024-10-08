import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import './bootstrap.min.css'
import Home from './Home';
import Skill from './Skill';
import About from './About';
import MyProjects from './MyProjects';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/myproject' element={<MyProjects/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;


import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import MyProjects from "./Components/MyProjects";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='MyProjects' element={<MyProjects />} />
        </Routes>
           </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

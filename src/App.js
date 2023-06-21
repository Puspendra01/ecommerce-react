import { Route, Routes } from 'react-router-dom';
import Header from './Component/user/Header';
import Home from './Component/user/Home';
import Footer from './Component/user/Footer';
import Contact from './Component/user/Contact';
import Shop from './Component/user/Shop';
import Details from './Component/user/Details';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Details' element={<Details />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

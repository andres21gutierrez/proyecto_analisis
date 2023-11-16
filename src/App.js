import NavBar from './Components/NavBar/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className=''>
        <NavBar/>
      </header>
      <main className=' overflow-hidden min-h-[100vh]'>
        <div className='md:mt-[60px] mt-[65px]'>
        <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
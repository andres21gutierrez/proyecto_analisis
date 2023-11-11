import NavBar from './Components/NavBar/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className=''>
        <NavBar/>
      </header>
      <main className=' overflow-hidden md:'>
        <div className='md:mt-[60px] mt-[88px]'>
        <Outlet/>
        </div>
      </main>

      <div>Footer</div>
    </div>
  );
}

export default App;

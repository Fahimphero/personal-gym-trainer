import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div className='bg-dark'>
      <Header></Header>
      <Home></Home>
      <Services></Services>
    </div>
  );
}

export default App;

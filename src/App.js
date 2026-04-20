import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Taskcomponent from './components/Taskcomponent';
import Recapday1 from './components/Recapday1';
import Productscomponent from './components/Productscomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from "./components/Thirdcomponent";
import Fourthcomponent from './components/Fourthcomponenet';
import Fifthcomponent from './components/Fifthcomponent';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <header className="App-header">
          <h1>Introduction to ReactJS</h1>
        </header>

        {/* nav links go here  */}
        <nav>
          <Link to="/first"> First component</Link><br />
          <Link to="/second">Second componenet</Link><br />
          <Link to="/third"> Third componenet</Link><br />
          <Link to="/recap">Recap componenet</Link><br />
          <Link to="/task">Task componenet</Link><br />
          <Link to="/products">Products componenet</Link><br />
          <Link to="/fouth">Fourth component</Link><br />
          <Link to="/fifth">Fifth component</Link>
        </nav>
        <Routes>
          <Route path='/first' element= {<Firstcomponent/>} />
          <Route path='/second' element={<Secondcomponent/>} />
          <Route path='/third' element= {<Thirdcomponent/>} />
          <Route path='/recap' element={<Recapday1/>} />
          <Route path='/task' element={<Taskcomponent/>} />
          <Route path='/products' element={<Productscomponent/>} /> 
          <Route path='/fourth' element={<Fourthcomponent/>} />
          <Route path='/fifth' element={<Fifthcomponent/>} />
        </Routes>

        
      </div>


    </BrowserRouter>
  );
}

export default App;


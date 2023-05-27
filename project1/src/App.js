import './App.css';
import Navigation from './components/Navigation';
import {Routes,Route} from 'react-router-dom';
import Add from './components/Add';
import TabS from './components/TabS';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<TabS/>}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

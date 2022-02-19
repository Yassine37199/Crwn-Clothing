import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={ <Homepage />} />
      </Routes>
      
    </div>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Store from './Store';
import Routing from './components/Routing';

function App() {

  return (
    <BrowserRouter>
      <Store>
        <Routing/>
      </Store>
    </BrowserRouter>
  );
}

export default App;

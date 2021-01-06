import './App.css';
import VendingMachine from './VendingMachine';
import Pikachu from './Pikachu';
import NiceMeme from './NiceMeme';
import WednesdayFrog from './WednesdayFrog';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/pikachu">
          <Pikachu />
        </Route>
        <Route exact path="/nicememe">
          <NiceMeme />
        </Route>
        <Route exact path="/wednesday">
          <WednesdayFrog />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

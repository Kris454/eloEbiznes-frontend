import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContextProvider} from "./contexts/AppContext";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <AppContextProvider>
              <header className="App-category">
                  <Categories />
              </header>
              <header className="App-menu">
                  <Menu/>
              </header>
          </AppContextProvider>
        </div>
  );
}

export default App;


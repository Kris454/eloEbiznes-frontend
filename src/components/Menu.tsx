import '../App.css';
import AppContext from "../contexts/AppContext";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Products} from "./Products";
import {AddProduct} from "./AddProduct";
import {Categories} from "./Categories";
import {Users} from "./Users";
import {SignInModal} from "./SignInModal";
import {SignUpModal} from "./SignUpModal";
import {useContext} from "react";
import {LoggedIn} from "./LoggedIn";

function Menu() {
    const {isLoggedIn, setIsLoggedIn} = useContext(AppContext)

    return (
        <div>
            <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Wszystkie produkty</Link>
                        </li>
                        {isLoggedIn &&
                        <li className="nav-item">
                            <Link className="nav-link" to="/addproduct">Dodaj produkt</Link>
                        </li>
                        }
                        <li className="nav-item">
                            {isLoggedIn &&
                            <Link className="nav-link" onClick={() => setIsLoggedIn(false)} to="/">Wyloguj</Link>}
                        </li>
                        <li className="nav-item">
                            {!isLoggedIn &&
                            <Link className="nav-link" to="/signin">Zaloguj</Link>}
                        </li>
                        <li className="nav-item">
                            {!isLoggedIn &&
                            <Link className="nav-link" to="/signup">Zarejestruj</Link>}
                        </li>
                        <li className="nav-item">
                            <div className="input-group">
                                <input type="search" className="form-control rounded" placeholder="Produkt"
                                       aria-label="Produkt"
                                       aria-describedby="search-addon"/>
                                <button type="button" className="btn btn-outline-primary">Szukaj</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
                <Route path="/products" component={Products}/>
                <Route path="/addproduct" component={AddProduct}/>
                <Route path="/categories" component={Categories}/>
                <Route path="/users" component={Users}/>
                <Route path="/signin" component={SignInModal}/>
                <Route path="/signup" component={SignUpModal}/>
                <Route path="/loggedIn" component={LoggedIn}/>
            </BrowserRouter>
        </div>
    );
}

export default Menu;

import React, {useEffect, useState} from "react";
import {IProduct, ICategory, IAContextState, IUser} from "../interface";
import {fetchCategories} from "../api/categories"
import fetchProducts from "../api/products";

const defaultValue: IAContextState = {
    categories: [],
    products: [],
    users: [],
    isLoggedIn: false,
    cart: [],
    setCategories: () => {
        // Not doing anything at initialization
    },
    setProducts: () => {
        // Not doing anything at initialization
    },
    setUsers: () => {
        // Not doing anything at initialization
    },
    setIsLoggedIn: () => {
        // Not doing anything at initialization
    },
    setCart: () => {
        // Not doing anything at initialization
    }
}

export const AppContext = React.createContext(defaultValue);

export const AppContextProvider: React.FC = ({children}) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState<IProduct[]>([]);

    const providerValue: IAContextState = {
        categories,
        products,
        users,
        isLoggedIn,
        setCategories,
        setProducts,
        setUsers,
        setIsLoggedIn,
        cart,
        setCart,
    }

    useEffect(() => {
        fetchCategories()
            .then((categs) => {
                console.log(categs)
                setCategories(categs)
            })
        fetchProducts()
            .then((bks) => {
                console.log(bks)
                setProducts(bks)
            })
    }, []);

    return (
        <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
    );
};

export default AppContext;

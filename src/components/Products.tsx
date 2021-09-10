import React, {useContext, useState} from "react";
import {IProduct} from "../interface";
import {removeProduct} from "../api/products";
import AppContext, {AppContextProvider} from "../contexts/AppContext";
import useCart from "../hooks/useCart";
import Cart from "./Cart";

export interface ProductsProps extends React.ReactHTML {
}

export const Products = (props: ProductsProps) => {
    const {categories, products, setProducts, isLoggedIn} = useContext(AppContext)
    const {cart, addProductCart, removeProductCart, total} = useCart();
    const [order, setOrder] = useState(false);

    function buy(){
        const result = cart.map(prod => prod.id);
        setOrder(true);
    }

    function remove(id: number) {
        removeProduct(id).then(product => {
            console.log(product);
            if (product.ok) {
                const filteredProducts = products.filter(product => product.id !== id)
                setProducts([...filteredProducts])
            }
        });
    }


    return (
        <div>
            <div className="products">
                <table className="center table-bordered" >
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Opis</th>
                        <th>Kategoria</th>
                        <th>Cena</th>
                        <th>Akcje</th>
                    </tr>
                    </thead>
                    {products.map((product: IProduct) => (<thead><tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{categories.filter(category => category.id === product.category)[0].name}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={() => remove(product.id)}>Usun</button>
                            <button onClick={() => addProductCart(product)}>Do koszyka</button>
                        </td>
                    </tr></thead>))}
                </table>
            </div>


        <div className="App-cart">
            Koszyk:
            <table className="center">
                <tr>
                    <th>Nazwa</th>
                    <th>Cena</th>
                    <th>Akcje</th>
                </tr>
                {cart.map((product: IProduct) => (<tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button onClick={() => removeProductCart(product.id)}>Usuń</button>
                    </td>
                </tr>))}<tr>
                <td></td>
                <td>
                    {total}
                </td>
                <td>
                    {
                        cart.length > 0 && isLoggedIn &&
                        <div className="buttons-product">
                            <button onClick={() => buy()} className="add-to-cart-button">Kup</button>
                        </div>
                    }
                </td>
            </tr>
                {order &&
                <tr>
                Produkty dostępne
                </tr>}
                {order &&
                <tr><button className="add-to-cart-button">Dalej</button></tr>
                }
            </table>
        </div>
        </div>
    )
}

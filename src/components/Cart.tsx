import React, {useContext} from "react";
import {IProduct} from "../interface";
import useCart from "../hooks/useCart";
import AppContext from "../contexts/AppContext";


export const Cart = () => {
    const {categories, products, isLoggedIn} = useContext(AppContext)
    const {cart,addProductCart, removeProductCart,total} = useCart();


    function buy(){
        const result = cart.map(prod => prod.id);
        window.alert("Zamówienie przyjęte");
    }

    return (
        <div>
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
            </table>
        </div>

    )
}

export default Cart;
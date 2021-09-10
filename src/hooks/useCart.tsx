import {useState} from "react";
import {IProduct} from "../interface";

function useBasket() {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);

    function addProductCart(product: IProduct) {
        setCart([
            ...cart,
            product
        ])
        setTotal(
            total + product.price)
    }


    function removeProductCart(id: number) {
        const filteredBooks = cart.filter(product => product.id !== id)

        setCart([...filteredBooks])
        setTotal(0)
    }

    return {
        cart,
        addProductCart,
        removeProductCart,
        total,
    }
}

export default useBasket;

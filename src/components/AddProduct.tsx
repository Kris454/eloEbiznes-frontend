import React, {useContext} from "react";
import {addProduct} from "../api/products";
import {ICategory} from "../interface";
import AppContext from "../contexts/AppContext";

export interface AddProductProps extends React.ReactHTML {
}

export const AddProduct = (props: AddProductProps) => {
    const {categories, products, setProducts} = useContext(AppContext)
    const product = {
        name: '',
        description: '',
        category: '',
        price: ''
    }

    function addProductToSystem() {
        addProduct(product).then(bk => {
            console.log(bk);
            setProducts([
                ...products,
                bk
            ]);
        });
    }

    return (
        <div>
            <div className="products">
                <div className="products">
                    <div className="row">
                        <label htmlFor="name">Nazwa: </label>
                        <input id="name" name="name" type="text" onChange={e => product.name = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="description">Opis: </label>
                        <input id="description" name="description" type="text" onChange={e => product.description = e.target.value}/>
                    </div>
                    <div className="row">
                        <label htmlFor="category">Kategoria: </label>
                        <select value={this} id="category" name="category" onChange={e => product.category = e.target.value}>
                            <option value=''>---</option>
                            {categories.map((category: ICategory) => (<option value={category.id}>
                                {category.name}
                            </option>))}
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor="description">Cena: </label>
                        <input id="description" name="description" type="text" onChange={e => product.price = e.target.value}/>
                    </div>
                    <button onClick={() => addProductToSystem()}>Dodaj produkt</button>
                </div>
            </div>
        </div>

    )
}

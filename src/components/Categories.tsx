import React, {useContext} from "react";
import {ICategory} from "../interface";
import {addCategory, removeCategory} from "../api/categories";
import AppContext from "../contexts/AppContext";
import Menu from "./Menu";

export interface CategoriesProps extends React.ReactHTML {
}

export const Categories = () => {
    const {categories, setCategories, isLoggedIn} = useContext(AppContext)
    let newName = '';

    function addCategoryToContext(name: string) {
        addCategory(name).then(category => {
            console.log(category);
            setCategories([
                ...categories,
                category
            ]);
        });
    }

    function removeCategoryToContext(id: number) {
        removeCategory(id).then(category => {
            console.log(category);
            if (category.ok) {
                const filteredProducts = categories.filter(product => product.id !== id)
                setCategories([...filteredProducts])
            }
        });
    }

    function setName(name: string) {
        newName = name;
    }

    return (
        <div>
            {isLoggedIn &&
            <div className="products">
                <input id="name" name="name" type="text" onChange={e => setName(e.target.value)}/>
                <button onClick={() => addCategoryToContext(newName)}>Dodaj kategorie</button>
            </div>
            }
            <div className="category">

                <table className="left table-bordered" >
                    Kategorie:
                    <tr>
                        <th></th>
                        {isLoggedIn &&
                        <th>Akcje</th>}
                    </tr>
                    {categories.map((product: ICategory) => (<tr>
                        <td>{product.name}</td>
                        {isLoggedIn &&
                        <td>
                            <button onClick={() => removeCategoryToContext(product.id)}>Usun</button>
                        </td>
                        }
                    </tr>))}
                </table>
            </div>
        </div>

    )
}

export default Categories;
import {IProduct} from "../interface";

export const fetchProducts = async (): Promise<IProduct[]> => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/products`)
        .then(response => response.json())
}


export const addProduct = async (body: any): Promise<IProduct> => {
    body.category = parseInt(body.category);
    return fetch(process.env.REACT_APP_SERVER_URL + `/products`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
}

export const removeProduct = async (id: number) => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/products/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}

export default fetchProducts

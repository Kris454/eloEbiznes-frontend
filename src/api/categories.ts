import { ICategory } from "../interface";

export const fetchCategories = async (): Promise<ICategory[]> => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/category`)
        .then(response => response.json())
}

export const addCategory = async (name: string): Promise<ICategory> => {
    let body = {
        name: name
    }
    return fetch(process.env.REACT_APP_SERVER_URL + `/category`, {
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

export const removeCategory = async (id: number) => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/category/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}


export default fetchCategories

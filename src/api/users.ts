import {IUser} from "../interface";

export const fetchUsers = async (): Promise<IUser[]> => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/user`)
        .then(response => response.json())
}


export const addUser = (body: any): Promise<any> => {
    console.log("addUser")
    return fetch(process.env.REACT_APP_SERVER_URL + `/signUp`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify(body)
    })
}
export const signUserIn = (body: any): Promise<any> => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/signIn`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        body: JSON.stringify(body)
    })
}

export const removeUser = async (id: number) => {
    return fetch(process.env.REACT_APP_SERVER_URL + `/user/` + id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    });
}

export default fetchUsers

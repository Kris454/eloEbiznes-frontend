import React, {useContext} from "react";
import {IUser} from "../interface";
import {removeUser} from "../api/users";
import AppContext from "../contexts/AppContext";

export interface UsersProps extends React.ReactHTML {
}

export const Users = (props: UsersProps) => {
    const {users, setUsers} = useContext(AppContext)

    function remove(id: number) {
        removeUser(id).then(user => {
            console.log(user);
            if (user.ok) {
                const filteredUsers = users.filter(usr => usr.id !== id)
                setUsers([...filteredUsers])
            }
        });
    }

    return (
        <div>
            <div className="products">
                <table className="center">
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Login</th>
                        <th>Akcje</th>
                    </tr>
                    {users.map((user: IUser) => (<tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.login}</td>
                        <td>
                            <button onClick={() => remove(user.id)}>Remove</button>
                        </td>
                    </tr>))}
                </table>
            </div>
        </div>

    )
}

import React, {useContext, useEffect} from "react";
import AppContext from "../contexts/AppContext";
import {useHistory} from "react-router-dom";

export interface LoggedInProps extends React.ReactHTML {
}

export const LoggedIn = (props: LoggedInProps) => {
    const {setIsLoggedIn} = useContext(AppContext)
    const history = useHistory();

    useEffect(() => {
        setIsLoggedIn(true)
        history.push("/");
    }, [history, setIsLoggedIn]);

    return (
        <div></div>
    )
}

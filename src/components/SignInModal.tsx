import React, {useContext, useEffect, useState} from "react";
import Modal from "react-modal"
import {signUserIn} from "../api/users";
import AppContext from "../contexts/AppContext";
import { useHistory } from "react-router-dom";
export interface SignInModalProps extends React.ReactHTML {
}

export const SignInModal = (props: SignInModalProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isError, setIsError] = React.useState(false)
    const [errorCode, setErrorCode] = React.useState('')
    const {setIsLoggedIn} = useContext(AppContext)
    const history = useHistory();

    const input = {
        email: '',
        password: ''
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#D3D3D3'
        }
    };

    function signIn() {
        signUserIn(input)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setIsLoggedIn(true)
                    setModalIsOpen(false)
                    history.push("/");
                } else {
                    setIsError(true)
                    setErrorCode("Invalid credentials!")
                }
            })
    }


    const setModalIsOpenToTrue = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
        history.push("/");
    }

    useEffect(() => {
        setModalIsOpenToTrue();
    }, []);

    function navigateTo(url: string) {
        window.location.assign(process.env.REACT_APP_SERVER_URL + url)
    }

    return (
        <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
            <form id="signinform">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="sign_in_email" name="email" type="text" className="validate"
                               onChange={e => input.email = e.target.value} required aria-required="true"/>
                        <label htmlFor="sign_in_email" data-error="wrong" data-success="right">E-mail</label>
                    </div>
                </div>

                <div className=" row">
                    <div className=" input-field col s12">
                        <input id="sign_in_password" name="password" type="password" className="validate"
                               onChange={e => input.password = e.target.value} required aria-required="true"/>
                        <label htmlFor="sign_in_password">Password</label>
                    </div>
                </div>
            </form>
            <div className="modal-footer small-margin-bottom">
                <div className="row auto-margin-bottom">

                    {/*
                    <div className="col s3">
                        <button className="waves-effect waves-light btn blue"
                                onClick={() => navigateTo("/authenticate/google")}>
                            Google
                        </button>
                    </div>
                    */}
                    <div className="col s3">
                        <button className="btn btn-primary"
                                onClick={() => navigateTo("/authenticate/facebook")}>
                            Facebook
                        </button>
                    </div>
                    <div className="col s2">
                        &nbsp;
                    </div>
                    <div className="row">
                        {isError &&
                        <span className='error'>{errorCode}</span>}
                    </div>
                    <div className="col s2">
                        <button className="btn-flat" type="reset" form="signinform" onClick={() => setModalIsOpenToFalse()}>Cancel
                        </button>
                    </div>
                    <div className="col s2">
                        <button className="btn btn-secondary" type="button" form="signinform" onClick={() => signIn()}>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

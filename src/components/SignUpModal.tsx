import React, {useEffect, useState} from "react";
import Modal from "react-modal"
import {addUser} from "../api/users";
import '../App.css';

export interface SignUpModalProps extends React.ReactHTML {
}

export const SignUpModal = (props: SignUpModalProps) => {
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [isError, setIsError] = React.useState(false)
    const [errorCode, setErrorCode] = React.useState('')
    const input = {
        firstName: '',
        lastName: '',
        email: '',
        login: '',
        password: '',
    }
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor       : '#D3D3D3'
        }
    };

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
        window.location.assign(process.env.REACT_APP_CLIENT_URL + '')
    }

    useEffect(() => {
        setModalIsOpenToTrue();
    }, []);

    function signUp() {
        addUser(input)
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                    setModalIsOpen(false)
                    window.location.assign(process.env.REACT_APP_CLIENT_URL + "/signIn")
                } else {
                    setIsError(true)
                    setErrorCode("User with this e-mail already exists!")
                }
            })
    }

    return (
            <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
                    <form id="signupform">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="firstname" name="firstname" type="text" className="validate"
                                       onChange={e => input.firstName = e.target.value} required aria-required="true"/>
                                <label htmlFor="firstname" data-error="wrong" data-success="right">Imie</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="lastname" name="lastname" type="text" className="validate"
                                       onChange={e => input.lastName = e.target.value} required aria-required="true"/>
                                <label htmlFor="lastname" data-error="wrong" data-success="right">Nazwisko</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="sign_up_email" name="email" type="text" className="validate"
                                       onChange={e => input.email = e.target.value} required aria-required="true"/>
                                <label htmlFor="sign_up_email" data-error="wrong" data-success="right">E-mail</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input id="login" name="login" type="text" className="validate"
                                       onChange={e => input.login = e.target.value} required aria-required="true"/>
                                <label htmlFor="login" data-error="wrong" data-success="right">Login</label>
                            </div>
                        </div>

                        <div className=" row">
                            <div className=" input-field col s12">
                                <input id="sign_up_password" name="password" type="password" className="validate"
                                       onChange={e => input.password = e.target.value} required aria-required="true"/>
                                <label htmlFor="sign_up_password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            {isError &&
                            <span className='error'>{errorCode}</span>}
                        </div>

                        <button className="btn-flat" type="reset" form="signupform" onClick={() => setModalIsOpenToFalse()}>Cancel
                        </button>
                        <button className="btn" type="button" form="signupform" onClick={() => signUp()}>
                            Sign up
                        </button>
                    </form>
            </Modal>
    )
}

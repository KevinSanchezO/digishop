import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onChecking, onLogin, onLogout, onLogoutDigishop } from '../store';

export const useAuthStore = () => {

    const {user, status, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = ({email, password}) => {
        dispatch(onChecking());

        //try catch

        dispatch(onLogin({name: "Zokuin", uid: "NerissaWillDateAndMaryAMan"}))
    }

    const startRegister = ({name, email, password}) => {
        dispatch(onChecking());

        //try catch
        dispatch(onLogin({name: "Kevin", uid: "MatingPressingBae"}))
    }

    const startLogout = () => {
        dispatch(onLogoutDigishop);
        dispatch(onLogout);
    }

    return {
        //* Properties
        user, status, errorMessage,
        //* Methods
        startLogin,
        startRegister,
        startLogout,
    }
}

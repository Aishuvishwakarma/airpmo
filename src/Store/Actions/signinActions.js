import {
   SIGNIN_FAIL,
   SIGNIN_SUCCESS,
   LOGOUT,
   LOAD_USER,
   LOGIN_LOADING_TRUE
 } from '../actionTypes';
import axios from '../../Utility/AxiosConfig';


export const signUser = (authUser,history) => dispatch => {
    axios.post('api/login', authUser)
        .then( success =>{
            history.pathname  = '/dashboard/jobcard';
            return dispatch(successSignin(success.data));
        })
        .catch( fail => {
            return dispatch(failSignin(fail.response.data));
        });
};




export const successSignin = (auth) =>  dispatch => {
    return dispatch({
    type: SIGNIN_SUCCESS,
    payload: auth
    });
};

export const loadUser = (user) => ({
    type: LOAD_USER,
    payload: user
});

export const failSignin = (err) => ({
    type: SIGNIN_FAIL,
    payload: errorResolve(err)
});

export const logoutUser = () => ({
    type: LOGOUT
});

export const signinLoadingTrue = () => ({
    type: LOGIN_LOADING_TRUE,
    payload: true
});

const errorResolve = (errors) => {
    let errorEntities;
    if(Array.isArray(errors)) errorEntities = errors.reduce(
        (errors, error) => ({...errors, [error.param]: error }), {});
    else errorEntities = errors;
    return errorEntities;
};



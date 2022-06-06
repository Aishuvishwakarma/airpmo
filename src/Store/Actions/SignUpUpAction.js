import { SIGNUP_SUCCESS,SIGNUP_FAIL } from "../actionTypes";

import axios from '../../Utility/AxiosConfig';


export const SignUp = (data,history)=> dispatch =>{
    axios.post('api/users', data)
    .then( success =>{
        history.pathname  = '/dashboard/jobcard';
        return dispatch(successSignup(success.data));
    })
    .catch( fail => {
        history.pathname  = '/signup';
        return dispatch(failSignup(fail.response.data));
    });
}

export const successSignup = (auth) =>  dispatch => {
    
    return dispatch({
    type: SIGNUP_SUCCESS,
    payload: auth
    });
};

export const failSignup = (err) => ({
    type: SIGNUP_FAIL,
    payload: errorResolve(err)
});




const errorResolve = (errors) => {
    let errorEntities;
    if(Array.isArray(errors)) errorEntities = errors.reduce(
        (errors, error) => ({...errors, [error.param]: error }), {});
    else errorEntities = errors;
    return errorEntities;
};
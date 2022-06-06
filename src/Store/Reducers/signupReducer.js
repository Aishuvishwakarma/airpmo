import { SIGNUP_SUCCESS,SIGNUP_FAIL } from "../actionTypes";


const initialState = {
    isAuthenticated: false,
    token: null, 
    user:  null,
    errors: null,
    loading: false
 };

 export const signupReducer = (state=initialState, {type, payload}) => {
     switch (type) {
       
    
         case SIGNUP_SUCCESS:
             return {
                 ...state,
                 ...payload,
                 isAuthenticated: true,
                 loading: false,
                 errors: null
                 
             };
            case SIGNUP_FAIL:
             return {
                 ...state,
                 isAuthenticated: false,
                 errors: payload,
                 loading: false,
                 user:null
             };
         default:
             return state;
     }
 };
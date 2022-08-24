import * as types from './actionType'
/*
import axios from 'axios'
const setSignup=(payload)=>(dispatch)=>{
    
    dispatch({type:types.SIGNUP_REQUEST})
    return axios.post(`http://localhost:8080/signup`,payload).then((r)=>{
        dispatch({type:types.SIGNUP_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.SIGNUP_FAILURE,payload: e})
    })
}
export {setSignup} */
import * as types from './actionType'

import axios from 'axios'

const registerData=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_SIGNUP_REQUEST})
    axios.get(`http://localhost:8080/signupData`).then((r)=>{
        dispatch({type:types.GET_SIGNUP_SUCCESS,payload: r.data})
    })
    .catch((e)=>{
        dispatch({type:types.GET_SIGNUP_FAILURE})
    })
}

const postData=(payload)=>(dispatch)=>{
    dispatch({type:types.POST_SIGNUP_REQUEST})
    axios.post(`http://localhost:8080/signupData`,payload).then((r)=>{
        dispatch({type:types.POST_SIGNUP_SUCCESS,payload: r.data}).then(()=>{
            // console.log("act",r.data)
        })
    })
    .catch((e)=>{
        dispatch({type:types.POST_SIGNUP_FAILURE})
    })
}


const loginSuccess=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_LOGIN_REQUEST})
    return dispatch({type:types.GET_LOGIN_SUCCESS,payload})
}



export {registerData,postData, loginSuccess}




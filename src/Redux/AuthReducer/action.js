import * as types from './actionType'

import axios from 'axios'

const registerData=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_SIGNUP_REQUEST})
    // axios.get(`http://localhost:8000/signupData`).then((r)=>{
    axios.get(`https://api-0231.herokuapp.com/signupData`).then((r)=>{
        dispatch({type:types.GET_SIGNUP_SUCCESS,payload: r.data})
    })
    .catch((e)=>{
        dispatch({type:types.GET_SIGNUP_FAILURE})
    })
}

const postData=(payload)=>(dispatch)=>{
    dispatch({type:types.POST_SIGNUP_REQUEST})
    // axios.post(`http://localhost:8000/signupData`,payload).then((r)=>{
    axios.post(`https://api-0231.herokuapp.com/signupData`,payload).then((r)=>{
        dispatch({type:types.POST_SIGNUP_SUCCESS,payload: r.data}).then(()=>{
            // console.log("act",r.data)
        })
    })
    .catch((e)=>{
        dispatch({type:types.POST_SIGNUP_FAILURE})
    })
}


export {registerData,postData}




import * as types from "./actionType"
const init={
    signup:[],
    isLoading:false,
    isError:false
}

const reducer=(state=init,{type,payload})=>{
    switch(type){
        case types.SIGNUP_REQUEST:{
            return{
                ...state,
                isLoading:true,

            }
        }

        case types.SIGNUP_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                signup:payload
            }
        }

        case types.SIGNUP_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true

            }
        }
        default:{
            return state
        }
    }
}

export {reducer}
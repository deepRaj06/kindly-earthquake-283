/*  
Author: Ashish Kumar Chaudhary
EmailId: 
Date: 23 Aug 2022
WorkItem: Created action methods for signup and login
*/
import * as types from "./actionType";
import axios from "axios";

const registerData = (payload) => (dispatch) => {
  dispatch({ type: types.GET_SIGNUP_REQUEST });
  axios
    .get(`https://api-0231.herokuapp.com/signupData`)
    .then((r) => {
      dispatch({ type: types.GET_SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_SIGNUP_FAILURE });
    });
};

const postData = (payload) => (dispatch) => {
  dispatch({ type: types.POST_SIGNUP_REQUEST });
  axios
    .post(`https://api-0231.herokuapp.com/signupData`, payload)
    .then((r) => {
      dispatch({ type: types.POST_SIGNUP_SUCCESS, payload: r.data }).then(
        () => {}
      );
    })
    .catch((e) => {
      dispatch({ type: types.POST_SIGNUP_FAILURE });
    });
};

export { registerData, postData };

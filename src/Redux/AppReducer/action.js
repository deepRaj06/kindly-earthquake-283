import * as types from "./actionTypes";
import axios from "axios";
export const getCities = (params) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8000/results?q=india`, {
      params: params,
    });
    return dispatch({
      type: types.GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({ type: types.GET_ALL_PRODUCTS_FAILURE });
  }
};

// ===============ADD PROPERTY FORM ACTIONS=========================\
export const tempFormFn = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: types.ADD_FORM_SUCCESS, payload });
};
export const addForm = (payload) => async (dispatch) => {
  dispatch({ type: types.ADD_FORM_REQUEST });

  try {
    let res = await axios.post("http://localhost:8000/form", payload);

    return dispatch({ type: types.ADD_FORM_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.ADD_FORM_FAILURE });
  }
};

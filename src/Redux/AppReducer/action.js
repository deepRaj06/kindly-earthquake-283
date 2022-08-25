import * as types from "./actionTypes";
import axios from "axios";
export const getCities = (params) => async (dispatch) => {
  dispatch({ type: types.GET_ALL_PRODUCTS_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/results?q=india`, {
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

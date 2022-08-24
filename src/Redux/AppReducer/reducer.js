import * as types from "./actionTypes";
const initState = {
  allProducts: [],
  isLoading: false,
  isError: false,
  byCity:[],
  byType:[]
};
export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allProducts: payload,
      };
    case types.GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

import * as types from "./actionTypes";
const initState = {
  allProducts: [],
  isLoading: false,
  isError: false,
  byCity: [],
  byType: [],
  addPropertyForm: {},
  propertyForms:[],
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
    case types.TEMP_FORM_REQUEST:
      return {
        ...state,
      };
    case types.TEMP_FORM_SUCCESS:
      console.log(payload);
      return {
        ...state,
        addPropertyForm: { ...state.addPropertyForm, payload },
      };
    case types.TEMP_FORM_FAILURE:
      return {
        ...state,
      };
    case types.ADD_FORM_REQUEST:
      return {
        ...state,
      };
    case types.ADD_FORM_SUCCESS:
      // console.log(payload);
      return {
        ...state,propertyForms:[...state.propertyForms,payload]
        
      };
    case types.ADD_FORM_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

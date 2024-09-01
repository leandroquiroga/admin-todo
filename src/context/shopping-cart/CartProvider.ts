import { CartActionTypes, CartState } from "../../utils/features/context/interfaces";


export const cartReducer = (state: CartState, action: CartActionTypes): CartState => {

  switch (action.type) {
    case "[CART] ADD_PRODUCT":
      return {
        ...state,
        quantityCart: state.quantityCart + 1
      };
    case "[CART] REMOVE_PRODUCT":
      return {
        ...state,
        quantityCart: state.quantityCart - 1
      };

    default:
      return state;
  };
}
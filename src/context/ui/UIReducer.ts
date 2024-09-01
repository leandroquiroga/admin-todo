import { UIState, UIActionTypes } from '../../utils/features/context/interfaces'

export const uiReducer = (state: UIState, action: UIActionTypes) => {

  switch (action.type) {
    case "[UI] SHOW_CART":
      return {
        ...state,
        showCart: action.payload,
      };
    default:
      return state;
  }
}

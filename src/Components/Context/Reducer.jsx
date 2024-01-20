export const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    localStorage.setItem("Item", JSON.stringify(action.payload));
    return {
      ...state,

      cart: [...state.cart, { ...action.payload, qty: 1 }],
      
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((single) => single.id !== action.payload.id),
    };
  }

  if (action.type === "CHANGE_CART_QTY") {
    return {
      ...state,
      cart: state.cart.filter((c) =>
        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
      ),
    };
  }

  return state;
};

export const produuctReducer = (state, action) => {
  if (action.type === "SORT_BY_PRICE") {
    return {
      ...state,
      sort: action.payload,
    };
  }

  if (action.type === "SORT_BY_STOCK") {
    return {
      ...state,
      byStock: !state.byStock,
    };
  }

  if (action.type === "SORT_BY_DELIVERY") {
    return {
      ...state,
      byFastDelivery: !state.byFastDelivery,
    };
  }

  if (action.type === "SORT_BY_RATE") {
    return {
      ...state,
      byRating: action.payload,
    };
  }

  if (action.type === "SORT_BY_SEARCH") {
    return {
      ...state,
      searchQuery: action.payload,
    };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    };
  }

  return state;
};

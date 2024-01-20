import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { popularProducts } from "../Products/ProductsData";
import { CartReducer } from "./Reducer";

const ShopCart = createContext(null);

const Context = ({ children }) => {
  const initialState = {
    products: popularProducts,
    cart: [],
  };

  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <ShopCart.Provider value={{ state, dispatch, user, login, logout }}>
      {children}
    </ShopCart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(ShopCart);
};

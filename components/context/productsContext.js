import { createContext, useReducer } from "react";

const initState = {
  productsList: [],
};

const productsCtxReducer = (state, action) => {
  if (action.type === "FETCHED_PRODUCTS_LIST") {
    const newState = { ...state, productsList: action.payload };
    return newState;
  }
};

export const ProductsContext = createContext(initState);

export const ProductsContextProvider = (props) => {
  const [productsState, dispatchedProductsState] = useReducer(
    productsCtxReducer,
    initState
  );

  return (
    <ProductsContext.Provider
      value={{ ...productsState, dispatchedProductsState }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

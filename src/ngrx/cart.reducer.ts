import { CartState } from "./cart.state";
import * as CartActions from './cart.actions';
import { createReducer, on } from "@ngrx/store";

export const initialState : CartState = {
    cart: {
        createdAt: new Date().toString(),
        id: '1',
        productList: [],
        total: 0,
        userId: '1',
      },
    };

    export const cartReducer = createReducer(
        initialState,
        on(CartActions.addCart, (state, action) => {
            // console.log(action.product);
            //make product list unique
            let productList = [...state.cart.productList];
            let product = action.product;
            let isProductExist = false;
            productList.forEach((p) => {
              if (p.id === product.id) {
                isProductExist = true;
              }
            });
            if (!isProductExist) {
              productList.push({ ...product, quantity: 1 });
            }
            else {
              productList.forEach((p) => {
                if (p['id'] === product['id']) {
                  p = {
                    ...p,
                    quantity: p.quantity + 1,
                  };
                  
                  // p = {...p};
                  for(let i = 0; i < productList.length; i++) {
                    if(productList[i]['id'] == p['id']) {
                      productList[i] = p;
                    }
                  }
                  // productList.push(p);
                }
              });
        
              // console.log(productList);
            }
        
            // console.log(productList);
            return {
              ...state,
              cart: {
                ...state.cart,
                productList: productList,
                total: productList.reduce((total, product) => {
                  return total + product.price * product.quantity;
                }, 0),
                createdAt: Date.now().toString(),
              },
            };
          }),
          on(CartActions.updateCart, (state, action) => {
            let productList = [...state.cart.productList];
            let product = action.product;
            productList.forEach((p) => {
              if (p.id === product.id) {
                p = {
                  ...p,
                  quantity: product.quantity,
                };
              }
            });
            return {
              ...state,
              cart: {
                ...state.cart,
                productList: productList,
                total: productList.reduce((total, product) => {
                  return total + product.price * product.quantity;
                }, 0),
                createdAt: Date.now().toString(),
              },
            };
          }),
          on(CartActions.removeCart, (state, action) => {
            let productList = [...state.cart.productList];
            productList = productList.filter((product) => {
              return product.id !== action.id;
            });
            return {
              ...state,
              cart: {
                ...state.cart,
                productList: productList,
                total: productList.reduce((total, product) => {
                  return total + product.price * product.quantity;
                }, 0),
                createdAt: Date.now().toString(),
              },
            };
          }),
          on(CartActions.clearCart, (state) => {
            return {
              ...state,
              cart: {
                ...state.cart,
                productList: [],
                total: 0,
                createdAt: Date.now().toString(),
              },
            };
          })
    )
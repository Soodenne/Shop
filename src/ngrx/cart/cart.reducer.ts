import { CartState } from './cart.state';
import * as CartActions from './cart.action';
import { ShopList } from "../../Model/products.model";
import { createReducer, on } from "@ngrx/store";

export const initialState: CartState = {
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
  on(CartActions.addCart, (state: any, action: any) => {
    let productList = [...state.cart.productList];
    let product = action.product;
    let isProductExist = false;
    // Tìm index của sản phẩm trong productList
    productList.forEach((p) => {
      if (p.id === product.id) {
        isProductExist = true;
      }
    });
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, cộng thêm 1 vào quantity
    if (isProductExist) {
      console.log("Sản phẩm đã tồn tại trong giỏ hàng.");
      productList.forEach((p) => {
        if (p['id'] === product['id']) {
          p = {
            ...p,
            quantity: p.quantity + 1,
          };
          for (let i = 0; i < productList.length; i++) {
            if (productList[i]['id'] == p['id']) {
              productList[i] = p;
              console.log("Quantity mới của sản phẩm:", productList[i].quantity);
            }
          }
          // productList.push(p);
        }
      });
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng với quantity là 1
      productList.push({ ...product, quantity: 1 });
      console.log("Sản phẩm chưa tồn tại trong giỏ hàng. Đã thêm mới vào giỏ hàng.");
    }
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
);

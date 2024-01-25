import { Injectable } from '@angular/core';
import {ShopList} from "../../Model/products.model";
import {collection, deleteDoc, doc, Firestore, onSnapshot, setDoc} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import {DocumentData} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartList: ShopList[] = [];
  shopLists : ShopList[] = [];
  //   { id:'1', img:'./assets/Kyrie1.jpg',stock:12, name: 'Kyrie 1', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
  //   { id:'2', img:'./assets/Kyrie1.jpg',stock:12, name: 'Kyrie 3', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
  //   { id:'3', img:'./assets/Kyrie1.jpg',stock:12, name: 'Kyrie 2', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
  //   { id:'4', img:'./assets/Kyrie1.jpg',stock:5, name: 'Kyrie 6', description: 'Lorem ipsum',quantity: 1,price: 105.00 },
  // ];

  async addItem(newItem: ShopList) {
    await setDoc(doc(this.firestore, 'products', newItem.id.toString()),newItem);
  }
  async updateItem(newItem: ShopList) {
    await setDoc(doc(this.firestore, 'products', newItem.id.toString()),newItem);
  }
  async deleteItem(newItem: ShopList){
    await deleteDoc(doc(this.firestore, 'products', newItem.id.toString()));
  }
  getItemById(id: string) {
    const product = this.shopLists.find((e) => e.id === id);
    return product || {};
  }
  async getCartList() {
    onSnapshot(collection(this.firestore, 'cart'), (snapshot) => {
      this.cartList = [];
      snapshot.forEach((doc) => {
        this.cartList.push(doc.data() as ShopList);
        console.log(doc.id, '=>', doc.data());
        console.log(this.cartList);
      });
    });
  }

  itemlistCart: DocumentData[] = [];
  constructor(private firestore: Firestore) {
    onSnapshot(collection(this.firestore, "products"), (collection) => {
      this.shopLists = [];
      collection.forEach((doc)=>{
        this.shopLists.push(doc.data() as any);
      })
    });
  }
  // async addToCart(item: ShopList) {
  //   const docRef = doc(this.firestore, 'Shop', item.id.toString());
  //
  //   try {
  //     await setDoc(docRef, item);
  //
  //     // Call the synchronous addToCart function after successful Firestore update
  //     this.addToLocalCart(item);
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //   }
  // }

  // addToLocalCart(product: ShopList) {
  //   if (product.inStock === 0) {
  //     alert('Out of stock');
  //     return;
  //   }
  //
  //   let index = this.cart.findIndex((e) => e.id === food.id);
  //
  //   if (index === -1) {
  //     food.quantity = 1;
  //     food.inStock--;
  //     this.cart.push(food);
  //   } else {
  //     this.cart[index].quantity++;
  //     food.inStock--;
  //   }
  //
  //   alert('Add ' + food.name + ' to cart');
  // }


}

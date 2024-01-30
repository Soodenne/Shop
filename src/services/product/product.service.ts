import { Injectable } from '@angular/core';
import {ShopList} from "../../Model/products.model";
import {collection, deleteDoc, doc, Firestore, getDoc, onSnapshot, setDoc} from "@angular/fire/firestore";
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

  async addItemToCart(newItem: ShopList) {
    const docRef = doc(this.firestore, 'cart', newItem.id.toString());

    try {
      // Thêm mục vào giỏ hàng
      await setDoc(docRef, newItem);

      // Tìm mục tương ứng trong collection 'products' và giảm số lượng tồn kho
      const productDocRef = doc(this.firestore, 'products', newItem.id.toString());
      const productDocSnapshot = await getDoc(productDocRef);

      if (productDocSnapshot.exists()) {
        const currentStock = productDocSnapshot.data()['stock'] || 0;
        if (currentStock > 0) {
          await setDoc(productDocRef, { ...productDocSnapshot.data(), stock: currentStock - 1 });
          console.log("Đã giảm số lượng tồn kho của sản phẩm thành công!");
        } else {
          console.error("Sản phẩm này đã hết hàng!");
          return;
        }
      } else {
        console.error("Không tìm thấy sản phẩm trong danh sách!");
        return;
      }

      console.log("Đã thêm sản phẩm vào giỏ hàng thành công!");
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
  }


  async addItem(newItem: ShopList) {
    await setDoc(doc(this.firestore, 'products', newItem.id.toString()),newItem);
  }
  async updateItem(newItem: ShopList) {
    await setDoc(doc(this.firestore, 'products', newItem.id.toString()),newItem);
  }
  async deleteItem(newItem: ShopList){
    await deleteDoc(doc(this.firestore, 'products', newItem.id.toString()));
    await deleteDoc(doc(this.firestore, 'cart', newItem.id.toString()));
  }
  totalBill(){
    let total = 0
    for(let i = 0; i<this.cartList.length;i++){
      total += this.cartList[i].price * this.cartList[i].quantity
    }
    return total
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
        // console.log(doc.id, '=>', doc.data());
        // console.log(this.cartList);
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
      console.log(this.shopLists);
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

  // reloadStock(product: ShopList) {
  //   if (product.stock === 0) {
  //     alert('Out of stock');
  //     return;
  //   }
  //
  //   let index = this.shopLists.findIndex((e) => e.id === food.id);
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

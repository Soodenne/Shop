import {createAction, createFeature, props} from "@ngrx/store";

export const addCart = createAction('Add product to cart', props<{ product: any }>());

export const updateCart = createAction('Update cart', props<{ product: any }>());

export const removeCart = createAction('Remove product from cart', props<{ id: string }>());

export const clearCart = createAction('Clear cart');

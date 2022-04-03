import { CartActionTypes } from "./cart.types"

export const toggleCart = () => ({
    type : CartActionTypes.TOGGLE_CART,
});

export const addItemToCart = (cartItem) => ({
    type : CartActionTypes.ADD_ITEM,
    payload : cartItem
})

export const removeItemFromCart = (cartItem) => ({
    type : CartActionTypes.CLEAR_ITEM,
    payload : cartItem
})
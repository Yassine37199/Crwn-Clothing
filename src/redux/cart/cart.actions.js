import { CartActionTypes } from "./cart.types"

export const toggleCart = () => ({
    type : CartActionTypes.TOGGLE_CART,
});

export const addItem = (cartItem) => ({
    type : CartActionTypes.ADD_ITEM,
    payload : cartItem
})
import { ShopActionTypes } from "./shop.types"

export const addCollections = (collections) => ({
    type : ShopActionTypes.ADD_COLLECTION,
    payload : collections
})
import { createSelector } from "reselect";


const selectShop = state => state.shop;


export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)


export const selectShopCollection = (collectionNameParams) => createSelector(
    [selectShopCollections],
    (collections) => collections.find(collection => collection.title.toLowerCase() === collectionNameParams)
)
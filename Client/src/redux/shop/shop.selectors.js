import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectShopFetchingState = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    (collections) => collections ? Object.keys(collections).map(key => collections[key]) : []
)


export const selectShopCollectionByTitle = (collectionNameParams) => createSelector(
    [selectShopCollections],
    (collections) => collections ? collections[collectionNameParams] : null
)

export const selectCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.collections
)
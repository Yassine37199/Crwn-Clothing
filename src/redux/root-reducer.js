import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import  userReducer  from "./user/user-reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { DirectoryReducer } from "./directory/directory.reducer";
import { shopReducer } from "./shop/shop.reducer";


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}


const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : DirectoryReducer,
    shop : shopReducer
}) 


export default persistReducer(persistConfig , rootReducer);
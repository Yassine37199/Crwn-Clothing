import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import  userReducer  from "./user/user-reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import { DirectoryReducer } from "./directory/directory.reducer";


const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']
}


const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : DirectoryReducer
}) 


export default persistReducer(persistConfig , rootReducer);
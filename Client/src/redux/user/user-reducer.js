import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser : null,
    isLoading : false,
    errorMessage : ''
}



const userReducer = (state = INITIAL_STATE , action) => {

    switch (action.type) {
       case UserActionTypes.FETCH_USER_START : return {
           ...state,
           isLoading : true
       }

       case UserActionTypes.FETCH_USER_SUCCESS : return {
           currentUser : action.payload,
           isLoading : false
       }

       case UserActionTypes.FETCH_USER_FAILURE : return {
            isLoading : false,
            errorMessage : action.payload
       }
       
        default : return state;
    }
}

export default userReducer;
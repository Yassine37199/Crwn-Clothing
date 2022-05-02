import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { UserActionTypes } from "./user.types";


export const fetchUserStart = () => ({
    type : UserActionTypes.FETCH_USER_START
})

export const fetchUserSuccess = (user) => ({
    type : UserActionTypes.FETCH_USER_SUCCESS,
    payload : user
})

export const fetchUserFailure = (error) => ({
    type : UserActionTypes.FETCH_USER_FAILURE,
    payload : error
})

export const fetchUserStartAsync = () => {
    return dispatch => {

        dispatch(fetchUserStart)
        auth.onAuthStateChanged(async userAuth => {

            if(userAuth) {
      
              const userRef = await createUserProfileDocument(userAuth);
    
              userRef.onSnapshot(snapshot => {
                 dispatch(fetchUserSuccess({
                      id : snapshot.id,
                      ...snapshot.data()
                  })
                )
              })
            }
             fetchUserSuccess(userAuth)
          });
    }
}
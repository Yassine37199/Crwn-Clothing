import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { ShopActionTypes } from "./shop.types"

export const fetchCollectionStart = () => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionsMap

});

export const fetchCollectionsError = () => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_FAILURE
})


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart)

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
            this.setState({
                isLoading : false
            })
        }).catch(err => dispatch(fetchCollectionsError(err)))
    }
}


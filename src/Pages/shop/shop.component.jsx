import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { addCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    state = {
        isLoading : true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {addCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            await addCollections(collectionsMap);
            this.setState({
                isLoading : false
            })
        })
    }

    render() {

        const {isLoading} = this.state
    
        return(
            <Switch>
                <Route exact path="/shop" render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} /> } />
                <Route path="/shop/:categoryName" render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
            </Switch>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    addCollections : collections => dispatch(addCollections(collections))
})

export default connect(null , mapDispatchToProps)(withRouter(ShopPage));
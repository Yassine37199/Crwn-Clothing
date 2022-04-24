import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionsLoaded, selectShopFetchingState } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        this.props.fetchCollectionStartAsync()
    }
       

    render() {
        const {isCollectionLoaded} = this.props;

        return(
            <Switch>
                <Route exact path="/shop" render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} /> } />
                <Route path="/shop/:categoryName" render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </Switch>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded : selectCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
   fetchCollectionStartAsync : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(ShopPage));
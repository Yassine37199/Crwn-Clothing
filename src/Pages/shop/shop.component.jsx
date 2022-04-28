import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverviewContainer from '../../Components/collection-overview/collection-overview.container';
import WithSpinner from '../../Components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';
import CollectionContainer from '../collection/collection.container';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        this.props.fetchCollectionStartAsync()
    }
       

    render() {

        return(
            <Switch>
                <Route exact path="/shop" component={CollectionOverviewContainer} />
                <Route path="/shop/:categoryName" component={CollectionContainer} />
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
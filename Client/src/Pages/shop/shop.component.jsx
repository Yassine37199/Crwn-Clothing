import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionOverviewContainer from '../../Components/collection-overview/collection-overview.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionContainer from '../collection/collection.container';


const ShopPage = ({fetchCollectionStartAsync}) => {

   useEffect(() => fetchCollectionStartAsync() , [fetchCollectionStartAsync])

        return(
            <Switch>
                <Route exact path="/shop" component={CollectionOverviewContainer} />
                <Route path="/shop/:categoryName" component={CollectionContainer} />
            </Switch>
        )
    
}

const mapStateToProps = createStructuredSelector({
    isCollectionLoaded : selectCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
   fetchCollectionStartAsync : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(ShopPage));
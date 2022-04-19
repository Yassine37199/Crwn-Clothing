import React from 'react';
import { Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = () => {
    
        return(
            <Switch>
                <Route exact path="/shop" component={CollectionOverview} />
                <Route path="/shop/:categoryName" component={CollectionPage} />
            </Switch>
        )
}

export default withRouter(ShopPage);
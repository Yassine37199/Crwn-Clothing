import { Route , Switch} from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/header/header.component';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInUp from './Pages/sign-in-up/sign-in-up.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchUserStartAsync} from './redux/user/user.actions'

import { Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './Pages/checkout/checkout.component';
import { selectCollectionForPreview } from './redux/shop/shop.selectors';


const App = ({fetchUserStartAsync , currentUser , history}) => {

  useEffect(() => fetchUserStartAsync() , [fetchUserStartAsync])
  const url = history.location.pathname;
  return(
      <div className="App">
        {   
            !(url.includes('/identity')) ?
            <Header />
            : null
        }
        <Switch>
            <Route exact path='/' component={Homepage} /> 
            <Route path='/shop' component={ShopPage} />
            <Route path='/identity' render={() => currentUser ? (<Redirect to="/" />) : (<SignInUp />)} />
            <Route path='/checkout' component={CheckoutPage} />
          </Switch>
      </div>
    )
  
}

const mapDispatchToProps = dispatch => ({
  fetchUserStartAsync : () => dispatch(fetchUserStartAsync())
}) 


const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state),
  collectionItems : selectCollectionForPreview(state)
})


export default withRouter(connect(mapStateToProps , mapDispatchToProps)(App));


import { Route , Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Components/header/header.component';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInUp from './Pages/sign-in-up/sign-in-up.component';

import {auth, createUserProfileDocument, firestore} from './firebase/firebase.utils'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

import { Redirect } from 'react-router-dom';
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {


  UnsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.UnsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
           setCurrentUser({
                id : snapshot.id,
                ...snapshot.data()
            })
        })
      }

      else setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }


  render(){

    const url = this.props.history.location.pathname;
    const {currentUser} = this.props;

    return (
      <div className="App">
        {   
            !(url.includes('/identity')) ?
            <Header />
            : null
        }
        <Switch>
            <Route exact path='/' component={Homepage} /> 
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/identity' render={() => currentUser ? (<Redirect to="/" />) : (<SignInUp />)} /> 
          </Switch>
      </div>
    );

  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
}) 


const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state)
})


export default withRouter(connect(mapStateToProps , mapDispatchToProps)(App));


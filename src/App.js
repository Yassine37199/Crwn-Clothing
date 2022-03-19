import { Route , Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Components/header/header.component';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInUp from './Pages/sign-in-up/sign-in-up.component';

import {auth, createUserProfileDocument, firestore} from './firebase/firebase.utils'
import { withRouter } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    }
  }


  UnsubscribeFromAuth = null;

  componentDidMount() {
    this.UnsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        console.log(userRef)

        userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser : {
                id : snapshot.id,
                ...snapshot.data()
              }
            })
        })
      }

      else this.setState({
        currentUser : userAuth
      })
    })
  }

  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }


  render(){

    const url = this.props.history.location.pathname;

    return (
      <div className="App">
        {   
            !(url.includes('/identity')) ?
            <Header currentUser={this.state.currentUser}/>
            : null
        }
        <Switch>
            <Route exact path='/' component={Homepage} /> 
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/identity' component={SignInUp} /> 
          </Switch>
      </div>
    );

  }
  
}

export default withRouter(App);

import { Route , Switch} from 'react-router-dom';
import './App.css';
import React from 'react';
import Header from './Components/header/header.component';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInUp from './Pages/sign-in-up/sign-in-up.component';

import {auth} from './firebase/firebase.utils'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    }
  }


  UnsubscribeFromAuth = null;

  componentDidMount() {
    this.UnsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser : user
      }, () => console.log(this.state.currentUser))
    })
  }

  componentWillUnmount() {
    this.UnsubscribeFromAuth();
  }


  render(){

    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path='/' component={Homepage} /> 
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/identity' component={SignInUp} /> 
          </Switch>
      </div>
    );

  }
  
}

export default App;

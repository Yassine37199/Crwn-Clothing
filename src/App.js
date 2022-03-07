import { Route , Switch} from 'react-router-dom';
import './App.css';
import Header from './Components/header/header.component';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInOut from './Pages/sign-in-out/sign-in-out.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} /> 
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/identity/login' component={SignInOut} /> 
        </Switch>
    </div>
  );
}

export default App;

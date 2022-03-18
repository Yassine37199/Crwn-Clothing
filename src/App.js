import { Route , Switch} from 'react-router-dom';
import './App.css';
import Header from './Components/header/header.component';
import Homepage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInUp from './Pages/sign-in-up/sign-in-up.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route exact path='/' component={Homepage} /> 
          <Route exact path='/shop' component={ShopPage} />
          <Route path='/identity' component={SignInUp} /> 
        </Switch>
    </div>
  );
}

export default App;

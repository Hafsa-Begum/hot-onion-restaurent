import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Features from './pages/Home/Features/Features';
import Home from './pages/Home/Home/Home';
import Details from './pages/Home/Menu/Details/Details';
import Menu from './pages/Home/Menu/Menu/Menu';
import Login from './pages/Login/Login/Login';
import Header from './pages/Shared/Header/Header';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Cart from './pages/Cart/Cart';

export const FoodContext = createContext();
export const CartContext = createContext()

function App() {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([])


  useEffect(() => {
    fetch("./test.json")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className='App'>
      <CartContext.Provider value={[cart, setCart]}>
        <AuthProvider>
          <FoodContext.Provider value={categories}>
            <Router>
              <Header></Header>
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/home'>
                  <Home></Home>
                </Route>
                <Route path='/menu'>
                  <Menu></Menu>
                </Route>
                <Route path='/cart'>
                  <Cart></Cart>
                </Route>
                <Route path='/category/:foodId'>
                  <Details></Details>
                </Route>
                <Route path='/login'>
                  <Login></Login>
                </Route>
              </Switch>
            </Router>
          </FoodContext.Provider>
        </AuthProvider>
      </CartContext.Provider>
    </div >

  );
}

export default App;

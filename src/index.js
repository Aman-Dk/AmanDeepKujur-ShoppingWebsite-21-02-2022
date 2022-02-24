import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter,Routes,Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import {Provider} from 'react-redux'
import store from './Store'
import Cart from './components/Cart';
import Contact from './components/Contact';

store.subscribe(()=> console.log(store.getState()))


ReactDOM.render(
    <BrowserRouter>
    
      <Provider store={store}>

        <Routes>
          <Route>
            <Route path='/' element={ <App/>} />
            <Route path='/contact' element={ <Contact/>} />
            <Route path='/cart' element={ <Cart/>} />
            </Route>
        </Routes>
      
      </Provider>

    </BrowserRouter>
  ,
  document.getElementById('root')
);


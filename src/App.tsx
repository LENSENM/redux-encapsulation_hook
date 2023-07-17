import React from 'react';

import { BrowserRouter,Route,Routes } from "react-router-dom";

// 引入 Provider 和 store
import { Provider } from 'react-redux';
import store from './store';


import ViewIndex from "./view"

function App() {
  return (
  <Provider store={store}>
      <BrowserRouter>
        <Routes> 
             <Route path='/view' element={<ViewIndex/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import {Provider} from 'react-redux'
import '../src/App.css'
import App from './containers/App'
import store from './reducers/store'



ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>
    
  ,
  document.getElementById('root')
);



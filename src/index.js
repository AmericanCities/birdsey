import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import axios from 'axios';
import {Provider} from 'react-redux';
// import {store, sagaMiddleware} from './store/index';
import {store} from './store/index';
import 'bootstrap/dist/css/bootstrap.min.css';

// import rootSaga from './store/sagas';

// TODO: set firebase url here
// axios.defaults.baseURL = 'https://birdcall-59533-default-rtdb.firebaseio.com/;

//can I use useDispatch and useSelector with sagas? 

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App/></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

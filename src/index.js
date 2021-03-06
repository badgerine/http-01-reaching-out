import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Autgorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // the purpose of this interceptor: edit the request before returning it.
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// globalRequestInterceptor();

const globalResponseInterceptor = axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// globalResponseInterceptor();

// axios.interceptors.request.eject(globalRequestInterceptor);
// axios.interceptors.response.eject(globalResponseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

import React from 'react';
import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../store';
import Routes from '../Routes';

// we will probably need to notify in very many places , so it makes sense to have it available to us globaly
window.Notify = toast;

export default function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <ToastContainer />
        <Routes />
      </React.Fragment>
    </Provider>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from "./context/firebase"


ReactDOM.render(
    
  <FirebaseContext.Provider value={{alufirebase, FieldValue}}>
    <App />
  </FirebaseContext.Provider>,
    document.getElementById('root')
);


import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase'
import { firebase, FieldValue} from './lib/firebase'
createRoot(
    <FirebaseContext.Provider value={{firebase, FieldValue}}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
    );

// client side rendered app: react(cra)
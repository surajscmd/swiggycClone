import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { persistStore } from 'redux-persist'
import { appstore } from './redux/Appstore.jsx'

const persistor = persistStore(appstore);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {appstore} >
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>     
    </Provider>
  </React.StrictMode>,
)

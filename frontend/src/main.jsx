import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)

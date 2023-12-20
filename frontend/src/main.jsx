import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App/App'
import { BrowserRouter as Router } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="145363362513-dgat3i042lejnjader979slpq4o5gt28.apps.googleusercontent.com">
      <Router>
        <App />
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

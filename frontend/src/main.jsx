import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//import react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import my css
import './style.css'

// import react router dom
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)

import React from 'react'
import{BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import App from './App'
import { store } from "./App/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 <BrowserRouter>
 		<App />
 </BrowserRouter>
    </Provider>

	
)
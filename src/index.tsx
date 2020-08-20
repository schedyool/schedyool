import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { ReCAPTCHA } from "react-google-recaptcha";

// const onChange = (value: any): void => {
//   console.log("Captcha value:", value)
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <ReCAPTCHA
      sitekey="6LctKMEZAAAAAN4NYXg27JMINCdmFm-knz9Ea4-p"
      onChange={onChange}
    /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

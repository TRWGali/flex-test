import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Flex from "@twilio/flex-ui";

// function renderApp(manager) {

//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA



const mountNode = document.getElementById("root") as string | Element | undefined;

window.onload = () => {
  const predefinedConfig = (window as any).appConfig || {};

  const configuration = {
    ...predefinedConfig,
  };

  Flex
    .progress(mountNode)
    .provideLoginInfo(configuration, mountNode)
    .then(() => Flex.Manager.create(configuration))
    .then(manager => renderApp(manager))
    .catch(error => handleError(error));
};

function renderApp(manager: Flex.Manager | any) {
  ReactDOM.render(
    <App manager={manager} /> as any,
    mountNode as any
  );
}

function handleError(error: string | Error) {
  Flex.errorPage(error, mountNode as any);
  console.error("Failed to initialize Flex", error);
}

serviceWorker.register();
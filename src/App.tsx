import React from 'react';
import './App.css';
import * as Flex from '@twilio/flex-ui';

interface IProps {
  manager: Flex.Manager
}

function App(props: IProps) {
  return (
    <div className="App">
      <header className="App-header">
        <Flex.ContextProvider manager={props.manager}>
          <Flex.RootContainer />
        </Flex.ContextProvider>

      </header>
    </div>
  );
}

export default App;

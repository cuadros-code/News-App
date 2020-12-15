import React from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';

function App() {
  return (
    <div className="content-app">
      <Header
        title="App News"
      />
      <div
        className="container
       white">
          <Form />
      </div>
    </div>
  );
}

export default App;

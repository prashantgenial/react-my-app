import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Parameter from './container/Parameter'
import store  from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      PrashantTestApp
      </header>
       <PostForm />
      <hr />
      <Posts /> 
      {/* <Parameter /> */}
    </div>
    </Provider>
  );
}

export default App;

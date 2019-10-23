import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
//import Parameter from './container/Parameter'
import store  from './store/store'
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: '50%',
    border:'1px solid red'
  },
});

function App(props) {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      PrashantTestApp
      </header>
      <Icon className="fa fa-plus-circle" color="primary" /> <span className={props.classes.root}>Hello</span>
       <PostForm />
      <hr />
      <Posts /> 
      {/* <Parameter /> */}
    </div>
    </Provider>
  );
}

export default withStyles(styles)(App);

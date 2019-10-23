import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
//import Parameter from './container/Parameter'
import store  from './store/store'
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    width: '50%',
    border:'1px solid red'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
});

function App(props) {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      PrashantTestApp
      </header>
      <Icon className="fa fa-plus-circle" color="primary" /> <span className={props.classes.root}>Hello</span><br />
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={props.classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <PostForm />
      <hr />
      <Posts /> 
      {/* <Parameter /> */}
    </div>
    </Provider>
  );
}

export default withStyles(styles)(App);

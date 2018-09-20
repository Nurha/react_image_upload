import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import HomeScreen from './views/home_screen';

const muiTheme = getMuiTheme({
	palette: {
		textColor: '#343434',
		secondaryTextColor: '#fafafa',
	  	canvasColor: '#fff',
	  	primary1Color: '#2E95C6',
	}
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <Route exact path='/' component={HomeScreen} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Webpages from './webpages';

class App extends React.Component {
  render() {
    return(
      <div>
        <Webpages />
      </div>
    );
  }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

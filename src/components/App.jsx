import React from 'react';

class App extends React.Component {  // inherit from React.component
  constructor(props){        // no 'function' keyword required
    super(props);            // call super constructor
    this.state = {      // change in 'state' of each component causes the components to rerender again
      messages: [
        'Hi, how are you ?',
        'I am fine, and you ?'
      ]
    };
  }

  render(){
    // an array of message div elements
    var messageNodes = this.state.messages.map((message) => {
      return (
        <div>{message}</div>
      );
    });

    // render should return only one element - IMPORTANT
    return (
      <div>{messageNodes}</div>
    );
  }
}

export default App;

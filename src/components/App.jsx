import React from 'react';

<<<<<<< HEAD
class App extends React.Component {  // inherit from React.component
  constructor(props){        // no 'function' keyword required
    super(props);            // call super constructor
=======
class App extends React.component {  // inherit from React.component
  constructor(){        // no 'function' keyword required
    super();            // call super constructor
>>>>>>> b21d8e7e4c5286bcd519abae226602516629d828
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

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> b21d8e7e4c5286bcd519abae226602516629d828

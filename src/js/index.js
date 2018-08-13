import React from "react";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className="container">
          <h1>Hello {this.props.name}</h1>
        </div>
      </div>
    );
  }
}

export default App;

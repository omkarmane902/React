import React, { Component } from "react";
class MyComponent  extends React.Component {
      constructor() {
    super();
    this.state = { count: 0 };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }
increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
render(){
return(
    <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increase}>+</button>
    </div>
 )
}
    
}
export default MyComponent;
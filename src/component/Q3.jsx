import React, { Component } from 'react';

class Q3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Vishal",
      age: 19,
      mobileNumber: "1234567890",
      email: "vishalchavda7781@gmail.com",
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.setState({
          name: "Azim",
          age: 21,
          mobileNumber: "1234567890",
          email: "bagsariya@gmail.com",
        });
      }, 5000);
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <p>Age: {this.state.age}</p>
        <p>Mobile Number: {this.state.mobileNumber}</p>
        <p>Email: {this.state.email}</p>
      </div>
    );
  }
}

export default Q3;

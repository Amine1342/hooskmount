import React, { Component } from "react";

class ClassCount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  render() {
    return (
      <div>
        <h1 className="text-success">Nombre de modifications</h1>
      </div>
    );
  }
}

export default ClassCount;

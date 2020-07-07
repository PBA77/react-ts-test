import React, { Component } from "react";

type CounterState = {
  msg: string;
};

interface IProps {}

export class Counter extends Component<{}, CounterState> {
  boom() {
    this.setState({ msg: "BUM!" });
    setTimeout(() => {
      this.setState({ msg: "" });
    }, 2000);
  }

  constructor(props: IProps) {
    super(props);

    this.state = {
      msg: "",
    };
    this.boom = this.boom.bind(this);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.boom} className="btn btn-danger">
          Detonuj!
        </button>
        <div className="alert alert-danger" role="alert">
          <h3>{this.state.msg}</h3>
        </div>
      </div>
    );
  }
}

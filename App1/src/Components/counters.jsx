import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log('Counters rendered....');
    const { onReset, counters, onDelete, onClicked } = this.props; //object destructering
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onClicked}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

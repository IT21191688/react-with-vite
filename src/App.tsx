//import { useState } from "react";
import "./App.css";

//<></> short hand property
/*
/*

class Counter extends React.Component<{},{count:number}>{    constructor(props:{}) {        super(props);        this.state={            count:0        }    }    increment=()=>{        this.setState((lastState)=>({            count:lastState.count+1        }))    }    decrement=()=>{        this.setState((lastState)=>({            count:lastState.count-1        }))    }    render() {        return(            <>                <p>Count: {this.state.count}</p>                <button onClick={this.increment}>Increment</button> |                <button onClick={this.decrement}>Decrement</button>            </>            )    }}

*/
/*
function App() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <>
      <p>Count: {value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;

*/

import Customer from "./components/customer";

function App() {
  return (
    <>
      <Customer />
    </>
  );
}

export default App;

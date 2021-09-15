import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const selector = useSelector((store) => {
    return {
      a: store.rA.a,
      b: store.rB.b,
    };
  });

  /*   const dispatch = useDispatch({
    submitA: (b) => {
      dispatch({ type: "SUBMIT_A", b: b });
    },
  }); */

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="col">
        <div>
          <span>A:</span>
          <span>{selector.a}</span>
          <button
            onClick={() => dispatch({ type: "SUBMIT_A", b: `${selector.b}` })}
          >
            Update A
          </button>
        </div>
      </div>
      <div className="col">
        <div>
          <span>B:</span>
          <span>{selector.b}</span>
          <button
            onClick={() => dispatch({ type: "SUBMIT_B", a: `${selector.a}` })}
          >
            Update B
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

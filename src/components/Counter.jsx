import React, { useState } from 'react';

const Counter = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter - 1);
  };
  const incrementBy = () => {
    setcounter(counter + 5);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 text-center">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="h1">Count {counter}</p>
                <button
                  onClick={increment}
                  type="button"
                  className="btn btn-primary me-3"
                >
                  Increment
                </button>
                <button
                  onClick={decrement}
                  type="button"
                  className="btn btn-warning me-3"
                >
                  Decrement
                </button>
                <button
                  onClick={incrementBy}
                  type="button"
                  className="btn btn-success"
                >
                  Increment By 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;

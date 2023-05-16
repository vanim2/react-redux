import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementBy,
} from '../redux/feature/counter.feature';

const CounterRedux = () => {
  //get state from store
  const counterState = useSelector((state) => {
    return state.counter.count;
  });
  // console.log(counterState);

  //get data from redux store
  const dispatch = useDispatch();
  const counterIncrement = () => {
    dispatch(increment());
  };
  const counterDecrement = () => {
    dispatch(decrement());
  };
  const counterIncrementby = () => {
    dispatch(incrementBy(5));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 text-center">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="h1">counter:{counterState}</p>
                <button
                  onClick={counterIncrement}
                  type="button"
                  className="btn btn-primary me-3"
                >
                  Increment
                </button>
                <button
                  onClick={counterDecrement}
                  type="button"
                  className="btn btn-warning me-3"
                >
                  Decrement
                </button>
                <button
                  onClick={counterIncrementby}
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

export default CounterRedux;

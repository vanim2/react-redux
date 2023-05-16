import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 text-center">
          <div className="col">
            <img
              src="https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg"
              alt="logo"
              className="img-fluid"
            />
            <p className="display-3">
              Crash Course <span className="fw-bold">2022</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

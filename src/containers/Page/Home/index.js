import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="header bg-primary pb-6"
        style={{
          backgroundImage: `url(https://ketnoiviec.net/static/media/slide-02.477a33b0.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-6 text-center">
              <div className="container ">
                <div class="row justify-content-center">
                  <div class="col-xl-6 col-lg-6 col-md-8 px-5">
                    <h1 class="text-white">Kết Nối Việc!</h1>
                    <p class="text-lead text-white">
                      Việc làm siêu tốc - Đúng người, đúng việc, đúng giá trị
                    </p>
                  </div>
                </div>
                <div className="input-group md-form form-sm form-2 pl-0 m-0 ">
                  <input
                    className="form-control my-0 py-1 red-border"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text red lighten-3"
                      id="basic-text1"
                    >
                      <i
                        className="fas fa-search text-grey"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-6">
        <div className="row">
          <div className="col-xl-8">
            <div className="card bg-default">
              <div className="card-header bg-transparent">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-light text-uppercase ls-1 mb-1">
                      Overview
                    </h6>
                    <h5 className="h3 text-white mb-0">Sales value</h5>
                  </div>
                  <div className="col">
                    <ul className="nav nav-pills justify-content-end">
                      <li
                        className="nav-item mr-2 mr-md-0"
                        data-toggle="chart"
                        data-target="#chart-sales-dark"
                        data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}'
                        data-prefix="$"
                        data-suffix="k"
                      >
                        <a
                          href="#"
                          className="nav-link py-2 px-3 active"
                          data-toggle="tab"
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        data-toggle="chart"
                        data-target="#chart-sales-dark"
                        data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}'
                        data-prefix="$"
                        data-suffix="k"
                      >
                        <a
                          href="#"
                          className="nav-link py-2 px-3"
                          data-toggle="tab"
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart">
                  <canvas
                    id="chart-sales-dark"
                    className="chart-canvas"
                  ></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header bg-transparent">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h5 className="h3 mb-0">Total orders</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart">
                  <canvas id="chart-bars" className="chart-canvas"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  );
};

export default Home;

import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="footer pt-0">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="copyright text-center  text-lg-left  text-muted">
                &copy; 2020{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="font-weight-bold ml-1"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="http://blog.creative-tim.com"
                    className="nav-link"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                    className="nav-link"
                    target="_blank"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default Footer

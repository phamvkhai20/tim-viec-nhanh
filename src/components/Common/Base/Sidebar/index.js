import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    return    <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="javascript:void(0)">
                        <img src="assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                    </a>
                </div>
                <div className="navbar-inner">
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                        <li  activeClassName="" className="nav-item">
                                <NavLink className="nav-link " to="/" activeClassName="nav-link active" >
                                    <i className="ni ni-tv-2 text-primary"></i>
                                    <span className="nav-link-text">Trang chủ</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link " to="/gg" activeClassName="nav-link active" href="examples/icons.html">
                                    <i className="ni ni-planet text-orange"></i>
                                    <span className="nav-link-text">Tìm kiếm việc làm</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="examples/map.html">
                                    <i className="ni ni-pin-3 text-primary"></i>
                                    <span className="nav-link-text">Công ty</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="examples/profile.html">
                                    <i className="ni ni-single-02 text-yellow"></i>
                                    <span className="nav-link-text">Kiến thức</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="examples/tables.html">
                                    <i className="ni ni-bullet-list-67 text-default"></i>
                                    <span className="nav-link-text">Tin Tức</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="examples/tables.html">
                                    <i className="ni ni-bullet-list-67 text-default"></i>
                                    <span className="nav-link-text">Đăng tin</span>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    </div>
                </div>
            </nav>
}

export default Sidebar

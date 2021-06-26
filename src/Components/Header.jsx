import React from 'react'
import style from "./App.css"
import CSS from "./App.css";
import { Link } from "react-router-dom";
import { homeTitle } from "../Views/Home";


function Header(props) {
    return (
        <div>

            <nav className="navbar navbar-dark bg-dark ">
                <homeTitle.Consumer>
                    {value => <a className="navbar-brand mx-3">
                        {value}{props.title}
                    </a>}
                </homeTitle.Consumer>



                <ul className="navbar-nav nav-ulist ">
                    <li className="nav-item nav-list">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item nav-list">
                        <Link className="nav-link active" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item nav-list">
                        <Link className="nav-link active" to="/users">Users</Link>
                    </li>
                </ul>
                {props.searchBar ? <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>

                </form> : "no"}

            </nav>

        </div>
    )
}

export default Header


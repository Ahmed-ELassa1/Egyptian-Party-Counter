




import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <link className="navbar-brand" to="/">Navbar</link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <link className="nav-link"  to="Home">Home</link>
                <link className="nav-link"  to="About">About</link>
                <link className="nav-link"  to="Blog">Blog</link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const newstyle={
       color : "#1b5e2d",
       fontSize: 30
  }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
        <a className="navbar-brand" style={newstyle} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              {/* <Link className="nav-link active" to="/">Home <span className="sr-only"></span></Link> */}
              <a className="nav-link active" href="#">Home <span className="sr-only"></span></a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutUs}</Link>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" for="flexSwitchCheckDefault" >{props.text}</label>
          </div>
        </div>
        </div>
      </nav>
    )
}
Navbar.propTypes={title:PropTypes.string,
                  aboutUs:PropTypes.string
                }
Navbar.defaultProps={title : 'Set Title Here',
                     aboutUs : 'About Text Here'
                    }
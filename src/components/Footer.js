import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="row">
              <div className="col-md-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/dental-students">
                        Dental Students
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/primary-schools">
                        Primary Schools
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/parents-and-caregivers">
                        Parents and Caregivers
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-md-4 social">
                <a title="facebook" href="https://www.facebook.com/mpdssoc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-square"></i></a>
                <a title="twitter" href="https://twitter.com/mpdssoc" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a title="instagram" href="https://instagram.com/mpdssoc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer

import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Admin Panel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/landloard">LandLord</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/repair">Repair</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/tenant">Tenant</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/property">Property</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
};

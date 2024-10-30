import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/NavBar.css'; 
import connect from '../assets/connect.svg';
import community from '../assets/community.svg';
import notes from '../assets/notes.svg';
import bell from '../assets/bell.svg';
import settings from '../assets/settings.svg';
import admin from '../assets/admin.svg';
import profile from '../assets/profile.svg'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: '60px' }} />
        </Link>
        
        <div className="navbar-items">
          {/* Non-clickable icons and text */}
          <div className="non">
            <span className="navbar-text" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={connect} alt="Connect Icon" style={{ width: '20px', height: '20px' }} />
                Connect
            </span>

            <span className="navbar-text" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={community} alt="Community Icon" style={{ width: '20px', height: '20px' }} />
                Communities
            </span>

            <span className="navbar-text" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={notes} alt="Notes Icon" style={{ width: '20px', height: '20px' }} />
                Notes
            </span>

                      {/* Search bar */}
          <input type="text" className="form-control navbar-search" style={{ display: 'flex', alignItems: 'center', gap: '5px' }} placeholder="Search " />
        </div>

          

          
          {/* Notification and Settings icons */}
          <div className="bell" >
          <img src={bell} alt="Community Icon" style={{ width: '20px', height: '20px' }} />
          </div>

          <div className="settings" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={settings} alt="Community Icon" style={{ width: '20px', height: '20px' }} />
          </div>
          
          {/* Clickable items */}
          <Link to="/profile" className="btn btn-danger btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={profile} alt="Community Icon" style={{ width: '20px', height: '20px' }} />
          My Profile</Link>

          <Link to="/admin" className="btn btn-success btn-sm"style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <img src={admin} alt="Community Icon" style={{ width: '20px', height: '20px' }} />
         Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

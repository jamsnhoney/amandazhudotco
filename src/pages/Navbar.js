import React from 'react';
import '../pretty/Navbar.css';

import bookmark from '../assets/bookmark.png';

function Navbar() {
  return (
    <div className="navbar">
        <img src={bookmark} alt="bookmark" className="bookmark-logo" />
    </div>
  );
}

export default Navbar;
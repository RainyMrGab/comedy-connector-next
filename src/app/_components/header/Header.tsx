import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import imgLogo from '@assets/logo.png';

import './header-styles.css';

/**
 * Navigation header component
 * @constructor
 */
const NavHeader: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="nav-container container-fluid mx-0 w-100 px-3">
          <Link href="/" className='navbar-brand'>
            <Image src={imgLogo} alt="Comedy Connector Logo" className="logo" />
            <div>Comedy Connector</div>
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/openers/" className="nav-link">
                Book an Opener
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/teams/" className="nav-link">
                Join a Team
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://pittsburgh.improvcoaches.com/" className="nav-link">
                Find a Coach
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://www.theimprovnetwork.org/festival-list/" className="nav-link">
                Submit to a Festival
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;

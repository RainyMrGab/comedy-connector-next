"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

import imgLogo from "@assets/logo.png";
import "./header-styles.css";

/**
 * Navigation header component
 * @constructor
 */
const NavHeader: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className={`header ${expanded ? 'expanded' : ''}`}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className="nav"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container fluid className="nav-container mx-0 w-100 px-3">
          <Link href="/" passHref>
            <Navbar.Brand className="navbar-brand">
              <Image
                src={imgLogo}
                alt="Comedy Connector Logo"
                className="logo"
              />
              <span>Comedy Connector</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="header-nav" />
          <Navbar.Collapse id="header-nav">
            <Nav className="ms-auto menu">
              <Nav.Item>
                <Nav.Link href="/openers">Book an Opener</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/teams">Join a Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://pittsburgh.improvcoaches.com/"
                  target="_blank"
                >
                  Find a Coach
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="https://www.theimprovnetwork.org/festival-list/"
                  target="_blank"
                >
                  Submit to a Festival
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavHeader;

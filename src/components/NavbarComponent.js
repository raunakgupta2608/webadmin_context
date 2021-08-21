import React, { useContext, useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { Context } from '../Store';
import Logout from './Logout';

const NavbarComponent = () => {

  const [token, setToken] =  useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // Modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <Navbar className="navbar-brand" style={{margin: "0 0 0 25px"}}>
          Website Administrator
        </Navbar>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              (token.token ==="none") ? 
              <>
                <NavItem>
                  <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink to="/signup" className="nav-link" activeClassName="active">Sign Up</NavLink>
                </NavItem>
              </>  
              : 
              <>
                <NavItem>
                  <NavLink to="" className="nav-link" 
                    activeClassName="active"
                    onClick={() => toggleModal()}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
      {
        modal ? <Logout modal={modal} handleModal={toggleModal} /> : ""
      }
    </>
  );
}

export default NavbarComponent;
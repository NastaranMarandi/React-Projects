import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  Image
} from 'semantic-ui-react';

import logo from '../images/uberEatsLogo.svg';

export default class Header extends Component {
  render() {
    return(
      <Menu style={{height:'8rem'}} size='massive' secondary>
      <Menu.Item style={{paddingLeft:'9rem'}}>
      <Image src={logo} />
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item style={{paddingRight:'9rem',paddingTop:'2rem'}}>
        <NavLink className='headerMenuContent' to='/'>Sign In</NavLink>
        </Menu.Item>
        
      </Menu.Menu>
      </Menu>
    );
  }
}


import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return <Menu as={Link} to="/" secondary pointing>
    <Image src={logo} width={60}/>
    <Menu.Item style={{fontSize: 24}}>Keep Kontakt</Menu.Item>
    <Menu.Item position='right'>
        
        <Button style={{marginBottom: 2}} as={Link} to="/create" basic color='black'  icon>
            <Icon name="add user"></Icon>

            Create Contact
        </Button>
    </Menu.Item>

  </Menu>
}

export default Header
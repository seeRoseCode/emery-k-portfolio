import React, { Component } from 'react'
import { Menu, Label, Sidebar, Segment, Icon, Image, Header, Container } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return(
      <div className="sidebar">
          <Sidebar as={Menu} animation='overlay' icon='labeled' vertical left>
            <Menu.Item as={Link} to="/" name="Home" active={activeItem === 'Home'} onClick={this.handleItemClick}>
              <Icon name='home'/>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/portfolio" name="Portfolio" active={activeItem === 'Portfolio'} onClick={this.handleItemClick}>
              <Label>Portfolio</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/podcast" name="Podcast" active={activeItem === 'Podcast'} onClick={this.handleItemClick}>
              <Label>Podcast</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/calendar" name="Calendar" active={activeItem === 'Calendar'} onClick={this.handleItemClick}>
              <Label>Calendar</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/blog" name="Blog" active={activeItem === 'Blog'} onClick={this.handleItemClick}>
              <Label>Blog</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/forum" name="Forum" active={activeItem === 'Forum'} onClick={this.handleItemClick}>
              <Label>Forum</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/sign-up" name="Sign Up" active={activeItem === 'Sign Up'} onClick={this.handleItemClick}>
              <Label>Sign Up</Label>
            </Menu.Item>
          </Sidebar>
      </div>
    )
  }
}

export default withRouter(NavBar);

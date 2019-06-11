import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          Wizards
        </Menu.Item>

        <Menu.Item
          name='wizard'
          active={activeItem === 'Wizard'}
          onClick={this.handleItemClick}
          href='/Wizard'
        >
          Wizards
        </Menu.Item>

        <Menu.Item
          name='card'
          active={activeItem === ''}
          onClick={this.handleItemClick}
          href='/'
        >
          woot
        </Menu.Item>
      </Menu>
    )
  }
}

export default Nav
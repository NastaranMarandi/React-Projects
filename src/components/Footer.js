import React, { Component } from 'react';
import { Grid, Menu, Container } from 'semantic-ui-react';


class Footer extends Component {
  state = { activeItem: 'about uber Eats' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Grid className='FooterContainer' columns='equal'>
        <Container>
          <Grid.Row>
            <Menu size='huge' text className='footerLinks'>
              <Menu.Menu position='right' className='footerRight'>
                <Menu.Item
                  as='a'
                  name='about uber Eats'
                  active={activeItem === 'about uber Eats'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as='a'
                  name='Read Our blog'
                  active={activeItem === 'Read Our blog'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as='a'
                  name='SignUp to deliver'
                  active={activeItem === 'SignUp to deliver'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as='a'
                  name='Add your restaurant'
                  active={activeItem === 'Add your restaurant'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  as='a'
                  name='Buy gift Cards'
                  active={activeItem === 'Buy gift Cards'}
                  onClick={this.handleItemClick}
                />
              </Menu.Menu>
            </Menu>
          </Grid.Row>
        </Container>
      </Grid>
      // </div>
    );
  }
}

export default Footer;

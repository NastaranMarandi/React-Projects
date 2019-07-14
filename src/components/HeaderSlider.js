import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Form, Segment, Image, Container,Header,Button,Input} from 'semantic-ui-react';
import pizzaA from '../images/pizzaA.svg';
import pizzaB from '../images/pizzaB.svg';


export default class HeaderSlider extends Component {
  render() {
    return (
      <Grid>
        <Container fluid style={{padding:'0'}}>
          <Grid.Row>
          <Segment basic className='haederSliderSegment'>
          <Grid.Column computer={4} largeScreen={4}>
          <Image className='headerSliderRight' src={pizzaA} />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8} largeScreen={8}>
          <div basic className="headerSliderContent">
          <Header className="headerSliderContentHeader">Restaurants you love, delivered to you</Header>
          </div>
          <Form size='huge' className="headerSliderContentForm">
          <Form.Group inline className="ContentFormGroup">
            <Input className="headerSliderSearch" control='input' placeholder='Enter delivery address' icon='map marker alternate' iconPosition='left' />
            <Button size='big' className="headerSliderContentButton" floated='right'>
              <NavLink className="headerSliderContentButtonText" to='/'>Find Food</NavLink>
            </Button>
          </Form.Group>
          </Form>
          </Grid.Column>
          <Grid.Column computer={4} largeScreen={4}>
          <Image className='headerSliderLeft' src={pizzaB} />
          </Grid.Column>
          </Segment>
          </Grid.Row>
        </Container>
      </Grid>
    );
  }
}

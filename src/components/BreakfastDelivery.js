import React, { Component } from 'react';
import Slider from 'react-slick';
import {
  Grid,
  Segment,
  Button,
  Container,
  Header,
  Image,
  Icon,
  Statistic,
  Rating,
  Divider
} from 'semantic-ui-react';
import deliverySliderA from '../images/deliverySliderA.jpg';


import menu from '../data/menu.json';
var breakFastMenu=menu.filter((restaurant) => restaurant.mealType.title=== "Breakfast");

export default class BreakfastDelivery extends Component {
  render() {
    
    const settings = {
      className: 'offerSlider',
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            initialSlide: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 427,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <Grid stackable columns={1}>
          <Container fluid style={{marginTop:'5rem'}}>
            <Grid.Row style={{ padding: '0 4rem' }}>
              <div className='offerSliderHeader'>
                <Header style={{paddingLeft:'1rem',marginBottom:'1.5rem'}} size='large'>Breakfast Delivery in San Francisco Bay Area</Header>
              </div>
              <Slider {...settings}>
                {breakFastMenu.map(restaurant => (
                  <Segment as='a' basic key={restaurant.id}>
                  <Image style={{width:'437px',height:'240px'}} fluid src={restaurant.image} />
                  <Header as='h2'  className="deliverySliderHeader">{restaurant.title}</Header>
                  <Header as='h5' className="deliverySliderSubHeader">$$ • Thai • Asian • Noodles</Header>
                  
                  <div className="DeliverySliderDetails"><span>{restaurant.preparation} min</span></div>
                  <div className="DeliverySliderDetails"><span>4.6</span></div>
                  <div className="DeliverySliderDetails"><span>${restaurant.price} Delivery Fee</span></div>
                  </Segment>
                ))}
              </Slider>
            </Grid.Row>
          </Container>
        </Grid>
      </div>
    );
  }
}


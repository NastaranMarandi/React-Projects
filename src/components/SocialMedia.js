import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid,
  Segment,
  Header,
  Image,
  Icon,
} from 'semantic-ui-react';

import apps from '../images/apps.svg';
import playStore from '../images/playStore.svg';
import restaurantDelivered from '../images/restaurantDelivered.svg';
import deliverEats from '../images/deliverEats.svg';

export default class SocialMedia extends Component  {
    render(){
        return(
        <div>
            <Grid stackable  columns={3}>
                <Grid.Row style={{ padding: '0 4rem',marginTop:'5rem' }}>
                    <Grid.Column>
                        <Segment basic>
                        <Image style={{width:'437px',height:'240px'}} fluid src={apps} />
                        <Header as='h2'  className="socialMediaHeader">There's more to love in the app.</Header>
                        <Header as='h5' className="socialMediaSubHeader">
                            <span className="deliverySliderdetails">Get the app:</span>
                            <span>
                                <Icon className="deliverySliderIcon" name='apple' size='big' />
                                <span className="deliverySliderMobile">iPhone</span>
                            </span>
                            <span>
                                <Image className='deliverySliderPlayStore' size='mini' inline src={playStore} />
                            <span className="deliverySliderMobile">Android</span>
                        </span>
                        </Header>
                        </Segment>    
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic>
                        <Image style={{width:'437px',height:'240px'}} fluid src={restaurantDelivered} />
                        <Header as='h2'  className="socialMediaHeader">There's more to love in the app.</Header>
                        <Header as='h5' className="socialMediaSubHeader">
                            <NavLink className="socialMediaLink" to='/' >Add your restaurant</NavLink>
                        </Header>
                        </Segment>    
                    </Grid.Column>
                    <Grid.Column>
                        <Segment basic>
                        <Image style={{width:'437px',height:'240px'}} fluid src={deliverEats} />
                        <Header as='h2'  className="socialMediaHeader">Deliver the Eats</Header>
                        <Header as='h5' className="socialMediaSubHeader">
                            <NavLink className="socialMediaLink" to='/' >Sign up to deliver</NavLink>
                        </Header>
                        </Segment>    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        );
    }
}



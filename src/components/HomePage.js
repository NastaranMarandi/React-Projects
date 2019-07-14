import React, { Component } from 'react';
import Header from './Header';
// import SearchForm from './SearchForm';
import HeaderSlider from './HeaderSlider';
import LunchDelivery from './LunchDelivery';
import BreakfastDelivery from './BreakfastDelivery';
import SocialMedia from './SocialMedia';
import Footer from './Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
          <Header />
          <HeaderSlider />
          <LunchDelivery />
          <BreakfastDelivery />
          <SocialMedia />
          <SocialMedia />
          <Footer />
      </div>
    );
  }
}

export default HomePage;

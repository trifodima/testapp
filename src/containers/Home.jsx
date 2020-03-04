import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OptionCard from '../components/CardOption';
import Card1 from '../assets/images/card1.png';
import Card2 from '../assets/images/card2.png';
const optionCards = [
  {
    title: 'Create one of more new Positions',
    text: 'lorem 1',
    image: Card1,
    link: '/createPosition',
    alt: 'Card 1',
  }, {
    title: 'Create one or more new Candidates',
    text: 'lorem 2',
    image: Card2,
    link: '/',
    alt: 'Card 2',
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="option-card-list">
        {optionCards.map((card, index) =>
          <OptionCard
            key={index}
            {...card}
          />
        )}
      </div>
    );
  }
}

export default Home;

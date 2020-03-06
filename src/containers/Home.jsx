import React, { Component } from 'react';
import OptionCard from '../components/CardOption';
import Card1 from '../assets/images/card1.png';
import Card2 from '../assets/images/card2.png';

const optionCards = [
  {
    id: 1,
    title: 'Create one of more new Positions',
    image: Card1,
    link: '/createPosition',
    alt: 'Card 1',
  }, {
    id: 2,
    title: 'Create one or more new Candidates',
    image: Card2,
    link: '/',
    alt: 'Card 2',
  }
];

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="option-card-list">
          {optionCards.map(card =>
            <OptionCard
              key={card.id}
              {...card}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Home;

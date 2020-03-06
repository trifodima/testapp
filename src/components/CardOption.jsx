import React from 'react';
import { Link } from 'react-router-dom';

const OptionCard = (props) => {
  const { title, image, link, alt } = props;

  return (
    <div className="option-card-container">
      <Link to={link}>
        <div className="option-card">
          <img src={image} alt={alt} />
          <div className="option-card-title">{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default OptionCard;

import React from 'react';
import './customheader.css';
import BarFighClubImage from '../../images/BarFightClub.png'
import ShadowImage from '../../images/094.png'

const CustomHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="header-text">
      <img src={BarFighClubImage} className="header-logo" />
      {/* <p className='header-slogan'> Hello</p> */}
      </div>
      <div className='header-bottom-bar'></div>
    </header>
  );
};

export default CustomHeader;

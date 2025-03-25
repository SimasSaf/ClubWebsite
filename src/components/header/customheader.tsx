import React from 'react';
import './customheader.css';
import BarFighClubImage from '../../images/BarFightClub.png'
import ShadowImage from '../../images/094.png'

const CustomHeader: React.FC = () => {
  return (
    <header className="custom-header">
      <img src={BarFighClubImage} className="header-barFightImage" />
      <img src={ShadowImage} className='header-shadowImage' />
    </header>
  );
};

export default CustomHeader;

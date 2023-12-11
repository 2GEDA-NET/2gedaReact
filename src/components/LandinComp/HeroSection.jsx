import React from 'react';
import ActionButton from '../Commons/Button';
import './style.css';

const HeroSection = () => {
    return (
      <div>
        <div className="top">
          <div className='top-content'>
          <h2 className="heading-primary">
            Connect, Share, Discover and Empower
          </h2>
          <p className="paragraph text-center text-slate-400">
            Unleash connections. Explore entertainment and empower knowledge on
             2geda</p>
          <div className='cta'>
        <div className="flex justify-center items-center text-center gap-4">
          <ActionButton bg={"pruplr"} label={"Get started"} />
          <ActionButton bg={"white"} label={"Download app"} />
        </div>
          </div>
          </div>
         </div>
      </div>
    );
}

export default HeroSection;

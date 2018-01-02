import React from 'react';
import Button from './Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='banner-left'>
        <h2>Dunder Mifflin</h2>
        <p>Get a closer look at a typical day at Dunder Mifflin and get advice from the best on how to survive another day at the office.</p>
        <div className='button-holder'>
          <Button buttonType='dark'
                  buttonText='Get started' />
          <Button buttonType='light'
                  buttonText='Learn more' />
        </div>
      </div>
      <img className='banner-right' src='http://az616578.vo.msecnd.net/files/2016/06/24/636023438418833640-1945838923_1442955860897.jpeg' />
    </div>
  )
}

export default Banner;

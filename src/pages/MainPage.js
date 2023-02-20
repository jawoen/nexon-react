import React from 'react';
import './MainPage.css';
import { Carousel } from 'antd';
const MainPage = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    margin: '80px 0'
  };
  return (
    <Carousel autoplay>
    <div className='main_1'>
      <h3 style={contentStyle}>
          <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
             <source src="/video/Hit2.mp4" type="video/mp4" />
          </video>
        </h3>
    </div>
    <div  className='main_1'>
      <h3 style={contentStyle}>
      <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
        <source src="/video/ProjectD.mp4" type="video/mp4" />
      </video>
      </h3>
    </div>
    <div  className='main_1'>
      <h3 style={contentStyle}>
      <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
        <source src="/video/BlueArchive.mp4" type="video/mp4" />
      </video>
      </h3>
    </div>
    <div  className='main_1'>
      <h3 style={contentStyle}>
      <video preload="auto" poster="" muted="muted" autoplay="autoplay" loop="loop">
        <source src="/video/ProjectMagnum.mp4" type="video/mp4" />
      </video>
      </h3>
    </div>
  </Carousel>
  );
};

export default MainPage;

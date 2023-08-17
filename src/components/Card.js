import React from 'react';
import '../App.css';
import './Card.css';
import CardItem from './CardItem';


function Cards() {

  const cardData = [
    {
      src: 'images/another gui.jpg',
      text: 'An interactive graphical user interface made with python',
      label: 'Python GUI',
      linkUrl: 'https://github.com/rahulseeb/GUI', // Add the URL for this card
    },
    {
      src: 'images/react.png',
      text: 'My portfolio website built using react, javascript and css',
      label: 'React Website',
      linkUrl: 'https://github.com/rahulseeb/rahul-website', // Add the URL for this card
    },
    {
      src: 'images/bnb.png',
      text: 'A b&b website created using flask as a backend framework, mainly html and some css frontend',
      label: 'B&B Website',
      linkUrl: 'https://github.com/rahulseeb/VDSR-Solutions', // Add the URL for this card

    }


  ]
  return (
    <div className='cards'>
      <h1>PROJECTS</h1>
      <div className='card_container'>
        <div className='card_wrap'>
          {cardData.map((item, index) => (
            <CardItem
            key={index}
            src={item.src}
            text={item.text}
            label={item.label}
            linkUrl={item.linkUrl}
            />
            ))}
            <div className="credits-container">
            <p className="credits">CREDITS</p>
            </div>
            <div className='video'>
            <a href="https://www.freepik.com/free-video/animation-molecules-waves-connecting-dots-lines_170317#fromView=keyword&term=technology-background&page=1&position=0">Video by freepik</a>
            </div>
            <div className = "GUI">
            <a href="https://www.freepik.com/free-photo/designer-using-transparent-digital-tablet-screen-futuristic-technology_15840680.htm">Image by rawpixel.com</a> on Freepik
            </div>
            <div className='react'>
            <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>
            </div>
            <div className='bnb'>
            <a href="https://www.flaticon.com/free-icons/bed" title="bed icons">Bed icons created by Freepik - Flaticon</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
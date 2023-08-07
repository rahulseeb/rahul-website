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
        </div>
      </div>
    </div>
  );
}

export default Cards;
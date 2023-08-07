import React from 'react';

function CardItem(props) {

  const isReact = props.src === 'images/react.png';
  const isBnB = props.src === 'images/bnb.png';


  return (
    <>
      <li className='card_item'>
      <a className='card_link' href={props.linkUrl} target='_blank' rel='noopener noreferrer'>
          <figure className='card_pic' data-category={props.label}>
            <img
              className='card_img'
              alt=' '
              src={props.src}
              style={{
                width: isReact || isBnB? '65%' : '100%', // Apply different widths based on the image source
                height: 'auto',
                display: 'block',
                margin: 'auto',
              }}
            />
          </figure>
          <div className='card_info'>
            <h5 className='card_text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
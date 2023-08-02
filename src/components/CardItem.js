import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='card_item'>
        <Link className='card_link' to={props.path}>
          <figure className='card_pic' data-category={props.label}>
            <img
              className='card_img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='card_info'>
            <h5 className='card_text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
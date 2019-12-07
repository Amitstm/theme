import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Card (props) {

  const { dark } = useContext(ThemeContext);

  return (
    <div className='Card'>
      <div className='img'/>
      <h2>{props.title || 'Amit There'}</h2>
    
      <button>{!dark ? 'Light theme' : 'Dark Theme'}</button>
    </div>
  );
}
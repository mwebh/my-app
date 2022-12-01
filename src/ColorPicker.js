import React from 'react';
import './ColorPicker.css';
import './App.css';

export default function ColorPicker({ changeColorOne, changeColorTwo }) {
    function changeColorOne() {
        const colorOne = {
            background: document.getElementById('color1').value,
        }
        changeColorOne(colorOne);
    }
    function changeColorTwo() {
        const colorTwo = {
            background: document.getElementById('color2').value,
        }
        changeColorTwo(colorTwo);
    }

  return (
    <div className='color-container'>
        Choose your theme
        <label>
            Color 1: 
            <input type='color' id='color1' onChange={changeColorOne} />
        </label>
        <label>
            Color 2: 
            <input type='color' id='color2' onChange={changeColorTwo} />
        </label>
    </div>
  )
}

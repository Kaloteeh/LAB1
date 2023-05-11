import sound from '../../fotot/sound.mp3'
import {Button } from '@mui/material';
import soundicon from '../../fotot/ss3.png'
import { useState,useEffect } from 'react';

const Audio = ({ sound }) => {
    const [value, setValue] = useState(0);
  
    function play() {
      new Audio(sound).play();
    }
  
    return (
      <AudiotrackIcon onClick={() => {
        play();
        setValue(value + 1);
      }} />
    );
  };
  
  export default Audio;
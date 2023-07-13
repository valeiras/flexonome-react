/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Note.css';

const Note = ({ idx }) => {
  const [isStrong, setIsStrong] = useState(parseInt(idx) === 0);
  return (
    <div
      className={'note ' + (isStrong ? 'strong' : '')}
      onClick={() => {
        setIsStrong(!isStrong);
      }}
    />
  );
};
export default Note;

/* eslint-disable react/prop-types */
import './ButtonContainer.css';
import { FaPlay, FaStop } from 'react-icons/fa';

const ButtonContainer = ({ isPlaying, setIsPlaying }) => {
  return (
    <div className="container" id="btn-container">
      <button
        className="btn"
        id="play-btn"
        disabled={isPlaying}
        onClick={() => {
          setIsPlaying(true);
        }}
      >
        <FaPlay />
      </button>
      <button
        className="btn"
        id="stop-btn"
        disabled={!isPlaying}
        onClick={() => {
          setIsPlaying(false);
        }}
      >
        <FaStop />
      </button>
    </div>
  );
};
export default ButtonContainer;

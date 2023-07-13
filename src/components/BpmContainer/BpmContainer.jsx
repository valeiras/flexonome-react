/* eslint-disable react/prop-types */
import Input from '../Input/Input';
import './BpmContainer.css';

const MIN_BPM = 1;
const MAX_BPM = 360;
const DEFAULT_BPM = 120;

const BpmContainer = ({ setBpm }) => {
  return (
    <div className="container" id="bpm-container">
      <Input
        setOutputValue={setBpm}
        defaultValue={DEFAULT_BPM}
        minValue={MIN_BPM}
        maxValue={MAX_BPM}
        id="bpm-input"
        inputClass="bpm-input"
      />
      <span id="bpm-text">bpm</span>
    </div>
  );
};

export default BpmContainer;

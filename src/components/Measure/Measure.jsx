/* eslint-disable react/prop-types */
import './Measure.css';
import Note from '../Note/Note';
import Input from '../Input/Input';
import { RxSlash } from 'react-icons/rx';
import { FaTrashCan } from 'react-icons/fa6';

const MIN_NB_BEATS = 1;
const MAX_NB_BEATS = 12;
const DEFAULT_NB_BEATS = 4;
const MIN_NOTE_VALUE = 1;
const MAX_NOTE_VALUE = 12;
const DEFAULT_NOTE_VALUE = 4;

const Measure = ({
  nbBeats,
  setNbBeats,
  setNoteValue,
  removeMeasure,
  isAlone,
  id,
}) => {
  // Array from 0 to nbBeats
  const indices = [...Array(nbBeats).keys()];

  return (
    <div className="measure">
      <div className="note-container">
        {indices.map((idx) => {
          return <Note key={idx} idx={idx} />;
        })}
      </div>
      <div className="signature-container">
        <Input
          setOutputValue={setNbBeats}
          defaultValue={DEFAULT_NB_BEATS}
          minValue={MIN_NB_BEATS}
          maxValue={MAX_NB_BEATS}
          id={'nb-beats-input-' + id}
          inputClass="measure-input"
        />
        <RxSlash className="slash" />
        <Input
          setOutputValue={setNoteValue}
          defaultValue={DEFAULT_NOTE_VALUE}
          minValue={MIN_NOTE_VALUE}
          maxValue={MAX_NOTE_VALUE}
          id={'note-value-input-' + id}
          inputClass="measure-input"
        />
        <button
          className="btn trash-btn"
          disabled={isAlone}
          onClick={removeMeasure}
        >
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};

export default Measure;

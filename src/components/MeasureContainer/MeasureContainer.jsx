/* eslint-disable react/prop-types */
import './MeasureContainer.css';
import Measure from '../Measure/Measure';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const MS_PER_MIN = 60000;
const QUAVERS_PER_BAR = 4;

const MeasureContainer = ({
  isMain,
  hasSecondary,
  setHasSecondary,
  bpm,
  isPlaying,
  mainTotalTime,
  setMainTotalTime,
}) => {
  const [measures, setMeasures] = useState([
    { nbBeats: 4, noteValue: 4, id: nanoid() },
  ]);

  const [measureIdx, setMeasureIdx] = useState(0);
  const [noteIdx, setNoteIdx] = useState(0);
  const [normalizedTime, setNormalizedTime] = useState(0);

  const removeMeasure = (id) => {
    setMeasures((prevMeasures) => {
      return prevMeasures.filter((measure) => {
        return measure.id != id;
      });
    });
  };

  const addNewMeasure = () => {
    setMeasures((prevMeasures) => {
      return [...prevMeasures, { nbBeats: 4, noteValue: 4, id: nanoid() }];
    });
  };

  function createSetFunction(id, key) {
    return function (newValue) {
      setMeasures((prevMeasures) => {
        return prevMeasures.map((measure) => {
          return measure.id === id ? { ...measure, [key]: newValue } : measure;
        });
      });
    };
  }

  useEffect(() => {
    if (isMain && isPlaying) {
      const totalTime = measures.reduce((acc, currMeasure) => {
        return (
          acc +
          currMeasure.nbBeats *
            (MS_PER_MIN / bpm) *
            (QUAVERS_PER_BAR / currMeasure.noteValue)
        );
      }, 0);
      setMainTotalTime(totalTime);
      setNormalizedTime(totalTime);
    }
    setMeasureIdx(0);
    setNoteIdx(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    if (!isMain) {
      const totalRatio = measures.reduce((acc, currMeasure) => {
        return acc + parseFloat(currMeasure.nbBeats) / currMeasure.noteValue;
      }, 0);
      setNormalizedTime(mainTotalTime / totalRatio);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainTotalTime]);

  return (
    <div className="container measure-container">
      {measures.map((measure) => {
        return (
          <Measure
            {...measure}
            setNbBeats={createSetFunction(measure.id, 'nbBeats')}
            setNoteValue={createSetFunction(measure.id, 'noteValue')}
            removeMeasure={() => {
              removeMeasure(measure.id);
            }}
            key={measure.id}
            isAlone={measures.length === 1}
          />
        );
      })}
      <button className="btn round-btn add-measure-btn" onClick={addNewMeasure}>
        <FaPlus />
      </button>
      {isMain && !hasSecondary && (
        <button
          className="btn round-btn add-secondary-btn"
          onClick={() => {
            setHasSecondary(true);
          }}
        >
          <FaPlus />
        </button>
      )}
      {!isMain && (
        <button
          className="btn round-btn remove-secondary-btn"
          onClick={() => {
            setHasSecondary(false);
          }}
        >
          <FaMinus />
        </button>
      )}
    </div>
  );
};
export default MeasureContainer;

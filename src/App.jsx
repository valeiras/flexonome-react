import { BpmContainer, ButtonContainer, MeasureContainer } from './components';

import { useState } from 'react';
import './App.css';

function App() {
  const [bpm, setBpm] = useState(120);
  const [hasSecondary, setHasSecondary] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mainTotalTime, setMainTotalTime] = useState(0);

  return (
    <>
      <h1>Flexonome</h1>
      <BpmContainer setBpm={setBpm} />
      <div id="poly-container">
        <MeasureContainer
          isMain={true}
          hasSecondary={hasSecondary}
          setHasSecondary={setHasSecondary}
          bpm={bpm}
          isPlaying={isPlaying}
          mainTotalTime={mainTotalTime}
          setMainTotalTime={setMainTotalTime}
        />
        {hasSecondary && (
          <MeasureContainer
            isMain={false}
            setHasSecondary={setHasSecondary}
            isPlaying={isPlaying}
            mainTotalTime={mainTotalTime}
          />
        )}
      </div>
      <ButtonContainer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </>
  );
}

export default App;

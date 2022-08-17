import { useState } from 'react';

import { Number } from './components/number';
import { Totals } from './components/totals';
import { CageSizeSelector } from './components/cageSizeSelector';

function App() {
  const [cageSize, setCageSize] = useState(null);
  const [numberState, setNumberState] = useState(Array(8).fill(true));

  function cageSizeSelection(e) {
    setCageSize(e.currentTarget.value);
  }

  function selectNumber(e) {
    const numberButton = e.currentTarget;

    setNumberState((numberState) => {
      const newState = [...numberState];
      newState[numberButton.value] = !newState[numberButton.value];
      return newState;
    });
  }

  return (
    <main className='App'>
      <h1>Killer Sudoku Totals</h1>
      <CageSizeSelector
        cageSizeSelection={cageSizeSelection}
        cageSize={cageSize}
      />
      <section>
        <h2>Availble numbers:</h2>
        {numberState.map((state, index) => (
          <Number
            key={index}
            index={index}
            state={state}
            selectNumber={selectNumber}
          />
        ))}
      </section>
      <section>
        <Totals numberState={numberState} cageSize={cageSize} />
      </section>
    </main>
  );
}

export default App;

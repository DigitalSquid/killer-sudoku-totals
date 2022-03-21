import React from 'react';

import { Number } from './components/number';
import { Totals } from './components/totals';
import { CageSizeSelector } from './components/cageSizeSelector';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cageSize: null,
      numberState: [
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
      ],
    };
  }

  cageSizeSelection = (e) => {
    const cageSize = e.currentTarget.value;

    this.setState({
      cageSize: cageSize,
    });
  };

  selectNumber = (e) => {
    const numberButton = e.currentTarget;
    let numberState = [...this.state.numberState];

    numberState[numberButton.value] =
      numberState[numberButton.value] === 'available'
        ? 'unavailable'
        : 'available';

    this.setState({
      numberState: numberState,
    });
  };

  render() {
    const { cageSize, numberState } = this.state;
    return (
      <main className='App'>
        <h1>Killer Sudoku Totals</h1>
        <CageSizeSelector
          cageSizeSelection={this.cageSizeSelection}
          cageSize={cageSize}
        />
        <section>
          <h2>Availble numbers:</h2>
          {numberState.map((state, index) => (
            <Number
              key={index}
              index={index}
              state={state}
              selectNumber={this.selectNumber}
            />
          ))}
        </section>
        <section>
          <Totals numberState={numberState} cageSize={cageSize} />
        </section>
      </main>
    );
  }
}

export default App;

import cageCombinations from '../data/cageCombinations';

import './totals.scss';

export const Totals = ({ cageSize, numberState }) => {
  const unavailableNumbers = [];
  const selectedCageSize = cageCombinations[cageSize];

  numberState.forEach((state, index) => {
    if (state === 'unavailable') {
      unavailableNumbers.push(index + 1);
    }
  });
  return selectedCageSize ? (
    <div>
      <h2>{cageSize} Square Cages</h2>

      <div className='cage-totals'>
        <div className='flex-row'>
          <div className='total'>
            <strong>Total</strong>
          </div>
          <div className='combinations'>
            <strong>Combinations</strong>
          </div>
        </div>
        <div>
          {Object.entries(selectedCageSize).map(
            ([cageTotal, cageValues], index) => {
              return (
                <div className='flex-row' key={index}>
                  <div className='total'>{cageTotal}</div>
                  <div className='combinations'>
                    {cageValues.map((value, index) => {
                      let combinationState = '';

                      unavailableNumbers.forEach((number) => {
                        if (combinationState !== 'unavailable') {
                          combinationState = value
                            .toString()
                            .includes(number.toString())
                            ? 'unavailable'
                            : 'available';
                        }
                      });

                      return (
                        <span key={index} className={combinationState}>
                          {value}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

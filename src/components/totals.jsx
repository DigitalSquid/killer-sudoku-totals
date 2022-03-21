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
      <table className='cage-totals'>
        <thead>
          <tr>
            <th>Total</th>
            <th>Combinations</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(selectedCageSize).map(
            ([cageTotal, cageValues], index) => {
              return (
                <tr key={index}>
                  <td>{cageTotal}</td>
                  <td>
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
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  ) : (
    ''
  );
};

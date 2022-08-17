import './number.scss';

export const Number = ({ index, state, selectNumber }) => (
  <button
    key={index}
    className={`number-button ${state ? 'available' : 'unavailable'}`}
    onClick={selectNumber}
    value={index}
  >
    {index + 1}
  </button>
);

import './number.scss';

export const Number = ({ index, state, selectNumber }) => {
  return (
    <button
      key={index}
      className={`number-button ${state}`}
      onClick={selectNumber}
      value={index}
    >
      {index + 1}
    </button>
  );
};

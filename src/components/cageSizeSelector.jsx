export const CageSizeSelector = ({ cageSizeSelection, cageSize }) => {
  return (
    <section>
      <h2>Cage size:</h2>
      {[...Array(8)].map((_, value) => {
        let buttonState =
          cageSize !== null
            ? value === parseInt(cageSize)
              ? 'selected'
              : 'unavailable'
            : '';
        return (
          <button
            key={value}
            className={`number-button ${buttonState}`}
            value={value}
            onClick={cageSizeSelection}
          >
            {value + 2}
          </button>
        );
      })}
    </section>
  );
};

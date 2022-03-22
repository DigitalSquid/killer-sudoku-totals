export const CageSizeSelector = ({ cageSizeSelection, cageSize }) => {
  return (
    <section>
      <h2>Cage size:</h2>
      {[...Array(8)].map((_, value) => {
        const cageSizeValue = value + 2;
        const buttonState =
          cageSize !== null
            ? cageSizeValue === parseInt(cageSize)
              ? 'selected'
              : 'unavailable'
            : '';
        return (
          <button
            key={cageSizeValue}
            className={`number-button ${buttonState}`}
            value={cageSizeValue}
            onClick={cageSizeSelection}
          >
            {cageSizeValue}
          </button>
        );
      })}
    </section>
  );
};

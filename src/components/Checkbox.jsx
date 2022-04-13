const Checkbox = ({ buttonText }) => {
  return (
    <div className="checkbox-holder" data-testid="checkbox-action">
      <nav className="checkbox-class" data-testid="checkbox-class">
        <button data-testid="data-testid-button-text">{buttonText}</button>
      </nav>
    </div>
  );
};

export default Checkbox;

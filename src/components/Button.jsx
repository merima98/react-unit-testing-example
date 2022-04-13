const Button = ({ darkMode, setIsDarkMode }) => {
  return (
    <div data-testid="main-header">
      <button
        data-testid="dark-mode-action"
        onClick={() => setIsDarkMode(!darkMode)}
      >
        Dark/Light mode
      </button>
    </div>
  );
};

export default Button;

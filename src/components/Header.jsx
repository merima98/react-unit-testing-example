import { useState } from "react";

const Header = ({ isSetQuickcAndTask, setQuickAndTask }) => {
  return (
    <header className="header" data-testid="header">
      <div>
        <nav className="settings">
          <ul>
            <li>
              <button
                type="button"
                data-testid="add-quic-and-task"
                onClick={() => {
                  setQuickAndTask(!isSetQuickcAndTask);
                }}
              >
                Header button
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

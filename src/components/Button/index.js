/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Button.css';

function Button({
  onClick, onContext, row, col, state, value, red
}) {
  const displayContent = () => {
    if (state === 2) {
      return <span>🚩</span>;
    }

    if (state === 1) {
      if (value === -1) {
        return <span>💣</span>;
      }

      if (value > 0) {
        return value;
      }
    }

    return null;
  };

  return (
    <div
      className={`Button value-${value} ${state === 1 ? 'visible' : ''} ${red ? 'red' : ''}`}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
    >
      {displayContent()}
    </div>
  );
}

export default Button;

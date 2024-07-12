import React, { useState, useEffect } from 'react';

export const ThrowError: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      throw new Error('INDEED Everything went wrong. RELOAD the page!');
    }
  }, [hasError]);

  return (
    <button
      style={{ backgroundColor: 'red', color: 'white', marginLeft: '100px' }}
      onClick={() => setHasError(true)}
    >
      Throw error
    </button>
  );
};

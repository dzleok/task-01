import { useEffect, useState } from 'react';

export default function ButtonTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle('dark-mode');
    },
    [isDark],
  );

  return (
    <button
      onClick={() => setIsDark((isDark) => !isDark)}
      className="btn-dark-mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

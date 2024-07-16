import { useEffect, useState } from 'react';

export function useSelectedType() {
  const [selectedType, setSelectedType] = useState<string>(
    localStorage.getItem('selectedType') ?? 'people',
  );

  useEffect(
    function () {
      localStorage.setItem('selectedType', selectedType);
    },
    [selectedType],
  );
  return { selectedType, setSelectedType };
}

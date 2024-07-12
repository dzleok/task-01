import { useEffect, useState } from 'react';

export function useQuery() {
  const [query, setQuery] = useState<string>(
    localStorage.getItem('query') ?? '',
  );

  useEffect(
    function () {
      localStorage.setItem('query', query);
    },
    [query],
  );
  return { query, setQuery };
}

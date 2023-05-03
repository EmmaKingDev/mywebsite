import { useState, useEffect } from 'react';

export default function usePoem() {
  const [loading, setLoading] = useState(true);
  const [poemData, setPoemData] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetchPoem() {
      try {
        setLoading(true);
        const response = await fetch('https://poetrydb.org/author/William%20Shakespeare');
        const data = await response.json();
        const numPoems = data.length;
        const randomIndex = Math.floor(Math.random() * numPoems); // select random index
        setPoemData(data[randomIndex].lines); // retrieve random poem and join lines
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchPoem();
  }, []);

  return [poemData, loading];
}
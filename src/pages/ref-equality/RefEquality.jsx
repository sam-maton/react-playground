import { useState, useMemo, useCallback } from 'react';
import Wave from './Wave';

export default function RefEquality() {
  const [index, setIndex] = useState(0);
  const [waveIndex, setWaveIndex] = useState(0);
  const greetings = ['Hello', 'Hola', 'Bonjour'];

  const handleClick = () => {
    const newIndex = index === greetings.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  // const handleWaveClick = useMemo(() => {
  //   return () => {
  //     setWaveIndex((prev) => (prev === 5 ? 0 : prev + 1));
  //   };
  // }, []);

  const handleWaveClick = useCallback(() => {
    setWaveIndex((prev) => (prev === 5 ? 0 : prev + 1));
  }, []);

  const options = useMemo(() => {
    return { tone: waveIndex };
  }, [waveIndex]);

  return (
    <div className="py-10 px-40">
      <Wave options={options} onClick={handleWaveClick} />
      <h2 className="text-6xl my-4 w-[400px]">{greetings[index]}, Sam</h2>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-gray-50 py-2 px-4 rounded-2xl cursor-pointer "
      >
        Next Greeting
      </button>
    </div>
  );
}

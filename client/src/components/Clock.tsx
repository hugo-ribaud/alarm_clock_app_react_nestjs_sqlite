import { useState, useEffect } from 'react';
import { ClockProps } from '../types';

const Clock = ({ alarmTriggered, stopAlarm }: ClockProps) => {
  const [time, setTime] = useState<Date>(new Date());
  const timeTextClasses = `text-6xl md:text-8xl lg:text-9xl font-bold text-center ${
    alarmTriggered ? 'text-green-500 blink' : 'text-white'
  }`;

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div
        className='relative p-8 md:p-16 lg:p-24 bg-gray-800 rounded-lg shadow-2xl border-4 border-gray-600'
        style={{ width: '900px' }}
      >
        <div className={timeTextClasses}>{time.toLocaleTimeString()}</div>
        <div
          className='text-lg md:text-xl lg:text-2xl text-gray-400 mt-4 tracking-widest uppercase'
          style={{ textAlign: 'center' }}
        >
          {time.toLocaleDateString()}
        </div>
        {alarmTriggered && (
          <button
            onClick={stopAlarm}
            className='absolute top-0 right-0 mt-4 mr-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600'
            aria-label='Stop alarm'
          >
            Stop
          </button>
        )}
      </div>
    </div>
  );
};

export default Clock;

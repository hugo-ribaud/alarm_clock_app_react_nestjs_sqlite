import { useState, useEffect } from 'react';
import { ClockProps } from '../types';

const Clock = ({ onAddAlarmClick }: ClockProps) => {
  const [time, setTime] = useState<Date>(new Date());

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
        <div
          className='text-6xl md:text-8xl lg:text-9xl text-white font-bold font-orbitron'
          style={{ fontFamily: '"Orbitron", monospace', textAlign: 'center' }}
        >
          {time.toLocaleTimeString()}
        </div>
        <div
          className='text-lg md:text-xl lg:text-2xl text-gray-400 mt-4 tracking-widest uppercase'
          style={{ textAlign: 'center' }}
        >
          {time.toLocaleDateString()}
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4'>
          <button
            onClick={onAddAlarmClick}
            className='text-white p-2 shadow-lg focus:outline-none focus:ring focus:ring-blue-300 flex items-center justify-center bg-blue-500 rounded-lg space-x-2'
            aria-label='Add alarm'
          >
            <p>Add Alarm</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;

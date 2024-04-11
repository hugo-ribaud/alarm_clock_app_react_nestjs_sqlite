import React, { useState } from 'react';
import { AlarmEditFormProps } from '../types';

const AlarmEditForm = ({ alarm, onUpdate, onCancel }: AlarmEditFormProps) => {
  const [time, setTime] = useState(alarm.time);
  const [label, setLabel] = useState(alarm.label);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(alarm.id, time, label);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center justify-between w-full'
    >
      <div className='flex-grow flex items-center space-x-2'>
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.currentTarget.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
          required
        />
        <input
          type='text'
          value={label}
          onChange={(e) => setLabel(e.currentTarget.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300'
          required
        />
      </div>
      <div className='flex-shrink-0 flex items-center space-x-2'>
        <button
          type='submit'
          className='p-2 text-green-600 hover:text-green-700'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <button
          type='button'
          onClick={onCancel}
          className='p-2 text-gray-600 hover:text-gray-700'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default AlarmEditForm;

import React, { useState } from 'react';
import { AlarmFormProps } from '../types';

const AlarmForm = ({ addAlarm }: AlarmFormProps) => {
  const [time, setTime] = useState('');
  const [label, setLabel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!time || !label) return;
    addAlarm(time, label);
    setTime('');
    setLabel('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-4'
    >
      <div className='mb-2'>
        <label
          htmlFor='time'
          className='block'
        >
          Time:
        </label>
        <input
          type='time'
          id='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className='border-2 border-gray-200 rounded p-1'
          required
        />
      </div>
      <div className='mb-2'>
        <label
          htmlFor='label'
          className='block'
        >
          Label:
        </label>
        <input
          type='text'
          id='label'
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          className='border-2 border-gray-200 rounded p-1'
          required
        />
      </div>
      <button
        type='submit'
        className='bg-blue-500 text-white rounded p-2'
      >
        Add Alarm
      </button>
    </form>
  );
};

export default AlarmForm;

import React from 'react';
import Clock from './components/Clock';
import AlarmManager from './components/AlarmManager';

function App() {
  return (
    <div className='bg-gray-100 sm:p-6 font-orbitron'>
      <Clock />
      <AlarmManager />
    </div>
  );
}

export default App;

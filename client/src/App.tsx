import Clock from './components/Clock';
import AlarmManager from './components/AlarmManager';
import { useState } from 'react';

function App() {
  const [alarmTriggered, setAlarmTriggered] = useState<boolean>(false);

  const stopAlarm = () => {
    setAlarmTriggered(false);
  };

  return (
    <div className='bg-gray-100 sm:p-6 font-orbitron'>
      <Clock
        alarmTriggered={alarmTriggered}
        stopAlarm={stopAlarm}
      />
      <AlarmManager
        setAlarmTriggered={setAlarmTriggered}
        id={0}
        time={''}
        label={''}
      />
    </div>
  );
}

export default App;

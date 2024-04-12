import { useEffect, useState } from 'react';
import AlarmForm from './AlarmForm';
import AlarmEditForm from './AlarmEditForm';
import { AlarmManagerProps } from '../types';

import {
  fetchAlarms,
  createAlarm,
  updateAlarm,
  deleteAlarm,
} from '../service/api/api';

const AlarmManager = () => {
  const [alarms, setAlarms] = useState<AlarmManagerProps[]>([]);
  const [editingAlarmId, setEditingAlarmId] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  useEffect(() => {
    loadAlarms();
  }, []);

  const loadAlarms = async () => {
    try {
      const fetchedAlarms = await fetchAlarms();
      setAlarms(fetchedAlarms);
    } catch (error) {
      console.error("Couldn't fetch alarms:", error);
    }
  };

  const handleAddAlarm = async (time: string, label: string) => {
    try {
      const newAlarm = await createAlarm({ time, label });
      setAlarms((prevAlarms) => [...prevAlarms, newAlarm]);
    } catch (error) {
      console.error("Couldn't add alarm:", error);
    }
  };

  const handleConfirmDelete = (id: number) => {
    setConfirmDeleteId(id);
    // Optionally set a timeout to reset the confirmation state
    setTimeout(() => setConfirmDeleteId(null), 5000); // 5 seconds to confirm
  };

  const handleDeleteAlarm = async (id: number) => {
    // If there's a confirmation id, only delete if it matches
    if (confirmDeleteId === id) {
      try {
        await deleteAlarm(id);
        setAlarms(alarms.filter((alarm) => alarm.id !== id));
        setConfirmDeleteId(null); // Reset confirmation state after deletion
      } catch (error) {
        console.error("Couldn't delete alarm:", error);
      }
    }
  };

  const handleUpdateAlarm = async (
    id: number,
    newTime: string,
    newLabel: string
  ) => {
    try {
      const updatedAlarm = await updateAlarm(id, {
        time: newTime,
        label: newLabel,
      });
      setAlarms(
        alarms.map((alarm) =>
          alarm.id === id ? { ...alarm, ...updatedAlarm } : alarm
        )
      );
      setEditingAlarmId(null);
    } catch (error) {
      console.error("Couldn't update alarm:", error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 py-8'>
      <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Alarms</h2>
          <AlarmForm addAlarm={handleAddAlarm} />
        </div>
        <div className='space-y-6'>
          {alarms.map((alarm) => (
            <div
              key={alarm.id}
              className='bg-white p-4 rounded-lg shadow flex justify-between items-center'
            >
              {editingAlarmId === alarm.id ? (
                <AlarmEditForm
                  alarm={alarm}
                  onUpdate={handleUpdateAlarm}
                  onCancel={() => setEditingAlarmId(null)}
                />
              ) : (
                <div className='flex items-center justify-between w-full'>
                  <p className='text-lg text-gray-800'>
                    {alarm.time} - {alarm.label}
                  </p>
                  <div>
                    <button
                      onClick={() => setEditingAlarmId(alarm.id)}
                      className='p-2 rounded-full text-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path d='M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z' />
                      </svg>
                    </button>
                    {confirmDeleteId === alarm.id ? (
                      <button
                        onClick={() => handleDeleteAlarm(alarm.id)}
                        className='p-2 rounded-full text-green-500 hover:text-green-700 focus:outline-none  ml-3'
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
                    ) : (
                      <button
                        onClick={() => handleConfirmDelete(alarm.id)}
                        className='p-2 rounded-full text-red-500 hover:text-red-700 focus:outline-none ml-3'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            fillRule='evenodd'
                            d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlarmManager;

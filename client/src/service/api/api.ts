const API_URL = import.meta.env.VITE_APP_API_URL;

export const fetchAlarms = async () => {
  const response = await fetch(`${API_URL}/alarms`);
  if (!response.ok) {
    throw new Error('Failed to fetch alarms');
  }
  return response.json();
};

export const createAlarm = async (alarm: { time: string; label: string; }) => {
  const response = await fetch(`${API_URL}/alarms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alarm),
  });
  if (!response.ok) {
    throw new Error('Failed to create alarm');
  }
  return response.json();
};

export const updateAlarm = async (id: number, alarm: { time: string; label: string; }) => {
  const response = await fetch(`${API_URL}/alarms/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(alarm),
  });
  if (!response.ok) {
    throw new Error('Failed to update alarm');
  }
  return response.json();
};

export const deleteAlarm = async (id: number): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/alarms/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete alarm');
  }
  return response.json();
};

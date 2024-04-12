export interface AlarmManagerProps {
  id: number;
  time: string;
  label: string;
  setAlarmTriggered: (isTriggered: boolean) => void;
}

export interface AlarmEditFormProps {
  alarm: AlarmManagerProps;
  onUpdate: (id: number, time: string, label: string) => void;
  onCancel: () => void;
}

export interface AlarmFormProps {
  addAlarm: (time: string, label: string) => void;
}

export interface ClockProps {
  alarmTriggered: boolean;
  stopAlarm: () => void;
}

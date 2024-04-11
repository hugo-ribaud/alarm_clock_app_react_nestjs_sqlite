export interface AlarmManagerProps {
  id: number;
  time: string;
  label: string;
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
  onAddAlarmClick?: () => void;
}

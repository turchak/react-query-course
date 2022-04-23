import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import * as React from 'react';
import { isOfTypeStatus, Status } from 'types';
import { statuses } from './helpers';

type StatusSelectProps = {
  status: Status | null;
  setStatus: (value: Status | null) => void;
};

export default function StatusSelect({ status, setStatus }: StatusSelectProps) {
  const handleChange = (event: SelectChangeEvent<Status | 'default'>) => {
    if (isOfTypeStatus(event.target.value)) {
      setStatus(event.target.value);
    } else {
      setStatus(null);
    }
  };
  return (
    <Box sx={{ minWidth: 120, marginTop: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="status">Status</InputLabel>
        <Select
          labelId="status"
          label="Status"
          value={status || 'default'}
          onChange={handleChange}
        >
          <MenuItem value="default">Select status</MenuItem>
          {statuses.map((status) => (
            <MenuItem key={status.id} value={status.id}>
              {status.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

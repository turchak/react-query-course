import * as React from 'react';
import { useLabelsData } from 'hooks/useLabelsData';
import { Box, CircularProgress } from '@mui/material';
import { Label } from 'components';
import { Label as LabelType } from 'types';

type LabelListProps = {
  labels: LabelType[];
  setLabels: (value: LabelType[]) => void;
};

export default function LabelList({ labels, setLabels }: LabelListProps) {
  const labelsQuery = useLabelsData();
  if (labelsQuery.isLoading) return <CircularProgress size={10} />;

  const handleClick = (value: LabelType) => {
    if (!labels.includes(value)) {
      setLabels([...labels, value]);
    } else {
      setLabels(labels.filter((label) => label.id !== value.id));
    }
  };
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {labelsQuery.isSuccess &&
        labelsQuery.data.map((label) => (
          <Label
            key={label.id}
            value={label.id}
            onClick={handleClick}
            active={labels.includes(label)}
          />
        ))}
    </Box>
  );
}

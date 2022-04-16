import * as React from 'react';
import { useLabelsData } from 'hooks/useLabelsData';
import { Box, CircularProgress } from '@mui/material';
import { Label } from 'components';
import { Label as LabelType } from 'types';

type LabelListProps = {
  selected: LabelType[];
  setSelected: (value: LabelType[]) => void;
};

export default function LabelList({ selected, setSelected }: LabelListProps) {
  const labelsQuery = useLabelsData();
  if (labelsQuery.isLoading) return <CircularProgress size={10} />;
  console.log(selected);
  const handleClick = (value: LabelType) => {
    if (!selected.includes(value)) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((label) => label.id !== value.id));
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
            active={selected.includes(label)}
          />
        ))}
    </Box>
  );
}

import * as React from 'react';
import { Chip } from '@mui/material';
import { useLabelsData } from 'hooks/useLabelsData';
import { Label as LabelType } from 'types';

type LabelProps = {
  value: string;
  active?: boolean;
  onClick?: (label: LabelType) => void;
};

export default function Label({ value, onClick, active = false }: LabelProps) {
  const labelsQuery = useLabelsData();
  if (labelsQuery.isLoading) return null;
  const label = labelsQuery.isSuccess
    ? labelsQuery.data.find((label) => label.id === value)
    : null;
  if (!label) return null;

  const handleClick = () => {
    console.log(label);
    onClick && onClick(label);
  };
  return (
    <Chip
      label={value}
      color={label.color}
      clickable
      variant={active ? 'filled' : 'outlined'}
      onClick={handleClick}
    />
  );
}

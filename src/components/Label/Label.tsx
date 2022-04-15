import * as React from 'react';
import { Chip } from '@mui/material';
import { useLabelsData } from 'hooks/useLabelsData';

type LabelProps = {
  value: string;
};

export default function Label({ value }: LabelProps) {
  const labelsQuery = useLabelsData();
  if (labelsQuery.isLoading) return null;
  const label = labelsQuery.data?.find((label) => label.id === value);
  if (!label) return null;
  return <Chip label={value} color={label.color} />;
}

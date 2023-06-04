import * as React from 'react';
import { IssueItem } from 'components';
import { Issue, Label, Status } from 'types';
import { Box, CircularProgress, TextField, Typography } from '@mui/material';
import { useIssuesData, useSearch } from 'hooks';

type IssuesListProps = {
  labels: Label[];
  status: Status | null;
};

export default function IssuesList({ labels, status }: IssuesListProps) {
  const [search, setSearch] = React.useState<string>('');
  const searchQuery = useSearch(search);
  const issuesQuery = useIssuesData({ labels, status });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem('search') as HTMLInputElement;
    setSearch(input.value);
  };

  const isLoading = issuesQuery.isLoading || (searchQuery.isLoading && searchQuery.fetchStatus !== 'idle');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Search"
            name="search"
            color="primary"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.currentTarget.value === '') setSearch('');
            }}
          />
        </form>
      </Box>
      {isLoading && <CircularProgress sx={{ alignSelf: 'center' }} />}
      {!!search
        ? searchQuery.isSuccess && (
            <>
              <Typography variant="body2">Result: {searchQuery.data.count} issues</Typography>
              {searchQuery.data.items.map((issue: Issue) => (
                <IssueItem key={issue.id} {...issue} />
              ))}
            </>
          )
        : issuesQuery.isSuccess && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {issuesQuery.data.map((issue: Issue) => (
                <IssueItem key={issue.id} {...issue} />
              ))}
            </Box>
          )}
    </Box>
  );
}

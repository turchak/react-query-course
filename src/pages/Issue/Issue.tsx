import * as React from 'react';
import { Page } from 'layouts';
import { useParams } from 'react-router';
import { useIssueData } from 'hooks';
import { Box, CircularProgress } from '@mui/material';
import { IssueHeader, Comment } from 'components';
import { useIssueComments } from 'hooks';
import { useSearchParams } from 'react-router-dom';

export default function Issue() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id = '' } = useParams<{ id: string }>();
  console.log(searchParams.get('req'));
  React.useEffect(() => {
    setSearchParams({ req: '12' });
  }, [setSearchParams]);

  const issueQuery = useIssueData(id);
  const commentsQuery = useIssueComments(id);

  return (
    <Page>
      {issueQuery.isLoading && <CircularProgress size={10} />}
      {issueQuery.isSuccess && (
        <Box>
          <IssueHeader {...issueQuery.data} />
        </Box>
      )}
      {issueQuery.isLoading && <CircularProgress size={10} />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          marginTop: 2,
        }}
      >
        {commentsQuery.isSuccess && commentsQuery.data.map((comment: any) => <Comment key={comment.id} {...comment} />)}
      </Box>
    </Page>
  );
}

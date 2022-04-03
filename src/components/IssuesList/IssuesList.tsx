// import { IssueItem } from 'components';
import { IssueItem } from 'components';
import * as React from 'react';
import { useQuery } from 'react-query';
import { Issue } from 'types';

export default function IssuesList() {
  const issuesQuery = useQuery(['issues'], () =>
    fetch('http://localhost:8000/api/issues').then((response) =>
      response.json()
    )
  );
  console.log(issuesQuery.data);
  console.log(issuesQuery.error);
  return (
    <section>
      <h2>Issues list</h2>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {issuesQuery.data?.map((issue: Issue) => (
            <IssueItem key={issue.id} title={issue.title} />
          ))}
        </ul>
      )}
    </section>
  );
}

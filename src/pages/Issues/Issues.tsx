import * as React from 'react';
import { IssuesList } from 'components';

export default function Issues() {
  console.log('mount');
  return (
    <section>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList />
        </section>
        <aside>LabelList</aside>
      </main>
    </section>
  );
}

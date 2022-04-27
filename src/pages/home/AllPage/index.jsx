import React from 'react';
import { Ideas } from 'pages/home/IdeasPage/Ideas';
import { ComponentMyProject } from '../ComponentMyProject';

export const AllPage = () => {
  return (
    <section className="p-3 pl-5 space-y-1">
      <ComponentMyProject status="onboard" />
      <Ideas />
      <ComponentMyProject status="running" />
      <ComponentMyProject status="done" />
      <ComponentMyProject status="in use" />
    </section>
  );
};

import React from 'react';

import CenterPanel from '../centerPanel/centerPanel'
import RightPanel from '../rightPanel/rightPanel'
import LeftPanel from '../leftPanel/leftPanel'

function AppHub() {
  return (
    <div style={{
      display: 'flex',
      border: '1px solid black',
      height: '100%'
    }}>
      <LeftPanel/>
      <CenterPanel/>
      <RightPanel/>
    </div>
  );
}

export default AppHub;
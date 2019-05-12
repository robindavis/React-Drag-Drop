import React from 'react';

import LeftPanelButton from './leftPanelButton/leftPanelButton'

function LeftPanel() {
  return (
    <div
     style={{
        display: 'flex',
        flex:'0.5',
        border: '1px solid black',
        flexDirection: 'column',
        overflow: 'auto',
        alignItems:'center'

      }}>
      {
        [1,2,3,4,5,6,7,8,9,10].map((value,index)=>
          <LeftPanelButton key={index} itemNumber={value}/>
          ) 
      }
      </div>
    );
}

export default LeftPanel;
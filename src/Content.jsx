import Paper from '@material-ui/core/Paper';
import React from 'react';


function Content() {
  return <div className="content-wrapper">
      <Paper style={{ width: '80%', height: '1200px', marginTop: '-30px' }} elevation="15" />
      <style>{`
        .content-wrapper {
          display: flex;
          position: relative;
          top: 0; 
          left: 0;
          align-items: center;
          justify-content: center;
          background-color: #282c34;
        }
      `}</style>
    </div>;
}

export default Content;
import Typography from '@material-ui/core/Typography';
import React from 'react';

function Banner() {
  return (
    <div className='banner-wrapper'>
    <div className='greeting'>
      <Typography variant='h4' style={{color: 'white'}}>
        Looking for a Web Developer?
      </Typography>
    </div>
      <style>{`
      .greeting {
        display: flex;
        height: 250px;
        width: 500px;
        margin-left: 7%;
        color: white;
        font-family: Roboto, sans-serif;
        align-items: center;
        font-size: 2rem;
      }

      `}</style>
    </div>
  )
}




export default Banner;
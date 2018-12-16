import Typography from '@material-ui/core/Typography';
import React from 'react';

function Banner() {
  return (
    <div className='banner-wrapper'>
    <div className='greeting'>
      <Typography variant='h4' style={{width: '60%', color: 'white', fontSize: 'calc(22px + 3vw)', textAlign: 'left', fontWeight: 'bold'}}>
        Looking for a web developer?
      </Typography>
        <Typography variant='h6' style={{ width: '70%', color: 'white', textAlign:'left', marginTop: '3%'}}>
        I'm an up and coming developer based in the Seattle area. I have full-stack experience with a preference for the Frontend. I want to help your company make it's next great app.
      </Typography>
    </div>
      <style>{`
      .greeting {
        display: flex;
        height: 250px;
        width: 100%;
        margin-left: 6%;
        color: white;
        font-family: Roboto, sans-serif;
        flex-direction: column;
      }

      `}</style>
    </div>
  )
}




export default Banner;
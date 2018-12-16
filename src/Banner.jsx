import React from 'react';

function Banner() {
  return (
    <div className='banner-wrapper'>
    <div className='greeting'>
      <p>
        Looking for a Web Developer?
      </p>
    </div>
      <style>{`
      .greeting {
        display: flex;
        height: 250px;
        width: 500px;
        margin-left: 90px;
        color: white;
        font-family: Roboto, sans-serif;
        font-size: 2rem;
      }

      `}</style>
    </div>
  )
}




export default Banner;
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import SkillCard from './SkillCard';

function Content() {
  return <div className="content-wrapper">
      <Paper style={{ width: '97%', height: '1200px', marginTop: '-30px' }} elevation="15">
        <div className='content-header'>
          <Typography variant='h3' style={{fontWeight: 'bold', color: '#3C4858'}}>Skills</Typography>
          <Typography variant='h6' style={{color: '#3C4858', paddingTop: '20px'}}>Here are some of my many skills that will soon be paying the bills.</Typography>
        </div>
        <div className='skills-wrapper'>
          <SkillCard icon='question_answer' header='Communication' text="Excellent communication is critical to the success of a team. I ask as many questions as necessary, and I use tools like Slack to make sure we're always on the same page."/>
          <SkillCard icon='today' header='Organization' text='I understand the importance of proper organization. I have experience using apps such as Trello to help track, organize, and prioritize tasks and keep projects under control. '/>
          <SkillCard icon='build' header='Development' text='I believe in the importance of facilitating excellent communication between a team. I ask as many questions as necesary.'/>
          <SkillCard icon='timeline' header='Project Management' text='I believe in the importance of facilitating excellent communication between a team. I ask as many questions as necesary.'/>
          <SkillCard icon='access_time' header='Time Keeping' text='I believe in the importance of facilitating excellent communication between a team. I ask as many questions as necesary.'/>
          <SkillCard icon='chrome_reader_mode' header='Documentation' text='I believe in the importance of facilitating excellent communication between a team. I ask as many questions as necesary.'/>

        </div>
      </Paper>
      <style>{`
        .content-wrapper {
          display: flex;

          position: relative;
          top: 0; 
          left: 0;
          align-items: center;
          justify-content: center;
          background-color: #282c34;
          color: #3C4858;
        }

        .content-header {
          justify-content: center;
          padding-top: 70px;
          padding-bottom: 20px;
        }

        .skills-wrapper {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          width: 93%;
          align-items: center;
          justify-content: center;
          margin: auto;
        }
      `}</style>
    </div>;
}

export default Content;
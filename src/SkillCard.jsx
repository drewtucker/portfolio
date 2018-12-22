import { Card, Typography } from '@material-ui/core';
import React from 'react';

export default class SkillCard extends React.Component {
  render() {
    const {
      icon,
      header,
      text
    } = this.props;
    return (
      <Card style={{maxWidth: '33%', minWidth: '300px', height: '280px', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-evenly', border: 'none', boxShadow: '0px 0px 0px 0px' }}>
        <i className='material-icons' style={{height: '61px', width: '61px', fontSize:'4rem', color: 'dodgerblue'}}>{icon}</i>
        <Typography variant='h6' style={{fontWeight: 'bold'}}>{header}</Typography>
        <Typography variant='p'>{text}</Typography>
      </Card>
    )
  }
}

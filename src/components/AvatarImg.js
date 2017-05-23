import React from 'react';

const avatarStyle = {
  maxHeight: '120px',
  maxWidth: '120px',
  marginTop: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '20px'
}

const AvatarImg = (props) => {
  return (
    <div style={{position: 'relative'}}>
      <img src={props.playerData.competitive.overall_stats.avatar} alt="Player Avatar" style={avatarStyle} className='img-rounded' />
    </div>
  )
}

export default AvatarImg

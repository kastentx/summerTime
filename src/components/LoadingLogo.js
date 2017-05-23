import React from 'react';
import owLogo from '../../img/cleanLogo.png';

const logoStyle = {
  maxHeight: '120px',
  maxWidth: '120px',
  display: 'inline',
  marginTop: '20px'
}

const LoadingLogo = (props) => {
  return (
    props.loading ?
      <img className="spinning-logo" src={owLogo} alt="Overwatch logo" style={logoStyle}/> :
      <img src={owLogo} alt="Overwatch logo" style={logoStyle}/>
  )
}

export default LoadingLogo

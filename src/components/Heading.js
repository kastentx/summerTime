import React from 'react'

const Heading = (props) => {
  return (
    <div style={{backgroundColor: '#242424', color: '#0bff00', textAlign: 'center', padding: '10px'}}>
      {props.children}
    </div>
  )
}

export default Heading;

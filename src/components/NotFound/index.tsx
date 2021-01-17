import React from 'react';

import notFoundIcon from '../../assets/not-found.png';

const NotFound: React.FC = () => {
  
  const style: React.CSSProperties = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column'
  }

  return (
    <div style={style}>
      <img src={notFoundIcon} width={200} alt=""/>
      <h5>Pokemon not Found!</h5>
    </div>
  )
}

export default NotFound;
import React from 'react';

import loading from '../../assets/char-loading.gif';

const Loading: React.FC = () => {

  const style: React.CSSProperties = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
  }

  return (
    <div style={style}>
      <img src={loading} width={200} alt=""/>
    </div>
  )
}

export default Loading;
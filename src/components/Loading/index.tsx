import React from 'react';

import './styles.css'
import loading from '../../assets/char-loading.gif';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <img src={loading} width={200} alt=""/>
    </div>
  )
}

export default Loading;
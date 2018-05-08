import React from 'react';
import './loading.scss'

class Loading extends React.Component {
  render() {
    return (
      <div className="base">
        <div className="cube"></div>
        <div className="cube" style={{visibility: 'hidden'}}></div>
        <div className="cube" style={{visibility: 'hidden'}}></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube" style={{visibility: 'hidden'}}></div>
        <div className="cube" style={{visibility: 'hidden'}}></div>
      </div>
    )
  }
}

export default Loading;


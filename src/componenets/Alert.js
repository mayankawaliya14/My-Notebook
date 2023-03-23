import React from 'react'

const Alert = (props) => {
  
    const capitalize = (word) => {
      if (word==="danger"){
        word = "error"
      }
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
      <div style={{height:'60px'}}>
        {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.Alert.type)}</strong>: {props.Alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
  </div>}
      </div>
      
    )
  }

export default Alert

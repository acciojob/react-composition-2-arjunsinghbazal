
import React from "react";

const New = ({ value, current }) => {
  return (
    current ? (<div onClick={(e)=>{e.stopPropagation()}}>
      <div className="modal-overlay">
        <button className="modal-close" onClick={value}>Close</button>
        <p>This is modal content</p>
      </div></div>
    ) : null
  );
}

export default New;

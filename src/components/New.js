
import React from "react";

const New = ({ value, current }) => {
  return (
    current ? (<div onClick={value}>
      <div className="modal-overlay">
        <button className="modal-close" onClick={value}>Close</button>
        <p>This is the content of the modal.</p>
      </div></div>
    ) : null
  );
}

export default New;

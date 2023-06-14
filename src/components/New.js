
import React from "react";

const New = ({ value, current }) => {
  return (
    current ? (
      <div className="modal-overlay" onClick={value}>
        <button className="modal-close" onClick={value}>Close</button>
        <p>This is the content of the modal.</p>
      </div>
    ) : null
  );
}

export default New;

import React from "react";

const New=({value,current})=>{
return(current?(<div className="model-overlay"><button className="model-close" onClick={value}>Close</button>
<p>This is content modal </p></div>):null)}

export default New;
// import React from "react";

// const New = ({ value, current }) => {
//   return (
//     current ? (
//       <div className="model-overlay">
//         <button className="model-close" onClick={value}>Close</button>
//         <p>This is modal content</p>
//       </div>
//     ) : null
//   );
// }

// export default New;

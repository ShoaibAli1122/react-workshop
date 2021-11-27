// import React, { Component, useState } from "react";

// function AboutChild() {
//   // const [state, setstate] = useState(initialState)
//   return (
//     <div>
//       Child cities are: 
//     </div>
//   );
// }

// export default AboutChild;

import React from 'react'

function AboutChild({nickname,citynames,sumfun}) {

  sumfun();
  return (
    <div>
      <p>My name is: {nickname}</p>
      <p>{citynames}</p>
    </div>
  )
}

export default AboutChild

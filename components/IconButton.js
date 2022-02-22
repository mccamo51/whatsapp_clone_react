import React from "react";
import { IconButton } from "@mui/material";

function IconButtonElement({icon}) {
  return <div className="md:mr-[1w] lg:mr-[2wv]">
       <IconButton>
           {icon}
         </IconButton>
  </div>;
}

export default IconButtonElement;

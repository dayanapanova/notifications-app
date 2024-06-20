import React from "react";

export const AddIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6z"></path>
    </svg>
  );
}


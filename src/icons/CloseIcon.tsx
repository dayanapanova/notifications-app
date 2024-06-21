import React from "react";

export const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}


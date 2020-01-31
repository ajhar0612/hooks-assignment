import React from "react";

export default function SizeContainer({ type, children }) {
  const size = {
    sm: "320px",
    md: "720px",
    lg: "1140px"
  }
  return <div style={{ maxWidth: size[type] }}>{children}</div>;
}

import React from "react";

function Page(props) {
  return (
    <div className="page">
      <div className="page-content">{props.children}</div>
    </div>
  );
}

export default Page;

import React from "react";

function Page(props) {
  return (
    <div className="Page">
      <div className="Page__content">{props.children}</div>
    </div>
  );
}

export default Page;

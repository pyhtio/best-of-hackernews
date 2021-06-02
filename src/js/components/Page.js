import React from "react";

function Page(props) {
  return (
    <div className="Page">
      <div className="Page__content">
        <header>
          <h1>My Amazing Hacker News portal</h1>
        </header>

        {props.children}
      </div>
    </div>
  );
}

export default Page;

import React from "react";

import { Link } from "react-router-dom";

function BackButton({ route }) {
  return (
    <nav className="BackButton">
      <Link to={route}>Back</Link>
    </nav>
  );
}

export default BackButton;

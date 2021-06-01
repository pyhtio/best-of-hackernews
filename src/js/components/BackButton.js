import React from "react";

import { Link } from "react-router-dom";

function BackButton({ route }) {
  return (
    <nav class="BackButton">
      <Link to={route}>Back</Link>
    </nav>
  );
}

export default BackButton;

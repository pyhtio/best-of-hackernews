import React from "react";

import { humanReadableTimestamp } from "../utils/helpers";

function UserCard({ user }) {
  return (
    <div className="UserCard">
      <h4>User details:</h4>
      <h1>{user.id}</h1>
      <dl>
        <dt>Join date</dt>
        <dd>{humanReadableTimestamp(user.created)}</dd>
        <dt>Karma</dt>
        <dd>{user.karma}</dd>
        <dt>Posts</dt>
        <dd>
          {typeof user.submitted === "object" ? user.submitted.length : ""}
        </dd>
      </dl>
    </div>
  );
}

export default UserCard;

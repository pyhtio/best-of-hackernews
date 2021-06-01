import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { Link, useParams } from "react-router-dom";

import Loader from "../components/Loader";

function UserProfile() {
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  const storageKey = `user-${id}`;

  useEffect(() => {
    const cachedData = sessionStorage.getItem(storageKey);
    if (cachedData) {
      setUserData(JSON.parse(cachedData));
    } else {
      fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
        .then((response) => response.json())
        .then((result) => {
          setUserData(result);
          sessionStorage.setItem(storageKey, JSON.stringify(result));
        });
    }
  }, []);

  return (
    <Page>
      <nav>
        <Link to="/">Back</Link>
      </nav>

      {Object.keys(userData).length === 0 && <Loader />}

      {"created" in userData && (
        <main className="UserProfile">
          <h4>User details:</h4>
          <h1>{id}</h1>
          <dl>
            <dt>Karma</dt>
            <dd>{userData.karma}</dd>
            <dt>Join date</dt>
            <dd>{userData.created}</dd>
            <dt>Posts</dt>
            <dd>
              {typeof userData.submitted === "object"
                ? userData.submitted.length
                : ""}
            </dd>
          </dl>
        </main>
      )}
    </Page>
  );
}

export default UserProfile;
